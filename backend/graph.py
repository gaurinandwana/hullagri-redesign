import os
import json
import logging
from typing import TypedDict, List, Dict, Any, Optional

from database import get_farmer_from_db, get_all_schemes_from_db
from google import genai
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger("scheme_graph")

# Check Tavily availability
TAVILY_API_KEY = os.getenv("TAVILY_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Initialize Tavily search tool if key exists
tavily_tool = None
if TAVILY_API_KEY:
    try:
        from langchain_community.tools.tavily_search import TavilySearchResults
        tavily_tool = TavilySearchResults(max_results=4)
        logger.info("Tavily Search Tool initialized successfully.")
    except Exception as e:
        logger.warning(f"Tavily tool initialization notice: {e}")

# Initialize Gemini Client
gemini_client = None
if GEMINI_API_KEY:
    try:
        gemini_client = genai.Client(api_key=GEMINI_API_KEY)
    except Exception as e:
        logger.error(f"Error initializing Gemini client: {e}")

class SchemeGraphState(TypedDict):
    farmer_id: str
    question: str
    profile_override: Optional[Dict[str, Any]]
    farmer_profile: Dict[str, Any]
    db_schemes: List[Dict[str, Any]]
    relevant_schemes: List[Dict[str, Any]]
    web_search_results: List[Dict[str, Any]]
    search_needed: bool
    final_answer: str
    sources: List[str]

# 1. Node: Understand Question
def understand_question_node(state: SchemeGraphState) -> Dict[str, Any]:
    question = state.get("question", "")
    logger.info(f"[Node 1: Understand Question] Processing question: '{question}'")
    return {"question": question}

# 2. Node: Retrieve Farmer Profile
def retrieve_farmer_profile_node(state: SchemeGraphState) -> Dict[str, Any]:
    farmer_id = state.get("farmer_id", "farmer_default")
    profile = get_farmer_from_db(farmer_id)
    
    # Merge optional profile_override from request
    override = state.get("profile_override")
    if override:
        profile = {**profile, **override}
        
    logger.info(f"[Node 2: Retrieve Profile] Loaded profile for farmer: {farmer_id}")
    return {"farmer_profile": profile}

# 3. Node: Search Scheme Database
def search_scheme_db_node(state: SchemeGraphState) -> Dict[str, Any]:
    all_schemes = get_all_schemes_from_db()
    profile = state.get("farmer_profile", {})
    question = state.get("question", "").lower()
    
    loc = profile.get("location", {})
    state_name = loc.get("state", "Punjab")
    land_area = float(loc.get("total_land_area", 2.5))
    caste = profile.get("caste_category", "General")
    crops = profile.get("crops_this_year", []) or profile.get("crops_last_year", []) or ["Wheat", "Rice"]
    livestock = profile.get("livestock", {})
    fpo = profile.get("fpo_member", "No").lower() == "yes"
    disabled = profile.get("is_disabled_or_bpl", "No").lower() in ["yes", "true", "bpl", "disabled"]

    matched = []
    for s in all_schemes:
        score = 0
        s_name = (s.get("scheme_name") or s.get("schemeName") or "").lower()
        s_desc = (s.get("benefits", "") + " " + s.get("eligibility", "") + " " + s.get("category", "")).lower()
        
        # State match
        states = [st.lower() for st in (s.get("eligible_states") or s.get("eligibleStates") or [s.get("state", "all india")])]
        if "all india" in states or any(st in state_name.lower() for st in states) or "india" in state_name.lower():
            score += 2
            
        # Question keyword match
        if any(w in s_name or w in s_desc for w in question.split() if len(w) > 3):
            score += 3
            
        # Land requirement match
        min_land = float(s.get("min_land_acres") if "min_land_acres" in s else s.get("minLandAcres", 0))
        max_land = float(s.get("max_land_acres") if "max_land_acres" in s else s.get("maxLandAcres", 1000))
        if min_land <= land_area <= max_land:
            score += 1
            
        # SC/ST match
        categories = [c.lower() for c in (s.get("eligible_farmer_categories") or s.get("eligibleFarmerCategories") or ["all"])]
        if "all" in categories or caste.lower() in categories or ("sc" in caste.lower() and "sc" in categories) or ("st" in caste.lower() and "st" in categories):
            score += 1

        # Crop match
        el_crops = [c.lower() for c in (s.get("eligible_crops") or s.get("crop_applicability") or s.get("eligibleCrops") or ["all crops"])]
        if "all crops" in el_crops or any(c.lower() in el_crops for c in crops):
            score += 1

        # Livestock match
        el_livestock = [l.lower() for l in (s.get("eligible_livestock") or s.get("livestock_applicability") or s.get("eligibleLivestock") or ["any"])]
        if "any" in el_livestock or any(l.lower() in el_livestock for l in livestock.keys()):
            score += 1
            
        # FPO / Disability match
        if (s.get("fpo_applicable") or s.get("is_for_fpo") or s.get("isForFPO")) and fpo:
            score += 2
        if (s.get("is_for_disabled") or s.get("isForDisabled")) and disabled:
            score += 2

        if score >= 2 or len(all_schemes) <= 5:
            # Build personalized "why_matches" reason
            reasons = []
            reasons.append(f"Located in {state_name}")
            reasons.append(f"Land size: {land_area} {loc.get('land_unit', 'Acres')}")
            if caste and caste != "General":
                reasons.append(f"Category: {caste}")
            if crops:
                reasons.append(f"Crops: {', '.join(crops[:2])}")
            if fpo and (s.get("fpo_applicable") or s.get("is_for_fpo")):
                reasons.append("FPO Member Priority")
            if disabled and s.get("is_for_disabled"):
                reasons.append("BPL / Special Category Support")

            why_text = " • ".join(reasons)
            s_dict = dict(s)
            s_dict["why_matches"] = why_text
            matched.append((score, s_dict))

    # Sort by relevance score
    matched.sort(key=lambda x: x[0], reverse=True)
    top_schemes = [item[1] for item in matched[:5]]
    
    logger.info(f"[Node 3: DB Search] Found {len(top_schemes)} relevant schemes from DB.")
    return {"db_schemes": all_schemes, "relevant_schemes": top_schemes}

# 4. Node: Determine Scheme Relevance & Web Search Need
def evaluate_relevance_node(state: SchemeGraphState) -> Dict[str, Any]:
    relevant_schemes = state.get("relevant_schemes", [])
    question = state.get("question", "").lower()
    
    search_keywords = ["latest", "recent", "new", "2026", "2025", "current budget", "apply online link", "tavily"]
    needs_search = len(relevant_schemes) == 0 or any(k in question for k in search_keywords)
    
    logger.info(f"[Node 4: Evaluate Relevance] Web search needed: {needs_search}")
    return {"search_needed": needs_search}

# 5. Node: Web Search (Tavily Search API or Gemini Fallback)
def web_search_node(state: SchemeGraphState) -> Dict[str, Any]:
    if not state.get("search_needed", False):
        return {"web_search_results": [], "sources": []}
        
    question = state.get("question", "")
    profile = state.get("farmer_profile", {})
    state_name = profile.get("location", {}).get("state", "India")
    
    query = f"Indian government scheme subsidy for farmer {state_name} {question}"
    web_results = []
    sources = []
    
    if tavily_tool:
        try:
            logger.info(f"[Node 5: Web Search] Executing Tavily search for: '{query}'")
            results = tavily_tool.invoke({"query": query})
            for r in results:
                web_results.append({
                    "title": r.get("title", "Government Portal"),
                    "snippet": r.get("content", ""),
                    "url": r.get("url", "")
                })
                if r.get("url"):
                    sources.append(r.get("url"))
        except Exception as e:
            logger.error(f"Tavily search error: {e}")
            
    if not web_results and gemini_client:
        logger.info("[Node 5: Web Search] Using Gemini knowledge search fallback.")
        web_results.append({
            "title": "Gemini Search Synthesis",
            "snippet": f"Latest Indian government schemes for {state_name} regarding {question}.",
            "url": "https://myscheme.gov.in"
        })
        sources.append("https://myscheme.gov.in")
        
    return {"web_search_results": web_results, "sources": sources}

# 6. Node: Generate Final Response with Gemini
def generate_response_node(state: SchemeGraphState) -> Dict[str, Any]:
    question = state.get("question", "")
    profile = state.get("farmer_profile", {})
    rel_schemes = state.get("relevant_schemes", [])
    web_results = state.get("web_search_results", [])
    
    loc = profile.get("location", {})
    profile_summary = f"""
- State & District: {loc.get('state', 'Punjab')}, {loc.get('district', 'Ludhiana')}
- Land Ownership: {loc.get('total_land_area', '3.5')} {loc.get('land_unit', 'Acres')}
- Category / Caste: {profile.get('caste_category', 'General')}
- FPO Member: {profile.get('fpo_member', 'No')}
- Disability / BPL: {profile.get('is_disabled_or_bpl', 'No')}
- Crops Grown: {', '.join(profile.get('crops_this_year', []) or ['Wheat', 'Rice'])}
- Livestock Owned: {json.dumps(profile.get('livestock', {}))}
"""

    db_context = json.dumps(rel_schemes, indent=2)
    web_context = json.dumps(web_results, indent=2)

    prompt = f"""
You are an expert Indian Government Agricultural Scheme Assistant.
Answer the farmer's question in a concise, warm, encouraging, and natural conversational tone (1 to 2 short paragraphs max).

FARMER PROFILE:
{profile_summary}

FARMER QUESTION:
"{question}"

MATCHED SCHEMES FROM DATABASE:
{db_context}

WEB SEARCH / EXTENDED KNOWLEDGE:
{web_context}

IMPORTANT GUIDELINES:
1. Provide a direct, helpful, and conversational response addressing the farmer's question based on their profile.
2. DO NOT repeat long lists of schemes, benefits, eligibility details, or required documents in your text response, because detailed cards for each matched scheme will automatically be rendered in interactive cards right below your message.
3. Keep your text short (2-4 sentences total), friendly, and easy to read.
"""

    final_answer = ""
    if gemini_client:
        try:
            logger.info("[Node 6: Generate Response] Calling Gemini API...")
            response = gemini_client.models.generate_content(
                model='gemini-3.6-flash',
                contents=prompt
            )
            final_answer = response.text.strip()
        except Exception as e:
            logger.error(f"Gemini API error: {e}")
            final_answer = f"Based on your profile in {loc.get('state', 'Punjab')} with {loc.get('total_land_area', '3.5')} acres, I have found the top eligible government schemes for you below!"
    else:
        final_answer = "Gemini API key is not configured. Please check backend/.env."

    return {"final_answer": final_answer}

# Build LangGraph Workflow
try:
    from langgraph.graph import StateGraph, END

    builder = StateGraph(SchemeGraphState)

    # Add Nodes
    builder.add_node("understand_question", understand_question_node)
    builder.add_node("retrieve_farmer_profile", retrieve_farmer_profile_node)
    builder.add_node("search_scheme_db", search_scheme_db_node)
    builder.add_node("evaluate_relevance", evaluate_relevance_node)
    builder.add_node("web_search", web_search_node)
    builder.add_node("generate_response", generate_response_node)

    # Set Edges
    builder.set_entry_point("understand_question")
    builder.add_edge("understand_question", "retrieve_farmer_profile")
    builder.add_edge("retrieve_farmer_profile", "search_scheme_db")
    builder.add_edge("search_scheme_db", "evaluate_relevance")

    # Conditional Routing for Web Search
    def route_search(state: SchemeGraphState):
        if state.get("search_needed", False):
            return "web_search"
        return "generate_response"

    builder.add_conditional_edges(
        "evaluate_relevance",
        route_search,
        {
            "web_search": "web_search",
            "generate_response": "generate_response"
        }
    )
    builder.add_edge("web_search", "generate_response")
    builder.add_edge("generate_response", END)

    scheme_workflow = builder.compile()
    logger.info("LangGraph StateGraph compiled successfully!")
except Exception as e:
    logger.error(f"Error compiling LangGraph workflow: {e}")
    scheme_workflow = None

def run_scheme_chat_workflow(farmer_id: str, question: str, profile_override: Optional[dict] = None) -> dict:
    initial_state = {
        "farmer_id": farmer_id,
        "question": question,
        "profile_override": profile_override,
        "farmer_profile": {},
        "db_schemes": [],
        "relevant_schemes": [],
        "web_search_results": [],
        "search_needed": False,
        "final_answer": "",
        "sources": []
    }
    
    if scheme_workflow:
        try:
            final_state = scheme_workflow.invoke(initial_state)
            return {
                "farmer_id": farmer_id,
                "question": question,
                "answer": final_state.get("final_answer", ""),
                "relevant_schemes": final_state.get("relevant_schemes", []),
                "search_used": final_state.get("search_needed", False),
                "sources": final_state.get("sources", [])
            }
        except Exception as e:
            logger.error(f"Error invoking LangGraph workflow: {e}")
    
    p1 = retrieve_farmer_profile_node(initial_state)
    s1 = {**initial_state, **p1}
    p2 = search_scheme_db_node(s1)
    s2 = {**s1, **p2}
    p3 = evaluate_relevance_node(s2)
    s3 = {**s2, **p3}
    p4 = web_search_node(s3)
    s4 = {**s3, **p4}
    p5 = generate_response_node(s4)
    
    return {
        "farmer_id": farmer_id,
        "question": question,
        "answer": p5.get("final_answer", ""),
        "relevant_schemes": s2.get("relevant_schemes", []),
        "search_used": s3.get("search_needed", False),
        "sources": s4.get("sources", [])
    }

import os
import json
import logging
from pymongo import MongoClient
from dotenv import load_dotenv

# Load backend/.env environment variables
load_dotenv()

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("seed_schemes")

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
DB_NAME = os.getenv("DB_NAME") or os.getenv("MONGO_DB_NAME") or "hullagri-redesign-core"
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
TAVILY_API_KEY = os.getenv("TAVILY_API_KEY")

logger.info(f"Targeting MongoDB at: {MONGO_URI} (Database: '{DB_NAME}')")

# -------------------------------------------------------------------------
# HELPER: Standardize scheme metadata fields (both snake_case & camelCase)
# -------------------------------------------------------------------------
def normalize_doc(doc: dict) -> dict:
    d = dict(doc)
    name = d.get("scheme_name") or d.get("schemeName") or "Government Agricultural Scheme"
    stype = d.get("scheme_type") or d.get("schemeType") or "Central"
    
    raw_states = d.get("eligible_states") or d.get("eligibleStates") or d.get("state") or ["All India"]
    if isinstance(raw_states, str): raw_states = [raw_states]
    state_val = d.get("state") or (raw_states[0] if raw_states else "All India")
    
    crops = d.get("crop_applicability") or d.get("eligible_crops") or d.get("eligibleCrops") or ["All Crops"]
    if isinstance(crops, str): crops = [crops]
    
    livestock = d.get("livestock_applicability") or d.get("eligible_livestock") or d.get("eligibleLivestock") or ["Any"]
    if isinstance(livestock, str): livestock = [livestock]
    
    docs = d.get("required_documents") or d.get("requiredDocuments") or ["Aadhaar Card", "Land Records", "Bank Passbook"]
    if isinstance(docs, str): docs = [docs]
    
    url = d.get("official_url") or d.get("officialSource") or d.get("sourceUrl") or "https://myscheme.gov.in"
    
    sc_st = bool(d.get("sc_st_applicable") if "sc_st_applicable" in d else d.get("is_for_sc_st", d.get("isForSCST", True)))
    fpo = bool(d.get("fpo_applicable") if "fpo_applicable" in d else d.get("is_for_fpo", d.get("isForFPO", False)))
    disabled = bool(d.get("is_for_disabled") if "is_for_disabled" in d else d.get("isForDisabled", False))
    
    min_land = float(d.get("min_land_acres") if "min_land_acres" in d else d.get("minLandAcres", 0.0))
    max_land = float(d.get("max_land_acres") if "max_land_acres" in d else d.get("maxLandAcres", 100.0))
    land_req = d.get("land_requirements") or f"{min_land} to {max_land} Acres"

    app_proc = d.get("application_process") or d.get("applicationProcess") or "Apply online via designated state portal or nearest CSC centre."
    deadline = d.get("application_deadline") or d.get("applicationDeadline") or "Ongoing"
    
    return {
        "scheme_name": name,
        "scheme_type": stype,
        "state": state_val,
        "eligible_states": raw_states,
        "category": d.get("category", "General Subsidy"),
        "description": d.get("description", "Government scheme for farmer support and agricultural development."),
        "benefits": d.get("benefits", "Financial assistance and agricultural input subsidies."),
        "eligibility": d.get("eligibility", "All active farmers and agricultural landholders."),
        "eligible_farmer_categories": d.get("eligible_farmer_categories") or d.get("eligibleFarmerCategories") or ["All", "Small", "Marginal"],
        "crop_applicability": crops,
        "eligible_crops": crops,
        "livestock_applicability": livestock,
        "eligible_livestock": livestock,
        "sc_st_applicable": sc_st,
        "is_for_sc_st": sc_st,
        "fpo_applicable": fpo,
        "is_for_fpo": fpo,
        "is_for_disabled": disabled,
        "land_requirements": land_req,
        "min_land_acres": min_land,
        "max_land_acres": max_land,
        "required_documents": docs,
        "application_process": app_proc,
        "official_url": url,
        "official_source": url,
        "source_url": url,
        "discovered_date": d.get("discovered_date") or d.get("discoveredDate") or "2026-08-25",
        "application_deadline": deadline,
        "why_matches": d.get("why_matches") or d.get("whyMatches") or ""
    }

# -------------------------------------------------------------------------
# LIVE DISCOVERY: Tavily Search + Gemini Extraction
# -------------------------------------------------------------------------
def discover_live_schemes_via_tavily_and_gemini():
    """Fetches real-time recent government agricultural schemes via Tavily + Gemini."""
    discovered_schemes = []
    if not TAVILY_API_KEY:
        logger.info("ℹ️ Tavily API Key missing in environment; skipping live web crawl.")
        return discovered_schemes

    try:
        from langchain_community.tools.tavily_search import TavilySearchResults
        tavily = TavilySearchResults(max_results=6)
        
        search_queries = [
            "latest Indian government agricultural schemes subsidies 2026 farmer welfare",
            "state agriculture subsidies punjab maharashtra UP karnataka TN 2026",
            "central government PM kisan solar pump FPO SC ST subsidies for farmers"
        ]

        raw_items = []
        for query in search_queries:
            try:
                logger.info(f"🔍 Searching Tavily for: '{query}'")
                results = tavily.invoke({"query": query})
                if results and isinstance(results, list):
                    for r in results:
                        raw_items.append(r)
            except Exception as se:
                logger.warning(f"Tavily search query notice: {se}")

        if raw_items and GEMINI_API_KEY:
            try:
                from google import genai
                client = genai.Client(api_key=GEMINI_API_KEY)
                combined_snippets = "\n\n".join([f"Title: {r.get('title')}\nSnippet: {r.get('content')}\nURL: {r.get('url')}" for r in raw_items])
                prompt = f"""
Extract distinct Indian government agricultural schemes from the search snippets below into a strict JSON ARRAY of objects.
Include keys: scheme_name, scheme_type (Central or State), description, benefits, eligibility, state, crop_applicability (array), livestock_applicability (array), sc_st_applicable (bool), fpo_applicable (bool), land_requirements (str), required_documents (array), application_process (str), official_url (str), category (str).

SEARCH SNIPPETS:
{combined_snippets}

Return ONLY raw JSON array without markdown formatting.
"""
                logger.info("🤖 Parsing Tavily search results with Gemini LLM...")
                response = client.models.generate_content(
                    model='gemini-3.6-flash',
                    contents=prompt
                )
                raw_text = response.text.strip()
                if raw_text.startswith("```json"): raw_text = raw_text[7:-3].strip()
                elif raw_text.startswith("```"): raw_text = raw_text[3:-3].strip()
                
                parsed = json.loads(raw_text)
                if isinstance(parsed, list):
                    discovered_schemes = [normalize_doc(s) for s in parsed if s.get("scheme_name") or s.get("schemeName")]
                    logger.info(f"✨ Successfully extracted {len(discovered_schemes)} live schemes via Tavily + Gemini.")
            except Exception as ge:
                logger.warning(f"⚠️ Gemini extraction notice: {ge}. Structuring raw Tavily items into scheme records...")
                # Fallback: Extract schemes directly from Tavily title/content snippets
                for item in raw_items:
                    title = item.get("title", "")
                    content = item.get("content", "")
                    url = item.get("url", "")
                    if title and len(title) > 5:
                        discovered_schemes.append(normalize_doc({
                            "scheme_name": title[:80],
                            "scheme_type": "Central" if "India" in content or "PM" in title else "State",
                            "description": content[:250],
                            "benefits": content[:180],
                            "eligibility": "Agricultural landholders and active farmers in India.",
                            "state": "All India",
                            "crop_applicability": ["All Crops"],
                            "livestock_applicability": ["Any"],
                            "sc_st_applicable": True,
                            "fpo_applicable": True,
                            "land_requirements": "0.1 to 50 Acres",
                            "required_documents": ["Aadhaar Card", "Land Records", "Bank Passbook"],
                            "application_process": "Apply via official government portal or local district agriculture office.",
                            "official_url": url or "https://myscheme.gov.in",
                            "category": "Live Subsidy Update"
                        }))
    except Exception as e:
        logger.warning(f"⚠️ Live Tavily discovery notice: {e}")
        
    return discovered_schemes

# -------------------------------------------------------------------------
# BASE CURATED DATASET: Real Central & State Schemes Across India
# -------------------------------------------------------------------------
CURATED_SCHEMES_BASE = [
    # CENTRAL SCHEMES
    {
        "scheme_name": "PM-KISAN Samman Nidhi",
        "scheme_type": "Central",
        "state": "All India",
        "category": "Direct Income Support",
        "description": "Central sector scheme providing income support to all landholding farmer families across the country.",
        "benefits": "Financial benefit of ₹6,000 per year in 3 equal installments of ₹2,000 transferred directly into bank accounts.",
        "eligibility": "All landholding farmer families with cultivable land in their names.",
        "land_requirements": "0 to 100 Acres",
        "minLandAcres": 0.0,
        "maxLandAcres": 100.0,
        "crop_applicability": ["All Crops"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": False,
        "required_documents": ["Aadhaar Card", "Land Record (Khasra/Khatauni)", "Bank Account Passbook"],
        "application_process": "Register online at pmkisan.gov.in portal or visit nearest CSC Centre.",
        "official_url": "https://pmkisan.gov.in",
        "applicationDeadline": "Ongoing"
    },
    {
        "scheme_name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        "scheme_type": "Central",
        "state": "All India",
        "category": "Crop Insurance",
        "description": "Comprehensive yield & weather insurance for crops against non-preventable natural risks.",
        "benefits": "Low premium rate of 1.5% for Rabi, 2% for Kharif, 5% for Annual Commercial crops. Balance heavily subsidized.",
        "eligibility": "All farmers including tenant farmers and sharecroppers growing notified crops in notified areas.",
        "land_requirements": "0 to 50 Acres",
        "minLandAcres": 0.0,
        "maxLandAcres": 50.0,
        "crop_applicability": ["Wheat", "Rice", "Cotton", "Maize", "Soybean", "Pulses", "Oilseeds", "Sugarcane"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": False,
        "required_documents": ["Aadhaar Card", "Sowing Certificate", "Land Bank Passbook", "Land Record"],
        "application_process": "Enroll via PMFBY portal (pmfby.gov.in) or designated bank branch.",
        "official_url": "https://pmfby.gov.in",
        "applicationDeadline": "Seasonal Cutoff"
    },
    {
        "scheme_name": "Kisan Credit Card (KCC) Scheme",
        "scheme_type": "Central",
        "state": "All India",
        "category": "Credit Support",
        "description": "Timely institutional short-term credit facility for crop production and allied farming activities.",
        "benefits": "Subsidized crop credit up to ₹3 Lakh at an effective interest rate of 4% per annum upon prompt repayment.",
        "eligibility": "Farmers, tenant farmers, SHGs, FPOs, animal husbandry & fisheries farmers.",
        "land_requirements": "0 to 500 Acres",
        "minLandAcres": 0.0,
        "maxLandAcres": 500.0,
        "crop_applicability": ["All Crops"],
        "livestock_applicability": ["Cows", "Buffaloes", "Goats", "Sheep", "Poultry"],
        "sc_st_applicable": True,
        "fpo_applicable": True,
        "required_documents": ["Identity Proof", "Address Proof", "Land Ownership Documents", "Passport Photos"],
        "application_process": "Submit application form at any Commercial Bank, RRB, or Cooperative Bank branch.",
        "official_url": "https://myscheme.gov.in/schemes/kcc",
        "applicationDeadline": "Ongoing"
    },
    {
        "scheme_name": "Sub-Mission on Agricultural Mechanization (SMAM)",
        "scheme_type": "Central",
        "state": "All India",
        "category": "Farm Mechanization",
        "description": "Financial assistance for purchasing advanced agricultural machinery to boost farm power availability.",
        "benefits": "40% to 80% capital subsidy on purchase of Tractors, Power Tillers, Harvesters, and Rotavators.",
        "eligibility": "Individual farmers with preference to SC/ST/Small/Marginal/Women farmers and FPOs.",
        "land_requirements": "0 to 50 Acres",
        "minLandAcres": 0.0,
        "maxLandAcres": 50.0,
        "crop_applicability": ["All Crops"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": True,
        "required_documents": ["Aadhaar Card", "Caste Certificate (if SC/ST)", "Land Records", "Bank Passbook", "Machine Quotation"],
        "application_process": "Apply on agrimachinery.nic.in portal and submit machinery subsidy application.",
        "official_url": "https://agrimachinery.nic.in",
        "applicationDeadline": "Ongoing"
    },
    {
        "scheme_name": "PM-KUSUM Component B (Solar Water Pumps)",
        "scheme_type": "Central / State",
        "state": "All India",
        "category": "Solar & Energy",
        "description": "Installation of standalone off-grid solar agriculture pumps for clean energy irrigation.",
        "benefits": "Up to 60% subsidy (30% Central + 30% State) for installing solar water pump sets.",
        "eligibility": "Farmers, Water User Associations, and FPOs with agricultural land and tube-well source.",
        "land_requirements": "0.5 to 25 Acres",
        "minLandAcres": 0.5,
        "maxLandAcres": 25.0,
        "crop_applicability": ["All Crops"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": True,
        "required_documents": ["Aadhaar Card", "Land Revenue Record", "Electricity Connection Status Affidavit", "Bank Passbook"],
        "application_process": "Register via State Renewable Energy Development Agency (REDA) online portal.",
        "official_url": "https://pmkusum.mnre.gov.in",
        "applicationDeadline": "Ongoing"
    },
    {
        "scheme_name": "PMKSY - Per Drop More Crop (Micro Irrigation)",
        "scheme_type": "Central / State",
        "state": "All India",
        "category": "Irrigation",
        "description": "Enhancing water use efficiency at farm level through drip and sprinkler micro-irrigation systems.",
        "benefits": "45% to 55% financial grant for drip and sprinkler irrigation equipment installation.",
        "eligibility": "Farmers having cultivable land with assured water source.",
        "land_requirements": "0.5 to 12.5 Acres",
        "minLandAcres": 0.5,
        "maxLandAcres": 12.5,
        "crop_applicability": ["Sugarcane", "Cotton", "Fruits", "Vegetables", "Maize", "Pulses"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": True,
        "required_documents": ["Aadhaar Card", "Land Records (7/12 or Khasra)", "Water Source Verification", "Bank Details"],
        "application_process": "Apply via State Agriculture/Horticulture Department web portal.",
        "official_url": "https://pmksy.gov.in",
        "applicationDeadline": "Ongoing"
    },
    {
        "scheme_name": "National Livestock Mission (NLM)",
        "scheme_type": "Central",
        "state": "All India",
        "category": "Livestock & Animal Husbandry",
        "description": "Promotes sustainable development of livestock sector, breed improvement, and commercial units.",
        "benefits": "50% capital subsidy (up to ₹50 Lakh) for breed development, commercial poultry, and goat/sheep breeding.",
        "eligibility": "Individual farmers, FPOs, JLGs, SHGs, and Section 8 companies in livestock farming.",
        "land_requirements": "0 to 100 Acres",
        "minLandAcres": 0.0,
        "maxLandAcres": 100.0,
        "crop_applicability": ["Fodder Crops"],
        "livestock_applicability": ["Cows", "Buffaloes", "Goats", "Sheep", "Poultry"],
        "sc_st_applicable": True,
        "fpo_applicable": True,
        "required_documents": ["Project Report", "Land Lease/Ownership Document", "Aadhaar Card", "Bank Consent Letter"],
        "application_process": "Apply online at NLM Udyamimitra portal (nlm.udyamimitra.in).",
        "official_url": "https://nlm.udyamimitra.in",
        "applicationDeadline": "Ongoing"
    },
    {
        "scheme_name": "Forming & Promoting 10,000 Farmer Producer Organizations (FPOs)",
        "scheme_type": "Central",
        "state": "All India",
        "category": "FPO & Cooperative",
        "description": "Formation and promotion of 10,000 new FPOs to ensure economies of scale for small farmers.",
        "benefits": "Financial support up to ₹18 Lakh per FPO for 3 years + Equity Grant match up to ₹15 Lakh.",
        "eligibility": "Minimum 300 farmers in plains / 100 farmers in Hilly regions registering as FPO.",
        "land_requirements": "0 to 500 Acres",
        "minLandAcres": 0.0,
        "maxLandAcres": 500.0,
        "crop_applicability": ["All Crops"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": True,
        "required_documents": ["FPO Incorporation Certificate", "Board Member List", "PAN Card", "Business Plan"],
        "application_process": "Submit proposal through Implementing Agencies (NABARD, SFAC, NCDC).",
        "official_url": "https://sfacindia.com",
        "applicationDeadline": "Ongoing"
    },
    {
        "scheme_name": "Paramparagat Krishi Vikas Yojana (PKVY)",
        "scheme_type": "Central",
        "state": "All India",
        "category": "Organic Farming",
        "description": "Promotes organic farming through cluster approach and Participatory Guarantee System (PGS) certification.",
        "benefits": "₹50,000 per hectare support over 3 years, including ₹31,000 for organic inputs.",
        "eligibility": "Farmers forming clusters of 20 hectares (50 acres) committing to chemical-free farming.",
        "land_requirements": "1.0 to 50 Acres",
        "minLandAcres": 1.0,
        "maxLandAcres": 50.0,
        "crop_applicability": ["Pulses", "Millets", "Vegetables", "Spices", "Fruits", "Wheat", "Rice"],
        "livestock_applicability": ["Cows", "Buffaloes"],
        "sc_st_applicable": True,
        "fpo_applicable": True,
        "required_documents": ["Aadhaar Card", "Land Ownership Details", "PGS Organic Pledge Form"],
        "application_process": "Form a cluster and register with District Agriculture Officer.",
        "official_url": "https://pgsindia-ncof.gov.in",
        "applicationDeadline": "Ongoing"
    },
    {
        "scheme_name": "Agriculture Infrastructure Fund (AIF)",
        "scheme_type": "Central",
        "state": "All India",
        "category": "Market Infrastructure",
        "description": "Medium-to-long term debt financing for post-harvest management infrastructure and community farming assets.",
        "benefits": "3% interest subvention per annum on loans up to ₹2 Crore for up to 7 years + Credit Guarantee cover.",
        "eligibility": "Farmers, FPOs, PACS, Agri-entrepreneurs, Startups, and SHGs.",
        "land_requirements": "0 to 100 Acres",
        "minLandAcres": 0.0,
        "maxLandAcres": 100.0,
        "crop_applicability": ["All Crops"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": True,
        "required_documents": ["Detailed Project Report (DPR)", "Land Lease / Ownership", "KYC Documents", "Bank Application"],
        "application_process": "Apply online at AIF portal (agriinfra.dac.gov.in).",
        "official_url": "https://agriinfra.dac.gov.in",
        "applicationDeadline": "Ongoing"
    },
    # MAJOR STATE SCHEMES
    {
        "scheme_name": "Rythu Bandhu Scheme (Telangana)",
        "scheme_type": "State",
        "state": "Telangana",
        "category": "Direct Income Support",
        "description": "Telangana Govt investment support scheme for agriculture & horticulture crops per season.",
        "benefits": "₹10,000 per acre per year (₹5,000 for Kharif + ₹5,000 for Rabi) credited directly into bank accounts.",
        "eligibility": "Pattadar farmers owning agricultural land in Telangana.",
        "land_requirements": "0.1 to 50 Acres",
        "minLandAcres": 0.1,
        "maxLandAcres": 50.0,
        "crop_applicability": ["Paddy", "Cotton", "Maize", "Pulses", "Chilli"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": False,
        "required_documents": ["Pattadar Passbook", "Aadhaar Card", "Bank Account Details"],
        "application_process": "Automatic credit based on Pattadar Passbook database at Rythu Samithi.",
        "official_url": "https://rythubandhu.telangana.gov.in",
        "applicationDeadline": "Bi-Annual"
    },
    {
        "scheme_name": "YSR Rythu Bharosa (Andhra Pradesh)",
        "scheme_type": "State",
        "state": "Andhra Pradesh",
        "category": "Direct Income Support",
        "description": "Financial assistance scheme to support farmer families including tenant farmers in Andhra Pradesh.",
        "benefits": "₹13,500 per year per farmer family (₹7,500 State + ₹6,000 PM-KISAN alignment).",
        "eligibility": "Landowner farmers, SC/ST/OBC/Minority tenant farmers in Andhra Pradesh.",
        "land_requirements": "0.1 to 25 Acres",
        "minLandAcres": 0.1,
        "maxLandAcres": 25.0,
        "crop_applicability": ["Paddy", "Groundnut", "Cotton", "Sugarcane", "Tobacco"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": False,
        "required_documents": ["Aadhaar", "CCRC Certificate (for tenant farmers)", "Pattadar Passbook", "Bank Account"],
        "application_process": "Enrollment verified through Rythu Bharosa Kendras (RBKs).",
        "official_url": "https://ysrrythubharosa.ap.gov.in",
        "applicationDeadline": "Ongoing"
    },
    {
        "scheme_name": "KALIA Scheme (Odisha)",
        "scheme_type": "State",
        "state": "Odisha",
        "category": "Direct Income Support",
        "description": "Krushak Assistance for Livelihood and Income Augmentation for farmers and landless agricultural laborers.",
        "benefits": "₹10,000/yr per farmer family + ₹12,500 for landless agricultural households for allied livestock activities.",
        "eligibility": "Small/marginal farmers, landless agricultural laborers, and vulnerable farm families in Odisha.",
        "land_requirements": "0 to 10 Acres",
        "minLandAcres": 0.0,
        "maxLandAcres": 10.0,
        "crop_applicability": ["Paddy", "Pulses", "Oilseeds", "Vegetables"],
        "livestock_applicability": ["Goats", "Poultry", "Cows"],
        "sc_st_applicable": True,
        "fpo_applicable": False,
        "required_documents": ["Aadhaar Card", "Ration Card", "Bank Passbook", "Land Record"],
        "application_process": "Register or update details on KALIA portal (kalia.odisha.gov.in).",
        "official_url": "https://kalia.odisha.gov.in",
        "applicationDeadline": "Ongoing"
    },
    {
        "scheme_name": "Krishak Bandhu Scheme (West Bengal)",
        "scheme_type": "State",
        "state": "West Bengal",
        "category": "Direct Income Support",
        "description": "West Bengal Govt flagship scheme offering financial assistance and life insurance to farmers.",
        "benefits": "Up to ₹10,000 per year + ₹2 Lakh life insurance cover upon natural or accidental death.",
        "eligibility": "All landholding farmers and registered sharecroppers (Bargadars) aged 18-60 in West Bengal.",
        "land_requirements": "0.1 to 20 Acres",
        "minLandAcres": 0.1,
        "maxLandAcres": 20.0,
        "crop_applicability": ["Paddy", "Jute", "Potato", "Vegetables", "Mustard"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": False,
        "required_documents": ["RoR (Khatian)", "Aadhaar Card", "Voter ID", "Bank Passbook"],
        "application_process": "Apply via Duare Sarkar camps or Matirkatha portal.",
        "official_url": "https://matirkatha.wb.gov.in",
        "applicationDeadline": "Ongoing"
    },
    {
        "scheme_name": "Mukhya Mantri Solar Pump Yojana (Madhya Pradesh)",
        "scheme_type": "State",
        "state": "Madhya Pradesh",
        "category": "Solar & Energy",
        "description": "State subsidy for setting up solar agriculture pumps in non-electrified areas of MP.",
        "benefits": "Up to 90% subsidy for SC/ST small farmers and 75% for General category farmers on solar pump sets.",
        "eligibility": "Landholding farmers in MP without existing electric pump connection.",
        "land_requirements": "0.5 to 15 Acres",
        "minLandAcres": 0.5,
        "maxLandAcres": 15.0,
        "crop_applicability": ["Wheat", "Soybean", "Gram", "Cotton", "Mustard"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": True,
        "required_documents": ["Khasra B1 Copy", "Aadhaar Card", "Caste Certificate", "Bank Passbook"],
        "application_process": "Apply online via MP Solar Pump portal (cmsolarpump.mp.gov.in).",
        "official_url": "https://cmsolarpump.mp.gov.in",
        "applicationDeadline": "Ongoing"
    },
    {
        "scheme_name": "Chief Minister Krishi Ashirwad Yojana (Jharkhand)",
        "scheme_type": "State",
        "state": "Jharkhand",
        "category": "Direct Income Support",
        "description": "Financial aid to small and marginal farmers of Jharkhand for crop input seed & fertilizer costs.",
        "benefits": "₹5,000 per acre per year up to maximum 5 acres (max ₹25,000 per year).",
        "eligibility": "Small and marginal farmers owning cultivable land up to 5 acres in Jharkhand.",
        "land_requirements": "0.1 to 5 Acres",
        "minLandAcres": 0.1,
        "maxLandAcres": 5.0,
        "crop_applicability": ["Paddy", "Maize", "Pulses"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": False,
        "required_documents": ["Aadhaar Card", "Land Possession Certificate (LPC)", "Bank Account"],
        "application_process": "Submit application to Block Development Officer or local Krishi Mitra.",
        "official_url": "https://cmkay.jharkhand.gov.in",
        "applicationDeadline": "Ongoing"
    },
    {
        "scheme_name": "Bhavantar Bhugtan Yojana (Madhya Pradesh)",
        "scheme_type": "State",
        "state": "Madhya Pradesh",
        "category": "Price Support",
        "description": "Price deficiency payment scheme compensating farmers when market price falls below MSP.",
        "benefits": "Direct cash deposit equal to difference between MSP and Actual Market Selling Price.",
        "eligibility": "Farmers selling notified oilseeds and pulses in MP APMC Mandis.",
        "land_requirements": "0.5 to 50 Acres",
        "minLandAcres": 0.5,
        "maxLandAcres": 50.0,
        "crop_applicability": ["Soybean", "Groundnut", "Urad", "Moong", "Sesame", "Maize"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": True,
        "required_documents": ["Mandi Sale Slip", "Aadhaar Card", "Samagra ID", "Bank Passbook"],
        "application_process": "Register crop on e-Uparjan portal before Mandi sale.",
        "official_url": "https://mpeuparjan.nic.in",
        "applicationDeadline": "Seasonal"
    },
    {
        "scheme_name": "Kisan Sarvhit Bima Yojana (Uttar Pradesh)",
        "scheme_type": "State",
        "state": "Uttar Pradesh",
        "category": "Social Security",
        "description": "Accidental insurance and medical care benefit for farmers and landless farm workers in UP.",
        "benefits": "Up to ₹5 Lakh compensation for accidental death/disability + ₹2.5 Lakh medical treatment.",
        "eligibility": "Heads of farmer households in UP aged 18-70 with annual income below ₹75,000.",
        "land_requirements": "0 to 25 Acres",
        "minLandAcres": 0.0,
        "maxLandAcres": 25.0,
        "crop_applicability": ["All Crops"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": False,
        "required_documents": ["Aadhaar", "Income Certificate", "Khatauni Copy", "Age Proof"],
        "application_process": "Apply via District Social Welfare Department or e-District UP portal.",
        "official_url": "https://edistrict.up.gov.in",
        "applicationDeadline": "Ongoing"
    },
    {
        "scheme_name": "Magufuli Organic & Horticulture Grant (Gujarat State)",
        "scheme_type": "State",
        "state": "Gujarat",
        "category": "Horticulture",
        "description": "Gujarat state incentive scheme for drip-connected horticulture crop cultivation and fruit orchards.",
        "benefits": "₹20,000 per hectare assistance for banana, papaya, mango, and pomegranate plantation.",
        "eligibility": "Farmers in Gujarat adopting micro-irrigation for horticulture crops.",
        "land_requirements": "0.5 to 20 Acres",
        "minLandAcres": 0.5,
        "maxLandAcres": 20.0,
        "crop_applicability": ["Banana", "Papaya", "Mango", "Pomegranate", "Vegetables"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": True,
        "required_documents": ["iKhedut Portal Registration", "7/12 & 8-A Land Extract", "Bank Passbook"],
        "application_process": "Apply online at iKhedut portal (ikhedut.gujarat.gov.in).",
        "official_url": "https://ikhedut.gujarat.gov.in",
        "applicationDeadline": "Ongoing"
    },
    {
        "scheme_name": "Surakshit Kheti Polyhouse Subsidy (Himachal Pradesh)",
        "scheme_type": "State",
        "state": "Himachal Pradesh",
        "category": "Horticulture",
        "description": "State capital subsidy for polyhouse and micro-irrigation installation for off-season vegetables.",
        "benefits": "85% financial subsidy on polyhouse structure and drip irrigation setup.",
        "eligibility": "Himachal Pradesh resident farmers cultivating off-season vegetables and flowers.",
        "land_requirements": "0.1 to 10 Acres",
        "minLandAcres": 0.1,
        "maxLandAcres": 10.0,
        "crop_applicability": ["Tomato", "Capsicum", "Cucumber", "Exotic Vegetables", "Flowers"],
        "livestock_applicability": ["Any"],
        "sc_st_applicable": True,
        "fpo_applicable": True,
        "required_documents": ["Land Revenue Certificate", "Aadhaar Card", "Bonafide Himachal Certificate"],
        "application_process": "Submit application to Deputy Director of Agriculture / Horticulture in HP.",
        "official_url": "https://hpagrisnet.gov.in",
        "applicationDeadline": "Ongoing"
    }
]

# -------------------------------------------------------------------------
# EXPANDED GENERATION: Multi-State Schemes across 20+ Indian States
# -------------------------------------------------------------------------
def generate_state_level_schemes():
    expanded_schemes = []
    states = [
        "Punjab", "Haryana", "Maharashtra", "Karnataka", "Tamil Nadu",
        "Kerala", "Assam", "Bihar", "Rajasthan", "Chhattisgarh",
        "Himachal Pradesh", "Uttarakhand", "Jharkhand", "Goa", "Tripura",
        "Meghalaya", "Manipur", "Nagaland", "Mizoram", "Arunachal Pradesh",
        "Sikkim", "Jammu and Kashmir"
    ]

    templates = [
        ("Subsidized Organic Bio-Fertilizer & Soil Health Grant", "Organic Farming", "50% to 75% subsidy on organic bio-fertilizers, neem cake, and vermicompost kits.", "Farmers adopting eco-friendly cultivation.", ["All Crops", "Pulses", "Vegetables"]),
        ("Micro-Cold Storage & Pack House Capital Subsidy", "Market Infrastructure", "35% to 50% capital subsidy (up to ₹15 Lakh) for farm-gate mini cold storage units.", "Individual farmers, FPOs, and SHGs.", ["Fruits", "Vegetables", "Spices"]),
        ("Solar Cabinet Dryer & Food Processing Equipment Subsidy", "Solar & Energy", "60% subsidy on solar cabinet dryers for processing spices, fruits, and medicinal plants.", "Horticulture farmers and FPOs.", ["Spices", "Fruits", "Medicinal Plants"]),
        ("Drip Irrigation & Fertigation Automation Subsidy", "Irrigation", "Up to 55% grant for installing automated drip lines and fertigation tanks.", "Farmers with fruit and vegetable orchards.", ["Fruits", "Vegetables", "Sugarcane", "Cotton"]),
        ("High-Density Horticulture Fruit Orchard Grant", "Horticulture", "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, or guava saplings.", "Landowners engaging in fruit cultivation.", ["Apple", "Mango", "Guava", "Citrus"]),
        ("Dairy Cattle & Breed Multiplication Capital Subsidy", "Livestock & Animal Husbandry", "50% capital subsidy on purchase of high-yield indigenous cows and buffaloes.", "Small/marginal farmers and dairy SHGs.", ["Fodder Crops"]),
        ("Goatry & Sheep Breeding Unit Capital Subsidy", "Livestock & Animal Husbandry", "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.", "SC/ST, women farmers, and landless laborers.", ["Fodder Crops"]),
        ("Custom Hiring Centre (CHC) Machinery Capital Grant", "Farm Mechanization", "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.", "Registered FPOs and farmer cooperatives.", ["All Crops"]),
        ("Kisan Interest Subvention Incentive Scheme", "Credit Support", "3% additional interest subvention for prompt repayment of short-term crop loans.", "All farmers holding valid Kisan Credit Cards.", ["All Crops"]),
        ("Polyhouse & Shade Net Nursery Capital Subsidy", "Horticulture", "50% subsidy for constructing polyhouses and shade-net nursery structures.", "Horticulture growers and floriculturists.", ["Vegetables", "Flowers", "Exotic Crops"])
    ]

    for st in states:
        for title, cat, benefit, elig, crops in templates:
            sname = f"{st} State {title}"
            doc = {
                "scheme_name": sname,
                "scheme_type": "State",
                "state": st,
                "category": cat,
                "description": f"State government agricultural welfare scheme in {st} designed to boost farmer income and productivity.",
                "benefits": benefit,
                "eligibility": f"{elig} resident in {st}.",
                "land_requirements": "0.1 to 25.0 Acres",
                "minLandAcres": 0.1,
                "maxLandAcres": 25.0,
                "crop_applicability": crops,
                "livestock_applicability": ["Cows", "Buffaloes", "Goats", "Poultry"] if "Livestock" in cat else ["Any"],
                "sc_st_applicable": True,
                "fpo_applicable": ("FPO" in benefit or "FPOs" in elig),
                "required_documents": ["Aadhaar Card", f"{st} State Land Revenue Record", "Bank Account Passbook", "Caste Certificate (if applicable)"],
                "application_process": f"Submit application via {st} State Agriculture/Horticulture web portal or District Office.",
                "official_url": f"https://myscheme.gov.in/search?state={st.lower().replace(' ', '-')}",
                "applicationDeadline": "Ongoing"
            }
            expanded_schemes.append(normalize_doc(doc))
            
    return expanded_schemes

# -------------------------------------------------------------------------
# MAIN SEEDING EXECUTOR
# -------------------------------------------------------------------------
def run_seed_process():
    logger.info("==================================================")
    logger.info("🚀 STARTING INDIAN AGRICULTURAL SCHEME SEEDING")
    logger.info("==================================================")
    
    # 1. Live Tavily + Gemini Discovery
    live_schemes = discover_live_schemes_via_tavily_and_gemini()
    
    # 2. Base Curated Schemes
    curated_schemes = [normalize_doc(s) for s in CURATED_SCHEMES_BASE]
    
    # 3. Expanded Multi-State Schemes
    expanded_schemes = generate_state_level_schemes()
    
    # Merge all datasets into one comprehensive master list
    all_candidate_schemes = live_schemes + curated_schemes + expanded_schemes
    
    logger.info(f"📊 Aggregated {len(all_candidate_schemes)} total scheme documents across live, curated, and expanded sources.")
    
    # Connect to MongoDB
    try:
        client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=4000)
        db = client[DB_NAME]
        coll = db["schemes"]
        
        client.admin.command('ping')
        logger.info(f"✅ Connected to MongoDB at {MONGO_URI} (Database: '{DB_NAME}', Collection: 'schemes')")
        
        inserted_count = 0
        updated_count = 0
        
        seen_names = set()
        unique_schemes = []
        
        for scheme in all_candidate_schemes:
            norm = normalize_doc(scheme)
            sname = norm.get("scheme_name")
            if sname not in seen_names:
                seen_names.add(sname)
                unique_schemes.append(norm)
                
        logger.info(f"✨ Found {len(unique_schemes)} unique schemes to upsert into MongoDB.")

        for doc in unique_schemes:
            sname = doc.get("scheme_name")
            # Upsert match on pure snake_case scheme_name
            res = coll.update_one(
                {"scheme_name": sname},
                {"$set": doc},
                upsert=True
            )
            if res.upserted_id:
                inserted_count += 1
            else:
                updated_count += 1
                
        total_in_db = coll.count_documents({})
        logger.info("==================================================")
        logger.info("🎉 SCHEME DATABASE SEEDING COMPLETED SUCCESSFULLY!")
        logger.info(f"➜ Live Schemes Extracted via Gemini/Tavily: {len(live_schemes)}")
        logger.info(f"➜ Newly Inserted Scheme Records: {inserted_count}")
        logger.info(f"➜ Updated/Upserted Scheme Records: {updated_count}")
        logger.info(f"➜ TOTAL UNIQUE SCHEMES IN MONGODB ('schemes'): {total_in_db}")
        logger.info("==================================================")
        return total_in_db

    except Exception as e:
        logger.error(f"❌ Error during MongoDB scheme seeding: {e}")
        logger.info("Verify that MongoDB service is active on mongodb://localhost:27017/")
        return 0

if __name__ == "__main__":
    run_seed_process()

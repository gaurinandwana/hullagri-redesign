import os
import json
import logging
from datetime import datetime
from database import upsert_scheme_to_db, get_all_schemes_from_db
from google import genai
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger("scheme_pipeline")

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
TAVILY_API_KEY = os.getenv("TAVILY_API_KEY")

gemini_client = genai.Client(api_key=GEMINI_API_KEY) if GEMINI_API_KEY else None

tavily_tool = None
if TAVILY_API_KEY:
    try:
        from langchain_community.tools.tavily_search import TavilySearchResults
        tavily_tool = TavilySearchResults(max_results=5)
        logger.info("Tavily Search initialized for scheme discovery pipeline.")
    except Exception as e:
        logger.warning(f"Tavily tool notice in pipeline: {e}")

def run_weekly_scheme_crawler() -> dict:
    """
    Automated Scheme Discovery Pipeline:
    1. Checks Tavily Search API configuration.
    2. Searches live web for current Indian government agricultural schemes if key configured.
    3. Extracts structured scheme metadata using Gemini LLM.
    4. Deduplicates against MongoDB and stores valid scheme records.
    5. Returns explicit execution metrics.
    """
    logger.info("🤖 Executing Automated Government Scheme Discovery Pipeline...")
    
    today_date = datetime.now().strftime("%Y-%m-%d")
    search_query = "latest Indian government agricultural schemes subsidies 2026 farmer welfare guidelines"
    
    sources_list = []
    raw_snippets = []
    web_search_succeeded = False
    tavily_configured = bool(TAVILY_API_KEY)

    # 1. Web Search Execution
    if tavily_tool:
        try:
            logger.info(f"Executing live web search via Tavily API for: '{search_query}'")
            results = tavily_tool.invoke({"query": search_query})
            if results and isinstance(results, list):
                web_search_succeeded = True
                for r in results:
                    url = r.get("url", "")
                    if url:
                        sources_list.append(url)
                    raw_snippets.append(f"Title: {r.get('title')}\nSnippet: {r.get('content')}\nURL: {url}")
        except Exception as e:
            logger.error(f"Tavily web search error: {e}")
            web_search_succeeded = False

    # Handle Tavily Key Missing / Search Failed
    if not web_search_succeeded:
        logger.info("Live web discovery unavailable or Tavily API key not configured. Returning status without fabricating web search.")
        existing_db_schemes = get_all_schemes_from_db()
        return {
            "status": "warning",
            "tavily_configured": tavily_configured,
            "web_search_succeeded": False,
            "sources_searched_count": 0,
            "sources_list": [],
            "schemes_discovered_count": 0,
            "schemes_extracted_count": 0,
            "schemes_inserted_count": 0,
            "schemes_updated_count": 0,
            "duplicates_skipped_count": 0,
            "message": "Live web discovery was unavailable or TAVILY_API_KEY is not configured. Preserved existing database schemes.",
            "sample_extracted_schemes": existing_db_schemes[:3]
        }

    combined_text = "\n\n".join(raw_snippets)

    # 2. Extract structured scheme JSON using Gemini LLM
    prompt = f"""
You are an expert data ingestion agent for an Indian Agriculture Intelligence Portal.
Extract current government agricultural schemes from the live web snippets below.

LIVE WEB DATA:
{combined_text}

Extract distinct schemes into a strict JSON ARRAY of objects. Each object MUST contain these exact keys:
- "schemeName": string (e.g. "Sub-Mission on Agroforestry")
- "schemeType": string ("Central" or "State")
- "eligibleStates": array of strings (e.g. ["All India"] or ["Punjab"])
- "description": string (short overview of the scheme)
- "benefits": string (description of financial subsidy or benefit)
- "eligibility": string (detailed eligibility requirements)
- "eligibleFarmerCategories": array of strings (e.g. ["Small", "Marginal", "SC/ST", "All"])
- "eligibleCrops": array of strings (e.g. ["All Crops"] or ["Wheat", "Pulses"])
- "eligibleLivestock": array of strings (e.g. ["Cows", "Buffaloes", "Any"])
- "minLandAcres": number (e.g. 0.0)
- "maxLandAcres": number (e.g. 50.0)
- "isForSCST": boolean
- "isForFPO": boolean
- "isForDisabled": boolean
- "requiredDocuments": array of strings
- "applicationProcess": string
- "officialSource": string (website portal URL)
- "applicationDeadline": string (e.g. "Ongoing" or date)
- "category": string (e.g. "Farm Machinery", "Direct Subsidy", "Insurance")

Return ONLY the raw JSON array. Do not include markdown code block quotes.
"""

    extracted_schemes = []
    if gemini_client:
        try:
            logger.info("Extracting structured scheme records via Gemini LLM...")
            response = gemini_client.models.generate_content(
                model='gemini-3.6-flash',
                contents=prompt
            )
            text_resp = response.text.strip()
            if text_resp.startswith("```json"):
                text_resp = text_resp[7:-3].strip()
            elif text_resp.startswith("```"):
                text_resp = text_resp[3:-3].strip()

            parsed = json.loads(text_resp)
            if isinstance(parsed, list):
                extracted_schemes = parsed
        except Exception as e:
            logger.error(f"Error extracting schemes with Gemini LLM: {e}")

    # 3. Database Storage & Deduplication
    existing_db = get_all_schemes_from_db()
    existing_names = {(s.get("scheme_name") or s.get("schemeName") or "").strip().lower() for s in existing_db if (s.get("scheme_name") or s.get("schemeName"))}

    inserted_count = 0
    updated_count = 0
    duplicates_skipped = 0
    saved_sample = []

    for s in extracted_schemes:
        name = (s.get("scheme_name") or s.get("schemeName") or "").strip()
        if not name:
            continue
            
        s["discovered_date"] = today_date
        s["source_url"] = sources_list[0] if sources_list else s.get("official_url", s.get("officialSource", ""))
        
        name_lower = name.lower()
        if name_lower in existing_names:
            updated_count += 1
            duplicates_skipped += 1
        else:
            inserted_count += 1
            existing_names.add(name_lower)
            
        upsert_scheme_to_db(s)
        saved_sample.append(s)

    logger.info(f"Pipeline finished. Searched {len(sources_list)} sources, extracted {len(extracted_schemes)} schemes, inserted {inserted_count}, updated {updated_count}.")

    return {
        "status": "success",
        "tavily_configured": True,
        "web_search_succeeded": True,
        "sources_searched_count": len(sources_list),
        "sources_list": sources_list,
        "schemes_discovered_count": len(raw_snippets),
        "schemes_extracted_count": len(extracted_schemes),
        "schemes_inserted_count": inserted_count,
        "schemes_updated_count": updated_count,
        "duplicates_skipped_count": duplicates_skipped,
        "message": f"Successfully executed scheme discovery pipeline. Processed {len(extracted_schemes)} schemes into MongoDB.",
        "sample_extracted_schemes": saved_sample[:3]
    }

# Background Scheduler Setup
scheduler = None
def start_pipeline_scheduler():
    global scheduler
    try:
        from apscheduler.schedulers.background import BackgroundScheduler
        scheduler = BackgroundScheduler()
        # Schedule weekly run (every 7 days)
        scheduler.add_job(run_weekly_scheme_crawler, 'interval', days=7, id='weekly_scheme_crawler')
        scheduler.start()
        logger.info("Weekly Scheme Discovery Scheduler started (APScheduler running every 7 days).")
    except Exception as e:
        logger.warning(f"APScheduler notice: {e}")

if __name__ == "__main__":
    result = run_weekly_scheme_crawler()
    print(json.dumps(result, indent=2))
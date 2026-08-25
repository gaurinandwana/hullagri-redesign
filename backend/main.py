import os
import logging
from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from models import FarmerOnboardingRequest, AIChatRequest, AIChatResponse, PipelineRunResponse
from database import (
    save_farmer_to_db,
    get_farmer_from_db,
    get_all_schemes_from_db,
    initialize_database
)
from graph import run_scheme_chat_workflow
from pipeline import run_weekly_scheme_crawler, start_pipeline_scheduler

load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("main")

app = FastAPI(
    title="HullAgri AI Farmer Scheme Intelligence Platform",
    description="AI-powered Government Scheme Discovery & Multi-step Intelligence Assistant",
    version="2.0"
)

# Enable CORS for Next.js / Vite React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    logger.info("Initializing database seeds and background scheduler...")
    initialize_database()
    start_pipeline_scheduler()

@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "HullAgri AI Farmer Scheme Intelligence Platform",
        "version": "2.0",
        "endpoints": [
            "POST /api/farmer/onboarding",
            "GET /api/farmer/{farmer_id}",
            "GET /api/schemes/eligible/{farmer_id}",
            "POST /api/chat",
            "POST /api/pipeline/run",
            "GET /api/schemes"
        ]
    }

@app.post("/api/farmer/onboarding")
def save_farmer_profile(data: FarmerOnboardingRequest):
    try:
        profile_dict = data.dict()
        farmer_id = profile_dict.get("farmer_id", "farmer_default")
        save_farmer_to_db(farmer_id, profile_dict)
        return {
            "status": "success",
            "message": "Farmer profile saved successfully to MongoDB database.",
            "farmer_id": farmer_id
        }
    except Exception as e:
        logger.error(f"Error saving farmer profile: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/farmer/{farmer_id}")
def get_farmer_profile(farmer_id: str):
    profile = get_farmer_from_db(farmer_id)
    if not profile:
        raise HTTPException(status_code=404, detail="Farmer profile not found")
    return {"farmer_id": farmer_id, "profile": profile}

@app.get("/api/schemes/eligible/{farmer_id}")
def get_eligible_schemes(farmer_id: str):
    try:
        # Run chat workflow with a default matching prompt
        res = run_scheme_chat_workflow(
            farmer_id=farmer_id,
            question="What are the top government schemes I qualify for based on my profile?"
        )
        return {
            "farmer_id": farmer_id,
            "matched_count": len(res.get("relevant_schemes", [])),
            "eligible_schemes": res.get("relevant_schemes", []),
            "analysis": res.get("answer", "")
        }
    except Exception as e:
        logger.error(f"Error matching schemes: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/chat", response_model=AIChatResponse)
def ai_scheme_chat(request: AIChatRequest):
    """
    Multi-step LangGraph AI Scheme Intelligence Endpoint.
    Understand question -> Fetch profile -> Query DB schemes -> Optional Web Search -> Gemini Generation.
    """
    try:
        result = run_scheme_chat_workflow(
            farmer_id=request.farmer_id,
            question=request.question,
            profile_override=request.profile_override
        )
        return result
    except Exception as e:
        logger.error(f"Error processing AI chat: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/pipeline/run", response_model=PipelineRunResponse)
def trigger_scheme_discovery_pipeline(background_tasks: BackgroundTasks):
    """
    Manually trigger the automated scheme discovery pipeline to crawl web data,
    categorize with Gemini LLM, deduplicate, and store into MongoDB.
    """
    try:
        res = run_weekly_scheme_crawler()
        return res
    except Exception as e:
        logger.error(f"Error running pipeline: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/schemes")
def list_all_schemes():
    schemes = get_all_schemes_from_db()
    return {
        "count": len(schemes),
        "schemes": schemes
    }

if __name__ == "__main__":
    import uvicorn
    import sys
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            pass
    uvicorn.run("main:app", host="127.0.0.1", port=port, reload=False)
import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database import farmers_collection, farmer_segments_collection
from models import FarmerOnboardingRequest
from google import genai

# Load environment variables from .env file
load_dotenv()

# Initialize FastAPI app
app = FastAPI(title="HullAgri Gemini Backend", version="2.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Gemini Client using the key from .env
client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

@app.get("/")
def read_root():
    return {"message": "HullAgri Gemini Backend is live!"}

@app.post("/api/farmer/onboarding")
def save_farmer_profile(data: FarmerOnboardingRequest):
    try:
        profile_dict = data.dict()
        farmer_id = profile_dict.get("farmer_id", "default_farmer")
        farmers_collection.update_one({"farmer_id": farmer_id}, {"$set": profile_dict}, upsert=True)
        return {"status": "success", "farmer_id": farmer_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Gemini-Powered Scheme Matching Endpoint
@app.get("/api/schemes/eligible/{farmer_id}")
def get_gemini_eligible_schemes(farmer_id: str):
    # Fetch whatever profile info we have in MongoDB
    farmer = farmers_collection.find_one({"farmer_id": farmer_id}, {"_id": 0}) or {}
    segment = farmer_segments_collection.find_one({"farmer_id": farmer_id}, {"_id": 0}) or {}

    state = farmer.get("location", {}).get("state", "India")
    land_area = farmer.get("total_land_area", "unknown")
    crops = segment.get("crops_this_year", ["general crops"])
    category = segment.get("caste_category", "General")

    # Construct prompt for Gemini to act as an expert agricultural scheme consultant
    prompt = f"""
    You are an expert Indian agricultural scheme advisor. 
    A farmer has the following profile:
    - State: {state}
    - Land Area: {land_area} acres
    - Crops Grown: {', '.join(crops)}
    - Category: {category}

    Return a JSON object containing a list of 4 to 5 accurate government schemes (Central or State level) that this farmer qualifies for.
    The response MUST be valid JSON with this exact structure:
    {{
      "eligible_schemes": [
        {{
          "schemeName": "Name of the scheme",
          "schemeType": "Central or State",
          "benefits": "Description of financial benefit or subsidy",
          "applicationDeadline": "YYYY-MM-DD or Ongoing"
        }}
      ]
    }}
    Do not include any markdown backticks outside of a clean JSON output, or just return raw JSON.
    """

    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
        )
        
        import json
        text_response = response.text.strip()
        if text_response.startswith("```json"):
            text_response = text_response[7:-3].strip()
        elif text_response.startswith("```"):
            text_response = text_response[3:-3].strip()

        parsed_data = json.loads(text_response)
        return {
            "farmer_id": farmer_id,
            "matched_count": len(parsed_data.get("eligible_schemes", [])),
            "eligible_schemes": parsed_data.get("eligible_schemes", [])
        }
    except Exception as e:
        # Fallback static response if AI generation fails so the UI never crashes
        return {
            "farmer_id": farmer_id,
            "matched_count": 1,
            "eligible_schemes": [{
                "schemeName": "PM-KISAN Samman Nidhi",
                "schemeType": "Central",
                "benefits": "₹6,000 per year income support",
                "applicationDeadline": "Ongoing"
            }]
        }
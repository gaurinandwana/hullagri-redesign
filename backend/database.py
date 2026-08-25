import os
from pymongo import MongoClient
import logging

logger = logging.getLogger("database")

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
DB_NAME = os.getenv("DB_NAME") or os.getenv("MONGO_DB_NAME") or "hullagri-redesign-core"

try:
    client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=2000)
    db = client[DB_NAME]
    # Test connection
    client.admin.command('ping')
    logger.info("Successfully connected to MongoDB!")
    is_mongo_connected = True
except Exception as e:
    logger.warning(f"MongoDB connection warning: {e}. Fallback in-memory cache will be available.")
    client = None
    db = None
    is_mongo_connected = False

# Fallback in-memory storage if MongoDB server isn't active
_in_memory_farmers = {}
_in_memory_schemes = []

INITIAL_SEED_SCHEMES = [
    {
        "schemeName": "PM-KISAN Samman Nidhi",
        "schemeType": "Central",
        "eligibleStates": ["All India"],
        "eligibleFarmerCategories": ["All", "Small", "Marginal"],
        "eligibleCrops": ["All Crops"],
        "eligibleLivestock": ["Any"],
        "isForFPO": False,
        "isForDisabled": False,
        "minLandAcres": 0.0,
        "maxLandAcres": 100.0,
        "benefits": "Financial benefit of ₹6,000 per year in 3 equal installments of ₹2,000 directly into bank accounts.",
        "eligibility": "Small and marginal landholder farmer families owning cultivable land up to institutional boundaries.",
        "requiredDocuments": ["Aadhaar Card", "Land Ownership Documents (Khasra/Khatauni)", "Bank Account Details"],
        "applicationProcess": "Apply online at pmkisan.gov.in or visit local CSC / State Nodal Officer.",
        "officialSource": "https://pmkisan.gov.in",
        "applicationDeadline": "Ongoing",
        "category": "Direct Income Support"
    },
    {
        "schemeName": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        "schemeType": "Central",
        "eligibleStates": ["All India"],
        "eligibleFarmerCategories": ["All", "Small", "Marginal", "Tenant Farmers"],
        "eligibleCrops": ["Wheat", "Rice", "Cotton", "Maize", "Soybean", "Pulses", "Oilseeds"],
        "eligibleLivestock": ["Any"],
        "isForFPO": False,
        "isForDisabled": False,
        "minLandAcres": 0.0,
        "maxLandAcres": 50.0,
        "benefits": "Comprehensive crop insurance coverage against non-preventable natural risks from pre-sowing to post-harvest.",
        "eligibility": "All farmers growing notified crops in notified areas including sharecroppers and tenant farmers.",
        "requiredDocuments": ["Aadhaar", "Land Sowing Certificate", "Bank Passbook", "Land Records"],
        "applicationProcess": "Enroll via PMFBY Portal (pmfby.gov.in), designated bank branch, or insurance agent before seasonal cutoff.",
        "officialSource": "https://pmfby.gov.in",
        "applicationDeadline": "Seasonal (Kharif / Rabi)",
        "category": "Crop Insurance"
    },
    {
        "schemeName": "Kisan Credit Card (KCC) Scheme",
        "schemeType": "Central",
        "eligibleStates": ["All India"],
        "eligibleFarmerCategories": ["All", "Small", "Marginal", "SHG", "FPO"],
        "eligibleCrops": ["All Crops"],
        "eligibleLivestock": ["Cows", "Buffaloes", "Goats", "Poultry"],
        "isForFPO": True,
        "isForDisabled": False,
        "minLandAcres": 0.0,
        "maxLandAcres": 500.0,
        "benefits": "Subsidized short-term credit up to ₹3 Lakh at an effective interest rate of 4% per annum (with prompt repayment incentive).",
        "eligibility": "Farmers, tenant farmers, oral lessees, SHGs, FPOs, animal husbandry and fisheries farmers.",
        "requiredDocuments": ["Identity Proof", "Address Proof", "Land Record Documents", "Passport Photo"],
        "applicationProcess": "Submit KCC application form at any Commercial Bank, RRB, or Cooperative Bank branch.",
        "officialSource": "https://myscheme.gov.in/schemes/kcc",
        "applicationDeadline": "Ongoing",
        "category": "Credit Support"
    },
    {
        "schemeName": "Sub-Mission on Agricultural Mechanization (SMAM)",
        "schemeType": "Central",
        "eligibleStates": ["All India"],
        "eligibleFarmerCategories": ["SC", "ST", "Small", "Marginal", "Women", "FPO"],
        "eligibleCrops": ["All Crops"],
        "eligibleLivestock": ["Any"],
        "isForFPO": True,
        "isForDisabled": True,
        "minLandAcres": 0.0,
        "maxLandAcres": 50.0,
        "benefits": "40% to 80% subsidy on purchase of agricultural machinery including Tractors, Power Tillers, Harvesters, and Rotavators.",
        "eligibility": "Individual farmers with preference to SC/ST/Small/Marginal/Women farmers and registered FPOs.",
        "requiredDocuments": ["Aadhaar Card", "Caste Certificate (if SC/ST)", "Land Record", "Bank Passbook", "Quotation of Machinery"],
        "applicationProcess": "Register on agrimachinery.nic.in portal and submit machinery subsidy application online.",
        "officialSource": "https://agrimachinery.nic.in",
        "applicationDeadline": "Ongoing",
        "category": "Farm Mechanization"
    },
    {
        "schemeName": "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) - Micro Irrigation",
        "schemeType": "Central / State",
        "eligibleStates": ["All India"],
        "eligibleFarmerCategories": ["All", "Small", "Marginal", "SC", "ST"],
        "eligibleCrops": ["Sugarcane", "Cotton", "Fruits", "Vegetables", "Maize"],
        "eligibleLivestock": ["Any"],
        "isForFPO": True,
        "isForDisabled": False,
        "minLandAcres": 0.5,
        "maxLandAcres": 12.5,
        "benefits": "45% to 55% financial subsidy for installing Drip Irrigation and Sprinkler Irrigation systems.",
        "eligibility": "Farmers having land with assured water source.",
        "requiredDocuments": ["Aadhaar", "Land Records", "Water Source Certificate", "Bank Details"],
        "applicationProcess": "Apply via State Horticulture / Agriculture Department portal or nearest district agriculture office.",
        "officialSource": "https://pmksy.gov.in",
        "applicationDeadline": "Ongoing",
        "category": "Irrigation"
    },
    {
        "schemeName": "National Livestock Mission (NLM)",
        "schemeType": "Central",
        "eligibleStates": ["All India"],
        "eligibleFarmerCategories": ["All", "SC", "ST", "FPO", "Women"],
        "eligibleCrops": ["Fodder Crops"],
        "eligibleLivestock": ["Cows", "Buffaloes", "Goats", "Sheep", "Poultry"],
        "isForFPO": True,
        "isForDisabled": False,
        "minLandAcres": 0.0,
        "maxLandAcres": 100.0,
        "benefits": "Capital subsidy up to 50% (up to ₹50 Lakh) for breed development, poultry farming, goat/sheep rearing, and fodder infrastructure.",
        "eligibility": "Individual farmers, FPOs, JLGs, SHGs, and Section 8 companies engaged in livestock farming.",
        "requiredDocuments": ["Project Report", "Land Document/Lease", "Aadhaar", "Bank Guarantee/Consent"],
        "applicationProcess": "Apply online at nlm.udyamimitra.in portal.",
        "officialSource": "https://nlm.udyamimitra.in",
        "applicationDeadline": "Ongoing",
        "category": "Livestock & Animal Husbandry"
    }
]

def get_farmers_collection():
    if is_mongo_connected and db is not None:
        return db["farmers"]
    return None

def get_schemes_collection():
    if is_mongo_connected and db is not None:
        return db["schemes"]
    return None

def initialize_database():
    """Seed initial scheme data if collection is empty"""
    schemes_coll = get_schemes_collection()
    if schemes_coll is not None:
        try:
            if schemes_coll.count_documents({}) == 0:
                logger.info("Seeding initial government schemes into MongoDB...")
                schemes_coll.insert_many(INITIAL_SEED_SCHEMES)
                logger.info(f"Seeded {len(INITIAL_SEED_SCHEMES)} schemes.")
        except Exception as e:
            logger.error(f"Error seeding schemes to MongoDB: {e}")
    else:
        logger.info("Using in-memory seed storage.")

# Run init on import
initialize_database()

def save_farmer_to_db(farmer_id: str, profile_dict: dict):
    coll = get_farmers_collection()
    if coll is not None:
        coll.update_one({"farmer_id": farmer_id}, {"$set": profile_dict}, upsert=True)
    else:
        _in_memory_farmers[farmer_id] = profile_dict

def get_farmer_from_db(farmer_id: str) -> dict:
    coll = get_farmers_collection()
    if coll is not None:
        data = coll.find_one({"farmer_id": farmer_id}, {"_id": 0})
        if data:
            return data
    return _in_memory_farmers.get(farmer_id, {})

def normalize_scheme(s: dict) -> dict:
    doc = dict(s)
    name = doc.get("scheme_name") or doc.get("schemeName") or "Unknown Scheme"
    stype = doc.get("scheme_type") or doc.get("schemeType") or "Central"
    url = doc.get("official_url") or doc.get("officialSource") or doc.get("sourceUrl") or "https://myscheme.gov.in"
    
    raw_states = doc.get("eligible_states") or doc.get("eligibleStates") or doc.get("state") or ["All India"]
    if isinstance(raw_states, str):
        raw_states = [raw_states]
    state_val = doc.get("state") or (raw_states[0] if raw_states else "All India")

    crops = doc.get("crop_applicability") or doc.get("eligible_crops") or doc.get("eligibleCrops") or ["All Crops"]
    if isinstance(crops, str): crops = [crops]

    livestock = doc.get("livestock_applicability") or doc.get("eligible_livestock") or doc.get("eligibleLivestock") or ["Any"]
    if isinstance(livestock, str): livestock = [livestock]

    fpo = bool(doc.get("fpo_applicable") if "fpo_applicable" in doc else doc.get("is_for_fpo", doc.get("isForFPO", False)))
    sc_st = bool(doc.get("sc_st_applicable") if "sc_st_applicable" in doc else doc.get("is_for_sc_st", doc.get("isForSCST", True)))
    disabled = bool(doc.get("is_for_disabled") if "is_for_disabled" in doc else doc.get("isForDisabled", False))

    min_land = float(doc.get("min_land_acres") if "min_land_acres" in doc else doc.get("minLandAcres", 0.0))
    max_land = float(doc.get("max_land_acres") if "max_land_acres" in doc else doc.get("maxLandAcres", 100.0))

    req_docs = doc.get("required_documents") or doc.get("requiredDocuments") or ["Aadhaar Card", "Land Records"]
    if isinstance(req_docs, str): req_docs = [req_docs]

    app_proc = doc.get("application_process") or doc.get("applicationProcess") or "Apply online via designated state portal or nearest CSC."
    deadline = doc.get("application_deadline") or doc.get("applicationDeadline") or "Ongoing"

    return {
        "scheme_name": name,
        "scheme_type": stype,
        "state": state_val,
        "eligible_states": raw_states,
        "category": doc.get("category", "General Subsidy"),
        "description": doc.get("description", ""),
        "benefits": doc.get("benefits", ""),
        "eligibility": doc.get("eligibility", ""),
        "eligible_farmer_categories": doc.get("eligible_farmer_categories") or doc.get("eligibleFarmerCategories") or ["All", "Small", "Marginal"],
        "crop_applicability": crops,
        "eligible_crops": crops,
        "livestock_applicability": livestock,
        "eligible_livestock": livestock,
        "sc_st_applicable": sc_st,
        "is_for_sc_st": sc_st,
        "fpo_applicable": fpo,
        "is_for_fpo": fpo,
        "is_for_disabled": disabled,
        "land_requirements": doc.get("land_requirements") or f"{min_land} to {max_land} Acres",
        "min_land_acres": min_land,
        "max_land_acres": max_land,
        "required_documents": req_docs,
        "application_process": app_proc,
        "official_url": url,
        "official_source": url,
        "source_url": url,
        "discovered_date": doc.get("discovered_date") or doc.get("discoveredDate") or "2026-08-25",
        "application_deadline": deadline,
        "why_matches": doc.get("why_matches") or doc.get("whyMatches") or ""
    }

def get_all_schemes_from_db() -> list:
    coll = get_schemes_collection()
    raw_schemes = []
    if coll is not None:
        try:
            raw_schemes = list(coll.find({}, {"_id": 0}))
        except Exception as e:
            logger.error(f"Error reading schemes from DB: {e}")
    if not raw_schemes:
        raw_schemes = list(INITIAL_SEED_SCHEMES) + _in_memory_schemes

    seen = set()
    unique_schemes = []
    for s in raw_schemes:
        norm = normalize_scheme(s)
        name = norm.get("scheme_name")
        if name not in seen:
            seen.add(name)
            unique_schemes.append(norm)
    return unique_schemes

def upsert_scheme_to_db(scheme_data: dict):
    coll = get_schemes_collection()
    norm = normalize_scheme(scheme_data)
    name = norm.get("scheme_name")
    if not name:
        return
    if coll is not None:
        coll.update_one({"scheme_name": name}, {"$set": norm}, upsert=True)
    else:
        existing_idx = next((i for i, s in enumerate(_in_memory_schemes) if s.get("scheme_name") == name), None)
        if existing_idx is not None:
            _in_memory_schemes[existing_idx] = norm
        else:
            _in_memory_schemes.append(norm)
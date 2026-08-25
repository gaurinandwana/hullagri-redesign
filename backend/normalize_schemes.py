import os
import logging
from pymongo import MongoClient
from dotenv import load_dotenv

# Load backend/.env environment variables
load_dotenv()

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("normalize_schemes")

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
DB_NAME = os.getenv("DB_NAME") or os.getenv("MONGO_DB_NAME") or "hullagri-redesign-core"

logger.info(f"Connecting to MongoDB at: {MONGO_URI} (Database: '{DB_NAME}', Collection: 'schemes')")

CAMEL_CASE_KEYS_TO_REMOVE = [
    "schemeName",
    "schemeType",
    "eligibleStates",
    "eligibleFarmerCategories",
    "eligibleCrops",
    "eligibleLivestock",
    "isForSCST",
    "isForFPO",
    "isForDisabled",
    "minLandAcres",
    "maxLandAcres",
    "requiredDocuments",
    "applicationProcess",
    "officialSource",
    "sourceUrl",
    "discoveredDate",
    "applicationDeadline",
    "whyMatches"
]

def migrate_documents_to_snake_case():
    try:
        client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=4000)
        db = client[DB_NAME]
        coll = db["schemes"]

        client.admin.command('ping')
        logger.info(f"✅ Successfully connected to MongoDB database '{DB_NAME}'")

        all_docs = list(coll.find({}))
        logger.info(f"Found {len(all_docs)} total scheme documents to normalize to pure snake_case.")

        updated_count = 0

        for doc in all_docs:
            doc_id = doc["_id"]
            
            name = doc.get("scheme_name") or doc.get("schemeName") or "Government Agricultural Scheme"
            stype = doc.get("scheme_type") or doc.get("schemeType") or "Central"
            
            raw_states = doc.get("eligible_states") or doc.get("eligibleStates") or doc.get("state") or ["All India"]
            if isinstance(raw_states, str):
                raw_states = [raw_states]
            state_val = doc.get("state") or (raw_states[0] if raw_states else "All India")

            farmer_cats = doc.get("eligible_farmer_categories") or doc.get("eligibleFarmerCategories") or ["All", "Small", "Marginal"]
            if isinstance(farmer_cats, str):
                farmer_cats = [farmer_cats]

            crops = doc.get("crop_applicability") or doc.get("eligible_crops") or doc.get("eligibleCrops") or ["All Crops"]
            if isinstance(crops, str):
                crops = [crops]

            livestock = doc.get("livestock_applicability") or doc.get("eligible_livestock") or doc.get("eligibleLivestock") or ["Any"]
            if isinstance(livestock, str):
                livestock = [livestock]

            sc_st = bool(doc.get("sc_st_applicable") if "sc_st_applicable" in doc else doc.get("is_for_sc_st", doc.get("isForSCST", True)))
            fpo = bool(doc.get("fpo_applicable") if "fpo_applicable" in doc else doc.get("is_for_fpo", doc.get("isForFPO", False)))
            disabled = bool(doc.get("is_for_disabled") if "is_for_disabled" in doc else doc.get("isForDisabled", False))

            min_land = float(doc.get("min_land_acres") if "min_land_acres" in doc else doc.get("minLandAcres", 0.0))
            max_land = float(doc.get("max_land_acres") if "max_land_acres" in doc else doc.get("maxLandAcres", 100.0))
            land_req = doc.get("land_requirements") or f"{min_land} to {max_land} Acres"

            req_docs = doc.get("required_documents") or doc.get("requiredDocuments") or ["Aadhaar Card", "Land Records", "Bank Passbook"]
            if isinstance(req_docs, str):
                req_docs = [req_docs]

            app_proc = doc.get("application_process") or doc.get("applicationProcess") or "Apply online via designated state portal or nearest CSC centre."
            url = doc.get("official_url") or doc.get("officialSource") or doc.get("sourceUrl") or "https://myscheme.gov.in"
            deadline = doc.get("application_deadline") or doc.get("applicationDeadline") or "Ongoing"
            cat = doc.get("category") or "General Subsidy"
            desc = doc.get("description") or "Government scheme for farmer support and agricultural development."
            benefits = doc.get("benefits") or "Financial assistance and agricultural input subsidies."
            eligibility = doc.get("eligibility") or "All active farmers and agricultural landholders."
            disc_date = doc.get("discovered_date") or doc.get("discoveredDate") or "2026-08-25"
            why = doc.get("why_matches") or doc.get("whyMatches") or ""

            # Construct clean document containing ONLY pure snake_case fields
            clean_doc = {
                "_id": doc_id,
                "scheme_name": name,
                "scheme_type": stype,
                "state": state_val,
                "eligible_states": raw_states,
                "category": cat,
                "description": desc,
                "benefits": benefits,
                "eligibility": eligibility,
                "eligible_farmer_categories": farmer_cats,
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
                "required_documents": req_docs,
                "application_process": app_proc,
                "official_url": url,
                "official_source": url,
                "source_url": url,
                "discovered_date": disc_date,
                "application_deadline": deadline,
                "why_matches": why
            }

            coll.replace_one({"_id": doc_id}, clean_doc)
            updated_count += 1

        logger.info("==================================================")
        logger.info("🎉 DATABASE FIELD NORMALIZATION COMPLETED SUCCESSFULLY!")
        logger.info(f"➜ Total Documents Replaced to pure snake_case: {updated_count}")
        logger.info("➜ Legacy camelCase keys removed: ALL")
        logger.info("==================================================")
        return updated_count

    except Exception as e:
        logger.error(f"❌ Error migrating documents to snake_case: {e}")
        return 0

if __name__ == "__main__":
    migrate_documents_to_snake_case()

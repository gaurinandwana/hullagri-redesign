from pydantic import BaseModel, Field
from typing import Dict, List, Optional

class LocationDetails(BaseModel):
    state: str
    district: str
    village: str
    pincode: str
    total_land_area: float
    land_unit: str = "Acres"

class FarmerOnboardingRequest(BaseModel):
    farmer_id: str = Field(..., description="Unique client-generated ID or phone number")
    language_preference: str
    location: LocationDetails
    fpo_member: str
    intent_to_buy_tractor: str
    intent_to_buy_harvester: str
    caste_category: str
    is_disabled_or_bpl: str
    livestock: Dict[str, int] = Field(default={}, description="Livestock counts")
    crops_last_year: List[str] = []
    crops_this_year: List[str] = []
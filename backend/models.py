from pydantic import BaseModel, Field
from typing import Dict, List, Optional, Any

class LocationDetails(BaseModel):
    state: str = Field(default="Punjab", description="State name")
    district: str = Field(default="Ludhiana", description="District name")
    village: str = Field(default="", description="Village name")
    pincode: str = Field(default="", description="Pincode")
    total_land_area: float = Field(default=2.5, description="Land size")
    land_unit: str = Field(default="Acres", description="Unit of land measurement")

class FarmerOnboardingRequest(BaseModel):
    farmer_id: str = Field(..., description="Unique farmer ID or phone number")
    language_preference: str = Field(default="English")
    location: LocationDetails
    fpo_member: str = Field(default="No", description="Yes/No or FPO Name")
    intent_to_buy_tractor: str = Field(default="No")
    intent_to_buy_harvester: str = Field(default="No")
    caste_category: str = Field(default="General", description="General / SC / ST / OBC")
    is_disabled_or_bpl: str = Field(default="No", description="Disability or BPL status")
    livestock: Dict[str, int] = Field(default_factory=dict, description="Livestock dictionary e.g. {'Cows': 2, 'Buffaloes': 1}")
    crops_last_year: List[str] = Field(default_factory=list)
    crops_this_year: List[str] = Field(default_factory=list)

class SchemeModel(BaseModel):
    scheme_id: Optional[str] = None
    scheme_name: str
    scheme_type: str = Field(default="Central", description="Central or State")
    state: str = Field(default="All India")
    eligible_states: List[str] = Field(default_factory=lambda: ["All India"])
    description: str = ""
    benefits: str = ""
    eligibility: str = ""
    eligible_farmer_categories: List[str] = Field(default_factory=lambda: ["All", "Small", "Marginal"])
    crop_applicability: List[str] = Field(default_factory=lambda: ["All Crops"])
    eligible_crops: List[str] = Field(default_factory=lambda: ["All Crops"])
    livestock_applicability: List[str] = Field(default_factory=lambda: ["Any"])
    eligible_livestock: List[str] = Field(default_factory=lambda: ["Any"])
    sc_st_applicable: bool = False
    is_for_sc_st: bool = False
    fpo_applicable: bool = False
    is_for_fpo: bool = False
    is_for_disabled: bool = False
    land_requirements: str = "0 to 100 Acres"
    min_land_acres: float = 0.0
    max_land_acres: float = 1000.0
    required_documents: List[str] = Field(default_factory=list)
    application_process: str = ""
    official_url: str = ""
    official_source: str = ""
    source_url: str = ""
    discovered_date: str = ""
    application_deadline: str = "Ongoing"
    category: str = "General Subsidy"
    why_matches: Optional[str] = ""

class AIChatRequest(BaseModel):
    farmer_id: str = Field(default="farmer_default", description="ID of the farmer")
    question: str = Field(..., description="Question asked by the farmer")
    profile_override: Optional[Dict[str, Any]] = None

class SchemeSummary(BaseModel):
    scheme_name: str
    scheme_type: str
    benefits: str
    eligibility: str
    why_matches: Optional[str] = ""
    required_documents: List[str] = []
    application_process: str = ""
    official_url: str = ""
    official_source: str = ""
    application_deadline: str = "Ongoing"

class AIChatResponse(BaseModel):
    farmer_id: str
    question: str
    answer: str
    relevant_schemes: List[SchemeSummary] = []
    search_used: bool = False
    sources: List[str] = []

class PipelineRunResponse(BaseModel):
    status: str = Field(..., description="success / warning / error")
    tavily_configured: bool = False
    web_search_succeeded: bool = False
    sources_searched_count: int = 0
    sources_list: List[str] = Field(default_factory=list)
    schemes_discovered_count: int = 0
    schemes_extracted_count: int = 0
    schemes_inserted_count: int = 0
    schemes_updated_count: int = 0
    duplicates_skipped_count: int = 0
    message: str = ""
    sample_extracted_schemes: List[Dict[str, Any]] = Field(default_factory=list)
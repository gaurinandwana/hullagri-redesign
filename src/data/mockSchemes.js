export const MOCK_SCHEMES = [
  {
    "_id": "scheme_pm_kisan",
    "scheme_name": "PM Kisan Samman Nidhi (PM-KISAN)",
    "scheme_type": "Central",
    "category": "Direct Income Support",
    "state": "All India",
    "eligible_states": [
      "All India"
    ],
    "benefits": "₹6,000 per year directly transferred into bank accounts in 3 equal installments of ₹2,000.",
    "description": "Provides income support to all landholding farmer families across the country to enable them to take care of expenses related to agriculture and domestic needs.",
    "eligibility": "Small and marginal landholder farmer families with cultivable land holdings up to 2 hectares (higher limits applicable in specified states). Institutional landholders excluded.",
    "min_land_acres": 0,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Land ownership document (7/12 / Khatauni)",
      "Bank Account linked with Aadhaar"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://pmkisan.gov.in"
  },
  {
    "_id": "scheme_pmfby",
    "scheme_name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    "scheme_type": "Central",
    "category": "Crop Insurance",
    "state": "All India",
    "eligible_states": [
      "All India"
    ],
    "benefits": "Comprehensive crop insurance with minimal farmer premium (1.5% Rabi, 2% Kharif, 5% Commercial/Horticulture) covering up to ₹2,000,000 in yield losses.",
    "description": "Financial support to farmers suffering crop loss/damage arising out of non-preventable natural calamities, unseasonal rains, drought, and pest infestation.",
    "eligibility": "All farmers growing notified crops in notified areas including loanee, non-loanee, tenant farmers, and sharecroppers.",
    "min_land_acres": 0.1,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Pulses",
      "Oilseeds",
      "Maize",
      "Spices",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Sowing Certificate",
      "Land Ownership / Tenancy Agreement",
      "Aadhaar Card",
      "Bank Account Passbook"
    ],
    "application_deadline": "July 31 (Kharif) / Dec 31 (Rabi)",
    "official_url": "https://pmfby.gov.in"
  },
  {
    "_id": "scheme_kcc",
    "scheme_name": "Kisan Credit Card (KCC) Scheme",
    "scheme_type": "Central",
    "category": "Credit Support",
    "state": "All India",
    "eligible_states": [
      "All India"
    ],
    "benefits": "Collateral-free credit up to ₹1.6 Lakh (up to ₹3 Lakh at effective 4% interest rate with 3% prompt repayment subvention).",
    "description": "Simplifies credit delivery for farmers to meet short-term cultivation needs, post-harvest expenses, produce marketing, and farm asset maintenance.",
    "eligibility": "Individual farmers, joint borrowers, tenant farmers, oral lessees, sharecroppers, and Self Help Groups (SHGs) / Joint Liability Groups (JLGs).",
    "min_land_acres": 0,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Pulses",
      "Oilseeds",
      "Maize",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Identity Proof (Aadhaar / Voter ID)",
      "Address Proof",
      "Land Holding Records",
      "Passport Photo"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in"
  },
  {
    "_id": "scheme_pmksy",
    "scheme_name": "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) - Micro Irrigation",
    "scheme_type": "Central",
    "category": "Irrigation",
    "state": "All India",
    "eligible_states": [
      "All India"
    ],
    "benefits": "55% subsidy for Small & Marginal farmers and 45% for Other farmers on drip & sprinkler irrigation installations.",
    "description": "Aims to expand cultivable area under assured irrigation, improve farm water-use efficiency ('More Crop Per Drop'), and promote precision water management.",
    "eligibility": "Farmers holding cultivable land with a verified water source (borewell, canal, farm pond, or open well).",
    "min_land_acres": 0.25,
    "max_land_acres": 12.5,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize",
      "Spices",
      "Wheat",
      "Rice"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Land Extract (7/12 or Khasra)",
      "Electricity Connection / Water Proof",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://pmksy.gov.in"
  },
  {
    "_id": "scheme_smam",
    "scheme_name": "Sub-Mission on Agricultural Mechanization (SMAM)",
    "scheme_type": "Central",
    "category": "Farm Mechanization",
    "state": "All India",
    "eligible_states": [
      "All India"
    ],
    "benefits": "40% to 80% capital subsidy for purchasing tractors, power tillers, combine harvesters, laser land levelers, and establishing Custom Hiring Centres.",
    "description": "Promotes farm mechanization in small farm holdings and creates Custom Hiring Centres (CHCs) to overcome high equipment capital costs.",
    "eligibility": "Individual farmers (SC/ST & Women priority), Farmer Producer Organizations (FPOs), Cooperatives, and Rural Entrepreneurs.",
    "min_land_acres": 0,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize",
      "Pulses"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Land records proof",
      "Caste Certificate (for SC/ST benefit)",
      "Machinery Dealer Quotation"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://agrimachinery.nic.in"
  },
  {
    "_id": "scheme_kusum",
    "scheme_name": "PM-KUSUM Solar Agricultural Pumps Scheme",
    "scheme_type": "Central",
    "category": "Solar & Energy",
    "state": "All India",
    "eligible_states": [
      "All India"
    ],
    "benefits": "60% subsidy (30% Central Govt + 30% State Govt) for installing off-grid solar pumps and solarizing grid-connected agricultural pumps.",
    "description": "De-dieselize agricultural sector, provide energy security to farmers, and allow farmers to sell surplus solar power back to the grid for extra income.",
    "eligibility": "Farmers, Water User Associations, FPOs, and Farmer Cooperatives having land with borewell/open well access.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Land revenue record",
      "Borewell / Tubewell ownership affidavit",
      "Bank Account Details"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://pmkusum.mnre.gov.in"
  },
  {
    "_id": "scheme_pkvy",
    "scheme_name": "Paramparagat Krishi Vikas Yojana (PKVY) - Organic Farming",
    "scheme_type": "Central",
    "category": "Organic Farming",
    "state": "All India",
    "eligible_states": [
      "All India"
    ],
    "benefits": "Financial assistance of ₹50,000 per hectare over 3 years, including ₹31,000 direct assistance for organic seeds, bio-fertilizers & bio-pesticides.",
    "description": "Supports eco-friendly organic farming practices, cluster development, PGS organic certification, and value addition of chemical-free produce.",
    "eligibility": "Farmers formed into clusters of 20 or more having an aggregate area of 50 acres (20 hectares).",
    "min_land_acres": 0.5,
    "max_land_acres": 5,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Fruits",
      "Vegetables",
      "Spices",
      "Wheat",
      "Rice",
      "Oilseeds"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Land holdings proof",
      "Cluster Membership Application",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://pgsindia-ncof.dac.gov.in"
  },
  {
    "_id": "scheme_midh",
    "scheme_name": "Mission for Integrated Development of Horticulture (MIDH)",
    "scheme_type": "Central",
    "category": "Horticulture",
    "state": "All India",
    "eligible_states": [
      "All India"
    ],
    "benefits": "40% to 50% subsidy for shade-net houses, polyhouses, high-density fruit orchards, cold storage units, and tissue culture propagation.",
    "description": "Promotes holistic growth of the horticulture sector including fruits, vegetables, root crops, spices, flowers, aromatic plants, and cashew.",
    "eligibility": "Individual farmers, FPOs, Self Help Groups, and registered horticulture cooperatives.",
    "min_land_acres": 0.2,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Vegetables",
      "Spices"
    ],
    "documents_required": [
      "Land ownership proof",
      "Aadhaar Card",
      "Detailed Project Plan / Invoice",
      "Bank Account Details"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://midh.gov.in"
  },
  {
    "_id": "scheme_aif",
    "scheme_name": "Agriculture Infrastructure Fund (AIF)",
    "scheme_type": "Central",
    "category": "Credit Support",
    "state": "All India",
    "eligible_states": [
      "All India"
    ],
    "benefits": "3% interest subvention per annum up to ₹2 Crore for up to 7 years, plus credit guarantee coverage under CGTMSE.",
    "description": "Medium-long term debt financing facility for investment in viable projects for post-harvest management infrastructure and community farming assets.",
    "eligibility": "Primary Agricultural Credit Societies (PACS), FPOs, Agri-entrepreneurs, Startups, and Central/State agencies.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Project DPR",
      "KYC Documents",
      "Land Title Deeds",
      "Bank Application"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://agriinfra.dac.gov.in"
  },
  {
    "_id": "scheme_shc",
    "scheme_name": "Soil Health Card Scheme",
    "scheme_type": "Central",
    "category": "Direct Income Support",
    "state": "All India",
    "eligible_states": [
      "All India"
    ],
    "benefits": "Free soil testing and custom soil health card issuing nutrient status (12 parameters) & fertilizer recommendations.",
    "description": "Helps farmers test their soil quality every 2 years to apply exact recommended dosages of N, P, K and micro-nutrients, cutting fertilizer expenditure.",
    "eligibility": "All farmers owning cultivable land across India.",
    "min_land_acres": 0,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Land Sample Identifier"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://soilhealth.dac.gov.in"
  },
  {
    "_id": "scheme_enam",
    "scheme_name": "National Agriculture Market (e-NAM)",
    "scheme_type": "Central",
    "category": "Market Infrastructure",
    "state": "All India",
    "eligible_states": [
      "All India"
    ],
    "benefits": "Pan-India electronic trading portal linking existing APMC mandis to create a unified national market for agricultural commodities.",
    "description": "Promotes uniformity in agriculture marketing by streamlining procedures across integrated markets, removing information asymmetry between buyers and sellers.",
    "eligibility": "All farmers, FPOs, traders, and commission agents registered with APMC mandis.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Pulses",
      "Oilseeds"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Bank Account Details",
      "Mandi Registration Number"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://enam.gov.in"
  },
  {
    "_id": "scheme_pmmsy",
    "scheme_name": "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
    "scheme_type": "Central",
    "category": "Livestock & Animal Husbandry",
    "state": "All India",
    "eligible_states": [
      "All India"
    ],
    "benefits": "40% financial assistance for General category and 60% for SC/ST/Women for fish farming, pond construction, and biofloc units.",
    "description": "Drives sustainable development of fisheries sector, boosting fish production and modernizing post-harvest infrastructure.",
    "eligibility": "Fishers, Fish Farmers, Fish Workers, Fish Vendors, SC/ST/Women beneficiaries, and FPOs.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fish",
      "Prawns"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Water body title deed / Lease agreement",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://pmmsy.dof.gov.in"
  },
  {
    "_id": "scheme_nlm",
    "scheme_name": "National Livestock Mission (NLM) - Breed Improvement",
    "scheme_type": "Central",
    "category": "Livestock & Animal Husbandry",
    "state": "All India",
    "eligible_states": [
      "All India"
    ],
    "benefits": "50% capital subsidy (up to ₹50 Lakh) for establishing poultry, sheep, goat, and pig breeding farms and fodder processing units.",
    "description": "Aims at sustainable livestock development, improving genetics of native breeds, feed and fodder security, and livestock entrepreneurship.",
    "eligibility": "Individual entrepreneurs, FPOs, Farmers, Section 8 companies, and SHGs.",
    "min_land_acres": 0.5,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Detailed Project Report (DPR)",
      "Land Ownership Proof",
      "Aadhaar Card",
      "Bank Loan Sanction Letter"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://nlm.udyamimitra.in"
  },
  {
    "_id": "scheme_pmfme",
    "scheme_name": "PM Formalisation of Micro Food Processing Enterprises (PMFME)",
    "scheme_type": "Central",
    "category": "Market Infrastructure",
    "state": "All India",
    "eligible_states": [
      "All India"
    ],
    "benefits": "35% credit-linked capital subsidy up to ₹10 Lakh for micro food processing units (flour mills, oil extraction, spice grinding, fruit processing).",
    "description": "Enhances competitiveness of individual micro-enterprises in unorganized food processing sector and promotes formalization.",
    "eligibility": "Existing micro food processing units, FPOs, SHGs, and Farmer Cooperatives.",
    "min_land_acres": 0,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "All Crops",
      "Fruits",
      "Vegetables",
      "Spices",
      "Wheat",
      "Rice"
    ],
    "documents_required": [
      "Aadhaar Card",
      "FSSAI Registration / Application",
      "Udyam Aadhaar",
      "Bank Quotation"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://pmfme.mofpi.gov.in"
  },
  {
    "_id": "scheme_rkvy",
    "scheme_name": "Rashtriya Krishi Vikas Yojana (RKVY-RAFTAAR)",
    "scheme_type": "Central",
    "category": "Direct Income Support",
    "state": "All India",
    "eligible_states": [
      "All India"
    ],
    "benefits": "Grants-in-aid up to ₹25 Lakh for agri-startups, innovation incubators, and state-specific agricultural infrastructure development.",
    "description": "Incentivizes states to increase public investment in agriculture and allied sectors while encouraging agri-entrepreneurship and innovation.",
    "eligibility": "Farmers, Agri-startups, FPOs, Cooperatives, and State Agriculture Departments.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Business Plan",
      "Aadhaar Card",
      "Incorporation / Registration Certificate"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://rkvy.nic.in"
  },
  {
    "_id": "scheme_state_punjab_1",
    "scheme_name": "Punjab State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Punjab",
    "eligible_states": [
      "Punjab"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Punjab State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Punjab.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Punjab Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Punjab"
  },
  {
    "_id": "scheme_state_punjab_2",
    "scheme_name": "Punjab State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Punjab",
    "eligible_states": [
      "Punjab"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Punjab State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Punjab.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Punjab Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Punjab"
  },
  {
    "_id": "scheme_state_punjab_3",
    "scheme_name": "Punjab State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Punjab",
    "eligible_states": [
      "Punjab"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Punjab State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Punjab.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Punjab Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Punjab"
  },
  {
    "_id": "scheme_state_punjab_4",
    "scheme_name": "Punjab State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Punjab",
    "eligible_states": [
      "Punjab"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Punjab State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Punjab.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Punjab Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Punjab"
  },
  {
    "_id": "scheme_state_punjab_5",
    "scheme_name": "Punjab State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Punjab",
    "eligible_states": [
      "Punjab"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Punjab State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Punjab.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Punjab Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Punjab"
  },
  {
    "_id": "scheme_state_punjab_6",
    "scheme_name": "Punjab State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Punjab",
    "eligible_states": [
      "Punjab"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Punjab State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Punjab.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Punjab Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Punjab"
  },
  {
    "_id": "scheme_state_punjab_7",
    "scheme_name": "Punjab State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Punjab",
    "eligible_states": [
      "Punjab"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Punjab State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Punjab.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Punjab Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Punjab"
  },
  {
    "_id": "scheme_state_punjab_8",
    "scheme_name": "Punjab State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Punjab",
    "eligible_states": [
      "Punjab"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Punjab State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Punjab.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Punjab Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Punjab"
  },
  {
    "_id": "scheme_state_punjab_9",
    "scheme_name": "Punjab State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Punjab",
    "eligible_states": [
      "Punjab"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Punjab State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Punjab.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Punjab Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Punjab"
  },
  {
    "_id": "scheme_state_punjab_10",
    "scheme_name": "Punjab State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Punjab",
    "eligible_states": [
      "Punjab"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Punjab State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Punjab.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Punjab Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Punjab"
  },
  {
    "_id": "scheme_state_punjab_11",
    "scheme_name": "Punjab State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Punjab",
    "eligible_states": [
      "Punjab"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Punjab State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Punjab.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Punjab Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Punjab"
  },
  {
    "_id": "scheme_state_haryana_12",
    "scheme_name": "Haryana State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Haryana",
    "eligible_states": [
      "Haryana"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Haryana State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Haryana.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Haryana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Haryana"
  },
  {
    "_id": "scheme_state_haryana_13",
    "scheme_name": "Haryana State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Haryana",
    "eligible_states": [
      "Haryana"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Haryana State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Haryana.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Haryana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Haryana"
  },
  {
    "_id": "scheme_state_haryana_14",
    "scheme_name": "Haryana State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Haryana",
    "eligible_states": [
      "Haryana"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Haryana State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Haryana.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Haryana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Haryana"
  },
  {
    "_id": "scheme_state_haryana_15",
    "scheme_name": "Haryana State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Haryana",
    "eligible_states": [
      "Haryana"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Haryana State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Haryana.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Haryana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Haryana"
  },
  {
    "_id": "scheme_state_haryana_16",
    "scheme_name": "Haryana State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Haryana",
    "eligible_states": [
      "Haryana"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Haryana State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Haryana.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Haryana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Haryana"
  },
  {
    "_id": "scheme_state_haryana_17",
    "scheme_name": "Haryana State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Haryana",
    "eligible_states": [
      "Haryana"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Haryana State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Haryana.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Haryana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Haryana"
  },
  {
    "_id": "scheme_state_haryana_18",
    "scheme_name": "Haryana State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Haryana",
    "eligible_states": [
      "Haryana"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Haryana State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Haryana.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Haryana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Haryana"
  },
  {
    "_id": "scheme_state_haryana_19",
    "scheme_name": "Haryana State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Haryana",
    "eligible_states": [
      "Haryana"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Haryana State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Haryana.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Haryana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Haryana"
  },
  {
    "_id": "scheme_state_haryana_20",
    "scheme_name": "Haryana State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Haryana",
    "eligible_states": [
      "Haryana"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Haryana State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Haryana.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Haryana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Haryana"
  },
  {
    "_id": "scheme_state_haryana_21",
    "scheme_name": "Haryana State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Haryana",
    "eligible_states": [
      "Haryana"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Haryana State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Haryana.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Haryana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Haryana"
  },
  {
    "_id": "scheme_state_haryana_22",
    "scheme_name": "Haryana State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Haryana",
    "eligible_states": [
      "Haryana"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Haryana State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Haryana.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Haryana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Haryana"
  },
  {
    "_id": "scheme_state_uttar_pradesh_23",
    "scheme_name": "Uttar Pradesh State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Uttar Pradesh",
    "eligible_states": [
      "Uttar Pradesh"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Uttar Pradesh State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Uttar Pradesh.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Uttar Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Uttar%20Pradesh"
  },
  {
    "_id": "scheme_state_uttar_pradesh_24",
    "scheme_name": "Uttar Pradesh State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Uttar Pradesh",
    "eligible_states": [
      "Uttar Pradesh"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Uttar Pradesh State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Uttar Pradesh.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Uttar Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Uttar%20Pradesh"
  },
  {
    "_id": "scheme_state_uttar_pradesh_25",
    "scheme_name": "Uttar Pradesh State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Uttar Pradesh",
    "eligible_states": [
      "Uttar Pradesh"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Uttar Pradesh State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Uttar Pradesh.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Uttar Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Uttar%20Pradesh"
  },
  {
    "_id": "scheme_state_uttar_pradesh_26",
    "scheme_name": "Uttar Pradesh State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Uttar Pradesh",
    "eligible_states": [
      "Uttar Pradesh"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Uttar Pradesh State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Uttar Pradesh.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Uttar Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Uttar%20Pradesh"
  },
  {
    "_id": "scheme_state_uttar_pradesh_27",
    "scheme_name": "Uttar Pradesh State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Uttar Pradesh",
    "eligible_states": [
      "Uttar Pradesh"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Uttar Pradesh State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Uttar Pradesh.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Uttar Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Uttar%20Pradesh"
  },
  {
    "_id": "scheme_state_uttar_pradesh_28",
    "scheme_name": "Uttar Pradesh State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Uttar Pradesh",
    "eligible_states": [
      "Uttar Pradesh"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Uttar Pradesh State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Uttar Pradesh.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Uttar Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Uttar%20Pradesh"
  },
  {
    "_id": "scheme_state_uttar_pradesh_29",
    "scheme_name": "Uttar Pradesh State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Uttar Pradesh",
    "eligible_states": [
      "Uttar Pradesh"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Uttar Pradesh State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Uttar Pradesh.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Uttar Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Uttar%20Pradesh"
  },
  {
    "_id": "scheme_state_uttar_pradesh_30",
    "scheme_name": "Uttar Pradesh State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Uttar Pradesh",
    "eligible_states": [
      "Uttar Pradesh"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Uttar Pradesh State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Uttar Pradesh.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Uttar Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Uttar%20Pradesh"
  },
  {
    "_id": "scheme_state_uttar_pradesh_31",
    "scheme_name": "Uttar Pradesh State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Uttar Pradesh",
    "eligible_states": [
      "Uttar Pradesh"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Uttar Pradesh State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Uttar Pradesh.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Uttar Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Uttar%20Pradesh"
  },
  {
    "_id": "scheme_state_uttar_pradesh_32",
    "scheme_name": "Uttar Pradesh State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Uttar Pradesh",
    "eligible_states": [
      "Uttar Pradesh"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Uttar Pradesh State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Uttar Pradesh.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Uttar Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Uttar%20Pradesh"
  },
  {
    "_id": "scheme_state_uttar_pradesh_33",
    "scheme_name": "Uttar Pradesh State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Uttar Pradesh",
    "eligible_states": [
      "Uttar Pradesh"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Uttar Pradesh State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Uttar Pradesh.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Uttar Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Uttar%20Pradesh"
  },
  {
    "_id": "scheme_state_madhya_pradesh_34",
    "scheme_name": "Madhya Pradesh State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Madhya Pradesh",
    "eligible_states": [
      "Madhya Pradesh"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Madhya Pradesh State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Madhya Pradesh.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Madhya Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Madhya%20Pradesh"
  },
  {
    "_id": "scheme_state_madhya_pradesh_35",
    "scheme_name": "Madhya Pradesh State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Madhya Pradesh",
    "eligible_states": [
      "Madhya Pradesh"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Madhya Pradesh State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Madhya Pradesh.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Madhya Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Madhya%20Pradesh"
  },
  {
    "_id": "scheme_state_madhya_pradesh_36",
    "scheme_name": "Madhya Pradesh State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Madhya Pradesh",
    "eligible_states": [
      "Madhya Pradesh"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Madhya Pradesh State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Madhya Pradesh.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Madhya Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Madhya%20Pradesh"
  },
  {
    "_id": "scheme_state_madhya_pradesh_37",
    "scheme_name": "Madhya Pradesh State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Madhya Pradesh",
    "eligible_states": [
      "Madhya Pradesh"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Madhya Pradesh State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Madhya Pradesh.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Madhya Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Madhya%20Pradesh"
  },
  {
    "_id": "scheme_state_madhya_pradesh_38",
    "scheme_name": "Madhya Pradesh State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Madhya Pradesh",
    "eligible_states": [
      "Madhya Pradesh"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Madhya Pradesh State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Madhya Pradesh.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Madhya Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Madhya%20Pradesh"
  },
  {
    "_id": "scheme_state_madhya_pradesh_39",
    "scheme_name": "Madhya Pradesh State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Madhya Pradesh",
    "eligible_states": [
      "Madhya Pradesh"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Madhya Pradesh State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Madhya Pradesh.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Madhya Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Madhya%20Pradesh"
  },
  {
    "_id": "scheme_state_madhya_pradesh_40",
    "scheme_name": "Madhya Pradesh State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Madhya Pradesh",
    "eligible_states": [
      "Madhya Pradesh"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Madhya Pradesh State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Madhya Pradesh.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Madhya Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Madhya%20Pradesh"
  },
  {
    "_id": "scheme_state_madhya_pradesh_41",
    "scheme_name": "Madhya Pradesh State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Madhya Pradesh",
    "eligible_states": [
      "Madhya Pradesh"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Madhya Pradesh State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Madhya Pradesh.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Madhya Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Madhya%20Pradesh"
  },
  {
    "_id": "scheme_state_madhya_pradesh_42",
    "scheme_name": "Madhya Pradesh State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Madhya Pradesh",
    "eligible_states": [
      "Madhya Pradesh"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Madhya Pradesh State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Madhya Pradesh.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Madhya Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Madhya%20Pradesh"
  },
  {
    "_id": "scheme_state_madhya_pradesh_43",
    "scheme_name": "Madhya Pradesh State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Madhya Pradesh",
    "eligible_states": [
      "Madhya Pradesh"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Madhya Pradesh State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Madhya Pradesh.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Madhya Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Madhya%20Pradesh"
  },
  {
    "_id": "scheme_state_madhya_pradesh_44",
    "scheme_name": "Madhya Pradesh State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Madhya Pradesh",
    "eligible_states": [
      "Madhya Pradesh"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Madhya Pradesh State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Madhya Pradesh.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Madhya Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Madhya%20Pradesh"
  },
  {
    "_id": "scheme_state_maharashtra_45",
    "scheme_name": "Maharashtra State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Maharashtra",
    "eligible_states": [
      "Maharashtra"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Maharashtra State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Maharashtra.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Maharashtra Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Maharashtra"
  },
  {
    "_id": "scheme_state_maharashtra_46",
    "scheme_name": "Maharashtra State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Maharashtra",
    "eligible_states": [
      "Maharashtra"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Maharashtra State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Maharashtra.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Maharashtra Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Maharashtra"
  },
  {
    "_id": "scheme_state_maharashtra_47",
    "scheme_name": "Maharashtra State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Maharashtra",
    "eligible_states": [
      "Maharashtra"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Maharashtra State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Maharashtra.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Maharashtra Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Maharashtra"
  },
  {
    "_id": "scheme_state_maharashtra_48",
    "scheme_name": "Maharashtra State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Maharashtra",
    "eligible_states": [
      "Maharashtra"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Maharashtra State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Maharashtra.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Maharashtra Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Maharashtra"
  },
  {
    "_id": "scheme_state_maharashtra_49",
    "scheme_name": "Maharashtra State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Maharashtra",
    "eligible_states": [
      "Maharashtra"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Maharashtra State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Maharashtra.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Maharashtra Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Maharashtra"
  },
  {
    "_id": "scheme_state_maharashtra_50",
    "scheme_name": "Maharashtra State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Maharashtra",
    "eligible_states": [
      "Maharashtra"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Maharashtra State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Maharashtra.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Maharashtra Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Maharashtra"
  },
  {
    "_id": "scheme_state_maharashtra_51",
    "scheme_name": "Maharashtra State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Maharashtra",
    "eligible_states": [
      "Maharashtra"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Maharashtra State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Maharashtra.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Maharashtra Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Maharashtra"
  },
  {
    "_id": "scheme_state_maharashtra_52",
    "scheme_name": "Maharashtra State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Maharashtra",
    "eligible_states": [
      "Maharashtra"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Maharashtra State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Maharashtra.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Maharashtra Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Maharashtra"
  },
  {
    "_id": "scheme_state_maharashtra_53",
    "scheme_name": "Maharashtra State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Maharashtra",
    "eligible_states": [
      "Maharashtra"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Maharashtra State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Maharashtra.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Maharashtra Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Maharashtra"
  },
  {
    "_id": "scheme_state_maharashtra_54",
    "scheme_name": "Maharashtra State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Maharashtra",
    "eligible_states": [
      "Maharashtra"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Maharashtra State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Maharashtra.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Maharashtra Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Maharashtra"
  },
  {
    "_id": "scheme_state_maharashtra_55",
    "scheme_name": "Maharashtra State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Maharashtra",
    "eligible_states": [
      "Maharashtra"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Maharashtra State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Maharashtra.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Maharashtra Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Maharashtra"
  },
  {
    "_id": "scheme_state_rajasthan_56",
    "scheme_name": "Rajasthan State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Rajasthan",
    "eligible_states": [
      "Rajasthan"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Rajasthan State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Rajasthan.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Rajasthan Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Rajasthan"
  },
  {
    "_id": "scheme_state_rajasthan_57",
    "scheme_name": "Rajasthan State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Rajasthan",
    "eligible_states": [
      "Rajasthan"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Rajasthan State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Rajasthan.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Rajasthan Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Rajasthan"
  },
  {
    "_id": "scheme_state_rajasthan_58",
    "scheme_name": "Rajasthan State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Rajasthan",
    "eligible_states": [
      "Rajasthan"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Rajasthan State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Rajasthan.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Rajasthan Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Rajasthan"
  },
  {
    "_id": "scheme_state_rajasthan_59",
    "scheme_name": "Rajasthan State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Rajasthan",
    "eligible_states": [
      "Rajasthan"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Rajasthan State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Rajasthan.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Rajasthan Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Rajasthan"
  },
  {
    "_id": "scheme_state_rajasthan_60",
    "scheme_name": "Rajasthan State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Rajasthan",
    "eligible_states": [
      "Rajasthan"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Rajasthan State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Rajasthan.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Rajasthan Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Rajasthan"
  },
  {
    "_id": "scheme_state_rajasthan_61",
    "scheme_name": "Rajasthan State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Rajasthan",
    "eligible_states": [
      "Rajasthan"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Rajasthan State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Rajasthan.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Rajasthan Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Rajasthan"
  },
  {
    "_id": "scheme_state_rajasthan_62",
    "scheme_name": "Rajasthan State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Rajasthan",
    "eligible_states": [
      "Rajasthan"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Rajasthan State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Rajasthan.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Rajasthan Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Rajasthan"
  },
  {
    "_id": "scheme_state_rajasthan_63",
    "scheme_name": "Rajasthan State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Rajasthan",
    "eligible_states": [
      "Rajasthan"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Rajasthan State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Rajasthan.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Rajasthan Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Rajasthan"
  },
  {
    "_id": "scheme_state_rajasthan_64",
    "scheme_name": "Rajasthan State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Rajasthan",
    "eligible_states": [
      "Rajasthan"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Rajasthan State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Rajasthan.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Rajasthan Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Rajasthan"
  },
  {
    "_id": "scheme_state_rajasthan_65",
    "scheme_name": "Rajasthan State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Rajasthan",
    "eligible_states": [
      "Rajasthan"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Rajasthan State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Rajasthan.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Rajasthan Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Rajasthan"
  },
  {
    "_id": "scheme_state_rajasthan_66",
    "scheme_name": "Rajasthan State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Rajasthan",
    "eligible_states": [
      "Rajasthan"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Rajasthan State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Rajasthan.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Rajasthan Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Rajasthan"
  },
  {
    "_id": "scheme_state_karnataka_67",
    "scheme_name": "Karnataka State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Karnataka",
    "eligible_states": [
      "Karnataka"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Karnataka State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Karnataka.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Karnataka Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Karnataka"
  },
  {
    "_id": "scheme_state_karnataka_68",
    "scheme_name": "Karnataka State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Karnataka",
    "eligible_states": [
      "Karnataka"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Karnataka State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Karnataka.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Karnataka Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Karnataka"
  },
  {
    "_id": "scheme_state_karnataka_69",
    "scheme_name": "Karnataka State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Karnataka",
    "eligible_states": [
      "Karnataka"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Karnataka State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Karnataka.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Karnataka Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Karnataka"
  },
  {
    "_id": "scheme_state_karnataka_70",
    "scheme_name": "Karnataka State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Karnataka",
    "eligible_states": [
      "Karnataka"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Karnataka State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Karnataka.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Karnataka Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Karnataka"
  },
  {
    "_id": "scheme_state_karnataka_71",
    "scheme_name": "Karnataka State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Karnataka",
    "eligible_states": [
      "Karnataka"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Karnataka State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Karnataka.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Karnataka Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Karnataka"
  },
  {
    "_id": "scheme_state_karnataka_72",
    "scheme_name": "Karnataka State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Karnataka",
    "eligible_states": [
      "Karnataka"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Karnataka State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Karnataka.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Karnataka Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Karnataka"
  },
  {
    "_id": "scheme_state_karnataka_73",
    "scheme_name": "Karnataka State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Karnataka",
    "eligible_states": [
      "Karnataka"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Karnataka State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Karnataka.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Karnataka Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Karnataka"
  },
  {
    "_id": "scheme_state_karnataka_74",
    "scheme_name": "Karnataka State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Karnataka",
    "eligible_states": [
      "Karnataka"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Karnataka State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Karnataka.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Karnataka Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Karnataka"
  },
  {
    "_id": "scheme_state_karnataka_75",
    "scheme_name": "Karnataka State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Karnataka",
    "eligible_states": [
      "Karnataka"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Karnataka State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Karnataka.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Karnataka Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Karnataka"
  },
  {
    "_id": "scheme_state_karnataka_76",
    "scheme_name": "Karnataka State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Karnataka",
    "eligible_states": [
      "Karnataka"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Karnataka State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Karnataka.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Karnataka Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Karnataka"
  },
  {
    "_id": "scheme_state_karnataka_77",
    "scheme_name": "Karnataka State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Karnataka",
    "eligible_states": [
      "Karnataka"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Karnataka State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Karnataka.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Karnataka Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Karnataka"
  },
  {
    "_id": "scheme_state_tamil_nadu_78",
    "scheme_name": "Tamil Nadu State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Tamil Nadu",
    "eligible_states": [
      "Tamil Nadu"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Tamil Nadu State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Tamil Nadu.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Tamil Nadu Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Tamil%20Nadu"
  },
  {
    "_id": "scheme_state_tamil_nadu_79",
    "scheme_name": "Tamil Nadu State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Tamil Nadu",
    "eligible_states": [
      "Tamil Nadu"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Tamil Nadu State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Tamil Nadu.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Tamil Nadu Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Tamil%20Nadu"
  },
  {
    "_id": "scheme_state_tamil_nadu_80",
    "scheme_name": "Tamil Nadu State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Tamil Nadu",
    "eligible_states": [
      "Tamil Nadu"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Tamil Nadu State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Tamil Nadu.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Tamil Nadu Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Tamil%20Nadu"
  },
  {
    "_id": "scheme_state_tamil_nadu_81",
    "scheme_name": "Tamil Nadu State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Tamil Nadu",
    "eligible_states": [
      "Tamil Nadu"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Tamil Nadu State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Tamil Nadu.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Tamil Nadu Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Tamil%20Nadu"
  },
  {
    "_id": "scheme_state_tamil_nadu_82",
    "scheme_name": "Tamil Nadu State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Tamil Nadu",
    "eligible_states": [
      "Tamil Nadu"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Tamil Nadu State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Tamil Nadu.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Tamil Nadu Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Tamil%20Nadu"
  },
  {
    "_id": "scheme_state_tamil_nadu_83",
    "scheme_name": "Tamil Nadu State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Tamil Nadu",
    "eligible_states": [
      "Tamil Nadu"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Tamil Nadu State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Tamil Nadu.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Tamil Nadu Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Tamil%20Nadu"
  },
  {
    "_id": "scheme_state_tamil_nadu_84",
    "scheme_name": "Tamil Nadu State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Tamil Nadu",
    "eligible_states": [
      "Tamil Nadu"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Tamil Nadu State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Tamil Nadu.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Tamil Nadu Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Tamil%20Nadu"
  },
  {
    "_id": "scheme_state_tamil_nadu_85",
    "scheme_name": "Tamil Nadu State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Tamil Nadu",
    "eligible_states": [
      "Tamil Nadu"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Tamil Nadu State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Tamil Nadu.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Tamil Nadu Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Tamil%20Nadu"
  },
  {
    "_id": "scheme_state_tamil_nadu_86",
    "scheme_name": "Tamil Nadu State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Tamil Nadu",
    "eligible_states": [
      "Tamil Nadu"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Tamil Nadu State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Tamil Nadu.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Tamil Nadu Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Tamil%20Nadu"
  },
  {
    "_id": "scheme_state_tamil_nadu_87",
    "scheme_name": "Tamil Nadu State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Tamil Nadu",
    "eligible_states": [
      "Tamil Nadu"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Tamil Nadu State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Tamil Nadu.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Tamil Nadu Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Tamil%20Nadu"
  },
  {
    "_id": "scheme_state_tamil_nadu_88",
    "scheme_name": "Tamil Nadu State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Tamil Nadu",
    "eligible_states": [
      "Tamil Nadu"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Tamil Nadu State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Tamil Nadu.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Tamil Nadu Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Tamil%20Nadu"
  },
  {
    "_id": "scheme_state_andhra_pradesh_89",
    "scheme_name": "Andhra Pradesh State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Andhra Pradesh",
    "eligible_states": [
      "Andhra Pradesh"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Andhra Pradesh State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Andhra Pradesh.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Andhra Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Andhra%20Pradesh"
  },
  {
    "_id": "scheme_state_andhra_pradesh_90",
    "scheme_name": "Andhra Pradesh State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Andhra Pradesh",
    "eligible_states": [
      "Andhra Pradesh"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Andhra Pradesh State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Andhra Pradesh.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Andhra Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Andhra%20Pradesh"
  },
  {
    "_id": "scheme_state_andhra_pradesh_91",
    "scheme_name": "Andhra Pradesh State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Andhra Pradesh",
    "eligible_states": [
      "Andhra Pradesh"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Andhra Pradesh State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Andhra Pradesh.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Andhra Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Andhra%20Pradesh"
  },
  {
    "_id": "scheme_state_andhra_pradesh_92",
    "scheme_name": "Andhra Pradesh State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Andhra Pradesh",
    "eligible_states": [
      "Andhra Pradesh"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Andhra Pradesh State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Andhra Pradesh.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Andhra Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Andhra%20Pradesh"
  },
  {
    "_id": "scheme_state_andhra_pradesh_93",
    "scheme_name": "Andhra Pradesh State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Andhra Pradesh",
    "eligible_states": [
      "Andhra Pradesh"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Andhra Pradesh State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Andhra Pradesh.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Andhra Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Andhra%20Pradesh"
  },
  {
    "_id": "scheme_state_andhra_pradesh_94",
    "scheme_name": "Andhra Pradesh State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Andhra Pradesh",
    "eligible_states": [
      "Andhra Pradesh"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Andhra Pradesh State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Andhra Pradesh.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Andhra Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Andhra%20Pradesh"
  },
  {
    "_id": "scheme_state_andhra_pradesh_95",
    "scheme_name": "Andhra Pradesh State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Andhra Pradesh",
    "eligible_states": [
      "Andhra Pradesh"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Andhra Pradesh State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Andhra Pradesh.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Andhra Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Andhra%20Pradesh"
  },
  {
    "_id": "scheme_state_andhra_pradesh_96",
    "scheme_name": "Andhra Pradesh State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Andhra Pradesh",
    "eligible_states": [
      "Andhra Pradesh"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Andhra Pradesh State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Andhra Pradesh.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Andhra Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Andhra%20Pradesh"
  },
  {
    "_id": "scheme_state_andhra_pradesh_97",
    "scheme_name": "Andhra Pradesh State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Andhra Pradesh",
    "eligible_states": [
      "Andhra Pradesh"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Andhra Pradesh State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Andhra Pradesh.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Andhra Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Andhra%20Pradesh"
  },
  {
    "_id": "scheme_state_andhra_pradesh_98",
    "scheme_name": "Andhra Pradesh State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Andhra Pradesh",
    "eligible_states": [
      "Andhra Pradesh"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Andhra Pradesh State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Andhra Pradesh.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Andhra Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Andhra%20Pradesh"
  },
  {
    "_id": "scheme_state_andhra_pradesh_99",
    "scheme_name": "Andhra Pradesh State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Andhra Pradesh",
    "eligible_states": [
      "Andhra Pradesh"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Andhra Pradesh State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Andhra Pradesh.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Andhra Pradesh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Andhra%20Pradesh"
  },
  {
    "_id": "scheme_state_gujarat_100",
    "scheme_name": "Gujarat State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Gujarat",
    "eligible_states": [
      "Gujarat"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Gujarat State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Gujarat.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Gujarat Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Gujarat"
  },
  {
    "_id": "scheme_state_gujarat_101",
    "scheme_name": "Gujarat State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Gujarat",
    "eligible_states": [
      "Gujarat"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Gujarat State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Gujarat.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Gujarat Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Gujarat"
  },
  {
    "_id": "scheme_state_gujarat_102",
    "scheme_name": "Gujarat State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Gujarat",
    "eligible_states": [
      "Gujarat"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Gujarat State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Gujarat.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Gujarat Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Gujarat"
  },
  {
    "_id": "scheme_state_gujarat_103",
    "scheme_name": "Gujarat State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Gujarat",
    "eligible_states": [
      "Gujarat"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Gujarat State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Gujarat.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Gujarat Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Gujarat"
  },
  {
    "_id": "scheme_state_gujarat_104",
    "scheme_name": "Gujarat State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Gujarat",
    "eligible_states": [
      "Gujarat"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Gujarat State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Gujarat.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Gujarat Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Gujarat"
  },
  {
    "_id": "scheme_state_gujarat_105",
    "scheme_name": "Gujarat State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Gujarat",
    "eligible_states": [
      "Gujarat"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Gujarat State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Gujarat.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Gujarat Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Gujarat"
  },
  {
    "_id": "scheme_state_gujarat_106",
    "scheme_name": "Gujarat State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Gujarat",
    "eligible_states": [
      "Gujarat"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Gujarat State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Gujarat.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Gujarat Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Gujarat"
  },
  {
    "_id": "scheme_state_gujarat_107",
    "scheme_name": "Gujarat State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Gujarat",
    "eligible_states": [
      "Gujarat"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Gujarat State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Gujarat.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Gujarat Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Gujarat"
  },
  {
    "_id": "scheme_state_gujarat_108",
    "scheme_name": "Gujarat State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Gujarat",
    "eligible_states": [
      "Gujarat"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Gujarat State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Gujarat.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Gujarat Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Gujarat"
  },
  {
    "_id": "scheme_state_gujarat_109",
    "scheme_name": "Gujarat State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Gujarat",
    "eligible_states": [
      "Gujarat"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Gujarat State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Gujarat.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Gujarat Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Gujarat"
  },
  {
    "_id": "scheme_state_gujarat_110",
    "scheme_name": "Gujarat State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Gujarat",
    "eligible_states": [
      "Gujarat"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Gujarat State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Gujarat.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Gujarat Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Gujarat"
  },
  {
    "_id": "scheme_state_bihar_111",
    "scheme_name": "Bihar State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Bihar",
    "eligible_states": [
      "Bihar"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Bihar State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Bihar.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Bihar Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Bihar"
  },
  {
    "_id": "scheme_state_bihar_112",
    "scheme_name": "Bihar State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Bihar",
    "eligible_states": [
      "Bihar"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Bihar State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Bihar.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Bihar Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Bihar"
  },
  {
    "_id": "scheme_state_bihar_113",
    "scheme_name": "Bihar State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Bihar",
    "eligible_states": [
      "Bihar"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Bihar State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Bihar.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Bihar Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Bihar"
  },
  {
    "_id": "scheme_state_bihar_114",
    "scheme_name": "Bihar State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Bihar",
    "eligible_states": [
      "Bihar"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Bihar State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Bihar.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Bihar Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Bihar"
  },
  {
    "_id": "scheme_state_bihar_115",
    "scheme_name": "Bihar State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Bihar",
    "eligible_states": [
      "Bihar"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Bihar State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Bihar.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Bihar Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Bihar"
  },
  {
    "_id": "scheme_state_bihar_116",
    "scheme_name": "Bihar State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Bihar",
    "eligible_states": [
      "Bihar"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Bihar State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Bihar.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Bihar Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Bihar"
  },
  {
    "_id": "scheme_state_bihar_117",
    "scheme_name": "Bihar State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Bihar",
    "eligible_states": [
      "Bihar"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Bihar State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Bihar.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Bihar Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Bihar"
  },
  {
    "_id": "scheme_state_bihar_118",
    "scheme_name": "Bihar State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Bihar",
    "eligible_states": [
      "Bihar"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Bihar State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Bihar.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Bihar Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Bihar"
  },
  {
    "_id": "scheme_state_bihar_119",
    "scheme_name": "Bihar State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Bihar",
    "eligible_states": [
      "Bihar"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Bihar State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Bihar.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Bihar Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Bihar"
  },
  {
    "_id": "scheme_state_bihar_120",
    "scheme_name": "Bihar State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Bihar",
    "eligible_states": [
      "Bihar"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Bihar State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Bihar.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Bihar Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Bihar"
  },
  {
    "_id": "scheme_state_bihar_121",
    "scheme_name": "Bihar State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Bihar",
    "eligible_states": [
      "Bihar"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Bihar State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Bihar.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Bihar Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Bihar"
  },
  {
    "_id": "scheme_state_west_bengal_122",
    "scheme_name": "West Bengal State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "West Bengal",
    "eligible_states": [
      "West Bengal"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "West Bengal State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in West Bengal.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "West Bengal Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=West%20Bengal"
  },
  {
    "_id": "scheme_state_west_bengal_123",
    "scheme_name": "West Bengal State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "West Bengal",
    "eligible_states": [
      "West Bengal"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "West Bengal State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in West Bengal.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "West Bengal Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=West%20Bengal"
  },
  {
    "_id": "scheme_state_west_bengal_124",
    "scheme_name": "West Bengal State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "West Bengal",
    "eligible_states": [
      "West Bengal"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "West Bengal State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in West Bengal.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "West Bengal Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=West%20Bengal"
  },
  {
    "_id": "scheme_state_west_bengal_125",
    "scheme_name": "West Bengal State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "West Bengal",
    "eligible_states": [
      "West Bengal"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "West Bengal State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in West Bengal.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "West Bengal Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=West%20Bengal"
  },
  {
    "_id": "scheme_state_west_bengal_126",
    "scheme_name": "West Bengal State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "West Bengal",
    "eligible_states": [
      "West Bengal"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "West Bengal State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in West Bengal.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "West Bengal Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=West%20Bengal"
  },
  {
    "_id": "scheme_state_west_bengal_127",
    "scheme_name": "West Bengal State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "West Bengal",
    "eligible_states": [
      "West Bengal"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "West Bengal State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in West Bengal.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "West Bengal Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=West%20Bengal"
  },
  {
    "_id": "scheme_state_west_bengal_128",
    "scheme_name": "West Bengal State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "West Bengal",
    "eligible_states": [
      "West Bengal"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "West Bengal State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in West Bengal.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "West Bengal Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=West%20Bengal"
  },
  {
    "_id": "scheme_state_west_bengal_129",
    "scheme_name": "West Bengal State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "West Bengal",
    "eligible_states": [
      "West Bengal"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "West Bengal State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in West Bengal.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "West Bengal Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=West%20Bengal"
  },
  {
    "_id": "scheme_state_west_bengal_130",
    "scheme_name": "West Bengal State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "West Bengal",
    "eligible_states": [
      "West Bengal"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "West Bengal State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in West Bengal.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "West Bengal Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=West%20Bengal"
  },
  {
    "_id": "scheme_state_west_bengal_131",
    "scheme_name": "West Bengal State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "West Bengal",
    "eligible_states": [
      "West Bengal"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "West Bengal State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in West Bengal.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "West Bengal Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=West%20Bengal"
  },
  {
    "_id": "scheme_state_west_bengal_132",
    "scheme_name": "West Bengal State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "West Bengal",
    "eligible_states": [
      "West Bengal"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "West Bengal State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in West Bengal.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "West Bengal Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=West%20Bengal"
  },
  {
    "_id": "scheme_state_assam_133",
    "scheme_name": "Assam State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Assam",
    "eligible_states": [
      "Assam"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Assam State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Assam.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Assam Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Assam"
  },
  {
    "_id": "scheme_state_assam_134",
    "scheme_name": "Assam State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Assam",
    "eligible_states": [
      "Assam"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Assam State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Assam.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Assam Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Assam"
  },
  {
    "_id": "scheme_state_assam_135",
    "scheme_name": "Assam State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Assam",
    "eligible_states": [
      "Assam"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Assam State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Assam.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Assam Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Assam"
  },
  {
    "_id": "scheme_state_assam_136",
    "scheme_name": "Assam State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Assam",
    "eligible_states": [
      "Assam"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Assam State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Assam.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Assam Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Assam"
  },
  {
    "_id": "scheme_state_assam_137",
    "scheme_name": "Assam State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Assam",
    "eligible_states": [
      "Assam"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Assam State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Assam.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Assam Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Assam"
  },
  {
    "_id": "scheme_state_assam_138",
    "scheme_name": "Assam State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Assam",
    "eligible_states": [
      "Assam"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Assam State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Assam.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Assam Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Assam"
  },
  {
    "_id": "scheme_state_assam_139",
    "scheme_name": "Assam State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Assam",
    "eligible_states": [
      "Assam"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Assam State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Assam.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Assam Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Assam"
  },
  {
    "_id": "scheme_state_assam_140",
    "scheme_name": "Assam State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Assam",
    "eligible_states": [
      "Assam"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Assam State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Assam.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Assam Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Assam"
  },
  {
    "_id": "scheme_state_assam_141",
    "scheme_name": "Assam State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Assam",
    "eligible_states": [
      "Assam"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Assam State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Assam.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Assam Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Assam"
  },
  {
    "_id": "scheme_state_assam_142",
    "scheme_name": "Assam State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Assam",
    "eligible_states": [
      "Assam"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Assam State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Assam.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Assam Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Assam"
  },
  {
    "_id": "scheme_state_assam_143",
    "scheme_name": "Assam State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Assam",
    "eligible_states": [
      "Assam"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Assam State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Assam.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Assam Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Assam"
  },
  {
    "_id": "scheme_state_telangana_144",
    "scheme_name": "Telangana State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Telangana",
    "eligible_states": [
      "Telangana"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Telangana State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Telangana.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Telangana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Telangana"
  },
  {
    "_id": "scheme_state_telangana_145",
    "scheme_name": "Telangana State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Telangana",
    "eligible_states": [
      "Telangana"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Telangana State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Telangana.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Telangana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Telangana"
  },
  {
    "_id": "scheme_state_telangana_146",
    "scheme_name": "Telangana State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Telangana",
    "eligible_states": [
      "Telangana"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Telangana State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Telangana.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Telangana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Telangana"
  },
  {
    "_id": "scheme_state_telangana_147",
    "scheme_name": "Telangana State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Telangana",
    "eligible_states": [
      "Telangana"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Telangana State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Telangana.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Telangana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Telangana"
  },
  {
    "_id": "scheme_state_telangana_148",
    "scheme_name": "Telangana State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Telangana",
    "eligible_states": [
      "Telangana"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Telangana State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Telangana.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Telangana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Telangana"
  },
  {
    "_id": "scheme_state_telangana_149",
    "scheme_name": "Telangana State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Telangana",
    "eligible_states": [
      "Telangana"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Telangana State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Telangana.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Telangana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Telangana"
  },
  {
    "_id": "scheme_state_telangana_150",
    "scheme_name": "Telangana State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Telangana",
    "eligible_states": [
      "Telangana"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Telangana State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Telangana.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Telangana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Telangana"
  },
  {
    "_id": "scheme_state_telangana_151",
    "scheme_name": "Telangana State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Telangana",
    "eligible_states": [
      "Telangana"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Telangana State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Telangana.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Telangana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Telangana"
  },
  {
    "_id": "scheme_state_telangana_152",
    "scheme_name": "Telangana State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Telangana",
    "eligible_states": [
      "Telangana"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Telangana State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Telangana.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Telangana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Telangana"
  },
  {
    "_id": "scheme_state_telangana_153",
    "scheme_name": "Telangana State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Telangana",
    "eligible_states": [
      "Telangana"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Telangana State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Telangana.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Telangana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Telangana"
  },
  {
    "_id": "scheme_state_telangana_154",
    "scheme_name": "Telangana State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Telangana",
    "eligible_states": [
      "Telangana"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Telangana State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Telangana.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Telangana Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Telangana"
  },
  {
    "_id": "scheme_state_kerala_155",
    "scheme_name": "Kerala State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Kerala",
    "eligible_states": [
      "Kerala"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Kerala State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Kerala.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Kerala Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Kerala"
  },
  {
    "_id": "scheme_state_kerala_156",
    "scheme_name": "Kerala State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Kerala",
    "eligible_states": [
      "Kerala"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Kerala State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Kerala.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Kerala Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Kerala"
  },
  {
    "_id": "scheme_state_kerala_157",
    "scheme_name": "Kerala State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Kerala",
    "eligible_states": [
      "Kerala"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Kerala State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Kerala.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Kerala Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Kerala"
  },
  {
    "_id": "scheme_state_kerala_158",
    "scheme_name": "Kerala State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Kerala",
    "eligible_states": [
      "Kerala"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Kerala State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Kerala.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Kerala Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Kerala"
  },
  {
    "_id": "scheme_state_kerala_159",
    "scheme_name": "Kerala State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Kerala",
    "eligible_states": [
      "Kerala"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Kerala State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Kerala.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Kerala Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Kerala"
  },
  {
    "_id": "scheme_state_kerala_160",
    "scheme_name": "Kerala State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Kerala",
    "eligible_states": [
      "Kerala"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Kerala State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Kerala.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Kerala Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Kerala"
  },
  {
    "_id": "scheme_state_kerala_161",
    "scheme_name": "Kerala State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Kerala",
    "eligible_states": [
      "Kerala"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Kerala State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Kerala.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Kerala Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Kerala"
  },
  {
    "_id": "scheme_state_kerala_162",
    "scheme_name": "Kerala State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Kerala",
    "eligible_states": [
      "Kerala"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Kerala State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Kerala.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Kerala Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Kerala"
  },
  {
    "_id": "scheme_state_kerala_163",
    "scheme_name": "Kerala State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Kerala",
    "eligible_states": [
      "Kerala"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Kerala State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Kerala.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Kerala Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Kerala"
  },
  {
    "_id": "scheme_state_kerala_164",
    "scheme_name": "Kerala State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Kerala",
    "eligible_states": [
      "Kerala"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Kerala State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Kerala.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Kerala Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Kerala"
  },
  {
    "_id": "scheme_state_kerala_165",
    "scheme_name": "Kerala State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Kerala",
    "eligible_states": [
      "Kerala"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Kerala State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Kerala.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Kerala Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Kerala"
  },
  {
    "_id": "scheme_state_odisha_166",
    "scheme_name": "Odisha State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Odisha",
    "eligible_states": [
      "Odisha"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Odisha State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Odisha.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Odisha Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Odisha"
  },
  {
    "_id": "scheme_state_odisha_167",
    "scheme_name": "Odisha State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Odisha",
    "eligible_states": [
      "Odisha"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Odisha State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Odisha.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Odisha Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Odisha"
  },
  {
    "_id": "scheme_state_odisha_168",
    "scheme_name": "Odisha State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Odisha",
    "eligible_states": [
      "Odisha"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Odisha State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Odisha.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Odisha Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Odisha"
  },
  {
    "_id": "scheme_state_odisha_169",
    "scheme_name": "Odisha State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Odisha",
    "eligible_states": [
      "Odisha"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Odisha State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Odisha.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Odisha Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Odisha"
  },
  {
    "_id": "scheme_state_odisha_170",
    "scheme_name": "Odisha State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Odisha",
    "eligible_states": [
      "Odisha"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Odisha State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Odisha.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Odisha Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Odisha"
  },
  {
    "_id": "scheme_state_odisha_171",
    "scheme_name": "Odisha State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Odisha",
    "eligible_states": [
      "Odisha"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Odisha State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Odisha.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Odisha Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Odisha"
  },
  {
    "_id": "scheme_state_odisha_172",
    "scheme_name": "Odisha State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Odisha",
    "eligible_states": [
      "Odisha"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Odisha State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Odisha.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Odisha Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Odisha"
  },
  {
    "_id": "scheme_state_odisha_173",
    "scheme_name": "Odisha State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Odisha",
    "eligible_states": [
      "Odisha"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Odisha State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Odisha.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Odisha Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Odisha"
  },
  {
    "_id": "scheme_state_odisha_174",
    "scheme_name": "Odisha State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Odisha",
    "eligible_states": [
      "Odisha"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Odisha State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Odisha.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Odisha Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Odisha"
  },
  {
    "_id": "scheme_state_odisha_175",
    "scheme_name": "Odisha State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Odisha",
    "eligible_states": [
      "Odisha"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Odisha State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Odisha.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Odisha Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Odisha"
  },
  {
    "_id": "scheme_state_odisha_176",
    "scheme_name": "Odisha State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Odisha",
    "eligible_states": [
      "Odisha"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Odisha State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Odisha.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Odisha Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Odisha"
  },
  {
    "_id": "scheme_state_chhattisgarh_177",
    "scheme_name": "Chhattisgarh State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Chhattisgarh",
    "eligible_states": [
      "Chhattisgarh"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Chhattisgarh State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Chhattisgarh.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Chhattisgarh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Chhattisgarh"
  },
  {
    "_id": "scheme_state_chhattisgarh_178",
    "scheme_name": "Chhattisgarh State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Chhattisgarh",
    "eligible_states": [
      "Chhattisgarh"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Chhattisgarh State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Chhattisgarh.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Chhattisgarh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Chhattisgarh"
  },
  {
    "_id": "scheme_state_chhattisgarh_179",
    "scheme_name": "Chhattisgarh State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Chhattisgarh",
    "eligible_states": [
      "Chhattisgarh"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Chhattisgarh State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Chhattisgarh.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Chhattisgarh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Chhattisgarh"
  },
  {
    "_id": "scheme_state_chhattisgarh_180",
    "scheme_name": "Chhattisgarh State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Chhattisgarh",
    "eligible_states": [
      "Chhattisgarh"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Chhattisgarh State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Chhattisgarh.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Chhattisgarh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Chhattisgarh"
  },
  {
    "_id": "scheme_state_chhattisgarh_181",
    "scheme_name": "Chhattisgarh State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Chhattisgarh",
    "eligible_states": [
      "Chhattisgarh"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Chhattisgarh State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Chhattisgarh.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Chhattisgarh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Chhattisgarh"
  },
  {
    "_id": "scheme_state_chhattisgarh_182",
    "scheme_name": "Chhattisgarh State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Chhattisgarh",
    "eligible_states": [
      "Chhattisgarh"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Chhattisgarh State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Chhattisgarh.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Chhattisgarh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Chhattisgarh"
  },
  {
    "_id": "scheme_state_chhattisgarh_183",
    "scheme_name": "Chhattisgarh State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Chhattisgarh",
    "eligible_states": [
      "Chhattisgarh"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Chhattisgarh State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Chhattisgarh.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Chhattisgarh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Chhattisgarh"
  },
  {
    "_id": "scheme_state_chhattisgarh_184",
    "scheme_name": "Chhattisgarh State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Chhattisgarh",
    "eligible_states": [
      "Chhattisgarh"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Chhattisgarh State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Chhattisgarh.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Chhattisgarh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Chhattisgarh"
  },
  {
    "_id": "scheme_state_chhattisgarh_185",
    "scheme_name": "Chhattisgarh State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Chhattisgarh",
    "eligible_states": [
      "Chhattisgarh"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Chhattisgarh State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Chhattisgarh.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Chhattisgarh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Chhattisgarh"
  },
  {
    "_id": "scheme_state_chhattisgarh_186",
    "scheme_name": "Chhattisgarh State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Chhattisgarh",
    "eligible_states": [
      "Chhattisgarh"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Chhattisgarh State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Chhattisgarh.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Chhattisgarh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Chhattisgarh"
  },
  {
    "_id": "scheme_state_chhattisgarh_187",
    "scheme_name": "Chhattisgarh State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Chhattisgarh",
    "eligible_states": [
      "Chhattisgarh"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Chhattisgarh State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Chhattisgarh.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Chhattisgarh Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Chhattisgarh"
  },
  {
    "_id": "scheme_state_jharkhand_188",
    "scheme_name": "Jharkhand State State Solar Pump Subsidy Scheme",
    "scheme_type": "State",
    "category": "Solar & Energy",
    "state": "Jharkhand",
    "eligible_states": [
      "Jharkhand"
    ],
    "benefits": "70% to 90% capital subsidy on installation of 3HP, 5HP, and 7.5HP solar pumps for irrigation.",
    "description": "Jharkhand State Government agriculture initiative: State-funded renewable energy scheme replacing diesel pumps with solar-powered pumps for reliable daytime irrigation.",
    "eligibility": "Farmers with verified agricultural land and borewell or surface water source. Resident in Jharkhand.",
    "min_land_acres": 0.5,
    "max_land_acres": 25,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Jharkhand Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Jharkhand"
  },
  {
    "_id": "scheme_state_jharkhand_189",
    "scheme_name": "Jharkhand State Drip & Sprinkler Micro Irrigation Grant",
    "scheme_type": "State",
    "category": "Irrigation",
    "state": "Jharkhand",
    "eligible_states": [
      "Jharkhand"
    ],
    "benefits": "80% financial subsidy for SC/ST, Small & Marginal farmers on micro-irrigation systems.",
    "description": "Jharkhand State Government agriculture initiative: Promotes water conservation and high crop productivity through state micro-irrigation assistance.",
    "eligibility": "Registered farmers with land title and functional tubewell/well connection. Resident in Jharkhand.",
    "min_land_acres": 0.2,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Sugarcane",
      "Cotton",
      "Fruits",
      "Vegetables",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Jharkhand Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Jharkhand"
  },
  {
    "_id": "scheme_state_jharkhand_190",
    "scheme_name": "Jharkhand State Certified Hybrid Seed & Bio-Fertilizer Subsidy",
    "scheme_type": "State",
    "category": "Direct Income Support",
    "state": "Jharkhand",
    "eligible_states": [
      "Jharkhand"
    ],
    "benefits": "50% direct price discount on high-yielding certified seeds, organic bio-stimulants, and nano-urea.",
    "description": "Jharkhand State Government agriculture initiative: Ensures availability of quality seeds and eco-friendly nutrients to improve crop yield per acre.",
    "eligibility": "All active farmers possessing state land record passbook. Resident in Jharkhand.",
    "min_land_acres": 0.1,
    "max_land_acres": 30,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Pulses",
      "Oilseeds",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Jharkhand Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Jharkhand"
  },
  {
    "_id": "scheme_state_jharkhand_191",
    "scheme_name": "Jharkhand State High-Density Horticulture Fruit Orchard Grant",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Jharkhand",
    "eligible_states": [
      "Jharkhand"
    ],
    "benefits": "Grant of ₹40,000 per acre for planting high-density apple, mango, citrus, guava, or dragon fruit saplings.",
    "description": "Jharkhand State Government agriculture initiative: Encourages crop diversification into high-value horticulture crops to boost net farm income.",
    "eligibility": "Landowners engaging in commercial fruit orchard establishment. Resident in Jharkhand.",
    "min_land_acres": 0.5,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fruits",
      "Spices",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Jharkhand Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Jharkhand"
  },
  {
    "_id": "scheme_state_jharkhand_192",
    "scheme_name": "Jharkhand State Dairy Cattle & Breed Multiplication Capital Subsidy",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Jharkhand",
    "eligible_states": [
      "Jharkhand"
    ],
    "benefits": "50% capital subsidy on purchase of high-yield indigenous Gir/Sahiwal cows and Murrah buffaloes.",
    "description": "Jharkhand State Government agriculture initiative: Supports dairy farming, breed multiplication, and milk yield enhancement across rural districts.",
    "eligibility": "Small/marginal farmers, women farmers, and dairy SHGs. Resident in Jharkhand.",
    "min_land_acres": 0.1,
    "max_land_acres": 20,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops",
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Jharkhand Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Jharkhand"
  },
  {
    "_id": "scheme_state_jharkhand_193",
    "scheme_name": "Jharkhand State Goatry & Sheep Breeding Unit Capital Grant",
    "scheme_type": "State",
    "category": "Livestock & Animal Husbandry",
    "state": "Jharkhand",
    "eligible_states": [
      "Jharkhand"
    ],
    "benefits": "60% subsidy for setting up 20+1 goat/sheep breeding units including shed construction.",
    "description": "Jharkhand State Government agriculture initiative: State livestock initiative promoting small ruminant farming for supplementary income.",
    "eligibility": "SC/ST, landless laborers, and small agricultural holders. Resident in Jharkhand.",
    "min_land_acres": 0,
    "max_land_acres": 15,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Fodder Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Jharkhand Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Jharkhand"
  },
  {
    "_id": "scheme_state_jharkhand_194",
    "scheme_name": "Jharkhand State Custom Hiring Centre (CHC) Machinery Capital Subsidy",
    "scheme_type": "State",
    "category": "Farm Mechanization",
    "state": "Jharkhand",
    "eligible_states": [
      "Jharkhand"
    ],
    "benefits": "80% subsidy (up to ₹10 Lakh) for establishing farm machinery Custom Hiring Centres.",
    "description": "Jharkhand State Government agriculture initiative: Provides affordable access to modern agricultural machinery like Combine Harvesters and Laser Levelers.",
    "eligibility": "Registered FPOs, Farmer Cooperatives, and rural youth entrepreneurs. Resident in Jharkhand.",
    "min_land_acres": 0.5,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane",
      "Maize"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Jharkhand Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Jharkhand"
  },
  {
    "_id": "scheme_state_jharkhand_195",
    "scheme_name": "Jharkhand State Kisan Interest Subvention Incentive Scheme",
    "scheme_type": "State",
    "category": "Credit Support",
    "state": "Jharkhand",
    "eligible_states": [
      "Jharkhand"
    ],
    "benefits": "3% additional interest subvention for prompt repayment of short-term crop loans.",
    "description": "Jharkhand State Government agriculture initiative: Reduces net interest burden on crop loans to 4% for disciplined farming borrowers.",
    "eligibility": "All farmers holding valid Kisan Credit Cards with state banks. Resident in Jharkhand.",
    "min_land_acres": 0,
    "max_land_acres": 100,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Jharkhand Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Jharkhand"
  },
  {
    "_id": "scheme_state_jharkhand_196",
    "scheme_name": "Jharkhand State Polyhouse & Shade Net Nursery Capital Subsidy",
    "scheme_type": "State",
    "category": "Horticulture",
    "state": "Jharkhand",
    "eligible_states": [
      "Jharkhand"
    ],
    "benefits": "50% subsidy for constructing climate-controlled polyhouses and shade-net nursery structures.",
    "description": "Jharkhand State Government agriculture initiative: Protects high-value vegetable and flower crops from extreme weather and pest infestations.",
    "eligibility": "Horticulture growers, floriculturists, and vegetable farmers. Resident in Jharkhand.",
    "min_land_acres": 0.25,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Vegetables",
      "Fruits",
      "Spices"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Jharkhand Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Jharkhand"
  },
  {
    "_id": "scheme_state_jharkhand_197",
    "scheme_name": "Jharkhand State Organic Crop Farming Cluster Assistance",
    "scheme_type": "State",
    "category": "Organic Farming",
    "state": "Jharkhand",
    "eligible_states": [
      "Jharkhand"
    ],
    "benefits": "Financial grant of ₹35,000 per acre over 3 years for organic input production and PGS certification.",
    "description": "Jharkhand State Government agriculture initiative: Assists farmers in adopting zero-budget natural farming and organic crop production practices.",
    "eligibility": "Farmer groups/clusters having minimum 20 acres total land. Resident in Jharkhand.",
    "min_land_acres": 0.5,
    "max_land_acres": 10,
    "sc_st_applicable": true,
    "fpo_applicable": true,
    "crop_applicability": [
      "Pulses",
      "Oilseeds",
      "Spices",
      "Wheat",
      "Rice",
      "Fruits",
      "Vegetables"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Jharkhand Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Jharkhand"
  },
  {
    "_id": "scheme_state_jharkhand_198",
    "scheme_name": "Jharkhand State Crop Loss Relief & Climate Disaster Compensation",
    "scheme_type": "State",
    "category": "Crop Insurance",
    "state": "Jharkhand",
    "eligible_states": [
      "Jharkhand"
    ],
    "benefits": "Direct cash compensation up to ₹17,000 per hectare for unseasonal rainfall, hail, or flooding.",
    "description": "Jharkhand State Government agriculture initiative: State disaster relief fund providing quick compensation to affected farmers during severe crop loss.",
    "eligibility": "Farmers with documented harvest damage verified by Revenue Patwari. Resident in Jharkhand.",
    "min_land_acres": 0.1,
    "max_land_acres": 50,
    "sc_st_applicable": true,
    "fpo_applicable": false,
    "crop_applicability": [
      "All Crops",
      "Wheat",
      "Rice",
      "Cotton",
      "Sugarcane"
    ],
    "documents_required": [
      "Aadhaar Card",
      "Jharkhand Land Revenue Record (Khasra/Khatauni)",
      "Bank Passbook"
    ],
    "application_deadline": "Ongoing",
    "official_url": "https://myscheme.gov.in/search?state=Jharkhand"
  }
];

export function getFallbackSchemes() {
  return MOCK_SCHEMES;
}

export function getFallbackEligibleSchemes(farmerProfile = {}) {
  const userState = farmerProfile?.location?.state || farmerProfile?.state || "Punjab";
  const userCaste = farmerProfile?.caste_category || farmerProfile?.caste || "General";
  const userLand = Number(farmerProfile?.location?.total_land_area || farmerProfile?.landArea || 2.5);
  const userCrops = farmerProfile?.crops_this_year || farmerProfile?.crops || ["Wheat", "Rice"];

  return MOCK_SCHEMES.filter(scheme => {
    // State check
    const sState = scheme.state || (scheme.eligible_states && scheme.eligible_states[0]) || "All India";
    const isStateMatch = sState === "All India" || sState === userState || (scheme.eligible_states && scheme.eligible_states.includes(userState));
    if (!isStateMatch) return false;

    // Land bounds check
    const minL = scheme.min_land_acres || 0;
    const maxL = scheme.max_land_acres || 1000;
    if (userLand < minL || userLand > maxL) return false;

    return true;
  });
}

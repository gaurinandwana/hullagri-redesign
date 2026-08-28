import React, { useEffect, useState, useMemo } from 'react';
import { getApiUrl } from '../utils/api';
import { MOCK_SCHEMES } from '../data/mockSchemes';

export default function SchemeDashboard({ farmerId = "farmer_default", initialProfile, onBack, onAIChat }) {
  const [schemes, setSchemes] = useState([]);
  const [farmerProfile, setFarmerProfile] = useState(initialProfile || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All");
  const [selectedType, setSelectedType] = useState("All"); // All, Central, State
  const [selectedCategory, setSelectedCategory] = useState("All"); // Cash Transfer, Subsidies, Insurance, etc.
  const [selectedCrop, setSelectedCrop] = useState("All");
  const [scStOnly, setScStOnly] = useState(false);
  const [fpoOnly, setFpoOnly] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  // Detail Modal State
  const [selectedScheme, setSelectedScheme] = useState(null);

  // Synchronize initialProfile whenever it changes
  useEffect(() => {
    if (initialProfile) {
      setFarmerProfile(prev => prev ? { ...prev, ...initialProfile } : initialProfile);
    }
  }, [initialProfile]);

  // Fetch schemes and farmer profile on mount
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let fetchedSchemes = [];
        try {
          const baseUrl = await getApiUrl();
          // 1. Fetch all schemes from database
          const res = await fetch(`${baseUrl}/api/schemes`);
          if (res.ok) {
            const data = await res.json();
            if (data.schemes && Array.isArray(data.schemes) && data.schemes.length > 0) {
              fetchedSchemes = data.schemes;
            }
          }
        } catch (e) {
          console.warn("Backend API request failed, utilizing local dataset fallback:", e);
        }

        // Automatic fallback to local scheme data if API request fails or returns empty
        if (!fetchedSchemes || fetchedSchemes.length === 0) {
          fetchedSchemes = MOCK_SCHEMES;
        }

        setSchemes(fetchedSchemes);

        // 2. Fetch farmer profile if available
        if (farmerId) {
          try {
            const baseUrl = await getApiUrl();
            const profRes = await fetch(`${baseUrl}/api/farmer/${farmerId}`);
            if (profRes.ok) {
              const profData = await profRes.json();
              if (profData.profile) {
                setFarmerProfile(prev => ({ ...(initialProfile || {}), ...profData.profile, ...(initialProfile || {}) }));
              }
            } else if (initialProfile) {
              setFarmerProfile(initialProfile);
            }
          } catch (e) {
            console.log("Profile fetch notice:", e);
            if (initialProfile) setFarmerProfile(initialProfile);
          }
        } else if (initialProfile) {
          setFarmerProfile(initialProfile);
        }
      } catch (err) {
        console.error("Error loading scheme dashboard data:", err);
        setSchemes(MOCK_SCHEMES);
        if (initialProfile) setFarmerProfile(initialProfile);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [farmerId, initialProfile]);

  // Unique list of States for Filter dropdown
  const stateOptions = useMemo(() => {
    const sSet = new Set(["All", "All India"]);
    schemes.forEach(s => {
      const st = s.state || (s.eligible_states && s.eligible_states[0]);
      if (st) sSet.add(st);
    });
    return Array.from(sSet);
  }, [schemes]);

  // Unique list of Crops for Filter dropdown
  const cropOptions = ["All", "Wheat", "Rice", "Cotton", "Sugarcane", "Fruits", "Vegetables", "Pulses", "Oilseeds", "Maize", "Spices"];

  // Category Options
  const categories = [
    "All",
    "Direct Income Support",
    "Crop Insurance",
    "Irrigation",
    "Credit Support",
    "Farm Mechanization",
    "Solar & Energy",
    "Livestock & Animal Husbandry",
    "Organic Farming",
    "Horticulture",
    "Market Infrastructure"
  ];

  // Dynamic Match Scoring & Reason Generator
  const computeSchemeMatch = useMemo(() => {
    return (scheme) => {
      let score = 0;
      const highlights = [];

      const locationState = farmerProfile?.location?.state || farmerProfile?.state || "Punjab";
      const caste = farmerProfile?.caste_category || farmerProfile?.caste || "General";
      const land = farmerProfile?.location?.total_land_area || farmerProfile?.landArea || 2.5;
      const userCrops = farmerProfile?.crops_this_year || farmerProfile?.crops || ["Wheat", "Rice"];
      const isFpoMember = farmerProfile?.fpo_member === "Yes" || farmerProfile?.fpo_member === true;

      // 1. State Match (+30 pts)
      const sState = scheme.state || (scheme.eligible_states && scheme.eligible_states[0]) || "All India";
      if (sState === "All India" || (scheme.eligible_states && scheme.eligible_states.includes(locationState)) || sState === locationState) {
        score += 30;
        highlights.push(`Applicable in ${locationState}`);
      } else {
        score += 10;
      }

      // 2. Land Requirement Match (+25 pts)
      const minL = scheme.min_land_acres || 0;
      const maxL = scheme.max_land_acres || 1000;
      if (minL <= land && land <= maxL) {
        score += 25;
        highlights.push(`Fits land holding (${land} Acres)`);
      } else {
        score += 5;
      }

      // 3. SC/ST & Caste Match (+20 pts)
      const isScStScheme = Boolean(scheme.sc_st_applicable || scheme.is_for_sc_st);
      if (isScStScheme) {
        if (caste === "SC" || caste === "ST") {
          score += 20;
          highlights.push(`SC/ST Priority Support (${caste})`);
        } else {
          score += 10;
        }
      } else {
        score += 15;
      }

      // 4. Crop Applicability Match (+15 pts)
      const crops = scheme.crop_applicability || scheme.eligible_crops || ["All Crops"];
      const cropsArr = Array.isArray(crops) ? crops : [String(crops)];
      const cropsLower = cropsArr.map(c => c.toLowerCase());
      if (cropsLower.includes("all crops") || userCrops.some(uc => cropsLower.some(cl => cl.includes(uc.toLowerCase())))) {
        score += 15;
        highlights.push(`Suitable for ${userCrops[0] || "your crops"}`);
      } else {
        score += 5;
      }

      // 5. FPO Priority Match (+10 pts)
      const isFpoScheme = Boolean(scheme.fpo_applicable || scheme.is_for_fpo);
      if (isFpoScheme) {
        if (isFpoMember) {
          score += 10;
          highlights.push(`FPO Member Priority`);
        } else {
          score += 5;
          highlights.push(`FPO / Cooperative Scheme`);
        }
      } else {
        score += 10;
      }

      const matchPercentage = Math.min(99, Math.max(50, Math.round((score / 100) * 100)));

      if (highlights.length === 0) {
        highlights.push("General Farmer Eligibility Met");
      }

      return {
        score,
        percentage: matchPercentage,
        highlights: highlights.slice(0, 3)
      };
    };
  }, [farmerProfile]);

  // Filtering & Dynamic Sorting Logic
  const filteredSchemes = useMemo(() => {
    const list = schemes.filter(s => {
      // 1. Search Query
      const q = searchQuery.toLowerCase().trim();
      if (q) {
        const name = (s.scheme_name || "").toLowerCase();
        const desc = (s.description || "").toLowerCase();
        const ben = (s.benefits || "").toLowerCase();
        const elig = (s.eligibility || "").toLowerCase();
        const cat = (s.category || "").toLowerCase();
        if (!name.includes(q) && !desc.includes(q) && !ben.includes(q) && !elig.includes(q) && !cat.includes(q)) {
          return false;
        }
      }

      // 2. State Filter
      if (selectedState !== "All") {
        const itemState = s.state || (s.eligible_states && s.eligible_states[0]) || "All India";
        if (selectedState === "All India") {
          if (itemState !== "All India") return false;
        } else {
          if (itemState !== "All India" && itemState !== selectedState) return false;
        }
      }

      // 3. Scheme Type (Central / State)
      if (selectedType !== "All") {
        const stype = (s.scheme_type || "").toLowerCase();
        if (!stype.includes(selectedType.toLowerCase())) return false;
      }

      // 4. Category
      if (selectedCategory !== "All") {
        const cat = (s.category || "").toLowerCase();
        if (!cat.includes(selectedCategory.toLowerCase())) return false;
      }

      // 5. Crop Filter
      if (selectedCrop !== "All") {
        const crops = s.crop_applicability || s.eligible_crops || [];
        const cropsStr = Array.isArray(crops) ? crops.join(" ").toLowerCase() : String(crops).toLowerCase();
        if (!cropsStr.includes("all crops") && !cropsStr.includes(selectedCrop.toLowerCase())) {
          return false;
        }
      }

      // 6. SC/ST Filter
      if (scStOnly) {
        const isScSt = Boolean(s.sc_st_applicable || s.is_for_sc_st);
        if (!isScSt) return false;
      }

      // 7. FPO Filter
      if (fpoOnly) {
        const isFpo = Boolean(s.fpo_applicable || s.is_for_fpo);
        if (!isFpo) return false;
      }

      return true;
    });

    // Score each scheme dynamically and sort by match percentage descending
    const scoredList = list.map(s => {
      const match = computeSchemeMatch(s);
      return {
        ...s,
        computed_score: match.score,
        match_percentage: match.percentage,
        match_highlights: match.highlights
      };
    });

    scoredList.sort((a, b) => b.match_percentage - a.match_percentage);
    return scoredList;
  }, [schemes, searchQuery, selectedState, selectedType, selectedCategory, selectedCrop, scStOnly, fpoOnly, computeSchemeMatch]);

  // Reset to page 1 on filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedState, selectedType, selectedCategory, selectedCrop, scStOnly, fpoOnly, pageSize]);

  // Pagination Math
  const effectivePageSize = pageSize === 0 ? filteredSchemes.length : pageSize;
  const totalPages = Math.max(1, Math.ceil(filteredSchemes.length / (effectivePageSize || 1)));
  const startIndex = (currentPage - 1) * effectivePageSize;
  const endIndex = Math.min(startIndex + effectivePageSize, filteredSchemes.length);

  const paginatedSchemes = useMemo(() => {
    if (pageSize === 0) return filteredSchemes;
    return filteredSchemes.slice(startIndex, startIndex + pageSize);
  }, [filteredSchemes, startIndex, pageSize]);

  // Statistics
  const totalCount = schemes.length;
  const centralCount = schemes.filter(s => s.scheme_type === "Central").length;
  const stateCount = schemes.filter(s => s.scheme_type === "State").length;
  const fpoCount = schemes.filter(s => s.fpo_applicable || s.is_for_fpo).length;

  return (
    <div style={{
      minHeight: "100vh",
      width: "100%",
      overflowY: "auto",
      backgroundColor: "#f8fafc",
      fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      color: "#1e293b",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header Bar */}
      <div style={{
        background: "linear-gradient(135deg, #15803d 0%, #166534 50%, #0f766e 100%)",
        color: "#ffffff",
        padding: "24px 32px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.12)"
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              {onBack && (
                <button
                  onClick={onBack}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    border: "none",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    fontSize: "20px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s"
                  }}
                  title="Back to Home"
                >
                  ←
                </button>
              )}
              <div>
                <span style={{ fontSize: "12px", background: "rgba(255,255,255,0.2)", padding: "4px 10px", borderRadius: "12px", textTransform: "uppercase", fontWeight: "700", letterSpacing: "0.5px" }}>
                  Government Subsidy Intelligence Portal
                </span>
                <h1 style={{ fontSize: "26px", fontWeight: "800", margin: "6px 0 0", color: "#ffffff" }}>
                  🌾 Agricultural Scheme Visualization Dashboard
                </h1>
              </div>
            </div>

            {onAIChat && (
              <button
                onClick={onAIChat}
                style={{
                  background: "#f59e0b",
                  color: "#78350f",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "12px",
                  fontWeight: "700",
                  fontSize: "14px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 4px 12px rgba(245, 158, 11, 0.4)"
                }}
              >
                <span>🤖</span> Ask AI Match Assistant
              </button>
            )}
          </div>

          {/* Metrics Summary Bar */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
            marginTop: "20px",
            background: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(8px)",
            borderRadius: "16px",
            padding: "16px 24px",
            border: "1px solid rgba(255,255,255,0.2)"
          }}>
            <div>
              <p style={{ margin: 0, fontSize: "12px", color: "#cbd5e1" }}>Total Active Schemes</p>
              <h3 style={{ margin: "4px 0 0", fontSize: "24px", fontWeight: "800", color: "#ffffff" }}>{totalCount}</h3>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: "12px", color: "#cbd5e1" }}>Central Schemes</p>
              <h3 style={{ margin: "4px 0 0", fontSize: "24px", fontWeight: "800", color: "#86efac" }}>{centralCount}</h3>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: "12px", color: "#cbd5e1" }}>State Level Schemes</p>
              <h3 style={{ margin: "4px 0 0", fontSize: "24px", fontWeight: "800", color: "#93c5fd" }}>{stateCount}</h3>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: "12px", color: "#cbd5e1" }}>FPO / Co-op Subsidies</p>
              <h3 style={{ margin: "4px 0 0", fontSize: "24px", fontWeight: "800", color: "#fde047" }}>{fpoCount}</h3>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: "12px", color: "#cbd5e1" }}>Matching Current Filter</p>
              <h3 style={{ margin: "4px 0 0", fontSize: "24px", fontWeight: "800", color: "#f472b6" }}>{filteredSchemes.length}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%", padding: "24px 32px", boxSizing: "border-box", flex: 1 }}>
        {/* Interactive Filter Control Panel */}
        <div style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          padding: "20px 24px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
          border: "1px solid #e2e8f0",
          marginBottom: "24px"
        }}>
          <h3 style={{ fontSize: "15px", fontWeight: "700", color: "#0f172a", margin: "0 0 16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>🎛️</span> Interactive Scheme Filters & Dynamic Match Ranking
          </h3>

          {/* Row 1: Search + State + Scheme Type */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "16px" }}>
            {/* Search Input */}
            <div style={{ position: "relative" }}>
              <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#64748b", marginBottom: "6px" }}>Keyword Search</label>
              <div style={{ display: "flex", alignItems: "center", border: "1px solid #cbd5e1", borderRadius: "10px", padding: "8px 12px", backgroundColor: "#f8fafc" }}>
                <span style={{ marginRight: "8px" }}>🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search scheme name, benefit..."
                  style={{ border: "none", outline: "none", background: "transparent", width: "100%", fontSize: "14px" }}
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} style={{ border: "none", background: "none", cursor: "pointer", color: "#94a3b8" }}>✕</button>
                )}
              </div>
            </div>

            {/* Filter by State */}
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#64748b", marginBottom: "6px" }}>Filter by State</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                style={{ width: "100%", border: "1px solid #cbd5e1", borderRadius: "10px", padding: "10px 12px", backgroundColor: "#f8fafc", fontSize: "14px", outline: "none" }}
              >
                {stateOptions.map(st => (
                  <option key={st} value={st}>{st === "All" ? "All States & Central" : st}</option>
                ))}
              </select>
            </div>

            {/* Filter by Scheme Type */}
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#64748b", marginBottom: "6px" }}>Scheme Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                style={{ width: "100%", border: "1px solid #cbd5e1", borderRadius: "10px", padding: "10px 12px", backgroundColor: "#f8fafc", fontSize: "14px", outline: "none" }}
              >
                <option value="All">All Types (Central & State)</option>
                <option value="Central">Central Govt Schemes</option>
                <option value="State">State Govt Schemes</option>
              </select>
            </div>

            {/* Filter by Crop */}
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#64748b", marginBottom: "6px" }}>Crop Applicability</label>
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                style={{ width: "100%", border: "1px solid #cbd5e1", borderRadius: "10px", padding: "10px 12px", backgroundColor: "#f8fafc", fontSize: "14px", outline: "none" }}
              >
                {cropOptions.map(c => (
                  <option key={c} value={c}>{c === "All" ? "All Crops" : c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2: Category Pills & Toggle Checkboxes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* Category horizontal scroll */}
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#64748b", marginBottom: "8px" }}>Category Focus</label>
              <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "6px" }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "20px",
                      border: "1px solid",
                      borderColor: selectedCategory === cat ? "#15803d" : "#e2e8f0",
                      backgroundColor: selectedCategory === cat ? "#15803d" : "#f8fafc",
                      color: selectedCategory === cat ? "#ffffff" : "#475569",
                      fontWeight: selectedCategory === cat ? "700" : "500",
                      fontSize: "13px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: "all 0.15s ease"
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Checkbox Toggles */}
            <div style={{ display: "flex", gap: "24px", alignItems: "center", paddingTop: "8px", borderTop: "1px solid #f1f5f9" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "13px", fontWeight: "600", color: "#334155" }}>
                <input
                  type="checkbox"
                  checked={scStOnly}
                  onChange={(e) => setScStOnly(e.target.checked)}
                  style={{ width: "16px", height: "16px", accentColor: "#15803d" }}
                />
                <span>SC / ST Applicable Only</span>
              </label>

              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "13px", fontWeight: "600", color: "#334155" }}>
                <input
                  type="checkbox"
                  checked={fpoOnly}
                  onChange={(e) => setFpoOnly(e.target.checked)}
                  style={{ width: "16px", height: "16px", accentColor: "#15803d" }}
                />
                <span>FPO & Farmer Cooperatives Only</span>
              </label>

              {(searchQuery || selectedState !== "All" || selectedType !== "All" || selectedCategory !== "All" || selectedCrop !== "All" || scStOnly || fpoOnly) && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedState("All");
                    setSelectedType("All");
                    setSelectedCategory("All");
                    setSelectedCrop("All");
                    setScStOnly(false);
                    setFpoOnly(false);
                  }}
                  style={{
                    border: "none",
                    background: "none",
                    color: "#dc2626",
                    fontWeight: "700",
                    fontSize: "13px",
                    cursor: "pointer",
                    textDecoration: "underline",
                    marginLeft: "auto"
                  }}
                >
                  Reset All Filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Info & Pagination Top Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", gap: "16px", flexWrap: "wrap" }}>
          <p style={{ margin: 0, fontSize: "14px", fontWeight: "700", color: "#475569" }}>
            Showing {filteredSchemes.length === 0 ? 0 : startIndex + 1} - {endIndex} of {filteredSchemes.length} schemes (Sorted by highest match score)
          </p>

          {/* Page Size Selector */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "13px", color: "#64748b", fontWeight: "600" }}>Per Page:</span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              style={{
                border: "1px solid #cbd5e1",
                borderRadius: "8px",
                padding: "6px 10px",
                fontSize: "13px",
                fontWeight: "600",
                backgroundColor: "#ffffff",
                color: "#1e293b"
              }}
            >
              <option value={12}>12 Schemes</option>
              <option value={24}>24 Schemes</option>
              <option value={48}>48 Schemes</option>
              <option value={0}>All Schemes ({filteredSchemes.length})</option>
            </select>
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div style={{ fontSize: "36px", marginBottom: "12px" }}>🌾</div>
            <p style={{ fontSize: "16px", color: "#64748b", fontWeight: "600" }}>Loading schemes from MongoDB...</p>
          </div>
        )}

        {/* Empty state & Reset handling */}
        {!loading && filteredSchemes.length === 0 && (
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "56px 32px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            border: "1px solid #e2e8f0",
            maxWidth: "600px",
            margin: "40px auto"
          }}>
            <div style={{
              width: "80px",
              height: "80px",
              backgroundColor: "#fef2f2",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              margin: "0 auto 20px"
            }}>
              🌾
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", margin: "0 0 8px" }}>
              No Agricultural Schemes Found
            </h3>
            <p style={{ color: "#64748b", fontSize: "14px", margin: "0 0 20px", lineHeight: "1.5" }}>
              We couldn't find any government schemes matching your current filter criteria:
            </p>
            
            {/* Active Filters Summary Pills */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "24px" }}>
              {searchQuery && <span style={{ background: "#fee2e2", color: "#991b1b", padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "600" }}>Search: "{searchQuery}"</span>}
              {selectedState !== "All" && <span style={{ background: "#fef3c7", color: "#92400e", padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "600" }}>State: {selectedState}</span>}
              {selectedType !== "All" && <span style={{ background: "#dbeafe", color: "#1e40af", padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "600" }}>Type: {selectedType}</span>}
              {selectedCategory !== "All" && <span style={{ background: "#e0e7ff", color: "#3730a3", padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "600" }}>Category: {selectedCategory}</span>}
              {selectedCrop !== "All" && <span style={{ background: "#dcfce7", color: "#166534", padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "600" }}>Crop: {selectedCrop}</span>}
              {scStOnly && <span style={{ background: "#f3e8ff", color: "#6b21a8", padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "600" }}>SC/ST Only</span>}
              {fpoOnly && <span style={{ background: "#fae8ff", color: "#86198f", padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "600" }}>FPO Only</span>}
            </div>

            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedState("All");
                setSelectedType("All");
                setSelectedCategory("All");
                setSelectedCrop("All");
                setScStOnly(false);
                setFpoOnly(false);
                setCurrentPage(1);
              }}
              style={{
                padding: "12px 28px",
                backgroundColor: "#15803d",
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                fontWeight: "700",
                fontSize: "14px",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(21, 128, 61, 0.3)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              🔄 Reset All Filters
            </button>
          </div>
        )}

        {/* Schemes Grid */}
        {!loading && paginatedSchemes.length > 0 && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "20px"
          }}>
            {paginatedSchemes.map((scheme, idx) => {
              const sname = scheme.scheme_name || "Government Scheme";
              const stype = scheme.scheme_type || "Central";
              const stateVal = scheme.state || (scheme.eligible_states && scheme.eligible_states[0]) || "All India";
              const matchPercentage = scheme.match_percentage || 85;
              const matchHighlights = scheme.match_highlights || ["General Eligibility"];

              const isCentral = stype === "Central";
              const typeBadgeBg = isCentral ? "#dcfce7" : "#dbeafe";
              const typeBadgeText = isCentral ? "#15803d" : "#1d4ed8";
              const borderLeftColor = isCentral ? "#15803d" : "#2563eb";

              return (
                <div
                  key={scheme._id || idx}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    padding: "24px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                    borderLeft: `5px solid ${borderLeftColor}`,
                    borderTop: "1px solid #f1f5f9",
                    borderRight: "1px solid #f1f5f9",
                    borderBottom: "1px solid #f1f5f9",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative"
                  }}
                >
                  <div>
                    {/* Top Badges Row */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", flex: 1 }}>
                        <span style={{ backgroundColor: typeBadgeBg, color: typeBadgeText, fontSize: "11px", fontWeight: "700", padding: "4px 10px", borderRadius: "8px" }}>
                          {stype} Sector
                        </span>
                        <span style={{ backgroundColor: "#f1f5f9", color: "#475569", fontSize: "11px", fontWeight: "600", padding: "4px 10px", borderRadius: "8px" }}>
                          📍 {stateVal}
                        </span>
                        {scheme.category && (
                          <span style={{ backgroundColor: "#fef3c7", color: "#b45309", fontSize: "11px", fontWeight: "600", padding: "4px 10px", borderRadius: "8px" }}>
                            {scheme.category}
                          </span>
                        )}
                      </div>

                      {/* Dynamic Match Score Badge */}
                      <div style={{
                        background: matchPercentage >= 85 ? "linear-gradient(135deg, #15803d, #166534)" : "linear-gradient(135deg, #d97706, #b45309)",
                        color: "#ffffff",
                        padding: "4px 10px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: "800",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                      }}>
                        <span>🎯</span> {matchPercentage}% Match
                      </div>
                    </div>

                    {/* Scheme Name */}
                    <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0f172a", margin: "0 0 10px", lineHeight: "1.3" }}>
                      {sname}
                    </h3>

                    {/* "Why this matches you" Analytical Highlight Box */}
                    <div style={{
                      backgroundColor: "#f0fdf4",
                      border: "1px solid #bbf7d0",
                      borderRadius: "10px",
                      padding: "10px 12px",
                      marginBottom: "14px"
                    }}>
                      <p style={{ margin: 0, fontSize: "11px", fontWeight: "700", color: "#166534", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        ⚡ Why this matches you:
                      </p>
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "6px" }}>
                        {matchHighlights.map((hl, hIdx) => (
                          <span key={hIdx} style={{ fontSize: "11px", color: "#15803d", fontWeight: "600", background: "#ffffff", padding: "2px 8px", borderRadius: "6px", border: "1px solid #86efac" }}>
                            ✓ {hl}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    {scheme.description && (
                      <p style={{ fontSize: "13px", color: "#475569", margin: "0 0 12px", lineHeight: "1.4" }}>
                        {scheme.description}
                      </p>
                    )}

                    {/* Benefits Highlight */}
                    <div style={{ marginBottom: "12px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a" }}>🎁 Benefits & Subsidy:</span>
                      <p style={{ fontSize: "13px", color: "#15803d", fontWeight: "600", margin: "4px 0 0", lineHeight: "1.4" }}>
                        {scheme.benefits || "Financial grant & subsidy support."}
                      </p>
                    </div>

                    {/* Eligibility Summary */}
                    <div style={{ marginBottom: "14px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a" }}>📋 Eligibility:</span>
                      <p style={{ fontSize: "12px", color: "#64748b", margin: "4px 0 0", lineHeight: "1.4" }}>
                        {scheme.eligibility}
                      </p>
                    </div>
                  </div>

                  {/* Footer CTAs */}
                  <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "14px", marginTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ fontSize: "11px", color: "#94a3b8", display: "block" }}>Deadline</span>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#334155" }}>
                        {scheme.application_deadline || "Ongoing"}
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={() => setSelectedScheme(scheme)}
                        style={{
                          backgroundColor: "#f1f5f9",
                          color: "#334155",
                          border: "none",
                          padding: "8px 14px",
                          borderRadius: "8px",
                          fontSize: "12px",
                          fontWeight: "700",
                          cursor: "pointer"
                        }}
                      >
                        Full Details
                      </button>

                      <a
                        href={scheme.official_url || scheme.official_source || "https://myscheme.gov.in"}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: "#15803d",
                          color: "#ffffff",
                          textDecoration: "none",
                          padding: "8px 14px",
                          borderRadius: "8px",
                          fontSize: "12px",
                          fontWeight: "700",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px"
                        }}
                      >
                        Apply Official ↗
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Pagination Control Bar */}
        {!loading && totalPages > 1 && (
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "32px",
            padding: "16px 24px",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            flexWrap: "wrap",
            gap: "16px"
          }}>
            <span style={{ fontSize: "14px", color: "#475569", fontWeight: "600" }}>
              Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> ({filteredSchemes.length} total schemes)
            </span>

            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(1)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  backgroundColor: currentPage === 1 ? "#f1f5f9" : "#ffffff",
                  color: currentPage === 1 ? "#94a3b8" : "#0f172a",
                  fontWeight: "700",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer"
                }}
              >
                « First
              </button>

              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  backgroundColor: currentPage === 1 ? "#f1f5f9" : "#ffffff",
                  color: currentPage === 1 ? "#94a3b8" : "#0f172a",
                  fontWeight: "700",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer"
                }}
              >
                ‹ Prev
              </button>

              <span style={{ padding: "0 8px", fontSize: "14px", fontWeight: "700", color: "#15803d" }}>
                {currentPage} / {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  backgroundColor: currentPage === totalPages ? "#f1f5f9" : "#15803d",
                  color: currentPage === totalPages ? "#94a3b8" : "#ffffff",
                  fontWeight: "700",
                  cursor: currentPage === totalPages ? "not-allowed" : "pointer"
                }}
              >
                Next ›
              </button>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(totalPages)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  backgroundColor: currentPage === totalPages ? "#f1f5f9" : "#ffffff",
                  color: currentPage === totalPages ? "#94a3b8" : "#0f172a",
                  fontWeight: "700",
                  cursor: currentPage === totalPages ? "not-allowed" : "pointer"
                }}
              >
                Last »
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal Dialog for Full Scheme View */}
      {selectedScheme && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(15, 23, 42, 0.65)",
          backdropFilter: "blur(4px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "20px"
        }}>
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            maxWidth: "700px",
            width: "100%",
            maxHeight: "90vh",
            overflowY: "auto",
            padding: "32px",
            boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
            position: "relative"
          }}>
            <button
              onClick={() => setSelectedScheme(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "#f1f5f9",
                border: "none",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                fontSize: "18px",
                cursor: "pointer"
              }}
            >
              ✕
            </button>

            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", background: "#dcfce7", color: "#15803d", padding: "4px 12px", borderRadius: "8px" }}>
                {selectedScheme.scheme_type} Scheme
              </span>
              <span style={{ fontSize: "12px", fontWeight: "800", background: "#15803d", color: "#ffffff", padding: "4px 12px", borderRadius: "8px" }}>
                🎯 {selectedScheme.match_percentage || 85}% Match
              </span>
            </div>

            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a", margin: "12px 0 6px" }}>
              {selectedScheme.scheme_name}
            </h2>

            <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "20px" }}>
              Category: <strong style={{ color: "#334155" }}>{selectedScheme.category || "General Subsidy"}</strong> | State: <strong style={{ color: "#334155" }}>{selectedScheme.state || "All India"}</strong>
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "12px" }}>
                <h4 style={{ margin: "0 0 6px", fontSize: "14px", color: "#166534" }}>🎯 Scheme Overview & Description</h4>
                <p style={{ margin: 0, fontSize: "13px", color: "#334155", lineHeight: "1.5" }}>
                  {selectedScheme.description}
                </p>
              </div>

              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "16px", borderRadius: "12px" }}>
                <h4 style={{ margin: "0 0 6px", fontSize: "14px", color: "#15803d" }}>💰 Financial Subsidy & Benefits</h4>
                <p style={{ margin: 0, fontSize: "14px", fontWeight: "700", color: "#166534", lineHeight: "1.5" }}>
                  {selectedScheme.benefits}
                </p>
              </div>

              <div>
                <h4 style={{ margin: "0 0 6px", fontSize: "14px", color: "#0f172a" }}>👤 Eligibility Requirements</h4>
                <p style={{ margin: 0, fontSize: "13px", color: "#475569", lineHeight: "1.5" }}>
                  {selectedScheme.eligibility}
                </p>
              </div>

              <div>
                <h4 style={{ margin: "0 0 8px", fontSize: "14px", color: "#0f172a" }}>📑 Required Documents Checklist</h4>
                <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "13px", color: "#334155" }}>
                  {(selectedScheme.required_documents || ["Aadhaar Card", "Land Records"]).map((doc, dIdx) => (
                    <li key={dIdx} style={{ marginBottom: "4px" }}>{doc}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ margin: "0 0 6px", fontSize: "14px", color: "#0f172a" }}>🚀 How to Apply Step-by-Step</h4>
                <p style={{ margin: 0, fontSize: "13px", color: "#475569", lineHeight: "1.5" }}>
                  {selectedScheme.application_process}
                </p>
              </div>
            </div>

            <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "13px", color: "#64748b" }}>
                Deadline: <strong>{selectedScheme.application_deadline || "Ongoing"}</strong>
              </span>
              <a
                href={selectedScheme.official_url || selectedScheme.official_source || "https://myscheme.gov.in"}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#15803d",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  fontWeight: "700",
                  fontSize: "14px"
                }}
              >
                Go to Official Govt Portal ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

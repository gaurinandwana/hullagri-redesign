import React, { useEffect, useState } from 'react';

export default function SchemeDetailScreen({ farmerId, onBack }) {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchSchemes() {
      try {
        setLoading(true);
        const idToUse = farmerId || "default_farmer";
        const response = await fetch(`http://127.0.0.1:8000/api/schemes/eligible/${idToUse}`);
        const data = await response.json();
        
        // Grab the schemes array safely
        setSchemes(data.eligible_schemes || []);
      } catch (err) {
        console.error("Failed to fetch schemes:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchSchemes();
  }, [farmerId]);

  // Safe filtering that won't brick to 0 if a filter is weird
  const filteredSchemes = schemes.filter(scheme => {
    const matchesCategory = selectedFilter === "All" || 
      (scheme.schemeType && scheme.schemeType.toLowerCase().includes(selectedFilter.toLowerCase()));
    
    const matchesSearch = !searchQuery || 
      (scheme.schemeName && scheme.schemeName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (scheme.benefits && scheme.benefits.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ padding: "16px", background: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
        {onBack && <button onClick={onBack} style={{ marginRight: "12px", fontSize: "18px", background: "none", border: "none", cursor: "pointer" }}>←</button>}
        <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#166534" }}>Schemes For You ({filteredSchemes.length})</h2>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "8px", marginBottom: "16px" }}>
        {["All", "Central", "State", "Cash Transfer", "Crop Insurance"].map(filter => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              background: selectedFilter === filter ? "#166534" : "#e2e8f0",
              color: selectedFilter === filter ? "#fff" : "#334155",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
              fontWeight: "600",
              fontSize: "13px"
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {loading ? (
        <p style={{ textAlign: "center", color: "#64748b", marginTop: "40px" }}>Finding matching schemes...</p>
      ) : filteredSchemes.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "40px", color: "#64748b" }}>
          <p style={{ fontWeight: "600" }}>No schemes found matching this filter.</p>
          <button 
            onClick={() => { setSelectedFilter("All"); setSearchQuery(""); }}
            style={{ marginTop: "10px", padding: "6px 12px", background: "#166534", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        filteredSchemes.map((scheme, index) => (
          <div key={index} style={{ background: "#fff", padding: "16px", borderRadius: "12px", marginBottom: "12px", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
            <span style={{ fontSize: "11px", background: "#dcfce7", color: "#166534", padding: "2px 8px", borderRadius: "4px", fontWeight: "600" }}>
              {scheme.schemeType || "Central Scheme"}
            </span>
            <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#0f172a", marginTop: "6px" }}>{scheme.schemeName}</h3>
            <p style={{ fontSize: "13px", color: "#475569", marginTop: "4px" }}>{scheme.benefits}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px", fontSize: "12px", color: "#64748b" }}>
              <span>Deadline: {scheme.applicationDeadline || "Ongoing"}</span>
              <button style={{ background: "#166534", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer", fontWeight: "600" }}>
                Apply Now
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
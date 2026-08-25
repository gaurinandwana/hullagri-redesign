import React, { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api';

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
        const baseUrl = await getApiUrl();
        const response = await fetch(`${baseUrl}/api/schemes/eligible/${idToUse}`);
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
    const stype = scheme.scheme_type || scheme.schemeType || "";
    const sname = scheme.scheme_name || scheme.schemeName || "";

    const matchesCategory = selectedFilter === "All" || 
      stype.toLowerCase().includes(selectedFilter.toLowerCase());
    
    const matchesSearch = !searchQuery || 
      sname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (scheme.benefits && scheme.benefits.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ padding: "24px 32px", background: "#f8fafc", minHeight: "100vh", maxWidth: "1400px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        {onBack && <button onClick={onBack} style={{ marginRight: "12px", fontSize: "20px", background: "none", border: "none", cursor: "pointer" }}>←</button>}
        <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#166534", margin: 0 }}>Schemes For You ({filteredSchemes.length})</h2>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "8px", marginBottom: "20px" }}>
        {["All", "Central", "State", "Cash Transfer", "Crop Insurance"].map(filter => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            style={{
              padding: "8px 18px",
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
        <div style={{ textAlign: "center", marginTop: "40px", color: "#64748b", backgroundColor: "#fff", padding: "40px", borderRadius: "16px" }}>
          <p style={{ fontWeight: "600" }}>No schemes found matching this filter.</p>
          <button 
            onClick={() => { setSelectedFilter("All"); setSearchQuery(""); }}
            style={{ marginTop: "10px", padding: "8px 16px", background: "#166534", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "16px" }}>
          {filteredSchemes.map((scheme, index) => (
            <div key={index} style={{ background: "#fff", padding: "20px", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontSize: "11px", background: "#dcfce7", color: "#166534", padding: "3px 8px", borderRadius: "6px", fontWeight: "700" }}>
                  {scheme.scheme_type || scheme.schemeType || "Central Scheme"}
                </span>
                <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#0f172a", marginTop: "10px", lineHeight: "1.3" }}>
                  {scheme.scheme_name || scheme.schemeName}
                </h3>
                <p style={{ fontSize: "13px", color: "#475569", marginTop: "6px", lineHeight: "1.4" }}>{scheme.benefits}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px", fontSize: "12px", color: "#64748b", borderTop: "1px solid #f1f5f9", paddingTop: "12px" }}>
                <span>Deadline: {scheme.application_deadline || scheme.applicationDeadline || "Ongoing"}</span>
                <a 
                  href={scheme.official_url || scheme.officialSource || "https://myscheme.gov.in"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ background: "#166534", color: "#fff", textDecoration: "none", padding: "8px 16px", borderRadius: "8px", fontWeight: "600" }}
                >
                  Apply Now ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
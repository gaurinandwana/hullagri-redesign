import { useState } from "react"
import { getApiUrl } from "../utils/api"

export default function CropSelectionScreen({ fullProfile, onNext, onBack }) {
  const [selected, setSelected] = useState([])
  const [tab, setTab] = useState("thisYear")
  const [search, setSearch] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const crops = ["Wheat", "Rice", "Maize", "Bajra", "Jowar", "Cotton", "Sugarcane", "Soybean", "Groundnut", "Mustard", "Sunflower", "Turmeric", "Onion", "Tomato", "Potato", "Chilli", "Garlic", "Rubber", "Jute", "Arecanut", "Coconut", "Banana", "Mango"]

  const filtered = crops.filter(c => c.toLowerCase().includes(search.toLowerCase()))

  const toggle = (crop) => {
    setSelected(prev => prev.includes(crop) ? prev.filter(c => c !== crop) : [...prev, crop])
  }

  const handleProceed = async () => {
    if (selected.length === 0) { setError("Please select at least one crop"); return }
    setError("")
    setLoading(true)

    const generatedFarmerId = "farmer_" + Math.floor(100000 + Math.random() * 900000);

    const payload = {
      farmer_id: generatedFarmerId,
      language_preference: fullProfile?.language_preference || "English",
      location: {
        state: fullProfile?.location?.state || "Punjab",
        district: fullProfile?.location?.district || "Ludhiana",
        village: fullProfile?.location?.village || "Kotli",
        pincode: fullProfile?.location?.pincode || "141001",
        total_land_area: fullProfile?.location?.total_land_area || 2.5,
        land_unit: fullProfile?.location?.land_unit || "Acres"
      },
      fpo_member: fullProfile?.fpo_member || "No",
      intent_to_buy_tractor: fullProfile?.intent_to_buy_tractor || "No",
      intent_to_buy_harvester: fullProfile?.intent_to_buy_harvester || "No",
      caste_category: fullProfile?.caste_category || "General",
      is_disabled_or_bpl: fullProfile?.is_disabled_or_bpl || "No",
      livestock: fullProfile?.livestock || {},
      crops_last_year: tab === "lastYear" ? selected : ["Wheat"],
      crops_this_year: tab === "thisYear" ? selected : selected
    };

    try {
      const baseUrl = await getApiUrl();
      await fetch(`${baseUrl}/api/farmer/onboarding`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      console.log("Profile save notice:", e);
    } finally {
      setLoading(false);
      onNext(generatedFarmerId);
    }
  }

  return (
    <div style={{ height: "100vh", backgroundColor: "#f8fafc", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Compact Top Green Header */}
      <div style={{ backgroundColor: "#2d8c3e", padding: "10px 24px", height: "50px", display: "flex", alignItems: "center", gap: "12px", flexShrink: 0, boxSizing: "border-box", boxShadow: "0 2px 4px rgba(0,0,0,0.08)" }}>
        {onBack && <span onClick={onBack} style={{ color: "#fff", fontSize: "18px", cursor: "pointer", marginRight: "4px" }}>←</span>}
        <div style={{ width: "32px", height: "32px", backgroundColor: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyCenter: "center", fontSize: "18px" }}>🌾</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
          <h1 style={{ color: "#fff", fontSize: "16px", fontWeight: "700", margin: 0 }}>Crop Selection</h1>
          <span style={{ color: "#c8e6c9", fontSize: "12px" }}>• Step 5 of 5</span>
        </div>
      </div>

      {/* Centered Desktop Workspace */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", overflowY: "auto" }}>
        {/* Centered Desktop Card */}
        <div style={{
          maxWidth: "750px",
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
          padding: "24px 32px",
          display: "flex",
          flexDirection: "column",
          gap: "14px"
        }}>
          {/* Stepper Progress Bar */}
          <div style={{ display: "flex", gap: "6px" }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} style={{ flex: 1, height: "4px", borderRadius: "2px", backgroundColor: "#2d8c3e" }} />
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#0f172a", margin: "0 0 2px" }}>Select Your Crops</h2>
              <p style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Unlocks crop insurance and MSP price support recommendations</p>
            </div>
            <div style={{ display: "flex", backgroundColor: "#f1f5f9", borderRadius: "8px", padding: "2px" }}>
              {["lastYear", "thisYear"].map((t) => (
                <button key={t} onClick={() => setTab(t)} style={{ padding: "5px 12px", borderRadius: "6px", border: "none", backgroundColor: tab === t ? "#2d8c3e" : "transparent", color: tab === t ? "#fff" : "#475569", fontWeight: tab === t ? "700" : "500", cursor: "pointer", fontSize: "12px" }}>
                  {t === "lastYear" ? "Last Year" : "This Year"}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search crops (e.g. Wheat, Cotton)..."
              style={{ flex: 1, padding: "8px 12px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "13px", outline: "none", backgroundColor: "#fafafa" }} />
            <span style={{ fontSize: "12px", color: "#64748b", whiteSpace: "nowrap" }}>Selected: <strong>{selected.length}</strong></span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: "8px", maxHeight: "240px", overflowY: "auto", padding: "2px" }}>
            {filtered.map((crop) => (
              <button key={crop} onClick={() => toggle(crop)}
                style={{ padding: "8px 10px", borderRadius: "8px", border: "1.5px solid", borderColor: selected.includes(crop) ? "#2d8c3e" : "#e2e8f0", backgroundColor: selected.includes(crop) ? "#e8f5e9" : "#fff", color: selected.includes(crop) ? "#2d8c3e" : "#334155", fontWeight: selected.includes(crop) ? "700" : "500", cursor: "pointer", fontSize: "13px" }}>
                {crop}
              </button>
            ))}
          </div>

          {error && <p style={{ color: "#dc2626", fontSize: "12px", margin: 0, textAlign: "center" }}>{error}</p>}

          <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "12px" }}>
            <button onClick={handleProceed} disabled={loading}
              style={{ width: "100%", padding: "12px", backgroundColor: loading ? "#cbd5e1" : "#2d8c3e", color: "#fff", fontSize: "15px", fontWeight: "700", border: "none", borderRadius: "10px", cursor: loading ? "not-allowed" : "pointer", transition: "background-color 0.2s ease" }}>
              {loading ? "Saving Profile..." : "Proceed →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
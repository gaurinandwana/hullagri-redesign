import { useState } from "react"

export default function LivestockScreen({ onNext, onBack }) {
  const [counts, setCounts] = useState({})
  const [buyCattle, setBuyCattle] = useState("No")

  const animals = [
    {id:"cows", label:"Cows", emoji:"🐄"},
    {id:"bulls", label:"Bulls", emoji:"🐂"},
    {id:"buffaloes", label:"Buffaloes", emoji:"🐃"},
    {id:"sheep", label:"Sheep", emoji:"🐑"},
    {id:"goat", label:"Goat", emoji:"🐐"},
    {id:"hen", label:"Hen", emoji:"🐔"},
    {id:"rooster", label:"Rooster", emoji:"🐓"},
    {id:"pigs", label:"Pigs", emoji:"🐖"},
    {id:"ducks", label:"Ducks", emoji:"🦆"},
    {id:"others", label:"Others", emoji:"🐾"},
  ]

  const update = (id, delta) => {
    setCounts(prev => ({...prev, [id]: Math.max(0, (prev[id] || 0) + delta)}))
  }

  const handleProceed = () => {
    const formattedLivestock = {}
    animals.forEach(a => {
      if (counts[a.id] && counts[a.id] > 0) {
        formattedLivestock[a.label] = counts[a.id]
      }
    })
    onNext(formattedLivestock)
  }

  return (
    <div style={{ height: "100vh", backgroundColor: "#f8fafc", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Compact Top Green Header */}
      <div style={{ backgroundColor: "#2d8c3e", padding: "10px 24px", height: "50px", display: "flex", alignItems: "center", gap: "12px", flexShrink: 0, boxSizing: "border-box", boxShadow: "0 2px 4px rgba(0,0,0,0.08)" }}>
        {onBack && <span onClick={onBack} style={{ color: "#fff", fontSize: "18px", cursor: "pointer", marginRight: "4px" }}>←</span>}
        <div style={{ width: "32px", height: "32px", backgroundColor: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyCenter: "center", fontSize: "18px" }}>🐄</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
          <h1 style={{ color: "#fff", fontSize: "16px", fontWeight: "700", margin: 0 }}>Livestock Details</h1>
          <span style={{ color: "#c8e6c9", fontSize: "12px" }}>• Step 4 of 5</span>
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
              <div key={i} style={{ flex: 1, height: "4px", borderRadius: "2px", backgroundColor: i <= 4 ? "#2d8c3e" : "#e2e8f0" }} />
            ))}
          </div>

          <div>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#0f172a", margin: "0 0 2px" }}>Animal Husbandry & Livestock</h2>
            <p style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Enables animal husbandry subsidies and National Livestock Mission eligibility</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "8px" }}>
            {animals.map((a) => (
              <div key={a.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 12px", backgroundColor: "#f8fafc", borderRadius: "8px", border: "1px solid #f1f5f9" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "20px" }}>{a.emoji}</span>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "#0f172a" }}>{a.label}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <button onClick={() => update(a.id, -1)} style={{ width: "26px", height: "26px", borderRadius: "6px", border: "1px solid #cbd5e1", backgroundColor: "#fff", fontSize: "15px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                  <span style={{ fontSize: "14px", fontWeight: "700", minWidth: "16px", textAlign: "center" }}>{counts[a.id] || 0}</span>
                  <button onClick={() => update(a.id, 1)} style={{ width: "26px", height: "26px", borderRadius: "6px", border: "1px solid #2d8c3e", backgroundColor: "#e8f5e9", fontSize: "15px", cursor: "pointer", color: "#2d8c3e", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#f8fafc", padding: "8px 14px", borderRadius: "8px" }}>
            <label style={{ fontSize: "13px", fontWeight: "600", color: "#334155" }}>Are you looking to buy new cattle? *</label>
            <div style={{ display: "flex", gap: "6px" }}>
              {["Yes", "No", "Not sure"].map((opt) => (
                <button key={opt} onClick={() => setBuyCattle(opt)} style={{ padding: "5px 12px", borderRadius: "6px", border: "1.5px solid", borderColor: buyCattle === opt ? "#2d8c3e" : "#cbd5e1", backgroundColor: buyCattle === opt ? "#e8f5e9" : "#fff", color: buyCattle === opt ? "#2d8c3e" : "#334155", cursor: "pointer", fontSize: "12px", fontWeight: buyCattle === opt ? "700" : "500" }}>{opt}</button>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "12px" }}>
            <button onClick={handleProceed} style={{ width: "100%", padding: "12px", backgroundColor: "#2d8c3e", color: "#fff", fontSize: "15px", fontWeight: "700", border: "none", borderRadius: "10px", cursor: "pointer", transition: "background-color 0.2s ease" }}>Proceed →</button>
          </div>
        </div>
      </div>
    </div>
  )
}

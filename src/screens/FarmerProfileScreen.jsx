import { useState } from "react"

export default function FarmerProfileScreen({ onNext, onBack }) {
  const [answers, setAnswers] = useState({})
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState("")

  const questions = [
    { id:"fpo", text:"Are you part of a farmer producer organisation?", hint:"Select 'Yes' if you're part of any farmer group" },
    { id:"tractor", text:"Are you planning on buying a tractor in the next 6 months?" },
    { id:"harvester", text:"Are you looking to buy a harvester or tools in the next 6 months?" },
    { id:"caste", text:"Are you a member of a scheduled caste / scheduled tribe?" },
    { id:"disabled", text:"Are you currently disabled or below the poverty line?" },
  ]

  const handleProceed = () => {
    const allAnswered = questions.every(q => answers[q.id])
    if (!allAnswered) { setError("Please answer all questions to continue"); return }
    if (!agreed) { setError("Please agree to terms and conditions"); return }
    setError("")
    onNext({
      fpo_member: answers.fpo || "No",
      intent_to_buy_tractor: answers.tractor || "No",
      intent_to_buy_harvester: answers.harvester || "No",
      caste_category: answers.caste === "Yes" ? "SC/ST" : "General",
      is_disabled_or_bpl: answers.disabled || "No"
    })
  }

  return (
    <div style={{ height: "100vh", backgroundColor: "#f8fafc", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Compact Top Green Header */}
      <div style={{ backgroundColor: "#2d8c3e", padding: "10px 24px", height: "50px", display: "flex", alignItems: "center", gap: "12px", flexShrink: 0, boxSizing: "border-box", boxShadow: "0 2px 4px rgba(0,0,0,0.08)" }}>
        {onBack && <span onClick={onBack} style={{ color: "#fff", fontSize: "18px", cursor: "pointer", marginRight: "4px" }}>←</span>}
        <div style={{ width: "32px", height: "32px", backgroundColor: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>👨‍🌾</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
          <h1 style={{ color: "#fff", fontSize: "16px", fontWeight: "700", margin: 0 }}>Farmer Profile</h1>
          <span style={{ color: "#c8e6c9", fontSize: "12px" }}>• Step 1 of 2</span>
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
          gap: "12px"
        }}>
          {/* Stepper Progress Bar */}
          <div style={{ display: "flex", gap: "6px" }}>
            {[1, 2].map((i) => (
              <div key={i} style={{ flex: 1, height: "4px", borderRadius: "2px", backgroundColor: i === 1 ? "#2d8c3e" : "#e2e8f0" }} />
            ))}
          </div>

          <div>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#0f172a", margin: "0 0 2px" }}>Farming & Demographic Profile</h2>
            <p style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Helps unlock targeted subsidies, grants, and specialized financial benefits</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {questions.map((q) => (
              <div key={q.id} style={{ backgroundColor: "#f8fafc", padding: "8px 12px", borderRadius: "8px", border: "1px solid #f1f5f9" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: "600", color: "#0f172a", margin: 0 }}>{q.text} <span style={{ color: "#dc2626" }}>*</span></p>
                    {q.hint && <p style={{ fontSize: "11px", color: "#64748b", margin: "2px 0 0" }}>{q.hint}</p>}
                  </div>
                  <div style={{ display: "flex", gap: "6px" }}>
                    {["Yes", "No", "Not sure"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setAnswers({ ...answers, [q.id]: opt })}
                        style={{
                          padding: "5px 12px",
                          borderRadius: "6px",
                          border: "1.5px solid",
                          borderColor: answers[q.id] === opt ? "#2d8c3e" : "#cbd5e1",
                          backgroundColor: answers[q.id] === opt ? "#e8f5e9" : "#fff",
                          color: answers[q.id] === opt ? "#2d8c3e" : "#334155",
                          fontWeight: answers[q.id] === opt ? "700" : "500",
                          cursor: "pointer",
                          fontSize: "12px",
                          whiteSpace: "nowrap"
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "2px" }}>
            <input type="checkbox" id="terms" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={{ width: "15px", height: "15px", cursor: "pointer" }} />
            <label htmlFor="terms" style={{ fontSize: "12px", color: "#2d8c3e", cursor: "pointer", textDecoration: "underline", fontWeight: "500" }}>I agree to the terms and conditions</label>
          </div>

          {error && <p style={{ color: "#dc2626", fontSize: "12px", margin: 0, textAlign: "center" }}>{error}</p>}

          <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "12px" }}>
            <button onClick={handleProceed} style={{ width: "100%", padding: "12px", backgroundColor: "#2d8c3e", color: "#fff", fontSize: "15px", fontWeight: "700", border: "none", borderRadius: "10px", cursor: "pointer", transition: "background-color 0.2s ease" }}>
              Proceed →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

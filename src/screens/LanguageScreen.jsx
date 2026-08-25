import { useState } from "react"

export default function LanguageScreen({ onNext }) {
  const [selected, setSelected] = useState("")
  const languages = ["हिन्दी","English","ગુજરાતી","বাংলা","ಕನ್ನಡ","മലയാളം","मराठी","ଓଡ଼ିଆ","தமிழ்","తెలుగు"]

  const handleProceed = () => {
    if (!selected) return;
    onNext(selected);
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#f8fafc", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Compact Top Green Header */}
      <div style={{ backgroundColor: "#2d8c3e", padding: "10px 24px", height: "50px", display: "flex", alignItems: "center", gap: "12px", flexShrink: 0, boxSizing: "border-box", boxShadow: "0 2px 4px rgba(0,0,0,0.08)" }}>
        <div style={{ width: "32px", height: "32px", backgroundColor: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyCenter: "center", fontSize: "18px" }}>🌾</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
          <h1 style={{ color: "#fff", fontSize: "16px", fontWeight: "700", margin: 0 }}>Hull Agri</h1>
          <span style={{ color: "#c8e6c9", fontSize: "12px" }}>• Smart Farming Assistant</span>
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
          gap: "20px"
        }}>
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#0f172a", margin: "0 0 4px" }}>Select your language</h2>
            <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>You can change the language preference anytime in settings</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "10px" }}>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelected(lang)}
                style={{
                  padding: "12px 10px",
                  borderRadius: "10px",
                  border: "2px solid",
                  borderColor: selected === lang ? "#2d8c3e" : "#e2e8f0",
                  backgroundColor: selected === lang ? "#e8f5e9" : "#fff",
                  color: selected === lang ? "#2d8c3e" : "#334155",
                  fontSize: "15px",
                  fontWeight: selected === lang ? "700" : "500",
                  cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
              >
                {lang}
              </button>
            ))}
          </div>

          <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "16px" }}>
            {!selected && <p style={{ textAlign: "center", color: "#e65100", fontSize: "12px", margin: "0 0 8px" }}>Please select a language to continue</p>}
            <button
              onClick={handleProceed}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: selected ? "#2d8c3e" : "#cbd5e1",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
                border: "none",
                borderRadius: "10px",
                cursor: selected ? "pointer" : "not-allowed",
                transition: "background-color 0.2s ease"
              }}
            >
              Proceed →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
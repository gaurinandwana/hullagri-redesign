import { useEffect } from "react"

export default function SplashScreen({ onNext }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onNext) onNext()
    }, 3000)
    return () => clearTimeout(timer)
  }, [onNext])

  return (
    <div 
      onClick={onNext}
      style={{
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#2d8c3e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        cursor: "pointer",
        userSelect: "none"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
        <div style={{
          width: "120px",
          height: "120px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "60px",
          boxShadow: "0 12px 32px rgba(0,0,0,0.25)"
        }}>
          🌾
        </div>
        
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#fff", fontSize: "36px", fontWeight: "800", margin: 0, letterSpacing: "-0.5px" }}>Hull Agri</h1>
          <p style={{ color: "#c8e6c9", fontSize: "17px", fontWeight: "500", margin: "8px 0 0" }}>Smart Agricultural Scheme Assistant</p>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation()
            if (onNext) onNext()
          }}
          style={{
            marginTop: "16px",
            padding: "14px 36px",
            backgroundColor: "#ffffff",
            color: "#2d8c3e",
            border: "none",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            transition: "transform 0.15s ease, boxShadow 0.15s ease"
          }}
        >
          Get Started →
        </button>

        <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: i === 0 ? "#fff" : "rgba(255,255,255,0.4)" }} />
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "32px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", margin: 0 }}>Powered by Hull Agri Solutions</p>
      </div>
    </div>
  )
}
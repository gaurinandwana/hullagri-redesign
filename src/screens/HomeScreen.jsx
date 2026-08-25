import { useState } from "react"

export default function HomeScreen({ onNext, onNotifications, onProfile, onAIChat, onDashboard }) {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const schemes = [
    { id:1, title:"PM Kisan Samman Nidhi", category:"Cash Transfer", amount:"₹6,000/year", tag:"Central Govt", tagColor:"#2d8c3e", borderColor:"#2d8c3e", bg:"#e8f5e9" },
    { id:2, title:"Price Support Scheme", category:"Price Support", amount:"MSP Guaranteed", tag:"Central Govt", tagColor:"#1565c0", borderColor:"#1565c0", bg:"#e3f2fd" },
    { id:3, title:"PM Fasal Bima Yojana", category:"Crop Insurance", amount:"Up to ₹2 Lakh", tag:"Central Govt", tagColor:"#e65100", borderColor:"#e65100", bg:"#fff3e0" },
    { id:4, title:"Kisan Credit Card", category:"Credit", amount:"Up to ₹3 Lakh", tag:"Banking", tagColor:"#c62828", borderColor:"#c62828", bg:"#fce4ec" },
    { id:5, title:"Sub-Mission on Agricultural Mechanization", category:"Machinery", amount:"40%-80% Subsidy", tag:"Mechanization", tagColor:"#6a1b9a", borderColor:"#6a1b9a", bg:"#f3e5f5" },
    { id:6, title:"PM Krishi Sinchai Yojana", category:"Irrigation", amount:"Subsidized Drip/Sprinkler", tag:"Central Govt", tagColor:"#00695c", borderColor:"#00695c", bg:"#e0f7fa" },
  ]

  const categories = ["All","Cash Transfer","Crop Insurance","Irrigation","Credit","Price Support","Machinery"]

  const filtered = schemes.filter(s => {
    const matchCategory = activeCategory === "All" || s.category === activeCategory
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div style={{minHeight:"100vh",backgroundColor:"#f5f5f5",display:"flex",flexDirection:"column"}}>
      <div style={{backgroundColor:"#2d8c3e",padding:"20px 20px 30px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"}}>
          <div>
            <p style={{color:"#c8e6c9",fontSize:"13px",margin:0}}>Welcome back 👋</p>
            <h2 style={{color:"#fff",fontSize:"20px",fontWeight:"700",margin:"4px 0 0"}}>Find Your Schemes</h2>
          </div>
          <div onClick={onNotifications} style={{width:"42px",height:"42px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",cursor:"pointer"}}>
            🔔
          </div>
        </div>

        {/* Scheme Visualization Dashboard Banner */}
        <div 
          onClick={onDashboard || onNext}
          style={{
            backgroundColor:"#15803d",
            color: "#ffffff",
            borderRadius:"16px",
            padding:"14px 16px",
            marginBottom:"12px",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            cursor:"pointer",
            boxShadow:"0 4px 12px rgba(0,0,0,0.15)",
            border:"2px solid #86efac"
          }}
        >
          <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            <span style={{fontSize:"28px"}}>📊</span>
            <div>
              <h3 style={{fontSize:"15px",fontWeight:"700",color:"#ffffff",margin:0}}>Scheme Visualization Dashboard</h3>
              <p style={{fontSize:"12px",color:"#dcfce7",margin:"2px 0 0"}}>Interactive filters by State, SC/ST, FPO, Crops & Cash Transfer</p>
            </div>
          </div>
          <span style={{backgroundColor:"#ffffff",color:"#15803d",fontSize:"12px",fontWeight:"700",padding:"6px 12px",borderRadius:"20px",whiteSpace:"nowrap"}}>
            Explore Dashboard →
          </span>
        </div>

        {/* AI Scheme Assistant Quick Banner */}
        <div 
          onClick={onAIChat}
          style={{
            backgroundColor:"#ffffff",
            borderRadius:"16px",
            padding:"14px 16px",
            marginBottom:"14px",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            cursor:"pointer",
            boxShadow:"0 4px 12px rgba(0,0,0,0.1)",
            border:"2px solid #a5d6a7"
          }}
        >
          <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            <span style={{fontSize:"28px"}}>🤖</span>
            <div>
              <h3 style={{fontSize:"15px",fontWeight:"700",color:"#1b5e20",margin:0}}>AI Scheme Assistant</h3>
              <p style={{fontSize:"12px",color:"#4b5563",margin:"2px 0 0"}}>Ask questions & get eligible scheme recommendations</p>
            </div>
          </div>
          <span style={{backgroundColor:"#2d8c3e",color:"#fff",fontSize:"12px",fontWeight:"700",padding:"6px 12px",borderRadius:"20px",whiteSpace:"nowrap"}}>
            Ask AI →
          </span>
        </div>

        <div style={{backgroundColor:"#fff",borderRadius:"12px",padding:"12px 16px",display:"flex",alignItems:"center",gap:"10px"}}>
          <span style={{fontSize:"18px"}}>🔍</span>
          <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search schemes..."
            style={{border:"none",outline:"none",fontSize:"14px",flex:1,color:"#333",backgroundColor:"transparent"}}/>
        </div>
      </div>

      <div style={{padding:"16px 20px",overflowX:"auto",whiteSpace:"nowrap",backgroundColor:"#fff",borderBottom:"1px solid #f0f0f0"}}>
        {categories.map((cat)=>(
          <button key={cat} onClick={()=>setActiveCategory(cat)}
            style={{display:"inline-block",padding:"8px 16px",borderRadius:"20px",border:"none",backgroundColor:activeCategory===cat?"#2d8c3e":"#f0f0f0",color:activeCategory===cat?"#fff":"#555",fontWeight:activeCategory===cat?"700":"400",cursor:"pointer",marginRight:"8px"}}>
            {cat}
          </button>
        ))}
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px", maxWidth: "1400px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
        <p style={{ fontSize: "14px", color: "#64748b", fontWeight: "600", marginBottom: "16px" }}>{filtered.length} schemes found</p>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "#fff", borderRadius: "16px" }}>
            <p style={{ fontSize: "48px", margin: 0 }}>🔍</p>
            <p style={{ color: "#64748b", fontSize: "15px", marginTop: "12px" }}>No schemes found matching "{search}"</p>
          </div>
        )}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
          {filtered.map((scheme) => (
            <div key={scheme.id} onClick={onNext}
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                cursor: "pointer",
                borderLeft: `5px solid ${scheme.borderColor}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.2s ease, boxShadow 0.2s ease"
              }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", margin: 0, flex: 1, paddingRight: "10px", lineHeight: "1.3" }}>{scheme.title}</h3>
                  <span style={{ backgroundColor: scheme.bg, color: scheme.tagColor, fontSize: "11px", fontWeight: "700", padding: "4px 10px", borderRadius: "8px", whiteSpace: "nowrap" }}>{scheme.tag}</span>
                </div>
                <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 16px" }}>{scheme.category}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #f1f5f9", paddingTop: "12px" }}>
                <span style={{ fontSize: "15px", fontWeight: "700", color: scheme.tagColor }}>{scheme.amount}</span>
                <span style={{ fontSize: "13px", color: "#2d8c3e", fontWeight: "700" }}>View Details →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

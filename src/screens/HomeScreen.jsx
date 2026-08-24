import { useState } from "react"

export default function HomeScreen({ onNext, onNotifications, onProfile }) {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const schemes = [
    { id:1, title:"PM Kisan Samman Nidhi", category:"Cash Transfer", amount:"₹6,000/year", tag:"Central Govt", tagColor:"#2d8c3e", borderColor:"#2d8c3e", bg:"#e8f5e9" },
    { id:2, title:"Price Support Scheme", category:"Price Support", amount:"MSP Guaranteed", tag:"Central Govt", tagColor:"#1565c0", borderColor:"#1565c0", bg:"#e3f2fd" },
    { id:3, title:"PM Fasal Bima Yojana", category:"Crop Insurance", amount:"Up to ₹2 Lakh", tag:"Central Govt", tagColor:"#e65100", borderColor:"#e65100", bg:"#fff3e0" },
    { id:4, title:"Kisan Credit Card", category:"Credit", amount:"Up to ₹3 Lakh", tag:"Banking", tagColor:"#c62828", borderColor:"#c62828", bg:"#fce4ec" },
    { id:5, title:"Soil Health Card Scheme", category:"Soil Testing", amount:"Free Testing", tag:"Central Govt", tagColor:"#6a1b9a", borderColor:"#6a1b9a", bg:"#f3e5f5" },
    { id:6, title:"PM Krishi Sinchai Yojana", category:"Irrigation", amount:"Subsidy Available", tag:"Central Govt", tagColor:"#00695c", borderColor:"#00695c", bg:"#e0f7fa" },
  ]

  const categories = ["All","Cash Transfer","Crop Insurance","Irrigation","Credit","Price Support"]

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
        <div style={{backgroundColor:"#fff",borderRadius:"12px",padding:"12px 16px",display:"flex",alignItems:"center",gap:"10px"}}>
          <span style={{fontSize:"18px"}}>🔍</span>
          <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search schemes..."
            style={{border:"none",outline:"none",fontSize:"14px",flex:1,color:"#333",backgroundColor:"transparent"}}/>
        </div>
      </div>

      <div style={{padding:"16px 20px",overflowX:"auto",whiteSpace:"nowrap",backgroundColor:"#fff",borderBottom:"1px solid #f0f0f0"}}>
        {categories.map((cat)=>(
          <button key={cat} onClick={()=>setActiveCategory(cat)}
            style={{display:"inline-block",padding:"8px 16px",borderRadius:"20px",border:"none",backgroundColor:activeCategory===cat?"#2d8c3e":"#f0f0f0",color:activeCategory===cat?"#fff":"#555",fontSize:"13px",fontWeight:activeCategory===cat?"700":"400",cursor:"pointer",marginRight:"8px"}}>
            {cat}
          </button>
        ))}
      </div>

      <div style={{flex:1,overflowY:"auto",padding:"16px"}}>
        <p style={{fontSize:"13px",color:"#888",marginBottom:"12px"}}>{filtered.length} schemes found</p>
        {filtered.length === 0 && (
          <div style={{textAlign:"center",padding:"40px 20px"}}>
            <p style={{fontSize:"40px"}}>🔍</p>
            <p style={{color:"#888",fontSize:"14px"}}>No schemes found for "{search}"</p>
          </div>
        )}
        {filtered.map((scheme)=>(
          <div key={scheme.id} onClick={onNext}
            style={{backgroundColor:"#fff",borderRadius:"16px",padding:"16px",marginBottom:"12px",boxShadow:"0 2px 8px rgba(0,0,0,0.06)",cursor:"pointer",borderLeft:`4px solid ${scheme.borderColor}`}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"}}>
              <h3 style={{fontSize:"15px",fontWeight:"700",color:"#1a1a1a",margin:0,flex:1,paddingRight:"10px"}}>{scheme.title}</h3>
              <span style={{backgroundColor:scheme.bg,color:scheme.tagColor,fontSize:"11px",fontWeight:"600",padding:"4px 8px",borderRadius:"6px",whiteSpace:"nowrap"}}>{scheme.tag}</span>
            </div>
            <p style={{fontSize:"13px",color:"#888",margin:"0 0 10px"}}>{scheme.category}</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{fontSize:"14px",fontWeight:"700",color:scheme.tagColor}}>{scheme.amount}</span>
              <span style={{fontSize:"13px",color:"#2d8c3e",fontWeight:"600"}}>View Details →</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{backgroundColor:"#fff",borderTop:"1px solid #f0f0f0",padding:"12px 0",display:"flex",justifyContent:"space-around"}}>
        {[{icon:"🏠",label:"Home"},{icon:"📋",label:"Schemes"},{icon:"🔔",label:"Alerts"},{icon:"👤",label:"Profile"}].map((item)=>(
          <div key={item.label}
            onClick={item.label==="Alerts"?onNotifications:item.label==="Profile"?onProfile:null}
            style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",cursor:"pointer"}}>
            <span style={{fontSize:"22px"}}>{item.icon}</span>
            <span style={{fontSize:"11px",color:item.label==="Home"?"#2d8c3e":"#888",fontWeight:item.label==="Home"?"700":"400"}}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

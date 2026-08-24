import { useState } from "react"

export default function CropSelectionScreen({ onNext, onBack }) {
  const [selected, setSelected] = useState([])
  const [tab, setTab] = useState("lastYear")
  const [search, setSearch] = useState("")
  const [error, setError] = useState("")

  const crops = ["Wheat","Rice","Maize","Bajra","Jowar","Cotton","Sugarcane","Soybean","Groundnut","Mustard","Sunflower","Turmeric","Onion","Tomato","Potato","Chilli","Garlic","Rubber","Jute","Arecanut","Coconut","Banana","Mango"]

  const filtered = crops.filter(c => c.toLowerCase().includes(search.toLowerCase()))

  const toggle = (crop) => {
    setSelected(prev => prev.includes(crop) ? prev.filter(c=>c!==crop) : [...prev, crop])
  }

  const handleProceed = () => {
    if (selected.length === 0) { setError("Please select at least one crop"); return }
    setError("")
    onNext()
  }

  return (
    <div style={{minHeight:"100vh",backgroundColor:"#fff",display:"flex",flexDirection:"column"}}>
      <div style={{backgroundColor:"#2d8c3e",padding:"16px 20px",display:"flex",alignItems:"center",gap:"12px"}}>
        <span onClick={onBack} style={{color:"#fff",fontSize:"20px",cursor:"pointer"}}>←</span>
        <span style={{color:"#fff",fontSize:"16px",fontWeight:"600"}}>Crop Selection</span>
      </div>
      <div style={{display:"flex",gap:"6px",padding:"16px 20px"}}>
        {[1,2,3,4,5].map((i)=>(<div key={i} style={{flex:1,height:"4px",borderRadius:"2px",backgroundColor:"#2d8c3e"}}/>))}
      </div>
      <div style={{padding:"0 20px",flex:1,overflowY:"auto"}}>
        <p style={{fontSize:"14px",color:"#555",marginBottom:"16px"}}>Select the crops you grow</p>
        <div style={{display:"flex",backgroundColor:"#f0f0f0",borderRadius:"12px",padding:"4px",marginBottom:"16px"}}>
          {["lastYear","thisYear"].map((t)=>(
            <button key={t} onClick={()=>setTab(t)} style={{flex:1,padding:"10px",borderRadius:"10px",border:"none",backgroundColor:tab===t?"#2d8c3e":"transparent",color:tab===t?"#fff":"#555",fontWeight:tab===t?"700":"400",cursor:"pointer",fontSize:"14px"}}>
              {t==="lastYear"?"Last Year":"This Year"}
            </button>
          ))}
        </div>
        <p style={{fontSize:"13px",color:"#888",marginBottom:"12px"}}>Crops Selected: {selected.length}</p>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search crops..."
          style={{width:"100%",padding:"12px 16px",borderRadius:"12px",border:"1.5px solid #e0e0e0",fontSize:"14px",outline:"none",boxSizing:"border-box",marginBottom:"16px",backgroundColor:"#fafafa"}}/>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginBottom:"20px"}}>
          {filtered.map((crop)=>(
            <button key={crop} onClick={()=>toggle(crop)}
              style={{padding:"14px",borderRadius:"12px",border:"2px solid",borderColor:selected.includes(crop)?"#2d8c3e":"#e0e0e0",backgroundColor:selected.includes(crop)?"#e8f5e9":"#fff",color:selected.includes(crop)?"#2d8c3e":"#333",fontWeight:selected.includes(crop)?"700":"400",cursor:"pointer",fontSize:"14px"}}>
              {crop}
            </button>
          ))}
        </div>
        {error && <p style={{color:"#e65100",fontSize:"13px",marginBottom:"12px",textAlign:"center"}}>{error}</p>}
      </div>
      <div style={{padding:"20px"}}>
        <button onClick={handleProceed}
          style={{width:"100%",padding:"16px",backgroundColor:"#2d8c3e",color:"#fff",fontSize:"16px",fontWeight:"700",border:"none",borderRadius:"12px",cursor:"pointer"}}>
          Proceed →
        </button>
      </div>
    </div>
  )
}
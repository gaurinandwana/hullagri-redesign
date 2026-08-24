import { useState } from "react"

export default function LivestockScreen({ onNext }) {
  const [counts, setCounts] = useState({})
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

  return (
    <div style={{minHeight:"100vh",backgroundColor:"#fff",display:"flex",flexDirection:"column"}}>
      <div style={{backgroundColor:"#2d8c3e",padding:"16px 20px",display:"flex",alignItems:"center",gap:"12px"}}>
        <span style={{color:"#fff",fontSize:"20px"}}>←</span>
        <span style={{color:"#fff",fontSize:"16px",fontWeight:"600"}}>Livestock Details</span>
      </div>
      <div style={{display:"flex",gap:"6px",padding:"16px 20px"}}>
        {[1,2,3,4,5].map((i)=>(<div key={i} style={{flex:1,height:"4px",borderRadius:"2px",backgroundColor:"#2d8c3e"}}/>))}
      </div>
      <div style={{padding:"0 20px",flex:1,overflowY:"auto"}}>
        {animals.map((a)=>(
          <div key={a.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid #f0f0f0"}}>
            <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
              <span style={{fontSize:"28px"}}>{a.emoji}</span>
              <span style={{fontSize:"15px",fontWeight:"600",color:"#1a1a1a"}}>{a.label}</span>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
              <button onClick={()=>update(a.id,-1)} style={{width:"32px",height:"32px",borderRadius:"8px",border:"1.5px solid #e0e0e0",backgroundColor:"#f5f5f5",fontSize:"18px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>−</button>
              <span style={{fontSize:"16px",fontWeight:"700",minWidth:"20px",textAlign:"center"}}>{counts[a.id] || 0}</span>
              <button onClick={()=>update(a.id,1)} style={{width:"32px",height:"32px",borderRadius:"8px",border:"1.5px solid #2d8c3e",backgroundColor:"#e8f5e9",fontSize:"18px",cursor:"pointer",color:"#2d8c3e",display:"flex",alignItems:"center",justifyContent:"center"}}>+</button>
            </div>
          </div>
        ))}
        <div style={{marginTop:"20px",marginBottom:"16px"}}>
          <label style={{fontSize:"14px",fontWeight:"600",color:"#333",display:"block",marginBottom:"8px"}}>Are you looking to buy new cattle? *</label>
          <div style={{display:"flex",gap:"10px"}}>
            {["Yes","No","Not sure"].map((opt)=>(
              <button key={opt} style={{padding:"10px 20px",borderRadius:"10px",border:"1.5px solid #e0e0e0",backgroundColor:"#fff",color:"#333",cursor:"pointer",fontSize:"14px"}}>{opt}</button>
            ))}
          </div>
        </div>
      </div>
      <div style={{padding:"20px"}}>
        <button onClick={onNext} style={{width:"100%",padding:"16px",backgroundColor:"#2d8c3e",color:"#fff",fontSize:"16px",fontWeight:"700",border:"none",borderRadius:"12px",cursor:"pointer"}}>Proceed →</button>
      </div>
    </div>
  )
}

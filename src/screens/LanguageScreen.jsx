import { useState } from "react"
export default function LanguageScreen({ onNext }) {
  const [selected, setSelected] = useState("")
  const languages = ["हिन्दी","English","ગુજરાતી","বাংলা","ಕನ್ನಡ","മലയാളം","मराठी","ଓଡ଼ିଆ","தமிழ்","తెలుగు"]
  return (
    <div style={{minHeight:"100vh",backgroundColor:"#fff",display:"flex",flexDirection:"column"}}>
      <div style={{backgroundColor:"#2d8c3e",padding:"40px 20px 30px",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div style={{width:"80px",height:"80px",backgroundColor:"#fff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"36px",marginBottom:"12px"}}>🌾</div>
        <h1 style={{color:"#fff",fontSize:"22px",fontWeight:"700",margin:0}}>Hull Agri</h1>
        <p style={{color:"#c8e6c9",fontSize:"13px",margin:"4px 0 0"}}>Smart Farming Assistant</p>
      </div>
      <div style={{padding:"30px 20px",flex:1}}>
        <h2 style={{fontSize:"20px",fontWeight:"700",color:"#1a1a1a",marginBottom:"6px"}}>Select your language</h2>
        <p style={{fontSize:"13px",color:"#888",marginBottom:"24px"}}>You can change the language from the menu later on</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
          {languages.map((lang)=>(
            <button key={lang} onClick={()=>setSelected(lang)}
              style={{padding:"16px",borderRadius:"12px",border:"2px solid",borderColor:selected===lang?"#2d8c3e":"#e0e0e0",backgroundColor:selected===lang?"#e8f5e9":"#fff",color:selected===lang?"#2d8c3e":"#333",fontSize:"16px",fontWeight:selected===lang?"700":"500",cursor:"pointer",transition:"all 0.2s"}}>
              {lang}
            </button>
          ))}
        </div>
      </div>
      <div style={{padding:"20px"}}>
        {!selected && <p style={{textAlign:"center",color:"#e65100",fontSize:"13px",marginBottom:"8px"}}>Please select a language</p>}
        <button onClick={()=>selected && onNext()}
          style={{width:"100%",padding:"16px",backgroundColor:selected?"#2d8c3e":"#ccc",color:"#fff",fontSize:"16px",fontWeight:"700",border:"none",borderRadius:"12px",cursor:selected?"pointer":"not-allowed"}}>
          Proceed →
        </button>
      </div>
    </div>
  )
}
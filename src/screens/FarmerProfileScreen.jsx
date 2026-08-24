import { useState } from "react"
export default function FarmerProfileScreen({ onNext }) {
  const [answers, setAnswers] = useState({})
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState("")

  const questions = [
    { id:"fpo", text:"Are you part of a farmer producer organisation?", hint:"Select 'Yes' if you're part of any farmer group" },
    { id:"tractor", text:"Are you planning on buying a tractor in the next 6 months?" },
    { id:"harvester", text:"Are you looking to buy a harvester or any other tools in the next 6 months?" },
    { id:"caste", text:"Are you a member of a scheduled caste/scheduled tribe?" },
    { id:"disabled", text:"Are you currently disabled or below the poverty line?" },
  ]

  const handleProceed = () => {
    const allAnswered = questions.every(q => answers[q.id])
    if (!allAnswered) { setError("Please answer all questions"); return }
    if (!agreed) { setError("Please agree to terms and conditions"); return }
    setError("")
    onNext()
  }

  return (
    <div style={{minHeight:"100vh",backgroundColor:"#fff",display:"flex",flexDirection:"column"}}>
      <div style={{backgroundColor:"#2d8c3e",padding:"16px 20px",display:"flex",alignItems:"center",gap:"12px"}}>
        <span style={{color:"#fff",fontSize:"20px"}}>←</span>
        <span style={{color:"#fff",fontSize:"16px",fontWeight:"600"}}>Farmer Profile</span>
      </div>
      <div style={{display:"flex",gap:"6px",padding:"16px 20px"}}>
        {[1,2,3,4,5].map((i)=>(<div key={i} style={{flex:1,height:"4px",borderRadius:"2px",backgroundColor:i<=4?"#2d8c3e":"#e0e0e0"}}/>))}
      </div>
      <div style={{padding:"0 20px",flex:1,overflowY:"auto"}}>
        {questions.map((q)=>(
          <div key={q.id} style={{marginBottom:"24px"}}>
            <p style={{fontSize:"15px",fontWeight:"700",color:"#1a1a1a",marginBottom:"4px"}}>{q.text} <span style={{color:"red"}}>*</span></p>
            {q.hint && <p style={{fontSize:"12px",color:"#888",marginBottom:"10px"}}>{q.hint}</p>}
            <div style={{display:"flex",gap:"10px"}}>
              {["Yes","No","Not sure"].map((opt)=>(
                <button key={opt} onClick={()=>setAnswers({...answers,[q.id]:opt})}
                  style={{padding:"10px 20px",borderRadius:"10px",border:"2px solid",borderColor:answers[q.id]===opt?"#2d8c3e":"#e0e0e0",backgroundColor:answers[q.id]===opt?"#e8f5e9":"#fff",color:answers[q.id]===opt?"#2d8c3e":"#333",fontWeight:answers[q.id]===opt?"700":"400",cursor:"pointer",fontSize:"14px"}}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div style={{display:"flex",gap:"10px",alignItems:"center",marginBottom:"16px"}}>
          <input type="checkbox" id="terms" checked={agreed} onChange={(e)=>setAgreed(e.target.checked)} style={{width:"18px",height:"18px",cursor:"pointer"}}/>
          <label htmlFor="terms" style={{fontSize:"13px",color:"#2d8c3e",cursor:"pointer",textDecoration:"underline"}}>I agree to the terms and conditions</label>
        </div>
        {error && <p style={{color:"#e65100",fontSize:"13px",marginBottom:"12px"}}>{error}</p>}
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

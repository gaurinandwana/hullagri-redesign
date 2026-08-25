import { useEffect } from "react"

export default function SplashScreen({ onNext }) {
  useEffect(() => {
    const timer = setTimeout(onNext, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{height:"100vh",overflow:"hidden",backgroundColor:"#2d8c3e",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"}}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"}}>
        <div style={{width:"120px",height:"120px",backgroundColor:"#fff",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"60px",boxShadow:"0 8px 32px rgba(0,0,0,0.2)"}}>
          🌾
        </div>
        <div style={{textAlign:"center"}}>
          <h1 style={{color:"#fff",fontSize:"32px",fontWeight:"800",margin:0}}>Hull Agri</h1>
          <p style={{color:"#c8e6c9",fontSize:"16px",margin:"8px 0 0"}}>Smart Farming Assistant</p>
        </div>
        <div style={{marginTop:"20px",display:"flex",gap:"8px"}}>
          {[0,1,2].map(i=>(
            <div key={i} style={{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:i===0?"#fff":"rgba(255,255,255,0.4)"}}/>
          ))}
        </div>
      </div>
      <div style={{position:"absolute",bottom:"40px",textAlign:"center"}}>
        <p style={{color:"rgba(255,255,255,0.6)",fontSize:"12px"}}>Powered by Hull Agri Solutions</p>
      </div>
    </div>
  )
}
export default function NotificationsScreen({ onBack }) {
  const notifications = [
    { id:1, title:"New Scheme Available!", message:"PM Kisan Samman Nidhi registration is now open in your district.", time:"2 hours ago", icon:"🆕", color:"#e8f5e9", border:"#2d8c3e" },
    { id:2, title:"Deadline Reminder", message:"PM Fasal Bima Yojana application deadline is in 5 days.", time:"5 hours ago", icon:"⏰", color:"#fff3e0", border:"#e65100" },
    { id:3, title:"Application Update", message:"Your Price Support Scheme application is under review.", time:"1 day ago", icon:"📋", color:"#e3f2fd", border:"#1565c0" },
    { id:4, title:"New Scheme Available!", message:"Soil Health Card Scheme is now available in Rajasthan.", time:"2 days ago", icon:"🌱", color:"#f3e5f5", border:"#6a1b9a" },
    { id:5, title:"Payment Received", message:"₹2,000 has been credited to your account under PM Kisan.", time:"3 days ago", icon:"💰", color:"#e8f5e9", border:"#2d8c3e" },
  ]

  return (
    <div style={{minHeight:"100vh",backgroundColor:"#f5f5f5",display:"flex",flexDirection:"column"}}>
      <div style={{backgroundColor:"#2d8c3e",padding:"16px 20px",display:"flex",alignItems:"center",gap:"12px"}}>
        <span onClick={onBack} style={{color:"#fff",fontSize:"20px",cursor:"pointer"}}>←</span>
        <span style={{color:"#fff",fontSize:"16px",fontWeight:"600"}}>Notifications</span>
        <span style={{marginLeft:"auto",backgroundColor:"rgba(255,255,255,0.2)",color:"#fff",fontSize:"12px",padding:"4px 10px",borderRadius:"12px"}}>5 new</span>
      </div>

      <div style={{flex:1,overflowY:"auto",padding:"16px"}}>
        {notifications.map((n)=>(
          <div key={n.id} style={{backgroundColor:"#fff",borderRadius:"16px",padding:"16px",marginBottom:"12px",boxShadow:"0 2px 8px rgba(0,0,0,0.06)",borderLeft:`4px solid ${n.border}`,cursor:"pointer"}}>
            <div style={{display:"flex",gap:"12px",alignItems:"flex-start"}}>
              <div style={{width:"44px",height:"44px",backgroundColor:n.color,borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",flexShrink:0}}>
                {n.icon}
              </div>
              <div style={{flex:1}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"}}>
                  <h3 style={{fontSize:"14px",fontWeight:"700",color:"#1a1a1a",margin:0}}>{n.title}</h3>
                  <span style={{fontSize:"11px",color:"#aaa"}}>{n.time}</span>
                </div>
                <p style={{fontSize:"13px",color:"#666",margin:0,lineHeight:"1.5"}}>{n.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{backgroundColor:"#fff",borderTop:"1px solid #f0f0f0",padding:"12px 0",display:"flex",justifyContent:"space-around"}}>
        {[{icon:"🏠",label:"Home"},{icon:"📋",label:"Schemes"},{icon:"🔔",label:"Alerts"},{icon:"👤",label:"Profile"}].map((item)=>(
          <div key={item.label} onClick={item.label==="Home"?onBack:null} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",cursor:"pointer"}}>
            <span style={{fontSize:"22px"}}>{item.icon}</span>
            <span style={{fontSize:"11px",color:item.label==="Alerts"?"#2d8c3e":"#888",fontWeight:item.label==="Alerts"?"700":"400"}}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
import { useState } from "react"

const stateDistricts = {
  "Andhra Pradesh": ["Guntur","Krishna","Visakhapatnam","Kurnool","Nellore","Chittoor","Kadapa","Anantapur","East Godavari","West Godavari"],
  "Bihar": ["Patna","Gaya","Muzaffarpur","Bhagalpur","Darbhanga","Nalanda","Rohtas","Begusarai","Sitamarhi","Vaishali"],
  "Gujarat": ["Ahmedabad","Surat","Vadodara","Rajkot","Gandhinagar","Anand","Mehsana","Junagadh","Amreli","Bharuch"],
  "Karnataka": ["Bengaluru","Mysuru","Hubli","Mangaluru","Belagavi","Kalaburagi","Davanagere","Ballari","Tumakuru","Shivamogga"],
  "Kerala": ["Thiruvananthapuram","Ernakulam","Kozhikode","Thrissur","Kollam","Palakkad","Alappuzha","Malappuram","Kannur","Kottayam"],
  "Madhya Pradesh": ["Bhopal","Indore","Jabalpur","Gwalior","Ujjain","Sagar","Rewa","Satna","Ratlam","Dewas"],
  "Maharashtra": ["Mumbai","Pune","Nagpur","Nashik","Aurangabad","Solapur","Amravati","Kolhapur","Sangli","Jalgaon"],
  "Punjab": ["Ludhiana","Amritsar","Jalandhar","Patiala","Bathinda","Mohali","Firozpur","Gurdaspur","Hoshiarpur","Ropar"],
  "Rajasthan": ["Jaipur","Jodhpur","Udaipur","Kota","Ajmer","Bikaner","Alwar","Bharatpur","Sikar","Pali"],
  "Tamil Nadu": ["Chennai","Coimbatore","Madurai","Tiruchirappalli","Salem","Tirunelveli","Erode","Vellore","Thoothukudi","Dindigul"],
  "Telangana": ["Hyderabad","Warangal","Nizamabad","Karimnagar","Khammam","Rangareddy","Mahbubnagar","Nalgonda","Adilabad","Medak"],
  "Uttar Pradesh": ["Lucknow","Kanpur","Agra","Varanasi","Meerut","Allahabad","Ghaziabad","Bareilly","Aligarh","Moradabad"],
  "West Bengal": ["Kolkata","Howrah","Darjeeling","Jalpaiguri","Murshidabad","Nadia","Bardhaman","Bankura","Purulia","Malda"],
  "Haryana": ["Gurugram","Faridabad","Ambala","Hisar","Rohtak","Karnal","Panipat","Sonipat","Yamunanagar","Bhiwani"],
  "Odisha": ["Bhubaneswar","Cuttack","Rourkela","Berhampur","Sambalpur","Puri","Balasore","Baripada","Bhadrak","Jeypore"],
}

export default function LocationScreen({ onNext }) {
  const [state, setState] = useState("")
  const [district, setDistrict] = useState("")
  const [village, setVillage] = useState("")
  const [pincode, setPincode] = useState("")
  const [area, setArea] = useState("")
  const [unit, setUnit] = useState("Acres")
  const [error, setError] = useState("")

  const handleProceed = () => {
    if (!state || !district || !village || !pincode || !area) {
      setError("Please fill all fields to continue")
      return
    }
    setError("")
    onNext()
  }

  return (
    <div style={{minHeight:"100vh",backgroundColor:"#fff",display:"flex",flexDirection:"column"}}>
      <div style={{backgroundColor:"#2d8c3e",padding:"16px 20px",display:"flex",alignItems:"center",gap:"12px"}}>
        <span style={{color:"#fff",fontSize:"20px"}}>←</span>
        <span style={{color:"#fff",fontSize:"16px",fontWeight:"600"}}>Location Details</span>
      </div>
      <div style={{display:"flex",gap:"6px",padding:"16px 20px"}}>
        {[1,2,3,4,5].map((i)=>(<div key={i} style={{flex:1,height:"4px",borderRadius:"2px",backgroundColor:i<=2?"#2d8c3e":"#e0e0e0"}}/>))}
      </div>
      <div style={{padding:"0 20px",flex:1,overflowY:"auto"}}>
        <h2 style={{fontSize:"18px",fontWeight:"700",color:"#1a1a1a",marginBottom:"4px"}}>📍 Please provide location details</h2>
        <p style={{fontSize:"13px",color:"#888",marginBottom:"24px"}}>This helps us find more relevant content for you</p>

        <div style={{marginBottom:"16px"}}>
          <label style={{fontSize:"14px",fontWeight:"600",color:"#333",display:"block",marginBottom:"6px"}}>State *</label>
          <select value={state} onChange={(e)=>{setState(e.target.value);setDistrict("")}}
            style={{width:"100%",padding:"14px 16px",borderRadius:"12px",border:"1.5px solid #e0e0e0",fontSize:"14px",outline:"none",backgroundColor:"#fff",color:"#333",boxSizing:"border-box"}}>
            <option value="">Select State</option>
            {Object.keys(stateDistricts).sort().map(s=><option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div style={{marginBottom:"16px"}}>
          <label style={{fontSize:"14px",fontWeight:"600",color:"#333",display:"block",marginBottom:"6px"}}>District *</label>
          <select value={district} onChange={(e)=>setDistrict(e.target.value)}
            style={{width:"100%",padding:"14px 16px",borderRadius:"12px",border:"1.5px solid #e0e0e0",fontSize:"14px",outline:"none",backgroundColor:"#fff",color:"#333",boxSizing:"border-box"}}>
            <option value="">Select District</option>
            {state && stateDistricts[state].map(d=><option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        <div style={{marginBottom:"16px"}}>
          <label style={{fontSize:"14px",fontWeight:"600",color:"#333",display:"block",marginBottom:"6px"}}>Village *</label>
          <input value={village} onChange={(e)=>setVillage(e.target.value)} placeholder="Enter Village"
            style={{width:"100%",padding:"14px 16px",borderRadius:"12px",border:"1.5px solid #e0e0e0",fontSize:"14px",outline:"none",boxSizing:"border-box",backgroundColor:"#fff",color:"#333"}}/>
        </div>

        <div style={{marginBottom:"16px"}}>
          <label style={{fontSize:"14px",fontWeight:"600",color:"#333",display:"block",marginBottom:"6px"}}>Pincode *</label>
          <input value={pincode} onChange={(e)=>setPincode(e.target.value)} placeholder="Enter Pincode"
            style={{width:"100%",padding:"14px 16px",borderRadius:"12px",border:"1.5px solid #e0e0e0",fontSize:"14px",outline:"none",boxSizing:"border-box",backgroundColor:"#fff",color:"#333"}}/>
        </div>

        <div style={{marginBottom:"24px"}}>
          <label style={{fontSize:"14px",fontWeight:"600",color:"#333",display:"block",marginBottom:"6px"}}>Total Land Area *</label>
          <div style={{display:"flex",gap:"10px"}}>
            <input value={area} onChange={(e)=>setArea(e.target.value)} placeholder="Enter area"
              style={{flex:1,padding:"14px 16px",borderRadius:"12px",border:"1.5px solid #e0e0e0",fontSize:"14px",outline:"none",backgroundColor:"#fff",color:"#333"}}/>
            <select value={unit} onChange={(e)=>setUnit(e.target.value)}
              style={{padding:"14px 16px",borderRadius:"12px",border:"1.5px solid #e0e0e0",fontSize:"14px",outline:"none",backgroundColor:"#fff",color:"#333"}}>
              <option>Acres</option>
              <option>Bighas</option>
              <option>Hectares</option>
            </select>
          </div>
        </div>

        {error && <p style={{color:"#e65100",fontSize:"13px",marginBottom:"12px",textAlign:"center"}}>{error}</p>}
      </div>

      <div style={{padding:"20px"}}>
        <button onClick={handleProceed} style={{width:"100%",padding:"16px",backgroundColor:"#2d8c3e",color:"#fff",fontSize:"16px",fontWeight:"700",border:"none",borderRadius:"12px",cursor:"pointer"}}>
          Proceed →
        </button>
      </div>
    </div>
  )
}

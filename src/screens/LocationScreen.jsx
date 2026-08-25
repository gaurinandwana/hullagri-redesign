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

export default function LocationScreen({ onNext, onBack }) {
  const [state, setState] = useState("")
  const [district, setDistrict] = useState("")
  const [village, setVillage] = useState("")
  const [pincode, setPincode] = useState("")
  const [area, setArea] = useState("")
  const [unit, setUnit] = useState("Acres")
  const [formError, setFormError] = useState("")
  const [fieldErrors, setFieldErrors] = useState({
    village: "",
    pincode: "",
    area: ""
  })

  // 1. Village Name Input Handler: Only alphabets (a-z, A-Z) and spaces allowed
  const handleVillageChange = (e) => {
    const val = e.target.value
    if (/^[a-zA-Z\s]*$/.test(val)) {
      setVillage(val)
      setFieldErrors(prev => ({ ...prev, village: "" }))
    } else {
      setFieldErrors(prev => ({ ...prev, village: "Only letters and spaces are allowed (no numbers or symbols)" }))
    }
  }

  // 2. PIN Code Input Handler: Only digits (0-9) allowed, maximum 6 digits
  const handlePincodeChange = (e) => {
    const rawVal = e.target.value
    // Strip non-digit characters and truncate to 6
    const digitsOnly = rawVal.replace(/\D/g, "").slice(0, 6)
    setPincode(digitsOnly)

    if (rawVal !== digitsOnly && rawVal.length > 0) {
      setFieldErrors(prev => ({ ...prev, pincode: "Only numeric digits (0-9) are allowed" }))
    } else if (digitsOnly.length > 0 && digitsOnly.length < 6) {
      setFieldErrors(prev => ({ ...prev, pincode: "PIN code must be exactly 6 digits" }))
    } else {
      setFieldErrors(prev => ({ ...prev, pincode: "" }))
    }
  }

  // 3. Total Land Area Input Handler: Numeric numbers only (digits and single decimal point)
  const handleAreaChange = (e) => {
    const val = e.target.value
    if (/^\d*\.?\d*$/.test(val)) {
      setArea(val)
      setFieldErrors(prev => ({ ...prev, area: "" }))
    } else {
      setFieldErrors(prev => ({ ...prev, area: "Only numeric digits and a single decimal point are allowed" }))
    }
  }

  const handleProceed = () => {
    setFormError("")
    
    // Check missing fields
    if (!state || !district || !village.trim() || !pincode || !area) {
      setFormError("Please fill all required fields before proceeding.")
      return
    }

    // Validate PIN code length
    if (pincode.length !== 6) {
      setFieldErrors(prev => ({ ...prev, pincode: "PIN code must be exactly 6 numeric digits" }))
      setFormError("Please enter a valid 6-digit PIN code.")
      return
    }

    // Validate Village Name
    if (!/^[a-zA-Z\s]+$/.test(village.trim())) {
      setFieldErrors(prev => ({ ...prev, village: "Village name must contain only alphabets and spaces" }))
      setFormError("Invalid village name entered.")
      return
    }

    // Validate Land Area
    const parsedArea = parseFloat(area)
    if (isNaN(parsedArea) || parsedArea <= 0) {
      setFieldErrors(prev => ({ ...prev, area: "Land area must be a valid positive number" }))
      setFormError("Please enter a valid positive numeric land area.")
      return
    }

    if (fieldErrors.village || fieldErrors.pincode || fieldErrors.area) {
      setFormError("Please fix the validation errors in the form before proceeding.")
      return
    }

    onNext({
      state,
      district,
      village: village.trim(),
      pincode,
      total_land_area: parsedArea,
      land_unit: unit || "Acres"
    })
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", display: "flex", flexDirection: "column", overflowY: "auto" }}>
      {/* Compact Top Green Header */}
      <div style={{ backgroundColor: "#2d8c3e", padding: "10px 24px", height: "50px", display: "flex", alignItems: "center", gap: "12px", flexShrink: 0, boxSizing: "border-box", boxShadow: "0 2px 4px rgba(0,0,0,0.08)" }}>
        {onBack && <span onClick={onBack} style={{ color: "#fff", fontSize: "18px", cursor: "pointer", marginRight: "4px" }}>←</span>}
        <div style={{ width: "32px", height: "32px", backgroundColor: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>📍</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
          <h1 style={{ color: "#fff", fontSize: "16px", fontWeight: "700", margin: 0 }}>Location & Land Details</h1>
          <span style={{ color: "#c8e6c9", fontSize: "12px" }}>• Step 2 of 5</span>
        </div>
      </div>

      {/* Centered Workspace */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
        {/* Card Container */}
        <div style={{
          maxWidth: "750px",
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
          padding: "28px 32px",
          display: "flex",
          flexDirection: "column",
          gap: "18px"
        }}>
          {/* Stepper Progress Bar */}
          <div style={{ display: "flex", gap: "6px" }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} style={{ flex: 1, height: "4px", borderRadius: "2px", backgroundColor: i <= 2 ? "#2d8c3e" : "#e2e8f0" }} />
            ))}
          </div>

          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#0f172a", margin: "0 0 4px" }}>Provide Your Location & Land Info</h2>
            <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>Strict validation ensures accurate district & land based scheme matching</p>
          </div>

          {/* State & District Selectors */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={{ fontSize: "13px", fontWeight: "600", color: "#334155", display: "block", marginBottom: "4px" }}>State *</label>
              <select
                value={state}
                onChange={(e) => { setState(e.target.value); setDistrict("") }}
                style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1.5px solid #cbd5e1", fontSize: "14px", outline: "none", backgroundColor: "#fff", color: "#0f172a", boxSizing: "border-box" }}
              >
                <option value="">Select State</option>
                {Object.keys(stateDistricts).sort().map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label style={{ fontSize: "13px", fontWeight: "600", color: "#334155", display: "block", marginBottom: "4px" }}>District *</label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1.5px solid #cbd5e1", fontSize: "14px", outline: "none", backgroundColor: "#fff", color: "#0f172a", boxSizing: "border-box" }}
              >
                <option value="">Select District</option>
                {state && stateDistricts[state] && stateDistricts[state].map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
          </div>

          {/* Village & Pincode Inputs */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {/* Village Name Input */}
            <div>
              <label style={{ fontSize: "13px", fontWeight: "600", color: "#334155", display: "block", marginBottom: "4px" }}>
                Village Name * <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "normal" }}>(Letters & spaces only)</span>
              </label>
              <input
                type="text"
                value={village}
                onChange={handleVillageChange}
                placeholder="e.g. Kotli"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  border: `1.5px solid ${fieldErrors.village ? "#dc2626" : "#cbd5e1"}`,
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  backgroundColor: "#fff",
                  color: "#0f172a"
                }}
              />
              {fieldErrors.village && (
                <p style={{ color: "#dc2626", fontSize: "11px", margin: "4px 0 0", fontWeight: "500" }}>
                  ⚠️ {fieldErrors.village}
                </p>
              )}
            </div>

            {/* PIN Code Input */}
            <div>
              <label style={{ fontSize: "13px", fontWeight: "600", color: "#334155", display: "block", marginBottom: "4px" }}>
                Pincode * <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "normal" }}>(Exactly 6 digits)</span>
              </label>
              <input
                type="text"
                maxLength={6}
                value={pincode}
                onChange={handlePincodeChange}
                placeholder="e.g. 141001"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  border: `1.5px solid ${fieldErrors.pincode ? "#dc2626" : "#cbd5e1"}`,
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  backgroundColor: "#fff",
                  color: "#0f172a"
                }}
              />
              {fieldErrors.pincode ? (
                <p style={{ color: "#dc2626", fontSize: "11px", margin: "4px 0 0", fontWeight: "500" }}>
                  ⚠️ {fieldErrors.pincode}
                </p>
              ) : (
                <p style={{ color: "#64748b", fontSize: "11px", margin: "4px 0 0" }}>
                  {pincode.length}/6 digits entered
                </p>
              )}
            </div>
          </div>

          {/* Total Land Area Input */}
          <div>
            <label style={{ fontSize: "13px", fontWeight: "600", color: "#334155", display: "block", marginBottom: "4px" }}>
              Total Land Area * <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "normal" }}>(Numbers / decimals only, e.g. 2.5)</span>
            </label>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                value={area}
                onChange={handleAreaChange}
                placeholder="e.g. 2.5"
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  borderRadius: "10px",
                  border: `1.5px solid ${fieldErrors.area ? "#dc2626" : "#cbd5e1"}`,
                  fontSize: "14px",
                  outline: "none",
                  backgroundColor: "#fff",
                  color: "#0f172a"
                }}
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                style={{ padding: "10px 14px", borderRadius: "10px", border: "1.5px solid #cbd5e1", fontSize: "14px", outline: "none", backgroundColor: "#fff", color: "#0f172a" }}
              >
                <option value="Acres">Acres</option>
                <option value="Bighas">Bighas</option>
                <option value="Hectares">Hectares</option>
              </select>
            </div>
            {fieldErrors.area && (
              <p style={{ color: "#dc2626", fontSize: "11px", margin: "4px 0 0", fontWeight: "500" }}>
                ⚠️ {fieldErrors.area}
              </p>
            )}
          </div>

          {/* Overall Form Error Message */}
          {formError && (
            <div style={{ backgroundColor: "#fef2f2", border: "1px solid #fca5a5", padding: "10px 14px", borderRadius: "10px" }}>
              <p style={{ color: "#dc2626", fontSize: "12.5px", margin: 0, fontWeight: "600", textAlign: "center" }}>
                ⚠️ {formError}
              </p>
            </div>
          )}

          {/* Proceed Button */}
          <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "14px" }}>
            <button
              onClick={handleProceed}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#2d8c3e",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "background-color 0.2s ease"
              }}
            >
              Proceed →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

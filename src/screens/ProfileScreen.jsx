import { useState } from "react"

export default function ProfileScreen({ onBack }) {
  const [editing, setEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    district: "",
    village: "",
    pincode: "",
    landArea: "",
    landUnit: "Acres"
  })

  const [fieldErrors, setFieldErrors] = useState({
    village: "",
    pincode: "",
    landArea: ""
  })

  const update = (field, value) => {
    // 1. Village validation: Alphabets and spaces only
    if (field === "village") {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setProfile(prev => ({ ...prev, [field]: value }))
        setFieldErrors(prev => ({ ...prev, village: "" }))
      } else {
        setFieldErrors(prev => ({ ...prev, village: "Letters and spaces only" }))
      }
      return
    }

    // 2. Pincode validation: Digits only, max 6
    if (field === "pincode") {
      const sanitized = value.replace(/\D/g, "").slice(0, 6)
      setProfile(prev => ({ ...prev, pincode: sanitized }))
      if (value !== sanitized && value.length > 0) {
        setFieldErrors(prev => ({ ...prev, pincode: "Digits (0-9) only" }))
      } else if (sanitized.length > 0 && sanitized.length < 6) {
        setFieldErrors(prev => ({ ...prev, pincode: "Exactly 6 digits required" }))
      } else {
        setFieldErrors(prev => ({ ...prev, pincode: "" }))
      }
      return
    }

    // 3. Land Area validation: Digits and single decimal point
    if (field === "landArea") {
      if (/^\d*\.?\d*$/.test(value)) {
        setProfile(prev => ({ ...prev, landArea: value }))
        setFieldErrors(prev => ({ ...prev, landArea: "" }))
      } else {
        setFieldErrors(prev => ({ ...prev, landArea: "Numbers and decimal point only" }))
      }
      return
    }

    setProfile(prev => ({ ...prev, [field]: value }))
  }

  const inputStyle = (hasError) => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    border: hasError ? "1.5px solid #dc2626" : "1.5px solid #e0e0e0",
    fontSize: "14px",
    outline: "none",
    backgroundColor: editing ? "#fff" : "#f5f5f5",
    color: "#333",
    boxSizing: "border-box"
  })

  const fields = [
    { label: "Full Name", key: "name", placeholder: "Enter your full name", icon: "👤" },
    { label: "Phone Number", key: "phone", placeholder: "Enter phone number", icon: "📱" },
    { label: "Email (Optional)", key: "email", placeholder: "Enter email address", icon: "📧" },
    { label: "State", key: "state", placeholder: "Enter state", icon: "📍" },
    { label: "District", key: "district", placeholder: "Enter district", icon: "🏘️" },
    { label: "Village", key: "village", placeholder: "Enter village (Letters & spaces)", icon: "🌾" },
    { label: "Pincode", key: "pincode", placeholder: "Enter 6-digit pincode", icon: "📮" },
    { label: "Land Area", key: "landArea", placeholder: "Enter land area (Numeric)", icon: "🗺️" },
  ]

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#2d8c3e", padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
        <span onClick={onBack} style={{ color: "#fff", fontSize: "20px", cursor: "pointer" }}>←</span>
        <span style={{ color: "#fff", fontSize: "16px", fontWeight: "600" }}>My Profile</span>
        <button onClick={() => setEditing(!editing)}
          style={{ marginLeft: "auto", backgroundColor: "rgba(255,255,255,0.2)", color: "#fff", border: "none", padding: "6px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
          {editing ? "Cancel" : "Edit ✏️"}
        </button>
      </div>

      {/* Profile Avatar */}
      <div style={{ backgroundColor: "#2d8c3e", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "40px" }}>
        <div style={{ width: "90px", height: "90px", backgroundColor: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px", marginBottom: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
          👨‍🌾
        </div>
        <h2 style={{ color: "#fff", fontSize: "20px", fontWeight: "700", margin: 0 }}>
          {profile.name || "Your Name"}
        </h2>
        <p style={{ color: "#c8e6c9", fontSize: "13px", margin: "4px 0 0" }}>
          {profile.village && profile.state ? `${profile.village} • ${profile.state}` : "Farmer"}
        </p>
      </div>

      {/* Form Card */}
      <div style={{ margin: "-20px 16px 16px", backgroundColor: "#fff", borderRadius: "16px", padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#1a1a1a", marginBottom: "16px" }}>
          {editing ? "Edit Your Details" : "Personal Details"}
        </h3>

        {fields.map((field) => (
          <div key={field.key} style={{ marginBottom: "14px" }}>
            <label style={{ fontSize: "13px", fontWeight: "600", color: "#555", display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
              <span>{field.icon}</span> {field.label}
            </label>
            <input
              value={profile[field.key]}
              onChange={(e) => update(field.key, e.target.value)}
              placeholder={field.placeholder}
              disabled={!editing}
              style={inputStyle(Boolean(fieldErrors[field.key]))}
            />
            {fieldErrors[field.key] && (
              <p style={{ color: "#dc2626", fontSize: "11px", margin: "4px 0 0", fontWeight: "500" }}>
                ⚠️ {fieldErrors[field.key]}
              </p>
            )}
          </div>
        ))}

        {/* Land Unit */}
        {editing && (
          <div style={{ marginBottom: "14px" }}>
            <label style={{ fontSize: "13px", fontWeight: "600", color: "#555", display: "block", marginBottom: "6px" }}>Land Unit</label>
            <select value={profile.landUnit} onChange={(e) => update("landUnit", e.target.value)}
              style={{ ...inputStyle(false), backgroundColor: "#fff" }}>
              <option>Acres</option>
              <option>Bighas</option>
              <option>Hectares</option>
            </select>
          </div>
        )}

        {editing && (
          <button onClick={() => setEditing(false)}
            style={{ width: "100%", padding: "14px", backgroundColor: "#2d8c3e", color: "#fff", fontSize: "15px", fontWeight: "700", border: "none", borderRadius: "12px", cursor: "pointer", marginTop: "8px" }}>
            Save Profile ✓
          </button>
        )}
      </div>

      {/* Logout */}
      <div style={{ padding: "0 16px 24px" }}>
        <button style={{ width: "100%", padding: "14px", backgroundColor: "#fff", color: "#e53935", fontSize: "15px", fontWeight: "700", border: "1.5px solid #e53935", borderRadius: "12px", cursor: "pointer" }}>
          Logout
        </button>
      </div>

      {/* Bottom Nav */}
      <div style={{ backgroundColor: "#fff", borderTop: "1px solid #f0f0f0", padding: "12px 0", display: "flex", justifyContent: "space-around", marginTop: "auto" }}>
        {[{ icon: "🏠", label: "Home" }, { icon: "📋", label: "Schemes" }, { icon: "🔔", label: "Alerts" }, { icon: "👤", label: "Profile" }].map((item) => (
          <div key={item.label} onClick={item.label === "Home" ? onBack : null}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", cursor: "pointer" }}>
            <span style={{ fontSize: "22px" }}>{item.icon}</span>
            <span style={{ fontSize: "11px", color: item.label === "Profile" ? "#2d8c3e" : "#888", fontWeight: item.label === "Profile" ? "700" : "400" }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

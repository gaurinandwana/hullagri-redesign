import { MOCK_SCHEMES } from '../data/mockSchemes';

let resolvedBaseUrl = null;

export async function getApiUrl() {
  if (resolvedBaseUrl) return resolvedBaseUrl;
  
  if (typeof window !== "undefined" && window.electronAPI && window.electronAPI.getApiBaseUrl) {
    try {
      resolvedBaseUrl = await window.electronAPI.getApiBaseUrl();
    } catch (e) {
      console.error("Failed to fetch API URL from Electron, falling back:", e);
      resolvedBaseUrl = "http://127.0.0.1:8000";
    }
  } else {
    resolvedBaseUrl = "http://127.0.0.1:8000";
  }
  return resolvedBaseUrl;
}

export async function submitFarmerOnboarding(formData) {
  try {
    const baseUrl = await getApiUrl();
    const response = await fetch(`${baseUrl}/api/farmer/onboarding`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) throw new Error("Failed to save profile");
    return await response.json();
  } catch (e) {
    console.warn("Onboarding backend API unreachable, using local fallback response:", e);
    return { status: "success", farmer_id: formData.farmer_id || "farmer_local_1" };
  }
}

// Function for fetching eligible schemes with automatic fallback:
export async function getEligibleSchemes(farmerId) {
  try {
    const baseUrl = await getApiUrl();
    const response = await fetch(`${baseUrl}/api/schemes/eligible/${farmerId}`);
    if (!response.ok) throw new Error("Failed to fetch schemes");
    const data = await response.json();
    if (data.eligible_schemes && Array.isArray(data.eligible_schemes) && data.eligible_schemes.length > 0) {
      return data;
    }
    return { eligible_schemes: MOCK_SCHEMES };
  } catch (e) {
    console.warn("getEligibleSchemes API error, utilizing local scheme dataset fallback:", e);
    return { eligible_schemes: MOCK_SCHEMES };
  }
}
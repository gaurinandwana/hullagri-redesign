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
  const baseUrl = await getApiUrl();
  const response = await fetch(`${baseUrl}/api/farmer/onboarding`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!response.ok) throw new Error("Failed to save profile");
  return response.json();
}

// Add this new function for fetching eligible schemes:
export async function getEligibleSchemes(farmerId) {
  const baseUrl = await getApiUrl();
  const response = await fetch(`${baseUrl}/api/schemes/eligible/${farmerId}`);
  if (!response.ok) throw new Error("Failed to fetch schemes");
  return response.json();
}
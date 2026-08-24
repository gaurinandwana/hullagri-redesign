const API_BASE_URL = "http://127.0.0.1:8000";

export async function submitFarmerOnboarding(formData) {
  const response = await fetch(`${API_BASE_URL}/api/farmer/onboarding`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!response.ok) throw new Error("Failed to save profile");
  return response.json();
}

// Add this new function for fetching eligible schemes:
export async function getEligibleSchemes(farmerId) {
  const response = await fetch(`${API_BASE_URL}/api/schemes/eligible/${farmerId}`);
  if (!response.ok) throw new Error("Failed to fetch schemes");
  return response.json();
}
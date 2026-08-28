import { useState } from "react"
import SplashScreen from "./screens/SplashScreen"
import LanguageScreen from "./screens/LanguageScreen"
import LocationScreen from "./screens/LocationScreen"
import FarmerProfileScreen from "./screens/FarmerProfileScreen"
import LivestockScreen from "./screens/LivestockScreen"
import CropSelectionScreen from "./screens/CropSelectionScreen"
import HomeScreen from "./screens/HomeScreen"
import SchemeDashboard from "./screens/SchemeDashboard"
import NotificationsScreen from "./screens/NotificationsScreen"
import AIChatScreen from "./screens/AIChatScreen"

export default function App() {
  // Start on 0 (SplashScreen / HullAgri welcome screen)
  const [currentScreen, setCurrentScreen] = useState(0)
  const [farmerId, setFarmerId] = useState("farmer_default")
  const [onboardingProfile, setOnboardingProfile] = useState({
    language_preference: "English",
    location: {
      state: "Punjab",
      district: "Ludhiana",
      village: "Kotli",
      pincode: "141001",
      total_land_area: 2.5,
      land_unit: "Acres"
    },
    fpo_member: "No",
    intent_to_buy_tractor: "No",
    intent_to_buy_harvester: "No",
    caste_category: "General",
    is_disabled_or_bpl: "No",
    livestock: {},
    crops_last_year: [],
    crops_this_year: []
  })

  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      overflowX: "hidden",
      overflowY: "auto",
      backgroundColor: "#f8fafc",
      fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      display: "flex",
      flexDirection: "column"
    }}>
      {currentScreen === 0 && <SplashScreen onNext={() => setCurrentScreen(3)} />}
      
      {currentScreen === 1 && (
        <LanguageScreen 
          onNext={(lang) => {
            if (lang) setOnboardingProfile(prev => ({ ...prev, language_preference: lang }));
            setCurrentScreen(3);
          }} 
        />
      )}
      
      {currentScreen === 2 && (
        <LocationScreen 
          onNext={(locData) => {
            if (locData) setOnboardingProfile(prev => ({ ...prev, location: locData }));
            setCurrentScreen(3);
          }} 
          onBack={() => setCurrentScreen(3)}
        />
      )}
      
      {currentScreen === 3 && (
        <FarmerProfileScreen 
          onNext={(profData) => {
            if (profData) setOnboardingProfile(prev => ({ ...prev, ...profData }));
            setCurrentScreen(7);
          }} 
        />
      )}
      
      {currentScreen === 4 && (
        <LivestockScreen 
          onNext={(liveData) => {
            if (liveData) setOnboardingProfile(prev => ({ ...prev, livestock: liveData }));
            setCurrentScreen(7);
          }} 
          onBack={() => setCurrentScreen(3)}
        />
      )}
      
      {currentScreen === 5 && (
        <CropSelectionScreen 
          fullProfile={onboardingProfile}
          onNext={(generatedId) => {
            if (generatedId) setFarmerId(generatedId);
            setCurrentScreen(7);
          }} 
          onBack={() => setCurrentScreen(3)}
        />
      )}

      {currentScreen === 6 && (
        <HomeScreen 
          onNext={() => setCurrentScreen(7)} 
          onDashboard={() => setCurrentScreen(7)}
          onNotifications={() => setCurrentScreen(8)}
          onAIChat={() => setCurrentScreen(9)}
        />
      )}
      
      {currentScreen === 7 && (
        <SchemeDashboard 
          farmerId={farmerId} 
          initialProfile={onboardingProfile}
          onBack={() => setCurrentScreen(3)} 
          onAIChat={() => setCurrentScreen(9)} 
        />
      )}
      {currentScreen === 8 && <NotificationsScreen onBack={() => setCurrentScreen(7)} />}
      {currentScreen === 9 && <AIChatScreen farmerId={farmerId} onBack={() => setCurrentScreen(7)} />}
    </div>
  )
}
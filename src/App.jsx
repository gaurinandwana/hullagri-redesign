import { useState } from "react"
import SplashScreen from "./screens/SplashScreen"
import LanguageScreen from "./screens/LanguageScreen"
import LocationScreen from "./screens/LocationScreen"
import FarmerProfileScreen from "./screens/FarmerProfileScreen"
import LivestockScreen from "./screens/LivestockScreen"
import CropSelectionScreen from "./screens/CropSelectionScreen"
import HomeScreen from "./screens/HomeScreen"
import SchemeDetailScreen from "./screens/SchemeDetailScreen"
import NotificationsScreen from "./screens/NotificationsScreen"

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0)
  // 1. Add state to hold the registered farmer's ID
  const [farmerId, setFarmerId] = useState("farmer_default")

  return (
    <div style={{maxWidth:"390px",margin:"0 auto",minHeight:"100vh",fontFamily:"'Segoe UI', sans-serif"}}>
      {currentScreen === 0 && <SplashScreen onNext={() => setCurrentScreen(1)} />}
      {currentScreen === 1 && <LanguageScreen onNext={() => setCurrentScreen(2)} />}
      {currentScreen === 2 && <LocationScreen onNext={() => setCurrentScreen(3)} />}
      {currentScreen === 3 && <FarmerProfileScreen onNext={() => setCurrentScreen(4)} />}
      {currentScreen === 4 && <LivestockScreen onNext={() => setCurrentScreen(5)} />}
      
      {/* 5. When finishing CropSelection (the final onboarding step), capture the generated/saved farmer_id */}
      {currentScreen === 5 && (
        <CropSelectionScreen 
          onNext={(generatedId) => {
            if (generatedId) setFarmerId(generatedId);
            setCurrentScreen(6);
          }} 
        />
      )}

      {currentScreen === 6 && <HomeScreen onNext={() => setCurrentScreen(7)} onNotifications={() => setCurrentScreen(8)} />}
      
      {/* 7. Pass the stored farmerId prop directly into your SchemeDetailScreen */}
      {currentScreen === 7 && <SchemeDetailScreen farmerId={farmerId} onBack={() => setCurrentScreen(6)} />}
      
      {currentScreen === 8 && <NotificationsScreen onBack={() => setCurrentScreen(6)} />}
    </div>
  )
}
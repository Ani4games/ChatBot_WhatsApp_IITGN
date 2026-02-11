// import LoginScreen from "../../MobileApp_UI";
import { WhatsAppChat } from "./components/whatsapp-chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../../protectRoute";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<LoginScreen />} /> */}
         <Route
          path="/whatsapp"
          element={
            <ProtectedRoute>
              <WhatsAppChat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}


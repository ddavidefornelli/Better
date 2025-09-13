import Contatti from "./Contatti";
import LandingPage from "./LandingPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <div className="flex justify-center">
        <div className="max-w-4xl w-full">
    <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/contatti" element={<Contatti />}></Route>
    </Routes>
        </div>
      </div>
  )
}

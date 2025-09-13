import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <div className="flex justify-center">
        <div className="max-w-4xl w-full">
    <Routes>
          <Route path="/" element={<LandingPage />}></Route>
    </Routes>
        </div>
      </div>
  )
}

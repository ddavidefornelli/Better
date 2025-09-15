import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Better from "./pages/Better";

export default function App() {
  return (
      <div className="flex justify-center">
        <div className="max-w-4xl w-full">
    <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Better" element={<Better/>}></Route>
    </Routes>
        </div>
      </div>
  )
}

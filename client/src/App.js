import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<div>Default</div>} />
        </Routes>
    </div>
  );
}

export default App;

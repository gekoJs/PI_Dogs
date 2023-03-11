import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import Home from "./pages/home/Home";
import DetailsPage from "./pages/detailsPage/DetailsPage";

import Error from "./components/error/Error";

import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import PostDog from "./pages/postDog/PostDog";

function App() {
  const manageError = useSelector((state) => state.error);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dogs" element={<Home />} />
        <Route path="/dogs/:idRaza" element={<DetailsPage />} />
        <Route path="/error" element={<Error manageError={manageError} />} />
        <Route path="/create" element={<PostDog/>} />
        <Route path="*" element={<div>Default</div>} />
      </Routes>
    </div>
  );
}

export default App;

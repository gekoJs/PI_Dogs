import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import Home from "./pages/home/Home";
import DetailsPage from "./pages/detailsPage/DetailsPage";

import Error from "./components/error/Error";

import { Routes, Route } from "react-router-dom";
import PostDog from "./pages/postDog/PostDog";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dogs" element={<Home />} />
        <Route path="/dogs/:idRaza" element={<DetailsPage />} />
        <Route path="/create" element={<PostDog/>} />
        <Route path="/*" element={<Error manageError="The page you're looking for doesn't exist" />} />
      </Routes>
    </div>
  );
}

export default App;

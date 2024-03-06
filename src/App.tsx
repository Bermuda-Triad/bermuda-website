import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import LandingPage from "./pages/LandingPage";
import LandingPage2 from "./pages/LandingPage2";
import DnfCase from "./pages/Cases/DnfCase";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage2 />} />
          <Route path="/dnf-website" element={<DnfCase />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;

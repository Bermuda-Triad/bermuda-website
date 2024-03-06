import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage2 from "./pages/LandingPage2";
import DnfCase from "./pages/Cases/DnfCase";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage2 />} />
          <Route path="/dnf-website" element={<DnfCase />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;

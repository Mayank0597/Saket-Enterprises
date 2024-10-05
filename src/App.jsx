import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BrochureCard from "./components/BrochureCard";
import Footer from "./components/Footer";
import "./assets/css/fonts.css";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";
import TermsAndCondition from "./pages/TermsAndCondition";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndCondition />} />
      </Routes>
      {/* <BrochureCard /> */}
      <Footer />
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BrochureCard from "./components/BrochureCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <BrochureCard />
      <Footer />
    </>
  );
}

export default App;
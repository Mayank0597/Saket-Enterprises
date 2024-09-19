import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import InspirationSection from "../components/InspirationSection";
import SpecialFeatures from "../components/SpecialFeatures";
import WhyChooseUs from "../components/WhyChooseUs";
import OurPartners from "../components/OurPartners";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <InspirationSection />
      <WhyChooseUs />
      <SpecialFeatures />
      <OurPartners />
    </>
  );
};

export default HomePage;
import React from "react";
import ServicesPageComp1 from "../components/ServicesPageComp1";
import ServicePage from "../components/ServicePage";
import BrochureCard from "../components/BrochureCard";
import ServicePageMobile from "../components/ServicePageMobile";

const Services = () => {
  return (
    <>
      <ServicesPageComp1 />
      <div className="hidden md:block">
        <ServicePage />
      </div>
      <div className="md:hidden">
        <ServicePageMobile />
      </div>
      <BrochureCard />
    </>
  );
};

export default Services;

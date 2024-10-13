import React from "react";
import ContactUsPageComp1 from "../components/ContactUsPageComp1";
import LocationComponent from "../components/LocationComponent";
import ContactForm from "../components/ContactForm";
import LocationComponent1 from "../components/LocationComponent1";
import BrochureCard from "../components/BrochureCard";

const Contact = () => {
  return (
    <>
      <ContactUsPageComp1 />
      <ContactForm />
      <div className="flex flex-col lg:flex-row justify-between items-center md:mt-10 md:mb-10 md:px-8 md:space-x-6">
        <LocationComponent />
        <LocationComponent1 />
      </div>
      <BrochureCard />
    </>
  );
};

export default Contact;

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
      <LocationComponent />
      <LocationComponent1 />
      <BrochureCard />
    </>
  );
};

export default Contact;

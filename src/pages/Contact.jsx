import React from "react";
import ContactUsPageComp1 from "../components/ContactUsPageComp1";
import LocationComponent from "../components/LocationComponent";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <ContactUsPageComp1 />
      <ContactForm />
      <LocationComponent />
    </>
  );
};

export default Contact;

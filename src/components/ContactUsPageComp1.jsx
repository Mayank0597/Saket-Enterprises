import React from "react";
import image from "/src/assets/Optimize Image/Frame749-ezgif.com-png-to-webp-converter.webp";
import mobileImage from "/src/assets/Optimize Image/Frame7410-ezgif.com-png-to-webp-converter.webp";

const ContactUsPageComp1 = () => {
  return (
    <div className="relative w-full md:h-auto">
      {/* Full-width image */}
      <img
        src={window.innerWidth < 768 ? mobileImage : image}
        alt="Background"
        className="w-full h-auto"
      />

      {/* Centered heading */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[33px] lg:text-[56px] font-semibold text-[#FFF]">
          Contact Us
        </h1>
      </div>
    </div>
  );
};

export default ContactUsPageComp1;

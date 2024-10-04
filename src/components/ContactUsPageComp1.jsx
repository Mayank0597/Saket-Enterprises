import React from "react";
import image from "/src/assets/Optimize Image/Frame741-ezgif.com-optiwebp.webp"

const ContactUsPageComp1 = () => {
  return (
    <div className="relative w-full h-[445px]">
      {/* Full-width image */}
      <img
        src={image}
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Centered heading */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl lg:text-6xl font-semibold text-white">
          Contact Us
        </h1>
      </div>
    </div>
  );
};

export default ContactUsPageComp1;

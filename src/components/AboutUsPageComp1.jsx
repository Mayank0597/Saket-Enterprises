import React from "react";
import image from "/src/assets/Optimize Image/Frame744-ezgif.com-optiwebp.webp";
import mobileimage from "/src/assets/Optimize Image/Frame748-ezgif.com-png-to-webp-converter.webp";

const AboutUsPageComp1 = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Full-width image */}
      <img
        src={window.innerWidth < 768 ? mobileimage : image}
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Centered heading */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[33px] lg:text-6xl font-semibold text-white">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default AboutUsPageComp1;

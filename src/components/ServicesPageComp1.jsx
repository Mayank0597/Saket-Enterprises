import React from "react";
import image from "/src/assets/Optimize Image/Frame746-ezgif.com-optiwebp.webp";
import mobileimage from "/src/assets/Optimize Image/Frame747-ezgif.com-png-to-webp-converter.webp";

const ServicesPageComp1 = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Full-width image */}
      <img
        src={window.innerWidth < 768 ? mobileimage : image}
        alt="Background"
        className="w-full h-full object-cover pt-[69px] pb-[69px] lg:pt-[69px] lg:pb-0"
      />

      {/* Centered heading */}
      <div className="absolute inset-0 flex items-center justify-center lg:mt-12">
        <h1 className="text-[33px] lg:text-[56px] font-semibold text-white">
          Services
        </h1>
      </div>
    </div>
  );
};

export default ServicesPageComp1;

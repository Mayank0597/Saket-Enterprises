import React, { useEffect } from "react";
import sampleImage from "/src/assets/Optimize Image/Frame1859-ezgif.com-optiwebp.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const InspirationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch">
      {/* Grey Background Section */}
      <div
        className="bg-[#E9E9E9] flex flex-col justify-center md:px-16 py-6 md:w-[800px] h-[370px] w-full md:py-0"
        data-aos="fade-right"
      >
        <h2 className="text-[#393939] text-3xl md:text-[46px] font-semibold leading-[50px] mb-4">
          Inspiration from the Artifacts we love
        </h2>
        <p className="text-lg md:text-2xl open-sans text-[#808080] mb-9 font-medium">
          Visit our Website!
        </p>
        <button className="bg-[#E2761B] text-white px-6 py-3 btn-animation rounded transition duration-300 w-[154px]">
          View Website
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[720px] h-[370px]" data-aos="fade-left">
        <img
          src={sampleImage}
          alt="Inspiration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default InspirationSection;

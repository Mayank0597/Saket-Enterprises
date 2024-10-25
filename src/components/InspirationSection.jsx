import React, { useEffect } from "react";
import sampleImage from "/src/assets/Optimize Image/Frame1859-ezgif.com-optiwebp.webp";
import mobileImage from "/src/assets/Optimize Image/Frame18591-ezgif.com-png-to-webp-converter.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const InspirationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch">
      {/* Grey Background Section */}
      <div
        className="bg-[#E9E9E9] flex flex-col justify-center md:px-16 px-[30.5px] py-6 md:w-[800px] h-[370px] w-full md:py-0"
        data-aos="fade-right"
      >
        <h2 className="text-[#393939] text-[33px] md:text-[46px] font-semibold leading-[50px] mb-4">
          Inspiration from the Artefacts we love
        </h2>
        <p className="text-[19px] md:text-2xl open-sans text-[#808080] mb-9 font-medium">
          Visit our Website!
        </p>
        <Link to="https://houseofbastar.com/" target="blank">
          <button className="bg-[#E2761B] text-white px-6 py-3 btn-animation rounded transition duration-300 w-[154px] font-semibold lg:font-normal">
            View Website
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[720px] md:h-[370px] h-[240px]">
        <img
          src={window.innerWidth < 768 ? mobileImage : sampleImage}
          alt="Inspiration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default InspirationSection;

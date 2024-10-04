import React, { useEffect } from "react";
import bgImage from "/src/assets/Optimize Image/Frame6-ezgif.com-optiwebp.webp";
import rightImage from "/src/assets/Optimize Image/Group3-ezgif.com-optiwebp.webp";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
  };
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full container mx-auto px-4 md:px-32">
        {/* Left side: Text section */}
        <div
          className="text-white md:w-1/2 space-y-4 p-6 md:p-0 z-20"
          data-aos="fade-up-right"
        >
          <h1 className="text-4xl md:text-[37px] font-bold">
            Furnishing Your Lifestyle
          </h1>
          <p className="text-base md:text-base open-sans font-medium max-w-[450px] text-[#EBF0FF]">
            From elegant hardwood to artistic artefacts, discover furniture that
            reflects craftmanship and timeless design.
          </p>
          <button
            className="bg-[#E2761B] text-white px-6 py-3 rounded mt-4 btn-animation"
            onClick={handleContactClick}
          >
            Contact Us
          </button>
        </div>

        {/* Right side: Foreground Image */}
        <div className="md:w-1/2 flex justify-end mt-6 md:mt-0 relative z-30">
          <img
            data-aos="fade-up-left"
            src={rightImage}
            alt="Decorative Furniture"
            className="w-80 h-auto md:w-96 md:h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

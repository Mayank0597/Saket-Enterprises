import React, { useEffect } from "react";
import bgImage from "/src/assets/Optimize Image/Frame61-ezgif.com-optiwebp.webp";
import mobileBgImage from "/src/assets/Optimize Image/Frame1919-ezgif.com-png-to-webp-converter.webp"
import rightImage from "/src/assets/Optimize Image/Group31-ezgif.com-optiwebp.webp";
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
    <section className="relative w-full h-full py-20">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover z-0 bg-no-repeat`}
        style={{
          backgroundImage: `url(${mobileBgImage})`,
        }}
      ></div>
      <div
        className="hidden md:block absolute inset-0 bg-cover z-0 bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full container mx-auto px-4 lg:px-32">
        {/* Left side: Text section */}
        <div
          className="text-white lg:w-1/2 space-y-4 px-9 lg:px-0 py-[108px] lg:py-0 z-20"
          data-aos="fade-up-right"
        >
          <h1 className="text-4xl lg:text-[37px] font-bold">
            Furnishing Your Lifestyle
          </h1>
          <p className="text-base lg:text-base open-sans font-medium max-w-[450px] text-[#EBF0FF]">
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
        <div className="lg:w-1/2 justify-end mt-6 lg:mt-0 relative z-30 hidden lg:block">
          <img
            data-aos="fade-up-left"
            src={rightImage}
            alt="Decorative Furniture"
            className="w-80 h-auto lg:w-[461px] lg:h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import bgImage from "/src/assets/Frame 6.png";
import rightImage from "/src/assets/Group 3.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
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
        <div className="text-white md:w-1/2 space-y-4 p-6 md:p-0 z-20">
          <h1 className="text-4xl md:text-4xl font-bold">
            Furnishing Your Lifestyle
          </h1>
          <p className="text-base md:text-base open-sans font-medium max-w-[450px]">
            From elegant hardwood to artistic artefacts, discover furniture that reflects craftmanship and timeless design.
          </p>
          <button className="bg-[#E2761B] text-white px-6 py-3 rounded mt-4 btn-animation" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>

        {/* Right side: Foreground Image */}
        <div className="md:w-1/2 flex justify-end mt-6 md:mt-0 relative z-30">
          <img
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

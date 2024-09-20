import React from "react";
import sampleImage from "/src/assets/Frame 1859.png"; // Replace with your actual image path

const InspirationSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch">
      {/* Grey Background Section */}
      <div className="bg-[#E9E9E9] flex flex-col justify-center md:px-32 py-6 md:w-[800px] h-[370px] w-full md:py-0">
        <h2 className="text-[#393939] text-3xl md:text-4xl font-bold mb-4">
          Inspiration from the Artifacts we love
        </h2>
        <p className="text-lg md:text-2xl open-sans text-[#808080] mb-8">Visit our Website!</p>
        <button className="bg-[#E2761B] text-white px-6 py-3 btn-animation rounded transition duration-300 w-[154px]">
          View Website
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[720px] h-[370px]">
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

import React from "react";
import icon1 from "/src/assets/Frame 1930.png";
import icon2 from "/src/assets/Frame 36 (1).png";
import icon3 from "/src/assets/Frame 1931.png";
import icon4 from "/src/assets/Frame 36.png";
import icon5 from "/src/assets/Frame 40.png";
import bgImage1 from "/src/assets/ph_dresser-light.png";
import bgImage2 from "/src/assets/Group.png";
import bgImage3 from "/src/assets/mynaui_lamp.png";
import bgImage4 from "/src/assets/map_furniture-store.png";
import bgImage5 from "/src/assets/iconoir_sofa.png";

const SpecialFeatures = () => {
  // const boxShadowStyle = {
  //   boxShadow: "0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)",
  // };
  return (
    <div className="relative w-full h-[510px] bg-[#F7F5F5] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Images */}
      <img
        src={bgImage1}
        alt="Background Image 1"
        className="absolute top-[20.88px] left-[69.55px] w-[100px] h-auto z-10"
      />
      <img
        src={bgImage2}
        alt="Background Image 2"
        className="absolute top-[69.25px] left-[819px] w-[88px] h-[160px] z-10"
      />
      <img
        src={bgImage3}
        alt="Background Image 3"
        className="absolute top-[71.44px] right-[176.3px] w-[150px] h-auto z-10"
      />
      <img
        src={bgImage4}
        alt="Background Image 4"
        className="absolute bottom-[23.11px] right-[21.16px] w-[130px] h-auto z-10"
      />
      <img
        src={bgImage5}
        alt="Background Image 5"
        className="absolute left-[219px] top-[173px] w-[150px] h-auto z-10"
      />

      {/* Heading */}
      <h2 className="relative text-4xl md:text-5xl font-bold mb-28 z-20">
        <span className="text-[#393939]">Special </span>
        <span className="text-[#E2761B]">Features</span>
      </h2>

      {/* Icons with Text */}
      <div className="relative flex space-x-28 justify-center z-20">
        <div className="flex flex-col items-center justify-center ">
          <img src={icon1} alt="Icon 1" className="w-20 shadow-lg rounded-full" />

          <p className="text-[#393939] mt-5 font-semibold">
            Top-Quality Materials
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={icon2} alt="Icon 2" className="w-20 shadow-lg rounded-full" />
          <p className="text-[#393939] mt-5 font-semibold">
            Unique Design Elements
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={icon3} alt="Icon 3" className="w-20 shadow-lg rounded-full" />
          <p className="text-[#393939] mt-5 font-semibold">
            Customizable Options
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={icon4} alt="Icon 4" className="w-20 shadow-lg rounded-full" />
          <p className="text-[#393939] mt-5 font-semibold">
            Sustainable Production
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={icon5} alt="Icon 5" className="w-20 shadow-lg rounded-full" />
          <p className="text-[#393939] mt-5 font-semibold">
            Exceptional Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialFeatures;

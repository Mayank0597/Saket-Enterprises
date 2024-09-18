import React from "react";
import logo1 from "/src/assets/Frame 1992.png"; 
import logo2 from "/src/assets/images (1) 1.png";
import logo3 from "/src/assets/merakii 1.png";
import logo4 from "/src/assets/hafele_logo 1.png";
import logo5 from "/src/assets/enox  1.png";
import logo6 from "/src/assets/pidilite-logo-pidilite-icon-free-free-vector (1) 1.png";
import logo7 from "/src/assets/nerolac 1.png";
import logo8 from "/src/assets/ebco 1.png";
import logo9 from "/src/assets/veka-logo-1 1.png";
import logo10 from "/src/assets/image 4.png";
import logo11 from "/src/assets/Hettich-Logo 1.png";
import logo12 from "/src/assets/dorset 1.png";
import logo13 from "/src/assets/united 1.png";

const OurPartners = () => {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-[46px] font-bold text-center mb-20 text-[#393939]">
        Our <span className="text-[#E2761B]">Partners</span>
      </h2>

      {/* Logos */}
      <div className="flex flex-col items-center space-y-28">
        {/* First Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-20 justify-items-center">
          <img
            src={logo1}
            alt="Logo 1"
            className="w-20 sm:w-24 md:w-[123px] h-auto"
          />
          <img
            src={logo2}
            alt="Logo 2"
            className="w-20 sm:w-24 md:w-[197px] h-auto"
          />
          <img
            src={logo3}
            alt="Logo 3"
            className="w-20 sm:w-24 md:w-[166px] h-auto"
          />
          <img
            src={logo4}
            alt="Logo 4"
            className="w-20 sm:w-24 md:w-[218px] h-auto"
          />
          <img
            src={logo5}
            alt="Logo 5"
            className="w-20 sm:w-24 md:w-[210px] h-auto"
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-20 justify-items-center">
          <img
            src={logo6}
            alt="Logo 6"
            className="w-20 sm:w-24 md:w-[173px] h-auto"
          />
          <img
            src={logo7}
            alt="Logo 7"
            className="w-20 sm:w-24 md:w-[184px] h-auto"
          />
          <img
            src={logo8}
            alt="Logo 8"
            className="w-20 sm:w-24 md:w-[175px] h-auto"
          />
          <img
            src={logo9}
            alt="Logo 9"
            className="w-20 sm:w-24 md:w-[170px] h-auto"
          />
          <img
            src={logo10}
            alt="Logo 10"
            className="w-20 sm:w-24 md:w-[178px] h-auto"
          />
        </div>

        {/* Third Row (Centered with fewer logos) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-20 justify-items-center">
          <img
            src={logo11}
            alt="Logo 11"
            className="w-20 sm:w-24 md:w-[154px] h-auto"
          />
          <img
            src={logo12}
            alt="Logo 12"
            className="w-20 sm:w-24 md:w-[157px] h-auto"
          />
          <img
            src={logo13}
            alt="Logo 13"
            className="w-20 sm:w-24 md:w-[153px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;

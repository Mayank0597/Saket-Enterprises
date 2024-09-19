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
    <div className="py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-[46px] font-bold text-center mb-20 text-[#393939]">
        Our <span className="text-[#E2761B]">Partners</span>
      </h2>
      {/* Logos */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center items-center gap-10 max-w-[1200px]">
          <img src={logo1} alt="Logo 1" className="max-w-[103px]" />
          <img src={logo2} alt="Logo 2" className="max-w-[197px]" />
          <img src={logo3} alt="Logo 3" className="max-w-[166px]" />
          <img src={logo4} alt="Logo 4" className="max-w-[218px]" />
          <img src={logo5} alt="Logo 5" className="max-w-[209px]" />
          <img src={logo6} alt="Logo 6" className="max-w-[173px]" />
          <img src={logo7} alt="Logo 7" className="max-w-[184px]" />
          <img src={logo8} alt="Logo 8" className="max-w-[175px]" />
          <img src={logo9} alt="Logo 9" className="max-w-[170px]" />
          <img src={logo10} alt="Logo 10" className="max-w-[178px]" />
          <img src={logo11} alt="Logo 11" className="max-w-[154px]" />
          <img src={logo12} alt="Logo 12" className="max-w-[157px]" />
          <img src={logo13} alt="Logo 13" className="max-w-[153px]" />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;

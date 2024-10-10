import React from "react";
import logo1 from "/src/assets/Frame 1993.png";
import logo2 from "/src/assets/Frame 1994.png";
import logo3 from "/src/assets/Frame 1995.png";
import logo4 from "/src/assets/Frame 1997.png";
import logo5 from "/src/assets/Frame 1998.png";
import logo6 from "/src/assets/Frame 1996.png";
import logo7 from "/src/assets/Frame 1999.png";
import logo8 from "/src/assets/Frame 2000.png";
import logo9 from "/src/assets/Frame 2002.png";
import logo10 from "/src/assets/Frame 2003.png";
import logo11 from "/src/assets/Frame 2004.png";
import logo12 from "/src/assets/Frame 2005.png";
import logo13 from "/src/assets/Frame 2001.png";

const OurPartners = () => {
  return (
    <div className="py-[68px] px-4 md:px-8 lg:px-16 xl:px-24">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-[46px] font-semibold text-center mb-[50px] text-[#393939]">
        Our <span className="text-[#E2761B]">Partners</span>
      </h2>
      {/* Logos */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center items-center gap-10 max-w-[1200px]">
          <img src={logo1} alt="Logo 1" className="max-w-[175px]" />
          <img src={logo2} alt="Logo 2" className="max-w-[175px]" />
          <img src={logo3} alt="Logo 3" className="max-w-[175px]" />
          <img src={logo4} alt="Logo 4" className="max-w-[175px]" />
          <img src={logo5} alt="Logo 5" className="max-w-[175px]" />
          <img src={logo6} alt="Logo 6" className="max-w-[175px]" />
          <img src={logo7} alt="Logo 7" className="max-w-[175px]" />
          <img src={logo8} alt="Logo 8" className="max-w-[175px]" />
          <img src={logo9} alt="Logo 9" className="max-w-[175px]" />
          <img src={logo10} alt="Logo 10" className="max-w-[175px]" />
          <img src={logo11} alt="Logo 11" className="max-w-[175px]" />
          <img src={logo12} alt="Logo 12" className="max-w-[175px]" />
          <img src={logo13} alt="Logo 13" className="max-w-[175px]" />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;

import React from "react";
import imageSrc from "/src/assets/saket-tiwari 1.png";

const AboutUsPageComp4 = () => {
  return (
    // <>
    //   <div className="flex items-center justify-center text-center mt-16">
    //     <h2 className="text-[39px] max-w-[691px] text-[#393939]">
    //       The Vision Behind{" "}
    //       <span className="text-[#E2761B]">Saket Enterprises’</span> Unique
    //       Creations
    //     </h2>
    //   </div>
    //   <div className="flex justify-end">
    //     <div className="lg:w-[238px] lg:h-[650px] bg-[#D9D9D9]"></div>

    //   </div>

    // </>
    <div>
      {/* Heading Section */}
      <div className="flex items-center justify-center text-center mt-16">
        <h2 className="text-[39px] max-w-[691px] text-[#393939] font-semibold">
          The Vision Behind{" "}
          <span className="text-[#E2761B]">Saket Enterprises’</span> Unique
          Creations
        </h2>
      </div>

      {/* Background Grey Area */}
      <div className="flex justify-end relative mt-10">
        <div className="lg:w-[238px] lg:h-[650px] bg-[#D9D9D9] relative">
          {/* Positioned Div with Grey Area and Image */}
          <div className="absolute w-[1320px] h-[455px] top-[97px] right-[55px] bottom-[98px] flex items-center justify-between">
            {/* Grey Area with Paragraph */}
            <div className="w-full max-w-[calc(100%-408px)] h-full bg-[#FAFAFA] flex items-center px-8 rounded-lg">
              <p className="text-xl text-[#9F9F9F] ml-20 mr-[81px] text-justify open-sans font-medium">
              Saket Tiwari is a computer science engineer with significant experience working with major multinational corporations. With a longstanding background in working with wood and timber, Saket has always aspired to innovate and move beyond traditional methods to excel in modern approaches. His dream has been to encourage people to adopt new methodologies for creating masterpieces. He has conducted extensive research, particularly in the Bastar art form and has introduced new machinery and improved craftsmanship to the market.
              <p className='mt-7'>"Design is not just what it looks like and feels like. Design is how it works."<br />
              — Saket Tiwari</p>
              
              </p>
            </div>

            {/* Image on the Right */}
            <div className="w-[408px] h-[455px]">
              <img
                src={imageSrc}
                alt="Saket Enterprises"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPageComp4;

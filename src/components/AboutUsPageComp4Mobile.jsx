import React from "react";
import imageSrc from "/src/assets/Optimize Image/saket.webp";

const AboutUsPageComp4Mobile = () => {
  return (
    <div className="bg-[#F3F2F2] pt-[50px] pb-[60px]">
      {/* Heading Section */}
      <div className="flex items-center justify-center text-center px-[29px]">
        <h2 className="text-[33px] text-[#393939] font-semibold">
          The Vision Behind{" "}
          <span className="text-[#E2761B]">Saket Enterprises’</span> Unique
          Creations
        </h2>
      </div>

      {/* Image and Text Section in Mobile View */}
      <div className="mt-10">
        {/* Image covering the whole width */}
        <div className="w-full h-auto">
          <img
            src={imageSrc}
            alt="Saket Enterprises"
            className="w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="mt-[46px] px-[31px] rounded-lg">
          <p className="text-[13px] text-[#9F9F9F] text-justify open-sans font-medium">
            Saket Tiwari is a computer science engineer with significant
            experience working with major multinational corporations. With a
            longstanding background in working with wood and timber, Saket has
            always aspired to innovate and move beyond traditional methods to
            excel in modern approaches. His dream has been to encourage people
            to adopt new methodologies for creating masterpieces. He has
            conducted extensive research, particularly in the Bastar art form
            and has introduced new machinery and improved craftsmanship to the
            market.
          </p>
          <p className="mt-3 text-[13px] text-[#9F9F9F] font-medium open-sans">
            "Design is not just what it looks like and feels like. Design is how
            it works."
            <br />— Saket Tiwari
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPageComp4Mobile;

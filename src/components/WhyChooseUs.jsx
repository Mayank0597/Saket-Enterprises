import React from "react";
import circularImage from "/src/assets/Ellipse 1.png";
import icon1 from "/src/assets/Frame 18.png";
import icon2 from "/src/assets/Frame 16.png";
import icon3 from "/src/assets/Frame 11.png";
import icon4 from "/src/assets/Frame 12.png";
import bgImage1 from "/src/assets/material-symbols-light_dresser-outline.png"; 
import bgImage2 from "/src/assets/map_furniture-store.png"; 
import bgImage3 from "/src/assets/iconoir_sofa.png"; 
import bgImage4 from "/src/assets/Group.png"; 
import bgImage5 from "/src/assets/mynaui_lamp.png";

const WhyChooseUs = () => {
  return (
    <div className="relative w-full bg-white pb-36 pt-20 flex flex-col items-center">
      {/* Background Images */}
      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px]"
        style={{ left: "540px", top: "80px" }} // Position relative to the heading
      />
      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px]"
        style={{ left: "1110px", top: "200px" }} // Positioned below the heading
      />
      <img
        src={bgImage3}
        alt="Background 3"
        className="absolute z-0 w-[155px] h-[120px]"
        style={{ left: "814px", top: "45%" }} // Centered height-wise
      />
      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[88px] h-[159px]"
        style={{ left: "568px", bottom: "80px" }} // Positioned at the bottom
      />
      <img
        src={bgImage5}
        alt="Background 5"
        className="absolute z-0 w-[58px] h-[92px]"
        style={{ left: "1050px", bottom: "50px" }} // Positioned at the bottom
      />

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-40 z-10 text-[#393939]">
        Why <span className="text-[#E2761B]">Choose Us</span> ?
      </h2>

      {/* Circular Section */}
      <div className="flex w-full justify-start items-center relative z-10">
        {/* Circular Image */}
        <div className="relative flex justify-start">
          <div className="relative -left-10 w-[517px] h-[517px] flex items-center justify-center">
            <img
              src={circularImage}
              alt="Circular Main"
              className="w-full h-full object-cover rounded-full"
            />
            {/* Orange Circular Line */}
            <div className="absolute w-[603px] h-[603px] rounded-full border-[1.708px] border-[#E2761B] z-10"></div>

            {/* Icons on Circular Line */}
            <div className="absolute w-[360px] h-[360px] rounded-full z-20">
              {/* Icon 1*/}

              <div
                className="absolute flex transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: "-25%",
                  left: "168%",
                }}
              >
                <img src={icon1} alt="Icon 1" className="w-20 h-20 shadow-lg rounded-full" />
                <div className="text-left ml-10 w-[600px]">
                  <h4 className="text-lg text-[#393939] font-semibold whitespace-nowrap">
                    Unmatched Quality
                  </h4>
                  <p className="text-[16px] font-medium open-sans text-[#9F9F9F] ">
                    We pride ourselves on offering only the highest quality
                    plywood, hardware, and furniture, crafted to ensure
                    durability and aesthetic appeal.
                  </p>
                </div>
              </div>

              {/* Icon 2*/}
              <div
                className="absolute flex transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: "20%",
                  left: "207%",
                }}
              >
                <img src={icon2} alt="Icon 2" className="w-20 h-20 shadow-lg rounded-full" />
                <div className="text-left ml-10 w-[600px]">
                  <h4 className="text-lg text-[#393939] font-semibold whitespace-nowrap">
                    Expert Craftsmanship
                  </h4>
                  <p className="text-[16px] font-medium open-sans text-[#9F9F9F]">
                    Led by Saket Tiwari, our team provides traditional expertise
                    and modern techniques to deliver exceptional results.
                  </p>
                </div>
              </div>

              {/* Icon 3 */}
              <div
                className="absolute flex transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: "78%",
                  left: "208%",
                }}
              >
                <img src={icon3} alt="Icon 3" className="w-20 h-20 shadow-lg rounded-full" />
                <div className="text-left ml-10 w-[600px]">
                  <h4 className="text-lg text-[#393939] font-semibold whitespace-nowrap">
                    Diverse Product Range
                  </h4>
                  <p className="text-[16px] font-medium open-sans text-[#9F9F9F]">
                    Whether you're looking for plywood, elegant veneer or unique
                    Bastar Art artefacts, we offer a comprehensive selection to
                    meet all your needs.
                  </p>
                </div>
              </div>

              {/* Icon 4*/}
              <div
                className="absolute flex transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: "125%",
                  left: "168%",
                }}
              >
                <img src={icon4} alt="Icon 4" className="w-20 h-20 shadow-lg rounded-full" />
                <div className="text-left ml-10 w-[600px]">
                  <h4 className="text-lg text-[#393939] font-semibold whitespace-nowrap">
                    Customer-Centric Approach
                  </h4>
                  <p className="text-[16px] font-medium open-sans text-[#9F9F9F]">
                    At Saket Enterprises, Our dedicated team works closely with
                    you to understand your needs and provide personalized
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

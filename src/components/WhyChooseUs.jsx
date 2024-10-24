// import React, { useEffect } from "react";
// import circularImage from "/src/assets/Optimize Image/Ellipse11-ezgif.com-optiwebp.webp";
// import mobileCircularImage from "/src/assets/Optimize Image/Ellipse12-ezgif.com-png-to-webp-converter.webp";
// import icon1 from "/src/assets/Frame 18.png";
// import icon2 from "/src/assets/Frame 16.png";
// import icon3 from "/src/assets/Frame 11.png";
// import icon4 from "/src/assets/Frame 12.png";
// import bgImage1 from "/src/assets/material-symbols-light_dresser-outline.png";
// import bgImage2 from "/src/assets/map_furniture-store (2).png";
// import bgImage3 from "/src/assets/iconoir_sofa (2).png";
// import bgImage4 from "/src/assets/Group (2).png";
// import bgImage5 from "/src/assets/mynaui_lamp (2).png";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const WhyChooseUs = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);
//   return (
//     <div className="relative w-full bg-white md:pb-36 md:pt-20 flex flex-col items-center">
//       {/* Background Images */}
//       <img
//         src={bgImage1}
//         alt="Background 1"
//         className="absolute z-0 w-[132px] h-[159px] hidden md:block"
//         style={{ left: "540px", top: "80px" }} // Position relative to the heading
//       />
//       <img
//         src={bgImage2}
//         alt="Background 2"
//         className="absolute z-0 w-[163px] h-[123px] hidden md:block"
//         style={{ left: "1110px", top: "200px" }} // Positioned below the heading
//       />
//       <img
//         src={bgImage3}
//         alt="Background 3"
//         className="absolute z-0 w-[155px] h-[120px] hidden md:block"
//         style={{ left: "814px", top: "45%" }} // Centered height-wise
//       />
//       <img
//         src={bgImage4}
//         alt="Background 4"
//         className="absolute z-0 w-[88px] h-[159px] hidden md:block"
//         style={{ left: "568px", bottom: "80px" }} // Positioned at the bottom
//       />
//       <img
//         src={bgImage5}
//         alt="Background 5"
//         className="absolute z-0 w-[58px] h-[91px] hidden md:block"
//         style={{ left: "1050px", bottom: "50px" }} // Positioned at the bottom
//       />

//       {/* Heading */}
//       <h2
//         className="text-[33px] md:text-[46px] font-semibold text-center md:mb-40 z-10 text-[#393939]"
//         data-aos="fade-down"
//       >
//         Why <span className="text-[#E2761B]">Choose Us</span> ?
//       </h2>

//       {/* Circular Section */}
//       <div
//         className="flex w-full justify-start items-center relative z-10"
//         data-aos="fade-right"
//       >
//         {/* Circular Image */}
//         <div className="relative flex justify-start">
//           <div className="relative -left-10 w-[517px] h-[517px] flex items-center justify-center">
//             <img
//               src={
//                 window.innerWidth < 768 ? mobileCircularImage : circularImage
//               }
//               alt="Circular Main"
//               className="md:w-full w-[265px] h-[265px] md:h-full  object-cover rounded-full absolute md:-left-10 left-2"
//             />
//             {/* Orange Circular Line */}
//             <div className="absolute md:w-[603px] w-[350px] md:h-[603px] h-[350px] rounded-full border-[1.708px] border-[#E2761B] z-10 md:-left-10 left-0"></div>

//             {/* Icons on Circular Line */}
//             <div className="absolute w-[360px] h-[360px] rounded-full z-20 hidden md:block">
//               {/* Icon 1*/}

//               <div
//                 className="absolute flex transform -translate-x-1/2 -translate-y-1/2"
//                 style={{
//                   top: "-25%",
//                   left: "168%",
//                 }}
//               >
//                 <img
//                   src={icon1}
//                   alt="Icon 1"
//                   className="w-20 h-20 shadow-lg rounded-full"
//                 />
//                 <div className="text-left ml-10 w-[600px]">
//                   <h4 className="text-lg text-[#393939] font-semibold whitespace-nowrap">
//                     Unmatched Quality
//                   </h4>
//                   <p className="text-base font-medium open-sans text-[#9F9F9F] ">
//                     We pride ourselves on offering only the highest quality
//                     plywood, hardware, and furniture, crafted to ensure
//                     durability and aesthetic appeal.
//                   </p>
//                 </div>
//               </div>

//               {/* Icon 2*/}
//               <div
//                 className="absolute flex transform -translate-x-1/2 -translate-y-1/2"
//                 style={{
//                   top: "20%",
//                   left: "207%",
//                 }}
//               >
//                 <img
//                   src={icon2}
//                   alt="Icon 2"
//                   className="w-20 h-20 shadow-lg rounded-full"
//                 />
//                 <div className="text-left ml-10 w-[600px]">
//                   <h4 className="text-lg text-[#393939] font-semibold whitespace-nowrap">
//                     Expert Craftsmanship
//                   </h4>
//                   <p className="text-[16px] font-medium open-sans text-[#9F9F9F]">
//                     Led by Saket Tiwari, our team provides traditional expertise
//                     and modern techniques to deliver exceptional results.
//                   </p>
//                 </div>
//               </div>

//               {/* Icon 3 */}
//               <div
//                 className="absolute flex transform -translate-x-1/2 -translate-y-1/2"
//                 style={{
//                   top: "78%",
//                   left: "208%",
//                 }}
//               >
//                 <img
//                   src={icon3}
//                   alt="Icon 3"
//                   className="w-20 h-20 shadow-lg rounded-full"
//                 />
//                 <div className="text-left ml-10 w-[600px]">
//                   <h4 className="text-lg text-[#393939] font-semibold whitespace-nowrap">
//                     Diverse Product Range
//                   </h4>
//                   <p className="text-[16px] font-medium open-sans text-[#9F9F9F]">
//                     Whether you're looking for plywood, elegant veneer or unique
//                     Bastar Art artefacts, we offer a comprehensive selection to
//                     meet all your needs.
//                   </p>
//                 </div>
//               </div>

//               {/* Icon 4*/}
//               <div
//                 className="absolute flex transform -translate-x-1/2 -translate-y-1/2"
//                 style={{
//                   top: "125%",
//                   left: "168%",
//                 }}
//               >
//                 <img
//                   src={icon4}
//                   alt="Icon 4"
//                   className="w-20 h-20 shadow-lg rounded-full"
//                 />
//                 <div className="text-left ml-10 w-[600px]">
//                   <h4 className="text-lg text-[#393939] font-semibold whitespace-nowrap">
//                     Customer-Centric Approach
//                   </h4>
//                   <p className="text-[16px] font-medium open-sans text-[#9F9F9F]">
//                     At Saket Enterprises, Our dedicated team works closely with
//                     you to understand your needs and provide personalized
//                     solutions.
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;

import React, { useEffect } from "react";
import circularImage from "/src/assets/Optimize Image/Ellipse11-ezgif.com-optiwebp.webp";
import mobileCircularImage from "/src/assets/Optimize Image/Ellipse12-ezgif.com-png-to-webp-converter.webp";
import icon1 from "/src/assets/Frame 18.png";
import icon2 from "/src/assets/Frame 16.png";
import icon3 from "/src/assets/Frame 11.png";
import icon4 from "/src/assets/Frame 12.png";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative w-full bg-white md:pb-36 pb-[73px] md:pt-20 pt-[60px] flex flex-col items-center">
      {/* Heading */}
      <h2
        className="text-[33px] md:text-[46px] font-semibold text-center md:mb-40 z-10 text-[#393939]"
        data-aos="fade-down"
      >
        Why <span className="text-[#E2761B]">Choose Us</span> ?
      </h2>

      {/* Circular Section */}

      <div
        className="flex w-full justify-start items-center relative z-10"
        data-aos="fade-right"
      >
        {/* Circular Image */}
        <div className="relative flex justify-start">
          <div className="relative -left-10 md:w-[517px] w-[265px] md:h-[517px] h-[450px] flex items-center justify-center">
            <img
              src={
                window.innerWidth < 768 ? mobileCircularImage : circularImage
              }
              alt="Circular Main"
              className="md:w-full w-[265px] h-[265px] md:h-full  object-cover rounded-full absolute md:-left-10 left-2"
            />
            {/* Orange Circular Line */}
            <div className="absolute md:w-[603px] w-[350px] md:h-[603px] h-[350px] rounded-full border-[1.708px] border-[#E2761B] z-10 md:-left-10 left-0"></div>
          </div>
        </div>
      </div>

      {/* Desktop View (4 Icon Layout) */}
      <div className="hidden xl:block relative w-full items-center justify-center mt-10">
        <div className="absolute w-[360px] h-[360px] rounded-full z-20">
          {/* Similar layout for all 4 icons */}
          {/* Icon 1 */}
          <div
            className="absolute flex transform -translate-x-1/2 -translate-y-1/2"
            style={{
              top: "-156%",
              left: "180%",
            }}
          >
            <img
              src={icon1}
              alt="Icon 1"
              className="w-20 h-20 shadow-lg rounded-full"
            />
            <div className="text-left ml-10 w-[600px]">
              <h4 className="text-lg text-[#393939] font-semibold whitespace-nowrap">
                Unmatched Quality
              </h4>
              <p className="text-base font-medium open-sans text-[#9F9F9F] ">
                We pride ourselves on offering only the highest quality plywood,
                hardware, and furniture, crafted to ensure durability and
                aesthetic appeal.
              </p>
            </div>
          </div>
          {/* Icon 2 */}
          <div
            className="absolute flex transform -translate-x-1/2 -translate-y-1/2"
            style={{
              top: "-110%",
              left: "218%",
            }}
          >
            <img
              src={icon2}
              alt="Icon 1"
              className="w-20 h-20 shadow-lg rounded-full"
            />
            <div className="text-left ml-10 w-[600px]">
              <h4 className="text-lg text-[#393939] font-semibold whitespace-nowrap">
                Expert Craftsmanship
              </h4>
              <p className="text-base font-medium open-sans text-[#9F9F9F] ">
                Led by Saket Tiwari, our team provides traditional expertise and
                modern techniques to deliver exceptional results.
              </p>
            </div>
          </div>
          {/* Icon 3 */}
          <div
            className="absolute flex transform -translate-x-1/2 -translate-y-1/2"
            style={{
              top: "-52%",
              left: "218%",
            }}
          >
            <img
              src={icon3}
              alt="Icon 1"
              className="w-20 h-20 shadow-lg rounded-full"
            />
            <div className="text-left ml-10 w-[600px]">
              <h4 className="text-lg text-[#393939] font-semibold whitespace-nowrap">
                Diverse Product Range
              </h4>
              <p className="text-base font-medium open-sans text-[#9F9F9F] ">
                Whether you're looking for plywood, elegant veneer, or unique
                Bastar Art artefacts, we offer a comprehensive selection to meet
                all your needs.
              </p>
            </div>
          </div>
          {/* Icon 4 */}
          <div
            className="absolute flex transform -translate-x-1/2 -translate-y-1/2"
            style={{
              top: "-10%",
              left: "180%",
            }}
          >
            <img
              src={icon4}
              alt="Icon 1"
              className="w-20 h-20 shadow-lg rounded-full"
            />
            <div className="text-left ml-10 w-[600px]">
              <h4 className="text-lg text-[#393939] font-semibold whitespace-nowrap">
                Customer-Centric Approach
              </h4>
              <p className="text-base font-medium open-sans text-[#9F9F9F] ">
                At Saket Enterprises, Our dedicated team works closely with you
                to understand your needs and provide personalized solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View (Vertical Cards Layout) */}
      <div className="xl:hidden mt-10 w-full flex flex-col items-center space-y-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-md p-7 w-[80%] flex flex-col items-center text-center">
          <img src={icon1} alt="Icon 1" className="w-16 h-16 mb-5" />
          <h4 className="text-[19px] text-[#393939] font-semibold">
            Unmatched Quality
          </h4>
          <p className="text-sm font-medium text-[#9F9F9F] open-sans">
            We pride ourselves on offering only the highest quality plywood,
            hardware, and furniture, crafted to ensure durability and aesthetic
            appeal.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-md p-7 w-[80%] flex flex-col items-center text-center">
          <img src={icon2} alt="Icon 2" className="w-16 h-16 mb-5" />
          <h4 className="text-[19px] text-[#393939] font-semibold">
            Expert Craftsmanship
          </h4>
          <p className="text-sm font-medium text-[#9F9F9F] open-sans">
            Led by Saket Tiwari, our team provides traditional expertise and
            modern techniques to deliver exceptional results.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-md p-7 w-[80%] flex flex-col items-center text-center">
          <img src={icon3} alt="Icon 3" className="w-16 h-16 mb-5" />
          <h4 className="text-[19px] text-[#393939] font-semibold">
            Diverse Product Range
          </h4>
          <p className="text-sm font-medium text-[#9F9F9F] open-sans">
            Whether you're looking for plywood, elegant veneer or unique Bastar
            Art artefacts, we offer a comprehensive selection to meet all your
            needs.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-md p-7 w-[80%] flex flex-col items-center text-center">
          <img src={icon4} alt="Icon 4" className="w-16 h-16 mb-5" />
          <h4 className="text-[19px] text-[#393939] font-semibold">
            Customer-Centric Approach
          </h4>
          <p className="text-sm font-medium text-[#9F9F9F] open-sans">
          At Saket Enterprises, Our dedicated team works closely with you to understand your needs and provide personalized solutions.

          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

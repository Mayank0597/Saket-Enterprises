import React from "react";
import { Parallax } from "react-parallax";
import icon1 from "/src/assets/Frame 1930.png";
import icon2 from "/src/assets/Frame 36 (1).png";
import icon3 from "/src/assets/Frame 1931.png";
import icon4 from "/src/assets/Frame 36.png";
import icon5 from "/src/assets/Frame 40.png";
import backgroundImage from "/src/assets/Optimize Image/Frame422-ezgif.com-optiwebp.webp";
import mobilebackgroundImage from "/src/assets/Optimize Image/Frame1937-ezgif.com-png-to-webp-converter.webp";

const SpecialFeatures = () => {
  return (
    <div className="relative w-full md:h-[510px] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Full-width background image */}

      <img
        src={window.innerWidth < 768 ? mobilebackgroundImage : backgroundImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Heading */}
      <h2 className="relative text-[33px] md:text-5xl md:font-bold font-semibold md:mb-28 mb-16 z-20 md:mt-0 mt-[70px]">
        <span className="text-[#FFFFFF]">Special </span>
        <span className="text-[#E2761B]">Features</span>
      </h2>

      {/* Icons with Text */}
      <div className="relative flex flex-col md:flex-row lg:space-x-28 md:space-x-16 md:space-y-0 space-y-[89px] justify-center z-20 md:mb-0 mb-[102px]">
        <div className="flex flex-col items-center justify-center ">
          <img
            src={icon1}
            alt="Icon 1"
            className="w-20 shadow-lg rounded-full"
          />

          <p className="text-[#FFFFFF] mt-5 font-semibold">
            Top-Quality Materials
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={icon2}
            alt="Icon 2"
            className="w-20 shadow-lg rounded-full"
          />
          <p className="text-[#FFFFFF] mt-5 font-semibold">
            Unique Design Elements
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={icon3}
            alt="Icon 3"
            className="w-20 shadow-lg rounded-full"
          />
          <p className="text-[#FFFFFF] mt-5 font-semibold">
            Customizable Options
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={icon4}
            alt="Icon 4"
            className="w-20 shadow-lg rounded-full"
          />
          <p className="text-[#FFFFFF] mt-5 font-semibold">
            Sustainable Production
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={icon5}
            alt="Icon 5"
            className="w-20 shadow-lg rounded-full"
          />
          <p className="text-[#FFFFFF] mt-5 font-semibold">
            Exceptional Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialFeatures;

// import React, { useEffect } from "react";
// import { Parallax } from "react-parallax"; // Import Parallax
// import icon1 from "/src/assets/Frame 1930.png";
// import icon2 from "/src/assets/Frame 36 (1).png";
// import icon3 from "/src/assets/Frame 1931.png";
// import icon4 from "/src/assets/Frame 36.png";
// import icon5 from "/src/assets/Frame 40.png";
// import backgroundImage from "/src/assets/Optimize Image/Frame422-ezgif.com-optiwebp.webp";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const SpecialFeatures = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);
//   return (
//     <div className="relative w-full h-[510px] flex flex-col items-center justify-center text-center overflow-hidden">
//       {/* Parallax Background Image */}
//       <Parallax
//         bgImage={backgroundImage}
//         strength={300} // Control the intensity of the parallax
//         className="absolute top-0 left-0 w-full h-full"
//       >
//         <div className="relative w-full h-[510px] flex flex-col items-center justify-center text-center">
//           {/* Heading */}
//           <h2
//             className="relative text-4xl md:text-5xl font-semibold mb-28 z-20 text-[#FFF]"
//             data-aos="fade-down"
//           >
//             Special
//             <span className="text-[#E2761B]"> Features</span>
//           </h2>

//           {/* Icons with Text */}
//           <div className="relative flex space-x-24 justify-center z-20">
//             <div
//               className="flex flex-col items-center justify-center"
//               data-aos="fade-right"
//             >
//               <img src={icon1} alt="Icon 1" className="w-20 rounded-full" />
//               <p className="text-[#FFF] mt-5 font-semibold text-[19px]">
//                 Top-Quality Materials
//               </p>
//             </div>
//             <div
//               className="flex flex-col items-center justify-center"
//               data-aos="fade-right"
//             >
//               <img src={icon2} alt="Icon 2" className="w-20 rounded-full" />
//               <p className="text-[#FFF] mt-5 font-semibold text-[19px]">
//                 Unique Design Elements
//               </p>
//             </div>
//             <div
//               className="flex flex-col items-center justify-center"
//               data-aos="fade-up"
//             >
//               <img src={icon3} alt="Icon 3" className="w-20 rounded-full" />
//               <p className="text-[#FFF] mt-5 font-semibold text-[19px]">
//                 Customizable Options
//               </p>
//             </div>
//             <div
//               className="flex flex-col items-center justify-center"
//               data-aos="fade-left"
//             >
//               <img src={icon4} alt="Icon 4" className="w-20 rounded-full" />
//               <p className="text-[#FFF] mt-5 font-semibold text-[19px]">
//                 Sustainable Production
//               </p>
//             </div>
//             <div
//               className="flex flex-col items-center justify-center"
//               data-aos="fade-left"
//             >
//               <img src={icon5} alt="Icon 5" className="w-20 rounded-full" />
//               <p className="text-[#FFF] mt-5 font-semibold text-[19px]">
//                 Exceptional Service
//               </p>
//             </div>
//           </div>
//         </div>
//       </Parallax>
//     </div>
//   );
// };

// export default SpecialFeatures;

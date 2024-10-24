// import React from "react";
// import rectangleImage from "/src/assets/Frame 23.png";
// import overlappingImage from "/src/assets/Frame 73.png";
// import topRightImage from "/src/assets/quarter circle4.png";
// import logo1 from "/src/assets/bi_people.png";
// import logo2 from "/src/assets/achievement_9375493 2.png";
// import logo3 from "/src/assets/ph_truck-light.png";

// const AboutSection = () => {
//   return (
//     <div className="relative w-full py-12 md:py-24 px-4 md:px-16 flex flex-col md:flex-row items-start">
//       {/* Top-right Image */}
//       <div className="absolute top-0 right-0 z-20">
//         <img
//           src={topRightImage}
//           alt="Top Right Image"
//           className="w-20 md:w-52 h-auto"
//         />
//       </div>

//       {/* Left-side images */}
//       <div className="relative flex-shrink-0">
//         {/* Grey Rectangle Image */}
//         <img
//           src={rectangleImage}
//           alt="Rectangle"
//           className="h-auto w-[358px] transform -translate-x-1/2 -translate-y-1/4"
//         />

//         {/* Overlapping Image */}
//         <img
//           src={overlappingImage}
//           alt="Overlapping Image"
//           className="absolute top-1/2  w-40 h-auto z-10"
//         />
//       </div>

//       {/* Right-side Content */}
//       <div className="flex flex-col space-y-8 md:pl-16 w-full md:w-2/3">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold">
//           <span className="text-black">About </span>
//           <span className="text-[#E2761B]">Us</span>
//         </h2>

//         {/* Description */}
//         <p className="text-lg md:text-xl text-gray-600">
//           Saket Enterprises is a leading name in the furniture and wood
//           industry, known for delivering high quality Plywood, Hardware,
//           Household furniture, Bastar Art, and Artifacts. Founded by Saket
//           Tiwari, a visionary commited to blending traditional creativity with
//           modern techniques, the company has built a reputation for excellence
//           and innovation.
//           <p>
//             Our dedication to quality and design has earned us the trust of
//             customers looking for unique and durable solutions for their homes
//             and businesses!
//           </p>
//         </p>

//         {/* Logos and text sections */}
//         <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
//           {/* First Section */}
//           <div className="flex flex-col items-center text-center w-full md:w-1/3">
//             <img src={logo1} alt="Logo 1" className="w-16 h-auto mb-4" />
//             <h3 className="font-semibold text-lg">1000+ Happy Customers</h3>
//             <p className="text-sm text-gray-600">
//               Serving 1000+ satisfied customers.
//             </p>
//           </div>

//           {/* Vertical Line */}
//           <div className="hidden md:block h-20 w-px bg-gray-300 mx-4"></div>

//           {/* Second Section */}
//           <div className="flex flex-col items-center text-center w-full md:w-1/3">
//             <img src={logo2} alt="Logo 2" className="w-12 h-auto mb-4" />
//             <h3 className="font-semibold text-lg">Assured Quality</h3>
//             <p className="text-sm text-gray-600">
//               Guranteed quality every time.
//             </p>
//           </div>

//           {/* Vertical Line */}
//           <div className="hidden md:block h-20 w-px bg-gray-300 mx-4"></div>

//           {/* Third Section */}
//           <div className="flex flex-col items-center text-center w-full md:w-1/3">
//             <img src={logo3} alt="Logo 3" className="w-16 h-auto mb-4" />
//             <h3 className="font-semibold text-lg">Express Delivery</h3>
//             <p className="text-sm text-gray-600">
//               Reliable and confirmed delivery.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

import React, { useEffect } from "react";
import rectangleImage from "/src/assets/Frame 23.png";
import overlappingImage from "/src/assets/Optimize Image/Frame732-ezgif.com-optiwebp.webp";
import overlappingMobileImage from "/src/assets/Optimize Image/Frame734-ezgif.com-png-to-webp-converter.webp";
import topRightImage from "/src/assets/quarter circle4.png";
import logo1 from "/src/assets/bi_people.png";
import logo2 from "/src/assets/achievement_9375493 2.png";
import logo3 from "/src/assets/ph_truck-light.png";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="relative w-full flex flex-col lg:flex-row items-start">
      {/* Top-right Image */}
      <div className="absolute top-0 right-0 z-0 lg:block hidden">
        <img
          src={topRightImage}
          alt="Top Right Image"
          className="w-20 lg:w-60 h-auto"
        />
      </div>
      <div className="flex flex-wrap">
        {/* Left-side images */}
        <div className="relative" data-aos="fade-right">
          {/* Grey Rectangle Image */}

          <img
            src={rectangleImage}
            alt="Rectangle"
            className="lg:w-[358px] w-1/2 sm:w-1/2 md:w-[300px] h-auto"
          />

          {/* Overlapping Image */}
          <img
            src={
              window.innerWidth < 768
                ? overlappingMobileImage
                : overlappingImage
            }
            alt="Overlapping Image"
            className="absolute md:left-[152px] left-1/2 top-1/2 transform -translate-y-1/2 md:-translate-y-0 md:-translate-x-0 -translate-x-1/2 md:top-[128px] md:w-[390px] w-2/3 sm:w-[60%] h-auto lg:h-[499px] z-10"
          />
        </div>

        {/* Right-side Content */}
        <div
          className="flex flex-col justify-center lg:space-y-8 lg:pl-64 text-justify lg:px-0 px-[30px]"
        >
          {/* Heading */}
          <h2 className="text-[33px] lg:text-[46px] font-semibold text-center lg:text-left text-[#393939] lg:mt-0 mt-[15px] lg:mb-0 mb-3">
            About <span className="text-[#E2761B]"> Us</span>
          </h2>

          {/* Description */}
          <p className="lg:text-base text-[13px] open-sans font-medium text-[#9F9F9F] max-w-[619px] ">
            Saket Enterprises is a leading name in the furniture and wood
            industry, known for delivering high quality Plywood, Hardware,
            Household furniture, Bastar Art, and Artifacts. Founded by Saket
            Tiwari, a visionary committed to blending traditional creativity
            with modern techniques, the company has built a reputation for
            excellence and innovation.
          </p>
          <p className="lg:text-base text-[13px] open-sans font-medium text-[#9F9F9F] max-w-[619px]">
            Our dedication to quality and design has earned us the trust of
            customers looking for unique and durable solutions for their homes
            and businesses!
          </p>

          {/* Logos and text sections */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0 md:space-x-8 md:mt-0 mt-10">
            {/* First Section */}
            {/* <div className="flex flex-col items-center text-center justify-between">
              <img src={logo1} alt="Logo 1" className="w-10 h-auto mb-4" />
              <h3 className="font-medium text-base text-[#393939]">
                1000+ Happy Customers
              </h3>
              <p className="text-[12px] font-medium text-[#9F9F9F] open-sans">
                Serving 1000+ satisfied customers.
              </p>
            </div> */}
            <div className="flex flex-col items-center text-center justify-between p-6 md:p-0 bg-white md:border-hidden border border-gray-300 rounded-lg md:bg-transparent md:shadow-none md:rounded-none">
              <img src={logo1} alt="Logo 1" className="w-10 h-auto mb-4" />
              <h3 className="font-medium text-base text-[#393939]">
                1000+ Happy Customers
              </h3>
              <p className="text-[12px] font-medium text-[#9F9F9F] open-sans">
                Serving 1000+ satisfied customers.
              </p>
            </div>

            {/* Vertical Line */}
            <div className="hidden md:flex items-center justify-center h-4/5 w-[1px] bg-gray-300 mx-4"></div>

            {/* Second Section */}
            <div className="flex flex-col items-center text-center justify-between px-10 py-5 md:p-0 bg-white md:border-hidden border border-gray-300 rounded-lg md:bg-transparent md:shadow-none md:rounded-none">
              <img src={logo2} alt="Logo 2" className="w-10 h-auto mb-4" />
              <h3 className="font-medium text-base text-[#393939]">
                Assured Quality
              </h3>
              <p className="text-[12px] font-medium open-sans text-[#9F9F9F]">
                Guaranteed quality every time.
              </p>
            </div>

            {/* Vertical Line */}
            <div className="hidden md:flex items-center justify-center h-4/5 w-[1px] bg-gray-300 mx-4"></div>

            {/* Third Section */}
            <div className="flex flex-col items-center text-center justify-between px-9 py-6 md:p-0 bg-white md:border-hidden border border-gray-300 rounded-lg md:bg-transparent md:shadow-none md:rounded-none">
              <img src={logo3} alt="Logo 3" className="w-10 h-auto mb-4" />
              <h3 className="font-medium text-base text-[#393939]">
                Express Delivery
              </h3>
              <p className="text-[12px] font-medium open-sans text-[#9F9F9F]">
                Reliable and confirmed delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

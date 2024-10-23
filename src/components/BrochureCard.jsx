// import React from "react";
// import backgroundImage from "/src/assets/Optimize Image/Brochure1-ezgif.com-png-to-webp-converter.webp";

// const BrochureCard = () => {
//   return (
//     <div
//       className="relative w-full h-[470px] bg-cover bg-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       {/* Card */}
//       <div
//         className="absolute bg-white/80 p-14 rounded-md shadow-lg"
//         style={{
//           left: "149px",
//           right: "842px",
//           top: "72.5px",
//           bottom: "72.5px",
//           width: "449px",
//           height: "325px",
//         }}
//       >
//         {/* Heading */}
//         <h2 className="text-2xl md:text-3xl font-bold">
//           <span className="text-[#393939]">Download Our </span>
//           <span className="text-[#E2761B]">Brochure</span>
//         </h2>

//         {/* Lorem Text */}
//         <p className="mt-4 text-[#4B4B4B]">
//           Get detailed insights into our products, designs and special features.
//         </p>

//         {/* Download Button */}
//         <button className="mt-6 bg-[#E2761B] text-white py-2 px-6 rounded btn-animation">
//           Download
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BrochureCard;

import React from "react";
import backgroundImage from "/src/assets/Optimize Image/Brochure1-ezgif.com-png-to-webp-converter.webp";
import MobileBackgroundImage from "/src/assets/Brochure Mobile.png";
import { Link } from "react-router-dom";
import brochurePDF from "/src/assets/Brochure pdf/Saket Enterprises_Brochure.pdf";

const BrochureCard = () => {
  return (
    <div
      className="relative w-full h-[470px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${
          window.innerWidth < 768 ? MobileBackgroundImage : backgroundImage
        })`,
      }}
    >
      {/* Card */}
      <div
        className="absolute bg-white/80 p-8 md:p-14 rounded-md shadow-lg md:top-[10%] md:left-[5%] md:right-[5%] md:max-w-[450px] md:h-auto left-[30px] right-[30px] top-[100px]"
        // style={{
        //   top: "10%",
        //   left: "5%",
        //   right: "5%",
        //   maxWidth: "450px",
        //   height: "auto",
        // }}
      >
        {/* Heading */}
        <h2 className="text-[33px] md:text-[37px] leading-10 font-bold">
          <span className="text-[#393939]">Download Our </span>
          <span className="text-[#E2761B]">Brochure</span>
        </h2>

        {/* Lorem Text */}
        <p className="mt-4 text-sm md:text-base font-medium text-[#4B4B4B]">
          Get detailed insights into our products, designs, and special
          features.
        </p>

        {/* Download Button */}
        <Link
          to={brochurePDF}
          download="Saket Enterprises_Brochure.pdf"
          target="blank"
        >
          <button className="mt-6 bg-[#E2761B] text-white py-2 px-4 md:px-6 lg:px-8 rounded btn-animation">
            Download
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BrochureCard;

// import React, { useEffect } from "react";
// import { Parallax } from "react-parallax"; // Import Parallax
// import backgroundImage from "/src/assets/Optimize Image/Brochure1-ezgif.com-png-to-webp-converter.webp";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const BrochureCard = () => {
//   useEffect(() => {
//     AOS.init({ duration: 2000 });
//   }, []);
//   return (
//     <Parallax
//       bgImage={backgroundImage}
//       strength={50} // Control parallax intensity
//       // bgImageStyle={{
//       //   minHeight: "130%",
//       //   minWidth: "100%",
//       // }}
//       className="w-full h-[470px]"
//     >
//       <div className="relative">
//         {/* Card */}
//         <div
//           data-aos="flip-right"
//           className="absolute"
//           style={{
//             left: "149px",
//             right: "842px",
//             top: "72.5px",
//             bottom: "72.5px",
//           }}
//         >
//           <div className="bg-white/80 pt-[57.5px] pr-[53px] pb-[58.5px] pl-[54px] rounded-lg shadow-lg">
//             <div className="max-w-[342px]">
//               {/* Heading */}
//               <h2 className="text-2xl text-[#393939] md:text-[37px] font-bold leading-10">
//                 Download Our <span className="text-[#E2761B]">Brochure</span>
//               </h2>
//               {/* Lorem Text */}
//               <p className="mt-2 text-[#4B4B4B] open-sans text-base font-medium leading-6">
//                 Get detailed insights into our products, designs and special
//                 features.
//               </p>
//             </div>

//             {/* Download Button */}
//             <button className="mt-[30px] bg-[#E2761B] text-white py-2 px-6 rounded btn-animation ">
//               Download
//             </button>
//           </div>
//         </div>
//       </div>
//     </Parallax>
//   );
// };

// export default BrochureCard;

// import React from "react";
// import backgroundImage from "/src/assets/Brochure.png";

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

import React, { useEffect } from "react";
import { Parallax } from "react-parallax"; // Import Parallax
import backgroundImage from "/src/assets/Brochure.png";
import AOS from "aos";
import "aos/dist/aos.css";

const BrochureCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Parallax
      bgImage={backgroundImage}
      strength={300} // Control parallax intensity
      bgImageStyle={{
        minHeight: "130%", // Ensure background covers the entire height
        minWidth: "100%", // Ensure background covers the width
      }}
      className="w-full h-[470px]"
    >
      <div className="relative">
        {/* Card */}
        <div
          data-aos="flip-right"
          className="absolute"
          style={{
            left: "149px",
            right: "842px",
            top: "72.5px",
            bottom: "72.5px",
          }}
        >
          <div className="bg-white/80 pt-[57.5px] pr-[53px] pb-[58.5px] pl-[54px] rounded-lg shadow-lg">
            <div className="max-w-[342px]">
              {/* Heading */}
              <h2 className="text-2xl text-[#393939] md:text-[37px] font-bold leading-10">
                Download Our <span className="text-[#E2761B]">Brochure</span>
              </h2>
              {/* Lorem Text */}
              <p className="mt-2 text-[#4B4B4B] open-sans text-base font-medium leading-6">
                Get detailed insights into our products, designs and special
                features.
              </p>
            </div>

            {/* Download Button */}
            <button className="mt-[30px] bg-[#E2761B] text-white py-2 px-6 rounded btn-animation ">
              Download
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default BrochureCard;

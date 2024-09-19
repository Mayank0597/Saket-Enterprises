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

import React from "react";
import { Parallax } from "react-parallax"; // Import Parallax
import backgroundImage from "/src/assets/Brochure.png";

const BrochureCard = () => {
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
      <div className="relative w-full h-full flex justify-center items-center">
        {/* Card */}
        <div
          className="absolute bg-white/80 p-14 rounded-md shadow-lg"
          style={{
            left: "149px",
            right: "842px",
            top: "72.5px",
            bottom: "72.5px",
            width: "449px",
            height: "325px",
          }}
        >
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-[#393939]">Download Our </span>
            <span className="text-[#E2761B]">Brochure</span>
          </h2>

          {/* Lorem Text */}
          <p className="mt-4 text-[#4B4B4B]">
            Get detailed insights into our products, designs and special
            features.
          </p>

          {/* Download Button */}
          <button className="mt-6 bg-[#E2761B] text-white py-2 px-6 rounded btn-animation">
            Download
          </button>
        </div>
      </div>
    </Parallax>
  );
};

export default BrochureCard;
// import React from "react";
// import backgroundImage from "/src/assets/Frame 1863.png";

// const AboutUsPageComp3 = () => {
//   return (
//     <div className="relative w-full h-[506px]">
//       {/* Full-width background image */}
//       <img
//         src={backgroundImage}
//         alt="Background"
//         className="w-full h-full object-cover"
//       />

//       {/* Overlaid sections */}
//       <div className="absolute inset-0 flex flex-col lg:flex-row justify-center items-center w-full h-full text-white px-6 lg:px-20">
//         {/* Section Container */}
//         <div className="flex flex-col lg:flex-row w-full max-w-screen-lg">
//           {/* Section 1 */}
//           <div className="flex-1 flex flex-col justify-center items-center text-center px-4 lg:px-4 py-6 lg:py-0">
//             <h2 className="text-xl lg:text-4xl font-bold mb-4">Our <span className='text-[#E2761B]'>Mission</span></h2>
//             <p className="text-sm lg:text-base text-justify">
//             Our mission is to create Exquisite and Handcrafted furniture that enhances the beauty and comfort of the living spaces in your homes.
//             </p>
//           </div>

//           {/* Vertical Line */}
//           <div className="hidden lg:block w-[1px] h-full bg-gray-400"></div>

//           {/* Section 2 */}
//           <div className="flex-1 flex flex-col justify-center items-center text-center px-4 lg:px-4 py-6 lg:py-0">
//             <h2 className="text-xl lg:text-4xl font-bold mb-4">Our <span className='text-[#E2761B]'>Vision</span></h2>
//             <p className="text-sm lg:text-base text-justify">
//             Our mission is to create Exquisite and Handcrafted furniture that enhances the beauty and comfort of the living spaces in your homes.
//             </p>
//           </div>

//           {/* Vertical Line */}
//           <div className="hidden lg:block w-[1px] h-full bg-gray-400"></div>

//           {/* Section 3 */}
//           <div className="flex-1 flex flex-col justify-center items-center text-center px-4 lg:px-4 py-6 lg:py-0">
//             <h2 className="text-xl lg:text-4xl font-bold mb-4">Our <span className='text-[#E2761B]'>Values</span></h2>
//             <p className="text-sm lg:text-base text-justify">
//             Our mission is to create Exquisite and Handcrafted furniture that enhances the beauty and comfort of the living spaces in your homes.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsPageComp3;

import React from "react";
import backgroundImage from "/src/assets/Frame 1863 (1).png";
import { Parallax } from "react-parallax";

const AboutUsPageComp3 = () => {
  return (
    <Parallax
      bgImage={backgroundImage}
      strength={300}
      bgImageStyle={{
        minHeight: "100%",
        minWidth: "100%",
        
      }}
    >
      <div className="relative w-full h-[506px]">
        {/* Full-width background image */}
        {/* <img src={backgroundImage} alt="Background" className="w-full h-full" /> */}

        {/* Overlaid sections */}
        <div className="absolute top-0 flex items-center h-full justify-center w-full text-white px-6 lg:px-20">
          {/* Section Container */}
          <div className="flex flex-wrap justify-between w-full items-center">
            {/* Section 1 */}
            <div className="flex flex-col justify-center items-start px-4 lg:px-4 py-6 lg:py-0 max-w-[337px] ">
              <h2 className="text-xl lg:text-4xl font-bold mb-4">
                Our <span className="text-[#E2761B]">Mission</span>
              </h2>
              <p className="text-sm lg:text-lg text-justify open-sans font-medium">
                Our mission is to create Exquisite and Handcrafted furniture
                that enhances the beauty and comfort of the living spaces in
                your homes.
              </p>
            </div>

            {/* Vertical Line */}
            <div className="hidden lg:block w-[1px] h-[80px] bg-[#9A9999]"></div>

            {/* Section 2 */}
            <div className="flex flex-col justify-center items-start px-4 lg:px-4 pl-4 pr-4 py-6 lg:py-0 max-w-[337px] ">
              <h2 className="text-xl lg:text-4xl font-bold mb-4">
                Our <span className="text-[#E2761B]">Vision</span>
              </h2>
              <p className="text-sm lg:text-lg text-justify open-sans font-medium">
                Our mission is to create Exquisite and Handcrafted furniture
                that enhances the beauty and comfort of the living spaces in
                your homes.
              </p>
            </div>

            {/* Vertical Line */}
            <div className="hidden lg:block w-[1px] h-[80px] bg-[#9A9999]"></div>

            {/* Section 3 */}
            <div className="flex flex-col justify-center items-start px-4 lg:px-4 pl-4 py-6 lg:py-0 max-w-[337px] ">
              <h2 className="text-xl lg:text-4xl font-bold mb-4">
                Our <span className="text-[#E2761B]">Values</span>
              </h2>
              <p className="text-sm lg:text-lg text-justify open-sans font-medium">
                Our mission is to create Exquisite and Handcrafted furniture
                that enhances the beauty and comfort of the living spaces in
                your homes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default AboutUsPageComp3;

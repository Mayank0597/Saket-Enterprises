// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import rectangleImage from "/src/assets/Frame 23.png";
// import overlappingMobileImage from "/src/assets/Optimize Image/Frame5321-ezgif.com-png-to-webp-converter.webp";

// const ServicePageMobile = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);
//   return (
//     <div className="relative w-full flex flex-col md:flex-row items-start mb-[80px]">
//       <div className="flex flex-wrap">
//         {/* Left-side images */}
//         <div className="relative" data-aos="fade-right">
//           {/* Grey Rectangle Image */}

//           <img
//             src={rectangleImage}
//             alt="Rectangle"
//             className="md:w-[358px] w-1/2 h-auto"
//           />

//           {/* Overlapping Image */}
//           <img
//             src={overlappingMobileImage}
//             alt="Overlapping Image"
//             className="absolute left-1/2 top-1/2 transform -translate-y-1/2  -translate-x-1/2 w-[70%] h-auto z-10"
//           />
//         </div>

//         {/* Right-side Content */}
//         <div className="flex flex-col justify-center text-justify px-[31px]">
//           {/* Heading */}
//           <h2 className="text-[33px] font-semibold text-left text-[#393939] mt-[30px] mb-2">
//             Plywood
//           </h2>

//           {/* Description */}
//           <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
//             Our plywood collection is known for its strength, durability, and
//             versatile application. Whether you're working on a construction
//             project or designing custom furniture, our plywood is made from
//             premium quality wood, offering a strong foundation for your
//             creations. Its resistance to bending makes it ideal for both indoor
//             and outdoor use. Additionally, we offer a variety of thicknesses to
//             cater to different needs, ensuring you always find the right fit for
//             your project.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicePageMobile;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import rectangleImage from "/src/assets/Frame 23.png";
import overlappingMobileImage1 from "/src/assets/Optimize Image/Frame5321-ezgif.com-png-to-webp-converter.webp";
import overlappingMobileImage2 from "/src/assets/Optimize Image/Frame5322-ezgif.com-png-to-webp-converter.webp";
import overlappingMobileImage3 from "/src/assets/Optimize Image/close-up-details-wood-surface111-ezgif.com-png-to-webp-converter.webp";
import overlappingMobileImage4 from "/src/assets/Optimize Image/Frame5323-ezgif.com-png-to-webp-converter.webp";
import overlappingMobileImage5 from "/src/assets/Optimize Image/Flush-Door-1080x600110-ezgif.com-png-to-webp-converter.webp";
import overlappingMobileImage6 from "/src/assets/Optimize Image/Frame5324-ezgif.com-png-to-webp-converter.webp";
import overlappingMobileImage7 from "/src/assets/Optimize Image/Flush-Door-1080x600111-ezgif.com-png-to-webp-converter.webp";
import overlappingMobileImage8 from "/src/assets/Optimize Image/Frame5325-ezgif.com-png-to-webp-converter.webp";
import overlappingMobileImage9 from "/src/assets/Optimize Image/Flush-Door-1080x6002-ezgif.com-png-to-webp-converter.webp";
import overlappingMobileImage10 from "/src/assets/Optimize Image/Frame5326-ezgif.com-png-to-webp-converter.webp";
import overlappingMobileImage11 from "/src/assets/Optimize Image/Flush-Door-1080x60021-ezgif.com-png-to-webp-converter.webp";
import overlappingMobileImage12 from "/src/assets/Optimize Image/Frame5327-ezgif.com-png-to-webp-converter.webp";
import overlappingMobileImage13 from "/src/assets/Optimize Image/Flush-Door-1080x60022-ezgif.com-png-to-webp-converter.webp";
import overlappingMobileImage14 from "/src/assets/Optimize Image/Frame5328-ezgif.com-png-to-webp-converter.webp";

const ServicePageMobile = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row items-start mb-[80px]">
      {/* Section 1 */}
      <div className="flex flex-wrap">
        {/* Left-side images */}
        <div className="relative" data-aos="fade-right">
          {/* Grey Rectangle Image */}
          <img
            src={rectangleImage}
            alt="Rectangle"
            className="md:w-[358px] w-1/2 h-auto"
          />

          {/* Overlapping Image */}
          <img
            src={overlappingMobileImage1}
            alt="Overlapping Image"
            className="absolute left-1/2 top-1/2 transform -translate-y-1/2  -translate-x-1/2 w-[70%] h-auto z-10"
          />
        </div>

        {/* Right-side Content */}
        <div className="flex flex-col justify-center text-justify px-[31px]">
          {/* Heading */}
          <h2 className="text-[33px] font-semibold text-left text-[#393939] mt-[30px] mb-2">
            Plywood
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            Our plywood collection is known for its strength, durability, and
            versatile application. Whether you're working on a construction
            project or designing custom furniture, our plywood is made from
            premium quality wood, offering a strong foundation for your
            creations. Its resistance to bending makes it ideal for both indoor
            and outdoor use. Additionally, we offer a variety of thicknesses to
            cater to different needs, ensuring you always find the right fit for
            your project.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-wrap mt-[320px]">
        {/* Right-side images */}
        <div
          className="relative w-full"
          // data-aos="fade-left"
        >
          {/* Grey Rectangle Image on the right side */}
          <img
            src={rectangleImage}
            alt="Rectangle"
            className="absolute w-1/2 top-0 transform -translate-y-1/2 right-0 z-10"
          />

          {/* Overlapping Image in the same position */}
          <img
            src={overlappingMobileImage2}
            alt="Overlapping Image"
            className="absolute left-1/2 top-1/2 transform -translate-y-1/2  -translate-x-1/2 w-[70%] h-auto z-20"
          />
        </div>

        {/* Left-side Content */}
        <div className="flex flex-col justify-center text-justify px-[31px] mt-64">
          {/* Heading */}
          <h2 className="text-[33px] font-semibold text-left text-[#393939] mt-[30px] mb-2">
            Mica
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            We offer a wide range of mica sheets that add a polished finish to
            your surfaces. Their heat resistance and durability make them a top
            choice for kitchen countertops, furniture tops, and other high-use
            areas. Explore our collection to add a refined, contemporary touch
            to your spaces. Our mica sheets are versatile and easy to install,
            making them a popular choice for both residential and commercial
            interiors.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-wrap mt-[80px]">
        {/* Left-side images */}
        <div className="relative" data-aos="fade-right">
          {/* Grey Rectangle Image */}
          <img
            src={rectangleImage}
            alt="Rectangle"
            className="md:w-[358px] w-1/2 h-auto"
          />

          {/* Overlapping Image */}
          <img
            src={overlappingMobileImage3}
            alt="Overlapping Image"
            className="absolute left-1/2 top-1/2 transform -translate-y-1/2  -translate-x-1/2 w-[70%] h-auto z-10"
          />
        </div>

        {/* Right-side Content */}
        <div className="flex flex-col justify-center text-justify px-[31px]">
          {/* Heading */}
          <h2 className="text-[33px] font-semibold text-left text-[#393939] mt-[30px] mb-2">
          Veneer Plywood
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
          Our veneer plywood combines the durability of plywood with the natural beauty of wood veneers. It's an ideal choice for those looking to achieve a luxurious wood finish without compromising strength and stability. The wide variety of veneers we offer allows you to choose from an array of wood grains and finishes, making it easy to match your specific design preferences. Whether used for cabinets, walls, or furniture, veneer plywood brings elegance to any room.

          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-wrap mt-[320px]">
        {/* Right-side images */}
        <div
          className="relative w-full"
          // data-aos="fade-left"
        >
          {/* Grey Rectangle Image on the right side */}
          <img
            src={rectangleImage}
            alt="Rectangle"
            className="absolute w-1/2 top-0 transform -translate-y-1/2 right-0 z-10"
          />

          {/* Overlapping Image in the same position */}
          <img
            src={overlappingMobileImage4}
            alt="Overlapping Image"
            className="absolute left-1/2 top-1/2 transform -translate-y-1/2  -translate-x-1/2 w-[70%] h-auto z-20"
          />
        </div>

        {/* Left-side Content */}
        <div className="flex flex-col justify-center text-justify px-[31px] mt-64">
          {/* Heading */}
          <h2 className="text-[33px] font-semibold text-left text-[#393939] mt-[30px] mb-2">
            Mica
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            We offer a wide range of mica sheets that add a polished finish to
            your surfaces. Their heat resistance and durability make them a top
            choice for kitchen countertops, furniture tops, and other high-use
            areas. Explore our collection to add a refined, contemporary touch
            to your spaces. Our mica sheets are versatile and easy to install,
            making them a popular choice for both residential and commercial
            interiors.
          </p>
        </div>
      </div>

      {/* Section 5 */}
      <div className="flex flex-wrap mt-[80px]">
        {/* Left-side images */}
        <div className="relative" data-aos="fade-right">
          {/* Grey Rectangle Image */}
          <img
            src={rectangleImage}
            alt="Rectangle"
            className="md:w-[358px] w-1/2 h-auto"
          />

          {/* Overlapping Image */}
          <img
            src={overlappingMobileImage5}
            alt="Overlapping Image"
            className="absolute left-1/2 top-1/2 transform -translate-y-1/2  -translate-x-1/2 w-[70%] h-auto z-10"
          />
        </div>

        {/* Right-side Content */}
        <div className="flex flex-col justify-center text-justify px-[31px]">
          {/* Heading */}
          <h2 className="text-[33px] font-semibold text-left text-[#393939] mt-[30px] mb-2">
            Plywood
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            Our plywood collection is known for its strength, durability, and
            versatile application. Whether you're working on a construction
            project or designing custom furniture, our plywood is made from
            premium quality wood, offering a strong foundation for your
            creations. Its resistance to bending makes it ideal for both indoor
            and outdoor use. Additionally, we offer a variety of thicknesses to
            cater to different needs, ensuring you always find the right fit for
            your project.
          </p>
        </div>
      </div>

      {/* Section 6 */}
      <div className="flex flex-wrap mt-[320px]">
        {/* Right-side images */}
        <div
          className="relative w-full"
          // data-aos="fade-left"
        >
          {/* Grey Rectangle Image on the right side */}
          <img
            src={rectangleImage}
            alt="Rectangle"
            className="absolute w-1/2 top-0 transform -translate-y-1/2 right-0 z-10"
          />

          {/* Overlapping Image in the same position */}
          <img
            src={overlappingMobileImage6}
            alt="Overlapping Image"
            className="absolute left-1/2 top-1/2 transform -translate-y-1/2  -translate-x-1/2 w-[70%] h-auto z-20"
          />
        </div>

        {/* Left-side Content */}
        <div className="flex flex-col justify-center text-justify px-[31px] mt-64">
          {/* Heading */}
          <h2 className="text-[33px] font-semibold text-left text-[#393939] mt-[30px] mb-2">
            Mica
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            We offer a wide range of mica sheets that add a polished finish to
            your surfaces. Their heat resistance and durability make them a top
            choice for kitchen countertops, furniture tops, and other high-use
            areas. Explore our collection to add a refined, contemporary touch
            to your spaces. Our mica sheets are versatile and easy to install,
            making them a popular choice for both residential and commercial
            interiors.
          </p>
        </div>
      </div>

      {/* Section 7 */}
      <div className="flex flex-wrap mt-[80px]">
        {/* Left-side images */}
        <div className="relative" data-aos="fade-right">
          {/* Grey Rectangle Image */}
          <img
            src={rectangleImage}
            alt="Rectangle"
            className="md:w-[358px] w-1/2 h-auto"
          />

          {/* Overlapping Image */}
          <img
            src={overlappingMobileImage7}
            alt="Overlapping Image"
            className="absolute left-1/2 top-1/2 transform -translate-y-1/2  -translate-x-1/2 w-[70%] h-auto z-10"
          />
        </div>

        {/* Right-side Content */}
        <div className="flex flex-col justify-center text-justify px-[31px]">
          {/* Heading */}
          <h2 className="text-[33px] font-semibold text-left text-[#393939] mt-[30px] mb-2">
            Plywood
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            Our plywood collection is known for its strength, durability, and
            versatile application. Whether you're working on a construction
            project or designing custom furniture, our plywood is made from
            premium quality wood, offering a strong foundation for your
            creations. Its resistance to bending makes it ideal for both indoor
            and outdoor use. Additionally, we offer a variety of thicknesses to
            cater to different needs, ensuring you always find the right fit for
            your project.
          </p>
        </div>
      </div>

      {/* Section 8 */}
      <div className="flex flex-wrap mt-[320px]">
        {/* Right-side images */}
        <div
          className="relative w-full"
          // data-aos="fade-left"
        >
          {/* Grey Rectangle Image on the right side */}
          <img
            src={rectangleImage}
            alt="Rectangle"
            className="absolute w-1/2 top-0 transform -translate-y-1/2 right-0 z-10"
          />

          {/* Overlapping Image in the same position */}
          <img
            src={overlappingMobileImage8}
            alt="Overlapping Image"
            className="absolute left-1/2 top-1/2 transform -translate-y-1/2  -translate-x-1/2 w-[70%] h-auto z-20"
          />
        </div>

        {/* Left-side Content */}
        <div className="flex flex-col justify-center text-justify px-[31px] mt-64">
          {/* Heading */}
          <h2 className="text-[33px] font-semibold text-left text-[#393939] mt-[30px] mb-2">
            Mica
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            We offer a wide range of mica sheets that add a polished finish to
            your surfaces. Their heat resistance and durability make them a top
            choice for kitchen countertops, furniture tops, and other high-use
            areas. Explore our collection to add a refined, contemporary touch
            to your spaces. Our mica sheets are versatile and easy to install,
            making them a popular choice for both residential and commercial
            interiors.
          </p>
        </div>
      </div>

      {/* Section 9 */}
      <div className="flex flex-wrap mt-[80px]">
        {/* Left-side images */}
        <div className="relative" data-aos="fade-right">
          {/* Grey Rectangle Image */}
          <img
            src={rectangleImage}
            alt="Rectangle"
            className="md:w-[358px] w-1/2 h-auto"
          />

          {/* Overlapping Image */}
          <img
            src={overlappingMobileImage9}
            alt="Overlapping Image"
            className="absolute left-1/2 top-1/2 transform -translate-y-1/2  -translate-x-1/2 w-[70%] h-auto z-10"
          />
        </div>

        {/* Right-side Content */}
        <div className="flex flex-col justify-center text-justify px-[31px]">
          {/* Heading */}
          <h2 className="text-[33px] font-semibold text-left text-[#393939] mt-[30px] mb-2">
            Plywood
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            Our plywood collection is known for its strength, durability, and
            versatile application. Whether you're working on a construction
            project or designing custom furniture, our plywood is made from
            premium quality wood, offering a strong foundation for your
            creations. Its resistance to bending makes it ideal for both indoor
            and outdoor use. Additionally, we offer a variety of thicknesses to
            cater to different needs, ensuring you always find the right fit for
            your project.
          </p>
        </div>
      </div>

      {/* Section 10 */}
      <div className="flex flex-wrap mt-[320px]">
        {/* Right-side images */}
        <div
          className="relative w-full"
          // data-aos="fade-left"
        >
          {/* Grey Rectangle Image on the right side */}
          <img
            src={rectangleImage}
            alt="Rectangle"
            className="absolute w-1/2 top-0 transform -translate-y-1/2 right-0 z-10"
          />

          {/* Overlapping Image in the same position */}
          <img
            src={overlappingMobileImage10}
            alt="Overlapping Image"
            className="absolute left-1/2 top-1/2 transform -translate-y-1/2  -translate-x-1/2 w-[70%] h-auto z-20"
          />
        </div>

        {/* Left-side Content */}
        <div className="flex flex-col justify-center text-justify px-[31px] mt-64">
          {/* Heading */}
          <h2 className="text-[33px] font-semibold text-left text-[#393939] mt-[30px] mb-2">
            Mica
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            We offer a wide range of mica sheets that add a polished finish to
            your surfaces. Their heat resistance and durability make them a top
            choice for kitchen countertops, furniture tops, and other high-use
            areas. Explore our collection to add a refined, contemporary touch
            to your spaces. Our mica sheets are versatile and easy to install,
            making them a popular choice for both residential and commercial
            interiors.
          </p>
        </div>
      </div>

      {/* Section 11 */}
      <div className="flex flex-wrap mt-[80px]">
        {/* Left-side images */}
        <div className="relative" data-aos="fade-right">
          {/* Grey Rectangle Image */}
          <img
            src={rectangleImage}
            alt="Rectangle"
            className="md:w-[358px] w-1/2 h-auto"
          />

          {/* Overlapping Image */}
          <img
            src={overlappingMobileImage11}
            alt="Overlapping Image"
            className="absolute left-1/2 top-1/2 transform -translate-y-1/2  -translate-x-1/2 w-[70%] h-auto z-10"
          />
        </div>

        {/* Right-side Content */}
        <div className="flex flex-col justify-center text-justify px-[31px]">
          {/* Heading */}
          <h2 className="text-[33px] font-semibold text-left text-[#393939] mt-[30px] mb-2">
            Plywood
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            Our plywood collection is known for its strength, durability, and
            versatile application. Whether you're working on a construction
            project or designing custom furniture, our plywood is made from
            premium quality wood, offering a strong foundation for your
            creations. Its resistance to bending makes it ideal for both indoor
            and outdoor use. Additionally, we offer a variety of thicknesses to
            cater to different needs, ensuring you always find the right fit for
            your project.
          </p>
        </div>
      </div>

      {/* Section 12 */}
      <div className="flex flex-wrap mt-[320px]">
        {/* Right-side images */}
        <div
          className="relative w-full"
          // data-aos="fade-left"
        >
          {/* Grey Rectangle Image on the right side */}
          <img
            src={rectangleImage}
            alt="Rectangle"
            className="absolute w-1/2 top-0 transform -translate-y-1/2 right-0 z-10"
          />

          {/* Overlapping Image in the same position */}
          <img
            src={overlappingMobileImage12}
            alt="Overlapping Image"
            className="absolute left-1/2 top-1/2 transform -translate-y-1/2  -translate-x-1/2 w-[70%] h-auto z-20"
          />
        </div>

        {/* Left-side Content */}
        <div className="flex flex-col justify-center text-justify px-[31px] mt-64">
          {/* Heading */}
          <h2 className="text-[33px] font-semibold text-left text-[#393939] mt-[30px] mb-2">
            Mica
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            We offer a wide range of mica sheets that add a polished finish to
            your surfaces. Their heat resistance and durability make them a top
            choice for kitchen countertops, furniture tops, and other high-use
            areas. Explore our collection to add a refined, contemporary touch
            to your spaces. Our mica sheets are versatile and easy to install,
            making them a popular choice for both residential and commercial
            interiors.
          </p>
        </div>
      </div>

      {/* Section 13 */}
      <div className="flex flex-wrap mt-[80px]">
        {/* Left-side images */}
        <div className="relative" data-aos="fade-right">
          {/* Grey Rectangle Image */}
          <img
            src={rectangleImage}
            alt="Rectangle"
            className="md:w-[358px] w-1/2 h-auto"
          />

          {/* Overlapping Image */}
          <img
            src={overlappingMobileImage13}
            alt="Overlapping Image"
            className="absolute left-1/2 top-1/2 transform -translate-y-1/2  -translate-x-1/2 w-[70%] h-auto z-10"
          />
        </div>

        {/* Right-side Content */}
        <div className="flex flex-col justify-center text-justify px-[31px]">
          {/* Heading */}
          <h2 className="text-[33px] font-semibold text-left text-[#393939] mt-[30px] mb-2">
            Plywood
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            Our plywood collection is known for its strength, durability, and
            versatile application. Whether you're working on a construction
            project or designing custom furniture, our plywood is made from
            premium quality wood, offering a strong foundation for your
            creations. Its resistance to bending makes it ideal for both indoor
            and outdoor use. Additionally, we offer a variety of thicknesses to
            cater to different needs, ensuring you always find the right fit for
            your project.
          </p>
        </div>
      </div>

      {/* Section 14 */}
      <div className="flex flex-wrap mt-[320px]">
        {/* Right-side images */}
        <div
          className="relative w-full"
          // data-aos="fade-left"
        >
          {/* Grey Rectangle Image on the right side */}
          <img
            src={rectangleImage}
            alt="Rectangle"
            className="absolute w-1/2 top-0 transform -translate-y-1/2 right-0 z-10"
          />

          {/* Overlapping Image in the same position */}
          <img
            src={overlappingMobileImage14}
            alt="Overlapping Image"
            className="absolute left-1/2 top-1/2 transform -translate-y-1/2  -translate-x-1/2 w-[70%] h-auto z-20"
          />
        </div>

        {/* Left-side Content */}
        <div className="flex flex-col justify-center text-justify px-[31px] mt-64">
          {/* Heading */}
          <h2 className="text-[33px] font-semibold text-left text-[#393939] mt-[30px] mb-2">
            Mica
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            We offer a wide range of mica sheets that add a polished finish to
            your surfaces. Their heat resistance and durability make them a top
            choice for kitchen countertops, furniture tops, and other high-use
            areas. Explore our collection to add a refined, contemporary touch
            to your spaces. Our mica sheets are versatile and easy to install,
            making them a popular choice for both residential and commercial
            interiors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePageMobile;

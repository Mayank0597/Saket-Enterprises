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
            Our veneer plywood combines the durability of plywood with the
            natural beauty of wood veneers. It's an ideal choice for those
            looking to achieve a luxurious wood finish without compromising
            strength and stability. The wide variety of veneers we offer allows
            you to choose from an array of wood grains and finishes, making it
            easy to match your specific design preferences. Whether used for
            cabinets, walls, or furniture, veneer plywood brings elegance to any
            room.
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
            MDF Boards
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            Medium Density Fiberboard (MDF) boards from Saket Enterprises are
            crafted precisely to provide a smooth surface for painting or
            veneering. They are a cost-effective and a great solution for
            cabinetry, and interior design projects. Their dense composition
            ensures resistance making them an excellent choice for detailed
            carpentry. Additionally, our MDF boards are highly customizable,
            allowing you to cut, shape, and carve intricate designs with ease.
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
            Flush Doors/Peak Doors
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            We offer high-quality flush boards that are perfect for creating
            smooth and seamless doors and partitions. Our boards are engineered
            for durability and a sleek appearance. These boards are perfect for
            both residential and commercial applications and are available in
            various finishes to match your design needs.Whether you're looking
            to enhance the aesthetics of your home or create functional spaces
            in an office, our flush boards provide the versatility and elegance
            required for any project.
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
            Architectural Hardwares
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            Our range of hardware products includes everything you need to
            complete your furniture and cabinetry projects. From hinges to
            handles, we provide durable and reliable hardware that ensures
            functionality and longevity.  Whether you need modern minimalist
            designs or traditional craftsmanship, we provide reliable, durable
            solutions that stand the test of time. Each product is crafted with
            precision, guaranteeing an aesthetic appeal and superior
            performance.
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
            Sawn Woods
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            At Saket Enterprises, we source the finest raw woods for all your
            carpentry and woodworking needs. Whether you're crafting furniture
            or creating art pieces, our selection of raw woods offers the
            perfect starting material for your projects. Available in various
            types and cuts, they provide a perfect base for both functional and
            decorative woodworking projects.With our diverse inventory, you can
            find the ideal match for your design vision, making every project a
            true reflection of your craftsmanship.
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
            Wooden Furniture
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            Our wooden furniture collection is crafted with precision and care,
            offering a blend of traditional craftsmanship and modern design.
            Each piece is made from high-quality wood, ensuring durability and
            elegance for your home or office. Our wooden furniture collection is
            a perfect blend of craftsmanship, quality, and design. Every piece
            is crafted using high-grade wood, ensuring longevity and an elegant
            finish.
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
            Wooden Artefacts
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            Explore our unique collection of wooden artefacts that bring a touch
            of artistry and culture to your space. Each artefact is meticulously
            handcrafted, showcasing the rich heritage and craftsmanship that
            goes into every piece. These artefacts are perfect for enhancing the
            aesthetic of your space. At Saket Enterprises, our collection ranges
            from intricate carvings to contemporary sculptures, making them a
            unique addition to your home or office decor.
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
            Laminates
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            Enhance the beauty and durability of your furniture with our premium
            quality laminates. Available in a variety of colours, textures, and
            finishes, our laminates are perfect for adding a stylish and
            protective layer to your spaces.  They are easy to maintain,
            stylish, and provide protective layers that can transform any space
            with minimal effort.Transform any space effortlessly with our
            versatile laminates, designed to meet your design aspirations while
            standing the test of time.
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
            Adhesive
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            Our range of high-strength adhesives ensures a seamless bonding
            experience for all your furniture and construction needs. Whether
            you are working with wood, metal, glass, or plastic, they are
            suitable for a variety of materials. Our adhesives guarantee
            durability and reliability in every project. They are a trusted
            choice for professionals.
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
            Decorative Items
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            Add a touch of elegance to your home with our collection of
            decorative items. From unique artefacts to modern decor pieces, we
            offer a variety that suits every taste and style, making your spaces
            truly stand out. Whether you're looking to elevate your living room
            or add a unique touch to your office, our decorative items are
            designed to bring style and individuality to any setting.
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
            Windows
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            Discover our durable and stylish windows, designed to provide
            optimal ventilation and natural light while enhancing the aesthetic
            appeal of your home. Crafted from quality materials, our windows
            ensure security and longevity. With optimal ventilation and light in
            mind, our windows are designed to enhance energy efficiency while
            adding value to your property.
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
            Shuttering Plywood
          </h2>

          {/* Description */}
          <p className="text-[13px] open-sans font-medium text-[#9F9F9F] ">
            Our shuttering plywood is known for its strength and resistance to
            water, making it ideal for construction and building purposes. It
            provides a solid foundation and is perfect for use in building
            frameworks, ensuring stability and durability everywhere. With a
            high load-bearing capacity and resistance to weather conditions,
            it's the go-to choice for ensuring a reliable foundation in
            construction projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePageMobile;

import React from "react";

import image1 from "/src/assets/Optimize Image/Frame5312-ezgif.com-optiwebp.webp";
import image2 from "/src/assets/Optimize Image/Frame5313-ezgif.com-optiwebp.webp";
import image3 from "/src/assets/Optimize Image/close-up-details-wood-surface14-ezgif.com-png-to-webp-converter.webp";
import image4 from "/src/assets/Optimize Image/Frame5314-ezgif.com-png-to-webp-converter.webp";
import image5 from "/src/assets/Optimize Image/Flush-Door-1080x60015-ezgif.com-optiwebp.webp";
import image6 from "/src/assets/Optimize Image/Frame5315-ezgif.com-png-to-webp-converter.webp";
import image7 from "/src/assets/Optimize Image/Flush-Door-1080x60016-ezgif.com-optiwebp.webp";
import image8 from "/src/assets/Optimize Image/Frame5316-ezgif.com-optiwebp.webp";
import image9 from "/src/assets/Optimize Image/Flush-Door-1080x60017-ezgif.com-optiwebp.webp";
import image10 from "/src/assets/Optimize Image/Frame5317-ezgif.com-optiwebp.webp";
import image11 from "/src/assets/Optimize Image/Flush-Door-1080x60018-ezgif.com-optiwebp.webp";
import image12 from "/src/assets/Optimize Image/Frame5318-ezgif.com-optiwebp.webp";
import image13 from "/src/assets/Optimize Image/Flush-Door-1080x60019-ezgif.com-png-to-webp-converter.webp";
import image14 from "/src/assets/Optimize Image/Frame5319-ezgif.com-png-to-webp-converter.webp";
import bgImage1 from "/src/assets/material-symbols-light_dresser-outline (2).png";
import bgImage2 from "/src/assets/map_furniture-store (3).png";
import bgImage3 from "/src/assets/Group.png";
import bgImage4 from "/src/assets/iconoir_sofa (3).png";
import bgImage5 from "/src/assets/mynaui_lamp (2).png";

const ServicePage = () => {
  const Section = ({ imageSrc, heading, paragraph, imageOnLeft }) => {
    return (
      <div className="flex flex-col lg:flex-row px-4 lg:px-0 z-10">
        {imageOnLeft ? (
          <>
            {/* Left-aligned Grey Area with Image */}
            {/* <div className="relative w-full lg:w-[390px] h-[646px] bg-[#D9D9D9]">
              <img
                src={imageSrc}
                alt="Service"
                className="absolute w-full left-[119.5px] top-1/2 -translate-y-1/2 z-10"
              />
            </div> */}
            {/* Heading and Text */}
            {/* <div className="flex-1 lg:pl-56 lg:pt-52 ">
              <h2 className="text-[46px] font-bold text-[#393939]">
                {heading}
              </h2>
              <p className="text-lg open-sans font-medium text-[#9F9F9F] max-w-[710px]">
                {paragraph}
              </p>
            </div> */}

            <div className="relative h-[646px]">
              <div className="absolute w-[390px] h-full bg-[#D9D9D9] -z-50"></div>
              <div class="flex justify-center items-center h-full gap-16">
                <div class="w-full md:w-4/12">
                  <img src={imageSrc} alt="Service" className="" />
                </div>
                <div class="w-full md:w-5/12">
                  <div className="flex flex-col">
                    <h2 className="text-[46px] font-semibold text-[#393939]">
                      {heading}
                    </h2>
                    <p className="text-base open-sans font-medium text-[#9F9F9F]">
                      {paragraph}
                    </p>
                  </div>{" "}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Heading and Text */}
            {/* <div className="flex-1 lg:pl-28 lg:pt-52">
              <h2 className="text-[46px] font-bold text-[#393939]">
                {heading}
              </h2>
              <p className="text-lg open-sans font-medium text-[#9F9F9F] max-w-[710px]">
                {paragraph}
              </p>
            </div> */}
            {/* Right-aligned Grey Area with Image */}
            {/* <div className="relative lg:mr-0 lg:w-[390px] h-[646px] bg-[#D9D9D9]">
              <img
                src={imageSrc}
                alt="Service"
                className="absolute w-full right-[119px] top-1/2 -translate-y-1/2 z-10"
              />
            </div> */}

            <div className="relative h-[646px]">
              {/* Grey background on the right side */}
              <div className="absolute right-0 w-[390px] h-full bg-[#D9D9D9] -z-50"></div>
              <div className="flex justify-center items-center h-full gap-16">
                {/* Text and heading on the left side */}
                <div className="w-full md:w-5/12">
                  <div className="flex flex-col">
                    <h2 className="text-[46px] font-semibold text-[#393939]">
                      {heading}
                    </h2>
                    <p className="text-base open-sans font-medium text-[#9F9F9F]">
                      {paragraph}
                    </p>
                  </div>
                </div>
                {/* Image on the right side */}
                <div className="w-full md:w-4/12">
                  <img src={imageSrc} alt="Service" className="" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Background Images */}
      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px]"
        style={{ left: "700px", top: "50px" }}
      />
      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px]"
        style={{ right: "50px", top: "350px" }}
      />

      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px]"
        style={{ right: "550px", top: "900px" }}
      />
      <img
        src={bgImage5}
        alt="Background 5"
        className="absolute z-0 w-[58px] h-[91px]"
        style={{ left: "30%", top: "500px" }}
      />

      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px]"
        style={{ right: "60%", top: "1200px" }}
      />

      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px]"
        style={{ left: "1100px", top: "1400px" }}
      />
      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px]"
        style={{ right: "650px", top: "1800px" }}
      />
      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px]"
        style={{ left: "50px", top: "2000px" }}
      />

      <img
        src={bgImage5}
        alt="Background 5"
        className="absolute z-0 w-[58px] h-[91px]"
        style={{ left: "80%", top: "2700px" }}
      />

      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px]"
        style={{ right: "1200px", top: "2400px" }}
      />

      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px]"
        style={{ right: "650px", top: "3000px" }}
      />
      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px]"
        style={{ left: "850px", top: "2300px" }}
      />
      <img
        src={bgImage5}
        alt="Background 5"
        className="absolute z-0 w-[58px] h-[91px]"
        style={{ left: "10%", top: "3300px" }}
      />

      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px]"
        style={{ left: "1100px", top: "1400px" }}
      />
      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px]"
        style={{ right: "60%", top: "1200px" }}
      />
      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px]"
        style={{ right: "650px", top: "1800px" }}
      />

      <img
        src={bgImage5}
        alt="Background 5"
        className="absolute z-0 w-[58px] h-[91px]"
        style={{ left: "80%", top: "2700px" }}
      />
      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px]"
        style={{ left: "700px", top: "3800px" }}
      />
      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px]"
        style={{ right: "50px", top: "4000px" }}
      />

      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px]"
        style={{ right: "850px", top: "4400px" }}
      />
      <img
        src={bgImage5}
        alt="Background 5"
        className="absolute z-0 w-[58px] h-[91px]"
        style={{ left: "30%", top: "5000px" }}
      />

      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px]"
        style={{ right: "60%", top: "5700px" }}
      />

      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px]"
        style={{ left: "1300px", top: "5400px" }}
      />
      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px]"
        style={{ right: "600px", top: "6000px" }}
      />

      <img
        src={bgImage5}
        alt="Background 5"
        className="absolute z-0 w-[58px] h-[91px]"
        style={{ left: "20%", top: "6300px" }}
      />

      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px]"
        style={{ right: "100px", top: "6500px" }}
      />

      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px]"
        style={{ right: "850px", top: "6900px" }}
      />
      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px]"
        style={{ left: "850px", top: "7100px" }}
      />
      <img
        src={bgImage5}
        alt="Background 5"
        className="absolute z-0 w-[58px] h-[91px]"
        style={{ left: "10%", top: "7600px" }}
      />

      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px]"
        style={{ left: "1100px", top: "7800px" }}
      />
      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px]"
        style={{ right: "60%", top: "8000px" }}
      />
      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px]"
        style={{ right: "1200px", top: "8400px" }}
      />

      <img
        src={bgImage5}
        alt="Background 5"
        className="absolute z-0 w-[58px] h-[91px]"
        style={{ left: "40%", top: "8800px" }}
      />
      {/* First Section: Image and Grey Area on the Left */}
      <Section
        imageSrc={image1}
        heading="Plywood"
        paragraph='Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles. This cross-grain structure enhances strength, stability, and resistance to warping, making plywood an ideal choice for a wide range of applications. Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles.'
        imageOnLeft={true}
      />

      {/* Second Section: Image and Grey Area on the Right */}
      <Section
        imageSrc={image2}
        heading="Mica"
        paragraph='Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles. This cross-grain structure enhances strength, stability, and resistance to warping, making plywood an ideal choice for a wide range of applications. Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles.'
        imageOnLeft={false}
      />

      <Section
        imageSrc={image3}
        heading="Veneer Plywood"
        paragraph='Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles. This cross-grain structure enhances strength, stability, and resistance to warping, making plywood an ideal choice for a wide range of applications. Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles.'
        imageOnLeft={true}
      />
      <Section
        imageSrc={image4}
        heading="MDF Boards"
        paragraph='Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles. This cross-grain structure enhances strength, stability, and resistance to warping, making plywood an ideal choice for a wide range of applications. Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles.'
        imageOnLeft={false}
      />
      <Section
        imageSrc={image5}
        heading="Flush Doors/Peak Doors"
        paragraph='Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles. This cross-grain structure enhances strength, stability, and resistance to warping, making plywood an ideal choice for a wide range of applications. Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles.'
        imageOnLeft={true}
      />
      <Section
        imageSrc={image6}
        heading="Architectural Hardwares"
        paragraph='Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles. This cross-grain structure enhances strength, stability, and resistance to warping, making plywood an ideal choice for a wide range of applications. Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles.'
        imageOnLeft={false}
      />
      <Section
        imageSrc={image7}
        heading="Sawn Woods"
        paragraph='Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles. This cross-grain structure enhances strength, stability, and resistance to warping, making plywood an ideal choice for a wide range of applications. Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles.'
        imageOnLeft={true}
      />
      <Section
        imageSrc={image8}
        heading="Wooden Furniture"
        paragraph='Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles. This cross-grain structure enhances strength, stability, and resistance to warping, making plywood an ideal choice for a wide range of applications. Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles.'
        imageOnLeft={false}
      />
      <Section
        imageSrc={image9}
        heading="Wooden Artifacts"
        paragraph='Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles. This cross-grain structure enhances strength, stability, and resistance to warping, making plywood an ideal choice for a wide range of applications. Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles.'
        imageOnLeft={true}
      />
      <Section
        imageSrc={image10}
        heading="Laminates"
        paragraph='Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles. This cross-grain structure enhances strength, stability, and resistance to warping, making plywood an ideal choice for a wide range of applications. Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles.'
        imageOnLeft={false}
      />
      <Section
        imageSrc={image11}
        heading="Adhesive"
        paragraph='Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles. This cross-grain structure enhances strength, stability, and resistance to warping, making plywood an ideal choice for a wide range of applications. Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles.'
        imageOnLeft={true}
      />
      <Section
        imageSrc={image12}
        heading="Decorative Items"
        paragraph='Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles. This cross-grain structure enhances strength, stability, and resistance to warping, making plywood an ideal choice for a wide range of applications. Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles.'
        imageOnLeft={false}
      />
      <Section
        imageSrc={image13}
        heading="Windows"
        paragraph='Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles. This cross-grain structure enhances strength, stability, and resistance to warping, making plywood an ideal choice for a wide range of applications. Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles.'
        imageOnLeft={true}
      />
      <Section
        imageSrc={image14}
        heading="Shuttering Plywood"
        paragraph='Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles. This cross-grain structure enhances strength, stability, and resistance to warping, making plywood an ideal choice for a wide range of applications. Plywood is a versatile and highly durable engineered wood product, crafted from thin layers of wood veneer, known as "plies," which are glued together at alternating angles.'
        imageOnLeft={false}
      />
    </div>
  );
};

export default ServicePage;

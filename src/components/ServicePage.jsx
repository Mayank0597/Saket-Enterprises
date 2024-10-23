import React, { useEffect } from "react";
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
import bgImage1 from "/src/assets/Vector (1).png";
import bgImage2 from "/src/assets/map_furniture-store (4).png";
import bgImage3 from "/src/assets/Group.png";
import bgImage4 from "/src/assets/iconoir_sofa (4).png";
import bgImage5 from "/src/assets/mynaui_lamp (2).png";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const Section = ({ imageSrc, heading, paragraph, imageOnLeft }) => {
    return (
      <div className="flex  px-0 z-10">
        {imageOnLeft ? (
          <>
            {/* Left-aligned Grey Area with Image */}

            <div className="relative md:h-[646px] h-[314px]">
              <div className="md:absolute relative lg:w-[390px] w-[170px] h-full bg-[#D9D9D9] -z-50"></div>
              <div class="flex justify-center items-center h-full gap-16 flex-col md:flex-row">
                <div class="w-[240px] lg:w-4/12">
                  <img src={imageSrc} alt="Service" className="" 
                  // data-aos="flip-left"
                   />
                </div>
                <div class="w-full md:w-2/5 lg:w-5/12">
                  <div className="flex flex-col">
                    <h2 className="text-[46px] font-semibold text-[#393939]">
                      {heading}
                    </h2>
                    <p className="text-base open-sans font-medium text-[#9F9F9F] text-justify">
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

            <div className="relative h-[646px]">
              {/* Grey background on the right side */}
              <div className="md:absolute relative right-0 lg:w-[390px] w-[170px] h-full bg-[#D9D9D9] -z-50"></div>
              <div className="flex justify-center items-center h-full gap-16 flex-col-reverse md:flex-row">
                {/* Text and heading on the left side */}
                <div className="w-full md:w-2/5 lg:w-5/12">
                  <div className="flex flex-col">
                    <h2 className="text-[46px] font-semibold text-[#393939]">
                      {heading}
                    </h2>
                    <p className="text-base open-sans font-medium text-[#9F9F9F] text-justify">
                      {paragraph}
                    </p>
                  </div>
                </div>
                {/* Image on the right side */}
                <div className="w-[240px] lg:w-4/12">
                  <img src={imageSrc} alt="Service" className="" 
                  // data-aos="flip-right"
                   />
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
        className="absolute z-0 w-[132px] h-[159px] hidden xl:block"
        style={{ left: "700px", top: "50px" }}
      />
      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px] hidden xl:block"
        style={{ right: "50px", top: "350px" }}
      />

      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px] hidden xl:block"
        style={{ right: "550px", top: "900px" }}
      />
      <img
        src={bgImage1}
        alt="Background 5"
        className="absolute z-0 w-[132px] h-[159px] hidden xl:block"
        style={{ left: "30%", top: "500px" }}
      />

      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px] hidden xl:block"
        style={{ right: "60%", top: "1200px" }}
      />

      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px] hidden xl:block"
        style={{ left: "1100px", top: "1400px" }}
      />
      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px] hidden xl:block"
        style={{ right: "650px", top: "1800px" }}
      />
      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px] hidden xl:block"
        style={{ left: "50px", top: "2000px" }}
      />

      <img
        src={bgImage2}
        alt="Background 5"
        className="absolute z-0 w-[163px] h-[123px] hidden xl:block"
        style={{ left: "80%", top: "2700px" }}
      />

      <img
        src={bgImage1}
        alt="Background 2"
        className="absolute z-0 w-[132px] h-[159px] hidden xl:block"
        style={{ right: "1200px", top: "2400px" }}
      />

      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px] hidden xl:block"
        style={{ right: "650px", top: "3000px" }}
      />
      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px] hidden xl:block"
        style={{ left: "850px", top: "2300px" }}
      />
      <img
        src={bgImage2}
        alt="Background 5"
        className="absolute z-0 w-[163px] h-[123px] hidden xl:block"
        style={{ left: "10%", top: "3300px" }}
      />

      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px] hidden xl:block"
        style={{ left: "1100px", top: "1400px" }}
      />
      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px] hidden xl:block"
        style={{ right: "60%", top: "1200px" }}
      />
      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px] hidden xl:block"
        style={{ right: "650px", top: "1800px" }}
      />

      <img
        src={bgImage1}
        alt="Background 5"
        className="absolute z-0 w-[132px] h-[159px] hidden xl:block"
        style={{ left: "90%", top: "3000px" }}
      />
      <img
        src={bgImage4}
        alt="Background 1"
        className="absolute z-0 w-[155px] h-[120px] hidden xl:block"
        style={{ left: "700px", top: "3800px" }}
      />
      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px] hidden xl:block"
        style={{ right: "50px", top: "4000px" }}
      />

      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px] hidden xl:block"
        style={{ right: "850px", top: "4400px" }}
      />
      <img
        src={bgImage1}
        alt="Background 5"
        className="absolute z-0 w-[132px] h-[159px] hidden xl:block"
        style={{ left: "30%", top: "5000px" }}
      />

      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px] hidden xl:block"
        style={{ right: "60%", top: "5700px" }}
      />

      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px] hidden xl:block"
        style={{ left: "1300px", top: "5400px" }}
      />
      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px] hidden xl:block"
        style={{ right: "600px", top: "6000px" }}
      />

      <img
        src={bgImage1}
        alt="Background 5"
        className="absolute z-0 w-[132px] h-[159px] hidden xl:block"
        style={{ left: "20%", top: "6300px" }}
      />

      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px] hidden xl:block"
        style={{ right: "100px", top: "6500px" }}
      />

      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px] hidden xl:block"
        style={{ right: "850px", top: "6900px" }}
      />
      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px] hidden xl:block"
        style={{ left: "850px", top: "7100px" }}
      />
      <img
        src={bgImage4}
        alt="Background 5"
        className="absolute z-0 w-[155px] h-[120px] hidden xl:block"
        style={{ left: "10%", top: "7600px" }}
      />

      <img
        src={bgImage1}
        alt="Background 1"
        className="absolute z-0 w-[132px] h-[159px] hidden xl:block"
        style={{ left: "1100px", top: "7800px" }}
      />
      <img
        src={bgImage2}
        alt="Background 2"
        className="absolute z-0 w-[163px] h-[123px] hidden xl:block"
        style={{ right: "60%", top: "8000px" }}
      />
      <img
        src={bgImage4}
        alt="Background 4"
        className="absolute z-0 w-[155px] h-[120px] hidden xl:block"
        style={{ right: "1200px", top: "8400px" }}
      />

      <img
        src={bgImage1}
        alt="Background 5"
        className="absolute z-0 w-[132px] h-[159px] hidden xl:block"
        style={{ left: "40%", top: "8800px" }}
      />

      {/* First Section: Image and Grey Area on the Left */}
      <Section
        imageSrc={image1}
        heading="Plywood"
        paragraph="Our plywood collection is known for its strength, durability, and versatile application. Whether you're working on a construction project or designing custom furniture, our plywood is made from premium quality wood, offering a strong foundation for your creations. Its resistance to bending makes it ideal for both indoor and outdoor use. Additionally, we offer a variety of thicknesses to cater to different needs, ensuring you always find the right fit for your project."
        imageOnLeft={true}
      />

      {/* Second Section: Image and Grey Area on the Right */}
      <Section
        imageSrc={image2}
        heading="Mica"
        paragraph="We offer a wide range of mica sheets that add a polished finish to your surfaces. Their heat resistance and durability make them a top choice for kitchen countertops, furniture tops, and other high-use areas. Explore our collection to add a refined, contemporary touch to your spaces. Our mica sheets are versatile and easy to install, making them a popular choice for both residential and commercial interiors."
        imageOnLeft={false}
      />

      <Section
        imageSrc={image3}
        heading="Veneer Plywood"
        paragraph="Our veneer plywood combines the durability of plywood with the natural beauty of wood veneers. It's an ideal choice for those looking to achieve a luxurious wood finish without compromising strength and stability. The wide variety of veneers we offer allows you to choose from an array of wood grains and finishes, making it easy to match your specific design preferences. Whether used for cabinets, walls, or furniture, veneer plywood brings elegance to any room."
        imageOnLeft={true}
      />
      <Section
        imageSrc={image4}
        heading="MDF Boards"
        paragraph="Medium Density Fiberboard (MDF) boards from Saket Enterprises are crafted precisely to provide a smooth surface for painting or veneering. They are a cost-effective and a great solution for cabinetry, and interior design projects. Their dense composition ensures resistance making them an excellent choice for detailed carpentry. Additionally, our MDF boards are highly customizable, allowing you to cut, shape, and carve intricate designs with ease."
        imageOnLeft={false}
      />
      <Section
        imageSrc={image5}
        heading="Flush Doors/Peak Doors"
        paragraph="We offer high-quality flush boards that are perfect for creating smooth and seamless doors and partitions. Our boards are engineered for durability and a sleek appearance. These boards are perfect for both residential and commercial applications and are available in various finishes to match your design needs.Whether you're looking to enhance the aesthetics of your home or create functional spaces in an office, our flush boards provide the versatility and elegance required for any project."
        imageOnLeft={true}
      />
      <Section
        imageSrc={image6}
        heading="Architectural Hardwares"
        paragraph="Our range of hardware products includes everything you need to complete your furniture and cabinetry projects. From hinges to handles, we provide durable and reliable hardware that ensures functionality and longevity.  Whether you need modern minimalist designs or traditional craftsmanship, we provide reliable, durable solutions that stand the test of time. Each product is crafted with precision, guaranteeing an aesthetic appeal and superior performance."
        imageOnLeft={false}
      />
      <Section
        imageSrc={image7}
        heading="Sawn Woods"
        paragraph="At Saket Enterprises, we source the finest raw woods for all your carpentry and woodworking needs. Whether you're crafting furniture or creating art pieces, our selection of raw woods offers the perfect starting material for your projects. Available in various types and cuts, they provide a perfect base for both functional and decorative woodworking projects.With our diverse inventory, you can find the ideal match for your design vision, making every project a true reflection of your craftsmanship."
        imageOnLeft={true}
      />
      <Section
        imageSrc={image8}
        heading="Wooden Furniture"
        paragraph="Our wooden furniture collection is crafted with precision and care, offering a blend of traditional craftsmanship and modern design. Each piece is made from high-quality wood, ensuring durability and elegance for your home or office. Our wooden furniture collection is a perfect blend of craftsmanship, quality, and design. Every piece is crafted using high-grade wood, ensuring longevity and an elegant finish."
        imageOnLeft={false}
      />
      <Section
        imageSrc={image9}
        heading="Wooden Artifacts"
        paragraph="Explore our unique collection of wooden artefacts that bring a touch of artistry and culture to your space. Each artefact is meticulously handcrafted, showcasing the rich heritage and craftsmanship that goes into every piece. These artefacts are perfect for enhancing the aesthetic of your space. At Saket Enterprises, our collection ranges from intricate carvings to contemporary sculptures, making them a unique addition to your home or office decor."
        imageOnLeft={true}
      />
      <Section
        imageSrc={image10}
        heading="Laminates"
        paragraph="Enhance the beauty and durability of your furniture with our premium quality laminates. Available in a variety of colours, textures, and finishes, our laminates are perfect for adding a stylish and protective layer to your spaces.  They are easy to maintain, stylish, and provide protective layers that can transform any space with minimal effort.Transform any space effortlessly with our versatile laminates, designed to meet your design aspirations while standing the test of time."
        imageOnLeft={false}
      />
      <Section
        imageSrc={image11}
        heading="Adhesive"
        paragraph="Our range of high-strength adhesives ensures a seamless bonding experience for all your furniture and construction needs. Whether you are working with wood, metal, glass, or plastic, they are suitable for a variety of materials. Our adhesives guarantee durability and reliability in every project. They are a trusted choice for professionals."
        imageOnLeft={true}
      />
      <Section
        imageSrc={image12}
        heading="Decorative Items"
        paragraph="Add a touch of elegance to your home with our collection of decorative items. From unique artefacts to modern decor pieces, we offer a variety that suits every taste and style, making your spaces truly stand out. Whether you're looking to elevate your living room or add a unique touch to your office, our decorative items are designed to bring style and individuality to any setting."
        imageOnLeft={false}
      />
      <Section
        imageSrc={image13}
        heading="Windows"
        paragraph="Discover our durable and stylish windows, designed to provide optimal ventilation and natural light while enhancing the aesthetic appeal of your home. Crafted from quality materials, our windows ensure security and longevity. With optimal ventilation and light in mind, our windows are designed to enhance energy efficiency while adding value to your property."
        imageOnLeft={true}
      />
      <Section
        imageSrc={image14}
        heading="Shuttering Plywood"
        paragraph="Our shuttering plywood is known for its strength and resistance to water, making it ideal for construction and building purposes. It provides a solid foundation and is perfect for use in building frameworks, ensuring stability and durability everywhere. With a high load-bearing capacity and resistance to weather conditions, it's the go-to choice for ensuring a reliable foundation in construction projects."
        imageOnLeft={false}
      />
    </div>
  );
};

export default ServicePage;

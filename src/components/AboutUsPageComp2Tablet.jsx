import React from "react";
import image1 from "/src/assets/Optimize Image/close-up-details-wood-surface15-ezgif.com-optiwebp.webp";
import image2 from "/src/assets/Optimize Image/close-up-details-wood-surface19-ezgif.com-optiwebp.webp";
import image3 from "/src/assets/Optimize Image/close-up-details-wood-surface110-ezgif.com-optiwebp.webp";

const AboutUsPageComp2Tablet = () => {
  const AboutUsSection = ({ imageSrc, heading, paragraph, imageOnLeft }) => {
    return (
      <div
        className={`flex flex-col sm:${
          imageOnLeft ? "sm:flex-row" : "sm:flex-row-reverse"
        } w-full max-w-screen-xl mx-auto mb-10 sm:my-16 md:my-20 lg:px-0 bg-[#F3F2F2] rounded-lg`}
      >
        {/* Image */}
        <img
          src={imageSrc}
          alt="About Us"
          className="h-auto sm:h-[300px] md:h-auto w-full lg:w-[595px] object-cover rounded-lg"
        />

        {/* Text Section */}
        <div className="flex-1 bg-[#F3F2F2] px-6 py-8 sm:pt-10 lg:pt-20 rounded-lg flex flex-col justify-center">
          <h2 className="text-[24px] sm:text-[28px] md:text-4xl font-semibold mb-4 text-[#393939] text-center sm:text-left sm:ml-[10px] lg:ml-[104px] lg:mr-[63px]">
            {heading}
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium text-[#9F9F9F] max-w-[558px] text-justify mx-auto sm:ml-[10px] sm:mr-[10px] lg:ml-[104px] lg:mr-[63px]">
            {paragraph}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full -mt-[69px]">
      {/* First Section: Image on the Left for Desktop */}
      <AboutUsSection
        imageSrc={image1}
        heading="Saket Enterprises"
        paragraph="Saket Enterprises is a leading name in industry, offering a diverse range of products including artefacts, plywood, hardware, and more. We specialise in mica, plywood, laminates, hardware, and household furnishings. Our creations blend tradition and modernity. Every product we promise a testament to our commitment to quality, durability, and making your space a reflection of elegance and sophistication."
        imageOnLeft={true}
      />

      {/* Second Section: Image on the Right for Desktop */}
      <AboutUsSection
        imageSrc={image2}
        heading="Who We Are?"
        paragraph="We are artisans, designers, and innovators, committed to delivering exceptional quality and craftsmanship. Our team combines years of expertise with a passion for creating products that meet your expectations. Our passion lies in exceeding your expectations and delivering pieces that stand out for their uniqueness and quality."
        imageOnLeft={false}
      />

      {/* Third Section: Image on the Left for Desktop */}
      <AboutUsSection
        imageSrc={image3}
        heading="What We Do?"
        paragraph="We offer a wide range of plywood, hardware, furniture and decorative items, including designs tailored to your taste. From classic to contemporary, our collection encompasses all, ensuring you find the perfect piece for your style. Whether you’re furnishing your home or office, we have a collection that adds charm and sophistication to any environment."
        imageOnLeft={true}
      />
    </div>
  );
};

export default AboutUsPageComp2Tablet;

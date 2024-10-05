import React from "react";
import image1 from "/src/assets/Optimize Image/close-up-details-wood-surface15-ezgif.com-optiwebp.webp";
import image2 from "/src/assets/Optimize Image/close-up-details-wood-surface16-ezgif.com-optiwebp.webp";
import image3 from "/src/assets/Optimize Image/close-up-details-wood-surface17-ezgif.com-optiwebp.webp";

const AboutUsPageComp2 = () => {
  const AboutUsSection = ({ imageSrc, heading, paragraph, imageOnLeft }) => {
    return (
      <div className="flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto mb-10 lg:my-20 px-4 lg:px-0.5 bg-[#F3F2F2] rounded-full">
        {imageOnLeft ? (
          <>
            {/* Image on Left */}
            <img
              src={imageSrc}
              alt="About Us"
              className="h-[400px] w-full lg:w-[595px] rounded-lg"
            />
            <div className="flex-1 bg-[#F3F2F2] p-8 lg:pt-20 rounded-lg">
              <h2 className="text-4xl font-semibold mb-4 text-[#393939] ml-[104px] mr-[63px]">
                {heading}
              </h2>
              <p className="text-base open-sans font-normal text-[#9F9F9F] max-w-[558px] text-justify ml-[104px] mr-[63px]">
                {paragraph}
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Grey Area on Left */}
            <div className="flex-1 bg-[#F3F2F2] p-8 lg:pt-20 rounded-lg">
              <h2 className="text-4xl font-semibold mb-4 text-[#393939] mr-[99px] ml-[65px]">
                {heading}
              </h2>
              <p className="text-base open-sans font-normal text-[#9F9F9F] max-w-[558px] text-justify mr-[99px] ml-[65px]">
                {paragraph}
              </p>
            </div>
            <img
              src={imageSrc}
              alt="About Us"
              className="h-[400px] w-full lg:w-[595px] rounded-lg"
            />
          </>
        )}
      </div>
    );
  };

  return (
    <div className="w-full pt-10">
      {/* First Section: Image on the Left */}
      <AboutUsSection
        imageSrc={image1}
        heading="Saket Enterprises"
        paragraph="
       Saket Enterprises is a leading name in industry, offering a diverse range of products including artefacts, plywood, hardware, and more.. We specialise in mica, plywood, laminates, hardware, and household furnishings. Our creations blend tradition and modernity. Every product we promise a testament to our commitment to quality, durability, and  making your space a reflection of elegance and sophistication."
        imageOnLeft={true}
      />

      {/* Second Section: Image on the Right */}
      <AboutUsSection
        imageSrc={image2}
        heading="Who We Are?"
        paragraph="We are artisans, designers, and innovators, committed to delivering exceptional quality and craftsmanship. Our team combines years of expertise with a passion for creating products that meet your expectations. Our passion lies in exceeding your expectations and delivering pieces that stand out for their uniqueness and quality."
        imageOnLeft={false}
      />

      {/* Third Section: Image on the Left */}
      <AboutUsSection
        imageSrc={image3}
        heading="What We Do?"
        paragraph="We offer a wide range of plywood, hardware, furniture and decorative items, including designs tailored to your taste. From classic to contemporary, our collection encompasses all, ensuring you find the perfect piece for your style. Whether you’re furnishing your home or office, we have a collection that adds charm and sophistication to any environment."
        imageOnLeft={true}
      />
    </div>
  );
};

export default AboutUsPageComp2;

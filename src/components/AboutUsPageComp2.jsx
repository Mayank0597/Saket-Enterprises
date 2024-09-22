import React from "react";
import image1 from "/src/assets/close-up-details-wood-surface 1.png";
import image2 from "/src/assets/close-up-details-wood-surface 1 (1).png";
import image3 from "/src/assets/close-up-details-wood-surface 1 (2).png";

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
            <div className="flex-1 bg-[#F3F2F2] p-8 lg:p-10 rounded-lg">
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
            <div className="flex-1 bg-[#F3F2F2] p-8 lg:p-10 rounded-lg">
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
        Welcome to Saket Enterprises, where tradition meets innovation in furniture design. We handcraft furniture that seamlessly blends the rich heritage of Bastar with a sleek, modern design. Your home deserves more than just furniture; it deserves pieces that tell a story and add timeless elegance, reflecting your unique style. Join us in celebrating the art of fine furniture and making your space truly unique.it deserves pieces that tell a story and add timeless elegance, reflecting your unique style. Join us in celebrating the art of fine furniture and making your space truly unique."
        imageOnLeft={true}
      />

      {/* Second Section: Image on the Right */}
      <AboutUsSection
        imageSrc={image2}
        heading="Who We Are?"
        paragraph="Welcome to Saket Enterprises, where tradition meets innovation in furniture design. We handcraft furniture that seamlessly blends the rich heritage of Bastar with a sleek, modern design. Your home deserves more than just furniture; it deserves pieces that tell a story and add timeless elegance, reflecting your unique style. Join us in celebrating the art of fine furniture and making your space truly unique.it deserves pieces that tell a story and add timeless elegance, reflecting your unique style. Join us in celebrating the art of fine furniture and making your space truly unique."
        imageOnLeft={false}
      />

      {/* Third Section: Image on the Left */}
      <AboutUsSection
        imageSrc={image3}
        heading="What We Do?"
        paragraph="Welcome to Saket Enterprises, where tradition meets innovation in furniture design. We handcraft furniture that seamlessly blends the rich heritage of Bastar with a sleek, modern design. Your home deserves more than just furniture; it deserves pieces that tell a story and add timeless elegance, reflecting your unique style. Join us in celebrating the art of fine furniture and making your space truly unique.it deserves pieces that tell a story and add timeless elegance, reflecting your unique style. Join us in celebrating the art of fine furniture and making your space truly unique."
        imageOnLeft={true}
      />
    </div>
  );
};

export default AboutUsPageComp2;

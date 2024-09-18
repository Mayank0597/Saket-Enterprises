import React from "react";
import image1 from "/src/assets/close-up-details-wood-surface 1.png";
import image2 from "/src/assets/close-up-details-wood-surface 1 (1).png";
import image3 from "/src/assets/close-up-details-wood-surface 1 (2).png";

const AboutUsPageComp2 = () => {
  
  const AboutUsSection = ({ imageSrc, heading, paragraph, imageOnLeft }) => {
    return (
      <div className="flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto mb-10 lg:mb-20 px-4 lg:px-0.5">
        {imageOnLeft ? (
          <>
            {/* Image on Left */}
            <img
              src={imageSrc}
              alt="About Us"
              className="h-[400px] w-full lg:w-[595px] object-cover"
            />
            <div className="flex-1 bg-[#FAFAFA] p-8 lg:p-10">
              <h2 className="text-2xl font-bold mb-4 text-[#393939]">{heading}</h2>
              <p className="text-lg text-[#9F9F9F]">{paragraph}</p>
            </div>
          </>
        ) : (
          <>
            {/* Grey Area on Left */}
            <div className="flex-1 bg-[#FAFAFA] p-8 lg:p-10">
              <h2 className="text-2xl font-bold mb-4 text-[#393939]">{heading}</h2>
              <p className="text-lg text-[#9F9F9F]">{paragraph}</p>
            </div>
            <img
              src={imageSrc}
              alt="About Us"
              className="h-[400px] w-full lg:w-[595px] object-cover"
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

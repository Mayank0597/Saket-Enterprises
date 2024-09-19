import React from "react";

// Example images
import image1 from "/src/assets/Frame 53 (1).png"; // Replace with actual images
import image2 from "/src/assets/Frame 53 (2).png"; // Replace with actual images

const ServicePage = () => {

  const Section = ({ imageSrc, heading, paragraph, imageOnLeft }) => {
    return (
      <div className="flex flex-col lg:flex-row w-full max-w-screen-xl mb-10 px-4 lg:px-0">
        {imageOnLeft ? (
          <>
            {/* Left-aligned Grey Area with Image */}
            <div className="relative lg:ml-0 w-full lg:w-[390px] h-[646px] bg-gray-300">
              <img
                src={imageSrc}
                alt="Service"
                className="absolute w-[538px] h-[411px] left-[119.5px] top-[117px] object-cover z-10"
              />
            </div>
            {/* Heading and Text */}
            <div className="flex-1 p-8 lg:pl-16 lg:pt-10">
              <h2 className="text-3xl font-bold mb-4">{heading}</h2>
              <p className="text-lg">{paragraph}</p>
            </div>
          </>
        ) : (
          <>
            {/* Heading and Text */}
            <div className="flex-1 p-8 lg:pr-16 lg:pt-10">
              <h2 className="text-3xl font-bold mb-4">{heading}</h2>
              <p className="text-lg">{paragraph}</p>
            </div>
            {/* Right-aligned Grey Area with Image */}
            <div className="relative lg:mr-0 w-full lg:w-[390px] h-[646px] bg-gray-300">
              <img
                src={imageSrc}
                alt="Service"
                className="absolute w-[538px] h-[411px] right-[89px] top-[118px] object-cover z-10"
              />
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="w-full py-10">
      {/* First Section: Image and Grey Area on the Left */}
      <Section
        imageSrc={image1}
        heading="Service 1"
        paragraph="This is a brief description of the first service we offer."
        imageOnLeft={true}
      />

      {/* Second Section: Image and Grey Area on the Right */}
      <Section
        imageSrc={image2}
        heading="Service 2"
        paragraph="This is a brief description of the second service we offer."
        imageOnLeft={false}
      />

      {/* Repeat for the remaining sections */}
      {/* 
        3rd Section: Similar to the first 
        4th Section: Similar to the second 
        5th to 14th: Follow the same pattern
      */}
    </div>
  );
};

export default ServicePage;

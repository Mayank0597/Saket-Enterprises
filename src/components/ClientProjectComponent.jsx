import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCardText } from "react-icons/bs";
import image1 from "/src/assets/close-up-details-wood-surface 1.png";
import image2 from "/src/assets/close-up-details-wood-surface 1 (7).png";
import image3 from "/src/assets/close-up-details-wood-surface 1 (6).png";
import image4 from "/src/assets/close-up-details-wood-surface 1 (5).png";
import image5 from "/src/assets/close-up-details-wood-surface 1 (4).png";
import image6 from "/src/assets/close-up-details-wood-surface 1 (3).png";
import LeftArrow from "/src/assets/move-right (1).png"; // replace with actual path
import RightArrow from "/src/assets/move-right.png"; // replace with actual path
import logoIcon1 from "/src/assets/octicon_person-24.png";
import logoIcon2 from "/src/assets/ion_location-outline (3).png";

const ClientProjectComponent = () => {
  const images1 = [image1, image2, image3];
  const images2 = [image4, image5, image6];

  const [topImageIndex, setTopImageIndex] = useState(0);
  const [bottomImageIndex, setBottomImageIndex] = useState(0);

  const handleTopNext = () => {
    setTopImageIndex((prevIndex) => (prevIndex + 1) % images1.length);
  };

  const handleTopPrev = () => {
    setTopImageIndex(
      (prevIndex) => (prevIndex - 1 + images1.length) % images1.length
    );
  };

  const handleBottomNext = () => {
    setBottomImageIndex((prevIndex) => (prevIndex + 1) % images2.length);
  };

  const handleBottomPrev = () => {
    setBottomImageIndex(
      (prevIndex) => (prevIndex - 1 + images2.length) % images2.length
    );
  };

  return (
    <div className="container mx-auto py-8 px-16 my-20">
      {/* First Section */}
      <div className="flex justify-around items-center mb-[70px]">
        <div className="relative w-full md:w-5/12 flex items-center">
          <button
            onClick={handleTopPrev}
            className="absolute -left-10 top-1/2 transform -translate-y-1/2 border border-[#E2761B] p-2 w-10 h-10 flex items-center bg-white"
          >
            <img src={LeftArrow} alt="Left Arrow" className="w-4 h-4" />
          </button>
          <img
            src={images1[topImageIndex]}
            alt="Client Project"
            className="w-[100%] h-auto rounded-lg"
          />
          <button
            onClick={handleTopNext}
            className="absolute -right-10 top-1/2 transform -translate-y-1/2 border border-[#E2761B] p-2 w-10 h-10 flex items-center bg-white"
          >
            <img src={RightArrow} alt="Right Arrow" className="w-4 h-4" />
          </button>
        </div>
        <div className="w-full md:w-5/12 mt-4 md:mt-0 md:ml-6">
          {/* Client Info */}

          <div className="flex flex-row mb-[20px]">
            <img
              src={logoIcon1}
              alt="Client Icon"
              className="w-[22px] h-[24px] mr-[14px]"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-[19px] font-semibold text-[#393939]">
                Client Name
              </h3>
              <p className="text-base font-medium text-[#9F9F9F] open-sans">
                Mr.William Mathews
              </p>
            </div>
          </div>

          <div className="flex flex-row mb-[30px]">
            <img
              src={logoIcon2}
              alt="Address Icon"
              className="w-[15px] h-[22px] mr-[14px]"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-[19px] font-semibold text-[#393939]">
                Client’s Location
              </h3>
              <p className="text-base font-medium text-[#9F9F9F] open-sans">
                Avanti Vihar, Near SBI Bank, Raipur (C.G)
              </p>
            </div>
          </div>

          <div className="flex items-center">
            {/* <BsCardText size={24} className="text-gray-700 mr-2" /> */}
            <span className="text-[33px] font-semibold">
              Project Description
            </span>
          </div>
          <p className="text-[#9F9F9F] max-w-[558px] text-justify font-medium text-base open-sans">
            Welcome to Saket Enterprises, where tradition meets innovation in
            furniture design. We handcraft furniture that seamlessly blends the
            rich heritage of Bastar with a sleek, modern design. space truly
            unique.Welcome to Saket Enterprises, where tradition meets
            innovation in furniture design. We handcraft furniture that
            seamlessly blends the rich heritage of Bastar with a sleek, modern
            design. space truly unique.
          </p>
        </div>
      </div>

      {/* Second Section - Reversed */}
      <div className="flex justify-around items-center">
        <div className="w-full md:w-5/12 mt-4 md:mt-0">
          {/* Client Info */}

          <div className="flex flex-row mb-[20px]">
            <img
              src={logoIcon1}
              alt="Client Icon"
              className="w-[22px] h-[24px] mr-[14px]"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-[19px] font-semibold text-[#393939]">
                Client Name
              </h3>
              <p className="text-base font-medium text-[#9F9F9F] open-sans">
                Mr.William Mathews
              </p>
            </div>
          </div>

          <div className="flex flex-row mb-[30px]">
            <img
              src={logoIcon2}
              alt="Address Icon"
              className="w-[15px] h-[22px] mr-[14px]"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-[19px] font-semibold text-[#393939]">
                Client’s Location
              </h3>
              <p className="text-base font-medium text-[#9F9F9F] open-sans">
                Avanti Vihar, Near SBI Bank, Raipur (C.G)
              </p>
            </div>
          </div>

          <div className="flex items-center">
            {/* <BsCardText size={24} className="text-gray-700 mr-2" /> */}
            <span className="text-[33px] font-semibold">
              Project Description
            </span>
          </div>
          <p className="text-[#9F9F9F] max-w-[558px] text-justify font-medium text-base open-sans">
            Welcome to Saket Enterprises, where tradition meets innovation in
            furniture design. We handcraft furniture that seamlessly blends the
            rich heritage of Bastar with a sleek, modern design. space truly
            unique.Welcome to Saket Enterprises, where tradition meets
            innovation in furniture design. We handcraft furniture that
            seamlessly blends the rich heritage of Bastar with a sleek, modern
            design. space truly unique.
          </p>
        </div>
        <div className="relative w-full md:w-5/12 flex items-center">
          <button
            onClick={handleBottomPrev}
            className="absolute -left-10 top-1/2 transform -translate-y-1/2 border border-[#E2761B] p-2 w-10 h-10 flex items-center bg-white"
          >
            <img src={LeftArrow} alt="Left Arrow" className="w-4 h-4" />
          </button>
          <img
            src={images2[bottomImageIndex]}
            alt="Client Project"
            className="w-full h-auto rounded-lg"
          />
          <button
            onClick={handleBottomNext}
            className="absolute -right-10 top-1/2 transform -translate-y-1/2 border border-[#E2761B] p-2 w-10 h-10 flex items-center bg-white"
          >
            <img src={RightArrow} alt="Right Arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientProjectComponent;

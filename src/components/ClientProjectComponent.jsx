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
    <div className="container mx-auto py-8 px-4">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="relative w-full md:w-1/2 flex items-center justify-center">
          <button
            onClick={handleTopPrev}
            className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 border border-orange-500 p-2 w-10 h-10 flex items-center justify-center bg-white"
          >
            <img src={LeftArrow} alt="Left Arrow" className="w-4 h-4" />
          </button>
          <img
            src={images1[topImageIndex]}
            alt="Client Project"
            className="w-[513px] h-auto rounded-lg"
          />
          <button
            onClick={handleTopNext}
            className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 border border-orange-500 p-2 w-10 h-10 flex items-center justify-center bg-white"
          >
            <img src={RightArrow} alt="Right Arrow" className="w-4 h-4" />
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-6">
          {/* Client Info */}
          <div className="flex items-center mb-2">
            <BiUser size={24} className="text-gray-700 mr-2" />
            <span className="text-lg font-semibold">Client Name</span>
          </div>
          <p className="text-gray-600 mb-4">Mr. William Mathews</p>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt size={24} className="text-gray-700 mr-2" />
            <span className="text-lg font-semibold">Client’s Location</span>
          </div>
          <p className="text-gray-600 mb-4">
            Avanti Vihar, Near SBI Bank, Raipur (C.G)
          </p>
          <div className="flex items-center mb-2">
            <BsCardText size={24} className="text-gray-700 mr-2" />
            <span className="text-lg font-semibold">Project Description</span>
          </div>
          <p className="text-gray-600">
            Description text goes here. This is the detailed description of the
            project that highlights the client’s requirements and specifications
            for this project.
          </p>
        </div>
      </div>

      {/* Second Section - Reversed */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="relative w-full md:w-1/2 flex items-center justify-center">
          <button
            onClick={handleBottomPrev}
            className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 border border-orange-500 p-2 w-10 h-10 flex items-center justify-center bg-white"
          >
            <img src={LeftArrow} alt="Left Arrow" className="w-4 h-4" />
          </button>
          <img
            src={images2[bottomImageIndex]}
            alt="Client Project"
            className="w-[513px] h-auto rounded-lg"
          />
          <button
            onClick={handleBottomNext}
            className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 border border-orange-500 p-2 w-10 h-10 flex items-center justify-center bg-white"
          >
            <img src={RightArrow} alt="Right Arrow" className="w-4 h-4" />
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-6">
          {/* Client Info */}
          <div className="flex items-center mb-2">
            <BiUser size={24} className="text-gray-700 mr-2" />
            <span className="text-lg font-semibold">Client Name</span>
          </div>
          <p className="text-gray-600 mb-4">Mr. William Mathews</p>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt size={24} className="text-gray-700 mr-2" />
            <span className="text-lg font-semibold">Client’s Location</span>
          </div>
          <p className="text-gray-600 mb-4">
            Avanti Vihar, Near SBI Bank, Raipur (C.G)
          </p>
          <div className="flex items-center mb-2">
            <BsCardText size={24} className="text-gray-700 mr-2" />
            <span className="text-lg font-semibold">Project Description</span>
          </div>
          <p className="text-gray-600">
            Description text goes here. This is the detailed description of the
            project that highlights the client’s requirements and specifications
            for this project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientProjectComponent;

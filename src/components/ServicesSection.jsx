import React from "react";
import image1 from "/src/assets/Frame 53.png"; 
import image2 from "/src/assets/Frame 54.png";
import image3 from "/src/assets/Frame 55.png"; 
import { useNavigate } from "react-router-dom"; 

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/services");
  };

  return (
    <div className="text-center py-12">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#393939] mb-12">
        Services
      </h2>

      {/* Images and text */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 mb-12 md:mx-16">
        {/* Service 1 */}
        <div className="flex flex-col items-center">
          <img
            src={image1}
            alt="Service 1"
            className="w-64 h-64 md:w-[427px] md:h-auto object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-black">Plywood</h3>
          <p className="text-gray-500">
            Brief description of Service 1. Highlighting the key aspects and
            features.
          </p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center">
          <img
            src={image2}
            alt="Service 2"
            className="w-64 h-64 md:w-[427px] md:h-auto object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-black">Mica</h3>
          <p className="text-gray-500">
            Brief description of Service 2. Emphasizing what sets this service
            apart.
          </p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center">
          <img
            src={image3}
            alt="Service 3"
            className="w-64 h-64 md:w-[427px] md:h-auto object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-black">Veneer Plywood</h3>
          <p className="text-gray-500">
            Brief description of Service 3. Explaining how it benefits the user.
          </p>
        </div>
      </div>

      {/* View All Button */}
      <button
        className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg hover:bg-orange-600"
        onClick={handleViewAllClick}
      >
        View All
      </button>
    </div>
  );
};

export default ServicesSection;

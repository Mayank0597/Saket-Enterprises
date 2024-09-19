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
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 mb-12 md:mx-20">
        {/* Service 1 */}
        <div className="flex flex-col items-center">
          <img
            src={image1}
            alt="Service 1"
            className="w-64 h-64 md:w-[427px] md:h-auto object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-[#393939]">Plywood</h3>
          <p className="text-[#9F9F9F] text-start">
            We offer high-quality plywood that stands out for its strength, durability and versatility.
          </p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center">
          <img
            src={image2}
            alt="Service 2"
            className="w-64 h-64 md:w-[427px] md:h-auto object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-[#393939]">Mica</h3>
          <p className="text-[#9F9F9F] text-start">
            Our range of mica sheets is designed to be an ideal choice of kitchens, bathrooms and high-traffic areas.
          </p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center">
          <img
            src={image3}
            alt="Service 3"
            className="w-64 h-64 md:w-[427px] md:h-auto object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-[#393939]">Veneer Plywood</h3>
          <p className="text-[#9F9F9F] text-start">
           For those who seek a natural wood finish, our veneer plywood offers a perfect solution.
          </p>
        </div>
      </div>

      {/* View All Button */}
      <button
        className="bg-[#E2761B] text-white px-8 py-3 text-lg btn-animation rounded"
        onClick={handleViewAllClick}
      >
        View All
      </button>
    </div>
  );
};

export default ServicesSection;

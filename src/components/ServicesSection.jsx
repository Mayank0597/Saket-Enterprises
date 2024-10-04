import React, { useEffect } from "react";
import image1 from "/src/assets/Optimize Image/Frame5311-ezgif.com-optiwebp.webp";
import image2 from "/src/assets/Optimize Image/Frame541-ezgif.com-png-to-webp-converter.webp";
import image3 from "/src/assets/Optimize Image/Frame551-ezgif.com-png-to-webp-converter.webp";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/services");
  };

  return (
    <div className="text-center py-12">
      {/* Heading */}
      <h2
        className="text-4xl md:text-[46px] font-semibold text-[#393939] mb-12"
        data-aos="fade-down"
      >
        Services
      </h2>

      {/* Images and text */}
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 mb-12 md:mx-20 gap-5">
        {/* Service 1 */}
        <div className="flex flex-col items-start w-1/3 gap-2">
          <img
            src={image1}
            alt="Service 1"
            className="w-full mb-4"
            data-aos="fade-right"
          />
          <h3 className="text-[19px] font-semibold text-[#393939]">Plywood</h3>
          <p className="text-[#9F9F9F] text-start open-sans text-base font-medium">
            We offer high-quality plywood that stands out for its strength,
            durability and versatility.
          </p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-start w-1/3 gap-2">
          <img
            src={image2}
            alt="Service 2"
            className="w-full mb-4"
            data-aos="fade-up"
          />
          <h3 className="text-[19px] font-semibold text-[#393939]">Mica</h3>
          <p className="text-[#9F9F9F] text-start open-sans text-base font-medium">
            Our range of mica sheets is designed to be an ideal choice of
            kitchens, bathrooms and high-traffic areas.
          </p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-start w-1/3 gap-2">
          <img
            src={image3}
            alt="Service 3"
            className="w-full mb-4"
            data-aos="fade-left"
          />
          <h3 className="text-[19px] font-semibold text-[#393939]">
            Veneer Plywood
          </h3>
          <p className="text-[#9F9F9F] text-start open-sans text-base font-medium">
            For those who seek a natural wood finish, our veneer plywood offers
            a perfect solution.
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

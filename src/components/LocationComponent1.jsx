import React from "react";

const LocationComponent1 = () => {
  return (
    <div className="w-full h-[400px] lg:h-[528px] mt-10 lg:mb-10 mb-[72px]">
      {/* Full-width map container */}
      <div className="relative w-full h-full">
        <iframe
          title="Location Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59522.9376927861!2d81.66518908271289!3d21.184864006013974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c7f101e1e9e1%3A0x370c11567e5da0c6!2sHousing%20board%20office%2C%20sector%2027!5e0!3m2!1sen!2sin!4v1728114617722!5m2!1sen!2sin"
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default LocationComponent1;

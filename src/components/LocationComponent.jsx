import React from "react";

const LocationComponent = () => {
  return (
    <div className="w-full h-[400px] lg:h-[528px] lg:mt-10 lg:mb-10">
      {/* Full-width map container */}
      <div className="relative w-full h-full">
        <iframe
          title="Location Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1856195691867!2d81.70381407471864!3d21.18478398240243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dcffd9b71bb5%3A0x38a0ed517f5ab004!2sDhamtari%20Rd%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1728114366384!5m2!1sen!2sin"
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default LocationComponent;

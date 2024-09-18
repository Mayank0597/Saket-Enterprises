import React from 'react'
import image from "/src/assets/Frame 74.png"

const AboutUsPageComp1 = () => {
  return (
    <div className="relative w-full h-[445px]">
      {/* Full-width image */}
      <img
        src={image}
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Centered heading */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl lg:text-6xl font-semibold text-white">
          About Us
        </h1>
      </div>
    </div>
  );
}

export default AboutUsPageComp1

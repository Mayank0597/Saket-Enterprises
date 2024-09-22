// import React from "react";
// import logoIcon1 from "/src/assets/ion_location-outline (1).png"
// import logoIcon2 from "/src/assets/fluent_call-48-regular.png"
// import logoIcon3 from "/src/assets/fluent_call-48-regular (1).png"
// import bgImage from "/src/assets/Frame 1890.png"

// const ContactForm = () => {
//   return (
//     <div className="relative w-[1005px] h-[836px] mx-auto flex justify-center items-center">
//       {/* Grey Background */}
//       <div className="absolute w-[1005px] h-[836px] bg-[#D3D3D3] mx-auto z-0" />

//       {/* Image Section */}
//       <div className="relative w-[579px] h-[646px] bg-white z-10">
//         <img
//           src={bgImage}
//           alt="Background Image"
//           className="w-[579px] h-[646px] object-cover"
//         />

//         {/* Contact Information on Image */}
//         <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-12 text-center text-white">
//           {/* Section 1: Address */}
//           <div className="flex flex-col items-center">
//             <img src={logoIcon1} alt="Address Icon" className="w-10 h-10 mb-2" />
//             <h3 className="text-lg font-bold">Address</h3>
//             <p className="text-sm">123 Main Street, City, Country</p>
//           </div>

//           {/* Section 2: Phone */}
//           <div className="flex flex-col items-center">
//             <img src={logoIcon2} alt="Phone Icon" className="w-10 h-10 mb-2" />
//             <h3 className="text-lg font-bold">Phone</h3>
//             <p className="text-sm">+91 97523-24111</p>
//           </div>

//           {/* Section 3: Email */}
//           <div className="flex flex-col items-center">
//             <img src={logoIcon3} alt="Email Icon" className="w-10 h-10 mb-2" />
//             <h3 className="text-lg font-bold">Email</h3>
//             <p className="text-sm">hello@houseofbastar.com</p>
//           </div>
//         </div>
//       </div>

//       {/* Contact Form */}
//       <div className="absolute right-[-213px] top-0 bottom-0 m-auto w-[536px] flex flex-col items-start space-y-4 p-8 bg-white z-20">
//         <h2 className="text-2xl font-bold mb-4">Get in touch with us!</h2>

//         {/* Name Input */}
//         <input
//           type="text"
//           placeholder="Name"
//           className="w-[536px] h-[45px] px-4 border border-gray-300 focus:outline-none"
//         />

//         {/* Phone Number Input */}
//         <input
//           type="text"
//           placeholder="Phone Number"
//           className="w-[536px] h-[45px] px-4 border border-gray-300 focus:outline-none"
//         />

//         {/* Email Input */}
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-[536px] h-[45px] px-4 border border-gray-300 focus:outline-none"
//         />

//         {/* Message Textarea */}
//         <textarea
//           placeholder="Write a message"
//           className="w-[536px] h-[195px] px-4 py-2 border border-gray-300 focus:outline-none resize-none"
//         />

//         {/* Submit Button */}
//         <button className="w-[536px] h-[45px] bg-[#E2761B] text-white font-bold hover:bg-orange-600">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React from "react";
import logoIcon1 from "/src/assets/ion_location-outline (1).png";
import logoIcon2 from "/src/assets/fluent_call-48-regular.png";
import logoIcon3 from "/src/assets/fluent_call-48-regular (1).png";
import bgImage from "/src/assets/Frame 1890.png";

const ContactForm = () => {
  return (
    <div className="relative flex justify-center items-center pt-40 pb-32 mr-36">
      {/* Grey Background starts from the middle of the image and extends right */}
      <div className="absolute right-0 w-[1005px] h-[836px] bg-[#F3F2F2] z-0" />

      {/* Image Section */}
      <div className="relative w-[579px] h-[646px] rounded-lg z-10">
        <img
          src={bgImage}
          alt="Background Image"
          className="w-[579px] h-[646px]"
        />

        {/* Contact Information on Image */}
        <div className="absolute top-1/4 left-1/4 transform translate-y-1/5 -translate-x-1/5 origin-center justify-center items-center text-white max-w-[407px] w-full">
          <div className='flex flex-col items-start gap-[61px]'>
          {/* Section 1: Address */}
          <div className="flex flex-row justify-center items-center">
            <img
              src={logoIcon1}
              alt="Address Icon"
              className="w-[20px] h-[30px] mr-5"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-3xl font-semibold text-[#E2761B]">Address</h3>
              <p className="text-lg font-medium text-[#E3E3E3]">Dhamtari Road, Abhanpur, Chhattisgarh</p>
            </div>
          </div>

          {/* Section 2: Phone */}
          <div className="flex flex-row items-center justify-center">
            <img
              src={logoIcon2}
              alt="Phone Icon"
              className="w-[23px] h-[30px] mr-5"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-3xl font-semibold text-[#E2761B]">Phone</h3>
              <p className="text-lg font-medium text-[#E3E3E3]">+91 97523-24111</p>
            </div>
          </div>

          {/* Section 3: Email */}
          <div className="flex flex-row items-center justify-center">
            <img
              src={logoIcon3}
              alt="Email Icon"
              className="w-[30px] h-[25px] mr-5"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-3xl font-semibold text-[#E2761B]">Email</h3>
              <p className="text-lg font-medium text-[#E3E3E3]">hello@houseofbastar.com</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Contact Form */}
      <div className="relative w-[536px] h-auto p-8 ml-14 bg-[#F3F2F2] z-20">
        <h2 className="text-[46px] font-semibold mb-4 text-[#393939]">
          <span className="text-[#E2761B]">Get in touch</span> with us!
        </h2>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Name"
          className="w-full h-[45px] px-4 border border-gray-300 bg-[#F3F2F2] focus:outline-none mb-4 rounded-lg"
        />

        {/* Phone Number Input */}
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full h-[45px] px-4 border border-gray-300 bg-[#F3F2F2] focus:outline-none mb-4 rounded-lg"
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full h-[45px] px-4 border border-gray-300 bg-[#F3F2F2] focus:outline-none mb-4 rounded-lg"
        />

        {/* Message Textarea */}
        <textarea
          placeholder="Write a message"
          className="w-full h-[195px] px-4 py-2 border focus:outline-none resize-none mb-4 bg-[#F3F2F2] rounded-lg border-gray-300"
        />

        {/* Submit Button */}
        <button className="w-full h-[45px] bg-[#E2761B] text-white font-semibold rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;

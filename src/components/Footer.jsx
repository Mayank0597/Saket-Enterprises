// import React from "react";
// import { NavLink } from "react-router-dom";
// import FbImage from "/src/assets/Frame 27.png";
// import instaImage from "/src/assets/Frame 28.png";
// import CompanyLogo from "/src/assets/Frame 3 (2).png";

// const Footer = () => {
//   return (
//     <footer className="bg-[#1C1C1C] text-white pt-[100px] pb-8 px-4">
//       {/* Contact Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:px-16">
//         <h2 className="text-xl md:text-3xl font-semibold text-[#FFF]">
//           Want to customize your product?
//           <br />
//           <span className=" text-[#E2761B]">Contact us Now!</span>
//         </h2>

//         {/* Contact form */}
//         <div className="flex items-center w-full md:w-auto bg-[#5c5c5c] rounded-[4px]">
//           <input
//             type="text"
//             placeholder="Email or Phone no."
//             className="text-[#9A9A9A] bg-[#5c5c5c] p-2 rounded focus:outline-none w-[338px]"
//           />
//           <button className="bg-[#E2761B] text-white px-4 py-2 rounded-[4px] w-[154px]">
//             Submit
//           </button>
//         </div>
//       </div>

//       {/* Horizontal Line */}
//       <div className="my-6 border-t ml-[62px] mr-[60px] border-[#393939]"></div>

//       {/* Footer Content */}
//       <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 px-16">
//         {/* Logo and text */}
//         <div className="flex flex-col items-start md:w-[425px]">
//           <img src={CompanyLogo} alt="Company Logo" className="w-52 mb-2" />
//           <p className="text-[#9A9A9A] open-sans font-normal text-base max-w-[425px] text-justify">
//             Saket Enterprises is a pioneering company based in Abhanpur, Raipur,
//             Chhattisgarh. It specializes in high-quality Plywood, Hardware,
//             Household Furniture, Bastar Art, Artifacts and Wood. Under the
//             leadership of Saket Tiwari, the founder and driving force behind the
//             enterprise.
//           </p>
//         </div>

//         {/* Social Media */}
//         <div className="flex flex-col items-start">
//           <h3 className="text-[#E2761B] text-[19px] font-semibold">
//             Follow us on:
//           </h3>
//           <div className="flex space-x-4 mt-2">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={FbImage} alt="Facebook" className="w-9 h-9" />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={instaImage} alt="Instagram" className="w-9 h-9" />
//             </a>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-col items-start">
//           <h3 className="text-[#E2761B] text-[19px] font-semibold">
//             Quick Links
//           </h3>
//           <ul className="mt-2 space-y-2">
//             <li>
//               <NavLink
//                 to="/"
//                 // className={({ isActive }) =>
//                 //   isActive
//                 //     ? "text-[#E2761B] open-sans text-[16px] font-medium"
//                 //     : "text-[#9A9A9A] open-sans text-[16px] font-medium"
//                 // }
//                 className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/services"
//                 // className={({ isActive }) =>
//                 //   isActive
//                 //     ? "text-[#E2761B] open-sans text-[16px] font-medium"
//                 //     : "text-[#9A9A9A] open-sans text-[16px] font-medium"
//                 // }
//                 className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
//               >
//                 Services
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/projects"
//                 // className={({ isActive }) =>
//                 //   isActive
//                 //     ? "text-[#E2761B] open-sans text-[16px] font-medium"
//                 //     : "text-[#9A9A9A] open-sans text-[16px] font-medium"
//                 // }
//                 className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
//               >
//                 Projects
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about"
//                 // className={({ isActive }) =>
//                 //   isActive
//                 //     ? "text-[#E2761B] open-sans text-[16px] font-medium"
//                 //     : "text-[#9A9A9A] open-sans text-[16px] font-medium"
//                 // }
//                 className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
//               >
//                 About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/contact"
//                 // className={({ isActive }) =>
//                 //   isActive
//                 //     ? "text-[#E2761B] open-sans text-[16px] font-medium"
//                 //     : "text-[#9A9A9A] open-sans text-[16px] font-medium"
//                 // }
//                 className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/terms"
//                 className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
//               >
//                 Terms and Condition
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="mt-8 text-center">
//         <p className="text-[#9A9A9A] text-base font-medium">
//           &copy; All Rights Reserved by{" "}
//           <span className="text-[#E2761B]">Saket Enterprises</span>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import LocationImage from "/src/assets/Frame 27 (1).png";
// import ContactImage from "/src/assets/Frame 28 (1).png";
// import emailImage from "/src/assets/Frame 29.png";
// import CompanyLogo from "/src/assets/Frame 3 (2).png";
// import mobileCompanyLogo from "/src/assets/Group 1.png";

// const Footer = () => {
//   return (
//     <footer className="bg-[#1C1C1C] text-white pt-[100px] md:pb-8 md:px-4">
//       {/* Contact Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:px-16">
//         <h2 className="text-[19px] md:text-3xl font-semibold text-[#FFF]">
//           Want to customize your product?
//           <br />
//           <span className="text-[#E2761B]">Contact us Now!</span>
//         </h2>

//         {/* Contact form */}

//         <div className="flex items-center w-full md:w-auto bg-[#5c5c5c] rounded-[4px]">
//           <input
//             type="text"
//             placeholder="Email or Phone no."
//             className="text-[#9A9A9A] bg-[#5c5c5c] p-2 rounded focus:outline-none w-[338px]"
//           />
//           <button className="bg-[#E2761B] text-white px-4 py-2 rounded-[4px] w-[154px]">
//             Submit
//           </button>
//         </div>
//       </div>

//       {/* Horizontal Line */}
//       <div className="my-6 border-t ml-[62px] mr-[60px] border-[#393939]"></div>

//       {/* Footer Content */}
//       <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 px-16">
//         {/* Logo and text */}
//         <div className="flex flex-col items-start md:w-[425px]">
//           <img
//             src={CompanyLogo}
//             alt="Company Logo"
//             className="w-52 mb-2 hidden md:block"
//           />

//           <div className="flex flex-col md:hidden items-center w-8 h-auto">
//             <img src={mobileCompanyLogo} alt="mobileCompanyLogo" />
//             <p className="text-xl font-bold">SAKET</p>
//             <p className="text-xl font-bold">ENTERPRISES</p>
//           </div>

//           <p className="text-[#9A9A9A] open-sans font-normal text-base md:max-w-[425px] text-justify">
//             Saket Enterprises is a pioneering company based in Abhanpur, Raipur,
//             Chhattisgarh. It specializes in high-quality Plywood, Hardware,
//             Household Furniture, Bastar Art, Artifacts and Wood. Under the
//             leadership of Saket Tiwari, the founder and driving force behind the
//             enterprise.
//           </p>
//         </div>

//         {/* Social Media */}
//         <div className="flex flex-col md:items-start items-center">
//           <h3 className="text-[#E2761B] text-[19px] font-semibold">
//             Follow us on:
//           </h3>
//           <div className="flex space-x-4 mt-2">
//             <NavLink
//               to="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={LocationImage} alt="Location" className="w-9 h-9" />
//             </NavLink>
//             <NavLink
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={ContactImage} alt="Contact" className="w-9 h-9" />
//             </NavLink>
//             <NavLink
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={emailImage} alt="emailImage" className="w-9 h-9" />
//             </NavLink>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-col md:items-start items-center">
//           <h3 className="text-[#E2761B] text-[19px] font-semibold">
//             Quick Links
//           </h3>
//           <ul className="mt-2 space-y-2 flex flex-col md:items-start items-center">
//             <li>
//               <NavLink
//                 to="/"
//                 className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/services"
//                 className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
//               >
//                 Services
//               </NavLink>
//             </li>
//             {/* <li>
//               <NavLink
//                 to="/projects"
//                 className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
//               >
//                 Projects
//               </NavLink>
//             </li> */}
//             <li>
//               <NavLink
//                 to="/about"
//                 className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
//               >
//                 About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/contact"
//                 className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* Legal Links */}
//         <div className="flex flex-col md:items-start items-center">
//           <h3 className="text-[#E2761B] text-[19px] font-semibold">Legal</h3>
//           <ul className="mt-2 space-y-2 flex flex-col md:items-start items-center">
//             <li>
//               <NavLink
//                 to="/terms"
//                 className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
//               >
//                 Terms & Conditions
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/privacy-policy"
//                 className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
//               >
//                 Privacy Policy
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="mt-8 text-center">
//         <p className="text-[#9A9A9A] text-base font-medium">
//           &copy; All Rights Reserved by{" "}
//           <span className="text-[#E2761B]">Saket Enterprises</span>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";
import LocationImage from "/src/assets/Frame 27 (1).png";
import ContactImage from "/src/assets/Frame 28 (1).png";
import emailImage from "/src/assets/Frame 29.png";
import CompanyLogo from "/src/assets/Frame 3 (2).png";
import mobileCompanyLogo from "/src/assets/Group 1.png";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-[100px] md:pb-8 md:px-16">
      {/* Contact Section */}
      {/* <div className="flex flex-col md:flex-row md:flex-wrap md:gap-5 justify-between items-center space-y-4 md:space-y-0 md:px-16">
        <h2 className="text-[19px] md:text-3xl font-semibold text-[#FFF]">
          Want to customize your product?
          <br />
          <span className="text-[#E2761B]">Contact us Now!</span>
        </h2> */}

      {/* Contact form */}
      {/* <div className="flex flex-col md:flex-row items-center w-full md:w-auto md:bg-[#5c5c5c] rounded-[4px] md:px-0 px-[30px] md:space-y-0 space-y-5">
          <input
            type="text"
            placeholder="Email or Phone no."
            className="text-[#9A9A9A] bg-[#5c5c5c] md:p-2 p-3 rounded focus:outline-none w-full md:w-[338px]"
          />
          <button className="bg-[#E2761B] text-white md:px-4 md:py-2 px-3 py-3 rounded-[4px] w-full sm:w-[154px]">
            Submit
          </button>
        </div>
      </div> */}

      {/* Horizontal Line */}
      {/* <div className="md:my-6 mt-[30px] mb-[50px] border-t md:mx-[60px] mx-[30px] border-[#393939]"></div> */}

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row md:flex-wrap justify-between space-y-[60px] md:space-y-0 md:px-16 px-[30px] md:gap-5">
        {/* Logo and heading (Saket Enterprises) for mobile view */}
        <div className="flex flex-col items-center md:items-start w-full md:w-[425px]">
          {/* Company logo */}
          <img
            src={CompanyLogo}
            alt="Company Logo"
            className="w-24 md:w-52 mb-2 hidden md:block"
          />

          {/* Text - Saket Enterprises for mobile */}
          <div className="md:hidden flex flex-col items-center ">
            <img
              src={mobileCompanyLogo}
              alt="mobileCompanyLogo"
              className="w-8 h-auto mb-2"
            />
            <h3 className="text-xl font-bold montserrat">SAKET</h3>
            <h3 className="text-xl font-bold montserrat">ENTERPRISES</h3>
          </div>

          {/* Company description */}
          <p className="text-[#9A9A9A] open-sans font-normal text-base text-justify mt-4">
            Saket Enterprises is a pioneering company based in Abhanpur, Raipur,
            Chhattisgarh. It specializes in high-quality Plywood, Hardware,
            Household Furniture, Bastar Art, Artifacts and Wood. Under the
            leadership of Saket Tiwari, the founder and driving force behind the
            enterprise.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col md:items-start items-center">
          <h3 className="text-[#E2761B] text-[19px] font-semibold">
            Contact us on:
          </h3>
          <div className="flex space-x-4 mt-2 md:items-start items-center">
            <NavLink
              to="https://maps.app.goo.gl/fjqKZzW8VdE7L6t16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LocationImage} alt="Location" className="w-9 h-9" />
            </NavLink>
            <NavLink
              to="tel:+919752324111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ContactImage} alt="Contact" className="w-9 h-9" />
            </NavLink>
            <NavLink
              to="mailto:Saketplywood@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={emailImage} alt="emailImage" className="w-9 h-9" />
            </NavLink>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:items-start items-center">
          <h3 className="text-[#E2761B] text-[19px] font-semibold">
            Quick Links
          </h3>
          <ul className="mt-2 space-y-2 flex flex-col md:items-start items-center">
            <li>
              <NavLink
                to="/"
                className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col md:items-start items-center">
          <h3 className="text-[#E2761B] text-[19px] font-semibold">Legal</h3>
          <ul className="mt-2 space-y-2 flex flex-col md:items-start items-center">
            <li>
              <NavLink
                to="/terms"
                className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
              >
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacy"
                className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
              >
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#393939] mt-[60px] hidden md:block"></div>

      {/* Copyright Section */}
      <div className="md:mt-8 text-center mt-[60px] md:pb-0 pb-[60px]">
        <p className="text-[#9A9A9A] text-base font-medium">
          &copy; All Rights Reserved by{" "}
          <span className="text-[#E2761B]">Saket Enterprises</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

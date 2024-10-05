import React from "react";
import { NavLink } from "react-router-dom";
import FbImage from "/src/assets/Frame 27.png";
import instaImage from "/src/assets/Frame 28.png";
import CompanyLogo from "/src/assets/Frame 3 (2).png";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-[100px] pb-8 px-4">
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:px-16">
        <h2 className="text-xl md:text-3xl font-semibold text-[#FFF]">
          Want to customize your product?
          <br />
          <span className=" text-[#E2761B]">Contact us Now!</span>
        </h2>

        {/* Contact form */}
        <div className="flex items-center w-full md:w-auto bg-[#5c5c5c] rounded-[4px]">
          <input
            type="text"
            placeholder="Email or Phone no."
            className="text-[#9A9A9A] bg-[#5c5c5c] p-2 rounded focus:outline-none w-[338px]"
          />
          <button className="bg-[#E2761B] text-white px-4 py-2 rounded-[4px] w-[154px]">
            Submit
          </button>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="my-6 border-t ml-[62px] mr-[60px] border-[#393939]"></div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 px-16">
        {/* Logo and text */}
        <div className="flex flex-col items-start md:w-[425px]">
          <img src={CompanyLogo} alt="Company Logo" className="w-52 mb-2" />
          <p className="text-[#9A9A9A] open-sans font-normal text-base max-w-[425px] text-justify">
            Saket Enterprises is a pioneering company based in Abhanpur, Raipur,
            Chhattisgarh. It specializes in high-quality Plywood, Hardware,
            Household Furniture, Bastar Art, Artifacts and Wood. Under the
            leadership of Saket Tiwari, the founder and driving force behind the
            enterprise.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start">
          <h3 className="text-[#E2761B] text-[19px] font-semibold">
            Follow us on:
          </h3>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FbImage} alt="Facebook" className="w-9 h-9" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaImage} alt="Instagram" className="w-9 h-9" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-[#E2761B] text-[19px] font-semibold">
            Quick Links
          </h3>
          <ul className="mt-2 space-y-2">
            <li>
              <NavLink
                to="/"
                // className={({ isActive }) =>
                //   isActive
                //     ? "text-[#E2761B] open-sans text-[16px] font-medium"
                //     : "text-[#9A9A9A] open-sans text-[16px] font-medium"
                // }
                className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                // className={({ isActive }) =>
                //   isActive
                //     ? "text-[#E2761B] open-sans text-[16px] font-medium"
                //     : "text-[#9A9A9A] open-sans text-[16px] font-medium"
                // }
                className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                // className={({ isActive }) =>
                //   isActive
                //     ? "text-[#E2761B] open-sans text-[16px] font-medium"
                //     : "text-[#9A9A9A] open-sans text-[16px] font-medium"
                // }
                className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                // className={({ isActive }) =>
                //   isActive
                //     ? "text-[#E2761B] open-sans text-[16px] font-medium"
                //     : "text-[#9A9A9A] open-sans text-[16px] font-medium"
                // }
                className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                // className={({ isActive }) =>
                //   isActive
                //     ? "text-[#E2761B] open-sans text-[16px] font-medium"
                //     : "text-[#9A9A9A] open-sans text-[16px] font-medium"
                // }
                className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terms"
                className="text-[#9A9A9A] open-sans text-[16px] font-medium hover:text-[#E2761B]"
              >
                Terms and Condition
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center">
        <p className="text-[#9A9A9A] text-base font-medium">
          &copy; All Rights Reserved by{" "}
          <span className="text-[#E2761B]">Saket Enterprises</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

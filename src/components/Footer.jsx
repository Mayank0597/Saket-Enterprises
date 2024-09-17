import React from "react";
import { Link } from "react-router-dom";
import FbImage from "/src/assets/Frame 27.png";
import instaImage from "/src/assets/Frame 28.png";
import CompanyLogo from "/src/assets/Frame 3 (2).png";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-20 px-4">
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:px-24">
        <h2 className="text-xl md:text-2xl font-bold text-[#FFFF]">
          Want to customize your product?<br />
          <span className="text-xl md:text-2xl font-bold text-[#E2761B]">
            Contact us Now!
          </span>
        </h2>

        {/* Contact form */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Email or Phone no."
            className="w-full md:w-auto bg-[#1C1C1C] border border-gray-500 text-white p-2 rounded-md focus:outline-none"
          />
          <button className="bg-[#E2761B] text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="my-6 border-t mx-10 border-[#393939]"></div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 px-24">
        {/* Logo and text */}
        <div className="flex flex-col items-start md:w-[425px]">
          <img src={CompanyLogo} alt="Company Logo" className="w-32 mb-2" />
          <p className="text-[#9A9A9A]">
            Saket Enterprises is a pioneering company based in Abhanpur, Raipur,
            Chhattisgarh. It specializes in high-quality Plywood, Hardware,
            Household Furniture, Bastar Art, Artifacts and Wood. Under the
            leadership of Saket Tiwari, the founder and driving force behind the
            enterprise.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start">
          <h3 className="text-[#E2761B] text-lg font-bold">Follow us on:</h3>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FbImage} alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaImage} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-[#E2761B] text-lg font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-400 text-[#9A9A9A]">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-gray-400 text-[#9A9A9A]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400 text-[#9A9A9A]">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-400 text-[#9A9A9A]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center">
        <p className="text-[#9A9A9A]">
          &copy; All Rights Reserved by{" "}
          <span className="text-[#E2761B] font-semibold">
            Saket Enterprises
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

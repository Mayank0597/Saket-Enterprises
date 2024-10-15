// import { NavLink } from "react-router-dom";
// import Logo from "/src/assets/Frame 3.png"

// const Navbar = () => {
//   return (
//     <nav className="bg-white">
//       <div className="container mx-auto px-16 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="text-xl font-bold">
//           <img src={Logo} alt="Company Logo" className="h-8 w-auto" />
//         </div>

//         {/* Links */}
//         <div className="space-x-8">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "text-[#E2761B]" : "text-black"
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/services"
//             className={({ isActive }) =>
//               isActive ? "text-[#E2761B]" : "text-black"
//             }
//           >
//             Services
//           </NavLink>

//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? "text-[#E2761B]" : "text-black"
//             }
//           >
//             About Us
//           </NavLink>

//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? "text-[#E2761B]" : "text-black"
//             }
//           >
//             Contact Us
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "/src/assets/Frame 3.png";
import MobileLogo from "/src/assets/Company Logo.png";
import LocationImage from "/src/assets/Frame 27 (3).png";
import ContactImage from "/src/assets/Frame 28 (2).png";
import emailImage from "/src/assets/Frame 29 (1).png";

const Navbar = () => {
  // State to control the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = ""; // Restore scroll
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <img src={Logo} alt="Company Logo" className="w-[145px]" />
        </div>

        {/* Hamburger Menu Icon for small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // Cross icon when menu is open
                    : "M4 6h16M4 12h16M4 18h16" // 3 horizontal lines of equal length
                }
              ></path>
            </svg>
          </button>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#E2761B]" : "text-black"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-[#E2761B]" : "text-black"
            }
          >
            Services
          </NavLink>

          {/* <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-[#E2761B]" : "text-black"
            }
          >
            Projects
          </NavLink> */}

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#E2761B]" : "text-black"
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#E2761B]" : "text-black"
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Overlay*/}
      {isOpen && (
        // <div className="md:hidden bg-white px-4 py-4 space-y-4">
        <div className="fixed left-0 top-0 right-0 bottom-0 bg-[#FFF] z-50 flex flex-col items-center pt-14">
          {/* Close button (X) */}
          <button
            className="absolute top-4 right-4 text-black"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={MobileLogo}
            alt="Company Logo"
            className="w-[100px] mb-10"
          />
          <ul className=" space-y-4 w-full pl-[30px] pr-[50px] text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#E2761B] font-semibold" : "text-[#393939]"
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <hr className="w-full" />
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-[#E2761B] font-semibold" : "text-[#393939]"
                }
                onClick={toggleMenu}
              >
                Services
              </NavLink>
            </li>
            <hr className="w-full" />
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-[#E2761B] font-semibold" : "text-[#393939]"
                }
                onClick={toggleMenu}
              >
                About Us
              </NavLink>
            </li>
            <hr className="w-full" />
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-[#E2761B] font-semibold" : "text-[#393939]"
                }
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
            </li>
            <hr className="w-full" />
          </ul>
          {/* Social Links (Location, Contact, Email Icons) */}
          <div className="mt-auto pb-8 pl-[30px] w-full flex justify-start space-x-5">
            <Link
              to="https://maps.app.goo.gl/fjqKZzW8VdE7L6t16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LocationImage} // Replace with your location icon path
                alt="Location"
                className="w-10 h-10"
              />
            </Link>
            <Link
              to="tel:+919752324111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ContactImage} // Replace with your contact icon path
                alt="Contact"
                className="w-10 h-10"
              />
            </Link>
            <Link
              to="mailto:Saketplywood@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={emailImage} // Replace with your email icon path
                alt="Email"
                className="w-10 h-10"
              />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

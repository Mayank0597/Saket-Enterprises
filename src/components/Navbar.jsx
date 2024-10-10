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

import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/src/assets/Frame 3.png";

const Navbar = () => {
  // State to control the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#E2761B]" : "text-black"
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-[#E2761B]" : "text-black"
            }
            onClick={toggleMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#E2761B]" : "text-black"
            }
            onClick={toggleMenu}
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#E2761B]" : "text-black"
            }
            onClick={toggleMenu}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

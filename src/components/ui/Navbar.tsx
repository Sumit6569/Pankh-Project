import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-[126px] w-[1512px] fixed top--1 z-50 bg-white shadow-md px-34 py-4 flex justify-between items-center overflow-x-hidden overflow-y-hidden">
      {/* Logo */}
      <div className="h-[138px] w-[138px] top-[10px] flex items-center space-x-2 ml-[12px]">
        <img
          src="/logo.png"
          alt="The Pankh Project Logo"
          className="h-15 w-auto"
        />
      </div>

      {/* Hamburger button - hidden by default */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="hidden flex-col justify-between h-6 w-8 cursor-pointer sm:hidden"
        aria-label="Toggle navigation menu"
      >
        <span className="block h-0.5 bg-black rounded"></span>
        <span className="block h-0.5 bg-black rounded"></span>
        <span className="block h-0.5 bg-black rounded"></span>
      </button>

      {/* Links */}
      <div
        className={`h-[61px] w-[791px] ml-16 flex items-center space-x-8 text-[#503440] font-thin text-base overflow-y-hidden overflow-x-hidden
        ${
          menuOpen
            ? "flex-col absolute top-[126px] left-0 w-full bg-white px-6 py-4 space-y-4 ml-0 z-40"
            : "sm:flex"
        }`}
      >
        <a
          href="/About"
          className="flex items-center space-x-1 text-[#503440] text-[20px] font-normal overflow-y-hidden font-['Albert Sans']"
        >
          <img
            src="/game-icons_feather.png"
            alt="feather icon"
            className="h-6 w-auto"
          />
          <span>Home</span>
        </a>
        <a
          href="#"
          className="text-[#503440] text-[20px] font-normal font-['Albert Sans']"
        >
          About
        </a>
        <a
          href="#"
          className="text-[#503440] text-[20px] font-normal font-['Albert Sans']"
        >
          Services
        </a>
        <a
          href="#"
          className="text-[#503440] text-[20px] font-normal font-['Albert Sans']"
        >
          Blogs
        </a>

        {/* CTA Button */}
        <button
          className="ml-6 px-6 py-2 rounded-[500px] border-[2.3px] border-[#AA587C] 
            bg-[#FFFFF] flex items-center justify-center text-center
            shadow-[inset_-8px_-8px_30px_rgba(213,137,80,0.25),inset_8px_8px_16px_rgba(170,88,124,0.2),inset_0_0_20px_rgba(255,255,255,0.3)]
            text-[#5B434E] font-['Albert Sans'] font-semibold
            transition-all duration-700 ease-in-out
            hover:bg-gradient-to-r hover:from-[#AA587C] hover:to-[#FD8950] hover:text-white hover:shadow-lg
            sm:ml-6 sm:px-6 sm:py-2"
        >
          Book Appointment
        </button>
      </div>

      {/* Responsive styles inside component */}
      <style>{`
        @media (max-width: 768px) {
          nav {
            width: 92% !important;
            height: auto !important;
            padding: 1rem 1.5rem !important;
          }
          /* Show hamburger on small */
          button.sm\\:hidden {
            display: flex !important;
          }
          /* Hide links container by default */
          div.h-\\[61px\\] {
            display: none !important;
          }
          /* Show links when menuOpen */
          div.h-\\[61px\\].flex-col {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            margin-left: 0 !important;
            position: absolute !important;
            top: 126px !important;
            left: 0 !important;
            background: white !important;
            padding: 1rem 1.5rem !important;
            box-shadow: 0 4px 6px rgb(0 0 0 / 0.1);
            z-index: 40 !important;
          }
          div.h-\\[61px\\] a {
            padding: 0.5rem 0 !important;
          }
          /* Stack the links vertically on small */
          div.h-\\[61px\\] {
            flex-wrap: nowrap !important;
          }
          /* Adjust button */
          button.ml-6 {
            margin-left: 0 !important;
            margin-top: 0.5rem !important;
            width: 100% !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

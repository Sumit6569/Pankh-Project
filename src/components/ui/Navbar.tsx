import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-2 py-9 flex justify-between items-center"
      style={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2 ml-3">
        <img
          src="/logo.png"
          alt="The Pankh Project Logo"
          className="h-16 w-auto ml-12"
        />
      </div>

      {/* Hamburger button - visible on small screens */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-col justify-between h-6 w-8 cursor-pointer sm:hidden"
        aria-label="Toggle navigation menu"
      >
        <span className="block h-0.5 bg-black rounded"></span>
        <span className="block h-0.5 bg-black rounded"></span>
        <span className="block h-0.5 bg-black rounded"></span>
      </button>

      {/* Desktop Links */}
      <div className="hidden sm:flex items-center space-x-8 text-[#503440] font-thin text-base">
        <a
          href="/About"
          className="flex items-center space-x-1 text-[20px] font-normal font-['Albert Sans']"
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
        <button
          className="ml-6 px-6 py-2 rounded-full border-2 border-[#AA587C] bg-white text-[#5B434E] font-semibold font-['Albert Sans']
            shadow-inner transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-[#AA587C] hover:to-[#FD8950] hover:text-white hover:shadow-lg"
        >
          Book Appointment
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white px-6 py-4 shadow-lg flex flex-col space-y-4 z-40">
          <a
            href="/About"
            className="flex items-center space-x-1 text-[#503440] text-[20px] font-normal font-['Albert Sans']"
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
          <button
            className="w-full px-6 py-2 rounded-full border-2 border-[#AA587C] bg-white text-[#5B434E] font-semibold font-['Albert Sans']
              shadow-inner transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-[#AA587C] hover:to-[#FD8950] hover:text-white hover:shadow-lg"
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

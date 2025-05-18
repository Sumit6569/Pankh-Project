import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-2 py-4 flex justify-between items-center">
      {/* Logo */}
      {/* Logo */}
      <div className="flex items-center space-x-2 ml-2 sm:ml-12">
        <img
          src="/logo.png"
          alt="The Pankh Project Logo"
          className="h-32 sm:h-32 w-auto drop-shadow-lg brightness-525 contrast-150 saturate-150 "
        />
      </div>

      {/* Hamburger / Cross Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden text-black focus:outline-none z-50"
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? (
          <X size={32} strokeWidth={2.5} />
        ) : (
          <Menu size={32} strokeWidth={2.5} />
        )}
      </button>

      {/* Desktop Menu */}
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
        <button className="ml-6 px-6 py-2 rounded-full border-2 border-[#AA587C] bg-white text-[#5B434E] font-semibold font-['Albert Sans'] shadow-inner transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-[#AA587C] hover:to-[#FD8950] hover:text-white hover:shadow-lg">
          Book Appointment
        </button>
      </div>

      {/* Mobile Dropdown Menu - Keep it dropping from top */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start space-y-4 px-4 py-6 text-[#503440] text-[20px] font-normal font-['Albert Sans'] sm:hidden transition-all duration-500 ease-in-out origin-top transform ${
          menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <a
          href="/About"
          onClick={() => setMenuOpen(false)}
          className="flex items-center space-x-2"
        >
          <img
            src="/game-icons_feather.png"
            alt="feather icon"
            className="h-6 w-auto"
          />
          <span>Home</span>
        </a>
        <a href="#" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a href="#" onClick={() => setMenuOpen(false)}>
          Blogs
        </a>
        <button
          className="w-full px-6 py-2 rounded-full border-2 border-[#AA587C] bg-white text-[#5B434E] font-semibold font-['Albert Sans'] shadow-inner transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-[#AA587C] hover:to-[#FD8950] hover:text-white hover:shadow-lg"
          onClick={() => setMenuOpen(false)}
        >
          Book Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

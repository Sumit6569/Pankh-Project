import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="h-[126px] w-[1512px] fixed top-0 z-50 bg-white shadow-md px-10 py-4 flex justify-between items-center overflow-x-hidden">
      {/* Logo */}
      <div className="h-[138px] w-[138px] top-[10px] flex items-center space-x-2 ml-[12px]">
        <img
          src="/logo.png"
          alt="The Pankh Project Logo"
          className="h-15 w-auto"
        />
      </div>

      {/* Links */}
      <div className="h-[61px] w-[791px]  flex items-center space-x-8 text-[#503440] font-thin text-base">
        <a
          href="#"
          className="flex items-center space-x-1 text-[#503440] text-[20px] font-normal font-['Albert Sans']"
        >
          <img
            src="/game-icons_feather.png"
            alt="feather icon"
            className="h-6 w-auto "
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

        {/* CTA */}
        <button
          className="ml-6 px-6 py-2 rounded-[500px] border-[2.3px] border-[#AA587C] 
    bg-[#FFFFF] flex items-center justify-center text-center
    shadow-[inset_-8px_-8px_30px_rgba(213,137,80,0.25),inset_8px_8px_16px_rgba(170,88,124,0.2),inset_0_0_20px_rgba(255,255,255,0.3)]
    text-[#5B434E] font-['Albert Sans'] font-semibold
    transition-all duration-700 ease-in-out
    hover:bg-gradient-to-r hover:from-[#AA587C] hover:to-[#FD8950] hover:text-white hover:shadow-lg"
        >
          Book Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

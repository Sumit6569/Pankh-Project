import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[611px] bg-opacity-92">
      {/* Background gradient overlay */}
      <div className="absolute w-full inset-0 bg-gradient-to-r from-[#41343a] via-[#000000] to-[#000000] opacity-[16]" />

      {/* Decorative feather images */}
      {/* Decorative feather images */}
      <img
        className="absolute w-[252px] h-[172px] right-[347px] top-[500px] bottom-0 right-[30%] z-0 opacity-95 rotate-[46deg]
    mix-blend-soft-light filter blur-[1px]"
        alt="Decorative feather"
        src="/side.png"
      />

      <img
        className="absolute w-[170px] h-[213px] top-0 right-0 z-0 opacity-25 rotate-[46deg]
    mix-blend-soft-light filter blur-[1px]"
        alt="Decorative feather"
        src="/pic.png"
      />

      <div className="relative h-[611px] w-[2100px]  z-10 max-w-7xl mx-auto px-10 py-20 flex flex-col md:flex-row items-center gap-16">
        {/* Left Text Content */}
        <div className="flex-1 space-y-8  h-[426px] w-[576px] mt-[219px]">
          <h1 className="space-y-1 font-['Albert Sans']">
            <span className="text-white text-[50px] font-normal leading-tight block font-['Albert Sans']">
              Wings of Change
            </span>

            <span className="text-[#FFF2EC] text-[45px] font-bold leading-tight block mt-[70px] font-['Albert Sans']">
              Your Inner Transformation
            </span>
          </h1>
          <p className="text-[23px] text-[#efefef] leading-relaxed max-w-[480px] mt-3 font-albert-sans flex flex-col ">
            <span>Step into The Pankh Project, where holistic </span>
            <span>inseparable link between your physical </span>
          </p>
          <button
            className="top-[480px] absolute w-[291px] h-[73px] text-[#5B434E] text-[25px] 
    font-semibold tracking-[-0.75px] rounded-[500px] border-[3px] border-[#AA587C]
    bg-[#FFF9FC] shadow-[inset_-8px_-8px_30px_rgba(253,137,80,0.4),inset_8px_8px_16px_rgba(170,88,124,0.36)]
    transition-all duration-500 ease-in-out
    hover:bg-gradient-to-r hover:from-[#AA587C] hover:to-[#FD8950] hover:text-white hover:shadow-lg"
          >
            Book Now
          </button>
          <span className="text-[#FFF2EC] text-[48px] font-bold leading-tight block absolute top-[170px] left-[426px]">
            Empowering
          </span>
          <span className="text-[23px] text-[#efefef] leading-relaxed max-w-[480px] absolute mt-4 font-['Albert Sans'] flex flex-col gap-2 top-[320px] left-[475px]">
            healing recognizes the
          </span>

          <span className="text-[23px] text-[#efefef] leading-relaxed max-w-[480px] absolute mt-4 font-['Albert Sans'] flex flex-col gap-2 top-[354px] left-[440px]">
            sensation
          </span>
        </div>

        {/* Right Image */}
        <div className="flex-1  h-[611px] w-[10px] ml-[9px]  flex justify-end items-center">
          <img
            src="/hero-image.jpg"
            alt="Dancer"
            className="w-[359px] h-[611px] mr-[9px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

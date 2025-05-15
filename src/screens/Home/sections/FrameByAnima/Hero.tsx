import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-auto bg-black text-white py-20 px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#AA587C] via-black to-black opacity-90 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
        {/* Left Text Content */}
        <div className="flex-1 text-left space-y-8 max-w-[976px] ">
          <h1 className="text-2xl md:text-[50px] leading-tight font-['Albert Sans']">
            Wings of Change <span className="font-bold">Empowering</span>{" "}
            <span className="font-bold">Your Inner Transformation</span>
          </h1>

          <p className="text-[18px] md:text-[20px] text-[#efefef] font-['Albert Sans'] leading-relaxed max-w-[480px]">
            Step into The Pankh Project, where holistic healing recognizes the
            inseparable link between your physical sensation
          </p>

          <button
            className="mt-4 w-[200px] h-[60px] text-[#5B434E] text-[20px] font-semibold rounded-full border-[3px] border-[#AA587C]
            bg-[#FFF9FC] shadow-[inset_-8px_-8px_30px_rgba(253,137,80,0.4),inset_8px_8px_16px_rgba(170,88,124,0.36)]
            transition duration-300 ease-in-out
            hover:bg-gradient-to-r hover:from-[#AA587C] hover:to-[#FD8950] hover:text-white hover:shadow-lg"
          >
            Book Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/hero-image.jpg"
            alt="Dancer"
            className="w-[300px] md:w-[449px] h-auto object-cover rounded-tr-[100px] mt-6 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

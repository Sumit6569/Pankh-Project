import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero-section relative w-full h-screen md:h-[700px] bg-black text-white py-20 px-6 overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#AA587C] via-black to-black opacity-90 z-0" />

      {/* Feather Decorations */}
      <img
        src="/side.png"
        alt="Feather"
        className="absolute w-[120px] md:w-[200px] h-[120px] md:h-[150px] bottom-0 left-[5%] opacity-10 rotate-[46deg] z-0 hidden sm:block ml-12"
      />
      <img
        src="/pic.png"
        alt="Feather"
        className="absolute w-[130px] md:w-[170px] h-[160px] md:h-[213px] top-0 right-0 opacity-10 rotate-[46deg] z-0 hidden sm:block ml-[80px]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-6">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6 max-w-[600px]">
          <h1 className="text-3xl md:text-[50px] leading-snug font-['Albert Sans']">
            Wings of Change <span className="font-extrabold">Empowering</span>{" "}
            <span className="font-extrabold">Your Inner Transformation</span>
          </h1>

          <p className="text-[18px] md:text-[20px] text-[#efefefcc] font-['Albert Sans'] leading-relaxed whitespace-pre-line">
            {`Step into The Pankh Project,\nwhere holistic healing recognizes the\ninseparable link between your physical sensation`}
          </p>

          <button
            className="mt-4 w-[220px] h-[60px] text-[#5B434E] text-[20px] font-semibold rounded-full border-[3px] border-[#AA587C]
              bg-gradient-to-br from-[#FFF9FC] to-[#FDEEEE] shadow-[inset_-8px_-8px_30px_rgba(253,137,80,0.4),inset_8px_8px_16px_rgba(170,88,124,0.36)]
              transition duration-300 ease-in-out
              hover:bg-gradient-to-r hover:from-[#AA587C] hover:to-[#FD8950] hover:text-white hover:shadow-lg"
          >
            Book Now
          </button>
        </div>

        {/* Right Image */}
        <div className="hero-image flex-1 flex justify-center md:justify-end mt-10">
          <img
            src="/hero-image.jpg"
            alt="Dancer"
            className="w-[250px] sm:w-[280px] md:w-[449px] h-[360px] sm:h-[420px] md:h-[620px] object-cover rounded-tr-[100px] rounded-tl-[50px] mt-8 md:mt-0"
          />
        </div>
      </div>

      {/* Scoped media query */}
      <style>{`
  @media (max-width: 767.98px) {
  .hero-image{
    margin-top: 0 !important;
  }
    .hero-section {
      height: 125vh !important;
      padding-top: 3rem !important;
      padding-bottom: 1rem !important;
    }

    .hero-content h1 {
      font-size: 1.8rem !important;
      margin-top: 9rem !important;
    }

    .hero-content p {
      font-size: 1rem !important;
      line-height: 1.3 !important;
      margin: 0.5rem 0 !important;
    }

    .hero-content button {
      width: 160px !important;
      height: 50px !important;
      font-size: 1rem !important;
    }
  }
`}</style>
    </section>
  );
};

export default Hero;

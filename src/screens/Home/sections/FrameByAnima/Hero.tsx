import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen md:h-[700px] bg-black text-white py-20 px-6 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#AA587C] via-black to-black opacity-90 z-0" />

      {/* Feather Decorations - Hidden on small screens */}
      <img
        src="/side.png"
        alt="Feather"
        className="absolute w-[120px] md:w-[200px] h-[120px] md:h-[150px] bottom-0 left-[5%] opacity-10 rotate-[46deg] z-0 hidden sm:block"
      />
      <img
        src="/pic.png"
        alt="Feather"
        className="absolute w-[130px] md:w-[170px] h-[160px] md:h-[213px] top-0 right-0 opacity-10 rotate-[46deg] z-0 hidden sm:block"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12 px-4 md:px-6">
        {/* Left Text Content */}
        <div className="flex-1 text-left space-y-6 max-w-[600px] mt-6 md:mt-11">
          <h1 className="text-3xl md:text-[50px] leading-snug font-['Albert Sans']">
            Wings of Change <span className="font-extrabold">Empowering</span>{" "}
            <span className="font-extrabold">Your Inner Transformation</span>
          </h1>

          <p className="text-[18px] md:text-[20px] text-[#efefefcc] font-['Albert Sans'] leading-relaxed max-w-[480px] whitespace-pre-line">
            {`Step into The Pankh Project,\nwhere holistic healing recognizes the\ninseparable link between your physical sensation`}
          </p>

          <button
            className="mt-6 w-[220px] h-[60px] text-[#5B434E] text-[20px] font-semibold rounded-full border-[3px] border-[#AA587C]
              bg-gradient-to-br from-[#FFF9FC] to-[#FDEEEE] shadow-[inset_-8px_-8px_30px_rgba(253,137,80,0.4),inset_8px_8px_16px_rgba(170,88,124,0.36)]
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
            className="w-[280px] sm:w-[300px] md:w-[449px] h-[400px] sm:h-[500px] md:h-[620px] object-cover rounded-tr-[100px] mt-6 md:mt-0"
          />
        </div>
      </div>

      {/* Responsive adjustments for small screens */}
      <style>{`
        @media (max-width: 767.98px) {
          section > div.z-10 {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            ovrflow: hidden !important;
          }

          section h1 {
            font-size: 1.8rem !important;
            margin-top: 4.5rem !important;
          }

          section p {
            font-size: 0.95rem !important;
            max-width: 100% !important;
          }

          section button {
            width: 160px !important;
            height: 50px !important;
            font-size: 1rem !important;
          }

          section img[alt="Dancer"] {
            width: 220px !important;
            height: 320px !important;
            margin-top: 0rem !important;
border-top-right-radius: 42px !important;    
border-top-left-radius: 33px !important;
      }
             section {
    padding-top: 2rem !important;
    padding-bottom: 0rem !important;
  }
        }
   section p {
    font-size: 0.95rem !important;
    max-width: 100% !important;
    line-height: 1 !important; /* ⬅ tighter line spacing */
    margin-top: 0.5rem !important; /* ⬅ reduce space above */
    margin-bottom: 0.5rem !important; /* ⬅ reduce space below */
  }
      `}</style>
    </section>
  );
};

export default Hero;

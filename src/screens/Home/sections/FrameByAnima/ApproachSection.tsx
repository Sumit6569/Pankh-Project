import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ApproachSection = () => {
  return (
    <div className="relative bg-black overflow-x-hidden text-white font-[Inter]">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Alberts+Sons&display=swap");

        .text-albert {
          font-family: "Alberts Sons", cursive;
        }

        .inner-shadow-bottom-right {
          position: relative;
          z-index: 0;
        }

        .inner-shadow-bottom-right::before {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 120%;
          height: 100%;
          pointer-events: none;
          border-radius: 0.5rem;
          box-shadow:
            inset -10px -10px 20px 0 #FD8950,
            inset -20px -20px 40px 0 #000000;
          z-index: -1;
        }

        .content {
          background-color: #141414;
          border-radius: 0.75rem;
          padding: 1.75rem 1.5rem;
        }
      `}</style>

      {/* Background image */}
      <img
        src="https://storage.googleapis.com/a1aa/image/bfee442c-9522-4423-1794-689ec551a5e3.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-10 pb-16 inner-shadow-bottom-right">
        <h2 className="text-center font-extrabold text-3xl sm:text-4xl mb-10">
          The Approach
        </h2>

        {/* Images */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center mb-12">
          <img
            src="/approach1.jpg"
            alt="Approach 1"
            className="w-full sm:w-[300px] h-[250px] md:h-[350px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/approach2.jpg"
            alt="Approach 2"
            className="w-full sm:w-[300px] h-[250px] md:h-[350px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/approach3.jpg"
            alt="Approach 3"
            className="w-full sm:w-[300px] h-[250px] md:h-[350px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center px-4 space-y-3 mb-12 text-base sm:text-lg text-gray-300">
          <p>
            At The Pankh Project, we believe healing involves your whole self.
            Your thoughts, feelings, physical sensations, and energy are all
            connected.
          </p>
          <p>
            Our approach honours this connection to help you find balance and
            well-being. Our process is collaborative and tailored to you, aiming
            to help you feel more whole, balanced, and empowered on your unique
            journey.
          </p>
          <p className="text-2xl font-extrabold text-white mt-8">
            By Finding Your Roots, Growing Your Wings
          </p>
        </div>

        {/* Three boxes */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-6xl mx-auto px-4">
          {/* Box 1 */}
          <div className="flex-1 max-w-md content text-center">
            <i className="fas fa-bolt text-4xl mb-3 bg-gradient-to-r from-[#AA587C] to-[#FD8950] bg-clip-text text-transparent"></i>
            <h4 className="text-xl font-bold bg-gradient-to-r from-[#AA587C] to-[#FD8950] bg-clip-text text-transparent mb-2">
              Grounding in Your Strength
            </h4>
            <p className="text-gray-300 text-sm sm:text-base">
              We start by helping you connect with your inner strength and
              wisdom. Like strong roots, this creates a foundation of safety and
              stability.
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex-1 max-w-md content text-center">
            <i className="fas fa-feather-alt text-4xl mb-3 bg-gradient-to-r from-[#AA587C] to-[#FD8950] bg-clip-text text-transparent"></i>
            <h4 className="text-xl font-bold bg-gradient-to-r from-[#AA587C] to-[#FD8950] bg-clip-text text-transparent mb-2">
              Honoring Your Story
            </h4>
            <p className="text-gray-300 text-sm sm:text-base">
              Together, we explore your lived experiences in a safe space. Your
              story matters, and we honour it with care and compassion.
            </p>
          </div>

          {/* Box 3 */}
          
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;

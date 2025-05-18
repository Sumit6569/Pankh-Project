import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ApproachSection = () => {
  return (
    <div className="relative bg-black overflow-x-hidden overflow-y-hidden text-white font-[Inter]">
      <style>{`
        /* Import Inter + Albert Sans */
        @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;700&display=swap");

        .text-albert {
          font-family: "Albert Sans", sans-serif;
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

        .mobile-img {
          display: none !important;
        }

        /* Feather background styles */
        .feather {
          position: absolute;
          opacity: 0.1;
          pointer-events: none;
          z-index: 1;
          width: 300px;
          height: auto;
        }

        .feather1 {
        position: absolute;
          width: 500px;
          height: 500px;
          top: 0;
          left: 75%;
          opacity: 0.1;
          z-index: 50;
          margin-bottom: 100px;
          transform: rotate(-15deg);
        }

        .feather2 {
          position: absolute;
          width: 500px;
          height: 500px;
          top: 0;
          left: 5%;
          opacity: 0.1;
          z-index: 0;
          margin-bottom: 100px;
          transform: rotate(-15deg);
        }
        .feather4 {
          position: absolute;
          width: 400px;
          height: 400px;
          top: 5%;
          left: 40%;
          opacity: 0.1;
          z-index: 0;
          margin-bottom: 100px;
          transform: rotate(-15deg);
        }

        .feather3 {
  position: absolute;
  width: 532px;
  height: 480px;
  bottom: 4%;
  top: 740px;
  left: 100%;
  transform: translateX(-50%) rotate(50deg);
  transform-origin: center;
  max-width: 100%;
  overflow: hidden;
  pointer-events: none;
 z-index: 0;
  
  
}

        /* Mobile styles */
        @media (max-width: 640px) {
          .approach-card {
            width: 110% !important;
            margin-left: -6% !important;
          }

          .approach-card p {
            font-family: "Albert Sans", sans-serif !important;
            font-size: 13px !important;
            font-weight: 500 !important;
            line-height: 1.55 !important;
            letter-spacing: -0.01em !important;
            text-align: center !important;
            color: rgba(255, 255, 255, 0.9) !important;
          }

          .approach-card p:last-child {
            width: 120% !important;
            margin-left: -10% !important;
            font-size: 17px !important;
            font-weight: 800 !important;
            color: #ffffff !important;
            margin-top: 2rem;
          }

          .approach-images {
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            overflow-x: hidden !important;
            justify-content: center;
            gap: 10px;
          }

          .img-left,
          .img-right {
            width: 90px !important;
            height: 134px !important;
            flex-shrink: 0;
            border-radius: 15px !important;
          }

          .mobile-img {
            width: 90px !important;
            height: 134px !important;
            flex-shrink: 0;
            border-radius: 15px !important;
          }

          .img-middle {
            width: 172px !important;
            height: 134px !important;
            flex-shrink: 0;
            border-radius: 15px !important;
          }

          .content {
            padding: 1rem 2.5rem !important;
            max-width: 345px !important;
            height: 274px !important;
            margin-top: 1rem !important;
          }

          .content h4 {
            font-size: 1.25rem !important;
          }

          .content p {
            font-size: 0.85rem !important;
            line-height: 1.4 !important;
            color: #FFE4F0D1 !important;
            font-weight: 400px !important;
          }

          .content i {
            font-size: 1.625rem !important;
            margin-bottom: 0.5rem !important;
          }

          .img-left {
            display: none !important;
          }

          .mobile-img {
            display: block !important;
          }
        }
      `}</style>

      {/* Background image */}
      <img
        src="https://storage.googleapis.com/a1aa/image/bfee442c-9522-4423-1794-689ec551a5e3.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
      />

      {/* Feather overlays */}
      <img src="/pic.png" alt="Feather 1" className="feather feather1" />
      <img src="/pic2.png" alt="Feather 2" className="feather feather2" />
      <img src="/pic2.png" alt="Feather 2" className="feather feather4" />
      <img src="/feather3.png" alt="Feather 3" className="feather feather3" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-10 pb-16 inner-shadow-bottom-right">
        <h2 className="text-center font-extrabold text-3xl sm:text-4xl mb-10">
          The Approach
        </h2>

        {/* Images Row */}
        <div className="approach-images flex flex-col sm:flex-row flex-wrap gap-6 justify-center mb-12">
          <img
            src="/approach1.jpg"
            alt="Approach 1"
            className="img-left w-full sm:w-[300px] h-[250px] md:h-[350px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/approach1-mobile.jpg"
            alt="Approach 1 Mobile"
            className="img-left mobile-img w-full sm:w-[300px] h-[250px] md:h-[350px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/approach2.jpg"
            alt="Approach 2"
            className="img-middle w-full sm:w-[490px] h-[250px] md:h-[350px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/approach3.jpg"
            alt="Approach 3"
            className="img-right w-full sm:w-[300px] h-[250px] md:h-[350px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Description */}
        <div className="approach-card mx-auto text-center px-6 sm:px-8 lg:px-12 text-base sm:text-lg text-gray-300 leading-relaxed max-w-5xl ">
          <p>
            At The Pankh Project, we believe healing involves your whole
            self.Your thoughts, feelings, physical sensations, and energy are
            all connected. Our approach honours this connection to help you find
            balance and well-being. Our process is collaborative and tailored to
            you, aiming to help you feel more whole, balanced, and empowered on
            your unique journey.
          </p>
          <p className="text-4xl font-extrabold text-white mt-8">
            By Finding Your Roots, Growing Your Wings
          </p>
        </div>

        {/* Three boxes */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-6xl mx-auto px-4 mt-9">
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
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;

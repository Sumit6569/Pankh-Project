import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ApproachSection = () => {
  return (
    <div className="relative bg-black overflow-x-hidden">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Alberts+Sons&display=swap");

        body {
          font-family: "Inter", sans-serif;
          overflow-x: hidden;
          justify-content: center;
        }

        .inner-shadow-bottom-right {
          position: relative;
          z-index: 0;
          margin-right: 9px;
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
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .text-albert {
          font-family: "Alberts Sons", cursive;
        }

        @media (max-width: 768px) {
          .relative.max-w-7xl {
            padding: 2rem 1rem !important;
          }

          h2.font-extrabold {
            font-size: 24px !important;
            margin-bottom: 2rem !important;
          }

          .w-[1700px],
          .w-[1400px],
          .w-[1280px],
          .w-[1000px],
          .w-9xl,
          .max-w-6xl,
          .max-w-4xl {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            padding: 0 1rem !important;
          }

          img.rounded-[20px],
          img.rounded-[40px],
          .flex.flex-col.sm\\:flex-row img {
            height: 300px !important;
            width: 100% !important;
            margin-bottom: 1rem !important;
            border-radius: 16px !important;
          }

          .text-[21px] {
            font-size: 16px !important;
            padding: 0 1rem !important;
          }

          .text-3xl {
            font-size: 24px !important;
            margin-top: 2rem !important;
            padding: 0 1rem !important;
          }

          .gradient-border {
            flex-direction: column !important;
            gap: 2rem !important;
            padding: 0 1rem !important;
          }

          .content {
            padding: 1.25rem 1rem !important;
            margin-bottom: 1rem !important;
            max-width: 320px !important;
            margin: 0 auto !important;
            min-height: 200px !important;
          }

          .content p {
            font-size: 14px !important;
            line-height: 1.4 !important;
          }
        }

        @media (max-width: 480px) {
          img.rounded-[20px],
          img.rounded-[40px],
          .flex.flex-col.sm\\:flex-row img {
            height: 180px !important;
            width: 100% !important;
            margin-bottom: 1rem !important;
            border-radius: 12px !important;
          }

          .text-[21px] {
            font-size: 14px !important;
            padding: 0 0.5rem !important;
          }

          .text-3xl {
            font-size: 20px !important;
            margin-top: 1.5rem !important;
            padding: 0 0.5rem !important;
          }

          .content {
            max-width: 580px !important;
            padding: 0.75rem !important;
            min-height: 180px !important;
            margin: 0 auto !important;
          }

          .content h4 {
            font-size: 16px !important;
            margin-bottom: 0.5rem !important;
          }

          .content i {
            font-size: 52px !important;
            margin-bottom: 0.5rem !important;
          }

          .content p {
            font-size: 13px !important;
            line-height: 1.3 !important;
          }

          .gradient-border {
            gap: 1rem !important;
            padding: 0 0.5rem !important;
          }

          h2.font-extrabold {
            font-size: 20px !important;
          }

          /* ✅ Override gradient icons/text for mobile */
          .content i,
          .content h4 {
            background: none !important;
            -webkit-background-clip: initial !important;
            -webkit-text-fill-color: white !important;
            color: white !important;
          }
        }
      `}</style>

      {/* Background pattern */}
      <img
        src="https://storage.googleapis.com/a1aa/image/bfee442c-9522-4423-1794-689ec551a5e3.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
      />

      <div className="sm:px-6 lg:px-8 pt-10 pb-16 text-center text-white inner-shadow-bottom-right ml-64">
        <h2 className="font-extrabold text-[30px] mb-6">The Approach</h2>

        {/* Images */}
        <div className="flex flex-col w-[1700px] gap-10 sm:flex-row justify-center mb-8 max-w-6xl">
          <div className="w-full sm:w-[950px]">
            <img
              src="/approach1.jpg"
              alt="Woman dancing"
              className="w-full h-[350px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="w-full sm:w-[1280px]">
            <img
              src="/approach2.jpg"
              alt="Arms raised"
              className="w-[650px] h-[350px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="w-full sm:w-[950px] mr-36">
            <img
              src="/approach3.jpg"
              alt="Green outfit"
              className="w-full h-[350px] rounded-[20px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Paragraph */}
        <div className="font-[#FFFFFFCC] w-[1000px] py-12 mr-36">
          <div className="w-9xl mx-auto space-y-1 text-center text-[21px]">
            <p className="text-gray-300">
              At The Pankh Project, we believe healing involves your whole self.
              Your thoughts, feelings, physical
            </p>
            <p className="text-gray-300">
              sensations, and energy are all connected. Our approach honours
              this connection to help you find
            </p>
            <p className="text-gray-300">
              balance and well-being. Our process is collaborative and tailored
              to you, aiming to help you feel
            </p>
            <p className="text-gray-300">
              more whole, balanced, and empowered on your unique journey.
            </p>
          </div>
          <p className="text-3xl mt-20 font-extrabold text-white">
            By Finding Your Roots, Growing Your Wings
          </p>
        </div>

        {/* Cards */}
        <div className="gradient-border flex flex-col sm:flex-row justify-start gap-6 max-w-4xl mx-auto px-2 sm:px-0 mr-48">
          {/* Card 1 */}
          <div className="flex-1 max-w-sm mx-auto sm:mx-0">
            <div className="content text-center py-6 px-4">
              <div className="flex flex-col items-center justify-center mb-4">
                <i className="fas fa-bolt text-4xl mb-3 bg-gradient-to-r from-[#AA587C] to-[#FD8950] bg-clip-text text-transparent"></i>
                <h4 className="text-xl font-bold bg-gradient-to-r from-[#AA587C] to-[#FD8950] bg-clip-text text-transparent">
                  Grounding in Your Strength
                </h4>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                We start by helping you connect with your inner strength and
                wisdom. Like strong roots, this creates a foundation of safety
                and stability.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 max-w-sm mx-auto sm:mx-0">
            <div className="content text-center py-6 px-4">
              <div className="flex flex-col items-center justify-center mb-4">
                <i className="fas fa-feather-alt text-4xl mb-3 bg-gradient-to-r from-[#AA587C] to-[#FD8950] bg-clip-text text-transparent"></i>
                <h4 className="text-xl font-bold bg-gradient-to-r from-[#AA587C] to-[#FD8950] bg-clip-text text-transparent">
                  Building Resilience
                </h4>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                From this grounded place, we guide you in developing your
                ability to cope with challenges, adapt to change, and grow –
                like finding your wings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;

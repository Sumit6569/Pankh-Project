import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Make sure this path is correct

const ApproachSection = () => {
  return (
    <div className="relative bg-black overflow-x-hidden">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Alberts+Sons&display=swap");

        body {
          font-family: "Inter", sans-serif;
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
      `}</style>

      {/* Background pattern */}
      <img
        src="https://storage.googleapis.com/a1aa/image/bfee442c-9522-4423-1794-689ec551a5e3.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center text-white inner-shadow-bottom-right">
        <h2 className="font-extrabold text-[30px] mb-6">The Approach</h2>

        {/* Images */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 px-2 sm:px-0">
          <img
            src="https://storage.googleapis.com/a1aa/image/94f83f7e-8ca7-435b-7457-9f69106ee6d8.jpg"
            alt="Woman dancing"
            className="rounded-2xl w-full sm:w-[300px] object-cover"
            height="400"
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/3ac90e3f-248e-4c05-b00a-d649759f1bdd.jpg"
            alt="Arms raised"
            className="rounded-2xl w-full sm:w-[400px] object-cover"
            height="400"
          />
          <img
            src="https://storage.googleapis.com/a1aa/image/1bd607af-e59e-425c-89a1-363bafc8fc52.jpg"
            alt="Green outfit"
            className="rounded-2xl w-full sm:w-[300px] object-cover"
            height="400"
          />
        </div>

        {/* Paragraph */}
        <div className="font-[#FFFFFFCC] py-12 px-4">
          <div className="w-4xl  mx-auto space-y-1 text-center text-[24px]">
            <p className=" text-gray-300">
              At The Pankh Project, we believe healing involves your whole self.
              Your thoughts, feelings, physical
            </p>

            <p className=" text-gray-300">
              sensations, and energy are all connected.Our approach honours this
              connection to help you find
            </p>

            <p className=" text-gray-300">
              balance and well-being. Our process is collaborative and tailored
              to you, aiming to help you feel
            </p>

            <p className=" text-gray-300">
              more whole, balanced, and empowered on your unique journey.
            </p>
          </div>
          <p className="text-3xl mt-20 font-extrabold text-white">
            By Finding Your Roots, Growing Your Wings
          </p>
        </div>

        {/* Cards */}
        <div className="gradient-border flex flex-col sm:flex-row justify-center gap-8 max-w-5xl mx-auto px-2 sm:px-0">
          {/* Card 1 */}
          <div className="flex-1 max-w-md mx-auto sm:mx-0">
            <div className="content text-center">
              <div className="flex flex-col items-center justify-center mb-4">
                <i className="fas fa-bolt text-4xl mb-3 bg-gradient-to-r from-[#FD8950] to-[#ffb17c] bg-clip-text text-transparent"></i>
                <h4 className="text-xl font-bold bg-gradient-to-r from-[#FD8950] to-[#ffb17c] bg-clip-text text-transparent">
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
          <div className="flex-1 max-w-md mx-auto sm:mx-0">
            <div className="content text-center">
              <div className="flex flex-col items-center justify-center mb-4">
                <i
                  className="fas fa-feather-alt text-4xl mb-3 bg-gradient-to-r from-[#FD8950] to-[#ffb17c]
 bg-clip-text text-transparent"
                ></i>
                <h4
                  className="text-xl font-bold bg-gradient-to-r from-[#FD8950] to-[#ffb17c]
 bg-clip-text text-transparent"
                >
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

  import React from "react";

  const Hero: React.FC = () => {
    return (
      <section className="hero-section  font-albert relative w-full h-screen md:h-[700px] bg-black text-white py-20 px-6 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#AA587C] via-black to-black opacity-90 z-0" />

        {/* Feather Decorations */}
        <img
          src="/side.png"
          alt="Feather"
          className="feather-left absolute w-[420px] md:w-[200px] h-[380px] md:h-[150px] bottom-0 left-[75%] opacity-10 rotate-[-66deg] ml-[700px]"
        />
        <img
          src="/pic2.png"
          alt="Feather"
          className="feather-right absolute w-[130px] md:w-[170px] h-[160px] md:h-[213px] top-[10px] right-0 opacity-10 rotate-[46deg] z-10 hidden sm:block"
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-6">
          {/* Left Content */}
          <div className="hero-content flex-1 text-center md:text-left space-y-6 max-w-[600px]">
            <h1 className="text-[55px] leading-[147%] font-albert text-[#FFF2EC] whitespace-normal md:whitespace-nowrap">
              Wings of Change{" "}
              <span
                className=" font-extrabold font-albert"
                style={{ letterSpacing: "-0.55px" }} // -1% of 55px
              >
                Empowering
              </span>{" "}
              <br className="hidden md:inline-block" />
              <span
                className="font-extrabold font-albert"
                style={{ letterSpacing: "-0.55px" }}
              >
                Your Inner Transformation
              </span>
            </h1>

            <p className="text-[18px] md:text-[20px] text-[#efefefcc] font-['Albert Sans'] leading-relaxed ">
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
          <div className="hero-image flex-1 flex justify-center md:justify-end mt-8 ml-12">
            <img
              src="/hero-image.jpg"
              alt="Dancer"
              className="w-[250px] sm:w-[280px] md:w-[350px] h-[420px] sm:h-[520px] md:h-[580px] md:mt-[42px] object-cover rounded-tr-[100px] rounded-tl-[50px] mt-8 md:mt-0"
            />
          </div>
        </div>

        {/* Scoped media query */}
        <style>{`
    @media (max-width: 767.98px) {
    .hero-section {
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: flex-start !important; /* Changed from flex-end to flex-start */
      min-height: 102vh !important;
      padding: 2rem 0 0 0 !important;
    }
        .hero-image {
      width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .hero-image img {
      height: 390px !important;
      width: 85% !important;
      object-fit: cover !important;
      border-top-right-radius: 42px !important;
      border-top-left-radius: 33px !important;
      margin: 0 !important;  /* Remove margin */
      vertical-align: bottom !important;  /* Align to bottom */
      display: block !important;  /* Remove any extra space */
    }
      .hero-content h1 {
        font-size: 0.6rem !important;
        margin-top: 39rem !important;
      }

      .hero-content p {
        font-size: 13px !important;
        line-height: 1.3 !important;
        margin: 0.5rem 0 !important;
      }

      .hero-content button {
        width: 160px !important;
        height: 50px !important;
        font-size: 1rem !important;
      }
          .hero-content {
      order: -1 !important; /* Move content to top */
      margin-bottom: 0rem !important;
      margin-top: 2rem !important;
      z-index: 20 !important;
    }
      .hero-content h1 {
      font-size: 1.2rem !important;
      margin-top: 9rem !important;
      line-height: 1.3 !important;
      text-align: center !important;
    }

    .hero-content h1 span:first-of-type {
      
      font-size: 1.2rem !important;
      line-height: 1.2 !important;
      white-space: nowrap !important;
    }

    .hero-content h1 span:last-of-type {
    
      font-size: 1.2rem !important;
      line-height: 1.2 !important;
      margin-top: 4px !important;
    }

      
      font-size: 23px !important;
      line-height: 1.2 !important;
      margin-top: 4px !important;
      font-weight: 800 !important;
      letter-spacing: -0.4px !important;
    }
      .feather-left {
        margin-left: 0 !important;
        left: 20px !important;
        width: 160px !important;
        height: 170px !important;
        display: block !important;
        margin-bottom: 6px !important;
        opacity: 0.1 !important;
        transform: rotate(-45deg) !important;
        margin-top: 1px !important;
        margin-right: 30px !important;
      }

      .feather-right {
        width: 100px !important;
        height: 100px !important;
        top: 10px !important;
        opacity: 0.3 !important;
        z-index: 60 !important;
        margin-top: 40px !important;
      }
    }
  `}</style>
      </section>
    );
  };

  export default Hero;

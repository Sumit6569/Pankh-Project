import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen mt-10 px-4 sm:px-6 lg:px-20 py-8 sm:py-12 bg-white font-['Albert Sans'] overflow-x-hidden">
      <h1 className="text-5xl sm:text-5xl lg:text-6xl xl:text-[120px] font-light text-center bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent mb-15 sm:mb-16 leading-tight">
        Meet The Pankh Project
      </h1>

      <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start max-w-7xl mx-auto">
        <img
          src="/AboutModel.jpg"
          alt="Tarini"
          className="w-full max-w-md md:max-w-[392px] h-[300px] sm:h-[350px] md:h-[401px] rounded-xl object-cover mx-auto md:mx-0"
        />

        <div className="flex-1 p-2 sm:p-10 md:p-10 rounded-xl">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] text-[#503440] font-bold flex items-center gap-4 mb-1">
            <span className="w-12 h-[3px] bg-gradient-to-r from-[#AA587C] to-[#FD8950] block rounded-full"></span>
            About Me
          </h2>

          <div className="text-[#4A4A4A] space-y-10">
            <p className="first text-[20px] leading-[1.8] !text-[20px] !leading-[1.8]">
              Step into this journey with <strong>Tarini</strong>, where
              holistic healing recognizes the inseparable link between your
              physical sensations and emotional landscape. <br /> Offering a
              space for conversations and experiences designed to integrate
              mind, body, and spirit. Our philosophy centres on helping you
              discover the strength inherent in your <strong>'Roots'</strong>,
              enabling you to build a solid foundation from which to grow your{" "}
              <strong>'Pankh'</strong> – wings of resilience, adaptability, and
              self-support.
              <br />
            </p>
          </div>
        </div>
      </div>
      <style>{`
  @media (max-width: 768px) {
    /* Header text */
    h1.text-5xl {
      font-size: 42px !important;
      backgroud-color: #00000 !important;
      margin-bottom: 1.5rem !important;
    }

    /* About Me heading */
    h2.text-3xl {
      font-size: 32px !important;
    }

    /* Body text */
    .text-[20px] {
      font-size: 12px !important;
      line-height: 1.6 !important;
      margin-bottom: 1rem !important;
    }

    /* Section height */
    .min-h-screen {
      min-height: 80vh !important;
    }

    /* Text layout */
   
  }

  @media (max-width: 480px) {
    /* Header text */
    h1.text-4xl {
      font-size: 32px !important;
      margin-bottom: 1.5rem !important;
     
    }
      /* Section height */
    .min-h-screen {
      min-height: 20vh !important;
      backgroud-color: blue !important;
    }


    /* About Me heading */
    h2.text-3xl {
      font-size: 24px !important;
    }

    /* Body text */
    .text-[20px] {
      font-size: 6px !important;
      line-height: 1.5 !important;
      margin-bottom: 0.75rem !important;
    }

    /* Text spacing */
    .space-y-10 > p {
      margin-bottom: 0.5rem !important;
      font-size: 11px !important;
      
      word-break: break-word !important;
    }
  }
`}</style>
    </section>
  );
};

export default AboutSection;

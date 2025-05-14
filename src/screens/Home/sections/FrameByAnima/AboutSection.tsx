import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full h-[704px] mt-[1  0px]  mx-auto px-[45px] py-[31px] font-sans bg-white overflow-x-hidden">
      <h1 className="text-[115px]  font-bold text-center bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent mb-16 font-['Albert Sans']">
        Meet The Pankh Project
      </h1>

      <div className="flex flex-col md:flex-row gap-[56px] items-start">
        <img
          src="/AboutModel.jpg" // Replace with actual image
          alt="Tarini"
          className="w-[392px]  h-[401px] rounded-xl object-cover"
        />

        <div className="flex-1">
          <h2 className="text-[42px] text-[#503440] font-bold flex items-center gap-4 mb-8">
            <span
              className="w-12 h-[3px] bg-gradient-to-r from-[#AA587C] to-[#FD8950] block rounded-full 
      animate-lineWidth origin-left"
            ></span>
            About Me
          </h2>
          <p className="text-[#4A4A4A] text-lg md:text-[20px] leading-[1.8] md:leading-[1.9] max-w-[780px] font-['Albert Sans']">
            Step into this journey with Tarini, where holistic healing
            recognizes the inseparable link between your physical sensations and
            emotional landscape. Offering a space for conversations and
            experiences designed to integrate mind, body, and spirit. Our
            philosophy centres on helping you discover the strength inherent in
            your <span className="font-semibold">'Roots,'</span> enabling you to
            build a solid foundation from which to grow your{" "}
            <span className="font-semibold">'Pankh'</span> – wings of
            resilience, adaptability, and self-support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

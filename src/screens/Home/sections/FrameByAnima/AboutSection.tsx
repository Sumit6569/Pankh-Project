import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full h-[704px] max-w-[1424px] mx-auto px-[45px] py-[31px] font-sans bg-white">
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
          <h2 className="text-2xl font-bold flex items-center mb-6">
            <span className="w-8 h-1 bg-pink-700 mr-3 block rounded-full"></span>
            About Me
          </h2>
          <p className="text-gray-700 text-[18px] leading-[1.8]">
            Step into this journey with Tarini, where holistic healing
            recognizes the inseparable link between your physical sensations and
            emotional landscape. Offering a space for conversations and
            experiences designed to integrate mind, body, and spirit. Our
            philosophy centres on helping you discover the strength inherent in
            your 'Roots,' enabling you to build a solid foundation from which to
            grow your 'Pankh' – wings of resilience, adaptability, and
            self-support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

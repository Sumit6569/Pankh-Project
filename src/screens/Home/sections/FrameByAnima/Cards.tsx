import React from "react";

export default function GuidedByTarini() {
  return (
    <>
      <style>
        {`
          @layer utilities {
            @media (max-width: 640px) {
              .guided-card-icon {
                width: 40px !important;
                height: 40px !important;
              }

              .guided-card-left {
                padding-top: 37px !important;
                padding-bottom: 37px !important;
              }

              .guided-card-text {
                text-align: center !important;
                
              }
              
              .guided-card-description {
          font-size: 13px !important;
          line-height: 1.4 !important;
        }
            }
          }
        `}
      </style>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <section className="text-center mb-10">
          <div className="w-12 h-1 bg-[#9b5f7f] rounded-full mx-auto mb-2"></div>
          <h2 className="font-extrabold text-[30px] text-[#3f2a33] ">
            Guided by Tarini
          </h2>
          <p className="mt-3 text-base font-normal text-[#3f2a33]">
            Our Sessions Gently Blend Conversation With Body-Focused Practices
          </p>
        </section>

        {/* Cards */}
        <section className="space-y-6">
          {[
            {
              icon: "/astronaut.png",
              title: "Listening to Your Body",
              text: "We use the mind to connect with our bodies to be aware of our internal world (drawing from creative movement therapy and trauma informed care) to understand physical symptoms of our emotional states.",
            },
            {
              icon: "/idea.png",
              title: "Understanding Stress & Trauma",
              text: "We gently explore how past experiences affect your nervous system and help you find ways to feel calmer and safer.",
            },
            {
              icon: "/positiv.png",
              title: "Releasing Emotional Energy",
              text: "Techniques using creative expression as their focus, self–soothing and movement-based release help free stuck emotions and physical ailments in a supportive way.",
            },
            {
              icon: "/friends.png",
              title: "Building Inner Resources",
              text: "With a focus on recognising and strengthening your resilience and capacity to self support. To be our own superhero.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row border border-gray-300 rounded-lg overflow-hidden"
            >
              {/* Left Section */}
              <div className="guided-card-left sm:w-[510px] w-full h-auto bg-gradient-to-r from-[#9b5f7f] to-[#f07e4a] flex items-center gap-4 text-white px-6 py-4 sm:py-0 sm:h-[125px]">
                <img
                  src={item.icon}
                  alt={`icon ${i + 1}`}
                  className="guided-card-icon w-10 h-10 sm:w-12 sm:h-12 object-contain filter brightness-0 invert"
                />
                <span className="guided-card-text font-semibold text-base leading-snug text-center sm:text-left">
                  {item.title}
                </span>
              </div>

              {/* Right Section */}
              <div className="guided-card-p bg-white w-full flex items-center p-6 text-sm text-gray-700 leading-relaxed">
                <p className="guided-card-description">{item.text}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

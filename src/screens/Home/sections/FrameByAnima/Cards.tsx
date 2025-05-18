import React from "react";

export default function GuidedByTarini() {
  return (
    <>
      <style>{`
        body {
          font-family: "Inter", sans-serif;
          overflow-x: hidden;
        }

        @media (max-width: 640px) {
        .section-p {
      width: 200% !important;
      overflow: hidden !important;
      padding: 0 !important;
      
      margin-left: -100px !important;
    }
          h2.font-extrabold {
    font-size: 24px !important;
    line-height: 1.2 !important;
    margin-bottom: 8px !important;
    color: #3f2a33 !important;
    text-align: center !important;
  }

  .single-line-text {
    font-size: 16px !important;
    text-align: center !important;
    line-height: 1.5 !important;
    padding: 0 1rem !important;
    white-space: normal !important;
    max-width: 90% !important;
    margin: 0 auto !important;
  }

  section.text-center p {
    font-size: 14px !important;
    line-height: 1.5 !important;
    text-align: center !important;
    padding: 0.5rem 1rem !important;
    max-width: 90% !important;
    margin: 0 auto !important;
  }


          .guided-card {
            flex-direction: row !important;
            width: 196% !important;
            height: 100px !important;
            margin-left: -95px !important;
            margin-right: -90px !important;
           
            padding-right: 70px !important;
                      
          }

          .guided-card-left {
            width: 50% !important;
            justify-content: center !important;

            
          }

          .guided-card-icon {
            width: 45px !important;
            height: 45px !important;
            padding-right: 5px !important;
            margin-left: -15px !important;
            gap: 0 !important;
            justify-content: end !important;
            
          }

          .guided-card-text {
            font-size: 11px !important;
            text-align: center !important;
            margin-left: -12px !important;
            padding-right: 1px !important;
          }

          .guided-card-p {
            width: 50% !important;
            
            padding: 5px 1px !important;
            position: absolute !important;
            
            margin-left: 170px !important;
            margin-top: 2px !important;
           
            
            color: #503440 !important;
            font-weight: 500 !important;

          }

          .guided-card-description {
            font-size: 10px !important;
            margin-top: 2px !important;
            color: #503440 !important;
            font-weight: 400 !important;
            line-height: 1.4 !important;
            text-align: center !important;
            
            
          }
            .guided-card:nth-child(2) .guided-card-description {
    font-size: 10px !important;    /* Different size for second card */
    line-height: 1.4 !important;  /* Adjusted line height */
    margin-top: 21px !important;   /* Different margin */
    font-weight: 400 !important;  /* Different weight */
  }
    .guided-card:nth-child(3) .guided-card-description {
    font-size: 10px !important;    /* Different size for second card */
    line-height: 1.4 !important;  /* Adjusted line height */
    margin-top: 6px !important;   /* Different margin */
    font-weight: 400 !important;  /* Different weight */
  }
        }
      `}</style>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <section className="section-p text-center mb-10">
          <div className="w-12 h-1 bg-[#9b5f7f] rounded-full mx-auto mb-2"></div>
          <h2 className="font-extrabold text-[30px] text-[#3f2a33] ">
            Guided by Tarini
          </h2>
          <p className="single-line-text mt-3 text-base font-normal text-[#3f2a33] max-w-md mx-auto leading-relaxed text-center px-4">
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
              className="guided-card flex flex-col sm:flex-row border border-gray-300 rounded-lg overflow-hidden "
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
              <div className="guided-card-p bg-white w-[1100px] flex items-center p-6 text-[#503440] leading-relaxed">
                <p className="guided-card-description text-[#503440]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

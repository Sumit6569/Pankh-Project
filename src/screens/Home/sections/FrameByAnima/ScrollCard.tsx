import React from "react";

const testimonials = [
  {
    name: "Helen Quin",
    stars: 5,
    text: `Jo creates an incredibly nurturing and safe space where you are supportively held to turn inwards and face the challenges keeping you stuck in the trauma, and fear. Not only is she highly skilled at what she does, Jo is incredibly real and has a`,
  },
  {
    name: "Emma–Jayne",
    stars: 5,
    text: `I went to see Jo when I was struggling with my feelings following a bereavement. She creates a safe space that makes it easy to talk and always works at a pace that is suitable for you as a client. Jo’s approach is full of care and empathy which feels very gentle, even when working through the toughest of issues. Importantly for me, she is humorous at the appropriate times and we shared laughter together as well as tears. I cannot`,
  },
  {
    name: "Sabitri Sanyal",
    stars: 5,
    text: `“Movement for me happens at different levels of consciousness - both in the mind and body. I realized this once again while participating in Tripura’s workshop. The somatic experiencing helped me gain a better insight about the self-care practices so essential to nourish and enrich the wisdom present in our bodies, which we often tend to overlook. This practice of movement therapy resonates with my awareness of being, a feeling of epiphany!”`,
  },
  {
    name: "Kelly H",
    stars: 5,
    text: `It's hard to express into words what Jo has done for me in the time I have worked with her. I'm beyond grateful for the help and support I have received through both the Compassionate Inquiry and Biodynamic Craniosacral Therapy and would highly recommend Jo to anyone who is ready to look inward and heal. The combination of her extensive knowledge, intuition, friendly, non-judgemental approach has created such a safe and supportive space. Walking into her treatment room is almost instantly relaxing; the world is left at the door.`,
  },
];

const ScrollCard = () => {
  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap");

        .scroll-wrapper {
          overflow: hidden;
          position: relative;
        }

        .scroll-track {
          display: flex;
          gap: 1.5rem;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

      <div className="bg-white  font-['Inter']">
        <div className="max-w-8xl  mx-auto px-6 py-8">
          <h2 className="text-center font-semibold text-[18px] leading-[22px] text-[#5B3E4A] mb-6">
            <span
              className="inline-block w-12 h-1 rounded-full mr-2"
              style={{ backgroundColor: "#9B5B7A" }}
            ></span>
            What our clients say about us.
          </h2>

          <div className="scroll-wrapper">
            <div className="scroll-track">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-[480px] h-[240px]  md:min-w-[500px] lg:min-w-[500px] xl:min-w-[600px] rounded-[30px] border border-[#D98E7E] p-6 md:p-8 bg-gradient-to-r from-[#FFF0E9] to-[#F3E1E7] flex flex-col justify-between"
                >
                  <h3 className="text-center font-semibold text-[14px]  text-[#5B3E4A] ">
                    {testimonial.name}
                  </h3>
                  <div className="flex justify-center mb-4 text-yellow-400 text-[14px] ">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <i key={i} className="fas fa-star" />
                    ))}
                  </div>
                  <p className="text-center text-[14px]  text-[#3B2B33]">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollCard;

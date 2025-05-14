import React from "react";

export default function GuidedByTarini() {
  return (
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
        {/* Card 1 */}
        <div className="flex flex-col sm:flex-row border border-gray-300 rounded-lg overflow-hidden h-[125px]">
          <div className="sm:w-[510px] w-full h-full bg-gradient-to-r from-[#9b5f7f] to-[#f07e4a] flex items-center gap-4 text-white px-6">
            <img
              src="/astronaut.png"
              alt="icon 1"
              className="w-12 h-12 object-contain filter brightness-0 invert  "
            />
            <span className="font-semibold text-base leading-snug">
              Listening to Your Body
            </span>
          </div>
          <div className="bg-white h-full w-full flex items-center p-6 text-sm text-gray-700 leading-relaxed">
            <p>
              We use the mind to connect with our bodies to be aware of our
              internal world (drawing from creative movement therapy and trauma
              informed care) to understand physical symptoms of our emotional
              states.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col sm:flex-row border border-gray-300 rounded-lg overflow-hidden h-[125px]">
          <div className="sm:w-[510px] w-full h-full bg-gradient-to-r from-[#9b5f7f] to-[#f07e4a] flex items-center gap-4 text-white px-6">
            <img
              src="/idea.png"
              alt="icon 2"
              className="w-12 h-12 object-contain filter brightness-0 invert"
            />
            <span className="font-semibold text-base leading-snug">
              Understanding Stress & Trauma
            </span>
          </div>
          <div className="bg-white h-full w-full flex items-center p-6 text-sm text-gray-700 leading-relaxed">
            <p>
              We gently explore how past experiences affect your nervous system
              and help you find ways to feel calmer and safer.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col sm:flex-row border border-gray-300 rounded-lg overflow-hidden h-[125px]">
          <div className="sm:w-[510px] w-full h-full bg-gradient-to-r from-[#9b5f7f] to-[#f07e4a] flex items-center gap-4 text-white px-6">
            <img
              src="/positiv.png"
              alt="icon 3"
              className="w-12 h-12 object-contain filter brightness-0 invert"
            />
            <span className="font-semibold text-base leading-snug">
              Releasing Emotional Energy
            </span>
          </div>
          <div className="bg-white h-full w-full flex items-center p-6 text-sm text-gray-700 leading-relaxed">
            <p>
              Techniques using creative expression as their focus, self–soothing
              and movement-based release help free stuck emotions and physical
              ailments in a supportive way.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col sm:flex-row border border-gray-300 rounded-lg overflow-hidden h-[125px]">
          <div className="sm:w-[510px] w-full h-full bg-gradient-to-r from-[#9b5f7f] to-[#f07e4a] flex items-center gap-4 text-white px-6">
            <img
              src="/friends.png"
              alt="icon 4"
              className="w-12 h-12 object-contain filter brightness-0 invert"
            />
            <span className="font-semibold text-base leading-snug">
              Building Inner Resources
            </span>
          </div>
          <div className="bg-white h-full w-full flex items-center p-6 text-sm text-gray-700 leading-relaxed">
            <p>
              With a focus on recognising and strengthening your resilience and
              capacity to self support. To be our own superhero.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

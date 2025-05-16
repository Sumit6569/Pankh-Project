import React from "react";

const BlogsSection = () => {
  return (
    <section className="bg-white max-w-7xl mx-auto px-6 py-10 font-['Inter']">
      <div className="flex flex-col items-center mb-10">
        <div className="w-6 h-1 rounded-full bg-[#9B5B6B] mb-2"></div>
        <h2 className="text-2xl font-semibold text-[#3B2F38]">Blogs</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Blog Card 1 */}
        <article className="border border-[#E6D9D9] rounded-md overflow-hidden">
          <img
            src="https://storage.googleapis.com/a1aa/image/9b6614a1-4f16-4e99-f9a0-d0542367146d.jpg"
            alt="Close-up of butterfly lifecycle stages from caterpillar to butterfly on a branch"
            className="w-full h-48 object-cover"
            width={600}
            height={300}
          />
          <div className="p-4">
            <h3 className="font-semibold text-[#3B2F38] mb-2 text-base sm:text-lg">
              The Transformative Power of
            </h3>
            <p className="text-[#6B5B5B] text-sm leading-relaxed mb-4">
              What does it mean to be a therapist? What happens when someone
              discloses about killing someone in therapy? Has that happened to
              you yet?
            </p>
            <div className="flex justify-between items-center text-xs text-[#6B5B5B]">
              <span>May 20th 2020</span>
              <a
                href="#"
                className="bg-gradient-to-r from-[#AA587C] to-[#FD8950]  bg-clip-text text-transparent font-semibold hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        </article>

        {/* Blog Card 2 */}
        <article className="border border-[#E6D9D9] rounded-md overflow-hidden">
          <img
            src="https://storage.googleapis.com/a1aa/image/e4825820-50a3-4be8-101f-ff7464a52ff3.jpg"
            alt="Woman in pink hoodie talking to therapist in a bright room with bookshelves"
            className="w-full h-48 object-cover"
            width={600}
            height={300}
          />
          <div className="p-4">
            <h3 className="font-semibold text-[#3B2F38] mb-2 text-base sm:text-lg">
              Is Therapy Right for My Child?
            </h3>
            <p className="text-[#6B5B5B] text-sm leading-relaxed mb-4">
              Life throws curveballs at everyone, and kids are no exception.
              From navigating social pressures and academic demands to dealing
              with family changes and personal struggles, childhood
            </p>
            <div className="flex justify-between items-center text-xs text-[#6B5B5B]">
              <span>May 20th 2020</span>
              <a
                href="#"
                className="bg-gradient-to-r from-[#AA587C] to-[#FD8950]  bg-clip-text text-transparent font-semibold hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        </article>

        {/* Blog Card 3 */}
        <article className="border border-[#E6D9D9] rounded-md overflow-hidden">
          <img
            src="https://storage.googleapis.com/a1aa/image/4227c1ed-ac45-411a-3228-78c24777dc9a.jpg"
            alt="Woman with glasses journaling on a couch in a cozy living room"
            className="w-full h-48 object-cover"
            width={600}
            height={300}
          />
          <div className="p-4">
            <h3 className="font-semibold text-[#3B2F38] mb-2 text-base sm:text-lg">
              Start Journaling for Mental Health
            </h3>
            <p className="text-[#6B5B5B] text-sm leading-relaxed mb-4">
              Over the years, I’ve noticed how journaling can really help
              support therapy. Writing things down lets people explore their
              thoughts more fully, discover hidden patterns, and learn ...
            </p>
            <div className="flex justify-between items-center text-xs text-[#6B5B5B]">
              <span>May 20th 2020</span>
              <a
                href="#"
                className="bg-gradient-to-r from-[#AA587C] to-[#FD8950]  bg-clip-text text-transparent font-semibold hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        </article>
      </div>

      <div className="flex justify-center mt-10">
        <button
          type="button"
          className="text-[#3B2F38] text-base font-medium rounded-full px-8 py-2 border border-[#9B5B6B] shadow-[0_0_10px_rgba(155,91,107,0.5)] hover:shadow-[0_0_15px_rgba(155,91,107,0.7)] transition-shadow"
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default BlogsSection;

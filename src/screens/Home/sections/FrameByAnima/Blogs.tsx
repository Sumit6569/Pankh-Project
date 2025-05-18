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
            src="/blog1.png"
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
            src="/blog2.png"
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
            src="/blog3.png"
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
          className="mt-4 w-[160px] h-[50px] text-[#5B434E] text-[16px] font-semibold rounded-full border-[3px] border-[#AA587C]
              bg-gradient-to-br from-[#FFF9FC] to-[#FDEEEE] shadow-[inset_-8px_-8px_30px_rgba(253,137,80,0.4),inset_8px_8px_16px_rgba(170,88,124,0.36)]
              transition duration-300 ease-in-out
              hover:bg-gradient-to-r hover:from-[#AA587C] hover:to-[#FD8950] hover:text-white hover:shadow-lg"
        >
          View All 
        </button>
      </div>
    </section>
  );
};

export default BlogsSection;

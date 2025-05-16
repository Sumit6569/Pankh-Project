import React from "react";

const VideoSec = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-4 py-10 relative overflow-hidden bg-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Shadow Gradients */}
      <div className="top-right-shadow" />
      <div className="bottom-left-shadow" />

      {/* Feather Images */}
      <img
        alt="Feather image on left side bottom"
        className="absolute w-[370px] h-[313px] top-0 right-[30%]  z-0 opacity-10 rotate-[46deg] mix-blend-normal"
        height="80"
        src="pic.png"
        style={{
          opacity: 0.5, // Increased from 0.2 to 0.5
          filter: "drop-shadow(0 0 3px rgba(170, 88, 124, 0.6))", // More vibrant pink shadow
        }}
        width="80"
      />

      <img
        alt="Feather image on left side bottom"
        className="absolute w-[270px] h-[313px] top-0 right-0 z-0 opacity-10 rotate-[46deg] mix-blend-normal"
        height="80"
        src="pic2.png"
        style={{
          opacity: 0.5, // Increased from 0.2 to 0.5
          filter: "drop-shadow(0 0 3px rgba(170, 88, 124, 0.6))", // More vibrant pink shadow
        }}
        width="80"
      />

      {/* Heading */}
      <h2 className="text-center text-[#4a2c3a] font-semibold text-lg md:text-xl mb-4 relative z-10">
        <span
          className="absolute left-1/2 -top-3 -translate-x-1/2 w-16 h-1 rounded-full"
          style={{ backgroundColor: "#a35a7a" }}
        ></span>
        Embrace change with The Pankh Project
      </h2>

      {/* Description */}
      <p className="max-w-xl text-center text-gray-600 text-sm md:text-base mb-8 px-2 leading-relaxed z-10">
        Welcome! Here at the Pankh Project we really believe in shedding the
        parts of self that don't serve us anymore and growing new feathers to
        fly with. Let's come together and live a life of peace and happiness.
      </p>

      {/* YouTube Video */}
      <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg z-10">
        <iframe
          className="w-full aspect-video rounded-xl"
          src="https://www.youtube.com/embed/MY5SatbZMAo"

          title="The Pankh Project TEDx Talk video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>

      <p className="text-center text-gray-500 text-xs md:text-sm mt-4 mb-6 z-10">
        Click Here And See My Video
      </p>

      {/* Button */}
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 text-sm md:text-base font-semibold text-[#4a2c3a] rounded-full border border-[#a35a7a] hover:shadow-[0_0_12px_#a35a7a] transition-shadow duration-300 bg-white z-10"
        style={{ boxShadow: "0 0 8px #a35a7a" }}
      >
        Go to Youtube
      </a>

      {/* Internal Styles */}
      <style>{`
        .top-right-shadow {
          position: absolute;
          top: 0;
          right: 0;
          width: 500px;
          height: 1000px;
          pointer-events: none;
          background: radial-gradient(ellipse at top right, rgba(255, 176, 124, 1.55), transparent 60%);
          filter: blur(5px);
          z-index: 0;
        }
        .bottom-left-shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 500px;
  height: 500px;
  pointer-events: none;
  background: radial-gradient(
    ellipse at bottom left,
    rgba(170, 88, 124, 0.75), /* #AA587C with more opacity */
    transparent 80%
  );
  filter: blur(120px); /* smoother, more spread */
  z-index: 0;
}

      `}</style>
    </div>
  );
};

export default VideoSec;

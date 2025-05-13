import React from "react";
import Hero from "./sections/FrameByAnima/Hero";


export const Home = (): JSX.Element => {
  return (
    <main className="pt-28 bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1512px] relative">
    
        <Hero />
        

      </div>
    </main>
  );
};

import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Navbar from "./components/ui/Navbar";
import ApproachSection from "./screens/Home/sections/FrameByAnima/ApproachSection";
import AboutSection from "./screens/Home/sections/FrameByAnima/AboutSection";
import Cards from "./screens/Home/sections/FrameByAnima/Cards";
import Hero from "./screens/Home/sections/FrameByAnima/Hero";
import VideoSec from "./screens/Home/sections/FrameByAnima/VideoSec";
import Blogs from "./screens/Home/sections/FrameByAnima/Blogs";
import ScrollCard from "./screens/Home/sections/FrameByAnima/ScrollCard";
import DropDown from "./screens/Home/sections/FrameByAnima/DropDown";
import Footer from "./screens/Home/sections/FrameByAnima/Footer";

function App() {
  return (
    <div className="overflow-x-hidden max-w-full">
      <Navbar />
      <Hero />
      <AboutSection />
      <ApproachSection />
      <Cards />
      <VideoSec />
      <Blogs />
      <ScrollCard />
      <DropDown />
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

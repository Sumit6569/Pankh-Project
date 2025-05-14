import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import  Navbar  from "./components/ui/Navbar";
import ApproachSection from "./screens/Home/sections/FrameByAnima/ApproachSection";
import AboutSection from "./screens/Home/sections/FrameByAnima/AboutSection";
import Cards from "./screens/Home/sections/FrameByAnima/Cards";
import Hero from "./screens/Home/sections/FrameByAnima/Hero";
createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Navbar />

    <Hero />
    <AboutSection />
    <ApproachSection />
    <Cards />
  </StrictMode>
);

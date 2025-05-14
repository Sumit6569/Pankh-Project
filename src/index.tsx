import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import  Navbar  from "./components/ui/Navbar";
import ApproachSection from "./screens/Home/sections/FrameByAnima/ApproachSection";
import AboutSection from "./screens/Home/sections/FrameByAnima/AboutSection";
import Cards from "./screens/Home/sections/FrameByAnima/Cards";
import Hero from "./screens/Home/sections/FrameByAnima/Hero";
import VideoSec from "./screens/Home/sections/FrameByAnima/VideoSec";
import Blogs from "./screens/Home/sections/FrameByAnima/Blogs";
import ScrollCard from "./screens/Home/sections/FrameByAnima/ScrollCard";
import DropDown from "./screens/Home/sections/FrameByAnima/DropDown";
createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Navbar />

    <Hero />
    <AboutSection />
    <ApproachSection />
    <Cards />
    <VideoSec />
    <Blogs/>
    <ScrollCard />
    <DropDown />
  </StrictMode>
);

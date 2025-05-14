import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./screens/Home/Home";
import  Navbar  from "./components/ui/Navbar";
import ApproachSection from "./screens/Home/sections/FrameByAnima/ApproachSection";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Navbar />
    <Home />
    <ApproachSection />
  </StrictMode>,
);

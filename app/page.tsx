import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Problem from "./components/Problem";
import WhatWeDo from "./components/WhatWeDo";
import Projects from "./components/Projects";
import Upcoming from "./components/Upcoming";
import HowWeWork from "./components/HowWeWork";
import Founders from "./components/Founders";
import { QuoteStrip, CTA, Footer } from "./components/FooterCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Problem />
      <WhatWeDo />
      <Projects />
      <Upcoming />
      <HowWeWork />
      <Founders />
      <QuoteStrip />
      <CTA />
      <Footer />
    </>
  );
}

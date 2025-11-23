"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <div id="home" className="snap-start">
        <Hero />
      </div>
      <div id="about" className="snap-start">
        <About />
      </div>
      <div id="skills" className="snap-start">
        <Skills />
      </div>
      <div id="projects" className="snap-start">
        <Projects />
      </div>
      <div id="contact" className="snap-start">
        <Contact />
      </div>
    </main>
  );
}

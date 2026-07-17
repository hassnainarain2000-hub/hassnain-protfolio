"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppButton } from "@/components/floating/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <div className="relative h-0 pointer-events-none">
          <div className="absolute left-8 top-0 w-3 h-3 border border-accent/10 rotate-45 animate-float-gentle" />
        </div>
        <Services />
        <Skills />
        <div className="relative h-0 pointer-events-none">
          <div className="absolute right-12 top-0 w-2 h-2 rounded-full bg-accent/15 animate-pulse-soft" />
        </div>
        <Projects />
        <Process />
        <FAQ />
        <div className="relative h-0 pointer-events-none">
          <div className="absolute left-1/3 top-0 w-4 h-4 rounded-full border border-accent/5 animate-rotate-slow" />
        </div>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

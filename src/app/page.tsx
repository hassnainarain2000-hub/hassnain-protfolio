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
      <main className="relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full border border-accent/5 pointer-events-none" />
        <div className="absolute top-40 left-10 w-16 h-16 border border-accent/10 rotate-45 pointer-events-none" />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Process />
        <FAQ />
        <Contact />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full border border-accent/5 pointer-events-none" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

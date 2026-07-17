"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { ScrollTypewriter } from "@/components/ui/ScrollTypewriter";
import { ArrowDown } from "lucide-react";

const Scene = dynamic(() => import("@/components/three/Scene").then((m) => m.Scene), {
  ssr: false,
});

const headlineParts = [
  { text: "Building Software That ", gradient: false },
  { text: "Powers Modern", gradient: true },
  { text: " Businesses", gradient: false },
];

function LetterByLetter() {
  const [mounted, setMounted] = useState(false);
  const allLetters: { char: string; gradient: boolean; globalIndex: number }[] = [];

  headlineParts.forEach((part) => {
    part.text.split("").forEach((char) => {
      allLetters.push({
        char,
        gradient: part.gradient,
        globalIndex: allLetters.length,
      });
    });
  });

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
      {allLetters.map(({ char, gradient, globalIndex }) => (
        <motion.span
          key={globalIndex}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={mounted ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.4, delay: globalIndex * 0.04 }}
          className={gradient ? "text-gradient" : ""}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
      {mounted && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1, 0, 1, 0] }}
          transition={{ duration: 2.4, delay: allLetters.length * 0.04 + 0.5, times: [0, 0.17, 0.33, 0.5, 0.67, 0.83] }}
          className="text-accent ml-0.5"
        >
          &#9613;
        </motion.span>
      )}
    </h1>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <Scene />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-accent font-sora text-sm font-semibold tracking-widest uppercase mb-4"
            >
              Full Stack Developer
            </motion.p>

            <LetterByLetter />

            <ScrollTypewriter className="text-text-muted text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Building custom software and professional websites for businesses. From web applications to desktop solutions — built for real results.
            </ScrollTypewriter>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#contact">
                <Button variant="primary">Let&apos;s Work Together</Button>
              </a>
              <a href="#projects">
                <Button variant="secondary">View Projects</Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}

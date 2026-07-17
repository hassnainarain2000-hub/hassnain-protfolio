"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollTypewriter } from "@/components/ui/ScrollTypewriter";
import { processSteps } from "@/lib/data";
import { Phone, FileText, Code, Rocket } from "lucide-react";

const iconMap = { Phone, FileText, Code, Rocket };

export function Process() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 0.8", "end 0.5"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-16 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="How We Work"
          subtitle="A simple, transparent process from first call to launch"
        />

        <div className="relative" ref={lineRef}>
          <motion.div
            style={{ scaleX, transformOrigin: "left" }}
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.15 }}
                  className="relative text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full glass flex items-center justify-center border border-accent/20"
                  >
                    <Icon className="w-8 h-8 text-accent" />
                  </motion.div>

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#8B1E3F] text-base font-sora font-bold text-sm flex items-center justify-center">
                    {step.step}
                  </div>

                  <h3 className="font-sora font-semibold text-lg text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <ScrollTypewriter className="text-text-muted text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </ScrollTypewriter>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

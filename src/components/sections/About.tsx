"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { TiltCard } from "@/components/ui/TiltCard";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Specialized in business software & professional websites",
  "Real delivered projects: POS, inventory, distribution systems",
  "Clear communication — no jargon, no confusion",
];

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About Me" subtitle="Software Developer focused on business outcomes" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="space-y-6"
          >
            <p className="text-text-muted text-base sm:text-lg leading-relaxed">
              I build software and websites that businesses actually use — reliable systems that handle daily operations, reduce errors, and save time.
            </p>

            <p className="text-text-muted text-base sm:text-lg leading-relaxed">
              With 1.5 years of hands-on experience, I&apos;ve delivered real projects — POS systems, inventory management, distribution tracking, restaurant software, and professional business websites. Each built to solve a specific problem.
            </p>

            <p className="text-text-muted text-base sm:text-lg leading-relaxed">
              Technology is secondary. What matters is that the software works, scales, and makes your operations smoother.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <TiltCard>
              <div className="glass rounded-2xl p-6 sm:p-8 space-y-5">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-text-primary">{item}</span>
                  </motion.div>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedText } from "@/components/ui/AnimatedText";
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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <AnimatedText
              text="I build software and websites that businesses actually use — reliable systems that handle daily operations, reduce errors, and save time."
              className="text-text-muted text-base sm:text-lg leading-relaxed"
            />

            <AnimatedText
              text="With 1.5 years of hands-on experience, I've delivered real projects — POS systems, inventory management, distribution tracking, restaurant software, and professional business websites. Each built to solve a specific problem."
              className="text-text-muted text-base sm:text-lg leading-relaxed"
              delay={0.1}
            />

            <AnimatedText
              text="Technology is secondary. What matters is that the software works, scales, and makes your operations smoother."
              className="text-text-muted text-base sm:text-lg leading-relaxed"
              delay={0.2}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-5"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-text-primary">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

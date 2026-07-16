"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data";
import { Phone, FileText, Code, Rocket } from "lucide-react";

const iconMap = { Phone, FileText, Code, Rocket };

export function Process() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="How We Work"
          subtitle="A simple, transparent process from first call to launch"
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full glass flex items-center justify-center border border-accent/20">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-base font-sora font-bold text-sm flex items-center justify-center">
                    {step.step}
                  </div>

                  <h3 className="font-sora font-semibold text-lg text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

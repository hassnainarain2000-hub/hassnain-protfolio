"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { services } from "@/lib/data";
import {
  Layers,
  Globe,
  Monitor,
  ShoppingCart,
  UtensilsCrossed,
  Package,
} from "lucide-react";

const iconMap = {
  Layers,
  Globe,
  Monitor,
  ShoppingCart,
  UtensilsCrossed,
  Package,
} as const;

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Services"
          subtitle="End-to-end software solutions for businesses that need reliability"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-sora font-semibold text-lg text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

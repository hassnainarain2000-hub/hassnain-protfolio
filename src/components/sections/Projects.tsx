"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { projects } from "@/lib/data";
import { ArrowUpRight, Check } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real solutions built for real businesses"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-sora font-bold text-xl text-text-primary">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                </div>

                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-accent/10 text-accent text-xs font-medium border border-accent/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
                    Key Features
                  </p>
                  <ul className="space-y-1.5">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-text-muted">
                        <Check className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-glass-border">
                  <p className="text-xs text-accent/80 italic">{project.value}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

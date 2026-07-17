"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { ProjectDetails } from "@/components/sections/ProjectDetails";
import { projects } from "@/lib/data";
import Image from "next/image";

function TechBadges({ technologies }: { technologies: readonly string[] }) {
  const shown = technologies.slice(0, 3);
  const remaining = technologies.length - 3;

  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {shown.map((tech) => (
        <span
          key={tech}
          className="px-2 py-0.5 rounded-md bg-accent/10 text-accent text-xs border border-accent/10"
        >
          {tech}
        </span>
      ))}
      {remaining > 0 && (
        <span className="px-2 py-0.5 rounded-md text-text-muted text-xs">
          +{remaining} more
        </span>
      )}
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);

  return (
    <section id="projects" className="py-16 lg:py-24 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real solutions built for real businesses"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TiltCard>
                <button
                  onClick={() => setSelected(project)}
                  className="group block w-full text-left glass rounded-2xl overflow-hidden hover:glow-accent transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-base/0 group-hover:bg-base/20 transition-colors duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-sora font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <TechBadges technologies={project.technologies} />
                  </div>
                </button>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectDetails project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { projects } from "@/lib/data";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const [lightbox, setLightbox] = useState<{ title: string; image: string } | null>(null);

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
              initial={{ opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <TiltCard>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block glass rounded-2xl overflow-hidden hover:glow-accent transition-all duration-300"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-base/0 group-hover:bg-base/20 transition-colors duration-300" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-accent" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-sora font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-base/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-text-muted hover:text-accent transition-colors"
                aria-label="Close lightbox"
              >
                <X size={28} />
              </button>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-glass-border">
                <Image
                  src={lightbox.image}
                  alt={lightbox.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-text-primary font-sora font-semibold mt-4">
                {lightbox.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

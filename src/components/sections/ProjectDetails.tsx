"use client";

import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface Project {
  readonly title: string;
  readonly image: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly demoUrl: string;
  readonly githubUrl: string;
}

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-base/95 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen flex items-start justify-center p-4 sm:p-8 py-12">
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="relative max-w-4xl w-full glass rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-text-muted hover:text-accent transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="relative aspect-video w-full bg-secondary">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-text-primary">
              {project.title}
            </h2>

            <p className="text-text-muted text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>

            <div>
              <h3 className="font-sora font-semibold text-text-primary mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-accent/10 text-text-primary text-sm border border-accent/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {project.demoUrl !== "#" && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-base font-semibold hover:bg-accent/90 transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
              {project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-accent/30 text-accent font-semibold hover:bg-accent/10 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  GitHub Repository
                </a>
              )}
              {project.demoUrl === "#" && project.githubUrl === "#" && (
                <p className="text-text-muted text-sm italic">
                  Demo and repository links coming soon.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

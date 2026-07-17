"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, borderColor: "rgba(201, 169, 106, 0.3)" } : undefined}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={cn(
        "glass rounded-2xl p-4 sm:p-6 transition-all duration-150",
        hover && "hover:glow-accent",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

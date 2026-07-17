"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl font-sora font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer",
        variant === "primary" &&
          "bg-accent-ruby text-base hover:shadow-[0_0_24px_rgba(139,30,63,0.3)]",
        variant === "secondary" &&
          "bg-transparent text-text-primary border border-glass-border hover:border-accent/40 hover:bg-accent/5",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

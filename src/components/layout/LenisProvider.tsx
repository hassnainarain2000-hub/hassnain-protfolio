"use client";

import { ReactLenis } from "lenis/react";

function checkShouldDisable(): boolean {
  if (typeof window === "undefined") return true;
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  return mq.matches || window.innerWidth < 768;
}

const isDisabled = checkShouldDisable();

export function LenisProvider({ children }: { children: React.ReactNode }) {
  if (isDisabled) return <>{children}</>;
  return <ReactLenis root>{children}</ReactLenis>;
}

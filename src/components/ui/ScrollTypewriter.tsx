"use client";

import { useRef, useState, useMemo } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface ScrollTypewriterProps {
  children: React.ReactNode;
  className?: string;
}

function TypewriterText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [charCount, setCharCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const lastCountRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const count = Math.min(Math.round(latest * text.length), text.length);
    if (count !== lastCountRef.current) {
      lastCountRef.current = count;
      setCharCount(count);

      if (count >= text.length && text.length > 0) {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setShowCursor(false), 2400);
      } else {
        setShowCursor(true);
      }
    }
  });

  const displayText = useMemo(() => text.slice(0, charCount), [text, charCount]);
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  }, []);

  if (isMobile) {
    return (
      <div ref={ref} className={className}>
        {text}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      {displayText}
      {showCursor && (
        <span className="typing-cursor">&#9613;</span>
      )}
    </div>
  );
}

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (
    typeof node === "object" &&
    "props" in node &&
    node.props &&
    typeof node.props === "object" &&
    "children" in (node.props as Record<string, unknown>)
  ) {
    return extractText((node.props as { children: React.ReactNode }).children);
  }
  return "";
}

export function ScrollTypewriter({ children, className }: ScrollTypewriterProps) {
  const text = useMemo(() => extractText(children), [children]);

  if (!text.trim()) {
    return <div className={className}>{children}</div>;
  }

  return <TypewriterText text={text} className={className} />;
}

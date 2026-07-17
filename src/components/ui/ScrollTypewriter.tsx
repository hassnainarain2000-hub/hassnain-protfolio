"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface ScrollTypewriterProps {
  children: React.ReactNode;
  className?: string;
}

function TypewriterText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [charCount, setCharCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [revealed, setRevealed] = useState(false);
  const lastCountRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          setRevealed(true);
          setCharCount(text.length);
          setShowCursor(true);
          if (timerRef.current) clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => setShowCursor(false), 2400);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed, text.length]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (revealed) return;
    const count = Math.min(Math.round(latest * text.length), text.length);
    if (count > lastCountRef.current) {
      lastCountRef.current = count;
      setCharCount(count);

      if (count >= text.length && text.length > 0) {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setShowCursor(false), 2400);
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
      {revealed ? text : displayText}
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

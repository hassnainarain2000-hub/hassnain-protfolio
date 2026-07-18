"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-lg" : "bg-transparent"
        }`}
      >
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="h-[2px] bg-accent origin-left"
        />
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            className="font-sora font-bold text-lg text-text-primary hover:text-accent transition-colors"
          >
            <span className="text-accent">H</span>ASSNAIN <span className="text-accent">A</span>RAIN
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="relative px-4 py-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                {activeSection === link.href && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-[#DC2626]/10 rounded-lg border border-[#DC2626]/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="hidden lg:block absolute right-48 top-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-3 h-3 border border-accent/15 rotate-45 animate-float-gentle" />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/923302920396"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Let&apos;s Talk
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-primary p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass-strong pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`py-3 px-4 rounded-xl text-lg font-medium transition-all ${
                    activeSection === link.href
                      ? "bg-[#DC2626]/10 text-[#DC2626] border border-[#DC2626]/20"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/923302920396"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 py-3 px-4 rounded-xl bg-[#DC2626] text-base font-semibold text-center"
              >
                Let&apos;s Talk on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

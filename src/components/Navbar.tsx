"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Magnetic from "./Magnetic";
import { SITE_LINKS } from "../data/profileData";

const SECTION_IDS = ["work", "journey", "field-notes"];

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      // Counts a section "active" once it's crossed just below the fixed
      // navbar, and stops counting it once it's 70% scrolled past.
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return active;
}

const NAV_LINKS = [
  { id: "work", href: "#work", label: "Work" },
  { id: "journey", href: "#journey", label: "Journey" },
  { id: "field-notes", href: "#field-notes", label: "Receipts" },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const active = useActiveSection();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      {/* Reading-progress bar — a small nod to the "measured, not guessed" theme */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#17235C] via-[#3D5FE0] to-[#7C93F5] origin-left"
      />

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center font-bold text-[#1A1A1A] text-sm tracking-tighter">
            YS
          </div>
          <span className="font-semibold text-[#1A1A1A] text-lg tracking-tight">
            Yuvraj Singh
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`transition-colors ${
                active === link.id
                  ? "text-[#1A1A1A] font-semibold"
                  : "text-gray-500 hover:text-[#1A1A1A]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#1A1A1A] transition-colors"
          >
            GitHub
          </a>
        </div>

        <Magnetic strength={0.25}>
          <a
            href={SITE_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3D5FE0] font-medium text-sm flex items-center gap-1 hover:text-[#2E49BE] transition-colors"
          >
            Connect With Me
            <span className="text-lg leading-none">&rsaquo;</span>
          </a>
        </Magnetic>
      </div>
    </nav>
  );
}

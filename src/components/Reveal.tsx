"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type RevealVariant = "up" | "left" | "right" | "scale";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  variant?: RevealVariant;
}

const HIDDEN: Record<RevealVariant, Record<string, number>> = {
  up: { opacity: 0, y: 40, x: 0, scale: 1 },
  left: { opacity: 0, x: -60, y: 0, scale: 1 },
  right: { opacity: 0, x: 60, y: 0, scale: 1 },
  scale: { opacity: 0, scale: 0.85, x: 0, y: 0 },
};

/**
 * Shared scroll-reveal wrapper used across every section. Supports a
 * handful of entrance styles so the whole site doesn't fade-up the same
 * way nine times in a row — headers stay on "up" as a consistent rhythm,
 * content below varies (left/right/scale) per section.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  y = 40,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const hidden = variant === "up" ? { ...HIDDEN.up, y } : HIDDEN[variant];
  const shown = { opacity: 1, y: 0, x: 0, scale: 1 };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? shown : hidden}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

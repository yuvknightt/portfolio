"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Statement() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // This creates that cool fading effect as the user scrolls down!
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  // The bottom-fade recedes as you scroll — by the time the section reaches
  // center, the last line is fully readable instead of staying permanently
  // blurred out.
  const maskImage = useTransform(scrollYProgress, (v) => {
    const fadeStart = 45 + v * 55; // 45% -> 100%
    const fadeEnd = 65 + v * 45; // 65% -> 110% (fully opaque text by v = 1)
    return `linear-gradient(to bottom, black 0%, black ${fadeStart}%, transparent ${fadeEnd}%)`;
  });

  return (
    <section ref={containerRef} className="py-32 bg-white flex justify-center px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          style={{
            opacity,
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
          }}
          className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-[#1A1A1A]"
        >
          I don&apos;t think anyone gets{" "}
          <span className="bg-gradient-to-r from-[#17235C] via-[#3D5FE0] to-[#7C93F5] bg-clip-text text-transparent">
            distributed systems
          </span>{" "}
          right the first time. I&apos;ve just gotten decent at guessing which
          part breaks first, and{" "}
          <span className="bg-gradient-to-r from-[#17235C] via-[#3D5FE0] to-[#7C93F5] bg-clip-text text-transparent">
            designing for that
          </span>
          .
        </motion.h2>
      </div>
    </section>
  );
}
"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import Magnetic from "./Magnetic";
import { SITE_LINKS } from "../data/profileData";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-white flex flex-col items-center justify-center text-center px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-6xl md:text-[5.5rem] leading-[1.1] font-black text-[#1A1A1A] tracking-tighter mb-8">
          <motion.span variants={item} className="inline-block">
            I
          </motion.span>{" "}
          <motion.span
            variants={item}
            className="inline-block font-[family-name:var(--font-caveat)] text-[#1A1A1A] font-bold text-[1.2em] align-baseline"
          >
            Design
          </motion.span>{" "}
          <motion.span
            variants={item}
            className="inline-block bg-gradient-to-r from-[#17235C] via-[#3D5FE0] to-[#7C93F5] bg-clip-text text-transparent"
          >
            Systems
          </motion.span>{" "}
          <br />
          <motion.span variants={item} className="inline-block">
            that scale
          </motion.span>
        </h1>

        <motion.p
          variants={item}
          className="text-lg md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Backend engineer at Amazon, ex-SDE at Rupyy. I design the parts of
          a product that stay boring under pressure - configurable enough to
          bend when the requirements change, scalable enough to not need a
          rewrite six months later.
        </motion.p>

        <motion.div variants={item} className="inline-block">
          <Magnetic>
            <a
              href={SITE_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#3D5FE0] font-semibold text-lg hover:text-[#2E49BE] transition-colors group"
            >
              Connect With Me
              <span className="ml-1 group-hover:translate-x-1 transition-transform">&rsaquo;</span>
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}

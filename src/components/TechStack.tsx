"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import Reveal from "./Reveal";
import { TECH_MATRIX } from "../data/profileData";

const tagContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const tagItem: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function TechStack() {
  return (
    <section className="py-24 bg-[#F9FAFB] px-4 border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-gray-500 font-medium text-sm md:text-base mb-3 flex items-center justify-center gap-2">
              <span className="font-mono text-[#3D5FE0] font-semibold">05</span>
              <span>the toolbelt</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">
              What I Build With
            </h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {TECH_MATRIX.map((item, index) => (
            <Reveal
              key={item.category}
              delay={index * 0.06}
              variant={index % 2 === 0 ? "left" : "right"}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="p-5 md:col-span-1 flex items-center text-xs uppercase tracking-wider font-semibold text-gray-400 border-b md:border-b-0 md:border-r border-gray-100">
                  {item.category}
                </div>
                <motion.div
                  variants={tagContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="p-5 md:col-span-3 flex flex-wrap gap-2 items-center"
                >
                  {item.tools.map((tool) => (
                    <motion.span
                      variants={tagItem}
                      key={tool}
                      className="text-sm bg-[#F9FAFB] text-gray-600 px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#3D5FE0]/40 hover:text-[#1A1A1A] transition-colors"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

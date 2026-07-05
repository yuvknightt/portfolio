"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import Reveal from "./Reveal";
import { ENGINEERING_LOGS } from "../data/profileData";

const listContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-gray-500 font-medium text-sm md:text-base mb-3 flex items-center justify-center gap-2">
              <span className="font-mono text-[#3D5FE0] font-semibold">02</span>
              <span>building systems that never sleep</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">
              Where I&apos;ve Actually Shipped
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ENGINEERING_LOGS.map((log, idx) => (
            <Reveal key={log.company} delay={idx * 0.1} variant={idx % 2 === 0 ? "left" : "right"}>
              <div className="bg-[#F9FAFB] rounded-[2.5rem] p-10 md:p-12 h-full flex flex-col border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <p className="font-mono text-xs text-[#3D5FE0] font-semibold tracking-wide uppercase mb-3">
                  {log.duration}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-1">
                  {log.company}
                </h3>
                <p className="text-gray-500 font-medium mb-6">{log.role}</p>

                <p className="text-gray-500 leading-relaxed mb-6">{log.summary}</p>

                <motion.ul
                  variants={listContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="space-y-3 mb-8"
                >
                  {log.highlights.map((h) => (
                    <motion.li
                      variants={listItem}
                      key={h}
                      className="flex gap-3 text-sm text-gray-600 leading-relaxed"
                    >
                      <span className="text-[#3D5FE0] mt-1">&bull;</span>
                      <span>{h}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {log.link && (
                  <div className="mt-auto mb-8">
                    <a
                      href={log.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#1A1A1A] text-white font-medium px-8 py-4 rounded-xl hover:bg-black transition-colors"
                    >
                      {log.link.label}
                    </a>
                  </div>
                )}

                <div className={`${log.link ? "" : "mt-auto "}pt-8 border-t border-gray-200 flex flex-wrap gap-2`}>
                  {log.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Reveal from "./Reveal";
import { JOURNEY } from "../data/profileData";

export default function Journey() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // The connecting line draws itself in as you scroll through the
  // timeline, instead of just sitting there fully drawn from the start.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <p className="text-gray-500 font-medium text-sm md:text-base mb-3 flex items-center justify-center gap-2">
              <span className="font-mono text-[#3D5FE0] font-semibold">04</span>
              <span>how I got here</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">
              The Journey So Far
            </h2>
          </div>
        </Reveal>

        <div ref={timelineRef} className="relative">
          {/* Static track */}
          <div className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-gray-200 md:-translate-x-1/2" />
          {/* Progress line — draws in over the track as you scroll */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-[#3D5FE0] origin-top md:-translate-x-1/2"
          />

          <div className="space-y-14">
            {JOURNEY.map((entry, idx) => (
              <Reveal key={entry.period} delay={idx * 0.1}>
                <div
                  className={`relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${
                    idx % 2 === 1 ? "" : ""
                  }`}
                >
                  {/* dot — the current/present-day entry gets a pulsing ring */}
                  <div className="absolute left-0 top-1.5 w-4 h-4 md:left-1/2 md:-translate-x-1/2">
                    {entry.period.includes("Present") && (
                      <span className="absolute inset-0 rounded-full bg-[#3D5FE0] opacity-60 animate-ping" />
                    )}
                    <span className="relative block w-4 h-4 rounded-full bg-white border-2 border-[#3D5FE0]" />
                  </div>

                  <div
                    className={`md:text-right ${
                      idx % 2 === 1 ? "md:order-2 md:text-left" : ""
                    }`}
                  >
                    <p className="font-mono text-xs text-[#3D5FE0] font-semibold tracking-wide uppercase mb-2">
                      {entry.period}
                    </p>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                      {entry.place}
                    </h3>
                  </div>

                  <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                    <p className="text-gray-500 leading-relaxed">{entry.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import Reveal from "./Reveal";
import { SYSTEM_METRICS } from "../data/profileData";

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {Math.round(display).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-gray-500 font-medium text-sm md:text-base mb-3 flex items-center justify-center gap-2">
              <span className="font-mono text-[#3D5FE0] font-semibold">01</span>
              <span>measured, not guessed</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">
              Impact by the Numbers
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SYSTEM_METRICS.map((metric, idx) => (
            <Reveal key={metric.label} delay={idx * 0.1} variant="scale">
              <div className="h-full bg-[#F9FAFB] border border-gray-100 rounded-3xl p-8 flex flex-col hover:shadow-lg hover:border-gray-200 hover:-translate-y-1 transition-all duration-300">
                <span className="inline-block w-fit text-[11px] font-semibold uppercase tracking-wider text-gray-400 bg-white border border-gray-200 rounded-full px-3 py-1 mb-6">
                  {metric.status}
                </span>
                <div className={`text-4xl font-black tracking-tight mb-3 ${metric.accentClass}`}>
                  <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                </div>
                <p className="text-sm font-semibold text-[#1A1A1A] mb-2">{metric.label}</p>
                <p className="text-sm text-gray-500 leading-relaxed mt-auto">{metric.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

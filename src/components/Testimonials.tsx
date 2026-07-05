"use client";
import React from "react";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "../data/profileData";

/**
 * Renders nothing until real quotes are added to TESTIMONIALS in
 * profileData.ts — no fabricated quotes ship to production.
 */
export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="py-24 bg-[#F9FAFB] px-4 border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-gray-500 font-medium text-sm md:text-base mb-3">
              from the people I&apos;ve worked with
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">
              Words, Not Mine
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 0.1}>
              <div className="h-full bg-white border border-gray-100 rounded-3xl p-8 flex flex-col">
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-[#1A1A1A]">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

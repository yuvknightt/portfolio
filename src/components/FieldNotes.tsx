"use client";
import React from "react";
import Reveal from "./Reveal";
import Grain from "./Grain";
import { FIELD_NOTES } from "../data/profileData";

export default function FieldNotes() {
  return (
    <section className="bg-white pb-32 overflow-hidden">
      <div className="w-full pt-16 flex justify-center items-center overflow-hidden">
        <Reveal>
          <h2 className="text-[11vw] leading-none font-black text-[#1A1A1A] tracking-tighter whitespace-nowrap">
            RECEIPTS
          </h2>
        </Reveal>
      </div>

      <Reveal>
        <p className="text-center text-gray-500 font-medium text-sm md:text-base mb-10 flex items-center justify-center gap-2">
          <span className="font-mono text-[#3D5FE0] font-semibold">06</span>
          <span>proof, not claims</span>
        </p>
      </Reveal>

      <div className="max-w-6xl mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FIELD_NOTES.map((note, idx) => (
            <Reveal key={note.title} delay={idx * 0.12} variant="scale">
              <a
                href={note.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group h-full flex flex-col bg-[#141414] rounded-3xl p-8 hover:bg-[#1A1A1A] hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <Grain />
                <span className="relative text-xs font-semibold uppercase tracking-wider text-[#7C93F5] mb-6">
                  {note.tag}
                </span>
                <h3 className="relative text-xl font-bold text-white mb-3 leading-snug">
                  {note.title}
                </h3>
                <p className="relative text-sm text-gray-400 leading-relaxed mb-6">
                  {note.desc}
                </p>
                <span className="relative mt-auto inline-flex items-center text-sm font-semibold text-white group-hover:text-[#7C93F5] transition-colors">
                  Check It Out
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">
                    &rsaquo;
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

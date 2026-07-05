"use client";
import React from "react";
import Reveal from "./Reveal";
import Grain from "./Grain";
import Magnetic from "./Magnetic";
import { SYSTEM_PROJECTS } from "../data/profileData";

export default function Projects() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-gray-500 font-medium text-sm md:text-base mb-3 flex items-center justify-center gap-2">
              <span className="font-mono text-[#3D5FE0] font-semibold">03</span>
              <span>architected for scale</span>
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-[#1A1A1A] tracking-tight mb-5">
              Proof of Concept
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Not a company product — a system I own end-to-end, my
              architecture decisions, my trade-offs, built to prove I can take
              something from empty repo to production alone.
            </p>
          </div>
        </Reveal>

        {SYSTEM_PROJECTS.map((project, idx) => (
          <Reveal key={project.slug} delay={idx * 0.1} variant="scale">
            <div className="relative bg-[#111111] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-gray-800 shadow-2xl mb-8">
              <Grain />
              <div className="relative flex flex-col md:flex-row items-stretch">
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5">
                      <span className="shrink-0 whitespace-nowrap text-[11px] font-semibold uppercase tracking-wider text-[#111111] bg-white rounded-full px-3 py-1">
                        {project.tag}
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#7C93F5]">
                        {project.architectureType}
                      </p>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="mt-10 md:mt-auto md:pt-10">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-800/60 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {project.liveUrl && (
                        <Magnetic strength={0.25}>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-white text-[#111111] font-semibold text-sm px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                          >
                            View Live
                          </a>
                        </Magnetic>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-white font-semibold text-sm hover:text-[#3D5FE0] transition-colors group"
                        >
                          View Source
                          <span className="ml-2 border border-gray-600 rounded-full p-1 group-hover:border-[#3D5FE0] transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-gray-800 p-8 md:p-10 space-y-5 bg-gradient-to-br from-gray-950 to-black">
                  {project.highlights.map((h, hIdx) => (
                    <div
                      key={h.label}
                      className="rounded-2xl bg-gray-800/40 border border-gray-700 p-5 hover:border-gray-600 hover:bg-gray-800/60 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <p
                        className={`text-xs font-mono mb-2 uppercase tracking-wide ${
                          hIdx % 2 === 0 ? "text-emerald-400" : "text-[#7C93F5]"
                        }`}
                      >
                        {h.label}
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed">{h.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

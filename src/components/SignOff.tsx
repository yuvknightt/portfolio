"use client";
import React, { useState } from "react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { SITE_LINKS } from "../data/profileData";

export default function SignOff() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE_LINKS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail silently (permissions, insecure context) —
      // the email is still visible on the button, so nothing is lost.
    }
  }

  return (
    <section className="py-28 px-4 bg-white text-center">
      <div className="max-w-xl mx-auto">
        <Reveal>
          <p className="text-gray-500 font-medium text-sm md:text-base mb-3 flex items-center justify-center gap-2">
            <span className="font-mono text-[#3D5FE0] font-semibold">07</span>
            <span>before you go</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight mb-6">
            Say Hi
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10">
            If any of this resonates — a system you&apos;re building, a role
            you think I&apos;d be good for, or just a good technical
            argument — I&apos;d like to hear about it.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Magnetic>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white font-medium px-8 py-4 rounded-xl hover:bg-black transition-colors"
            >
              {copied ? "Copied!" : SITE_LINKS.email}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {copied ? (
                  <polyline points="20 6 9 17 4 12" />
                ) : (
                  <>
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </>
                )}
              </svg>
            </button>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}

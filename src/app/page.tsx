import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Statement from "../components/Statement";
import Metrics from "../components/Metrics";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Journey from "../components/Journey";
import TechStack from "../components/TechStack";
import Testimonials from "../components/Testimonials";
import FieldNotes from "../components/FieldNotes";
import SignOff from "../components/SignOff";
import { SITE_LINKS } from "../data/profileData";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Statement />
        <Metrics />
        <div id="work">
          <Experience />
          <Projects />
        </div>
        <div id="journey">
          <Journey />
        </div>
        <TechStack />
        <Testimonials />
        <div id="field-notes">
          <FieldNotes />
        </div>
        <SignOff />
      </main>

      <footer className="border-t border-gray-100 py-12 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-medium text-gray-400">
              © {new Date().getFullYear()} Yuvraj Singh. Architected for scale.
            </p>

            <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
              <a href={SITE_LINKS.resume} target="_blank" rel="noopener noreferrer" className="hover:text-[#1A1A1A] transition-colors">
                Resume
              </a>
              <a href={SITE_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#1A1A1A] transition-colors">
                GitHub
              </a>
              <a href={SITE_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#1A1A1A] transition-colors">
                LinkedIn
              </a>
              <a href={SITE_LINKS.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-[#1A1A1A] transition-colors">
                LeetCode
              </a>
              <a href={SITE_LINKS.hackerrank} target="_blank" rel="noopener noreferrer" className="hover:text-[#1A1A1A] transition-colors">
                HackerRank
              </a>
              <a href={`mailto:${SITE_LINKS.email}`} className="hover:text-[#1A1A1A] transition-colors">
                Email
              </a>
            </div>

            <a href="#" className="text-sm font-medium text-gray-400 hover:text-[#1A1A1A] transition-colors">
              Back to Top ↑
            </a>
          </div>

          <p className="font-mono text-xs text-gray-400 text-center md:text-left">
            Built with Next.js, TypeScript &amp; Tailwind CSS, animated with
            Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}

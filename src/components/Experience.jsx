import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3">
            Experience & Education
          </h2>
          <p className="text-base text-zinc-300 max-w-[65ch] leading-relaxed">
            A track record of shipping software, hardware-connected systems, and academic distinction.
          </p>
        </div>

        <div className="border-t border-white/[0.08] divide-y divide-white/[0.08]">
          
          {/* 1. Tewke Ltd. */}
          <div className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
            <div className="lg:col-span-3 text-xs font-mono text-zinc-400">
              <span className="text-zinc-200 font-medium block">Apr 2025 – Present</span>
              <span className="text-zinc-500 block mt-0.5">London, UK</span>
              <span className="text-zinc-400 block mt-1 text-[11px]">Full-Time</span>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Full-Stack Software Engineer
                </h3>
                <a
                  href="https://tewke.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press inline-flex items-center gap-1 text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-300 hover:text-white border border-white/10"
                >
                  <span>Tewke Ltd.</span>
                  <ArrowUpRight size={11} weight="bold" />
                </a>
              </div>

              <p className="text-sm text-zinc-300 mb-4 leading-relaxed max-w-[65ch]">
                Technical ownership spanning internal manufacturing operations, full-stack web platforms, and cross-platform mobile & embedded features. Working across software and physical operations to take a commercial smart-home product from design to scale.
              </p>

              <div className="space-y-2 mb-5 text-xs sm:text-sm text-zinc-400 border-l border-white/[0.1] pl-4">
                <div>
                  <strong className="text-zinc-200 font-medium">Used Across 1,000+ Production Devices:</strong> Built core operations software for multi-device assembly tracking, automated parts deduction, and camera quality control.
                </div>
                <div>
                  <strong className="text-zinc-200 font-medium">Smart-Home Mobile & Embedded UI:</strong> Shipped user-facing mobile features and touchscreen device interfaces in Flutter and Dart.
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                <span className="tech-pill">TypeScript</span>
                <span className="tech-pill">Vue.js</span>
                <span className="tech-pill">Flutter</span>
                <span className="tech-pill">Dart</span>
                <span className="tech-pill">Express</span>
                <span className="tech-pill">PostgreSQL</span>
                <span className="tech-pill">Docker</span>
              </div>
            </div>
          </div>

          {/* 2. Imperial College London (MEng) */}
          <div className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
            <div className="lg:col-span-3 text-xs font-mono text-zinc-400">
              <span className="text-zinc-200 font-medium block">2022 – 2026</span>
              <span className="text-zinc-500 block mt-0.5">London, UK</span>
              <span className="text-zinc-400 block mt-1 text-[11px]">First-Class Honours</span>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Master of Engineering (MEng), Design Engineering
                </h3>
                <a
                  href="https://www.imperial.ac.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press inline-flex items-center gap-1 text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-300 hover:text-white border border-white/10"
                >
                  <span>Imperial College London</span>
                  <ArrowUpRight size={11} weight="bold" />
                </a>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed max-w-[65ch]">
                Graduated with First-Class Honours in Design Engineering from Imperial College London. Awarded the Faculty Dean's List for all 4 consecutive years, recognising students in the top 10% of the cohort. An engineering discipline fusing mechanical engineering, electronics, computer science, and user-centred design to turn complex technical innovations into viable real-world products.
              </p>
            </div>
          </div>

          {/* 3. Undergraduate Teaching Assistant */}
          <div className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
            <div className="lg:col-span-3 text-xs font-mono text-zinc-400">
              <span className="text-zinc-200 font-medium block">Oct 2023 – Jun 2024</span>
              <span className="text-zinc-500 block mt-0.5">London, UK</span>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Undergraduate Teaching Assistant
                </h3>
                <a
                  href="https://www.imperial.ac.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press inline-flex items-center gap-1 text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-300 hover:text-white border border-white/10"
                >
                  <span>Imperial College London</span>
                  <ArrowUpRight size={11} weight="bold" />
                </a>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed max-w-[65ch]">
                Facilitated computing and engineering modules for undergraduate cohorts, conducting hands-on code reviews, hardware debugging, and problem-solving workshops.
              </p>
            </div>
          </div>

          {/* 4. Academic STEM Tutor */}
          <div className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
            <div className="lg:col-span-3 text-xs font-mono text-zinc-400">
              <span className="text-zinc-200 font-medium block">Nov 2022 – Present</span>
              <span className="text-zinc-500 block mt-0.5">West London & Online</span>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Academic STEM Tutor
                </h3>
                <Link
                  to="/tutoring"
                  className="btn-press inline-flex items-center gap-1 text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-300 hover:text-white border border-white/10"
                >
                  <span>View Tutoring Practice</span>
                  <ArrowUpRight size={11} weight="bold" />
                </Link>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed max-w-[65ch]">
                Over 4 years delivering bespoke 1:1 tuition in Mathematics, Physics, and Computer Science for GCSE and A-level candidates targeting top grades (A and A*).
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

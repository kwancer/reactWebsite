import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  ArrowUpRight,
  Copy,
  Check
} from '@phosphor-icons/react';

const PORTFOLIO_MARKDOWN = `# Krzysztof (Kris) Wancerski — Portfolio & Dossier
> Full-Stack, Mobile & AI Design Engineer based in London, UK.

## Contact & Direct Channels
- **Direct Email**: krzysztofwancerski@gmail.com
- **LinkedIn Profile**: https://www.linkedin.com/in/kwancerski/
- **Portfolio Website**: https://kwancerski.page
- **Featured Projects**: https://kwancerski.page#work
- **Engineering Approach**: https://kwancerski.page#approach
- **Academic Tutoring Portal**: https://kwancerski.page/tutoring
- **Location**: London, UK (West London)
- **Timezone**: GMT (UTC+1)

---

## Executive Summary
First-class MEng graduate in Design Engineering from Imperial College London (ranked #2 in the world in QS World University Rankings). Technical generalist taking complex, undefined challenges from first principles to production software across TypeScript & Vue, Flutter & Dart, and applied Agentic AI.

Combines rigorous engineering fundamentals with customer-facing product delivery, shipping software across venture-backed healthcare AI, commercial hardware operations (1,000+ devices), and international AI research presentations.

---

## Engineering & Academic Background
- **Design Engineering Background (Imperial College London)**: A fusion of user needs, entrepreneurship, innovation, technology, and software — suited perfectly for the AI age. Awarded Faculty of Engineering Dean's List for all 4 consecutive undergraduate years (Top 10% of cohort). Ranked #2 globally (QS).
- **Mobile App & Embedded UI (Tewke Ltd.)**: Flutter for experience in app development, shipping features with customers in real world, leading whole projects and having whole new features end to end.
- **Full-Stack Systems (Tewke Ltd.)**: Working from a brief, internal company needs, and regulatory requirements, supporting 1,000+ manufacturing devices.
- **ISF Montreal 2026 (Oral Presentation)**: Delivering a 20-minute presentation on an autonomous agentic AI web app that democratises time-series forecasting for people who otherwise couldn't access advanced predictive modeling.

---

## Featured Production Projects

### 1. AskForecast — Agentic Time-Series Forecasting
- **URL**: https://askforecast.app
- **Classification**: Imperial Master's Project / Oral Presentation at ISF Montreal 2026
- **Headline**: Democratising time-series forecasting via autonomous agentic AI — interactive web app.
- **Overview**: An interactive web application where users upload complex datasets and describe forecasting goals in natural language to receive automated, calibrated probabilistic predictions with generative reasoning reports.
- **Key Technical Accomplishments**:
  - **ISF Montreal 2026 Presentation**: Selected to deliver a 20-minute oral presentation sharing advanced forecasting AI research at the 44th International Symposium on Forecasting.
  - **Autonomous Agentic Workflow**: Embedded AI agent parses natural language, orchestrates statistical ensembles, calculates prediction intervals, and synthesises diagnostic reports.
- **Technologies**: Agentic AI, Python, FastAPI, Vue 3, Gemini API, Probabilistic Time-Series Models.

### 2. Yarn Health — Conversational Voice AI Companion
- **URL**: https://yarn.health
- **Classification**: Venture-Backed Healthcare Startup / Mobile & Voice AI
- **Headline**: Conversational Voice AI Companion for Clinical Trials.
- **Overview**: Voice-first mobile application designed to capture rich, unstructured patient quality-of-life narratives during clinical oncology trials.
- **Key Technical Accomplishments**:
  - **Ultra Low-Latency Streaming**: Integrated OpenAI Whisper and voice synthesis for empathetic, real-time clinical dialogue.
  - **Multi-Modal Narrative Engine**: Transforms conversational audio into structured, validated clinical endpoints.
  - **Clinical Pilot Validation**: Successfully deployed and validated across 15 real clinical users in live trials.
- **Technologies**: Flutter, Dart, OpenAI Whisper, Real-Time Audio Streaming, HealthTech APIs.

### 3. Mobile Apps & Embedded Touchscreen UI (Tewke Ltd.)
- **Classification**: Production Hardware Ecosystem / Mobile & Embedded Hardware
- **Headline**: User-Centred Mobile Apps & Embedded Touchscreen UI.
- **Overview**: Designing and shipping cross-platform mobile apps and touch-screen embedded device interfaces centered entirely on Flutter and Dart.
- **Key Technical Accomplishments**:
  - **Unified Flutter Architecture**: Responsive mobile experiences across iOS and Android alongside dedicated touchscreen embedded hardware controls from a single codebase.
  - **Local Hardware Telemetry**: Engineered local networking and real-time device synchronisation for fluid, zero-latency smart-home automation.
- **Technologies**: Flutter, Dart, iOS & Android, Embedded Touchscreen, Device Telemetry.

### 4. Manufacturing & Operations Software for Scaling Hardware (Tewke Ltd.)
- **Classification**: Internal Operations & Scaling Tooling / 1,000+ Production Devices
- **Headline**: Manufacturing & Operations Software for Scaling Hardware.
- **Overview**: Architecting custom full-stack operations software and automated quality control to streamline hardware assembly and facilitate production scaling.
- **Key Technical Accomplishments**:
  - **Supported 1,000+ Production Devices**: Core internal system at Tewke Ltd. managing multi-device production tracking, parts deduction, and automated device provisioning.
  - **Camera Quality Control**: Integrated photo validation at critical assembly stages to isolate build defects immediately and ensure rigorous manufacturing auditability.
- **Technologies**: TypeScript, Vue.js, Express, PostgreSQL, Drizzle ORM, Docker.

### Imperial Physical Computing & Engineering Archive
- **Robotics & Embedded Microcontrollers**: Autonomous rover pathfinding, PID motion control, custom PCB design, and C++ firmware.
- **Fluid Dynamics Simulations**: Finite-element modeling and computational fluid simulations for aerodynamic structures.

---

## Engineering Approach & Product Principles

### Philosophy & Way of Working
Taking complex, undefined challenges from first principles to reliable, production-ready software that users love. Grounding every technical decision in first principles, moving rapidly from concept to working software that drives real-world outcomes.

### Core Tenets
1. **Beautiful, Polish-First UX**: Thoughtfully designed interfaces that look premium, feel responsive, and build immediate user trust.
2. **Working, Production-Ready Code**: Software built to work in the real world from day one, backed by scalable architecture and clean code across TypeScript, Vue, and Flutter.
3. **First-Principles Velocity**: Rapid execution with high autonomy, cutting through noise to ship high-quality software into hands quickly.

### Technical Capability Pillars
- **Agentic & Multi-Modal AI**: Architecting autonomous AI agents, real-time voice streaming with Whisper, and deep reasoning models for complex document and clinical synthesis. (Stack: Agentic AI, Voice AI, LLM Chains, Vector Search).
- **Full-Stack Web & Backend**: Engineering fast, scalable applications in TypeScript, Vue 3, and Express, backed by clean PostgreSQL schemas and containerised Docker environments. (Stack: TypeScript, Vue 3, PostgreSQL, Express, Docker).
- **Mobile & Embedded UI**: Delivering high-performance cross-platform mobile apps for iOS and Android alongside responsive touchscreen hardware interfaces in Flutter & Dart. (Stack: Flutter, Dart, iOS & Android, Embedded Hardware).

---

## Experience & Career Trajectory

### 1. Full-Stack Software Engineer — Tewke Ltd.
- **Tenure**: Apr 2025 – Present (Promoted Aug 2026)
- **Location**: London, UK | Full-Time
- **Company URL**: https://tewke.com
- **Scope**: Technical ownership across internal manufacturing operations, full-stack backend systems, and cross-platform mobile & embedded device features.
- **Impact**:
  - Architected core internal operations software managing multi-device production tracking, automated parts deduction, and automated camera QC for 1,000+ production devices.
  - Shipped smart-home mobile application features and touchscreen embedded device interfaces in Flutter and Dart.
- **Stack**: TypeScript, Vue.js, Flutter, Dart, Express, PostgreSQL, Docker.

### 2. Master of Engineering (MEng), Design Engineering — Imperial College London
- **Tenure**: 2022 – 2026
- **Location**: London, UK
- **Institution URL**: https://www.imperial.ac.uk
- **Distinction**: First Class trajectory. Awarded Faculty Dean's List for all 4 consecutive undergraduate years (Top 10% of cohort). Imperial College London is ranked #2 in the world (QS).

### 3. Undergraduate Teaching Assistant — Imperial College London
- **Tenure**: Oct 2023 – Jun 2024
- **Location**: London, UK
- **Scope**: Facilitated computing and engineering modules for undergraduate cohorts, conducting hands-on code reviews, hardware debugging, and problem-solving workshops.

### 4. Academic STEM Tutor — Private Practice
- **Tenure**: Nov 2022 – Present
- **Location**: West London & Online
- **Portal**: https://kwancerski.page/tutoring
- **Scope**: Over 4 years delivering bespoke 1:1 tuition in Mathematics, Physics, and Computer Science for GCSE and A-level candidates targeting top grades (A and A*).

---

## Academic Honours & Distinctions

### 1. Dean’s List (All 4 Consecutive Years)
- **Awarding Body**: Imperial College London, Faculty of Engineering
- **URL**: https://www.imperial.ac.uk/engineering/study/undergraduate/prizes/
- **Distinction**: Top 10% Cohort • All 4 Years
- **Detail**: Awarded every single academic year of university at Imperial College London (#2 university globally in QS World Rankings). The Dean’s List recognises undergraduate engineers in the top 10% of their cohort who achieved a continuous first-class standard (70%+) across all four years.

### 2. IET Future Talent Award
- **Awarding Body**: Institution of Engineering and Technology (IET)
- **URL**: https://www.theiet.org/impact-society/awards-scholarships/future-talent-awards/
- **Distinction**: National Engineering Scholarship
- **Detail**: Prestigious national engineering scholarship and multi-year bursary supported by the David Family Foundation, awarded to exceptional engineering students recognised for outstanding academic promise, technical innovation, and future engineering leadership.

---

## Technical Stack & Production Tooling Matrix
- **Languages**: TypeScript, Python, Dart, JavaScript, Vue.js, C++, SQL, Bash
- **Frameworks & AI**: Vue 3 / Nuxt, Flutter (BLoC state management), FastAPI, Express, Drizzle ORM, React
- **Systems & Infrastructure**: PostgreSQL, Docker, Supabase, Linux CLI, Git & GitLab, CI/CD pipelines
`;

export default function Hero() {
  // Typewriter effect: Krzysztof -> deletes to K -> Kris -> deletes to K -> Krzysztof
  const [displayedFirst, setDisplayedFirst] = useState('Krzysztof');
  const [isDeleting, setIsDeleting] = useState(true);
  const [targetWord, setTargetWord] = useState('Kris');
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  const handleCopyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_MARKDOWN);
      setCopiedMarkdown(true);
      setTimeout(() => setCopiedMarkdown(false), 2200);
    } catch (err) {
      console.error('Failed to copy markdown:', err);
    }
  };

  useEffect(() => {
    let timer;
    const current = displayedFirst;

    if (isDeleting) {
      if (current.length > 1) {
        timer = setTimeout(() => {
          setDisplayedFirst(current.slice(0, -1));
        }, 110);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
        }, 280);
      }
    } else {
      if (current.length < targetWord.length) {
        timer = setTimeout(() => {
          setDisplayedFirst(targetWord.slice(0, current.length + 1));
        }, 130);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
          setTargetWord(targetWord === 'Kris' ? 'Krzysztof' : 'Kris');
        }, 3000);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedFirst, isDeleting, targetWord]);

  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Primary Identity & Proposition (col-span-7) */}
          <div className="lg:col-span-7">
            
            {/* Identity & Headshot (Guaranteed 2-line layout to prevent jumping) */}
            <div className="flex items-center gap-5 sm:gap-6 mb-7">
              <img 
                src="/me.png" 
                alt="Krzysztof Wancerski" 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border border-white/15 shrink-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tightest leading-[1.05]">
                  <span className="block">
                    <span>{displayedFirst}</span>
                    <span className="inline-block w-[2px] h-[0.8em] bg-blue-400 ml-1 translate-y-[2px] animate-pulse" />
                  </span>
                  <span className="block text-zinc-300">Wancerski</span>
                </h1>
                <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1.5">
                  Full-Stack, Mobile & AI Design Engineer <span className="text-zinc-600">/</span> London, UK
                </p>
              </div>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal mb-8 max-w-[54ch]">
              First-class MEng graduate from Imperial College London (ranked #2 globally). Technical generalist taking complex, undefined challenges from first principles to production software across <strong className="text-white font-medium">TypeScript & Vue</strong>, <strong className="text-white font-medium">Flutter & Dart</strong>, and applied <strong className="text-white font-medium">Agentic AI</strong>.
            </p>

            {/* Disciplined CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="btn-press inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200"
              >
                <span>Selected Work</span>
                <ArrowDown size={13} weight="bold" />
              </a>

              <a
                href="#contact"
                className="btn-press inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-medium bg-zinc-900 text-zinc-200 hover:text-white hover:bg-zinc-800 border border-white/10"
              >
                <span>Get in Touch</span>
              </a>
            </div>

          </div>

          {/* Right Column: Grounded Track Record Overview (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Copy button outside of the card, aligned with the right side */}
            <div className="flex justify-end mb-2.5">
              <div className="relative group">
                <button
                  onClick={handleCopyMarkdown}
                  className="btn-press inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-[11px] font-mono shadow-sm"
                  aria-label="Copy in Markdown for AI agent"
                >
                  {copiedMarkdown ? (
                    <>
                      <Check size={12} weight="bold" className="text-zinc-200" />
                      <span className="text-zinc-200 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy in Markdown</span>
                    </>
                  )}
                </button>

                {/* Tooltip on hover */}
                <div className="pointer-events-none absolute bottom-full right-0 mb-2 hidden group-hover:block z-30 w-56 p-2 rounded-md bg-zinc-900 border border-white/15 text-[11px] text-zinc-300 shadow-xl font-sans normal-case leading-tight">
                  Copy the contents of this page for use in your preferred AI agent
                </div>
              </div>
            </div>

            <div className="minimal-surface p-6 sm:p-7 bg-[#111114]">
              
              <div className="pb-3.5 mb-5 border-b border-white/[0.08] text-xs font-mono text-zinc-400">
                <span className="font-medium text-zinc-300">Engineering & Academic Background</span>
              </div>

              <div className="space-y-4 text-xs">
              
              <div className="pb-3.5 border-b border-white/[0.06]">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-semibold text-white text-sm">Design Engineering Background</span>
                  <span className="font-mono text-[11px] text-zinc-400">Imperial College</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Fusion of user needs, entrepreneurship, innovation, technology, and software. Suited perfectly for the AI age.
                </p>
              </div>

              <div className="pb-3.5 border-b border-white/[0.06]">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-semibold text-white text-sm">Mobile App & Embedded UI</span>
                  <span className="font-mono text-[11px] text-zinc-400">Tewke Ltd.</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Flutter for experience in app development, shipping features with customers in real world, leading whole projects and having whole new features end to end.
                </p>
              </div>

              <div className="pb-3.5 border-b border-white/[0.06]">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-semibold text-white text-sm">Full-Stack Systems</span>
                  <span className="font-mono text-[11px] text-zinc-400">Tewke Ltd.</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Working from a brief, internal company needs, and regulatory requirements.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-semibold text-white text-sm">ISF Montreal 2026</span>
                  <span className="font-mono text-[11px] text-zinc-400">Oral Presentation</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Delivering a 20-minute presentation on an autonomous agentic AI web app that democratises time-series forecasting for people who otherwise couldn't access advanced predictive modeling.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
);
}

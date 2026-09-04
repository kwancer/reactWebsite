import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  ArrowUpRight,
  Copy,
  Check
} from '@phosphor-icons/react';

const PORTFOLIO_MARKDOWN = `# Krzysztof (Kris) Wancerski — Portfolio & Dossier
> I turn ideas into real things.
> An engineer working across software, design and AI.
> London, UK | Email: krzysztofwancerski@gmail.com | Portfolio: https://kwancerski.page

## Contact & Let's Have a Coffee
- **Direct Email**: krzysztofwancerski@gmail.com
- **LinkedIn Profile**: https://www.linkedin.com/in/kwancerski/
- **Location**: London, UK (West London)
- **Portfolio Website**: https://kwancerski.page
- **Selected Work**: https://kwancerski.page#work
- **How I Work**: https://kwancerski.page#approach
- **Academic Tutoring Portal**: https://kwancerski.page/tutoring
- **Coffee & Conversations**: Always open to talking through ambiguous challenges, engineering systems, or early-stage product ideas over coffee in London or a call worldwide.

---

## Executive Summary
I work across engineering, design and AI to take ambiguous problems from early ideas to working systems. Grounded in a First-Class MEng in Design Engineering from Imperial College London.

I enjoy problems where the path isn’t obvious yet. Rather than starting from a predefined technology, I start with what needs to exist—combining software, AI, physical hardware, and operational systems to deliver working products used in the real world.

---

## Execution Range Across Disciplines
- **Design Engineering Foundations (Imperial College London)**: First-Class MEng (Dean's List all 4 consecutive years, top 10% of cohort). Trained across engineering, design, software and physical product development, with a focus on turning human needs and technical constraints into working systems.
- **Smart-Home & Embedded Software (Tewke Ltd.)**: Designed and shipped cross-platform mobile apps and touchscreen embedded device interfaces in Flutter/Dart, bridging hardware telemetry with real users.
- **Software for Manufacturing Operations (Tewke Ltd.)**: Built full-stack tracking, automated parts deduction, and camera-assisted quality control used in the active production workflow for 1,000+ devices.
- **AI Workflows & Time-Series (AskForecast)**: Selected for a 20-minute oral presentation at the 44th International Symposium on Forecasting (ISF Montreal 2026) for an AI application making statistical time-series forecasting accessible.

---

## Selected Work & Systems

### 1. AskForecast — Natural-Language Time-Series Forecasting
- **URL**: https://askforecast.app
- **Classification**: Imperial Master's Project / Oral Presentation at ISF Montreal 2026
- **Headline**: Making complex statistical forecasting accessible through an AI-driven, natural-language workflow.
- **Overview**: Time-series forecasting is technically demanding and largely inaccessible to non-specialists. I designed and built AskForecast to turn plain-language questions and raw uploaded datasets into structured forecasting problems—interpreting the request, automatically selecting and running appropriate statistical forecasting models, and presenting forecasts with prediction intervals and explanations.
- **Highlights**:
  - **ISF Montreal 2026 Presentation**: Selected for a 20-minute oral presentation at the 44th International Symposium on Forecasting, demonstrating how product design and AI interfaces can democratise technical forecasting workflows.
  - **Automated Model Selection Pipeline**: Built an LLM workflow that interprets natural-language forecasting requests, structures the problem, automatically selects and executes statistical forecasting models, and calculates prediction intervals.
- **Technologies**: LLM Workflows, Time-Series Forecasting, Model Selection, Python, FastAPI, Vue 3.

### 2. Yarn Health — Conversational Voice Journal for Chronic Illness
- **URL**: https://yarn.health
- **Classification**: Digital Health Product / 15 User Test Participants
- **Headline**: Turning everyday conversations and voice notes into structured summaries for chronic illness.
- **Overview**: People living with long-term conditions often struggle to track and communicate symptoms between appointments. Rather than building a conventional tracking form, I developed a voice-first mobile journal that lets users speak naturally about their day, using AI to turn conversational voice notes into structured summaries that support more productive consultations.
- **Highlights**:
  - **Streaming Voice Transcription & Extraction**: Implemented low-latency speech transcription with OpenAI Whisper alongside an extraction pipeline that organises longitudinal symptom trends without burdening the user.
  - **Tested with 15 Participants**: Completed user testing with 15 people managing long-term conditions to refine conversational speech latency and ensure summary clarity for medical consultations.
- **Technologies**: Flutter, Dart, Voice AI, Speech-to-Text (Whisper), Mobile UX, Health Data.

### 3. Smart-Home Mobile Apps & Embedded Touchscreen Interfaces (Tewke Ltd.)
- **Classification**: Hardware-Connected Software / Tewke Ltd.
- **Headline**: Bridging physical smart-home hardware and daily user interaction.
- **Overview**: At Tewke, I work across the boundary between software and physical products. I designed and shipped cross-platform mobile applications and on-device touchscreen interfaces, giving users direct, real-time control over their physical environment.
- **Highlights**:
  - **Unified Multi-Platform Architecture**: Built a unified Flutter application running across iOS, Android, and embedded touchscreen hardware, coordinating local network telemetry with device state synchronization.
  - **Shipped to Real Users**: Owned interface features end-to-end—from initial interaction design through user testing to production deployment on commercial smart-home hardware.
- **Technologies**: Flutter, Dart, iOS & Android, Embedded Linux, Device Telemetry, State Synchronization.

### 4. Software for Manufacturing Operations (Tewke Ltd.)
- **Classification**: Internal Operations & Tooling / 1,000+ Production Devices
- **Headline**: Full-stack operations software to scale physical hardware assembly.
- **Overview**: Scaling physical hardware requires reliable operational systems. I built the full-stack internal platform that orchestrates assembly tracking, inventory deduction, and device provisioning across our manufacturing line.
- **Highlights**:
  - **Used in Production Workflow for 1,000+ Devices**: Active core platform at Tewke Ltd., replacing previously manual tracking steps with automated inventory deduction and quality-control workflows.
  - **Automated Inspection & Workflow Engine**: Built custom camera-assisted quality checks at assembly checkpoints to catch build defects early, integrated with a relational schema tracking component lifecycles.
- **Technologies**: TypeScript, Vue.js, Express, PostgreSQL, Drizzle ORM, Docker, Operations Tooling.

---

## How I Work & Product Principles

### Philosophy
I work from the problem outward rather than from a predefined discipline inward. AI expands my execution range, while engineering discipline and problem definition lead the way.

I enjoy problems where the path isn't obvious yet. The projects I find most interesting usually start with a vague question and require figuring out what needs to exist before building it.

Rather than starting with a narrow technology, I look at what the problem demands—whether that means software, AI models, physical hardware, or operational workflows. In my day-to-day development workflow, I actively use AI coding agents to accelerate implementation—directing and reviewing their output while retaining full responsibility for the architecture, engineering trade-offs, and final system.

### Core Tenets
1. **Start with the problem**: Don't choose the technology before understanding what needs to exist.
2. **Build things people can actually use**: A prototype is only the beginning; real-world behaviour and reliability matter.
3. **Use AI to expand execution**: AI makes it possible to explore, prototype, and operate across a broader range of problems.

---

## Experience & Career Trajectory

### 1. Full-Stack Software Engineer — Tewke Ltd.
- **Tenure**: Apr 2025 – Present
- **Location**: London, UK | Full-Time
- **Company URL**: https://tewke.com
- **Scope**: Technical ownership spanning internal manufacturing operations, full-stack web platforms, and cross-platform mobile & embedded features. Working across software and physical operations to take a commercial smart-home product from design to scale.
- **Impact**:
  - Built core operations software managing multi-device production tracking, automated parts deduction, and camera quality control used across 1,000+ production devices.
  - Shipped smart-home mobile application features and touchscreen embedded device interfaces in Flutter and Dart.
- **Stack**: TypeScript, Vue.js, Flutter, Dart, Express, PostgreSQL, Docker.

### 2. Master of Engineering (MEng), Design Engineering — Imperial College London
- **Tenure**: 2022 – 2026
- **Location**: London, UK
- **Institution URL**: https://www.imperial.ac.uk
- **Distinction**: First-Class Honours in Design Engineering. Faculty Dean's List for all 4 consecutive years (top 10% of cohort). An engineering discipline fusing mechanical engineering, electronics, computer science, and user-centred design to turn complex technical innovations into viable real-world products.

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
- **Dean’s List (All 4 Consecutive Years)**: Imperial College London, Faculty of Engineering. Top 10% Cohort • All 4 Years.
- **IET Future Talent Award**: Institution of Engineering and Technology. National Engineering Scholarship supported by the David Family Foundation.

---

## Technical Tools & Technologies
- **Languages**: TypeScript, Python, Dart, JavaScript, Vue.js, C++, SQL, Bash
- **Frameworks & AI**: Vue 3 / Nuxt, Flutter (BLoC), FastAPI, Express, Drizzle ORM, React
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
            
            {/* Copy in Markdown Button (justified left above name) */}
            <div className="flex justify-start mb-4">
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
                <div className="pointer-events-none absolute bottom-full left-0 mb-2 hidden group-hover:block z-30 w-56 p-2 rounded-md bg-zinc-900 border border-white/15 text-[11px] text-zinc-300 shadow-xl font-sans normal-case leading-tight">
                  Copy the contents of this page for use in your preferred AI agent
                </div>
              </div>
            </div>

            {/* Identity & Headshot */}
            <div className="flex items-center gap-4 sm:gap-5 mb-6">
              <img 
                src="/me.png" 
                alt="Krzysztof Wancerski" 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-white/15 shrink-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <div className="text-base sm:text-lg font-semibold text-white tracking-tight flex items-center">
                  <span>{displayedFirst}</span>
                  <span className="inline-block w-[2px] h-[0.8em] bg-blue-400 ml-1 translate-y-[1px] animate-pulse" />
                  <span className="ml-1 text-zinc-300">Wancerski</span>
                </div>
                <p className="text-xs font-mono text-zinc-400 mt-0.5">
                  Engineering &bull; Design &bull; AI <span className="text-zinc-600">/</span> London, UK
                </p>
              </div>
            </div>

            {/* Primary Brand Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-white tracking-tightest leading-[1.08] mb-5 max-w-[15ch]">
              I turn ideas into real things.
            </h1>

            {/* Supporting Positioning Statement */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal mb-3 max-w-[54ch]">
              I work across engineering, design and AI to take ambiguous problems from early ideas to working systems.
            </p>

            {/* Human Mindset & Credential */}
            <p className="text-sm text-zinc-400 leading-relaxed font-normal mb-8 max-w-[54ch]">
              I enjoy problems where the path isn’t obvious yet. I hold a First-Class MEng in Design Engineering from Imperial College London.
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
            <div className="minimal-surface p-6 sm:p-7 bg-[#111114]">
              
              <div className="pb-3.5 mb-5 border-b border-white/[0.08] text-xs font-mono text-zinc-400">
                <span className="font-medium text-zinc-300">Execution Range Across Disciplines</span>
              </div>

              <div className="space-y-4 text-xs">
              
              <div className="pb-3.5 border-b border-white/[0.06]">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-semibold text-white text-sm">Design Engineering Foundations</span>
                  <span className="font-mono text-[11px] text-zinc-400">Imperial College</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  First-Class MEng (Dean's List all 4 years). Trained across engineering, design, software and physical product development, with a focus on turning human needs and technical constraints into working systems.
                </p>
              </div>

              <div className="pb-3.5 border-b border-white/[0.06]">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-semibold text-white text-sm">Smart-Home & Embedded Software</span>
                  <span className="font-mono text-[11px] text-zinc-400">Tewke Ltd.</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Designed and shipped cross-platform mobile apps and touchscreen embedded device interfaces in Flutter/Dart, bridging hardware telemetry with real users.
                </p>
              </div>

              <div className="pb-3.5 border-b border-white/[0.06]">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-semibold text-white text-sm">Software for Manufacturing Operations</span>
                  <span className="font-mono text-[11px] text-zinc-400">1,000+ Devices</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Built full-stack tracking, automated parts deduction, and camera-assisted quality control used in the active production workflow for 1,000+ devices.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-semibold text-white text-sm">AI Workflows & Time-Series</span>
                  <span className="font-mono text-[11px] text-zinc-400">ISF Montreal 2026</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Selected for an oral presentation at the 44th International Symposium on Forecasting for an AI application making statistical time-series forecasting accessible.
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

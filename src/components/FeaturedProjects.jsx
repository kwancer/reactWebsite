import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CaretDown, 
  CaretUp, 
  Check, 
  Sparkle, 
  DeviceMobile, 
  Browsers 
} from '@phosphor-icons/react';

export default function FeaturedProjects() {
  const [showArchive, setShowArchive] = useState(false);

  const archive = [
    {
      title: 'TimeLine',
      category: 'Embedded Systems',
      description: 'E-Ink device with ESP32 and Neopixel ring designed for young adults to counter time blindness.',
      link: 'https://www.youtube.com/watch?v=uzUE0eZkHto',
    },
    {
      title: 'BinBiotic',
      category: 'IoT & Machine Learning',
      description: 'Connected municipal waste sensors predicting bin overflow via cellular telemetry.',
      link: 'https://drive.google.com/file/d/1iMb09Aua_NyVBw2G3A4m7tl4fdiX-OYY/preview',
    },
    {
      title: 'Autonomous Blackjack Dealer',
      category: 'Robotics & Vision',
      description: 'Physical card-dispensing robotics platform with IR sensor tracking and gesture recognition.',
      link: 'https://www.youtube.com/watch?v=Sd-Dzjxv1iA',
    },
    {
      title: 'Aerodynamic Truck CFD',
      category: 'Finite Element Analysis',
      description: 'SolidWorks and Ansys aerodynamic evaluation of custom vehicle drag coefficients.',
      link: '/projects/truck.pdf',
    }
  ];

  return (
    <section id="work" className="py-24 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3">
            Featured Projects & Systems
          </h2>
          <p className="text-base text-zinc-300 max-w-[65ch] leading-relaxed">
            Production systems spanning peer-reviewed agentic time-series AI, conversational medical assistants, user-centred Flutter mobile apps, and enterprise startup tooling.
          </p>
        </div>

        {/* Project 1: AskForecast (Lead Showcase) */}
        <div className="minimal-surface p-6 sm:p-10 mb-10 bg-[#111114]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-mono text-zinc-400">
                <span className="text-zinc-300 font-medium">Imperial Master's Project</span>
                <span className="text-zinc-600">/</span>
                <span>Oral Presentation at ISF Montreal 2026</span>
              </div>

              <div className="mb-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  AskForecast
                </h3>
                <p className="text-base sm:text-lg text-zinc-200 mt-1 leading-snug font-medium">
                  Democratising time-series forecasting via autonomous agentic AI — interactive web app.
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
                An interactive web application where users upload datasets and describe forecasting goals in natural language to receive automated, calibrated probabilistic predictions with generative reasoning reports.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-300 mb-8 border-l border-white/[0.1] pl-4">
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">ISF Montreal 2026 Plenary Presentation:</strong> Selected to deliver a 20-minute oral presentation sharing advanced forecasting AI research at the 44th International Symposium on Forecasting.
                </div>
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">Autonomous Agentic Workflow:</strong> Embedded AI agent parses natural language, orchestrates statistical ensembles, calculates prediction intervals, and synthesises diagnostic reports.
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://askforecast.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200"
                >
                  <Browsers size={14} weight="bold" />
                  <span>Launch askforecast.app</span>
                  <ArrowUpRight size={12} weight="bold" />
                </a>

                <div className="flex flex-wrap gap-1.5">
                  <span className="tech-pill">Agentic AI</span>
                  <span className="tech-pill">Python</span>
                  <span className="tech-pill">FastAPI</span>
                  <span className="tech-pill">Vue 3</span>
                  <span className="tech-pill">Gemini API</span>
                </div>
              </div>
            </div>

            {/* UI Screenshot Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-white/[0.1] bg-[#0a0a0c]">
                <a
                  href="https://askforecast.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group p-4 sm:p-6"
                >
                  <img 
                    src="/projects/askforecast_ui.png" 
                    alt="AskForecast Web App Interface" 
                    className="w-full h-auto object-contain group-hover:scale-[1.01] transition duration-200"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </a>
                <div className="p-3 bg-[#0e0e11] border-t border-white/[0.08] text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                  <span>Interactive Forecast Dashboard & Confidence Intervals</span>
                  <a
                    href="https://askforecast.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-white flex items-center gap-1 font-medium"
                  >
                    <span>askforecast.app</span>
                    <ArrowUpRight size={11} weight="bold" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Project 2: Yarn Health (Spotlight with Phone Mockup) */}
        <div className="minimal-surface p-6 sm:p-10 mb-10 bg-[#111114]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Phone Mockup Visual */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="max-w-[260px] sm:max-w-[300px] rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0a0a0c]">
                <a
                  href="https://yarn.health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <img 
                    src="/projects/yarn_mockup.webp" 
                    alt="Yarn Health App Mockup" 
                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition duration-200"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </a>
                <div className="p-2.5 bg-[#0e0e11] border-t border-white/[0.08] text-[11px] font-mono text-zinc-400 flex items-center justify-between px-3">
                  <span>Voice Diary & Clinical Synthesis</span>
                  <a
                    href="https://yarn.health"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-white flex items-center gap-1 font-medium"
                  >
                    <span>yarn.health</span>
                    <ArrowUpRight size={11} weight="bold" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-mono text-zinc-400">
                <span className="text-zinc-300 font-medium">Conversational Mobile App Health Companion</span>
                <span className="text-zinc-600">/</span>
                <span>15 Real Clinical Users</span>
              </div>

              <div className="mb-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Yarn Health
                </h3>
                <p className="text-base sm:text-lg text-zinc-200 mt-1 leading-snug font-medium">
                  A smart voice & text diary helping chronic patients capture symptoms and prepare for doctor visits.
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
                A conversational mobile app and health journal that helps patients capture and structure complex symptoms between clinical appointments via voice and text, producing structured clinical summaries for doctors.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-300 mb-8 border-l border-white/[0.1] pl-4">
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">Validated in Clinical Testing:</strong> Completed user trials with 15 patients navigating complex chronic health journeys to refine voice interaction latency and summary accuracy.
                </div>
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">Dual-Model Agentic Architecture:</strong> Real-time streaming voice transcription via Whisper for fluid conversational check-ins, coupled with a deep reasoning agent for longitudinal symptom synthesis.
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://yarn.health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200"
                >
                  <Browsers size={14} weight="bold" />
                  <span>Visit yarn.health</span>
                  <ArrowUpRight size={12} weight="bold" />
                </a>

                <div className="flex flex-wrap gap-1.5">
                  <span className="tech-pill">Agentic AI</span>
                  <span className="tech-pill">Flutter</span>
                  <span className="tech-pill">Dart</span>
                  <span className="tech-pill">Nuxt UI</span>
                  <span className="tech-pill">Whisper</span>
                  <span className="tech-pill">Vector Search</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2-Column Split: Systems Engineering at Tewke Ltd. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Project 3: Mobile & Embedded Hardware Systems (Tewke Ltd.) */}
          <div className="minimal-surface p-6 sm:p-8 bg-[#111114] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 text-xs font-mono text-zinc-400">
                <span className="text-zinc-300 font-medium">Mobile & Embedded Hardware</span>
                <span>Tewke Ltd.</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                User-Centred Mobile Apps & Embedded Touchscreen UI
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Designing and shipping cross-platform mobile apps and touch-screen embedded device interfaces centered entirely on <strong>Flutter and Dart</strong>.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-300 mb-6 border-l border-white/[0.1] pl-4">
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">Unified Flutter Architecture:</strong> Responsive mobile experiences across iOS and Android alongside dedicated touchscreen embedded hardware controls from a single codebase.
                </div>
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">Local Hardware Telemetry:</strong> Engineered local networking and real-time device synchronisation for fluid, zero-latency smart-home automation.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
              <span className="tech-pill">Flutter</span>
              <span className="tech-pill">Dart</span>
              <span className="tech-pill">iOS & Android</span>
              <span className="tech-pill">Embedded Touchscreen</span>
              <span className="tech-pill">Device Telemetry</span>
            </div>
          </div>

          {/* Project 4: Internal Operations & Admin Tooling */}
          <div className="minimal-surface p-6 sm:p-8 bg-[#111114] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 text-xs font-mono text-zinc-400">
                <span className="text-zinc-300 font-medium">Internal Operations & Scaling Tooling</span>
                <span>1,000+ Devices</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                Manufacturing & Operations Software for Scaling Hardware
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Architecting custom full-stack operations software and automated quality control to streamline hardware assembly and facilitate production scaling.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-300 mb-6 border-l border-white/[0.1] pl-4">
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">Supported 1,000+ Production Devices:</strong> Core internal system at Tewke Ltd. managing multi-device production tracking, parts deduction, and automated device provisioning.
                </div>
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">Camera Quality Control:</strong> Integrated photo validation at critical assembly stages to isolate build defects immediately and ensure rigorous manufacturing auditability.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
              <span className="tech-pill">TypeScript</span>
              <span className="tech-pill">Vue.js</span>
              <span className="tech-pill">Express</span>
              <span className="tech-pill">PostgreSQL</span>
              <span className="tech-pill">Drizzle ORM</span>
              <span className="tech-pill">Docker</span>
            </div>
          </div>

        </div>

        {/* Imperial Design Engineering Archive */}
        <div className="minimal-surface p-6 bg-[#0e0e11]">
          <button
            onClick={() => setShowArchive(!showArchive)}
            className="w-full flex items-center justify-between text-left focus:outline-none"
          >
            <div>
              <div className="text-sm font-semibold text-zinc-200">
                Imperial College Physical Computing & Engineering Archive
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Robotics, embedded microcontrollers, and fluid dynamics simulations built at Imperial.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition">
              <span>{showArchive ? 'Hide' : 'Expand (4 projects)'}</span>
              {showArchive ? <CaretUp size={14} /> : <CaretDown size={14} />}
            </div>
          </button>

          {showArchive && (
            <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {archive.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-[#141417] border border-white/[0.06] hover:border-white/[0.15] transition flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-semibold text-zinc-200 mt-1 mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-normal">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition">
                    <span>Documentation</span>
                    <ArrowUpRight size={12} />
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

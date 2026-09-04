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
            Selected Work & Systems
          </h2>
          <p className="text-base text-zinc-300 max-w-[65ch] leading-relaxed">
            Each project starts with an ambiguous or complex problem and requires working across engineering, design, and AI to build something people can actually use.
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
                  Making complex statistical forecasting accessible through an AI-driven, natural-language workflow.
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
                Time-series forecasting is technically demanding and largely inaccessible to non-specialists. I designed and built AskForecast to turn plain-language questions and raw uploaded datasets into structured forecasting problems—interpreting the request, automatically selecting and running appropriate statistical forecasting models, and presenting forecasts with prediction intervals and explanations.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-300 mb-8 border-l border-white/[0.1] pl-4">
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">Automated Model Selection & Pipeline:</strong> Built an LLM workflow that interprets natural-language forecasting requests, structures the problem, automatically selects and executes statistical forecasting models, and calculates prediction intervals.
                </div>
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">ISF Montreal 2026 Presentation:</strong> Selected for a 20-minute oral presentation at the 44th International Symposium on Forecasting, demonstrating how product design and AI interfaces can democratise technical forecasting workflows.
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
                  <span className="tech-pill">LLM Workflows</span>
                  <span className="tech-pill">Time-Series</span>
                  <span className="tech-pill">Model Selection</span>
                  <span className="tech-pill">Python</span>
                  <span className="tech-pill">FastAPI</span>
                  <span className="tech-pill">Vue 3</span>
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
                  <span>Voice Journal & Synthesis</span>
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
                <span className="text-zinc-300 font-medium">Digital Health Product</span>
                <span className="text-zinc-600">/</span>
                <span>15 User Test Participants</span>
              </div>

              <div className="mb-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Yarn Health
                </h3>
                <p className="text-base sm:text-lg text-zinc-200 mt-1 leading-snug font-medium">
                  Turning everyday conversations and voice notes into structured summaries for chronic illness.
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
                People living with long-term conditions often struggle to track and communicate symptoms between appointments. Rather than building a conventional tracking form, I developed a voice-first mobile journal that lets users speak naturally about their day, using AI to turn conversational voice notes into structured summaries that support more productive consultations.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-300 mb-8 border-l border-white/[0.1] pl-4">
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">Streaming Voice Transcription & Extraction:</strong> Implemented low-latency speech transcription with OpenAI Whisper alongside an extraction pipeline that organises longitudinal symptom trends without burdening the user.
                </div>
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">Tested with 15 Participants:</strong> Completed user testing with 15 people managing long-term conditions to refine conversational speech latency and ensure summary clarity for medical consultations.
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
                  <span className="tech-pill">Flutter</span>
                  <span className="tech-pill">Dart</span>
                  <span className="tech-pill">Voice AI</span>
                  <span className="tech-pill">Whisper</span>
                  <span className="tech-pill">Mobile UX</span>
                  <span className="tech-pill">Health Data</span>
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
                <span className="text-zinc-300 font-medium">Hardware-Connected Software</span>
                <span>Tewke Ltd.</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Smart-Home Mobile Apps & Embedded Touchscreen Interfaces
              </h3>
              <p className="text-sm font-medium text-zinc-300 mb-4">
                Bridging physical smart-home hardware and daily user interaction.
              </p>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                At Tewke, I work across the boundary between software and physical products. I designed and shipped cross-platform mobile applications and on-device touchscreen interfaces, giving users direct, real-time control over their physical environment.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-300 mb-6 border-l border-white/[0.1] pl-4">
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">Unified Multi-Platform Architecture:</strong> Built a unified Flutter application running across iOS, Android, and embedded touchscreen hardware, coordinating local network telemetry with device state synchronization.
                </div>
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">Shipped to Real Users:</strong> Owned interface features end-to-end—from initial interaction design through user testing to production deployment on commercial smart-home hardware.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
              <span className="tech-pill">Flutter</span>
              <span className="tech-pill">Dart</span>
              <span className="tech-pill">iOS & Android</span>
              <span className="tech-pill">Embedded Linux</span>
              <span className="tech-pill">Device Telemetry</span>
            </div>
          </div>

          {/* Project 4: Internal Operations & Admin Tooling */}
          <div className="minimal-surface p-6 sm:p-8 bg-[#111114] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 text-xs font-mono text-zinc-400">
                <span className="text-zinc-300 font-medium">Internal Operations & Tooling</span>
                <span>1,000+ Devices</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Software for Manufacturing Operations
              </h3>
              <p className="text-sm font-medium text-zinc-300 mb-4">
                Full-stack operations software to scale physical hardware assembly.
              </p>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Scaling physical hardware requires reliable operational systems. I built the full-stack internal platform that orchestrates assembly tracking, inventory deduction, and device provisioning across our manufacturing line.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-300 mb-6 border-l border-white/[0.1] pl-4">
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">Automated Inspection & Workflow Engine:</strong> Built custom camera-assisted quality checks at assembly checkpoints to catch build defects early, integrated with relational schema tracking component lifecycles.
                </div>
                <div className="leading-relaxed">
                  <strong className="text-white font-medium">Used in Production Workflow for 1,000+ Devices:</strong> Active core platform at Tewke Ltd., replacing previously manual tracking steps with automated inventory deduction and quality-control workflows.
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

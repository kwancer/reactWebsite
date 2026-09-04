import React from 'react';
import { 
  ArrowUpRight, 
  Brain, 
  Code, 
  Compass, 
  DeviceMobile, 
  Lightning, 
  UsersThree, 
  RocketLaunch 
} from '@phosphor-icons/react';

export default function HowIWork() {
  const capabilities = [
    {
      icon: Brain,
      title: 'AI & Intelligent Workflows',
      description:
        'Building AI-driven applications and pipelines that interpret requests, structure messy data, and automate multi-step analytical workflows.',
      tags: ['LLM Workflows', 'Voice AI (Whisper)', 'Time-Series Models', 'Vector Search'],
    },
    {
      icon: Code,
      title: 'Full-Stack Web & Operations Systems',
      description:
        'Engineering fast, reliable web applications and internal tooling in TypeScript, Vue 3, and Python, backed by clean PostgreSQL schemas and Docker environments.',
      tags: ['TypeScript', 'Vue 3', 'Python / FastAPI', 'PostgreSQL', 'Docker'],
    },
    {
      icon: DeviceMobile,
      title: 'Mobile Apps & Hardware Integration',
      description:
        'Developing cross-platform apps in Flutter & Dart alongside embedded touchscreen interfaces and local device telemetry.',
      tags: ['Flutter', 'Dart', 'iOS & Android', 'Embedded Hardware', 'IoT Telemetry'],
    },
  ];

  return (
    <section id="approach" className="py-24 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3">
            How I Work
          </h2>
          <p className="text-base text-zinc-300 max-w-[65ch] leading-relaxed">
            I work from the problem outward rather than from a predefined discipline inward. AI expands my execution range, while engineering discipline and problem definition lead the way.
          </p>
        </div>

        {/* Lead Focus: Turning Ambiguity into Working Systems */}
        <div className="minimal-surface p-8 sm:p-10 mb-10 bg-[#111114]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7">
              <div className="text-xs font-mono text-zinc-400 mb-3">
                <span className="text-zinc-300 font-medium">Ways of Working</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Turning Ambiguity into Working Systems
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                I enjoy problems where the path isn’t obvious yet. The projects I find most interesting usually start with a vague question and require figuring out what needs to exist before building it.
              </p>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
                Rather than starting with a narrow technology, I look at what the problem demands—whether that means software, AI models, physical hardware, or operational workflows. AI has made it easier to move between disciplines and iterate across a wider range of technical problems. I use that leverage to move ideas from early concepts to things people can actually use.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-400 border-l border-white/[0.1] pl-4">
                <div>
                  <strong className="text-white font-medium">Problem-Led Execution:</strong> Grounded in what actually needs to exist, moving quickly from early ambiguity to functional software and systems.
                </div>
                <div>
                  <strong className="text-white font-medium">Production Discipline:</strong> Writing clear, maintainable code across TypeScript, Vue, Flutter, and Python that performs reliably in real-world use.
                </div>
              </div>
            </div>

            {/* Core Tenets */}
            <div className="lg:col-span-5 rounded-xl bg-[#0a0a0c] border border-white/[0.08] p-6 text-xs font-mono">
              <div className="text-[11px] uppercase tracking-wider text-zinc-400 mb-4 font-semibold">
                Core Tenets
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded bg-zinc-900/60 border border-white/[0.05]">
                  <span className="font-sans font-semibold text-white block text-sm mb-0.5">1. Polished, User-First Experience</span>
                  <p className="font-sans text-xs text-zinc-400">Thoughtfully designed interfaces that feel natural, respond instantly, and build immediate user trust.</p>
                </div>

                <div className="p-3.5 rounded bg-zinc-900/60 border border-white/[0.05]">
                  <span className="font-sans font-semibold text-white block text-sm mb-0.5">2. Working, Reliable Systems</span>
                  <p className="font-sans text-xs text-zinc-400">Software designed to be used beyond the prototype stage, with maintainable code, reliable data flows, and attention to how it behaves in real-world use.</p>
                </div>

                <div className="p-3.5 rounded bg-zinc-900/60 border border-white/[0.05]">
                  <span className="font-sans font-semibold text-white block text-sm mb-0.5">3. Broad Execution with AI Leverage</span>
                  <p className="font-sans text-xs text-zinc-400">Using AI as leverage to prototype faster, bridge disciplines, and move from concept to working systems.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Supporting Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={index}
                className="minimal-surface p-6 sm:p-7 bg-[#111114] flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-200 mb-4">
                    <Icon size={18} weight="bold" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {cap.tags.map((tag) => (
                    <span key={tag} className="tech-pill text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action card */}
        <div className="minimal-surface p-6 sm:p-8 bg-[#0e0e11] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-zinc-100 mb-1">
              Always up for a coffee.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              If you're in London and thinking through an ambiguous challenge or an early-stage idea, let's grab a coffee. Also down for a virtual coffee if remote—let's have a chat.
            </p>
          </div>
          <a
            href="mailto:krzysztofwancerski@gmail.com?subject=Coffee%20Chat"
            className="btn-press shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-md text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200"
          >
            <span>Say Hello</span>
            <ArrowUpRight size={13} weight="bold" />
          </a>
        </div>

      </div>
    </section>
  );
}

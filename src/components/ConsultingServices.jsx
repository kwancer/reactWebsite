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

export default function ConsultingServices() {
  const capabilities = [
    {
      icon: Brain,
      title: 'Agentic & Multi-Modal AI',
      description:
        'Architecting autonomous AI agents, real-time voice streaming with Whisper, and deep reasoning models for complex document and clinical synthesis.',
      tags: ['Agentic AI', 'Voice AI', 'LLM Chains', 'Vector Search'],
    },
    {
      icon: Code,
      title: 'Full-Stack Web & Backend',
      description:
        'Engineering fast, scalable applications in TypeScript, Vue 3, and Express, backed by clean PostgreSQL schemas and containerised Docker environments.',
      tags: ['TypeScript', 'Vue 3', 'PostgreSQL', 'Express', 'Docker'],
    },
    {
      icon: DeviceMobile,
      title: 'Mobile & Embedded UI',
      description:
        'Delivering high-performance cross-platform mobile apps for iOS and Android alongside responsive touchscreen hardware interfaces in Flutter & Dart.',
      tags: ['Flutter', 'Dart', 'iOS & Android', 'Embedded Hardware'],
    },
  ];

  return (
    <section id="services" className="py-24 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3">
            Consulting & Product Engineering
          </h2>
          <p className="text-base text-zinc-300 max-w-[65ch] leading-relaxed">
            Partnering directly with founders and teams to turn ideas into successful, beautiful products with production-ready code that works and scales.
          </p>
        </div>

        {/* Lead Focus: Delivering Successful Products */}
        <div className="minimal-surface p-8 sm:p-10 mb-10 bg-[#111114]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7">
              <div className="text-xs font-mono text-zinc-400 mb-3">
                <span className="text-zinc-300 font-medium">Product Execution & Engineering</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                From Undefined Idea to a Shipped, Successful Product
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                Whether you have an early-stage concept, an evolving business requirement, or an ambitious product vision, I take ownership from day one. You get software that looks beautiful, feels intuitive to users, and is engineered with rock-solid, production-ready code that actually works and scales.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-400 border-l border-white/[0.1] pl-4">
                <div>
                  <strong className="text-white font-medium">Focus on Product Success:</strong> Building what actually matters for your users and your business, moving quickly from first concepts to working software that drives results.
                </div>
                <div>
                  <strong className="text-white font-medium">Production-Grade & Scalable:</strong> Writing clean, robust code across TypeScript, Vue, and Flutter that works reliably in production and scales effortlessly as your company grows.
                </div>
              </div>
            </div>

            {/* What I Deliver */}
            <div className="lg:col-span-5 rounded-xl bg-[#0a0a0c] border border-white/[0.08] p-6 text-xs font-mono">
              <div className="text-[11px] uppercase tracking-wider text-zinc-400 mb-4 font-semibold">
                What I Deliver
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded bg-zinc-900/60 border border-white/[0.05]">
                  <span className="font-sans font-semibold text-white block text-sm mb-0.5">1. Beautiful, Polish-First UX</span>
                  <p className="font-sans text-xs text-zinc-400">Thoughtfully designed interfaces that look premium, feel responsive, and build immediate user trust.</p>
                </div>

                <div className="p-3.5 rounded bg-zinc-900/60 border border-white/[0.05]">
                  <span className="font-sans font-semibold text-white block text-sm mb-0.5">2. Working, Production-Ready Code</span>
                  <p className="font-sans text-xs text-zinc-400">Software built to work in the real world from day one, backed by scalable architecture and clean code.</p>
                </div>

                <div className="p-3.5 rounded bg-zinc-900/60 border border-white/[0.05]">
                  <span className="font-sans font-semibold text-white block text-sm mb-0.5">3. Fast, Collaborative Execution</span>
                  <p className="font-sans text-xs text-zinc-400">Direct partnership with zero bureaucratic bloat, shipping high-quality software into hands quickly.</p>
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
              Have a product vision or need rapid technical execution?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Let's talk through your vision, product requirements, or prototype scope.
            </p>
          </div>
          <a
            href="mailto:krzysztofwancerski@gmail.com?subject=Product%20Engineering%20Enquiry"
            className="btn-press shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-md text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200"
          >
            <span>Discuss Your Product</span>
            <ArrowUpRight size={13} weight="bold" />
          </a>
        </div>

      </div>
    </section>
  );
}

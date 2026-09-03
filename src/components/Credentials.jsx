import React from 'react';
import { 
  Trophy, 
  ArrowUpRight 
} from '@phosphor-icons/react';

export default function Credentials() {
  const awards = [
    {
      title: "Dean’s List (All 4 Consecutive Years)",
      org: "Imperial College London, Faculty of Engineering",
      url: "https://www.imperial.ac.uk/engineering/study/undergraduate/prizes/",
      linkLabel: "Official Faculty Prizes Page",
      badge: "Top 10% Cohort • All 4 Years",
      detail:
        "Awarded every single academic year of university at Imperial College London (#2 university globally in QS World Rankings). The Dean’s List recognises undergraduate engineers in the top 10% of their cohort who achieved a continuous first-class standard (70%+) across all four years."
    },
    {
      title: "IET Future Talent Award",
      org: "Institution of Engineering and Technology",
      url: "https://www.theiet.org/impact-society/awards-scholarships/future-talent-awards/",
      linkLabel: "IET Future Talent Scheme",
      badge: "National Engineering Scholarship",
      detail:
        "Prestigious national engineering scholarship and multi-year bursary supported by the David Family Foundation, awarded to exceptional engineering students recognised for outstanding academic promise, technical innovation, and future engineering leadership."
    }
  ];

  const skillGroups = [
    {
      title: "Languages",
      items: ["TypeScript", "Python", "Dart", "JavaScript", "Vue.js", "C++", "SQL", "Bash"]
    },
    {
      title: "Frameworks & AI",
      items: ["Vue 3 / Nuxt", "Flutter (BLoC)", "FastAPI", "Express", "Drizzle ORM", "React"]
    },
    {
      title: "Systems & Infrastructure",
      items: ["PostgreSQL", "Docker", "Supabase", "Linux CLI", "Git & GitLab", "CI/CD"]
    }
  ];

  return (
    <section id="credentials" className="py-24 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3">
            Academic Honours & Technical Stack
          </h2>
          <p className="text-base text-zinc-300 max-w-[65ch] leading-relaxed">
            Imperial College London academic distinctions and production technologies leveraged across engineering engagements.
          </p>
        </div>

        {/* 2 Focused Prestige Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="minimal-surface p-7 sm:p-8 bg-[#111114] flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-zinc-400">
                    {award.org}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-white/10 font-medium">
                    {award.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                  {award.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {award.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-500">Distinction Record</span>
                <a
                  href={award.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press inline-flex items-center gap-1.5 font-medium text-zinc-200 hover:text-white"
                >
                  <span>{award.linkLabel}</span>
                  <ArrowUpRight size={12} weight="bold" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Stack Grid */}
        <div className="minimal-surface p-7 sm:p-8 bg-[#0e0e11]">
          <div className="text-xs font-mono text-zinc-400 mb-6 pb-3 border-b border-white/[0.08]">
            <span className="text-zinc-300 font-medium">Production Technical Capabilities</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {skillGroups.map((group, idx) => (
              <div key={idx}>
                <div className="text-xs font-mono text-zinc-300 mb-3 font-semibold">
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span key={skill} className="tech-pill text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

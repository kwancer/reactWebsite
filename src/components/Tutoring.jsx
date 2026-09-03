import React from 'react';
import { 
  GraduationCap, 
  Monitor, 
  Target, 
  MapPin, 
  EnvelopeSimple, 
  ArrowUpRight, 
  Check, 
  Trophy 
} from '@phosphor-icons/react';

export default function Tutoring({ isSubdomain = false }) {
  const testimonials = [
    {
      subject: "BTEC Engineering",
      author: "Parent Testimonial",
      quote:
        "I highly recommend Krzysztof as a math tutor. He supported my 17-year-old son in preparing for his engineering college exams with exceptional dedication and expertise. Krzysztof was highly organised, using a clear and structured approach to each lesson. He managed to encourage and motivate my son throughout their sessions. His explanations were clear, and he provided thorough instructions, along with additional materials for independent study between lessons. Krzysztof also supplied previous exam papers, which were invaluable. Although the results are not yet released, I am confident that his efforts and techniques have had a very positive impact on my son's performance.",
    },
    {
      subject: "GCSE Physics",
      author: "Parent Testimonial",
      quote:
        "Krzysztof is a fantastic tutor. He clicks with my boys and gets them to problem-solve and think for themselves: very good teacher!",
    },
    {
      subject: "A-level Maths",
      author: "Student Testimonial",
      quote:
        "Krzysztof is a brilliant tutor. He helped me to improve my grades in Maths, and I am very grateful for his help.",
    },
  ];

  return (
    <div id="overview" className="bg-[#0a0a0c] text-zinc-100 min-h-[100dvh]">
      
      {/* Editorial Prospectus Hero */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Proposition & Bio (col-span-7) */}
            <div className="lg:col-span-7">
              
              {/* Context Meta */}
              <div className="text-xs font-mono text-zinc-400 mb-6">
                <span>West London & Online</span>
                <span className="text-zinc-600 mx-2">/</span>
                <span className="text-zinc-300">Elite 1:1 STEM Academic Tuition</span>
              </div>

              {/* Title + Headshot */}
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
                  <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-semibold text-white tracking-tightest leading-[1.08]">
                    GCSE & A-level Tutoring
                  </h1>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1.5">
                    Krzysztof (Kris) Wancerski <span className="text-zinc-600">/</span> Mathematics, Physics & Computer Science
                  </p>
                </div>
              </div>

              {/* Verbatim Intro */}
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal mb-8 max-w-[55ch]">
                I offer <strong>1:1 tutoring</strong> for GCSE and A-level students in <strong>Maths, Physics, and Computer Science</strong>. I have experience tutoring students of all abilities, from those who are struggling to those who are aiming for top grades. I am also able to offer support with university applications, including personal statement writing and interview preparation.
              </p>

              {/* Disciplined CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#enquire"
                  className="btn-press inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200"
                >
                  <span>Enquire for Tuition</span>
                  <ArrowUpRight size={13} weight="bold" />
                </a>

                <a
                  href="#methodology"
                  className="btn-press inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-medium bg-zinc-900 text-zinc-300 hover:text-white border border-white/10"
                >
                  <span>Way of Working</span>
                </a>

                <a
                  href="#testimonials"
                  className="btn-press inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-medium text-zinc-400 hover:text-zinc-200"
                >
                  <span>Testimonials</span>
                </a>
              </div>
            </div>

            {/* Right Column: Academic Distinction Summary (col-span-5) */}
            <div className="lg:col-span-5 minimal-surface p-6 sm:p-8 bg-[#111114]">
              
              <div className="pb-4 mb-5 border-b border-white/[0.08]">
                <img 
                  src="/imperial_white.png" 
                  alt="Imperial College London" 
                  className="h-7 sm:h-8 w-auto object-contain mb-3 opacity-95"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="text-base font-bold text-white tracking-tight">
                  Imperial College London
                </div>
                <div className="text-xs font-mono text-zinc-400 mt-0.5">
                  Master of Engineering (MEng), Design Engineering
                </div>
              </div>

              {/* Distinction Items */}
              <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
                <div className="border-l border-white/[0.1] pl-3.5">
                  <strong className="text-white font-medium block">Ranked #2 Globally:</strong>
                  <span className="text-zinc-400 text-xs">First Class trajectory from Imperial College London (QS World Rankings).</span>
                </div>

                <div className="border-l border-white/[0.1] pl-3.5">
                  <strong className="text-white font-medium block">Dean’s List Distinction (All 4 Years):</strong>
                  <span className="text-zinc-400 text-xs">Recognised in the top 10% of engineering cohort for four consecutive years.</span>
                </div>

                <div className="border-l border-white/[0.1] pl-3.5">
                  <strong className="text-white font-medium block">A*A*A*A* at A-Levels:</strong>
                  <span className="text-zinc-400 text-xs">Perfect top grades in Mathematics, Physics, Computer Science, and Design & Technology.</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Methodology / Way of Working */}
      <section id="methodology" className="py-24 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3">
              My Way of Working
            </h2>
            <p className="text-base text-zinc-300 max-w-[65ch] leading-relaxed">
              A disciplined, individualised teaching setup focused on problem-solving intuition, step-by-step mathematical rigour, and examination technique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="minimal-surface p-7 sm:p-8 bg-[#111114]">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-5 text-zinc-200">
                <Monitor size={18} weight="bold" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                Google Meet & Miro
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Online sessions are delivered via <strong>Google Meet</strong> and an interactive <strong>Miro digital whiteboard</strong>. Students experience real-time mathematical derivations, dynamic physics problem sketches, and live code reviews, with all session boards saved permanently for revision between lessons.
              </p>
            </div>

            <div className="minimal-surface p-7 sm:p-8 bg-[#111114]">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-5 text-zinc-200">
                <Target size={18} weight="bold" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                Focus on Top Grades (A & A*)
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                I exclusively focus on <strong>1:1 lessons for students aiming for top grades (A & A*)</strong> across <strong>Edexcel, AQA, OCR, and Cambridge (CIE)</strong>. Lessons move rapidly past rote memorisation to tackle non-routine problems, past-paper analysis, and university entrance interview preparation.
              </p>
            </div>

            <div className="minimal-surface p-7 sm:p-8 bg-[#111114]">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-5 text-zinc-200">
                <MapPin size={18} weight="bold" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                West London & Online
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                I offer in-person lessons across <strong>West London</strong> (including Kensington, Chelsea, Fulham, and Chiswick) and <strong>predominantly online</strong> for students across the UK and internationally via interactive digital whiteboards.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Qualifications & Experience */}
      <section id="qualifications" className="py-24 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="minimal-surface p-8 sm:p-9 bg-[#111114]">
              <div className="text-xs font-mono text-zinc-400 mb-2">
                <span className="text-zinc-300 font-medium">Academic Trajectory</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                Qualifications
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                I hold a <strong>Master of Engineering (MEng)</strong> from <strong>Imperial College London</strong>, studying Design Engineering. Imperial College London is ranked <strong>#2 in the world</strong> according to the QS World University Rankings.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                I achieved <strong>A*A*A*A*</strong> in my A-levels in Maths, Physics, Computer Science, Design and Technology. I have experience tutoring students in these subjects, and have helped students to achieve top grades in their exams.
              </p>
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                <span className="tech-pill">Imperial College London MEng</span>
                <span className="tech-pill">#2 in World (QS)</span>
                <span className="tech-pill">4x A* A-Levels</span>
                <span className="tech-pill">4-Year Dean's List</span>
              </div>
            </div>

            <div className="minimal-surface p-8 sm:p-9 bg-[#111114]">
              <div className="text-xs font-mono text-zinc-400 mb-2">
                <span className="text-zinc-300 font-medium">Mentorship Track Record</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                Experience
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                I have been tutoring students for <strong>over 4 years</strong>, and have helped students to achieve top grades in their exams.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                I have experience tutoring students of all abilities, from those who are struggling to those who are aiming for top grades. I have also helped students with university applications, including personal statement writing and interview preparation.
              </p>
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                <span className="tech-pill">4+ Years Tutoring</span>
                <span className="tech-pill">Top Grade Focus (A & A*)</span>
                <span className="tech-pill">Personal Statements & Interviews</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Testimonials (Editorial Quotations) */}
      <section id="testimonials" className="py-24 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3">
              Client & Student Feedback
            </h2>
            <p className="text-base text-zinc-300 max-w-[65ch] leading-relaxed">
              Verbatim reviews from parents and students reflecting lesson organisation, structured homework, and grade improvements.
            </p>
          </div>

          <div className="space-y-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="minimal-surface p-7 sm:p-9 bg-[#111114]"
              >
                <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-white/[0.06]">
                  <span className="text-xs font-mono text-zinc-300 font-medium">
                    {t.subject}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {t.author}
                  </span>
                </div>

                <blockquote className="font-serif text-base sm:text-lg text-zinc-200 leading-relaxed italic">
                  "{t.quote}"
                </blockquote>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Enquire & Booking Section (Email only) */}
      <section id="enquire" className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          
          <div className="minimal-surface p-8 sm:p-12 bg-[#111114]">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Enquire for Academic Tuition
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 max-w-xl mx-auto">
              If you are interested in tutoring, please get in touch by sending me an email at{' '}
              <a
                href="mailto:krzysztofwancerski@gmail.com?subject=Tutoring%20Enquiry%20-%20Maths/Physics/CS"
                className="text-white font-medium underline underline-offset-4 hover:text-zinc-300"
              >
                krzysztofwancerski@gmail.com
              </a>
              . Please include the student’s current academic year, subjects of interest, exam board, and specific grade targets.
            </p>

            <div className="flex justify-center">
              <a
                href="mailto:krzysztofwancerski@gmail.com?subject=Tutoring%20Enquiry%20-%20Maths/Physics/CS"
                className="btn-press inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-xs sm:text-sm font-semibold bg-white text-zinc-950 hover:bg-zinc-200"
              >
                <EnvelopeSimple size={16} weight="bold" />
                <span>Send Tuition Enquiry</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs font-mono text-zinc-400 flex flex-wrap items-center justify-center gap-4">
              <span>West London & Online</span>
              <span className="text-zinc-600">•</span>
              <span>Google Meet & Miro Whiteboard</span>
              <span className="text-zinc-600">•</span>
              <span>1:1 High-Achiever Focus</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

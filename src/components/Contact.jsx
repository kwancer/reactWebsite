import React, { useState } from 'react';
import { 
  EnvelopeSimple, 
  LinkedinLogo, 
  MapPin, 
  Copy, 
  Check, 
  ArrowUpRight 
} from '@phosphor-icons/react';

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3">
            Get in Touch
          </h2>
          <p className="text-base text-zinc-300 max-w-[65ch] leading-relaxed">
            Direct channels for technical consulting enquiries, software architecture discussions, or academic tutoring bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Primary Email */}
          <div className="minimal-surface p-7 sm:p-8 bg-[#111114] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-400 mb-2">
                <span className="text-zinc-300 font-medium">Direct Email</span>
              </div>
              <div className="text-lg sm:text-xl font-semibold text-white mb-2 break-all">
                krzysztofwancerski@gmail.com
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Direct inbox for technical consulting, software engineering projects, and academic tutoring enquiries.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <button
                onClick={() => copyToClipboard('krzysztofwancerski@gmail.com', 'personal')}
                className="btn-press flex items-center gap-1.5 text-zinc-300 hover:text-white"
              >
                {copiedKey === 'personal' ? (
                  <>
                    <Check size={14} weight="bold" className="text-zinc-200" />
                    <span className="text-zinc-200">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy email</span>
                  </>
                )}
              </button>

              <a
                href="mailto:krzysztofwancerski@gmail.com"
                className="btn-press flex items-center gap-1 text-zinc-200 hover:text-white font-medium"
              >
                <span>Compose email</span>
                <ArrowUpRight size={12} weight="bold" />
              </a>
            </div>
          </div>

          {/* LinkedIn & Location */}
          <div className="minimal-surface p-7 sm:p-8 bg-[#111114] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-400 mb-2">
                <span className="text-zinc-300 font-medium">Professional Network & Location</span>
              </div>
              <div className="mt-3">
                <a
                  href="https://www.linkedin.com/in/kwancerski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press flex items-center justify-between p-3.5 rounded-lg bg-zinc-900 border border-white/[0.08] hover:border-white/[0.18] text-zinc-200 hover:text-white"
                >
                  <span className="flex items-center gap-2.5 font-medium text-sm">
                    <LinkedinLogo size={18} weight="bold" className="text-zinc-300" />
                    <span>LinkedIn Profile (kwancerski)</span>
                  </span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
              <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                Based in West London, UK. Available for select in-person engineering discussions across London and remote collaboration worldwide.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                <span>London, UK (West London)</span>
              </span>
              <span className="text-zinc-500">GMT (UTC+1)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight, LinkedinLogo } from '@phosphor-icons/react';

// Exact timestamp: Thursday, September 3rd, 2026, at 11:30 PM (London BST, UTC+1)
const LAST_UPDATED_EPOCH = new Date('2026-09-03T23:30:00+01:00').getTime();

export default function Footer() {
  const [elapsed, setElapsed] = useState('');

  useEffect(() => {
    const computeElapsed = () => {
      const now = Date.now();
      const diffSeconds = Math.floor((now - LAST_UPDATED_EPOCH) / 1000);

      if (diffSeconds < 0) {
        setElapsed('just now');
        return;
      }

      const days = Math.floor(diffSeconds / 86400);
      const hours = Math.floor((diffSeconds % 86400) / 3600);
      const minutes = Math.floor((diffSeconds % 3600) / 60);
      const seconds = diffSeconds % 60;

      const parts = [];
      if (days > 0) parts.push(`${days}d`);
      if (hours > 0 || days > 0) parts.push(`${hours}h`);
      parts.push(`${minutes}m`);
      parts.push(`${seconds}s`);

      setElapsed(`${parts.join(' ')} ago`);
    };

    computeElapsed();
    const interval = setInterval(computeElapsed, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#0a0a0c] py-12 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          
          <div className="font-mono text-xs text-zinc-500">
            <div className="text-zinc-400">
              Last updated September 2026
            </div>
            <p className="mt-1 flex items-center gap-1.5 text-zinc-500">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
              <span>{elapsed || 'calculating...'}</span>
            </p>
          </div>

          <div className="flex items-center gap-5 font-mono text-xs text-zinc-400">
            <a
              href="https://www.linkedin.com/in/kwancerski/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press flex items-center gap-1.5 hover:text-zinc-100 transition"
            >
              <LinkedinLogo size={14} weight="bold" className="text-zinc-400" />
              <span>LinkedIn</span>
              <ArrowUpRight size={11} weight="bold" />
            </a>

            <button
              onClick={scrollToTop}
              className="btn-press p-1.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10"
              aria-label="Back to top"
            >
              <ArrowUp size={14} weight="bold" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}

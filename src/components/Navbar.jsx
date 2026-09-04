import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  List, 
  X 
} from '@phosphor-icons/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isTutoring = location.pathname === '/tutoring';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand identity (Static header — no home navigation needed) */}
        <div className="flex items-center gap-3">
          <img 
            src="/me.png" 
            alt="Krzysztof Wancerski" 
            className="w-8 h-8 rounded-full object-cover grayscale transition duration-200 border border-white/10"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-zinc-100 tracking-tight">
              Krzysztof (Kris) Wancerski
            </span>
            <span className="text-[11px] font-mono text-zinc-500">
              {isTutoring ? 'STEM Academic Tutoring' : 'Engineering · Design · AI'}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs text-zinc-400 font-medium">
          {isTutoring ? (
            <>
              <a href="#overview" className="hover:text-zinc-100 transition">Overview</a>
              <a href="#methodology" className="hover:text-zinc-100 transition">Methodology</a>
              <a href="#qualifications" className="hover:text-zinc-100 transition">Qualifications</a>
              <a href="#testimonials" className="hover:text-zinc-100 transition">Testimonials</a>
              <a href="#enquire" className="hover:text-zinc-100 transition">Enquire</a>
            </>
          ) : (
            <>
              <a href="#work" className="hover:text-zinc-100 transition">Featured Projects</a>
              <a href="#approach" className="hover:text-zinc-100 transition">Approach</a>
              <a href="#experience" className="hover:text-zinc-100 transition">Experience</a>
              <a href="#credentials" className="hover:text-zinc-100 transition">Honours</a>
              <a href="#contact" className="hover:text-zinc-100 transition">Contact</a>
            </>
          )}
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-zinc-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0a0a0c] px-6 py-4 space-y-3 text-sm">
          {isTutoring ? (
            <>
              <a href="#overview" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white">Overview</a>
              <a href="#methodology" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white">Methodology</a>
              <a href="#qualifications" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white">Qualifications</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white">Testimonials</a>
              <a href="#enquire" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white">Enquire</a>
            </>
          ) : (
            <>
              <a href="#work" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white">Featured Projects</a>
              <a href="#approach" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white">Approach</a>
              <a href="#experience" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white">Experience</a>
              <a href="#credentials" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white">Honours</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block text-zinc-400 hover:text-white">Contact</a>
            </>
          )}
        </div>
      )}
    </header>
  );
}

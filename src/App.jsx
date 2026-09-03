import React, { useMemo, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import ConsultingServices from './components/ConsultingServices';
import Experience from './components/Experience';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Tutoring from './components/Tutoring';
import Footer from './components/Footer';
import { WarningCircle, ArrowLeft } from '@phosphor-icons/react';

function EngineeringPortfolio() {
  return (
    <div className="min-h-[100dvh] bg-[#0a0a0c] text-zinc-100 relative selection:bg-zinc-800 selection:text-white">
      {/* Diffuse studio horizon ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] horizon-glow" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <FeaturedProjects />
        <ConsultingServices />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function TutoringPage() {
  return (
    <div className="min-h-[100dvh] bg-[#0a0a0c] text-zinc-100 relative selection:bg-zinc-800 selection:text-white">
      {/* Diffuse studio horizon ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] horizon-glow" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10">
        <Tutoring />
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-[#0a0a0c] text-zinc-100 flex flex-col justify-between">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6 py-20 text-center">
        <div className="max-w-md">
          <div className="w-10 h-10 rounded-md bg-zinc-900 border border-white/10 text-zinc-400 flex items-center justify-center mx-auto mb-4">
            <WarningCircle size={22} weight="bold" />
          </div>
          <h1 className="text-2xl font-semibold text-white tracking-tight mb-2">404: Page Not Found</h1>
          <p className="text-zinc-400 text-xs sm:text-sm mb-6 max-w-sm mx-auto">
            The requested page does not exist or has been relocated in the 2026 website redesign.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition"
            >
              <ArrowLeft size={13} weight="bold" />
              <span>Software & AI Work</span>
            </Link>
            <Link
              to="/tutoring"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium bg-zinc-900 text-zinc-200 hover:text-white border border-white/10 transition"
            >
              <span>Tutoring Portal</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  const location = useLocation();

  // Check if current hostname is configured as a tutoring subdomain (e.g. tutoring.wancerski.uk)
  const isTutoringSubdomain = useMemo(() => {
    if (typeof window === 'undefined') return false;
    const hostname = window.location.hostname.toLowerCase();
    return hostname.startsWith('tutoring.');
  }, []);

  // Dynamically configure contextual LLM discovery link in DOM head based on route
  useEffect(() => {
    if (typeof document === 'undefined') return;

    let contextualLink = document.querySelector('link[data-contextual-llms]');
    if (!contextualLink) {
      contextualLink = document.createElement('link');
      contextualLink.setAttribute('rel', 'alternate');
      contextualLink.setAttribute('type', 'text/markdown');
      contextualLink.setAttribute('data-contextual-llms', 'true');
      document.head.appendChild(contextualLink);
    }

    if (location.pathname === '/tutoring' || isTutoringSubdomain) {
      contextualLink.setAttribute('href', '/llms-tutoring.txt');
      contextualLink.setAttribute('title', 'Academic STEM Tutoring Practice Dossier');
    } else {
      contextualLink.setAttribute('href', '/llms-software.txt');
      contextualLink.setAttribute('title', 'Software, Mobile & AI Engineering Dossier');
    }
  }, [location.pathname, isTutoringSubdomain]);

  return (
    <div className="relative min-h-[100dvh] bg-[#0a0a0c]">
      {/* Global organic film grain texture overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 bg-noise opacity-75" 
        aria-hidden="true" 
      />

      {isTutoringSubdomain ? (
        <Routes>
          <Route path="*" element={<TutoringPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<EngineeringPortfolio />} />
          <Route path="/tutoring" element={<TutoringPage />} />
          <Route path="/contact" element={<EngineeringPortfolio />} />
          {/* Legacy redirects */}
          <Route path="/projects/coding" element={<EngineeringPortfolio />} />
          <Route path="/projects/design-engineering" element={<EngineeringPortfolio />} />
          <Route path="/aboutme" element={<EngineeringPortfolio />} />
          <Route path="/about" element={<EngineeringPortfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
}

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#27272a] bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs font-mono text-editorial-dim">
          <span>© {new Date().getFullYear()} {personalInfo.name}</span>
          <span className="hidden sm:inline">•</span>
          <span>PARUL UNIVERSITY (B.TECH CSE)</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 text-xs font-mono text-editorial-muted hover:text-white transition-colors group"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

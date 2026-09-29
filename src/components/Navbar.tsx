import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#projects', number: '01' },
    { name: 'ABOUT', href: '#about', number: '02' },
    { name: 'SKILLS', href: '#skills', number: '03' },
    { name: 'EDUCATION', href: '#education', number: '04' },
    { name: 'CONTACT', href: '#contact', number: '05' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0c]/85 backdrop-blur-md border-b border-[#27272a]/60 py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Name / Logo */}
          <a
            href="#"
            className="group flex items-center space-x-3 text-sm font-bold tracking-wider uppercase transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <span className="font-display text-base md:text-lg tracking-tight text-white group-hover:text-editorial-muted transition-colors">
              SHESHU REDDY
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-editorial-dim px-2 py-0.5 rounded border border-[#27272a]">
              B.Tech CSE
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center space-x-1.5 text-xs font-mono tracking-widest text-editorial-muted hover:text-white transition-colors py-1"
              >
                <span className="text-editorial-dim text-[10px] group-hover:text-white transition-colors">
                  {link.number}.
                </span>
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-black bg-white hover:bg-editorial-light px-4 py-2 rounded-full font-medium transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#f4f4f5] hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#0a0a0c]/98 backdrop-blur-xl pt-28 px-8 pb-12 flex flex-col justify-between lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-xs font-mono tracking-widest text-editorial-dim uppercase border-b border-[#27272a] pb-3">
                // NAVIGATION
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-baseline space-x-4 group"
                >
                  <span className="font-mono text-xs text-editorial-dim group-hover:text-white transition-colors">
                    {link.number}
                  </span>
                  <span className="font-display text-2xl font-bold tracking-tight text-editorial-light group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-[#27272a] flex flex-col space-y-4">
              <span className="text-xs font-mono text-editorial-dim uppercase">Direct Contact</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm font-mono text-white underline underline-offset-4"
              >
                {personalInfo.email}
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-editorial-muted hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-editorial-muted hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

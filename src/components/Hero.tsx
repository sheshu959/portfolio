import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col justify-between overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Top Editorial Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#27272a] pb-6 mb-12"
        >
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-editorial-dim">
            <MapPin className="w-3.5 h-3.5 text-editorial-muted" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="flex items-center space-x-3 text-xs font-mono tracking-wider text-editorial-dim">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>AVAILABLE FOR FULL-STACK & AI ROLES</span>
          </div>
        </motion.div>

        {/* Hero Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Big Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 flex flex-col justify-center"
          >
            <span className="text-xs font-mono uppercase tracking-mega text-editorial-dim mb-4 block">
              // SOFTWARE ENGINEER & AI SCHOLAR
            </span>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[0.95] text-white mb-8">
              LakkiReddy Naga <br />
              <span className="text-outline hover:text-white transition-colors duration-500">
                sheshu Reddy
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-editorial-muted font-normal max-w-2xl leading-relaxed mb-10">
              Bachelor of Technology in Computer Science (Big Data Analytics) student at Parul University. Specializing in Java, Python, AI integration, and scalable full-stack products.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-[#141418] border border-[#27272a] hover:border-[#3f3f46] text-white font-mono text-xs uppercase tracking-widest font-medium rounded-full transition-colors duration-300"
              >
                <span>CONTACT ME</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center space-x-6 pt-10 mt-10 border-t border-[#27272a]/40">
              <span className="text-xs font-mono text-editorial-dim uppercase">CONNECT:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs font-mono text-editorial-muted hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs font-mono text-editorial-muted hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-xs font-mono text-editorial-muted hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Editorial Framed Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-sm sm:max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#27272a] via-[#3f3f46] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              <div className="relative rounded-2xl overflow-hidden bg-[#121216] border border-[#27272a] p-3">
                <div className="aspect-[4/5] rounded-xl overflow-hidden relative bg-[#18181f]">
                  <img
                    src="/assets/profile.jpg"
                    alt="LakkiReddy Naga sheshu Reddy"
                    className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-70"></div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#0a0a0c]/80 backdrop-blur-md border border-[#27272a]">
                    <p className="text-xs font-mono text-editorial-muted uppercase tracking-wider">
                      PARUL UNIVERSITY
                    </p>
                    <p className="text-sm font-bold text-white font-display">
                      B.Tech CSE — Big Data Analytics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Editorial Ticker Indicator */}
      <div className="mt-16 border-t border-b border-[#27272a]/50 py-3 bg-[#0a0a0c]/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-[11px] font-mono text-editorial-dim tracking-widest uppercase">
          <span>[ 01 ] SELECTED WORKS</span>
          <span>[ 02 ] DEPLOYED PLATFORMS</span>
          <span className="hidden sm:inline">[ 03 ] CS & BIG DATA</span>
        </div>
      </div>
    </section>
  );
};

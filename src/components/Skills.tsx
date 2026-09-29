import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-36 relative border-t border-[#27272a]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center space-x-4 mb-16">
          <span className="text-xs font-mono tracking-mega text-editorial-dim uppercase">
            03 // TECHNICAL SKILLS
          </span>
          <div className="h-px bg-[#27272a] flex-grow"></div>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Technical Competencies & Fundamentals
          </h2>
          <p className="text-editorial-muted text-base sm:text-lg mt-4 font-normal">
            Core skills and technical domains specified directly from my computer science background.
          </p>
        </div>

        {/* Editorial Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-[#121216] border border-[#27272a] hover:border-[#3f3f46] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-editorial-dim tracking-widest uppercase block mb-3">
                  // DOMAIN 0{idx + 1}
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-6 border-b border-[#27272a] pb-4">
                  {cat.category}
                </h3>
              </div>

              {/* Skills List - Editorial Typography Presentation */}
              <ul className="space-y-4">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center justify-between group cursor-default"
                  >
                    <span className="font-display text-lg sm:text-xl font-semibold text-editorial-light group-hover:text-white transition-colors">
                      {skill}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#27272a] group-hover:bg-emerald-400 transition-colors"></span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

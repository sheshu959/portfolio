import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-36 relative border-t border-[#27272a]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center space-x-4 mb-16">
          <span className="text-xs font-mono tracking-mega text-editorial-dim uppercase">
            04 // ACADEMIC EDUCATION
          </span>
          <div className="h-px bg-[#27272a] flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
              Education & Specialization
            </h2>
            <p className="text-editorial-muted text-base font-normal">
              Formal university computer science study focusing on big data analytics, core data structures, and software engineering.
            </p>
          </div>

          <div className="lg:col-span-8">
            {educationList.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="p-8 sm:p-10 rounded-2xl bg-[#121216] border border-[#27272a] hover:border-[#3f3f46] transition-colors relative overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-6 h-6 text-white" />
                    <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
                      DEGREE PROGRAM
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-xs font-mono text-editorial-dim px-3 py-1 rounded-full border border-[#27272a]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  {edu.institution}
                </h3>

                <p className="text-lg font-semibold text-editorial-light mb-4">
                  {edu.degree}
                </p>

                <div className="flex items-center space-x-2 text-xs font-mono text-editorial-muted">
                  <MapPin className="w-4 h-4 text-editorial-dim" />
                  <span>{edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

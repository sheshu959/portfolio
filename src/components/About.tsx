import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, GraduationCap, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 relative border-t border-[#27272a]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center space-x-4 mb-12">
          <span className="text-xs font-mono tracking-mega text-editorial-dim uppercase">
            02 // ABOUT ME
          </span>
          <div className="h-px bg-[#27272a] flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Editorial Bio Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
                Architecting intelligent software, full-stack systems & data platforms.
              </h2>

              <div className="space-y-6 text-base md:text-lg text-editorial-muted font-normal leading-relaxed">
                <p>
                  {personalInfo.careerObjective}
                </p>
                <p>
                  Currently pursuing a <strong className="text-white font-semibold">Bachelor of Technology in Computer Science (Big Data Analytics)</strong> at Parul University in Vadodara, Gujarat, I focus on combining robust computer science fundamentals with modern software engineering practices.
                </p>
              </div>
            </div>

            {/* Quote Block */}
            <div className="mt-12 p-6 rounded-xl bg-[#121216] border border-[#27272a] relative">
              <Sparkles className="w-5 h-5 text-emerald-400 mb-3" />
              <p className="text-sm font-mono text-editorial-light leading-relaxed italic">
                "{personalInfo.summaryQuote}"
              </p>
            </div>
          </motion.div>

          {/* Right Editorial Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Card 1: Core Focus */}
            <div className="p-8 rounded-2xl bg-[#121216] border border-[#27272a] hover:border-[#3f3f46] transition-colors">
              <div className="flex items-center space-x-3 text-white mb-4">
                <Code2 className="w-5 h-5 text-editorial-muted" />
                <h3 className="font-display text-lg font-bold">Engineering Focus</h3>
              </div>
              <p className="text-sm text-editorial-muted leading-relaxed">
                Building scalable full-stack web applications, integrating AI API capabilities, developing RESTful APIs, and implementing role-based authentication architectures.
              </p>
            </div>

            {/* Card 2: Academic Background */}
            <div className="p-8 rounded-2xl bg-[#121216] border border-[#27272a] hover:border-[#3f3f46] transition-colors">
              <div className="flex items-center space-x-3 text-white mb-4">
                <GraduationCap className="w-5 h-5 text-editorial-muted" />
                <h3 className="font-display text-lg font-bold">Academic Base</h3>
              </div>
              <p className="text-sm text-editorial-muted leading-relaxed">
                Parul University, Vadodara, Gujarat. Computer Science with specialization in Big Data Analytics (Aug 2023 – Present).
              </p>
            </div>

            {/* Card 3: Target Role */}
            <div className="p-8 rounded-2xl bg-[#121216] border border-[#27272a] hover:border-[#3f3f46] transition-colors">
              <div className="flex items-center space-x-3 text-white mb-4">
                <Target className="w-5 h-5 text-editorial-muted" />
                <h3 className="font-display text-lg font-bold">Career Vision</h3>
              </div>
              <p className="text-sm text-editorial-muted leading-relaxed">
                Aiming to grow into a technology leader recognized for innovation, problem-solving, and delivering high-impact software solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

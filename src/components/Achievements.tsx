import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { achievementsList } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section className="py-20 relative border-t border-[#27272a]/60 bg-[#0c0c0f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center space-x-4 mb-12">
          <span className="text-xs font-mono tracking-mega text-editorial-dim uppercase">
            // RECOGNITION & DEPLOYMENTS
          </span>
          <div className="h-px bg-[#27272a] flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsList.map((ach, idx) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="p-8 rounded-2xl bg-[#121216] border border-[#27272a] flex items-start space-x-5"
            >
              <div className="p-3 rounded-xl bg-[#18181f] border border-[#27272a] text-emerald-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {ach.title}
                </h3>
                <p className="text-sm text-editorial-muted leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

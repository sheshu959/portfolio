import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Award, CheckCircle2, X } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="group relative border-b border-[#27272a] pb-16 pt-12 last:border-b-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Index & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Project Index */}
              <div className="flex items-center space-x-3 mb-4">
                <span className="font-mono text-xs text-editorial-dim tracking-widest uppercase">
                  PROJECT [ 0{index + 1} ]
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="font-mono text-xs text-editorial-muted">{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white group-hover:text-editorial-muted transition-colors duration-300">
                {project.title}
              </h3>

              {/* Sub-category */}
              <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mt-2 mb-4">
                {project.category}
              </p>

              {/* Short Description */}
              <p className="text-base text-editorial-muted font-normal leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-editorial-light bg-[#18181f] border border-[#27272a] px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links & CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#27272a]/50">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-black bg-white hover:bg-editorial-light px-5 py-2.5 rounded-full transition-transform duration-300 hover:scale-105"
                  data-cursor="hover"
                >
                  <span>LIVE PLATFORM</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-white bg-[#141418] border border-[#27272a] hover:border-white px-5 py-2.5 rounded-full transition-colors duration-300"
                  data-cursor="hover"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>REPOSITORY</span>
                </a>
              )}

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center space-x-1.5 text-xs font-mono text-editorial-muted hover:text-white underline underline-offset-4 py-2"
              >
                <span>SPECIFICATIONS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Screenshot Display */}
          <div className="lg:col-span-7">
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative rounded-2xl overflow-hidden bg-[#121216] border border-[#27272a] group-hover:border-[#3f3f46] transition-all duration-500 cursor-pointer shadow-2xl"
              data-cursor="project"
            >
              {/* Image Frame */}
              <div className="aspect-[16/9] w-full overflow-hidden relative bg-[#0a0a0c]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Subtle Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>

                {/* Corner Status Badge */}
                <div className="absolute top-4 right-4 bg-[#0a0a0c]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#27272a] flex items-center space-x-2 text-xs font-mono text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>PRODUCTION GRADE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Deep Specification Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0a0a0c]/90 backdrop-blur-xl p-4 sm:p-6 md:p-10 flex items-center justify-center overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#121216] border border-[#27272a] rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#27272a] pb-6 mb-6">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-4xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full bg-[#18181f] text-editorial-muted hover:text-white hover:bg-[#27272a] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto pr-2 space-y-6 text-sm text-editorial-muted">
                {/* Recognition Badge if exists */}
                {project.recognition && (
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex items-start space-x-3">
                    <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs font-mono text-emerald-300 leading-relaxed">
                      {project.recognition}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-3">
                    KEY IMPLEMENTATION HIGHLIGHTS:
                  </h4>
                  <ul className="space-y-3">
                    {project.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-editorial-light">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-white mb-3">
                    TECHNOLOGY STACK:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-white bg-[#18181f] border border-[#27272a] px-3 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="pt-6 border-t border-[#27272a] mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex space-x-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase text-black bg-white px-5 py-2.5 rounded-full hover:bg-editorial-light"
                    >
                      <span>VISIT LIVE APP</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-mono uppercase text-white bg-[#18181f] border border-[#27272a] px-5 py-2.5 rounded-full hover:border-white"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GITHUB REPO</span>
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-xs font-mono text-editorial-dim hover:text-white"
                >
                  [ CLOSE ]
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

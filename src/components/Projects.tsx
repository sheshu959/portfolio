import React from 'react';
import { projects } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-36 relative border-t border-[#27272a]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center space-x-4 mb-16">
          <span className="text-xs font-mono tracking-mega text-editorial-dim uppercase">
            01 // SELECTED WORK & PLATFORMS
          </span>
          <div className="h-px bg-[#27272a] flex-grow"></div>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Production Software & AI Architectures
          </h2>
          <p className="text-editorial-muted text-base sm:text-lg mt-4 font-normal">
            Real-world full-stack applications deployed with Java Spring Boot, React, AI agent APIs, security authentication, and automated data pipelines.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

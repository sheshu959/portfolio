
import React from 'react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-24 md:py-36 relative border-t border-[#27272a]/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center space-x-4 mb-16">
          <span className="text-xs font-mono tracking-mega text-editorial-dim uppercase">
            04 // CERTIFICATIONS
          </span>
          <div className="h-px bg-[#27272a] flex-grow" />
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Certifications & Credentials
          </h2>
          <p className="text-editorial-muted text-base sm:text-lg mt-4">
            Professional learning and achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <article
              key={cert.id}
              className="border border-[#27272a]/60 p-6 md:p-8"
            >
              <p className="text-xs font-mono text-editorial-dim uppercase mb-3">
                {cert.issuer}
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {cert.title}
              </h3>

              <p className="text-editorial-muted text-sm mt-3">
                {cert.date}
              </p>

              <p className="text-editorial-muted text-sm mt-2">
                Certificate ID: {cert.credentialId}
              </p>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 border border-[#3f3f46] px-5 py-3 text-sm text-white hover:bg-[#27272a] transition-colors"
              >
                View Certificate ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

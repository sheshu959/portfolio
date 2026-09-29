import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, ArrowUpRight, QrCode } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative border-t border-[#27272a]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center space-x-4 mb-16">
          <span className="text-xs font-mono tracking-mega text-editorial-dim uppercase">
            05 // GET IN TOUCH
          </span>
          <div className="h-px bg-[#27272a] flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Big Editorial CTA Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-8">
              Let’s build something <br />
              <span className="text-outline hover:text-white transition-colors duration-500">
                impactful together.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-editorial-muted font-normal max-w-xl leading-relaxed mb-10">
              Open for full-stack engineering roles, software development opportunities, and collaborative AI projects. Reach out directly via email, phone, or LinkedIn.
            </p>

            {/* Email Box with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#121216] border border-[#27272a] flex flex-wrap items-center justify-between gap-4 max-w-xl">
              <div className="flex items-center space-x-3 overflow-hidden">
                <Mail className="w-5 h-5 text-editorial-muted shrink-0" />
                <span className="font-mono text-base sm:text-lg font-bold text-white truncate">
                  {personalInfo.email}
                </span>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-lg bg-[#18181f] text-editorial-muted hover:text-white border border-[#27272a] hover:border-[#3f3f46] transition-colors flex items-center space-x-1.5 text-xs font-mono"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPY</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg bg-white text-black font-mono text-xs font-bold hover:bg-editorial-light transition-colors flex items-center space-x-1"
                >
                  <span>SEND</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Scan to Connect QR Code Card */}
            {personalInfo.linkedinQr && (
              <div className="mt-8 p-6 rounded-2xl bg-[#121216] border border-[#27272a] hover:border-[#3f3f46] transition-colors flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 max-w-xl">
                <div className="w-28 h-28 rounded-xl bg-white p-2 shrink-0 border border-white/20 shadow-lg">
                  <img
                    src={personalInfo.linkedinQr}
                    alt="LinkedIn QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">
                    <QrCode className="w-3.5 h-3.5" />
                    <span>[ SCAN TO CONNECT ]</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-white mb-1">
                    LinkedIn Quick Connect
                  </h4>
                  <p className="text-xs text-editorial-muted leading-relaxed mb-3">
                    Scan with your camera to open my LinkedIn profile directly.
                  </p>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-white underline underline-offset-4 hover:text-emerald-400 transition-colors"
                  >
                    <span>View Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </motion.div>

          {/* Contact Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Phone */}
            <div className="p-8 rounded-2xl bg-[#121216] border border-[#27272a] hover:border-[#3f3f46] transition-colors">
              <div className="flex items-center space-x-3 text-editorial-dim font-mono text-xs uppercase mb-2">
                <Phone className="w-4 h-4 text-editorial-muted" />
                <span>PHONE DIRECT</span>
              </div>
              <a
                href={`tel:${personalInfo.phone}`}
                className="font-mono text-xl font-bold text-white hover:text-emerald-400 transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Location */}
            <div className="p-8 rounded-2xl bg-[#121216] border border-[#27272a] hover:border-[#3f3f46] transition-colors">
              <div className="flex items-center space-x-3 text-editorial-dim font-mono text-xs uppercase mb-2">
                <MapPin className="w-4 h-4 text-editorial-muted" />
                <span>LOCATION</span>
              </div>
              <p className="font-display text-xl font-bold text-white">
                {personalInfo.location}
              </p>
            </div>

            {/* Professional Profiles */}
            <div className="p-8 rounded-2xl bg-[#121216] border border-[#27272a] hover:border-[#3f3f46] transition-colors">
              <span className="text-editorial-dim font-mono text-xs uppercase block mb-4">
                PROFESSIONAL PROFILES
              </span>
              <div className="flex flex-col space-y-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between font-mono text-sm text-editorial-light hover:text-white py-2 border-b border-[#27272a] group"
                >
                  <div className="flex items-center space-x-2">
                    <Github className="w-4 h-4 text-editorial-muted" />
                    <span>github.com/{personalInfo.githubDisplay}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between font-mono text-sm text-editorial-light hover:text-white py-2 group"
                >
                  <div className="flex items-center space-x-2">
                    <Linkedin className="w-4 h-4 text-editorial-muted" />
                    <span>linkedin.com/in/{personalInfo.linkedinDisplay}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

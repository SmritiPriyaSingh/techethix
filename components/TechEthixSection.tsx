'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { YoutubeIcon } from './SocialIcons';
import { ExternalLink, Video, ShieldCheck, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/resumeData';

export const TechEthixSection: React.FC = () => {
  return (
    <section className="py-16 border-t border-slate-800/60 bg-slate-950/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800/80 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[90px] rounded-full pointer-events-none" />

          <div className="space-y-3 text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[11px] font-mono text-red-400">
              <Video className="w-3.5 h-3.5 text-red-400" />
              <span>TechEthix Educational Channel</span>
            </div>

            <h2 className="text-2xl font-bold text-white tracking-tight">
              Demystifying Cybersecurity & Defensive Labs
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <span className="text-white font-semibold">TechEthix</span> is my dedicated YouTube platform where I share hands-on cybersecurity tutorials, lab walkthroughs, and ethical hacking fundamentals.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Hands-on Lab Demos</span>
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Ethical Hacking & SOC Guides</span>
              </span>
            </div>
          </div>

          {/* Action button */}
          <div className="shrink-0">
            <a
              href={personalInfo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium text-xs transition-colors shadow-lg shadow-red-600/20"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

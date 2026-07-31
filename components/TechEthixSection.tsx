'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { YoutubeIcon } from './SocialIcons';
import { ExternalLink, Video } from 'lucide-react';
import { personalInfo } from '@/data/resumeData';

export const TechEthixSection: React.FC = () => {
  return (
    <section className="py-16 border-t border-[#27272a] bg-[#09090b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-8 rounded-3xl bg-[#121215] border border-[#27272a] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            {/* Channel Logo Image */}
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-zinc-700 shadow-xl shrink-0 bg-zinc-950">
              <Image
                src="/techethix-logo.png"
                alt="TechEthix YouTube Channel Logo"
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="space-y-1.5 text-left max-w-md">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-[11px] font-mono text-red-400">
                <Video className="w-3.5 h-3.5" />
                <span>TechEthix Channel</span>
              </div>

              <h2 className="text-xl font-bold text-white tracking-tight">
                Learn &bull; Vibe &bull; Deploy
              </h2>

              <p className="text-xs text-zinc-400 leading-relaxed">
                <span className="text-zinc-200 font-semibold">TechEthix</span> is my YouTube platform for sharing cybersecurity tutorials, hands-on lab walkthroughs, and security concept guides.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href={personalInfo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-medium text-xs transition-colors shadow-lg shadow-red-600/15"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

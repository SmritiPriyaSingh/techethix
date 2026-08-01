'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TiltCard } from './TiltCard';
import { YoutubeIcon } from './SocialIcons';
import { ExternalLink, Video } from 'lucide-react';
import { personalInfo } from '@/data/resumeData';

export const TechEthixSection: React.FC = () => {
  return (
    <section className="py-32 border-t border-[#6EA8FE]/15 bg-[#050505] relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <TiltCard className="p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="flex items-start gap-5">
              <div className="space-y-2 text-left max-w-md">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#6EA8FE]/10 border border-[#6EA8FE]/20 text-[11px] font-mono text-[#6EA8FE] font-medium">
                  <Video className="w-3.5 h-3.5" />
                  <span>TechEthix YouTube Channel</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8F8F6] tracking-tight">
                  Learn &bull; Vibe &bull; Deploy
                </h2>

                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  <span className="text-[#F8F8F6] font-semibold">TechEthix</span> is my YouTube platform for sharing cybersecurity tutorials, hands-on lab walkthroughs, and security concept guides.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a
                  href={personalInfo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full md:w-auto px-6.5 py-3.5 rounded-full bg-[#6EA8FE] hover:bg-[#8BBEFF] text-[#050505] font-semibold text-xs transition-all duration-300 ease-out shadow-lg shadow-[#6EA8FE]/20"
                >
                  <YoutubeIcon className="w-4 h-4 text-[#050505]" />
                  <span>Subscribe on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </motion.div>
            </div>
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
};

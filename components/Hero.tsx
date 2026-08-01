'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, BookOpen, Layers, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const words = ["Learning.", "Building.", "Breaking.", "Defending."];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
      className="relative min-h-[85vh] flex items-center justify-center pt-36 pb-24 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-9 relative z-10">
        
        {/* Interactive Eyebrow Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-[#111114]/90 border border-[#6EA8FE]/25 shadow-2xl backdrop-blur-xl group cursor-pointer"
        >
          <motion.div whileHover={{ rotate: 10 }} transition={{ type: 'spring', stiffness: 300 }}>
            <ShieldCheck className="w-3.5 h-3.5 text-[#6EA8FE]" />
          </motion.div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-wide text-[#A1A1AA]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6EA8FE] animate-pulse" />
            <span>TechEthix &bull; Cybersecurity Research &bull; Labs &bull; Write-ups</span>
          </div>
        </motion.div>

        {/* Word-by-Word Text Reveal Headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-[#F8F8F6] leading-[1.06] flex flex-wrap justify-center gap-x-3.5 gap-y-2"
        >
          {words.map((word, index) => {
            const isHighlight = word === "Defending.";
            return (
              <motion.span
                key={index}
                variants={wordVariants}
                className={
                  isHighlight
                    ? "text-[#6EA8FE] underline decoration-[#6EA8FE]/40 underline-offset-8 drop-shadow-[0_0_20px_rgba(110,168,254,0.25)]"
                    : "text-[#F8F8F6]"
                }
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed font-normal"
        >
          I document real-world cybersecurity, build practical security projects, and share everything I learn through <span className="text-[#F8F8F6] font-medium">TechEthix</span>.
        </motion.p>

        {/* Spring Interactive Buttons with Icon Slide */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#6EA8FE] hover:bg-[#8BBEFF] text-[#050505] font-semibold text-xs transition-all duration-300 ease-out shadow-[0_0_30px_rgba(110,168,254,0.25)] group"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#111114] text-[#A1A1AA] hover:text-[#F8F8F6] font-medium text-xs border border-[#6EA8FE]/20 hover:border-[#6EA8FE]/50 transition-all duration-300 ease-out shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#6EA8FE]" />
              <span>Read Blog</span>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};

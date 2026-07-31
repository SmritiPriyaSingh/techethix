'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        {/* Brand Logo Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-[#121215] border border-[#27272a]"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-700 shadow-md bg-zinc-950">
            <Image
              src="/techethix-logo.png"
              alt="TechEthix Brand Logo"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Smriti Priya Singh &bull; TechEthix</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
        >
          Personal Website & <span className="emerald-gradient-text">Cybersecurity Journal</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed font-normal"
        >
          Documenting security engineering, threat detection labs, and educational content through <span className="text-zinc-200 font-medium">TechEthix</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md shadow-white/10"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Explore Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/journal"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121215] hover:bg-[#18181b] text-zinc-300 font-medium text-xs border border-[#27272a] transition-all"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Read Journal</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

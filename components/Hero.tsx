'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, BookOpen, Award, Terminal, Cpu } from 'lucide-react';
import { personalInfo } from '@/data/resumeData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[82vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle Glow backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Achievements Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 shadow-sm backdrop-blur-md"
        >
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Cisco Ideathon 2025 Top 20 Finalist &bull; B.Tech (CSE-CY) ’26</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]"
        >
          Smriti Priya Singh — <span className="cyan-gradient-text">Cybersecurity Journal</span>
        </motion.h1>

        {/* Mission Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Aspiring Security Analyst documenting network security projects, real-time threat anomaly detection, hands-on lab notes, and educational content through <span className="text-cyan-400 font-medium">TechEthix</span>.
        </motion.p>

        {/* Bio Badge Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 max-w-xl mx-auto text-xs text-slate-400 leading-relaxed text-left flex items-start gap-3"
        >
          <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 mt-0.5 shrink-0">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-slate-200 block mb-0.5">Focus & Specialization</span>
            Threat Detection, Incident Response, Offensive Testing, SOC Operations, CCTV Security, and Web Penetration Testing (CEHv13 Certified).
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-all duration-200 shadow-md shadow-cyan-500/20"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/journal"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs border border-slate-800 hover:border-slate-700 transition-all duration-200"
          >
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span>Read Journal</span>
          </Link>

          <Link
            href="/lab-notes"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs border border-slate-800 hover:border-slate-700 transition-all duration-200"
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Lab Notes</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

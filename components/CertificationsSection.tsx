'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '@/data/resumeData';
import { Award, ShieldCheck } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="py-14 border-t border-slate-800/60 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>Verified Credentials & Certifications</span>
          </div>
          <span className="text-xs font-mono text-slate-400">{certifications.length} Industry Certifications</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 mt-0.5 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="space-y-1 text-left">
                <h3 className="text-xs font-bold text-white leading-snug">{cert.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400">{cert.issuer}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${cert.badgeColor}`}>
                    {cert.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

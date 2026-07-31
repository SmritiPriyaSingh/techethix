'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { workItems } from '@/data/resumeData';
import { Layers, ArrowRight } from 'lucide-react';

export const CurrentWorkSection: React.FC = () => {
  return (
    <section className="py-16 border-t border-[#27272a] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Projects & Engineering</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              What I'm Building
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>View all work ({workItems.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#121215] border border-[#27272a] hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium">
                    {item.status}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">{item.category}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">{item.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-950 text-zinc-400 border border-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-3 border-t border-[#27272a] flex items-center justify-between text-xs">
                  <span className="text-zinc-500 font-mono text-[11px]">{item.publishedDate}</span>
                  <Link href="/work" className="text-emerald-400 font-medium hover:underline text-xs">
                    Read Overview
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

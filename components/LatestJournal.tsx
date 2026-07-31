'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Clock, Calendar } from 'lucide-react';

export const sampleJournalPosts = [
  {
    slug: 'wazuh-homelab-guide',
    title: 'Building a Threat Detection Homelab with Wazuh SIEM',
    summary: 'A step-by-step breakdown of endpoint telemetry collection, Sysmon rules, and Wazuh correlation.',
    publishedAt: '2026-06-20',
    readingTime: '7 min read',
    category: 'Threat Detection',
    tags: ['Wazuh', 'SIEM', 'Sysmon']
  },
  {
    slug: 'zero-trust-architecture-basics',
    title: 'Practical Zero-Trust Architecture: Bi-directional mTLS Validation',
    summary: 'Demystifying identity-based microsegmentation and mTLS verification between microservices.',
    publishedAt: '2026-07-05',
    readingTime: '9 min read',
    category: 'AppSec',
    tags: ['Zero Trust', 'mTLS', 'Architecture']
  }
];

export const LatestJournal: React.FC = () => {
  return (
    <section className="py-16 border-t border-slate-800/60 bg-slate-950/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Cybersecurity Research</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Recent Journal Writeups
            </h2>
          </div>
          <Link
            href="/journal"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span>Explore full journal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleJournalPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 glass-panel-hover"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                  {post.category}
                </span>
                <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {post.publishedAt}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {post.readingTime}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-snug">{post.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">{post.summary}</p>

              <div className="pt-3 border-t border-slate-800/60">
                <Link href={`/journal`} className="inline-flex items-center gap-1 text-xs font-medium text-purple-400 hover:text-purple-300">
                  <span>Read Writeup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

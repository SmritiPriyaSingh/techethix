'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TiltCard } from './TiltCard';
import { ArrowRight } from 'lucide-react';

export const blogPostsPreview = [
  {
    title: 'Hack The Box — Extracting AES Encrypted ZIP Archives',
    publishedAt: '2026-08-01',
    summary: 'A step-by-step HTB walkthrough on extracting WinZip AES-256 encrypted archives, zip2john hash extraction, GPU cracking, and root privilege escalation.',
    category: 'Hack The Box',
    readingTime: '6 min read',
    slug: 'htb-extract-aes-encrypted-zip',
  },
  {
    title: 'Securing Surveillance Networks: CCTV Hardening & Defense',
    publishedAt: '2025-06-15',
    summary: 'A deep dive into securing IP CCTV networks using MAC binding, port hardening, and anomaly detection.',
    category: 'Network Security',
    readingTime: '6 min read',
    slug: 'cctv-network-hardening',
  },
  {
    title: 'Real-Time Enterprise Network Anomaly Detection System',
    publishedAt: '2025-03-28',
    summary: 'Architecture breakdown of our Cisco Ideathon 2025 Top 20 Finalist project for packet stream analysis.',
    category: 'Threat Detection',
    readingTime: '8 min read',
    slug: 'realtime-network-anomaly-detection',
  },
];

export const LatestBlog: React.FC = () => {
  return (
    <section className="py-32 border-t border-[#6EA8FE]/15 bg-[#050505] relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div className="space-y-2">
            <div className="text-[11px] font-mono text-[#6EA8FE] uppercase tracking-[0.15em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6EA8FE] animate-pulse" />
              <span>Penetration Testing & Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F8F6] tracking-[-0.025em]">
              Latest Blog Posts
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#6EA8FE] hover:text-[#8BBEFF] transition-colors group"
          >
            <span>View all articles ({blogPostsPreview.length})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Editorial Horizontal Slide-In 3D Tilt Cards */}
        <div className="space-y-4.5">
          {blogPostsPreview.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <TiltCard className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                  <div className="space-y-2.5 max-w-3xl">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono accent-badge-glow">
                        {post.category}
                      </span>
                      <span className="text-[11px] font-mono text-[#A1A1AA]">{post.publishedAt}</span>
                      <span className="text-[11px] font-mono text-[#A1A1AA]">&bull; {post.readingTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#F8F8F6] group-hover:text-white transition-colors duration-200">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-2">
                      {post.summary}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-[#A1A1AA] group-hover:text-[#6EA8FE] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 text-[#6EA8FE] group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
                  </div>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

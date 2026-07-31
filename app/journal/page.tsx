import React from 'react';
import { Metadata } from 'next';
import { getAllJournalPosts } from '@/lib/mdx';
import { JournalListClient } from '@/components/JournalListClient';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Journal & Research Writeups — Smriti Priya Singh',
  description: 'Cybersecurity research, network security guides, and vulnerability analysis by Smriti Priya Singh.',
};

export default function JournalPage() {
  const posts = getAllJournalPosts();

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-purple-400">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Cybersecurity Journal</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Research Articles & Project Insights
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Detailed technical writeups on CCTV surveillance network defense, real-time packet anomaly detection, and CEH v13 preparation strategies.
        </p>
      </div>

      <JournalListClient posts={posts} />

    </div>
  );
}

import React from 'react';
import { Metadata } from 'next';
import { workItems } from '@/data/resumeData';
import { Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Work — What I\'m Building | Smriti Priya Singh',
  description: 'Cybersecurity projects and tools currently being built by Smriti Priya Singh.',
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-20 max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 text-center sm:text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121215] border border-[#27272a] text-xs font-mono text-emerald-400">
          <Layers className="w-3.5 h-3.5" />
          <span>Work Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          What I'm Building
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Open-source security tools, CCTV network defense frameworks, SIEM threat detection labs, and practice portals across stages of development.
        </p>
      </div>

      {/* Work Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workItems.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl bg-[#121215] border border-[#27272a] hover:border-zinc-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-0.5 rounded-full text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium">
                  {item.status}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">{item.category}</span>
              </div>

              <h2 className="text-lg font-bold text-white mb-1.5 leading-snug">{item.title}</h2>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">{item.description}</p>

              <div className="space-y-2 pt-2 border-t border-[#27272a]/60">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Key Technical Highlights:</span>
                <ul className="space-y-1 text-xs text-zinc-300 list-disc ml-4">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#27272a]">
              <div className="flex flex-wrap gap-1 mb-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-950 text-zinc-400 border border-zinc-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

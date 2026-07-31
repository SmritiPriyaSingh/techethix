'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { FieldNotePost } from '@/lib/mdx';
import { Search, Calendar, ArrowRight } from 'lucide-react';

interface FieldNotesClientProps {
  notes: FieldNotePost[];
}

export const FieldNotesClient: React.FC<FieldNotesClientProps> = ({ notes }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'TryHackMe', 'PicoCTF', 'Networking'];

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const matchesCategory = selectedCategory === 'All' || note.frontmatter.category === selectedCategory;
      const matchesSearch =
        note.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.frontmatter.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.frontmatter.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [notes, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#121215] border border-[#27272a]">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-zinc-950 font-semibold shadow-md shadow-emerald-500/20'
                  : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search field notes..."
            aria-label="Search field notes"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
          />
        </div>
      </div>

      {/* Grid */}
      {filteredNotes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <Link
              key={note.slug}
              href={`/field-notes/${note.slug}`}
              className="flex flex-col justify-between p-6 rounded-2xl bg-[#121215] border border-[#27272a] hover:border-zinc-700 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {note.frontmatter.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-zinc-500">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    Updated {note.frontmatter.updatedAt}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors mb-2 leading-snug">
                  {note.frontmatter.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                  {note.frontmatter.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {note.frontmatter.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-950 text-zinc-400 border border-zinc-800">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="pt-3 border-t border-[#27272a] flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                    <span>View Field Note</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 p-6 rounded-xl bg-[#121215] border border-[#27272a] text-zinc-400 text-xs">
          No field notes found matching your criteria.
        </div>
      )}
    </div>
  );
};

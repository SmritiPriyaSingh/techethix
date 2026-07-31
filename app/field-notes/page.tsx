import React from 'react';
import { Metadata } from 'next';
import { getAllFieldNotes } from '@/lib/mdx';
import { FieldNotesClient } from '@/components/FieldNotesClient';
import { Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Field Notes — Smriti Priya Singh',
  description: 'Practical learning notes for TryHackMe, PicoCTF, OverTheWire, Wireshark, Nmap, and Linux command cheatsheets.',
};

export default function FieldNotesPage() {
  const notes = getAllFieldNotes();

  return (
    <div className="pt-32 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121215] border border-[#27272a] text-xs font-mono text-emerald-400">
          <Cpu className="w-3.5 h-3.5" />
          <span>Practical Learning Notes</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Field Notes & Cheat Sheets
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Quick-reference notes compiled while solving SOC rooms on TryHackMe, CTF challenges on PicoCTF / OverTheWire, and network packet analysis commands.
        </p>
      </div>

      <FieldNotesClient notes={notes} />

    </div>
  );
}

import React from 'react';
import { Metadata } from 'next';
import { getAllLabNotes } from '@/lib/mdx';
import { LabNotesClient } from '@/components/LabNotesClient';
import { Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Lab Notes & Cheat Sheets — Smriti Priya Singh',
  description: 'Hands-on practice notes for TryHackMe, PicoCTF, OverTheWire, Wireshark, Nmap, and Linux command cheatsheets.',
};

export default function LabNotesPage() {
  const notes = getAllLabNotes();

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
          <Cpu className="w-3.5 h-3.5" />
          <span>Hands-on Lab Notes & Cheat Sheets</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Practical Notes & Field Cheat Sheets
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Quick-reference notes compiled while solving SOC rooms on TryHackMe, CTF challenges on PicoCTF / OverTheWire, and network packet analysis commands.
        </p>
      </div>

      <LabNotesClient notes={notes} />

    </div>
  );
}

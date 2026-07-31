'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight, Terminal } from 'lucide-react';

export const labCategories = [
  { name: 'Wazuh SIEM', count: '4 Notes', desc: 'Rules tuning, Sysmon integration, log parsing' },
  { name: 'SOC Labs', count: '6 Notes', desc: 'Splunk queries, alert investigation, packet dumps' },
  { name: 'DFIR & Forensics', count: '3 Notes', desc: 'Memory dumps, disk analysis, timeline analysis' },
  { name: 'TryHackMe & HTB', count: '8 Notes', desc: 'Room writeups, privilege escalation cheat sheets' },
  { name: 'Networking', count: '5 Notes', desc: 'Wireshark filters, DNS analysis, firewall configuration' },
];

export const LabNotesPreview: React.FC = () => {
  return (
    <section className="py-16 border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>Hands-on Practice</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Lab Notes & Field Cheat Sheets
            </h2>
          </div>
          <Link
            href="/lab-notes"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View all lab notes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {labCategories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">{cat.name}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">{cat.count}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

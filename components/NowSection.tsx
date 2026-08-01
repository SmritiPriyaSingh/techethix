'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Hammer, FileText, Target, Radio } from 'lucide-react';
import Link from 'next/link';

export const NowSection: React.FC = () => {
  const nowItems = [
    {
      label: 'Currently Learning',
      title: 'Wazuh SIEM & SOC Operations',
      detail: 'Building custom decoders, log collection rules, and threat detection pipelines.',
      icon: BookOpen,
      status: 'Active Study',
    },
    {
      label: 'Currently Building',
      title: 'CEH v13 Portal & CCTV Hardening',
      detail: 'Developing exam preparation tools and 802.1X MAC binding CCTV defense scripts.',
      icon: Hammer,
      status: 'In Progress',
    },
    {
      label: 'Latest Write-up',
      title: 'HTB — Extracting AES Encrypted ZIPs',
      detail: 'WinZip AES-256 hash extraction with zip2john and GPU hashcat cracking.',
      icon: FileText,
      status: 'Published',
      link: '/blog/htb-extract-aes-encrypted-zip',
    },
    {
      label: 'Next Goal',
      title: 'Malware Analysis & Reverse Engineering',
      detail: 'Setting up isolated Ghidra & x64dbg dynamic analysis sandboxes.',
      icon: Target,
      status: 'Q3 2026',
    },
  ];

  return (
    <section className="py-20 border-t border-[#6EA8FE]/15 bg-[#050505] relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#6EA8FE]/10 text-[#6EA8FE] border border-[#6EA8FE]/20">
              <Radio className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-[#F8F8F6] tracking-tight">
                Now &bull; Live Activity Dashboard
              </h2>
              <p className="text-xs text-[#A1A1AA]">Real-time snapshot of what I'm studying, building, and aiming for next.</p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono bg-[#6EA8FE]/10 text-[#6EA8FE] border border-[#6EA8FE]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6EA8FE] animate-ping" />
            <span>Updated August 2026</span>
          </span>
        </div>

        {/* Now Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {nowItems.map((item, index) => {
            const Icon = item.icon;
            const cardContent = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-[#111114] border border-[#6EA8FE]/15 hover:border-[#6EA8FE]/35 transition-all duration-300 flex flex-col justify-between group h-full shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#6EA8FE] uppercase tracking-wider font-medium flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#050505] text-[#A1A1AA] border border-[#6EA8FE]/15">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#F8F8F6] group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );

            return item.link ? (
              <Link key={item.label} href={item.link} className="block">
                {cardContent}
              </Link>
            ) : (
              <div key={item.label}>{cardContent}</div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

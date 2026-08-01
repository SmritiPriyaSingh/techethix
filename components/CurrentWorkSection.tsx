'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { workItems } from '@/data/resumeData';
import { TiltCard } from './TiltCard';
import { ArrowRight } from 'lucide-react';

export const CurrentWorkSection: React.FC = () => {
  return (
    <section className="py-32 border-t border-[#6EA8FE]/15 bg-[#050505] relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div className="space-y-2">
            <div className="text-[11px] font-mono text-[#6EA8FE] uppercase tracking-[0.15em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6EA8FE] animate-pulse" />
              <span>Engineering & Defense</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F8F6] tracking-[-0.025em]">
              Featured Security Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#6EA8FE] hover:text-[#8BBEFF] transition-colors group"
          >
            <span>View all projects ({workItems.length})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Flagship 3D Tilt Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="md:col-span-12"
          >
            <TiltCard className="p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
              <div className="space-y-3.5 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono accent-badge-glow font-medium">
                    {workItems[0].status}
                  </span>
                  <span className="text-[11px] font-mono text-[#A1A1AA]">{workItems[0].category}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8F8F6] tracking-tight group-hover:text-white transition-colors">
                  {workItems[0].title}
                </h3>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {workItems[0].description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {workItems[0].tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#111114] text-[#A1A1AA] border border-[#6EA8FE]/15">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-[#6EA8FE]/15">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-full bg-[#6EA8FE] hover:bg-[#8BBEFF] text-[#050505] font-semibold text-xs transition-all duration-300 ease-out shadow-lg"
                  >
                    <span>Project Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Secondary Grid 3D Tilt Cards */}
          {workItems.slice(1).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: (idx + 1) * 0.12, ease: [0.16, 1, 0.3, 1] as const }}
              className="md:col-span-4"
            >
              <TiltCard className="p-6 sm:p-7 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#111114] border border-[#6EA8FE]/20 text-[#6EA8FE] font-medium">
                      {item.status}
                    </span>
                    <span className="text-[10px] font-mono text-[#A1A1AA]">{item.category}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#F8F8F6] group-hover:text-white transition-colors mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4 line-clamp-3">{item.description}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#111114] text-[#A1A1AA] border border-[#6EA8FE]/15">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-3.5 border-t border-[#6EA8FE]/15 flex items-center justify-between text-xs">
                    <span className="text-[#A1A1AA] font-mono text-[11px]">{item.publishedDate}</span>
                    <Link href="/projects" className="text-[#6EA8FE] hover:text-[#8BBEFF] font-medium text-xs">
                      Details
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

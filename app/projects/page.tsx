import React from 'react';
import { Metadata } from 'next';
import { workItems } from '@/data/resumeData';
import { ArrowUpRight, Terminal, Shield, Cpu, Activity, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects & Case Studies — Smriti Priya Singh & TechEthix',
  description: 'Deep technical case studies, threat detection architectures, and CCTV defense engineering by Smriti Priya Singh.',
};

export default function ProjectsPage() {
  const flagship = workItems[0]; // Real-Time Enterprise Network Anomaly Detection System
  const secondaryProjects = workItems.slice(1);

  return (
    <div className="pt-36 pb-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-mono text-[#6EA8FE]">
          <Terminal className="w-4 h-4" />
          <span>PROJECT CASE STUDIES &bull; TECHETHIX LABS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F8F8F6] tracking-[-0.03em] leading-tight">
          Security Systems & Case Studies
        </h1>
        <p className="text-[#A1A1AA] text-base leading-relaxed">
          Deep architectural breakdowns, challenges encountered, lessons learned, and open-source repositories for enterprise threat detection systems and surveillance network defense.
        </p>
      </div>

      {/* Flagship Detailed Case Study Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#141419] to-[#0d0d10] border border-[#6EA8FE]/30 p-8 sm:p-12 space-y-10 shadow-2xl overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Activity className="w-64 h-64 text-[#6EA8FE]" />
        </div>

        {/* Case Study Header & Progress Indicator Bar */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-[#6EA8FE]/15 text-[#6EA8FE] border border-[#6EA8FE]/30 font-semibold tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6EA8FE] animate-pulse" />
              <span>FEATURED CASE STUDY &bull; {flagship.status}</span>
            </span>
            <span className="text-xs font-mono text-[#A1A1AA]">{flagship.publishedDate}</span>
          </div>

          <div className="space-y-3 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8F8F6] tracking-tight group-hover:text-white transition-colors">
              {flagship.title}
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              {flagship.description}
            </p>
          </div>

          {/* Development Progress Bar */}
          <div className="space-y-2 max-w-md pt-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#A1A1AA]">System Implementation Stage</span>
              <span className="text-[#6EA8FE] font-bold">90% Operational</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#050505] overflow-hidden border border-[#6EA8FE]/20">
              <div className="h-full bg-gradient-to-r from-[#6EA8FE] to-[#8BBEFF] rounded-full w-[90%]" />
            </div>
          </div>
        </div>

        {/* System Architecture Grid Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#6EA8FE]/15">
          <div className="space-y-4">
            <h3 className="text-xs font-mono text-[#6EA8FE] uppercase tracking-wider flex items-center gap-2 font-bold">
              <Cpu className="w-4 h-4 text-[#6EA8FE]" />
              <span>Engineering Highlights & Protocol</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-[#F8F8F6]/90">
              {flagship.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 bg-[#050505]/60 p-3 rounded-xl border border-[#6EA8FE]/10">
                  <CheckCircle className="w-4 h-4 text-[#6EA8FE] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Lessons Learned Section */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono text-[#6EA8FE] uppercase tracking-wider flex items-center gap-2 font-bold">
              <Lightbulb className="w-4 h-4 text-[#6EA8FE]" />
              <span>Technical Challenges & Lessons Learned</span>
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#050505]/60 border border-[#6EA8FE]/10 space-y-1">
                <span className="font-semibold text-[#F8F8F6] flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#6EA8FE]" />
                  Challenge: High-throughput Packet Drops
                </span>
                <p className="text-[#A1A1AA] leading-relaxed text-[11px]">
                  Processing 10Gbps stream bursts led to initial buffer congestion. Resolved by optimizing socket ring buffers in C/Go.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#050505]/60 border border-[#6EA8FE]/10 space-y-1">
                <span className="font-semibold text-[#F8F8F6] flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#6EA8FE]" />
                  Lesson: False Positive Mitigation
                </span>
                <p className="text-[#A1A1AA] leading-relaxed text-[11px]">
                  Threshold-based rules caused false alerts during scheduled backups. Implemented moving window averages for baseline normalization.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack & Action Links */}
        <div className="pt-6 border-t border-[#6EA8FE]/15 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {flagship.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#050505] text-[#A1A1AA] border border-[#6EA8FE]/20">
                {tag}
              </span>
            ))}
          </div>

          {flagship.githubUrl && (
            <a
              href={flagship.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6EA8FE] hover:bg-[#8BBEFF] text-[#050505] text-xs font-semibold transition-all duration-300 shadow-md"
            >
              <span>Explore Full Source Code</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Additional Secondary Case Studies */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[#F8F8F6] tracking-tight">
          Surveillance & Penetration Testing Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="p-8 rounded-2xl bg-[#111114] border border-[#6EA8FE]/15 hover:border-[#6EA8FE]/35 transition-all duration-300 space-y-6 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-[#6EA8FE]/10 text-[#6EA8FE] border border-[#6EA8FE]/20 font-medium">
                    {project.status}
                  </span>
                  <span className="text-xs font-mono text-[#A1A1AA]">{project.category}</span>
                </div>

                <h3 className="text-xl font-bold text-[#F8F8F6] group-hover:text-white transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#6EA8FE]/10">
                  <span className="text-[11px] font-mono text-[#6EA8FE] block">Engineering Takeaways:</span>
                  <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#6EA8FE]">&rarr;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#6EA8FE]/15 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#050505] text-[#A1A1AA] border border-[#6EA8FE]/15">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#6EA8FE] hover:text-[#8BBEFF] transition-colors"
                  >
                    <span>View Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

import React from 'react';
import { Metadata } from 'next';
import { personalInfo, certifications, experiences, techArsenal } from '@/data/resumeData';
import { Shield, GraduationCap, Award, Wrench, CheckCircle2, Terminal } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Smriti Priya Singh — B.Tech CSE (Cybersecurity)',
  description: 'Learn about Smriti Priya Singh: Aspiring Security Analyst, B.Tech CSE-CY 2026, CEHv13 Certified, Cisco Ideathon Finalist.',
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
          <Shield className="w-3.5 h-3.5" />
          <span>About Smriti Priya Singh</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Aspiring Security Analyst & TechEthix Creator
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          {personalInfo.summary}
        </p>
      </div>

      {/* Education & Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Education Box */}
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">Education & Academic Specialization</h2>
          <div>
            <h3 className="text-base font-semibold text-cyan-300">{personalInfo.education.degree}</h3>
            <p className="text-xs font-mono text-slate-400">{personalInfo.education.college} &bull; {personalInfo.education.duration}</p>
          </div>
          <div className="pt-2 space-y-2">
            <span className="text-xs font-mono text-slate-300 block">Core Coursework:</span>
            <div className="flex flex-wrap gap-1.5">
              {personalInfo.education.coursework.map((course) => (
                <span key={course} className="px-2.5 py-1 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Security Philosophy Box */}
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Terminal className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">Hands-on Security Philosophy</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            I believe effective security requires bridging offensive knowledge (CEHv13, web penetration testing) with defensive threat detection and SOC response logic.
          </p>
          <ul className="space-y-2 text-xs font-mono text-slate-300 pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Real-time anomaly detection in enterprise networks</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Surveillance & IoT network port hardening</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Active practice on TryHackMe, PicoCTF & OverTheWire</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Experience & Achievements */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <Award className="w-6 h-6 text-amber-400" />
          <span>Experience & Key Achievements</span>
        </h2>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div key={exp.role} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-white text-cyan-300">{exp.role}</h3>
                  <p className="text-xs text-slate-400 font-mono">{exp.organization} &bull; {exp.date}</p>
                </div>
                {exp.highlightBadge && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30 shrink-0 self-start sm:self-center">
                    {exp.highlightBadge}
                  </span>
                )}
              </div>

              <ul className="space-y-1.5 text-xs text-slate-300 list-disc ml-5">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Complete Certifications Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <Award className="w-6 h-6 text-cyan-400" />
          <span>Certifications & Specialized Training ({certifications.length})</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div key={cert.title} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 mt-0.5 shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-white leading-snug">{cert.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400">{cert.issuer}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${cert.badgeColor}`}>
                    {cert.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Tools Arsenal */}
      <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Technical Arsenal & Security Tools</h2>
            <p className="text-xs text-slate-400">Tools, platforms, and languages used across security labs and challenges</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 block mb-2">Offensive & Defensive Security Tools:</span>
            <div className="flex flex-wrap gap-2">
              {techArsenal.securityTools.map((tool) => (
                <span key={tool} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-200 border border-slate-800">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-mono text-purple-400 block mb-2">Platforms & Practice Labs:</span>
            <div className="flex flex-wrap gap-2">
              {techArsenal.platforms.map((plat) => (
                <span key={plat} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                  {plat}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

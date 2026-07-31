import React from 'react';
import { Metadata } from 'next';
import { personalInfo, certifications, experiences } from '@/data/resumeData';
import { Shield, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Smriti Priya Singh — B.Tech CSE (Cybersecurity)',
  description: 'Smriti Priya Singh: B.Tech in CSE (Cybersecurity Specialization) and founder of TechEthix.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121215] border border-[#27272a] text-xs font-mono text-emerald-400">
          <Shield className="w-3.5 h-3.5" />
          <span>About Smriti Priya Singh</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          B.Tech in Computer Science & Engineering (Cybersecurity)
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
          Focused on threat detection, network security defense, incident response, and offensive testing. Actively expanding practical skills through hands-on labs and educational content creation via TechEthix.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Education */}
        <div className="p-6 rounded-2xl bg-[#121215] border border-[#27272a] space-y-4">
          <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-emerald-400">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">Education</h2>
            <h3 className="text-xs font-semibold text-emerald-400 mt-1">{personalInfo.education.degree}</h3>
            <p className="text-xs text-zinc-500 font-mono mt-0.5">{personalInfo.education.college} &bull; {personalInfo.education.duration}</p>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Coursework includes Networking Fundamentals, Ethical Hacking, Cryptography, Digital Forensics, Linux, Cloud Security, and SOC Operations.
          </p>
        </div>

        {/* Focus Areas */}
        <div className="p-6 rounded-2xl bg-[#121215] border border-[#27272a] space-y-4">
          <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-emerald-400">
            <Shield className="w-4 h-4" />
          </div>
          <h2 className="text-base font-bold text-white">Security Interests</h2>
          <ul className="space-y-2 text-xs text-zinc-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Real-Time Network Anomaly Detection</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>CCTV & IoT Surveillance Defense</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>TryHackMe, PicoCTF & OverTheWire Labs</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Selected Highlights */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          <span>Selected Experience Highlights</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {experiences.map((exp) => (
            <div key={exp.role} className="p-5 rounded-2xl bg-[#121215] border border-[#27272a] space-y-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20 inline-block">
                {exp.date}
              </span>
              <h3 className="text-xs font-bold text-white leading-snug">{exp.role}</h3>
              <p className="text-[11px] text-zinc-400">{exp.organization}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Badges */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white tracking-tight">Certifications & Training</h2>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <span
              key={cert.title}
              className="px-3 py-1 rounded-full text-xs font-mono bg-[#121215] text-zinc-300 border border-[#27272a]"
            >
              {cert.title}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { personalInfo, certifications, experiences } from '@/data/resumeData';
import { Shield, Terminal, ArrowUpRight, Cpu, Lock, Award, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — Smriti Priya Singh & TechEthix',
  description: 'The personal narrative, engineering philosophy, and security research of Smriti Priya Singh.',
};

export default function AboutPage() {
  return (
    <div className="pt-36 pb-28 max-w-4xl mx-auto px-4 sm:px-6 space-y-24">
      
      {/* Narrative Hero Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#6EA8FE]">
          <Terminal className="w-4 h-4" />
          <span>SMRITI PRIYA SINGH &bull; TECHETHIX FOUNDER</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#F8F8F6] tracking-[-0.03em] leading-[1.1]">
          Building & Defending Digital Infrastructure.
        </h1>

        <p className="text-lg sm:text-xl text-[#A1A1AA] leading-relaxed font-light max-w-3xl">
          I am a Security Analyst & Defense Engineer pursuing B.Tech in CSE (Cybersecurity ’26) at Oriental College of Technology, Bhopal. My work sits at the intersection of network anomaly telemetry, CCTV surveillance hardening, and open-source cybersecurity education through TechEthix.
        </p>
      </div>

      {/* Narrative Section 1: The Origin & Mission */}
      <div className="space-y-6 border-t border-[#6EA8FE]/15 pt-12">
        <div className="text-xs font-mono text-[#6EA8FE] uppercase tracking-widest">
          01 &bull; THE ORIGIN & MISSION
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#F8F8F6] tracking-tight">
          Bridging Theoretical Security and Real-World Defense
        </h2>
        <div className="prose prose-invert max-w-none text-[#A1A1AA] leading-relaxed space-y-4 text-sm sm:text-base">
          <p>
            My journey into cybersecurity began with a simple realization: standard security theory often breaks when exposed to live network environments. While textbook models focus on perimeter firewalls, real enterprise threats quietly move laterally through unmonitored internal subnets, legacy CCTV cameras, and misconfigured IoT nodes.
          </p>
          <p>
            To address this gap, I founded <strong className="text-[#F8F8F6]">TechEthix</strong> — a YouTube platform and security journal where I document hands-on penetration testing walkthroughs, breakdown network packet anomalies, and release practical security engineering blueprints.
          </p>
        </div>
      </div>

      {/* Narrative Section 2: Technical Arsenal & Defense Philosophy */}
      <div className="space-y-8 border-t border-[#6EA8FE]/15 pt-12">
        <div className="text-xs font-mono text-[#6EA8FE] uppercase tracking-widest">
          02 &bull; DEFENSE PHILOSOPHY & ARSENAL
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#F8F8F6] tracking-tight">
          Zero-Trust Telemetry & Practical Hardening
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3 bg-[#111114] p-6 rounded-2xl border border-[#6EA8FE]/15">
            <div className="w-8 h-8 rounded-lg bg-[#6EA8FE]/10 flex items-center justify-center text-[#6EA8FE] mb-2">
              <Shield className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-[#F8F8F6]">Network & CCTV Hardening</h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Specialized in MAC address binding, 802.1X port security, and isolated VLAN architectures for IP surveillance networks across 50+ enterprise camera endpoints.
            </p>
          </div>

          <div className="space-y-3 bg-[#111114] p-6 rounded-2xl border border-[#6EA8FE]/15">
            <div className="w-8 h-8 rounded-lg bg-[#6EA8FE]/10 flex items-center justify-center text-[#6EA8FE] mb-2">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-[#F8F8F6]">Threat Telemetry & Packet Analysis</h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Building real-time packet stream anomaly analyzers (Cisco Ideathon 2025 Top 20 Finalist) using Python, Wireshark, Suricata, and custom SOC rules.
            </p>
          </div>
        </div>
      </div>

      {/* Narrative Section 3: Milestones & Honors */}
      <div className="space-y-8 border-t border-[#6EA8FE]/15 pt-12">
        <div className="text-xs font-mono text-[#6EA8FE] uppercase tracking-widest">
          03 &bull; RECOGNITION & ACADEMIC BACKDROP
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#F8F8F6] tracking-tight">
          Milestones & Education
        </h2>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="p-6 rounded-2xl bg-[#111114] border border-[#6EA8FE]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#6EA8FE]">{exp.date}</span>
                <h3 className="text-base font-bold text-[#F8F8F6]">{exp.role}</h3>
                <p className="text-xs text-[#A1A1AA]">{exp.organization}</p>
              </div>
              <Award className="w-5 h-5 text-[#6EA8FE] shrink-0" />
            </div>
          ))}

          <div className="p-6 rounded-2xl bg-[#111114] border border-[#6EA8FE]/15 space-y-2">
            <span className="text-xs font-mono text-[#6EA8FE]">ACADEMIC BACKGROUND</span>
            <h3 className="text-base font-bold text-[#F8F8F6]">{personalInfo.education.degree}</h3>
            <p className="text-xs text-[#A1A1AA]">{personalInfo.education.college} &bull; {personalInfo.education.duration}</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="border-t border-[#6EA8FE]/15 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-[#F8F8F6]">Want to discuss security or collaborate?</h3>
          <p className="text-xs text-[#A1A1AA]">Open to security analyst roles, research labs, and technical discussions.</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6EA8FE] hover:bg-[#8BBEFF] text-[#050505] font-semibold text-xs transition-all duration-300 shadow-lg"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}

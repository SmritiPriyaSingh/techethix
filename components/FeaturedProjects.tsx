'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const sampleProjects: Project[] = [
  {
    id: 'wazuh-homelab',
    slug: 'wazuh-homelab',
    title: 'Wazuh SIEM Telemetry Homelab',
    tagline: 'Self-hosted threat detection homelab monitoring Sysmon & Auditd endpoint logs.',
    description: 'A complete lab setup integrating Wazuh Manager, Sysmon event rules, and Linux auditd telemetry mapped against MITRE ATT&CK techniques.',
    category: 'Threat Detection',
    tags: ['Wazuh', 'Sysmon', 'SIEM', 'MITRE ATT&CK', 'Linux'],
    githubUrl: 'https://github.com/TechEthic/wazuh-homelab',
    featured: true,
    publishedDate: '2026-06-15'
  },
  {
    id: 'packet-analyzer',
    slug: 'packet-analyzer',
    title: 'NetGuard Packet Telemetry Analyzer',
    tagline: 'Python CLI packet inspection tool for anomalous DNS traffic & beaconing detection.',
    description: 'Fast Scapy-based PCAP parser identifying algorithmically generated domain (DGA) queries and suspicious TLS client handshakes.',
    category: 'Network Defense',
    tags: ['Python', 'Scapy', 'PCAP', 'Network Defense', 'DNS'],
    githubUrl: 'https://github.com/TechEthic/netguard-analyzer',
    featured: true,
    publishedDate: '2026-05-10'
  },
  {
    id: 'cloud-sentinel',
    slug: 'cloud-sentinel',
    title: 'AWS GuardDuty SOAR Containment Pipeline',
    tagline: 'Automated serverless incident response pipeline isolating compromised IAM credentials.',
    description: 'EventBridge and Lambda automation parsing GuardDuty findings and attaching temporary Deny policies to compromised credentials.',
    category: 'Cloud Security',
    tags: ['AWS', 'GuardDuty', 'Lambda', 'Terraform', 'Python'],
    githubUrl: 'https://github.com/TechEthic/cloud-sentinel',
    featured: true,
    publishedDate: '2026-04-20'
  }
];

export const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-16 border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Projects & Tools</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Featured Security Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View all projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 glass-panel-hover"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-cyan-400 border border-slate-700">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{project.publishedDate}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">{project.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{project.tagline}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-300 border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 text-xs">
                  <Link href="/projects" className="text-cyan-400 font-medium hover:underline">
                    View Details
                  </Link>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

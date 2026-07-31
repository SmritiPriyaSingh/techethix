import React from 'react';
import Link from 'next/link';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/resumeData';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 text-slate-400 relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/60">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <span className="text-base font-bold text-white">
                Smriti Priya Singh <span className="text-cyan-400 font-mono text-xs font-normal">/ TechEthix</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Aspiring Security Analyst | B.Tech in CSE (Cybersecurity Specialization) '26. Creator of TechEthix YouTube channel. Documenting cybersecurity research, hands-on lab notes, and network security projects.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.email}</span>
              </a>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400/50 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400/50 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-red-400/50 flex items-center justify-center text-slate-300 hover:text-red-400 transition-colors"
                aria-label="YouTube Channel @TechEthix"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">About Smriti</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-cyan-400 transition-colors">Journal</Link>
              </li>
              <li>
                <Link href="/lab-notes" className="hover:text-cyan-400 transition-colors">Lab Notes</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Certifications Quick List */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Certifications
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                <span>CEHv13 (EC-Council)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Cisco SOC Specialist</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>TWPT Web PenTester</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>EC-Council NDE / DFE / EHE</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Smriti Priya Singh. B.Tech in CSE (Cybersecurity) '26.</p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>Personal Website & Cybersecurity Journal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

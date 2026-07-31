import React from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/resumeData';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#27272a] bg-[#09090b] text-zinc-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#27272a]">
          
          <div className="space-y-1 text-center md:text-left">
            <span className="text-sm font-semibold text-white">Smriti Priya Singh</span>
            <p className="text-xs text-zinc-500">Personal Website & Cybersecurity Journal &bull; TechEthix</p>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/work" className="hover:text-white transition-colors">Work</Link>
            <Link href="/journal" className="hover:text-white transition-colors">Journal</Link>
            <Link href="/field-notes" className="hover:text-white transition-colors">Field Notes</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#121215] border border-[#27272a] hover:border-red-500/50 text-zinc-300 hover:text-red-400 transition-colors"
              aria-label="YouTube Channel"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#121215] border border-[#27272a] hover:border-zinc-500 text-zinc-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#121215] border border-[#27272a] hover:border-zinc-500 text-zinc-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Smriti Priya Singh. All rights reserved.</p>
          <p className="font-mono text-[11px]">B.Tech in CSE (Cybersecurity)</p>
        </div>
      </div>
    </footer>
  );
};

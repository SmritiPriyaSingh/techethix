import React from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/resumeData';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#6EA8FE]/15 bg-[#050505] text-[#A1A1AA] py-12 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#6EA8FE]/15">
          
          <div className="space-y-1 text-center md:text-left">
            <span className="text-sm font-semibold text-[#F8F8F6]">Smriti Priya Singh</span>
            <p className="text-xs text-[#A1A1AA]">Personal Website & Cybersecurity Blog &bull; TechEthix</p>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#A1A1AA]">
            <Link href="/" className="hover:text-[#6EA8FE] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[#6EA8FE] transition-colors">About</Link>
            <Link href="/projects" className="hover:text-[#6EA8FE] transition-colors">Projects</Link>
            <Link href="/blog" className="hover:text-[#6EA8FE] transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-[#6EA8FE] transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#111114] border border-[#6EA8FE]/15 hover:border-[#6EA8FE]/40 text-[#A1A1AA] hover:text-[#6EA8FE] transition-colors"
              aria-label="YouTube Channel"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#111114] border border-[#6EA8FE]/15 hover:border-[#6EA8FE]/40 text-[#A1A1AA] hover:text-[#F8F8F6] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#111114] border border-[#6EA8FE]/15 hover:border-[#6EA8FE]/40 text-[#A1A1AA] hover:text-[#F8F8F6] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A1A1AA]">
          <p>© {new Date().getFullYear()} Smriti Priya Singh. All rights reserved.</p>
          <p className="font-mono text-[11px]">B.Tech in CSE (Cybersecurity)</p>
        </div>
      </div>
    </footer>
  );
};

'use client';

import React from 'react';
import { Project } from '@/types';
import { ArrowUpRight, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group glass-panel-hover">
      
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-slate-800 text-cyan-400 border border-slate-700/60">
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {project.publishedDate}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
          {project.title}
        </h3>

        <p className="text-xs text-slate-400 leading-relaxed mb-5">
          {project.tagline}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Project Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="View source on GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
};

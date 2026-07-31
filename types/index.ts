export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  category: 'Cloud Security' | 'Threat Detection' | 'AppSec' | 'DevSecOps' | 'Network Defense';
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  publishedDate: string;
}

export interface JournalFrontmatter {
  title: string;
  slug: string;
  publishedAt: string;
  summary: string;
  readingTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export interface LabNoteFrontmatter {
  title: string;
  slug: string;
  category: 'Wazuh' | 'SOC Labs' | 'DFIR' | 'HTB' | 'TryHackMe' | 'Networking';
  updatedAt: string;
  summary: string;
  tags: string[];
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  category: string;
}

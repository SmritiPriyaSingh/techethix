export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  category: 'Network Security' | 'Web Security' | 'Threat Detection' | 'Ethical Hacking';
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  publishedDate: string;
  highlights: string[];
  toolsUsed: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  badgeColor?: string;
  category: 'Offensive' | 'Defensive' | 'Cloud & DevOps' | 'Fundamentals';
}

export interface ExperienceItem {
  role: string;
  organization: string;
  date: string;
  description: string[];
  highlightBadge?: string;
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

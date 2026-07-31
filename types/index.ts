export type WorkStatus = '🔒 Private' | '🚧 In Progress' | '📅 Coming Soon';

export interface WorkItem {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  status: WorkStatus;
  category: 'Network Security' | 'Web Security' | 'Threat Detection' | 'Ethical Hacking';
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
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

export interface FieldNoteFrontmatter {
  title: string;
  slug: string;
  category: 'Wazuh' | 'SOC Labs' | 'DFIR' | 'HTB' | 'TryHackMe' | 'Networking' | 'PicoCTF';
  updatedAt: string;
  summary: string;
  tags: string[];
}

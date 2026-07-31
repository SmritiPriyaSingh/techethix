import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { JournalFrontmatter, LabNoteFrontmatter } from '@/types';

const journalDir = path.join(process.cwd(), 'content/journal');
const labNotesDir = path.join(process.cwd(), 'content/lab-notes');

// --- JOURNAL FUNCTIONS ---

export interface JournalPost {
  slug: string;
  frontmatter: JournalFrontmatter;
  content: string;
}

export function getAllJournalPosts(): JournalPost[] {
  if (!fs.existsSync(journalDir)) return [];

  const fileNames = fs.readdirSync(journalDir);

  const posts = fileNames
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, '');
      const fullPath = path.join(journalDir, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: {
          title: data.title || 'Untitled',
          slug,
          publishedAt: data.publishedAt || '2025-01-01',
          summary: data.summary || '',
          readingTime: data.readingTime || '5 min read',
          category: data.category || 'General',
          tags: data.tags || [],
          featured: data.featured || false,
        } as JournalFrontmatter,
        content,
      };
    });

  return posts.sort((a, b) => new Date(b.frontmatter.publishedAt).getTime() - new Date(a.frontmatter.publishedAt).getTime());
}

export function getJournalPostBySlug(slug: string): JournalPost | null {
  try {
    const fullPathMdx = path.join(journalDir, `${slug}.mdx`);
    const fullPathMd = path.join(journalDir, `${slug}.md`);

    const fullPath = fs.existsSync(fullPathMdx) ? fullPathMdx : fs.existsSync(fullPathMd) ? fullPathMd : null;
    if (!fullPath) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: {
        title: data.title || 'Untitled',
        slug,
        publishedAt: data.publishedAt || '2025-01-01',
        summary: data.summary || '',
        readingTime: data.readingTime || '5 min read',
        category: data.category || 'General',
        tags: data.tags || [],
        featured: data.featured || false,
      } as JournalFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

// --- LAB NOTES FUNCTIONS ---

export interface LabNotePost {
  slug: string;
  frontmatter: LabNoteFrontmatter;
  content: string;
}

export function getAllLabNotes(): LabNotePost[] {
  if (!fs.existsSync(labNotesDir)) return [];

  const fileNames = fs.readdirSync(labNotesDir);

  const notes = fileNames
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, '');
      const fullPath = path.join(labNotesDir, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: {
          title: data.title || 'Untitled Lab Note',
          slug,
          category: data.category || 'Networking',
          updatedAt: data.updatedAt || '2025-01-01',
          summary: data.summary || '',
          tags: data.tags || [],
        } as LabNoteFrontmatter,
        content,
      };
    });

  return notes.sort((a, b) => new Date(b.frontmatter.updatedAt).getTime() - new Date(a.frontmatter.updatedAt).getTime());
}

export function getLabNoteBySlug(slug: string): LabNotePost | null {
  try {
    const fullPathMdx = path.join(labNotesDir, `${slug}.mdx`);
    const fullPathMd = path.join(labNotesDir, `${slug}.md`);

    const fullPath = fs.existsSync(fullPathMdx) ? fullPathMdx : fs.existsSync(fullPathMd) ? fullPathMd : null;
    if (!fullPath) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: {
        title: data.title || 'Untitled Lab Note',
        slug,
        category: data.category || 'Networking',
        updatedAt: data.updatedAt || '2025-01-01',
        summary: data.summary || '',
        tags: data.tags || [],
      } as LabNoteFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

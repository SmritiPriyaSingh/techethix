import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogFrontmatter } from '@/types';

const blogDir = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return [];

  const fileNames = fs.readdirSync(blogDir);

  const posts = fileNames
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, '');
      const fullPath = path.join(blogDir, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: {
          title: data.title || 'Untitled',
          slug,
          publishedAt: data.publishedAt || '2026-08-01',
          summary: data.summary || '',
          readingTime: data.readingTime || '5 min read',
          category: data.category || 'General',
          tags: data.tags || [],
          featured: data.featured || false,
        } as BlogFrontmatter,
        content,
      };
    });

  return posts.sort((a, b) => new Date(b.frontmatter.publishedAt).getTime() - new Date(a.frontmatter.publishedAt).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPathMdx = path.join(blogDir, `${slug}.mdx`);
    const fullPathMd = path.join(blogDir, `${slug}.md`);

    const fullPath = fs.existsSync(fullPathMdx) ? fullPathMdx : fs.existsSync(fullPathMd) ? fullPathMd : null;
    if (!fullPath) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: {
        title: data.title || 'Untitled',
        slug,
        publishedAt: data.publishedAt || '2026-08-01',
        summary: data.summary || '',
        readingTime: data.readingTime || '5 min read',
        category: data.category || 'General',
        tags: data.tags || [],
        featured: data.featured || false,
      } as BlogFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

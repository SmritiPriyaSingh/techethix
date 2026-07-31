import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getJournalPostBySlug, getAllJournalPosts } from '@/lib/mdx';
import { ArrowLeft, Calendar, Clock, Shield } from 'lucide-react';
import { personalInfo } from '@/data/resumeData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllJournalPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.frontmatter.title} — Smriti Priya Singh Journal`,
    description: post.frontmatter.summary,
  };
}

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;

  const renderMarkdown = (rawContent: string) => {
    const lines = rawContent.split('\n');
    const elements: React.ReactNode[] = [];
    let codeBlock: string[] = [];
    let inCodeBlock = false;
    let codeLang = '';

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <div key={`code-${index}`} className="my-6 rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs overflow-x-auto text-slate-200">
              {codeLang && <div className="text-[10px] text-purple-400 font-mono uppercase mb-2 border-b border-slate-800 pb-1">{codeLang}</div>}
              <pre><code>{codeBlock.join('\n')}</code></pre>
            </div>
          );
          codeBlock = [];
          inCodeBlock = false;
          codeLang = '';
        } else {
          inCodeBlock = true;
          codeLang = line.replace('```', '').trim();
        }
        return;
      }

      if (inCodeBlock) {
        codeBlock.push(line);
        return;
      }

      if (line.startsWith('# ')) {
        elements.push(<h1 key={index} className="text-3xl font-bold text-white mt-8 mb-4 tracking-tight">{line.replace('# ', '')}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-b border-slate-800 pb-2">{line.replace('## ', '')}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={index} className="text-xl font-semibold text-purple-300 mt-6 mb-3">{line.replace('### ', '')}</h3>);
      } else if (line.startsWith('- ')) {
        elements.push(<li key={index} className="ml-5 list-disc text-slate-300 text-sm leading-relaxed my-1">{line.replace('- ', '')}</li>);
      } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ')) {
        elements.push(<div key={index} className="text-slate-300 text-sm leading-relaxed my-1 font-medium">{line}</div>);
      } else if (line.trim() === '---') {
        elements.push(<hr key={index} className="border-slate-800 my-8" />);
      } else if (line.trim() !== '') {
        elements.push(<p key={index} className="text-slate-300 text-base leading-relaxed my-4">{line}</p>);
      }
    });

    return elements;
  };

  return (
    <article className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <Link
        href="/journal"
        className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to all journal writeups</span>
      </Link>

      <div className="space-y-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
            {frontmatter.category}
          </span>
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {frontmatter.publishedAt}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {frontmatter.readingTime}
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
          {frontmatter.title}
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          {frontmatter.summary}
        </p>

        <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
          <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400">
            <Shield className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-semibold text-slate-200 block">{personalInfo.name}</span>
            <span className="text-[11px] text-slate-400">Aspiring Security Analyst &bull; TechEthix</span>
          </div>
        </div>
      </div>

      <div className="prose prose-invert max-w-none space-y-2">
        {renderMarkdown(content)}
      </div>

    </article>
  );
}

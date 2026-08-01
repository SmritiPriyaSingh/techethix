import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/mdx';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.frontmatter.title} — Blog`,
    description: post.frontmatter.summary,
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

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
            <div key={`code-${index}`} className="my-6 rounded-xl bg-[#050505] border border-[#6EA8FE]/20 p-4 font-mono text-xs overflow-x-auto text-[#F8F8F6]">
              {codeLang && <div className="text-[10px] text-[#6EA8FE] font-mono uppercase mb-2 border-b border-[#6EA8FE]/20 pb-1">{codeLang}</div>}
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
        elements.push(<h1 key={index} className="text-3xl font-bold text-[#F8F8F6] mt-8 mb-4 tracking-tight">{line.replace('# ', '')}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={index} className="text-2xl font-bold text-[#F8F8F6] mt-8 mb-4 tracking-tight border-b border-[#6EA8FE]/15 pb-2">{line.replace('## ', '')}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={index} className="text-xl font-semibold text-[#6EA8FE] mt-6 mb-3">{line.replace('### ', '')}</h3>);
      } else if (line.startsWith('- ')) {
        elements.push(<li key={index} className="ml-5 list-disc text-[#A1A1AA] text-sm leading-relaxed my-1">{line.replace('- ', '')}</li>);
      } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
        elements.push(<div key={index} className="text-[#A1A1AA] text-sm leading-relaxed my-1 font-medium">{line}</div>);
      } else if (line.trim() === '---') {
        elements.push(<hr key={index} className="border-[#6EA8FE]/15 my-8" />);
      } else if (line.trim() !== '') {
        elements.push(<p key={index} className="text-[#A1A1AA] text-base leading-relaxed my-4">{line}</p>);
      }
    });

    return elements;
  };

  return (
    <article className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
      
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-mono text-[#6EA8FE] hover:text-[#8BBEFF] hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to all blog posts</span>
      </Link>

      <div className="space-y-4 pb-6 border-b border-[#6EA8FE]/15">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#6EA8FE]/10 text-[#6EA8FE] border border-[#6EA8FE]/20">
            {frontmatter.category}
          </span>
          <span className="flex items-center gap-1 text-xs font-mono text-[#A1A1AA]">
            <Calendar className="w-3.5 h-3.5 text-[#A1A1AA]" />
            {frontmatter.publishedAt}
          </span>
          <span className="flex items-center gap-1 text-xs font-mono text-[#A1A1AA]">
            <Clock className="w-3.5 h-3.5 text-[#A1A1AA]" />
            {frontmatter.readingTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#F8F8F6] tracking-tight leading-tight">
          {frontmatter.title}
        </h1>

        <p className="text-base text-[#A1A1AA] leading-relaxed">
          {frontmatter.summary}
        </p>
      </div>

      <div className="prose prose-invert max-w-none space-y-2">
        {renderMarkdown(content)}
      </div>

    </article>
  );
}

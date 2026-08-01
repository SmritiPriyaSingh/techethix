import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/mdx';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — TechEthix Cybersecurity Journal',
  description: 'Cybersecurity research, Hack The Box machine walkthroughs, network defense guides, and ethical hacking posts by Smriti Priya Singh.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="pt-36 pb-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl border-b border-[#6EA8FE]/15 pb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#6EA8FE]">
          <BookOpen className="w-4 h-4" />
          <span>TECHETHIX JOURNAL &bull; ISSUE 2026</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F8F8F6] tracking-[-0.03em] leading-tight">
          Penetration Testing & Security Research
        </h1>
        <p className="text-[#A1A1AA] text-base leading-relaxed">
          In-depth technical walkthroughs, CTF machine exploitation methodologies, CCTV surveillance defense protocols, and network threat telemetry.
        </p>
      </div>

      {/* Featured Lead Editorial Article */}
      {featuredPost && (
        <div className="space-y-4">
          <div className="text-xs font-mono text-[#6EA8FE] tracking-wider uppercase flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#6EA8FE]" />
            <span>Featured Technical Writeup</span>
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="block p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#141419] to-[#0d0d10] border border-[#6EA8FE]/25 hover:border-[#6EA8FE]/50 transition-all duration-300 group shadow-2xl"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-[#A1A1AA]">
                <span className="px-3 py-1 rounded-full bg-[#6EA8FE]/15 text-[#6EA8FE] border border-[#6EA8FE]/30 font-semibold">
                  {featuredPost.frontmatter.category}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {featuredPost.frontmatter.publishedAt}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.frontmatter.readingTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8F8F6] group-hover:text-white transition-colors leading-tight">
                {featuredPost.frontmatter.title}
              </h2>

              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-3xl">
                {featuredPost.frontmatter.summary}
              </p>

              <div className="pt-4 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {featuredPost.frontmatter.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded text-xs font-mono bg-[#050505] text-[#A1A1AA] border border-[#6EA8FE]/20">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6EA8FE] group-hover:text-[#8BBEFF] transition-colors">
                  <span>Read Walkthrough</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Secondary Articles Magazine Grid */}
      <div className="space-y-6 pt-6 border-t border-[#6EA8FE]/15">
        <h3 className="text-xl font-bold text-[#F8F8F6] tracking-tight">
          Recent Security Articles & Walkthroughs
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {remainingPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-7 rounded-2xl bg-[#111114] border border-[#6EA8FE]/15 hover:border-[#6EA8FE]/35 transition-all duration-300 flex flex-col justify-between group space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#6EA8FE]/10 text-[#6EA8FE] border border-[#6EA8FE]/20 font-medium">
                    {post.frontmatter.category}
                  </span>
                  <span>{post.frontmatter.readingTime}</span>
                </div>

                <h4 className="text-xl font-bold text-[#F8F8F6] group-hover:text-white transition-colors leading-snug">
                  {post.frontmatter.title}
                </h4>

                <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-3">
                  {post.frontmatter.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#6EA8FE]/10 flex items-center justify-between text-xs">
                <span className="font-mono text-[#A1A1AA]">{post.frontmatter.publishedAt}</span>
                <span className="text-[#6EA8FE] group-hover:text-[#8BBEFF] font-medium flex items-center gap-1">
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}

import React from 'react';
import { Hero } from '@/components/Hero';
import { NowSection } from '@/components/NowSection';
import { CurrentWorkSection } from '@/components/CurrentWorkSection';
import { LatestBlog } from '@/components/LatestBlog';
import { TechEthixSection } from '@/components/TechEthixSection';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <NowSection />
      <CurrentWorkSection />
      <LatestBlog />
      <TechEthixSection />
    </div>
  );
}

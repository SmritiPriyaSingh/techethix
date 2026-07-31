import React from 'react';
import { Hero } from '@/components/Hero';
import { TechEthicSection } from '@/components/TechEthicSection';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { LatestJournal } from '@/components/LatestJournal';
import { LabNotesPreview } from '@/components/LabNotesPreview';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <FeaturedProjects />
      <LatestJournal />
      <LabNotesPreview />
      <TechEthicSection />
    </div>
  );
}

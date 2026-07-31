import React from 'react';
import { Hero } from '@/components/Hero';
import { CertificationsSection } from '@/components/CertificationsSection';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { LatestJournal } from '@/components/LatestJournal';
import { LabNotesPreview } from '@/components/LabNotesPreview';
import { TechEthixSection } from '@/components/TechEthixSection';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <CertificationsSection />
      <FeaturedProjects />
      <LatestJournal />
      <LabNotesPreview />
      <TechEthixSection />
    </div>
  );
}

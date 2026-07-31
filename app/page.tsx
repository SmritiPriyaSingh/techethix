import React from 'react';
import { Hero } from '@/components/Hero';
import { CurrentWorkSection } from '@/components/CurrentWorkSection';
import { LatestJournal } from '@/components/LatestJournal';
import { FieldNotesPreview } from '@/components/FieldNotesPreview';
import { TechEthixSection } from '@/components/TechEthixSection';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <CurrentWorkSection />
      <LatestJournal />
      <FieldNotesPreview />
      <TechEthixSection />
    </div>
  );
}

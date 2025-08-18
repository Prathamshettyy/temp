'use client';

import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Education } from '@/components/education';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Achievements } from '@/components/achievements';
import { Activities } from '@/components/activities';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    // REMOVED "bg-background" from this div
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Activities />
      </main>
      <Footer />
    </div>
  );
}
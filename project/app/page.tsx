'use client';

import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Education } from '@/components/education';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Achievements } from '@/components/achievements';
import { Activities } from '@/components/activities';
// No longer import Contact here
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
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
        {/* <Contact /> component is removed from here */}
      </main>
      <Footer />
    </div>
  );
}
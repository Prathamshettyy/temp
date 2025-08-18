'use client';

import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.card-entry-animation');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    // CHANGE: Removed "bg-background" from this line
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a passionate Computer Science Engineering student with expertise in full-stack development and AI/ML
          </p>
        </div>

        <div ref={sectionRef} className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="card-entry-animation">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing Bachelor's of Engineering in Computer Science & Engineering at
                  Sahyadri College of Engineering And Management, Mangaluru with a CGPA of 9.01.
                  I'm passionate about building innovative web applications and exploring AI/ML technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="card-entry-animation">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What Drives Me</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in creating technology solutions that solve real-world problems. From developing
                  healthcare applications to AI-powered plant disease detection systems, I enjoy working on
                  projects that make a meaningful impact.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="card-entry-animation">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Areas of Interest</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl mb-2">🚀</div>
                    <div className="font-medium">Full Stack Development</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl mb-2">🤖</div>
                    <div className="font-medium">AI/ML</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl mb-2">🎨</div>
                    <div className="font-medium">UI/UX Design</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="font-medium">Open Source</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
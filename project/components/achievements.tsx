'use client';

import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, Award } from 'lucide-react';

const achievements = [
  {
    title: 'Best Innovation Award - Aetherion 2025',
    date: 'March 2025',
    description: 'Awarded for presenting the most innovative tech solution at Aetherion 2025, a hackathon organized under Aakriti at Canara Engineering College.',
    type: 'Award',
  },
  {
    title: 'Certified in Programming in Modern C++',
    date: 'Jan 2024 - Apr 2024',
    description: 'Earned certification after successfully completing coursework and clearing the proctored exam in this 12-week course on advanced C++ concepts.',
    organization: 'NPTEL, IIT Kharagpur',
    type: 'Certification',
  },
];

export function Achievements() {
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
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition and certifications earned throughout my academic journey
          </p>
        </div>

        <div ref={sectionRef} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow card-entry-animation">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl flex items-center gap-3">
                      {achievement.type === 'Award' ? (
                        <Trophy className="h-6 w-6 text-yellow-600" />
                      ) : (
                        <Award className="h-6 w-6 text-blue-600" />
                      )}
                      {achievement.title}
                    </CardTitle>
                    {achievement.organization && (
                      <p className="text-muted-foreground font-medium">{achievement.organization}</p>
                    )}
                  </div>
                  <Badge variant={achievement.type === 'Award' ? 'default' : 'secondary'}>
                    {achievement.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {achievement.date}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

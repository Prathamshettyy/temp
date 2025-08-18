'use client';

import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Wrench, Users, BookOpen, Heart } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: ['VS Code', 'Git', 'GitHub', 'Postman', 'Figma', 'Canva'],
  },
  {
    title: 'Frameworks',
    icon: Database,
    skills: ['React.js', 'Flask', 'Bootstrap'],
  },
  {
    title: 'Cloud/Databases',
    icon: Cloud,
    skills: ['Google Cloud Platform', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Team Collaboration', 'Communication', 'Problem-Solving', 'Leadership'],
  },
  {
    title: 'Coursework',
    icon: BookOpen,
    skills: ['Data Structures and Algorithms', 'Operating Systems', 'DBMS', 'OOP', 'CN'],
  },
  {
    title: 'Areas of Interest',
    icon: Heart,
    skills: ['Full Stack Development', 'AI/ML', 'Open Source', 'UI/UX Design'],
  },
];

export function Skills() {
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
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Technical Skills & Interests
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and areas of interest in software development
          </p>
        </div>

        <div ref={sectionRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="group p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:shadow-black/10 dark:hover:shadow-black/25 card-entry-animation"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="text-xs px-2 py-1 transition-all duration-200 hover:scale-105 hover:shadow-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

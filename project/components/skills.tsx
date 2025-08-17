'use client';

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
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills & Interests</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My technical expertise and areas of interest in software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                      <IconComponent className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
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
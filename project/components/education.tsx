'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    institution: 'Sahyadri College of Engineering And Management, Mangaluru',
    degree: "Bachelor's of Engineering - Computer Science & Engineering",
    period: '2022 - Present',
    score: 'CGPA: 9.01',
    location: 'Mangaluru',
  },
  {
    institution: "Alva's Pre-University College, Moodubidire",
    degree: 'Senior Secondary (12th) - Department of Pre-University Education',
    period: '2020 - 2022',
    score: 'Percentage: 91.83%',
    location: 'Moodubidire',
  },
  {
    institution: "St Dominic's School, Mariashram, Badakabail",
    degree: 'Secondary School (SSLC) - CBSE',
    period: '2019 - 2020',
    score: 'Percentage: 79.8%',
    location: 'Badakabail',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey in computer science and engineering
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{edu.institution}</CardTitle>
                    <p className="text-muted-foreground">{edu.degree}</p>
                  </div>
                  <Badge variant="secondary" className="ml-4">
                    <GraduationCap className="mr-1 h-3 w-3" />
                    {edu.score}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Heart } from 'lucide-react';

const activities = [
  {
    title: 'Road Safety Awareness Initiative',
    date: 'Nov 2024',
    description: 'Conducted an NSS-driven session at Vittal PU College reaching 50+ students on traffic rules, pedestrian safety, and emergency preparedness using interactive discussions and demonstrations.',
    impact: '50+ students reached',
    type: 'Community Service',
  },
  {
    title: 'Sahyadri Science Talent Hunt 2024',
    date: 'Nov 2024',
    description: 'Assisted in the registration process for 100+ participants by contacting and verifying student details, providing event information, and ensuring a smooth enrollment experience for participants.',
    impact: '100+ participants assisted',
    type: 'Event Organization',
  },
];

export function Activities() {
  return (
    <section id="activities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Extra-Curricular Activities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Community involvement and leadership activities beyond academics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Heart className="h-6 w-6 text-red-500" />
                      {activity.title}
                    </CardTitle>
                  </div>
                  <Badge variant="secondary">
                    {activity.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {activity.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {activity.impact}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
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
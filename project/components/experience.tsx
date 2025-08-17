'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional experience and internships
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-12 text-center">
            <div className="mb-6">
              <Briefcase className="h-16 w-16 mx-auto text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Experience Section Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              This section will be updated with professional experience and internship details.
            </p>
            <Badge variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Updates Coming Soon
            </Badge>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
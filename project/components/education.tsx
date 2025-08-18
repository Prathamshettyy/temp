'use client';

import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, School, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

const education = [
  {
    institution: "St Dominic's School, Mariashram, Badakabail",
    degree: 'Secondary School (SSLC) - CBSE',
    period: '2019 - 2020',
    score: 'Percentage: 79.8%',
    location: 'Badakabail',
    icon: School,
  },
  {
    institution: "Alva's Pre-University College, Moodubidire",
    degree: 'Senior Secondary (12th) - Department of Pre-University Education',
    period: '2020 - 2022',
    score: 'Percentage: 91.83%',
    location: 'Moodubidire',
    icon: GraduationCap,
  },
  {
    institution: 'Sahyadri College of Engineering And Management, Mangaluru',
    degree: "Bachelor's of Engineering - Computer Science & Engineering",
    period: '2022 - Present',
    score: 'CGPA: 9.01',
    location: 'Mangaluru',
    icon: Building,
  },
];

export function Education() {
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        
        const visibleStart = Math.max(0, screenHeight - top);
        const visibleHeight = Math.min(visibleStart, height);
        
        const currentProgress = Math.min(100, (visibleHeight / height) * 100);
        setProgress(currentProgress);
      }
    };

    // Updated Intersection Observer to re-trigger animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            // Remove the class when the element is not visible
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    // CHANGE: Removed "bg-muted/30" from this line
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey from school to my current engineering degree.
          </p>
        </div>

        <div ref={timelineRef} className="relative timeline-container">
          <div className="timeline-line-bg"></div>
          <div className="timeline-line-progress" style={{ height: `${progress}%` }}></div>
          
          <div className="flex flex-col items-center">
            {education.map((edu, index) => {
              const isCurrent = edu.period.includes('Present');
              const IconComponent = edu.icon;

              return (
                <div 
                  key={index} 
                  ref={el => itemRefs.current[index] = el}
                  className="timeline-item-wrapper card-entry-animation"
                >
                  <div className={cn("timeline-dot", isCurrent && "timeline-dot-current")}>
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <div className="timeline-card">
                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-foreground">{edu.institution}</h3>
                        <Badge variant="secondary" className="whitespace-nowrap mt-2 sm:mt-0">
                          {edu.score}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{edu.degree}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import torsecureLogo from '/torsecure-logo.png';

const experiences = [
  {
    company: 'Torsecure Cyber LLP',
    role: 'Technical Intern',
    domain: 'Cybersecurity',
    type: 'On-site',
    period: 'July 2025 – Present',
    logo: torsecureLogo,
    website: 'https://www.torsecure.com/',
    tasks: [
      'Performing penetration testing and vulnerability assessments.',
      'Conducting API security testing using tools like Burp Suite Pro, OWASP ZAP, Nmap, and Postman.',
      'Utilizing Kali Linux for various security-related tasks.',
      'Contributing to the Cybersafegirl 7.0 project.',
      'Enhancing skills through official PortSwigger Burp Suite training.',
    ],
    skills: ['Penetration Testing', 'Vulnerability Assessment', 'API Security', 'Burp Suite Pro', 'OWASP ZAP', 'Nmap', 'Kali Linux']
  }
];

export function Experience() {
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
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my hands-on roles, responsibilities, and skills gained through real-world work experience.
          </p>
        </div>

        <div ref={sectionRef} className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl card-entry-animation">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex items-center gap-4">
                    <a href={exp.website} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={56}
                        height={56}
                        className="rounded-md border bg-white p-1"
                      />
                    </a>
                    <div className="space-y-1">
                      <a href={exp.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <CardTitle className="text-2xl">{exp.company}</CardTitle>
                      </a>
                      <p className="text-muted-foreground font-semibold text-lg">{exp.role} ({exp.domain})</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {exp.period}
                    </div>
                    <Badge variant="outline">{exp.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <div className="space-y-4 mb-6">
                  {exp.tasks.map((task, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{task}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

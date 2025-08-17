'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Vriksha Rakshak',
    period: 'Feb 2025 - Mar 2025',
    description: 'AI-powered plant disease detection app using a PyTorch CNN with real-time diagnosis and remedy suggestions.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'Flask', 'PyTorch', 'REST API'],
    achievements: [
      'Developed an AI-powered plant disease detection app using a PyTorch CNN',
      'Created a Flask REST API to serve predictions and integrated it with Next.js + TypeScript frontend',
      'Enabled image uploads, real-time diagnosis, and remedy suggestions',
      'Deployed full-stack solution on Heroku with seamless backend integration',
    ],
  },
  {
    title: 'ProMed',
    period: 'Sept 2024 - Dec 2024',
    description: 'Web application addressing medicine expiry issues by scanning QR codes on tablet foil covers.',
    technologies: ['Flask', 'SQLite', 'HTML', 'CSS', 'PyQRCode'],
    achievements: [
      'Addressed expiry dates cut off when taking part of a medicine strip',
      'Developed QR code scanning system for medicine name, expiry date retrieval',
      'Designed SQLite database for secure medicine records and user authentication',
      'Deployed using Cloudflared tunneling for secure public access',
      'Optimized queries by 30% and validated inputs in Flask for reliability',
    ],
  },
  {
    title: 'Brain Buzz',
    period: 'Dec 2024 - Jan 2025',
    description: 'Comprehensive quiz platform for students and teachers with score tracking and analytics.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'PHPMailer'],
    achievements: [
      'Developed quiz platform for students to take quizzes, track scores, and view leaderboards',
      'Enabled teachers to create, manage, and analyze quizzes with database-driven storage',
      'Built MySQL database for quizzes, scores, and user data',
      'Implemented authentication and email notifications using PHPMailer',
      'Used AJAX for async quiz submissions, boosting load efficiency by 25%',
    ],
  },
];

export function Projects() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development projects and technical achievements
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-black/10 dark:hover:shadow-black/25"
            >
              <CardHeader className="pb-6">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <CardTitle className="text-3xl mb-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.period}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="transition-all duration-200 hover:scale-105"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="transition-all duration-200 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex} 
                        className="flex items-start"
                      >
                        <span className="text-primary mr-3 mt-1 text-lg">•</span>
                        <span className="text-muted-foreground leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-foreground">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="px-3 py-1 transition-all duration-200 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
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
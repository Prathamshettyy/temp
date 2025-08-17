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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my development projects and technical achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {project.period}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
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
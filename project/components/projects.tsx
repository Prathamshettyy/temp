'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket } from 'lucide-react';
import vrikshaRakshakImage from 'components/images/vriksha-rakshak.png';
import promedImage from 'components/images/promed.png';
import brainbuzzImage from 'components/images/brainbuzz.png';
import helpnowAiImage from 'components/images/helpnow-ai.png'; // New image import

const projects = [
    {
        title: 'Vriksha Rakshak',
        period: 'Feb 2025 - Mar 2025',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'Flask', 'PyTorch'],
        description: 'Vriksha Rakshak is an AI-powered app that uses CNN to identify plant diseases from images and suggests treatments... ',
        image: vrikshaRakshakImage,
        githubLink: 'https://github.com/Prathamshettyy/VrikshaRakshak',
        liveDemoLink: 'https://vriksha-rakshak.vercel.app/',
    },
    {
        title: 'ProMed',
        period: 'Sept 2024 - Dec 2024',
        technologies: ['Flask', 'SQLAlchemy', 'MySQL', 'PyQRCode', 'APScheduler', 'JavaScript'],
        description: 'ProMed is a web application that enables healthcare providers and individuals to record, retrieve and monitor medicine information using QR codes....',
        image: promedImage,
        githubLink: 'https://github.com/Prathamshettyy/PROMED',
        liveDemoLink: 'https://promed.pythonanywhere.com/',
    },
    {
        title: 'Brain Buzz',
        period: 'Dec 2024 - Jan 2025',
        technologies: ['PHP', 'PostgreSQL', 'MySQL', 'Docker', 'PHPMailer', 'JavaScript'],
        description: 'Brain Buzz is a web-based Quiz Management System designed to facilitate seamless interactions between students and teachers....',
        image: brainbuzzImage,
        githubLink: 'https://github.com/Prathamshettyy/Brain-Buzz',
        liveDemoLink: 'https://brain-buzz.onrender.com/',
    },
    {
        title: 'HelpNow AI',
        period: 'Dec 2024 - Jan 2025',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Cerebras API', 'Pollinations.ai'],
        description: 'AI-powered emergency guidance system with voice recognition and real-time step-by-step medical assistance....',
        image: helpnowAiImage,
        githubLink: 'https://github.com/Prathamshettyy/helpnow-ai',
        liveDemoLink: 'https://helpnow-ai.vercel.app/',
    }
];

export function Projects() {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion.
          </p>
        </div>

        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card card-entry-animation">
              <div className="project-card-image-container">
                <Image src={project.image} alt={`${project.title} screenshot`} layout="fill" objectFit="cover" className="project-card-image" />
              </div>
              <div className="project-card-content">
                <div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{project.period}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="read-more-link">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                  <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="btn-3d-rocket">
                    <Rocket className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

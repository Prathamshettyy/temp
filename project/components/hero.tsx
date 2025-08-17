'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Linkedin, Github, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="px-4 py-2">
              Computer Science Engineering Student
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Pratham R Shetty
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about Full Stack Development & AI/ML. Building innovative solutions with modern technologies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Bantwal, Karnataka, India
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +91-9480242018
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              prathamshetty329@gmail.com
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="px-8">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://linkedin.com/in/prathamrshetty" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Prathamshettyy" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Linkedin, Github, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className={cn(
        'min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative',
        'transition-all duration-1000',
        isLoaded ? 'opacity-100' : 'opacity-0'
      )} 
      id="home"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated badge */}
        <Badge 
          variant="secondary" 
          className={cn(
            'mb-8 text-sm px-4 py-2 floating glow-border',
            'transition-all duration-700 delay-200',
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
        >
          Computer Science Engineering Student
        </Badge>

        {/* Main heading with gradient text */}
        <h1 
          className={cn(
            'text-5xl sm:text-6xl lg:text-7xl font-bold mb-6',
            'bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent',
            'transition-all duration-700 delay-400',
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          Pratham R Shetty
        </h1>

        {/* Description */}
        <p 
          className={cn(
            'text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed',
            'transition-all duration-700 delay-600',
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          Passionate about Full Stack Development & AI/ML. Building innovative solutions with modern technologies.
        </p>

        {/* Action buttons */}
        <div 
          className={cn(
            'flex flex-col sm:flex-row gap-4 justify-center mb-16',
            'transition-all duration-700 delay-800',
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <Button 
            size="lg" 
            className="btn-enhanced glow-border group text-lg px-8 py-3"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="btn-enhanced glow-border text-lg px-8 py-3"
          >
            View Projects
          </Button>
        </div>

        {/* Contact information */}
        <div 
          className={cn(
            'grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto',
            'transition-all duration-700 delay-1000',
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <div className="enhanced-card p-6 group">
            <div className="flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
              <MapPin className="w-5 h-5 mr-3 text-primary" />
              <span>Bantwal, Karnataka, India</span>
            </div>
          </div>

          <div className="enhanced-card p-6 group">
            <div className="flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
              <Phone className="w-5 h-5 mr-3 text-primary" />
              <span>+91-9480242018</span>
            </div>
          </div>

          <div className="enhanced-card p-6 group">
            <div className="flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
              <Mail className="w-5 h-5 mr-3 text-primary" />
              <span>prathamshetty329@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div 
          className={cn(
            'flex justify-center space-x-6 mt-12',
            'transition-all duration-700 delay-1200',
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="glow-border hover:bg-primary/10 hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="glow-border hover:bg-primary/10 hover:scale-110 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div 
          className={cn(
            'absolute bottom-8 left-1/2 transform -translate-x-1/2',
            'transition-all duration-700 delay-1400',
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
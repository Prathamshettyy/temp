'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { SparkleText } from './sparkle-text';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        {/* All background glow effects have been removed from here */}
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

        {/* Sparkle Text Effect */}
        <div 
          className={cn(
            'flex justify-center mt-12',
            'transition-all duration-700 delay-1000',
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <SparkleText />
        </div>
      </div>
      
      {/* Scroll indicator that links to the next section */}
      <a 
        href="#about"
        onClick={handleScrollClick}
        className={cn(
          'absolute bottom-4 left-1/2 -translate-x-1/2',
          'transition-all duration-700 delay-1400',
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        )}
      >
        <div className="scroll-indicator">
          <ChevronDown className="h-6 w-6" />
          <ChevronDown className="h-6 w-6" />
          <ChevronDown className="h-6 w-6" />
        </div>
      </a>
    </section>
  );
}

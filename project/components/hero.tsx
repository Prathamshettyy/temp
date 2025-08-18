'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SparkleText } from './sparkle-text';

export function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentTextRef = textRef.current;
    if (currentTextRef) {
      observer.observe(currentTextRef);
    }

    return () => {
      if (currentTextRef) {
        observer.unobserve(currentTextRef);
      }
    };
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-fluid-container" id="home">
      {/* The canvas element is now removed from here */}
      <div ref={textRef} className="hero-fluid-text">
        <p className={cn('subtitle', { 'animate-in': isInView })}>YOU'RE NOW VIEWING</p>
        <h1 className={cn('title-name', { 'animate-in': isInView })}>PRATHAM'S</h1>
        <h1 className={cn('title-folio', { 'animate-in': isInView })}>PORTFOLIO</h1>
        
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
      
      <a 
        href="#about"
        onClick={handleScrollClick}
        className={cn(
          'absolute bottom-4 left-1/2 -translate-x-1/2 z-20',
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
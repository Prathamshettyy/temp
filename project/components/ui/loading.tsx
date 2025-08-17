'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Page loading animation for first visit only
export function PageLoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasLoaded = sessionStorage.getItem('hasLoaded');

    if (hasLoaded) {
      // Skip loading if already loaded in this session
      setIsLoading(false);
      return;
    }

    // Show loading for 2 seconds on first visit
    const loadingTimer = setTimeout(() => {
      setFadeOut(true);
      sessionStorage.setItem('hasLoaded', 'true');

      // Remove loading screen after fade out
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-800',
        fadeOut ? 'opacity-0' : 'opacity-100'
      )}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center">
        {/* Name with typing animation */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground typewriter">
            Pratham R Shetty
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded loading-bar" />
        </div>

        {/* Loading spinner */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-muted rounded-full animate-spin border-t-primary" />
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-ping border-t-primary/20" />
          </div>
        </div>

        {/* Loading text */}
        <p className="text-muted-foreground text-lg font-medium loading-dots">
          Loading Portfolio
        </p>

        {/* Progress indicator */}
        <div className="mt-6 w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full progress-fill" />
        </div>
      </div>

      <style jsx>{`
        .typewriter {
          border-right: 2px solid;
          animation: typewriter 1.5s steps(15) forwards, blink-caret 0.75s step-end infinite;
          white-space: nowrap;
          overflow: hidden;
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: currentColor; }
        }

        .loading-bar {
          animation: loadBar 2s ease-in-out forwards;
          transform-origin: left;
          transform: scaleX(0);
        }

        @keyframes loadBar {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        .loading-dots::after {
          content: '';
          animation: dots 1.5s steps(3, end) infinite;
        }

        @keyframes dots {
          0%, 20% { content: ''; }
          40% { content: '.'; }
          60% { content: '..'; }
          80%, 100% { content: '...'; }
        }

        .progress-fill {
          animation: progress 2s ease-in-out forwards;
          transform: translateX(-100%);
        }

        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

// Wrapper component to add loading to your app
export function PageWithLoading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageLoadingAnimation />
      {children}
    </>
  );
}

// Generic loading components (bonus - if you need simple loaders elsewhere)
export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  return (
    <div className={cn(
      "border-4 border-muted rounded-full animate-spin border-t-primary",
      sizeClasses[size]
    )} />
  );
}

export function LoadingDots() {
  return (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
    </div>
  );
}
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SparkleText } from './sparkle-text';

// The main Hero component with an interactive fluid background
export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null); // Ref for the text container
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false); // State to track visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when intersection changes
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
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


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // --- Fluid Simulation Logic ---
    const pointer = {
      x: 0.5 * width,
      y: 0.5 * height,
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      history: { x: number; y: number }[];
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.history = [{ x: this.x, y: this.y }];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.history = [{ x: this.x, y: this.y }];
        }

        const dx = this.x - pointer.x;
        const dy = this.y - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 300) {
          const force = -10 / (distance + 1);
          this.vx += force * (dx / distance);
          this.vy += force * (dy / distance);
        }
        
        this.vx *= 0.95;
        this.vy *= 0.95;

        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > 5) {
          this.history.shift();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 1; i < this.history.length; i++) {
          ctx.lineTo(this.history[i].x, this.history[i].y);
        }
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(138, 43, 226, 0.5)`; // BlueViolet with opacity
        ctx.stroke();
      }
    }

    const particles = Array.from({ length: 300 }, () => new Particle(Math.random() * width, Math.random() * height));

    let animationFrameId: number;
    function animate() {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(12, 0, 20, 0.1)'; // Fading effect
      ctx.fillRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // --- Event Listeners ---
    const handleMouseMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles.forEach(p => {
        p.x = Math.random() * width;
        p.y = Math.random() * height;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
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
      <canvas ref={canvasRef} id="fluid-canvas"></canvas>
      <div ref={textRef} className="hero-fluid-text">
        <p className={cn('subtitle', { 'animate-in': isInView })}>YOU'RE NOW VIEWING</p>
        <h1 className={cn('title-name', { 'animate-in': isInView })}>PRATHAM'S</h1>
        <h1 className={cn('title-folio', { 'animate-in': isInView })}>PORTFOLIO</h1>
        
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
          'absolute bottom-4 left-1/2 -translate-x-1/2 z-20', // Increased z-index
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

'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

// This is a React component that wraps the Sparklify vanilla JS class.
export function SparkleText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // We only want to run this once on the client after the component mounts.
    const container = containerRef.current;
    if (!container) return;

    // A class to handle the particle animation logic.
    class Sparklify {
      parentElement: HTMLElement;
      particlesCount: number;
      dispersionCount: number;
      animationContainer: HTMLElement | null = null;

      constructor(parentElement: HTMLElement, particlesCount = 40) {
        this.parentElement = parentElement;
        this.particlesCount = particlesCount;
        this.dispersionCount = 7;
        this.setup();
      }
      
      // Helper to create DOM elements
      createElement(tag: keyof HTMLElementTagNameMap, className?: string) {
        const element = document.createElement(tag);
        element.className = className || '';
        return element;
      }
      
      // Generate random coordinates for particle dispersion
      generateRandomAngularCoordinates() {
        const radius = 50;
        const theta = (360 / this.particlesCount / 180) * Math.round(Math.random() * this.particlesCount) * Math.PI;
        const x = radius - Math.round(radius * Math.cos(theta));
        const y = radius + Math.round(radius * Math.sin(theta));
        return { x, y };
      }
      
      // Generate random shift for particles
      generateRandomDispersion() {
        const direction = Math.round(Math.random()) ? 1 : -1;
        return direction * (Math.random() * this.dispersionCount);
      }
      
      // Apply random positions and delays to a particle
      handleParticle(item: HTMLElement) {
        const { x, y } = this.generateRandomAngularCoordinates();
        item.style.top = `${Math.random() * 100}%`;
        item.style.left = `${Math.random() * 100}%`;
        item.style.setProperty('--sparklify-angular-x', `${x + this.generateRandomDispersion()}%`);
        item.style.setProperty('--sparklify-angular-y', `${y + this.generateRandomDispersion()}%`);
        item.style.animationDelay = `${Math.random() * 2}s`;
      }
      
      // Initialize the effect
      setup() {
        this.parentElement.classList.add('sparklify-parent');
        
        const placement = this.createElement('div', 'animation-container-placement');
        const transform = this.createElement('div', 'animation-container-transform full');
        this.animationContainer = this.createElement('div', 'animation-container full');
        
        this.parentElement.appendChild(placement);
        placement.appendChild(transform);
        transform.appendChild(this.animationContainer);

        for (let i = 0; i < this.particlesCount; i++) {
          const particle = this.createElement('i');
          this.animationContainer.appendChild(particle);
          this.handleParticle(particle);
        }
      }
    }
    
    // Create an instance of the class
    const sparkleInstance = new Sparklify(container);

  }, []); // Empty dependency array ensures this runs only once.

  const handleTextClick = () => {
    router.push('/contact');
  };

 return (
    <div 
      ref={containerRef} 
      className="text" 
      onClick={handleTextClick} 
      style={{ cursor: 'pointer' }}
    >
      <div className="content">
        Secret spot unlocked. <br /> Let&apos;s chat.
      </div>
    </div>
  );
}
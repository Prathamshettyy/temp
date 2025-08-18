'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

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
        // Adjust color based on theme
        if (theme === 'dark') {
          ctx.strokeStyle = 'rgba(138, 43, 226, 0.5)'; // BlueViolet for dark mode
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'; // Whitish for light mode, further reduced opacity
        }
        ctx.stroke();
      }
    }

    const particles = Array.from({ length: 300 }, () => new Particle(Math.random() * width, Math.random() * height));

    let animationFrameId: number;
    function animate() {
      if (!ctx) return;
      // Adjust background based on theme
       if (theme === 'dark') {
        ctx.fillStyle = 'rgba(12, 0, 20, 0.1)'; // Fading effect for dark
      } else {
        ctx.fillStyle = 'rgba(70, 90, 80, 0.10)'; // Even lighter charcoal for light mode
      }
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} id="fluid-canvas-background"></canvas>;
}
'use client';

import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="mb-8" />
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            © 2024 Pratham R Shetty. All rights reserved.
          </p>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
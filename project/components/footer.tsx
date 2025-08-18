'use client';

import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <p className="text-xs text-muted-foreground mx-auto">
            © {new Date().getFullYear()} Pratham R Shetty. All rights reserved.
            </p>
          </div>
        </div>
    </footer>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { PageWithLoading } from '@/components/ui/loading';
import { FluidBackground } from '@/components/fluid-background'; // Import the new component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pratham R Shetty - Portfolio',
  description: 'Computer Science Engineering student specializing in Full Stack Development and AI/ML',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <FluidBackground /> {/* Add the fluid background here */}
          <PageWithLoading>
            {children}
          </PageWithLoading>
        </ThemeProvider>
      </body>
    </html>
  );
}
import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navigation/navbar';
import { Toaster } from '@/components/ui/toaster';
import { SplashCursor } from '@/components/splash-cursor';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Patchonaut - Autopilot for Patches',
  description: 'DevOps on Cruise Control',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider>
          <div className="min-h-screen bg-background">
          <SplashCursor />
            <Navbar />
            <main>{children}</main>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
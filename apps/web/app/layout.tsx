import '@it-diots/ui/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@ui/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web',
  description: 'Web',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full">
      <body className={cn(inter.className, 'h-full')}>{children}</body>
    </html>
  );
}

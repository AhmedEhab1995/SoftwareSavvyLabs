"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import DirectionWrapper from './DirectionWrapper';

const inter = Inter({ subsets: ['latin'] });

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
          disableTransitionOnChange
        >
          <DirectionWrapper>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </DirectionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

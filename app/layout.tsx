"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import DirectionWrapper from "./DirectionWrapper";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} relative min-h-screen bg-background text-foreground`}
      >
        {/* Global Background Layers */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/40 to-background" />

        {/* Optional: Noise texture overlay (add noise.png in /public/textures/) */}
        <div className="absolute inset-0 -z-10 bg-[url('/images/noise.png')] opacity-10" />

        {/* Dark mode subtle radial glow */}
        <div className="absolute inset-0 -z-10 dark:bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05),_transparent)]" />

        {/* Content */}
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

import { FC, PropsWithChildren } from "react";
import { Navbar, Footer } from "@/components/layout";
import { NavigationProgress } from "@/components/common";
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Santiago Martinez - Full Stack Developer",
  description:
    "Portafolio profesional de Santiago Martinez, Full Stack Developer especializado en React, Node.js y TypeScript",
  keywords: ["desarrollador", "full stack", "react", "nodejs", "typescript", "portfolio"],
  authors: [{ name: "Santiago Martinez" }],
  creator: "Santiago Martinez",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://santiagomartinez.dev",
    title: "Santiago Martinez - Full Stack Developer",
    description: "Portafolio profesional de Santiago Martinez",
    siteName: "Santiago Martinez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago Martinez - Full Stack Developer",
    description: "Portafolio profesional de Santiago Martinez",
    creator: "@santiagomartinez",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0C0C2A',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* Precarga de iconos críticos */}
        <link rel="preload" href="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" as="image" />
        <link rel="preload" href="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" as="image" />

        {/* Favicon y meta etiquetas */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="//picsum.photos" />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden font-sans`}>
        <NavigationProgress />
        <Navbar />
        <main className="pt-16 min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
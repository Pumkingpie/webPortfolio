import { FC, PropsWithChildren } from "react";
import { Navbar, Footer } from "@/components/layout";
import { NavigationProgress } from "@/components/common";
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
  variable: '--font-inter',
});

export const metadata = {
  title: 'Santiago Martinez - Desarrollador Full Stack',
  description: 'Portafolio de Santiago Martinez, desarrollador full-stack',
  keywords: ['React', 'Next.js', 'TypeScript', 'Full Stack'],
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
'use client';
import { OptimizedLink } from '@/components/common';
import { motion } from 'framer-motion';
import { FileText } from "lucide-react"
import { Suspense, lazy } from 'react';
import CursorReflection from '@/components/common/CursorReflection';

// Lazy load components para mejorar LCP
const FloatingPaper = lazy(() => import("@/components/floating-paper").then(module => ({ default: module.FloatingPaper })));
const RoboAnimation = lazy(() => import("@/components/robo-animations").then(module => ({ default: module.RoboAnimation })));

// Componente SplitText optimizado
const SplitText = ({ children, className = "", delay = 0, rainbow = true }: { children: string, className?: string, delay?: number, rainbow?: boolean }) => {
  const words = children.split(' ');

  return (
    <div className={`${className} overflow-hidden`}>
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="inline-block mr-1">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className={`inline-block${rainbow ? ' rainbow-text' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: delay + (wordIndex * 0.05) + (charIndex * 0.02),
                ease: "easeOut"
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
};

// Configuración común de transición
const transitionConfig = {
  duration: 1.5,
  ease: "easeInOut" as const,
};

function Hero() {
  return (
    <section className="w-full px-4 min-h-screen flex items-center justify-center pt-16 md:pt-24 pb-16 overflow-hidden relative">
      <CursorReflection />
      {/* Elementos de fondo animados - Lazy loaded */}
      <Suspense fallback={null}>
        <FloatingPaper count={6} />
        <RoboAnimation />
      </Suspense>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col items-center text-center space-y-8 w-full">
          <div className="space-y-6 w-full max-w-5xl">
            <motion.div
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={transitionConfig}
            >
              <SplitText delay={0.2} className="text-white" rainbow={false}>
                DesataTu Creatividad con Soluciones
              </SplitText>{' '}
              <motion.span
                className="text-[#6765F0]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                <SplitText delay={1.0}>
                  Full-Stack de Calidad
                </SplitText>
              </motion.span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-[#A1A9FF] max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 2.2,
              }}
            >
              Diseño y construyo aplicaciones web modernas y escalables que potencian tu negocio e ideas.
            </motion.p>

            {/* Botones CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 2.6,
              }}
            >
              <OptimizedLink
                href="#work"
                variant="button"
                className="bg-[#5B56E0] hover:bg-[#6765F0] text-white px-8 py-3 text-lg font-semibold"
              >
                Ver Trabajos
              </OptimizedLink>
              <OptimizedLink
                href="#about"
                variant="button"
                className="border-[#4F46CF] border-2 hover:bg-[#4F46CF] hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                Sobre Mí
              </OptimizedLink>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.4,
              }}
            >
              <ul className="flex gap-6">
                <motion.li
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://linkedin.com/"
                    aria-label="LinkedIn"
                    className="social-icon group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      className="bi bi-linkedin group-hover:fill-white transition-colors duration-300"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                  <div className="tooltip">LinkedIn</div>
                </motion.li>
                <motion.li
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://www.github.com/"
                    aria-label="GitHub"
                    className="social-icon group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      className="bi bi-github group-hover:fill-white transition-colors duration-300"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>
                  <div className="tooltip">GitHub</div>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        /* Efecto de arcoíris optimizado */
        .rainbow-text {
          background: linear-gradient(
            45deg,
            #A1A9FF 0%,
            #6765F0 16.66%,
            #5B56E0 33.33%,
            #4F46CF 50%,
            #3A349D 66.66%,
            #2F2B7E 83.33%,
            #A1A9FF 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rainbow-shift 4s ease-in-out infinite;
          filter: drop-shadow(0 0 3px rgba(103, 101, 240, 0.4));
        }
        
        @keyframes rainbow-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        /* tooltip.css optimizado */
        .social-icon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border-radius: 9999px;
          background-color: #27246C;
          color: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        }

        .social-icon:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(103, 101, 240, 0.3);
          background-color: #6765F0;
        }

        .tooltip {
          position: absolute;
          top: -45px;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 0.875rem;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0s 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .social-icon:hover .tooltip {
          opacity: 1;
          visibility: visible;
          transition: opacity 0.3s ease, visibility 0s ease;
        }

        .social-icon::before {
          content: '';
          position: absolute;
          inset: 0;
          background: transparent;
          transition: background 0.3s ease;
          border-radius: 50%;
          z-index: -1;
        }
      `}</style>
    </section>
  );
}

export { Hero };

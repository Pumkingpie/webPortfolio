"use client"
import { OptimizedLink } from "@/components/common";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Bot } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Asegurar que solo se ejecute en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Eliminar lógica de idioma

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-[#0C0C2A]/80 backdrop-blur-sm border-b border-[#4F46CF]"
    >
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* Logo - Left */}
        <div className="flex-shrink-0">
          <OptimizedLink
            href="/"
            variant="button"
            className="font-semibold text-xl text-white flex items-center space-x-2 hover:text-[#A1A9FF] transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#6765F0] to-[#5B56E0] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SM</span>
            </div>
            <span>SM.Dev</span>
          </OptimizedLink>
        </div>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-10 mr-23">
            <NavLink href="#about">Sobre Mí</NavLink>
            <NavLink href="#work">Trabajos</NavLink>
            <NavLink href="#skills">Habilidades</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
          </div>
        </div>

        {/* Desktop Actions - Right */}
        <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
          {/* Desktop Bot */}
          <div className="w-10 h-10 bg-gradient-to-br from-[#6765F0] to-[#5B56E0] rounded-lg flex items-center justify-center">
            <Bot className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-[#27246C]/20 text-white transition-colors z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#0C0C2A]/95 backdrop-blur-sm border-t border-[#4F46CF]/50"
          >
            <div className="px-6 py-6 space-y-6">
              {/* Navigation Links */}
              <div className="space-y-4">
                <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
                  Sobre Mí
                </MobileNavLink>
                <MobileNavLink href="#work" onClick={() => setIsMenuOpen(false)}>
                  Trabajos
                </MobileNavLink>
                <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>
                  Habilidades
                </MobileNavLink>
                <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contacto
                </MobileNavLink>
              </div>

              {/* Mobile Actions */}
              <div className="space-y-4 pt-4 border-t border-[#4F46CF]/30">
                {/* Eliminar toggle de idioma */}
                {/* Theme Toggle */}
                {isClient && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#A1A9FF] text-sm font-medium">Tema</span>
                    <button
                      className="p-2 rounded-md hover:bg-[#27246C]/20 text-white transition-colors"
                      onClick={() => setIsDark(!isDark)}
                    >
                      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                  </div>
                )}

                {/* Contact Link */}
                <div className="pt-2">
                  <OptimizedLink
                    href="#contact"
                    className="flex items-center justify-center space-x-3 text-[#6765F0] hover:text-white transition-colors py-3 text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Bot className="w-8 h-8" />
                    <span>Ponerse en Contacto</span>
                  </OptimizedLink>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <OptimizedLink
      href={href}
      className="text-[#A1A9FF] hover:text-white transition-colors relative group font-medium"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6765F0] transition-all duration-300 group-hover:w-full" />
    </OptimizedLink>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <OptimizedLink
        href={href}
        className="block text-[#A1A9FF] hover:text-white transition-colors font-medium py-3 text-lg border-b border-[#4F46CF]/20 hover:border-[#6765F0]/40"
        onClick={onClick}
      >
        {children}
      </OptimizedLink>
    </motion.div>
  )
}


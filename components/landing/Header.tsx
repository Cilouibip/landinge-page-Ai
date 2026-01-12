"use client"

import React, { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent, type Variants } from "framer-motion"
import { Menu, X } from "lucide-react"
import Button from "@/components/ui/Button"

interface HeaderProps {
  onOpenPopup?: () => void
}

export default function Header({ onOpenPopup }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", latest => {
    setIsScrolled(latest > 10)
  })

  const headerVariants: Variants = {
    top: {
      backgroundColor: "rgba(0,0,0,0.3)",
      borderBottomColor: "rgba(55,65,81,0.5)",
      boxShadow: "none"
    },
    scrolled: {
      backgroundColor: "rgba(0,0,0,0.7)",
      borderBottomColor: "rgba(75,85,99,0.7)",
      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)"
    }
  }

  return (
    <motion.header
      variants={headerVariants}
      initial="top"
      animate={isScrolled ? "scrolled" : "top"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="px-6 w-full md:px-10 lg:px-16 sticky top-0 z-30 backdrop-blur-md border-b border-gray-800/40"
    >
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto h-16">
        <div className="flex items-center flex-shrink-0">
          <img 
            src="/assets/logos/tonagentia-logo.png" 
            alt="TonAgentIA" 
            className="w-10 h-10 object-contain"
            onError={(e) => {
              // Fallback si l'image n'existe pas
              e.currentTarget.style.display = 'none'
              const fallback = e.currentTarget.nextElementSibling as HTMLElement
              if (fallback) fallback.style.display = 'flex'
            }}
          />
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 items-center justify-center font-bold text-white text-lg hidden">
            IA
          </div>
          <span className="text-xl font-bold ml-3">
            <span className="text-white">TonAgent</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">IA</span>
          </span>
        </div>

        <div className="hidden md:flex items-center justify-center flex-grow space-x-6 lg:space-x-8 px-4">
          <a href="#acquisition" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
            Acquisition
          </a>
          <a href="#operations" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
            Opérations
          </a>
          <a href="#profit" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
            Profit
          </a>
          <a href="#results" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
            Résultats
          </a>
        </div>

        <div className="flex items-center flex-shrink-0 space-x-4 lg:space-x-6">
          <button onClick={onOpenPopup} className="hidden md:inline-block px-4 py-2 text-sm font-semibold text-white bg-transparent border-2 border-white/80 rounded-lg hover:bg-white/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
            Mes agents gratuits
          </button>
          <Button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            Obtenir un audit IA gratuit
          </Button>

          <motion.button
            className="md:hidden text-gray-300 hover:text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm shadow-lg py-4 border-t border-gray-800/50"
          >
            <div className="flex flex-col items-center space-y-4 px-6">
              <a href="#acquisition" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                Acquisition
              </a>
              <a href="#operations" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                Opérations
              </a>
              <a href="#profit" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                Profit
              </a>
              <a href="#results" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                Résultats
              </a>
              <hr className="w-full border-t border-gray-700/50 my-2" />
              <button onClick={() => { setIsMobileMenuOpen(false); onOpenPopup?.(); }} className="px-4 py-2 text-sm font-semibold text-white bg-transparent border-2 border-white/80 rounded-lg hover:bg-white/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
                Mes agents gratuits
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Button from "@/components/ui/Button"
import Badge from "@/components/ui/Badge"

interface HeroSectionProps {
  onOpenPopup?: () => void
}

export default function HeroSection({ onOpenPopup }: HeroSectionProps) {
  const words = ['clients', 'temps', 'marge']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section className="relative z-10 pt-16 pb-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Badge avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <Badge showDot>
            Pour coachs, consultants, SaaS et cabinets de recrutement
          </Badge>
        </motion.div>

        {/* Tagline - "Moins de chaos." */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2"
        >
          Moins de chaos.
        </motion.p>

        {/* Headline principal avec mot rotatif */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10"
        >
          <span className="text-white">Plus de </span>
          <span className="inline-block relative overflow-hidden align-middle" style={{ verticalAlign: 'middle' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400"
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">.</span>
        </motion.h1>

        {/* Subheader */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-zinc-400 mb-2"
        >
          Des agents IA sur mesure.
        </motion.p>

        {/* Phrase */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm md:text-base text-zinc-500 mb-8 max-w-2xl mx-auto"
        >
          Pour automatiser ton acquisition, tes opérations et ton admin.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            Obtenir un audit IA gratuit
          </Button>
          <button 
            onClick={onOpenPopup}
            className="px-6 py-3 rounded-lg border-2 border-white/80 text-white font-semibold bg-transparent hover:bg-white/10 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            Obtenir mes agents gratuitement
          </button>
        </motion.div>

      </div>
    </section>
  )
}

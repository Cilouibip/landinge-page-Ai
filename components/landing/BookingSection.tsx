"use client"

import React, { useEffect } from "react"
import { motion } from "framer-motion"
import Button from "@/components/ui/Button"

export default function BookingSection() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="booking" className="relative z-10 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            On regarde ensemble ce qu&apos;on peut enlever de ton assiette ?
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
            30 minutes. Gratuit. On identifie les 2-3 trucs qui te bouffent du temps et comment un agent peut s&apos;en occuper.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-3xl blur-2xl" />
          <div className="relative p-8 md:p-12 rounded-3xl bg-zinc-900/80 border border-zinc-800/50">
            <div 
              className="calendly-inline-widget rounded-xl overflow-hidden" 
              data-url="https://calendly.com/mehdi-zen/appel-turbo" 
              style={{ minWidth: '320px', height: '700px' }}
            />
            
            <div className="text-center mt-6">
              <p className="text-sm text-zinc-500">
                Pas de pitch. On parle de ton business.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

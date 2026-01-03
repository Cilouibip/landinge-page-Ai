"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          
          {/* Photo de profil */}
          <div className="flex-shrink-0 text-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-violet-500/30 mx-auto mb-3">
              <Image
                src="/images/mehdi-profile.jpg"
                alt="Mehdi Ben Chaffi"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-white font-semibold">Mehdi Ben Chaffi</div>
            <div className="text-sm text-zinc-500">Ex COO</div>
          </div>

          {/* Texte */}
          <div className="text-center md:text-left">
            
            {/* Titre */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Je connais ton chaos.
            </h2>

            {/* Description */}
            <p className="text-zinc-400 mb-6 leading-relaxed">
              15 ans de direction des opérations. J&apos;ai vécu les process cassés, les outils qui ne se parlent pas, les nuits à rattraper l&apos;admin.
              <br /><br />
              Maintenant j&apos;installe des agents IA qui font ce que je faisais manuellement.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-sm text-zinc-500">entreprises accompagnées</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-sm text-zinc-500">heures d'admin supprimées</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-white">100M€</div>
                <div className="text-sm text-zinc-500">de business gérés</div>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

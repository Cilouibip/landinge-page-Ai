"use client"

import React from "react"
import { motion } from "framer-motion"

const pains = [
  {
    label: "ACQUISITION",
    text: "Tu cours après tes leads. Tu passes des heures à qualifier. Tu relances à la main."
  },
  {
    label: "OPÉRATIONS",
    text: "Tu bricoles entre 10 outils. Tu copies-colles. Tu fais l'admin toi-même."
  },
  {
    label: "PROFIT",
    text: "Tu recrutes pour scaler. Tes coûts explosent. Ta marge fond."
  }
]

export default function PainsSection() {
  return (
    <section id="pains" className="relative z-10 pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            C&apos;est pour toi si...
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain, index) => (
            <motion.div
              key={pain.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative group"
            >
              <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-violet-500/30 transition-all duration-300 h-full">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 text-violet-400 border border-violet-500/20 mb-4">
                  {pain.label}
                </span>
                <p className="text-zinc-300 text-base leading-relaxed">
                  {pain.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

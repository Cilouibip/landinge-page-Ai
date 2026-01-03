"use client"

import React from "react"
import { motion } from "framer-motion"

interface ResultCard {
  result: string
  context: string
  badge: string
}

const results: ResultCard[] = [
  {
    result: "-15h/semaine",
    context: "Acquisition + onboarding automatisés",
    badge: "Consultant high-ticket"
  },
  {
    result: "-30% de coûts",
    context: "Tri + prospection + dashboard unifié",
    badge: "Cabinet de recrutement C-level"
  },
  {
    result: "+40% de conversion",
    context: "Scoring leads + fiches prospects avant chaque call",
    badge: "SaaS B2B"
  }
]

export default function ResultsSection() {
  return (
    <section id="results" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ce qu&apos;on a constaté chez nos clients.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 hover:border-violet-500/50 transition-all duration-300 h-full flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">
                  {card.result}
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  {card.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

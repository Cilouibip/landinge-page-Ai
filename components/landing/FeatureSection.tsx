"use client"

import React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface FeatureSectionProps {
  id: string
  label: string
  icon: React.ReactNode
  title: string
  subtitle: string
  bullets: string[]
}

export default function FeatureSection({ id, label, icon, title, subtitle, bullets }: FeatureSectionProps) {
  return (
    <section id={id} className="relative z-10 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 mb-6">
            {icon}
          </div>
          <span className="text-sm font-medium text-violet-400 uppercase tracking-wider mb-4 block">
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {bullets.map((bullet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-violet-500/30 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="text-zinc-300 text-lg">{bullet}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

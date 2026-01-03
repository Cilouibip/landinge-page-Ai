"use client"

import React from "react"
import { motion } from "framer-motion"
import Badge from "@/components/ui/Badge"

export default function AvatarBadges() {
  const badges = [
    "Coachs & Consultants",
    "SaaS & Agences B2B",
    "Cabinets de recrutement"
  ]

  return (
    <section className="relative z-10 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            C'est pour toi
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Badge className="text-base px-6 py-3">{badge}</Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

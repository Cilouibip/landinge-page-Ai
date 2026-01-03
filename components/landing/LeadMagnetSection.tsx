"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Badge from "@/components/ui/Badge"

export default function LeadMagnetSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }

  const blueprints = [
    "Agent Acquisition : contenu + qualification + relances",
    "Agent Ops : onboarding + facturation + notifications",
    "Agent Admin : tri + classement + rapports"
  ]

  return (
    <section id="lead-magnet" className="relative z-10 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-3xl blur-2xl" />
          <div className="relative p-8 md:p-12 rounded-3xl bg-zinc-900/80 border border-zinc-800/50">
            <div className="text-center mb-8">
              <Badge className="mb-6">Gratuit — Accès immédiat</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Les blueprints de nos 3 agents.
              </h2>
              <p className="text-lg text-zinc-400">
                Acquisition, Ops, Admin. Les mêmes qu&apos;on installe chez nos clients.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {blueprints.map((blueprint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{blueprint}</span>
                </motion.div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ton@email.com"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="px-8 py-3 rounded-lg font-medium bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:from-violet-500 hover:to-fuchsia-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitted ? "Envoyé ✓" : "Recevoir les blueprints"}
                </button>
              </div>
              <p className="text-xs text-zinc-500 text-center">
                Pas de spam. Juste des blueprints qui marchent.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

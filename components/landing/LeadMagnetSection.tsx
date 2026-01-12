"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X, Mail, Sparkles } from "lucide-react"
import Badge from "@/components/ui/Badge"
import { subscribeToSystemeIo } from "@/app/actions/subscribe"

export default function LeadMagnetSection() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    const result = await subscribeToSystemeIo(formData)

    setIsSubmitting(false)

    if (result.success) {
      setShowSuccessModal(true)
      e.currentTarget.reset()
    } else {
      setError(result.error || "Une erreur est survenue. Réessaye dans quelques instants.")
    }
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

            <form onSubmit={handleSubmit} className="systeme-form-wrapper">
              {error && (
                <div className="error-alert">
                  {error}
                </div>
              )}
              
              <div className="form-fields">
                <div className="form-field">
                  <input 
                    className="form-input" 
                    name="first_name" 
                    aria-label="Prénom" 
                    placeholder="Prénom" 
                    required 
                    type="text"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-field">
                  <input 
                    className="form-input" 
                    name="last_name" 
                    aria-label="Nom" 
                    placeholder="Nom" 
                    required 
                    type="text"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-field">
                  <input 
                    className="form-input" 
                    name="email" 
                    aria-label="Email" 
                    placeholder="ton@email.com" 
                    required 
                    type="email"
                    disabled={isSubmitting}
                  />
                </div>
                <button 
                  type="submit" 
                  className="form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <span className="opacity-0">Envoi en cours...</span>
                    </>
                  ) : (
                    <span>Recevoir les blueprints</span>
                  )}
                </button>
              </div>
            </form>
              
            <style jsx>{`
              .systeme-form-wrapper {
                width: 100%;
              }
              
              .error-alert {
                background: #fde8e2;
                border: 1px solid #f2643b;
                border-radius: 8px;
                color: #ea4110;
                margin: 0 0 16px 0;
                padding: 12px;
                text-align: center;
                font-size: 14px;
              }
              
              .form-fields {
                display: flex;
                flex-direction: column;
                gap: 12px;
              }
              
              .form-field {
                width: 100%;
              }
              
              .form-input {
                width: 100%;
                padding: 12px 16px;
                background: #09090b;
                border: 1px solid #27272a;
                border-radius: 8px;
                color: #ffffff;
                font-size: 15px;
                line-height: 1.4;
                transition: all 300ms ease;
              }
              
              .form-input::placeholder {
                color: #71717a;
                opacity: 1;
              }
              
              .form-input:focus {
                outline: none;
                border-color: #8b5cf6;
                box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
              }
              
              .form-input:disabled {
                opacity: 0.6;
                cursor: not-allowed;
              }
              
              .form-submit {
                width: 100%;
                padding: 12px 32px;
                background: linear-gradient(to right, #7c3aed, #d946ef);
                border: none;
                border-radius: 8px;
                color: #ffffff;
                font-size: 15px;
                font-weight: 500;
                cursor: pointer;
                transition: all 200ms ease;
                position: relative;
                overflow: hidden;
              }
              
              .form-submit:hover:not(:disabled) {
                background: linear-gradient(to right, #6d28d9, #c026d3);
                transform: translateY(-1px);
                box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.3);
              }
              
              .form-submit:active:not(:disabled) {
                transform: translateY(0);
              }
              
              .form-submit:disabled {
                opacity: 0.7;
                cursor: not-allowed;
              }
              
              .spinner {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 4px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
              
              .spinner > div {
                width: 8px;
                height: 8px;
                background-color: #fff;
                border-radius: 100%;
                animation: bounce 1.4s infinite ease-in-out both;
              }
              
              .spinner > div:nth-child(1) {
                animation-delay: -0.32s;
              }
              
              .spinner > div:nth-child(2) {
                animation-delay: -0.16s;
              }
              
              @keyframes bounce {
                0%, 80%, 100% {
                  transform: scale(0);
                }
                40% {
                  transform: scale(1);
                }
              }
            `}</style>
            
            <p className="text-xs text-zinc-500 text-center mt-4">
              Pas de spam. Juste des blueprints qui marchent.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modale de succès */}
      <AnimatePresence>
        {showSuccessModal && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setShowSuccessModal(false)}
            />

            {/* Modale */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="relative max-w-md w-full">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl" />
                
                {/* Contenu de la modale */}
                <div className="relative bg-zinc-900 border border-zinc-800/50 rounded-3xl p-8 shadow-2xl">
                  {/* Bouton fermer */}
                  <button
                    onClick={() => setShowSuccessModal(false)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-800 transition-colors"
                  >
                    <X className="w-5 h-5 text-zinc-400" />
                  </button>

                  {/* Icône de succès */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full blur-xl opacity-50" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Titre */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
                    C&apos;est parti ! 🚀
                  </h3>

                  {/* Message */}
                  <div className="space-y-4 mb-6">
                    <p className="text-zinc-300 text-center leading-relaxed">
                      <strong className="text-white">Vérifie ta boîte mail</strong> (et tes spams, au cas où).
                    </p>
                    
                    <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <Sparkles className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-zinc-300">
                          Tu vas recevoir les <strong className="text-white">3 blueprints complets</strong> de nos agents IA
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-zinc-300">
                          Prêts à implémenter dans ton business
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-zinc-400 text-center">
                      Pendant ce temps, tu peux <a href="#booking" onClick={() => setShowSuccessModal(false)} className="text-violet-400 hover:text-violet-300 underline">réserver ton audit gratuit</a> pour voir comment on peut automatiser ton business.
                    </p>
                  </div>

                  {/* Bouton */}
                  <button
                    onClick={() => setShowSuccessModal(false)}
                    className="w-full px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:from-violet-500 hover:to-fuchsia-400 transition-all duration-200"
                  >
                    Compris, merci !
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

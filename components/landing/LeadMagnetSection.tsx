"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X, Mail, Sparkles } from "lucide-react"
import Badge from "@/components/ui/Badge"

export default function LeadMagnetSection() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js'
    script.async = true
    document.body.appendChild(script)
    
    // Intercepter la soumission du formulaire Kit.com
    const handleFormSubmit = (e: Event) => {
      const form = (e.target as HTMLElement).closest('form')
      if (form && form.classList.contains('formkit-form')) {
        setTimeout(() => {
          setShowSuccessModal(true)
        }, 500)
      }
    }

    document.addEventListener('submit', handleFormSubmit)
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
      document.removeEventListener('submit', handleFormSubmit)
    }
  }, [])

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

            <div className="kit-form-wrapper">
              <form 
                action="https://app.kit.com/forms/8933963/subscriptions" 
                className="seva-form formkit-form" 
                method="post" 
                data-sv-form="8933963" 
                data-uid="92a1c88bef" 
                data-format="inline" 
                data-version="5"
              >
                <div data-style="clean">
                  <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                  <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
                    <div className="formkit-field">
                      <input 
                        className="formkit-input" 
                        name="email_address" 
                        aria-label="Email Address" 
                        placeholder="ton@email.com" 
                        required 
                        type="email"
                      />
                    </div>
                    <button data-element="submit" className="formkit-submit">
                      <div className="formkit-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <span>Recevoir les blueprints</span>
                    </button>
                  </div>
                </div>
              </form>
              
              <style jsx>{`
                .kit-form-wrapper .formkit-form * {
                  box-sizing: border-box;
                }
                
                .kit-form-wrapper .formkit-fields {
                  display: flex;
                  flex-wrap: wrap;
                  gap: 12px;
                  margin: 0;
                }
                
                .kit-form-wrapper .formkit-field {
                  flex: 1 0 auto;
                  margin: 0;
                  min-width: 200px;
                }
                
                .kit-form-wrapper .formkit-input {
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
                
                .kit-form-wrapper .formkit-input::placeholder {
                  color: #71717a;
                  opacity: 1;
                }
                
                .kit-form-wrapper .formkit-input:focus {
                  outline: none;
                  border-color: #8b5cf6;
                  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
                }
                
                .kit-form-wrapper .formkit-submit {
                  flex: 0 0 auto;
                  margin: 0;
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
                  white-space: nowrap;
                }
                
                .kit-form-wrapper .formkit-submit:hover {
                  background: linear-gradient(to right, #6d28d9, #c026d3);
                  transform: translateY(-1px);
                  box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.3);
                }
                
                .kit-form-wrapper .formkit-submit:active {
                  transform: translateY(0);
                }
                
                .kit-form-wrapper .formkit-spinner {
                  display: flex;
                  height: 0;
                  width: 0;
                  margin: 0 auto;
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  overflow: hidden;
                  opacity: 0;
                  transition: all 300ms ease;
                }
                
                .kit-form-wrapper .formkit-submit[data-active] .formkit-spinner {
                  opacity: 1;
                  height: 100%;
                  width: 50px;
                }
                
                .kit-form-wrapper .formkit-submit[data-active] .formkit-spinner ~ span {
                  opacity: 0;
                }
                
                .kit-form-wrapper .formkit-spinner > div {
                  margin: auto;
                  width: 12px;
                  height: 12px;
                  background-color: #fff;
                  opacity: 0.3;
                  border-radius: 100%;
                  display: inline-block;
                  animation: formkit-bouncedelay 1.4s infinite ease-in-out both;
                }
                
                .kit-form-wrapper .formkit-spinner > div:nth-child(1) {
                  animation-delay: -0.32s;
                }
                
                .kit-form-wrapper .formkit-spinner > div:nth-child(2) {
                  animation-delay: -0.16s;
                }
                
                @keyframes formkit-bouncedelay {
                  0%, 80%, 100% {
                    transform: scale(0);
                  }
                  40% {
                    transform: scale(1);
                  }
                }
                
                .kit-form-wrapper .formkit-alert {
                  background: #fde8e2;
                  border: 1px solid #f2643b;
                  border-radius: 8px;
                  color: #ea4110;
                  list-style: none;
                  margin: 0 0 16px 0;
                  padding: 12px;
                  text-align: center;
                  width: 100%;
                }
                
                .kit-form-wrapper .formkit-alert:empty {
                  display: none;
                }
                
                .kit-form-wrapper .formkit-alert-success {
                  background: #d3fbeb;
                  border-color: #10bf7a;
                  color: #0c905c;
                }
                
                @media (max-width: 640px) {
                  .kit-form-wrapper .formkit-fields {
                    flex-direction: column;
                  }
                  
                  .kit-form-wrapper .formkit-field {
                    min-width: 100%;
                  }
                  
                  .kit-form-wrapper .formkit-submit {
                    width: 100%;
                  }
                }
              `}</style>
            </div>
            
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

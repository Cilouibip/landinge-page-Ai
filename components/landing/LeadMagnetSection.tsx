"use client"

import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Badge from "@/components/ui/Badge"

export default function LeadMagnetSection() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js'
    script.async = true
    document.body.appendChild(script)
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
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
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Portal from '@/components/ui/Portal'

interface AutoPopupProps {
  onSubmit: (email: string, firstName: string, lastName: string) => Promise<void>
  isLoading: boolean
  isOpen: boolean
  onClose: () => void
}

export default function AutoPopup({ onSubmit, isLoading, isOpen, onClose }: AutoPopupProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  // Bloquer le scroll quand popup ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [isOpen])

  const handleClose = () => {
    onClose()
    localStorage.setItem('tonagentia_popup_closed', 'true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onSubmit(email, firstName, lastName)
    localStorage.setItem('tonagentia_popup_closed', 'true')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[9999]"
            onClick={handleClose}
          />

          {/* Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          >
            <div className="relative max-w-md w-full">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl" />

              {/* Contenu */}
              <div className="relative bg-zinc-900 border border-zinc-800/50 rounded-3xl p-8 shadow-2xl">
                {/* Bouton fermer */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-800 transition-colors"
                >
                  <X className="w-5 h-5 text-zinc-400" />
                </button>

                {/* Titre */}
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  Obtiens tes agents IA gratuitement
                </h3>
                <p className="text-zinc-400 text-center mb-6">
                  Accède aux blueprints de nos 3 agents les plus demandés
                </p>

                {/* Formulaire */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Prénom"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 disabled:opacity-50"
                    />
                    <input
                      type="text"
                      placeholder="Nom"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 disabled:opacity-50"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white hover:from-violet-500 hover:to-fuchsia-400 transition-all duration-200 disabled:opacity-50"
                  >
                    {isLoading ? 'Envoi...' : 'Recevoir mes agents'}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  )
}

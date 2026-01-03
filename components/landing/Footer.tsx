"use client"

import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 py-12 px-4 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <img 
              src="/assets/logos/tonagentia-logo.png" 
              alt="TonAgentIA" 
              className="w-10 h-10 object-contain"
              onError={(e) => {
                // Fallback si l'image n'existe pas
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.nextElementSibling as HTMLElement
                if (fallback) fallback.style.display = 'flex'
              }}
            />
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 items-center justify-center font-bold text-white text-lg hidden">
              IA
            </div>
            <span className="text-xl font-bold ml-3">
              <span className="text-white">TonAgent</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">IA</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-zinc-500">
          © {currentYear} TonAgentIA. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}

"use client"

import React from "react"
import { TrendingUp, Grid3x3, DollarSign } from "lucide-react"
import AnimatedDotsCanvas from "@/components/ui/AnimatedDotsCanvas"
import Header from "@/components/landing/Header"
import HeroSection from "@/components/landing/HeroSection"
import PainsSection from "@/components/landing/PainsSection"
import FeatureSection from "@/components/landing/FeatureSection"
import ResultsSection from "@/components/landing/ResultsSection"
import LeadMagnetSection from "@/components/landing/LeadMagnetSection"
import AboutSection from "@/components/landing/AboutSection"
import BookingSection from "@/components/landing/BookingSection"
import Footer from "@/components/landing/Footer"

export default function TonAgentIALanding() {
  return (
    <div className="relative bg-zinc-950 text-gray-300 min-h-screen flex flex-col overflow-x-hidden">
      <AnimatedDotsCanvas />
      
      <div className="absolute inset-0 z-1 pointer-events-none" 
        style={{ 
          background: 'linear-gradient(to bottom, transparent 0%, rgb(9,9,11) 90%), radial-gradient(ellipse at center, transparent 40%, rgb(9,9,11) 95%)' 
        }} 
      />

      <Header />

      <main className="flex-grow flex flex-col relative z-10">
        <HeroSection />
        
        <PainsSection />

        <FeatureSection
          id="acquisition"
          label="ACQUISITION"
          icon={<TrendingUp className="w-8 h-8 text-violet-400" />}
          title="Tu ne devrais plus courir après tes prospects."
          subtitle="L'agent trouve, trie et prépare. Toi, tu parles qu'à ceux qui sont prêts."
          bullets={[
            "Tu ne tries plus. L'agent te passe que les leads qualifiés.",
            "Tu ne relances plus. L'agent suit et te ping quand c'est chaud.",
            "Tu ne crées plus en continu. Tu fais une fois, l'agent distribue partout."
          ]}
        />

        <FeatureSection
          id="operations"
          label="OPÉRATIONS"
          icon={<Grid3x3 className="w-8 h-8 text-violet-400" />}
          title="Fini le bricolage."
          subtitle="Tes outils se parlent. Tes process tournent. L'admin se fait toute seule."
          bullets={[
            "Tout est connecté. Plus de copier-coller entre 10 apps.",
            "Tout est unifié. Une seule source de vérité.",
            "Tout tourne. Tu configures une fois, ça roule."
          ]}
        />

        <FeatureSection
          id="profit"
          label="PROFIT"
          icon={<DollarSign className="w-8 h-8 text-violet-400" />}
          title="Tu ne devrais pas recruter pour scaler."
          subtitle="L'agent absorbe les tâches. Toi, tu gardes ta marge."
          bullets={[
            "Plus de 15 heures récupérées chaque semaine sur l'admin.",
            "Moins d'erreurs, moins d'oublis, moins de \"merde j'ai pas relancé\".",
            "Tu scales sans forcément agrandir l'équipe."
          ]}
        />

        <ResultsSection />

        <LeadMagnetSection />

        <AboutSection />

        <BookingSection />
      </main>

      <Footer />
    </div>
  )
}

# TonAgentIA Landing Page

Landing page moderne pour TonAgentIA - Agents IA sur mesure pour coachs, consultants, SaaS et cabinets de recrutement.

## Stack Technique

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icônes)

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le serveur de développement démarre sur [http://localhost:3000](http://localhost:3000).

## Structure du Projet

```
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/
│   ├── landing/
│   │   ├── TonAgentIALanding.tsx  # Composant principal
│   │   ├── Header.tsx             # Header sticky
│   │   ├── HeroSection.tsx        # Section hero
│   │   ├── AvatarBadges.tsx       # Badges cibles
│   │   ├── FeatureSection.tsx     # Sections features
│   │   ├── ResultsSection.tsx     # Résultats clients
│   │   ├── LeadMagnetSection.tsx  # Lead magnet
│   │   ├── BookingSection.tsx     # Réservation call
│   │   └── Footer.tsx             # Footer
│   └── ui/
│       ├── AnimatedDotsCanvas.tsx # Background animé
│       ├── Button.tsx             # Bouton réutilisable
│       └── Badge.tsx              # Badge réutilisable
└── lib/
    └── utils.ts            # Utilitaires

```

## Fonctionnalités

### Background Animé
- Canvas avec points interactifs qui réagissent au hover de la souris
- Couleur violet (rgba 139, 92, 246)
- Animations fluides avec optimisation des performances

### Sections

1. **Hero** - Headline principale avec CTAs
2. **Cibles** - Badges pour coachs, consultants, SaaS, cabinets
3. **Acquisition** - Automatisation de la prospection
4. **Opérations** - Intégration et automatisation des process
5. **Profit** - Gains de temps et réduction des coûts
6. **Résultats** - Témoignages clients avec métriques
7. **Lead Magnet** - Capture email pour blueprints gratuits
8. **Booking** - Réservation de call (Calendly à intégrer)

### Animations
- Animations d'apparition au scroll (Framer Motion)
- Transitions fluides
- Hover effects sur les boutons et cards

### Responsive
- Mobile-first design
- Menu hamburger sur mobile
- Grilles adaptatives

## À Faire

1. **Intégrer Calendly** - Remplacer le placeholder dans BookingSection
2. **Connecter le formulaire email** - Intégrer avec votre ESP (systeme.io, etc.)
3. **Ajouter Analytics** - Google Analytics ou autre
4. **Optimiser les images** - Ajouter le logo et optimiser
5. **SEO** - Ajouter meta tags, Open Graph, etc.

## Personnalisation

### Couleurs
Les couleurs principales sont définies dans Tailwind :
- Violet : `violet-500`, `violet-600`
- Fuchsia : `fuchsia-400`, `fuchsia-500`
- Zinc : `zinc-900`, `zinc-950`

### Contenu
Modifiez le contenu directement dans les composants :
- Textes : dans chaque composant de section
- Liens : dans Header et Footer
- Résultats clients : dans ResultsSection.tsx

## Build Production

```bash
npm run build
npm start
```

## License

© 2025 TonAgentIA. Tous droits réservés.

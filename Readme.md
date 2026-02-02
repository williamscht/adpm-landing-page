# ADPM — Landing Page (HTML / CSS / JS)

Landing page officielle de l’**ADPM** (Appui et Services Mutualisés), conçue comme une vitrine orientée **services**, à destination des **mutuelles autonomes de proximité**.

Ce projet est développé **from scratch** en **HTML, CSS et JavaScript vanilla**, avec une approche UI inspirée des standards SaaS.

---

## 🎯 Objectif du projet

Créer une landing page moderne permettant de :

- Positionner clairement l’ADPM comme un **appui opérationnel mutualisé**
- Présenter les services
- Générer des prises de contact qualifiées
- Construire un design system évolutif section par section

---


## 🧱 Méthode de construction

Le site est développé selon une logique **bloc par bloc**, en respectant un découpage MVP :

| Section | Bloc |
|--------|------|
| A | Header & Navigation |
| B | Hero full-screen |
| C | Services Cards |
| D | Expertise + Partners ticker |
| E | Timeline / How it works |
| F | Testimonials |
| G | Masonry / Bento content |
| H | FAQ Accordion |
| I | CTA Contact band |
| J | Stats / Social proof |
| K | Footer + Lead form |

Chaque section fait l’objet d’un ticket d’intégration dédié.

---

## 🛠️ Stack technique

- HTML5 sémantique
- CSS moderne (Grid / Flex / variables)
- JavaScript Vanilla (aucune dépendance)
- Responsive Mobile-first
- Animations légères (scroll + hover)
- Accessibilité : focus states, aria-live, prefers-reduced-motion

---

## 📁 Structure du projet

```txt
adpm-landing/
│
├── index.html
│
├── css/
│   ├── base.css         # Variables globales + layout container
│   ├── components.css   # Boutons, cards, UI elements
│   └── sections.css     # Styles section par section (A → K)
│
├── js/
│   └── main.js          # Interactions (theme, scroll effects, forms)
│
├── images/
│   ├── logos/           # Logos partenaires + clients
│   └── services/        # Visuels sections
│
└── README.md
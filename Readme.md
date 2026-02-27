# ADPM — Landing Page (HTML / CSS / JS)

Landing page officielle de l'**ADPM** (Association Diversité et Proximité Mutualiste), conçue comme une vitrine orientée **services**, à destination des **mutuelles de proximité**.

Développée **from scratch** en **HTML, CSS et JavaScript vanilla**, avec une approche UI inspirée des standards SaaS.

---

## 🎯 Objectif du projet

- Positionner clairement l'ADPM comme un **appui opérationnel mutualisé**
- Présenter les services et domaines d'intervention
- Générer des prises de contact qualifiées
- Affirmer l'identité de l'ADPM comme entité distincte de la FDPM

---

## 🧱 Structure des sections

| Section | Contenu |
|--------|---------|
| A | Header & Navigation |
| B | Hero |
| C | Partenaires — ticker logos |
| D | À propos / Chiffres clés |
| E | Nos services |
| F | Notre expertise — CoTech |
| G | Notre accompagnement — timeline |
| H | Comparatif ADPM vs approches classiques |
| I | Témoignages |
| J | FAQ |
| K | Formulaire de contact |
| L | Footer |

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

```
ADPM SITE/
│
├── index.html
│
├── css/
│   ├── base.css          # Variables globales + layout container
│   ├── components.css    # Boutons, cards, UI elements
│   └── sections.css      # Styles section par section (A → L)
│
├── js/
│   └── main.js           # Interactions (navigation, scroll, formulaire)
│
├── images/
│   ├── about/            # Visuels section À propos
│   ├── approche/         # Visuels section Accompagnement
│   ├── contact/          # Visuels section Contact
│   ├── expertise/        # Visuels section CoTech
│   ├── favicon/          # Favicon
│   ├── header/           # Logo header
│   ├── hero/             # Visuels Hero
│   ├── logos/            # Logos mutuelles partenaires
│   ├── og/               # Image Open Graph (og-image.png)
│   └── services/         # Visuels section Services
│
└── README.md
```

---

## 🔍 SEO

- Données structurées JSON-LD (schema.org) : `NGO`, `WebSite`, `WebPage`, `Service` (×8), `FAQPage`
- Balises Open Graph et Twitter Card
- Canonical vers `https://adpm-mutuelles.fr/`
- `sameAs` : LinkedIn + annuaire-entreprises.data.gouv.fr
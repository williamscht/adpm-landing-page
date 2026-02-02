Spécification UI/UX — Landing Page ADPM

Objectif du document

Ce document décrit de manière pixel-perfect et actionnable la maquette fournie (références visuelles en PJ), afin de permettre :

une intégration fidèle en HTML / CSS / JS,

une lecture directe par un développeur front-end,

une compréhension exploitable par Codex / GPT pour génération ou assistance au code.

Le site est développé sans framework (HTML, CSS, JS natifs).
Chaque section est décrite indépendamment, avec :

rôle UX,

structure attendue,

règles de layout,

typographie,

espacements,

comportements.

A — Header / Navigation

Rôle UX

Orientation immédiate

Accès rapide aux sections clés

CTA de contact visible

Structure

Header pleine largeur

Conteneur centré (max-width: 1100–1200px)

Layout horizontal en flex

Éléments

Logo à gauche (icône + nom)

Navigation centrale :

About

Client Results

Services

How it works

CTA à droite : bouton arrondi "Get in Touch" avec icône flèche

Règles visuelles

Hauteur header : ~72px

Fond blanc ou très légèrement grisé

Border-radius global élevé (header capsule sur certaines variantes)

Bouton CTA :

fond sombre

texte blanc

icône flèche dans un cercle blanc

Comportement

Sticky en haut

Responsive : menu burger sous 900px

B — Hero Section

Rôle UX

Proposition de valeur immédiate

Crédibilité

Incitation à l’action

Layout

Section pleine largeur

Conteneur centré

Grid 2 colonnes (≈ 55% texte / 45% visuel)

Colonne gauche (texte)

Eyebrow discret (petit point vert + label)

H1 très large, multi-lignes

Paragraphe descriptif (max-width ~60ch)

CTA principal (bouton sombre)

Social proof :

avatars ronds

note 4.9 / 5

Colonne droite (visuel)

Image portrait plein cadre

Border-radius élevé (~24px)

Overlays flottants :

badge jaune (stat)

card blanche avec chiffre (%)

card blanche avec métrique (clients)

Espacements

Padding vertical section : 96–120px

Gap colonnes : 64px

C — About / Authority Section

Rôle UX

Installer la crédibilité

Donner de la profondeur historique

Structure

Layout 2 colonnes inversé (texte gauche, image droite)

Image large, horizontale

Contenu

Eyebrow "About us"

H2 long (2–3 lignes)

Paragraphe explicatif

Grille de stats (4 cartes)

Cards statistiques

Fond gris très clair

Border-radius ~20px

Chiffre très large

Label + description courte

D — Expertise Section

Rôle UX

Démontrer la valeur opérationnelle

Layout

Image à gauche

Texte à droite

Contenu texte

Eyebrow "Expertise"

H2

Paragraphe

Liste à puces avec icônes check vertes

Logos partenaires

Bande horizontale

Logos en niveaux de gris

E — Client Results / Case Study

Rôle UX

Preuve par l’exemple

Structure

H2 très visible à gauche

Carte témoignage à droite

Carte

Image portrait

Overlay gradient bas

Nom + rôle

Stats associées

2–3 chiffres clés alignés verticalement

F — Services Section

Rôle UX

Détailler l’offre

Structure

Sections alternées image / texte

Cards larges avec fond gris clair

Éléments

Titre service

Description longue

Tags "Industries served" (chips)

G — How It Works

Rôle UX

Rassurer

Montrer la méthode

Structure

H2 centré

Timeline verticale numérotée (01 → 04)

Étapes

Numéro large vert

Ligne verticale centrale

Image à gauche ou droite

Texte explicatif opposé

Espacements

Très aéré

Chaque step = bloc indépendant

Règles globales

Typographie

Sans-serif moderne

Titres : font-weight 700–800

Texte : 400–500

Couleurs

Fond principal : blanc

Texte : gris très foncé

Accent : vert / jaune (selon section)

UI

Border-radius généreux

Ombres très douces

Aucun effet brutal

Responsive

Toutes les sections passent en 1 colonne

Images toujours au-dessus du texte sur mobile

Consigne finale

Chaque section doit être développée indépendamment, validée visuellement, puis intégrée dans la page.
Aucune section ne doit dépendre d’un framework ou d’un builder.

Ce document fait foi pour l’intégration pixel-perfect.

H — Why Choose Us (Comparatif)

Rôle UX

Différencier clairement l’offre ADPM

Créer un contraste visuel et cognitif immédiat

Rassurer par opposition (ce que nous ne sommes pas)

Structure

Section pleine largeur

Conteneur centré

En-tête centré (eyebrow + H2 + paragraphe)

Grille 2 colonnes (comparatif)

En-tête

Eyebrow : point vert + label "Why Choose Us"

H2 : texte long sur 2–3 lignes, centré

Paragraphe : largeur max ~70ch, centré

Comparatif

Colonne gauche : "Other Firms"

Fond gris clair (#EDEDED env.)

Titre centré

Liste verticale

Icônes croix rouges (❌)

Texte gris foncé

Colonne droite : "With ADPM"

Fond sombre (#1F2937 env.)

Titre blanc

Carte interne blanche

Icônes check vertes (✓)

Texte foncé

Espacements

Padding section : 96px vertical

Gap colonnes : 48px

Padding interne cartes : 32–40px

I — Testimonials

Rôle UX

Preuve sociale massive

Diversité des profils

Structure

En-tête centré

Grille masonry 3 colonnes

En-tête

Eyebrow : "Testimonials"

H2 centré

Paragraphe centré

Cards témoignages

Fond gris très clair

Border-radius ~20px

Icône guillemets verte en haut

Texte citation

Bloc auteur en bas :

Avatar rond 40–48px

Nom en gras

Fonction + entreprise en gris

Grille

Colonnes non alignées verticalement (effet masonry)

Gap : 24–32px

Responsive : 1 colonne mobile

J — FAQ

Rôle UX

Lever les objections

Réduire la friction avant contact

Structure

Layout 2 colonnes

Gauche : texte + CTA

Droite : accordéon

Colonne gauche

Eyebrow : "FAQ"

H2 large

Texte secondaire

Bouton "Contact Us"

Accordéon

Items empilés

Fond blanc

Border-radius ~16px

Icône chevron droite

Interaction JS :

Un item ouvert à la fois

Transition hauteur douce

K — Contact / Lead Form

Rôle UX

Conversion finale

Prise de rendez-vous

Structure

Section fond sombre

Layout 2 colonnes

Colonne gauche

Eyebrow : "Contact us"

H2 blanc très large

Paragraphe descriptif

Image large (consultation)

Colonne droite

Carte formulaire blanche

Border-radius ~24px

Champs :

Name

Company

Email

Phone

Services (select)

Message (textarea)

Bouton CTA pleine largeur

Espacements

Padding section : 120px

Padding carte : 40px

L — Footer

Rôle UX

Navigation secondaire

Crédit & conformité

Structure

Logo à gauche

Liens navigation

Icônes réseaux sociaux

Bas de footer

Ligne de séparation

Copyright

Crédit créateur

Règles finales d’intégration

HTML sémantique uniquement

CSS modulaire, sans framework

JS minimal (accordion, menu)

Toutes les sections indépendantes

Validation section par section


----

Tickets d’intégration technique — Landing Page ADPM

Ce document transforme la spécification UI/UX en tickets techniques actionnables, destinés à un·e développeur·se front-end ou à Codex / GPT.

Règles communes à tous les tickets :
	•	Stack : HTML / CSS / JS natifs (sans framework)
	•	CSS modulaire, classes explicites
	•	Respect strict du design system et des espacements
	•	Chaque ticket est indépendant, intégrable sans dépendance aux suivants

⸻

TICKET A — Header & Navigation

Objectif

Implémenter le header principal avec navigation, CTA et comportement responsive.

À livrer
	•	Header sticky pleine largeur
	•	Conteneur centré (max-width ~1100–1200px)
	•	Logo + nom ADPM à gauche
	•	Navigation horizontale (About, Client Results, Services, How it works)
	•	CTA “Get in Touch” à droite (bouton pill + icône flèche)

Contraintes techniques
	•	HTML sémantique (<header>, <nav>)
	•	Layout en flexbox
	•	Menu burger < 900px
	•	JS minimal pour ouverture / fermeture du menu mobile

Critères de validation
	•	Sticky fonctionnel
	•	Responsive validé
	•	Aucun layout shift

⸻

TICKET B — Hero Section

Objectif

Présenter la proposition de valeur et inciter à l’action.

À livrer
	•	Section 2 colonnes (texte / visuel)
	•	Eyebrow + H1 large multi-lignes
	•	Paragraphe descriptif (max-width ~60ch)
	•	CTA principal + CTA secondaire
	•	Social proof (avatars + note)
	•	Visuel à droite avec overlays (sans images finales si besoin)

Contraintes techniques
	•	Grid CSS
	•	Espacements généreux (padding 96–120px)
	•	Overlays en position absolue

Critères de validation
	•	Hiérarchie visuelle claire
	•	Alignement parfait desktop
	•	Empilement vertical mobile

⸻

TICKET C — About / Authority

Objectif

Installer la crédibilité et l’historique.

À livrer
	•	Section 2 colonnes
	•	Image large à droite
	•	Texte explicatif à gauche
	•	Grille de 4 cartes statistiques

Contraintes techniques
	•	Grid responsive
	•	Cards réutilisables

Critères de validation
	•	Lisibilité parfaite
	•	Cartes alignées

⸻

TICKET D — Expertise

Objectif

Démontrer la valeur opérationnelle.

À livrer
	•	Image à gauche
	•	Texte à droite
	•	Liste à puces avec icônes check
	•	Bande logos partenaires

Contraintes techniques
	•	Alignement vertical précis
	•	Logos en niveaux de gris

⸻

TICKET E — Client Results / Case Study

Objectif

Apporter une preuve par l’exemple.

À livrer
	•	Titre fort
	•	Carte témoignage avec image + overlay
	•	Stats chiffrées associées

⸻

TICKET F — Services

Objectif

Détailler les offres proposées.

À livrer
	•	Sections alternées image / texte
	•	Cards larges avec fond clair
	•	Tags “Industries served”

⸻

TICKET G — How It Works

Objectif

Expliquer la méthode étape par étape.

À livrer
	•	Timeline verticale numérotée (01–04)
	•	Image + texte alternés

Contraintes techniques
	•	Ligne verticale centrale
	•	Numéros stylisés

⸻

TICKET H — Why Choose Us (Comparatif)

Objectif

Différencier clairement ADPM.

À livrer
	•	En-tête centré
	•	Grille 2 colonnes comparatives
	•	Colonne “Other Firms” (fond clair, croix rouges)
	•	Colonne “With ADPM” (fond sombre, checks verts)

⸻

TICKET I — Testimonials

Objectif

Créer une preuve sociale massive.

À livrer
	•	En-tête centré
	•	Grille masonry 3 colonnes
	•	Cards témoignages (citation + auteur)

⸻

TICKET J — FAQ

Objectif

Lever les objections.

À livrer
	•	Layout 2 colonnes
	•	Accordéon interactif

Contraintes techniques
	•	JS : un item ouvert à la fois
	•	Animation hauteur fluide

⸻

TICKET K — Contact / Lead Form

Objectif

Conversion finale.

À livrer
	•	Section fond sombre
	•	Texte à gauche
	•	Carte formulaire à droite
	•	Champs + bouton CTA pleine largeur

Contraintes techniques
	•	Validation HTML5
	•	Accessibilité (labels, aria)

⸻

TICKET L — Footer

Objectif

Navigation secondaire et crédits.

À livrer
	•	Logo
	•	Liens de navigation
	•	Réseaux sociaux
	•	Ligne de séparation
	•	Copyright

⸻

Ordre recommandé d’implémentation

A → B → C → D → H → I → J → K → L → F → G → E

Chaque ticket peut être développé, testé et validé indépendamment.
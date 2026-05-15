# Spacery

Spacery est une application web de découverte de lieux liés à l’architecture, au design et à la culture.

L’objectif du projet est de proposer une expérience de navigation immersive autour de lieux inspirants : musées, galeries, bâtiments iconiques, espaces créatifs, etc.

🔗 Démo : https://spacery.vercel.app/

## Fonctionnalités

- Exploration de lieux culturels et architecturaux
- Carte interactive
- Pages de détails pour chaque lieu
- Création de parcours personnalisés
- Interface responsive
- Communication avec une API REST Symfony
- Back-office d’administration côté API

## Stack technique

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- Mapbox GL
- Swiper
- Framer Motion
- Cypress

## Architecture

Le projet repose sur une architecture découplée :

- Front-end : Next.js
- Back-end : Symfony / API REST
- Base de données : MySQL

Le front consomme les données exposées par l’API afin d’afficher les lieux, leurs informations et les parcours.

## Installation

```bash
git clone https://github.com/emsouk/spacery.git
cd spacery/spaceryproject
npm install
npm run dev

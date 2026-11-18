# Pranto Chakrobortty — 3D Interactive Developer Portfolio

A production-level 3D scroll-animated and kinetic typography developer portfolio built with **Vite 8.3**, **React 19.3**, **Three.js (r187)**, **React Three Fiber 9**, **Framer Motion 12**, and **Tailwind CSS 4.3**.

## Features
- **3D Scroll-Reactive WebGL Canvas**: Interactive cybernetic geodesic core, dual gyroscope rings, orbiting data nodes, and starfield that morph, rotate, and shift across the viewport as you scroll through each section.
- **Kinetic Text Animations**: Masked 3D word-split headline reveals, interactive glyph-scramble hover badges, and smooth scroll-linked section choreography.
- **Project Upload & Showcase Studio**:
  - Pre-configured with Pranto Chakrobortty's projects (*Career Counseling Platform*, *Gadget Heaven*, *Dream Eleven*, *Peddy Pet Adoption*) including live links, GitHub repositories, and architecture breakdowns.
  - Built-in **Upload Project Studio** (`ProjectUploadModal`) to add new projects (with live demo URL, GitHub link, category, tech stack, key features, screenshot upload, and glow theme), filter by category, delete custom uploads, and export/import JSON backups.
- **Resume Preview & One-Click Download**: Built-in PDF previewer (`public/resume/Pranto-Chakrobortty-Resume.pdf`) paired with an interactive structured CV sheet and one-click `.pdf` download.
- **Direct Mail Contact System**: Direct email delivery to `Prantochakrobortty24@gmail.com` via **EmailJS** (configurable in `.env`) with an automatic **Default Mail App (`mailto:`)** launcher and one-click address copy.

## Production Directory Structure
```text
pranto-3d-portfolio/
├── public/
│   └── resume/
│       └── Pranto-Chakrobortty-Resume.pdf
├── src/
│   ├── components/
│   │   ├── canvas/          # Three.js / React Three Fiber 3D scroll scene
│   │   ├── layout/          # Navbar & Footer
│   │   ├── sections/        # Hero, About, Skills, Projects, Education, Contact
│   │   └── ui/              # KineticText, ProjectUploadModal, ProjectDetailModal, ResumeModal
│   ├── data/                # Structured CV & project data
│   ├── hooks/               # Scroll progress & localStorage project store hooks
│   ├── services/            # EmailJS + mailto direct email service
│   ├── utils/               # Utility helpers
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Setup & Commands
```bash
npm install
npm run dev
npm run build
```

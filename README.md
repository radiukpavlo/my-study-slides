# YOLO Ensemble — Slides & Assets

Lightweight, static slides for the talk “YOLO Ensemble for UAV-based Multispectral Defect Detection in Wind Turbine Components”.

- Live deck: https://radiukpavlo.github.io/my-study-slides/

## What’s Inside
- `index.html`: Main, self‑contained deck (Tailwind CDN, Font Awesome, Chart.js). Logos come from `logos/`. Adjust all logo sizes via `:root { --logo-height: 60px; }`.
- `images/`, `logos/`: Figures and organization badges used in the deck.
- `docs/`: Paper/poster/presentation files (PDF/PPTX/DOCX) for reference and sharing.
- `package.json`: Project metadata and `start` script for local serving.
- `archived/`: Sandbox and a minimal Reveal.js demo (`index_1.html`) powered by `main.js`.

## Quick Start
- Open directly: double‑click `index.html` and present full‑screen.
- Serve locally (for Reveal.js demo or strict browsers):
  - `npm install`
  - `npx http-server -p 8000 .` (or `npm start`)
  - Open `http://localhost:8000/` → `index.html` or `slides_raw_html/index_1.html`

## Edit The Deck
- Content/layout: edit `index.html` directly.
- Logos: replace files in `logos/`; update `<img>` tags if names change.
- Logo size: change `--logo-height` in `index.html`.
- Charts: tweak datasets in the inline `new Chart(...)` scripts.

## Optional: Reveal.js Demo
- `slides_raw_html/index_1.html` + `main.js` (ESM) for keyboard navigation.
- Run with a local server; use arrow keys, `Esc` for overview, `S` for notes.

## Deploy (GitHub Pages)
- Push updates to `index.html` and assets on the default branch.
- Live URL: https://radiukpavlo.github.io/my-study-slides/

## Stack
- TailwindCSS (CDN), Font Awesome (CDN), Chart.js (CDN)
- Reveal.js (local, demo only)

## License
ISC. Images/logos may have separate terms.


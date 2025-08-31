# My Study Slides

A lightweight, static slide deck for the talk:

YOLO Ensemble for UAV-based Multispectral Defect Detection

- Online slides: https://radiukpavlo.github.io/my-study-slides/

The main deck is a single HTML file with handcrafted styles, icons, and a few interactive charts powered by Chart.js. The repo also contains a small Reveal.js demo (optional) if you prefer keyboard-driven slide navigation.

## Features
- Polished static slides: Custom HTML/CSS with a 1280x720 canvas.
- Clean visual system: TailwindCSS (CDN), Font Awesome icons, and subtle gradients/shadows.
- Interactive charts: Chart.js visualizations embedded directly in `index.html`.
- Easy to edit: Change text, images, and chart data in one file.
- Optional Reveal.js demo: A minimal ESM setup for slide navigation and notes.

## Project Structure
- `index.html`: Main slide deck used by GitHub Pages.
- `slides_icons/`: Logo and badge images used in the deck.
- `slides_raw_html/index_2.html`: Earlier iteration of the custom static deck.
- `slides_raw_html/index_1.html`: Minimal Reveal.js example that uses `main.js`.
- `slides_raw_html/raw_html_*.txt`: Saved HTML snippets/scratch content.
- `main.js`: Initializes Reveal.js (used only with `slides_raw_html/index_1.html`).
- `package.json`: Project metadata; includes `reveal.js` and a dev server script.

## Quick Start
You can view the deck in two ways.

1) Open the static deck directly
- Open `index.html` in any modern browser.
- For presenting, enter full screen (e.g., `F11`) and adjust zoom if needed.

2) Serve locally (recommended for Reveal.js demo or strict browsers)
- Install dependencies (for the Reveal.js demo):
  - `npm install`
- Start a local web server in the repo root:
  - `npx http-server -p 8000 .`
  - Or if you have it globally, use `npm start` (expects `http-server`).
- Open `http://localhost:8000/` and navigate to the file you want to present (`index.html` or a file under `slides_raw_html/`).

## Editing Content
- Text and layout: Edit sections directly in `index.html`.
- Logos on the title slide: Replace images in `slides_icons/` and update the `<img>` tags in `index.html`.
- Logo size: Adjust the CSS variable in `index.html`:
  - In `:root`, change `--logo-height` (e.g., `40px`, `60px`, `80px`).
- Charts: Update datasets inside the `<script>` at the bottom of `index.html` (look for `new Chart(...)`).
- Styling: TailwindCSS utility classes are applied directly; tweak as needed.

## Reveal.js (Optional Demo)
If you prefer keyboard-driven navigation, a minimal Reveal.js setup is included as a demo:

- Ensure dependencies are installed: `npm install`
- Serve locally (module imports require a server): `npx http-server -p 8000 .`
- Open `http://localhost:8000/slides_raw_html/index_1.html`
- Navigation: Use arrow keys, `Esc` for overview, `S` for speaker notes (when the Notes plugin is active).

Note: The main published deck (`index.html`) is custom static HTML and does not rely on Reveal.js.

## Deployment (GitHub Pages)
- The slides are published from this repository via GitHub Pages.
- Live URL: https://radiukpavlo.github.io/my-study-slides/
- To update the website, push changes to `index.html` (and any assets) on the default branch.
- If setting up from scratch: In GitHub settings, enable Pages for the repository and select the root of the default branch.

## Tech Stack
- TailwindCSS (CDN) for rapid styling.
- Font Awesome (CDN) for icons.
- Chart.js (CDN) for charts.
- Optional: Reveal.js (`node_modules/reveal.js`) for the demo slides.

## License
ISC - see `package.json` for details. Images/logos may be subject to their respective owners' terms.

## Acknowledgements
- TailwindCSS - https://tailwindcss.com/
- Font Awesome - https://fontawesome.com/
- Chart.js - https://www.chartjs.org/
- Reveal.js - https://revealjs.com/

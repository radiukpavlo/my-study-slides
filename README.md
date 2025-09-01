# My Study Slides

A lightweight, static slide deck for the talk:

YOLO Ensemble for UAV-based Multispectral Defect Detection in Wind Turbine Components

- Online slides: https://radiukpavlo.github.io/my-study-slides/

The main deck is a single HTML file with handcrafted styles, icons, and a few interactive charts powered by Chart.js. The repo also contains a small Reveal.js demo (optional) if you prefer keyboard-driven slide navigation.

## Features
- Polished static slides: Custom HTML/CSS with a 1280x720 canvas.
- Clean visual system: TailwindCSS (CDN), Font Awesome icons, and subtle gradients/shadows.
- Interactive charts: Chart.js visualizations embedded directly in `index.html`.
- Easy to edit: Change text, images, and chart data in one file.
- Optional Reveal.js demo: A minimal ESM setup for slide navigation and notes.

## Files & Directories
- `index.html`: Primary slide deck used for GitHub Pages. Self-contained custom HTML/CSS with Tailwind (CDN), Font Awesome (CDN), and embedded Chart.js charts. The title slide shows organization logos from `logos/`. Adjust the logo size via the CSS variable `--logo-height` in `:root`.
- `main.js`: ESM entry that initializes Reveal.js. Used only by the demo in `slides_raw_html/index_1.html`.
- `slides_raw_html/`: Sandbox/alternatives for the deck.
  - `slides_raw_html/index_1.html`: Minimal Reveal.js example that imports `main.js`.
  - `slides_raw_html/index_2.html`, `slides_raw_html/index_3.html`: Earlier iterations of the custom static deck layout.
  - `slides_raw_html/raw_html_1.txt`, `slides_raw_html/raw_html_2.txt`: Saved HTML snippets/scratch content used while designing slides.
- `images/`: Figures used across slides (e.g., workflow diagrams such as `yolo_ense_1_workflow.png`, example frames, etc.).
- `logos/`: Title-bar logos and partner/venue badges displayed on the first slide.
- `poster/`: Conference poster files (`IDAACS_2025_Poster.pdf` and source `IDAACS_2025_Poster.pptx`).
- `IDAACS_2025_Presentation.pdf`: Exported PDF of the main slide deck for offline viewing/sharing.
- `.vscode/settings.json`: Workspace setting to tweak the editing experience (e.g., disable HTML auto-closing tags).
- `package.json`: Project metadata. Contains `reveal.js` dependency and a `start` script (`http-server -p 8000 .`).
- `package-lock.json`: Lockfile for reproducible installs.
- `node_modules/`: Local dependencies (not required for `index.html`, only for the Reveal.js demo).
- `temp_tail.txt`: Temporary/scratch content captured during deck assembly. Safe to remove.

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
- Logos on the title slide: Replace images in `logos/` and update the `<img>` tags in `index.html` if names change.
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


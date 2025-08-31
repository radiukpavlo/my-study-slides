# my-study-slides

Professional slide deck for the talk “YOLO Ensemble for UAV-based Multispectral Defect Detection”. The deck is a single-page HTML presentation optimized for 16:9, with responsive auto-scaling to fit any screen and a prominent logos strip on the title slide.

## Features
- 16:9 slides: Fixed base size (1280×720) for predictable layout.
- Responsive auto-fit: Slides scale with CSS transforms to perfectly fit the browser viewport.
- Clean typography and contrast: Clear and legible across devices and projectors.
- Charts: Inline examples using Chart.js CDN.
- Title logos: Institution/partner logos row at the top of the first slide (`slides_icons`).

## Project Structure
- `index.html` — Main presentation (custom HTML/CSS + small JS for scaling and charts).
- `slides_icons/` — Logos displayed on the title slide.
- `slides_raw_html/` — Experimental/demo content (including a Reveal.js example).
- `main.js` — Reveal.js ESM demo entry (not required for `index.html`).

## Quick Start
You can view the slides either by opening the file directly or using a simple local server.

1) Open directly
- Double‑click `index.html` or open it in your browser. Most browsers will render everything correctly since assets are via public CDNs.

2) Serve locally (recommended)
- Using npx: `npx http-server -p 8000 .` then open `http://localhost:8000/`
- Or use VS Code “Live Server”.

## GitHub Pages Deployment
You can host the slides at a public URL from this repository.

1) Push this repository to GitHub (if not already).
2) In your GitHub repo: Settings → Pages.
3) Under “Source”, choose “Deploy from a branch”.
4) Select your default branch (e.g., `main`) and folder `/` (root), then save.
5) Wait for the Pages deployment to finish; your site will be available at `https://radiukpavlo.github.io/my-study-slides/`.

Notes:
- The entry point is `index.html` in the repository root (already configured).
- For a custom domain, add the domain in Pages settings and a `CNAME` DNS record.

## Export to PDF
The deck is optimized for on-screen use. The simplest export path is via your browser print dialog.

Option A: Print to PDF (Chrome/Edge/Brave)
- Open `index.html`.
- Press Ctrl/Cmd+P → “More settings”.
- Set:
  - Destination: “Save as PDF”.
  - Layout: Landscape.
  - Scale: 100% (or “Default”).
  - Margins: None.
  - Headers and footers: Off.
  - Background graphics: On.
- Save. Each slide fits exactly one screenful because the page auto-scales and uses scroll snapping; scroll to each slide and print one-by-one, or use “Save as PDF” after expanding each section as needed.

Option B: Automated export (headless)
- Use a headless browser (e.g., Puppeteer) to capture each slide viewport sequentially. Example script outline:
  - Navigate to the page.
  - For each `.slide-fit-wrapper` section, scroll into view and `page.pdf({ printBackground: true, landscape: true })` or `page.screenshot()` for image-based output.

## Development Notes
- The slides use a fixed base layout (1280×720) and auto-scale to the current viewport with JavaScript. This keeps composition pixel-precise while adapting to projectors and displays.
- External CDNs are used for fonts/icons and charts. For offline usage, consider vendoring these assets locally.
- A Reveal.js ESM demo exists in `slides_raw_html/` and `main.js`, but the production deck is `index.html`.

## Troubleshooting
- If charts don’t render, ensure you are online (Chart.js is loaded from a CDN) or vendor the library locally.
- If logos don’t appear, verify files in `slides_icons/` and their paths in `index.html`.

## License
ISC (see `package.json`).

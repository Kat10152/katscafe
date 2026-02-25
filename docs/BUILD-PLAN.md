Here's what I found: it's a vanilla HTML/CSS static site for Kat's Cafe — 4 HTML pages, one styles.css (563 lines), and no CSS variables — all colors are hardcoded.

Here's a clean breakdown into small, reviewable steps:

Dark Mode Implementation Plan
Step 1 — Introduce CSS custom properties for colors
What: Refactor styles.css to replace all hardcoded color values with CSS variables in a :root {} block. No visual change yet.
Review: The site looks identical before and after.

Step 2 — Define the dark theme palette
What: Add a [data-theme="dark"] selector block in styles.css that overrides each variable with dark-appropriate values (dark backgrounds, light text, muted pinks).
Review: Manually set data-theme="dark" on <html> in DevTools and verify the dark colors look reasonable.

Step 3 — Add a toggle button to the navbar
What: Add a sun/moon toggle button (text-based ☀ / ☾ to avoid image dependencies) to the <nav> in all 4 HTML files. Style it to fit the navbar.
Review: Button appears in the nav on all pages; no functionality yet.

Step 4 — Wire up the toggle with JavaScript
What: Add a small <script> block (or shared script.js) that toggles data-theme="dark" on <html> when the button is clicked, and saves the preference to localStorage.
Review: Click the toggle — the whole page switches color schemes.

Step 5 — Persist preference on page load
What: Add a check at page load that reads from localStorage and applies the saved theme before the page renders (prevents flash of wrong theme).
Review: Set dark mode, navigate to another page, and confirm it stays dark.

Step 6 — Respect system preference as default
What: Update the JS so that if no preference is saved, it falls back to the user's OS preference via prefers-color-scheme: dark.
Review: Clear localStorage, change your OS to dark mode, reload — it should auto-apply dark mode.

Step 7 — Polish and cross-page QA
What: Check images, overlays, shadows, and form inputs on all 4 pages in both modes. Fix any colors that look off (e.g. hero image gradient overlay, card shadows).
Review: Click through every page section in both modes.

Suggested order: Steps 1-2 together (pure CSS, no behavior), then 3-4 together (add UI + JS), then 5-6 (polish persistence), then 7 (QA pass).

Want me to start on Step 1?
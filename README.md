# Japanscape.travel

Website for Japanscape.travel, a private Japan tour operator. Built by Kriyator.

## Stack
Vite + vanilla ES modules (no framework) — matches the Kriyator client-site convention
used for Ignis Studio. Copy lives in `src/content/site.js`, separate from markup, so
content revisions don't touch layout code. Bilingual (ID default, EN toggle) via
`src/lang.js`, a tiny pub/sub every section subscribes to.

## Local dev
```
npm install
npm run dev
```
Note: `public/images/hero-bg.jpg` and `public/images/petal-0..4.png` are binary
assets not yet pushed through this connector (base64 round-trip issue) — pull them
from the `Website/` folder on Alvin's machine (KRIYATOR/CLIENT/Japanscape.travel/Website/)
or ask Alvin for them directly until that's resolved.

## Status (10 Sep 2026)
Pitch deck approved by client. Full Home page built (hero, intro, tours, why-us,
testimonials [placeholder — no real quotes yet], CTA banner, footer) and reviewed —
a11y fixes (lang attribute on toggle, aria-pressed, prefers-reduced-motion, aria-hidden
on the decorative petal canvas), a mobile hamburger menu, and a content error
(Niigata/Hokkaido merge) were fixed after a critical review pass. No other
pages/sections beyond Home started yet — audience is confirmed Indonesian (bilingual
ID/EN), no client feedback on the deck received yet.

## Workflow
Work happens locally / on feature branches. A deploy preview goes to Alvin for approval
before anything merges to `main`. Once live, `main` is production — no direct edits.

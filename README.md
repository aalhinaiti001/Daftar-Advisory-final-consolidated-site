# Daftar Advisory

Static site for Daftar Advisory and its product surface, Calibre by Daftar.
Next.js 15 (App Router) exported to `out/`, deployed on Netlify.

## Surfaces

Three deliberately separate styling systems live in this repo. `CLAUDE.md` explains
which stylesheet governs which route; `BRAND.md` is the brand source of truth.

| Surface | Routes | Source |
|---|---|---|
| Daftar (canon) | `/`, `/about`, `/scope`, `/knowledge/*` | `app/`, styled by `app/daftar.css` |
| Daftar (Arabic) | `/ar`, `/ar/knowledge/*` | `app/ar/`, styled by `app/globals.css` |
| Calibre | `/calibre`, `/ar/calibre` | `design/calibre-home.html`, `design/calibre-home-ar.html` |

Calibre is not part of the Next route tree. `netlify.toml` copies the two static
files into `out/` after `next build`.

`design/daftar-home.html` is the superseded static home page. It is kept as the
source of the recorded brand exception in `BRAND.md` and is **not** deployed.

## Related repositories

Calibre's normative definition lives outside this repo. See `docs/RECONCILIATION.md`
for which repo is canonical for what, and what is known stale where.

## Run locally

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
```

Exports a static site to `out/`. `public/_redirects` handles legacy URLs and routes
`/book` and `/call` through `/scope` until a Microsoft Bookings URL exists.

## Downloadable checklists

`public/*.xlsx` are generated, not hand-edited:

```bash
pip install openpyxl
python3 scripts/build-audit-checklist.py
python3 scripts/build-saudi-phase2-checklist.py
python3 scripts/build-ifrs18-tracker.py
```

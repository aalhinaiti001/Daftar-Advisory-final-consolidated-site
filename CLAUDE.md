# Design system rules — Daftar Advisory / Calibre

This repo runs **three separate, deliberately un-unified styling systems** under one Next.js app. Before touching any styling or importing a Figma design, identify which surface you're on — using the wrong system's tokens/classes on a page is the single most common mistake here. `BRAND.md` at the repo root is the canonical source of truth for color/type/voice; when this file and `BRAND.md` disagree, `BRAND.md` wins.

| Surface | Routes | Stylesheet | Framework |
|---|---|---|---|
| **Daftar (canon)** | `/`, `/about`, `/scope`, `/knowledge/*` | `app/daftar.css`, namespaced `.dft` | Next.js (React), plain CSS |
| **Daftar (legacy) / Arabic** | `/ar`, `/ar/knowledge/*` | `app/globals.css`, namespaced `.daftar` / `.ar` | Next.js (React), plain CSS |
| **Calibre** | `/calibre`, `/ar/calibre` | inline `<style>` + Tailwind Play CDN | Static HTML, copied in at build |

There is no component library, no Storybook, and no design-token build pipeline. Every token is a hand-written CSS custom property or, on Calibre, a Tailwind `theme.extend` block. Treat any Figma import as producing **raw markup + CSS you adapt by hand** into one of the three systems above — never as a new fourth system.

---

## 1. Token definitions

### 1a. Daftar canon — `app/daftar.css` (lines 1–39)
All tokens are CSS custom properties scoped to the `.dft` class (not `:root`), so they only apply where a page opts in:

```css
.dft {
  --paper: #f4f1ea;   --soft: #efebe1;    --card: #faf7f1;
  --ink: #1a1814;     --rule: #d8d2c4;    --rule-soft: #e6e0d4;
  --rust: #a8341f;    --rust-deep: #7d2415;
  --body: #514c45;    --strong: #403a33;  --muted: #6f665d; /* 4.99:1 on --paper, WCAG AA */
  --on-dark: #f4f1ea; --on-dark-dim: #c4bcae; --on-dark-muted: #a09585;
  --serif: "Fraunces", Georgia, serif;
  --sans: "Instrument Sans", Arial, sans-serif;
  --mono: "JetBrains Mono", ui-monospace, monospace;
}
```
Spacing/radii/type scale are **not** tokenized as custom properties — they're literal values repeated per rule (radii are consistently `5px`–`6px`; measure is `min(1120px, calc(100% - 48px))` via `.dft-wrap`). Font sizes mostly use `clamp()` for fluid scaling (e.g. `.dft-h1 { font-size: clamp(2.8rem, 5.4vw, 4.6rem); }`).

`BRAND.md` documents a **different, canonical** palette (`--rust: #B3502B`, `--cream: #F4F1EA`) that the live Daftar site does **not** use — `daftar-home.html` / `app/daftar.css` are a recorded **approved exception** (rust `#A8341F`, Fraunces/JetBrains Mono stack). Don't "fix" this drift; it's intentional per BRAND.md's own note.

### 1b. Daftar legacy / Arabic — `app/globals.css` (single-line, ~11 lines total)
Tokens on bare `:root`, overridden by a `.daftar` class for the cream variant:
```css
:root{--ink:#17181b;--green:#2c3a31;--paper:#fff;--soft:#f5f4f1;--muted:#6e7175;--dim:#4a4c50;--rule:#e3e0d8;--accent:#2c3a31;--serif:'Newsreader',Georgia,serif;--sans:'Instrument Sans',Arial,sans-serif;--mono:'IBM Plex Mono',monospace}
.daftar{--paper:#f4f1ea;--soft:#efebe1;--rule:#d8d2c4;--accent:#b3502b;--ink:#1a1814;--dim:#514c45;--muted:#6f665d;--serif:'Newsreader',Georgia,serif}
```
This is the file `/ar` and `/ar/knowledge/*` still run on — it uses **Newsreader**, not Fraunces, and rust `#b3502b`, matching the BRAND.md canon rather than the EN-home exception. `.ar` selectors additionally swap in `IBM Plex Sans Arabic`. This file is intentionally minified/single-line; don't reformat it as a drive-by change.

### 1c. Calibre — inline `<style>` + Tailwind config, top of `design/calibre-home.html` / `-ar.html`
Colors are CSS custom properties **fed into Tailwind** via `rgb(var(--c-x) / <alpha-value>)`, then swapped per `data-theme`:
```css
:root{ --c-paper-100:250 248 245; --c-forest-600:38 81 71; --c-clay-500:178 91 60; /* ... */ }
html[data-theme="ink"]{ --c-forest-600:43 58 54; --c-clay-500:106 122 130; /* ... */ }
```
```js
tailwind.config = { theme: { extend: {
  colors: { paper: {...}, ink: {800:'#1E2522',950:'...'}, forest: {...}, clay: {...} },
  fontFamily: { serif: ['Lora','serif'], sans: ['"Plus Jakarta Sans"','sans-serif'] },
}}}
```
Four themes exist (`ink` default, `clay`, `midnight`, plus base) toggled via `data-theme` on `<html>`, live-switchable through a dev-only `#tweakPanel` (strip before shipping a "final" design if asked). Per BRAND.md, this Lora/Plus-Jakarta/forest-green stack is an **approved exception** to Calibre's own canonical Newsreader/Instrument/mono spec — don't reconcile the two without an explicit ask.

**Tokens BRAND.md flags as retired — do not reintroduce:** Fraunces→Newsreader, JetBrains Mono→IBM Plex Mono, `#A8341F`→`#B3502B`, any `#A8341F → #D07B59` gradient, `#842815` link-hover, the job title "Principal" (→"Founder").

---

## 2. Component library

**There is no component library or Storybook.** Component-like reuse happens two ways:

1. **One shared chrome file**: `app/_components/SiteChrome.tsx` exports `SiteHeader`, `SiteFooter`, and `Eyebrow` (a section-label component with an `as` prop — `"div" | "h2" | "h3"` — used to give long-form pages a real heading outline instead of an all-`div` label). These three are the only shared React components in the app; every page imports them directly, e.g.:
   ```tsx
   import { SiteHeader, SiteFooter, Eyebrow } from "../_components/SiteChrome";
   <Eyebrow as="h2" tone="rust">§ 01 · Services</Eyebrow>
   ```
2. **Everything else is a page-local composition of CSS classes** from `daftar.css` (`.dft-ledger`, `.dft-notes`, `.dft-faq`, `.dft-check`, `.dft-download`, `.dft-outline`, etc.) applied directly in each `page.tsx`. There's no `<Card>`/`<Button>` abstraction — a "button" is just `className="dft-btn"` / `dft-btn-ghost` / `dft-btn-sm` on an `<a>` or `<button>`.

Content is separated from markup in `app/_data/`:
- `practice.ts` — services, FAQ, steps, notes, timing/focus options (typed with `as const` / small interfaces), shared by the home page and the scope builder so copy can't drift between the two.
- `audit-readiness-checklist.json`, `saudi-einvoicing-phase-2-checklist.json` — checklist content, each imported by **both** a page component and a Python script (`scripts/build-*.py`) that generates a matching downloadable `.xlsx`. If a Figma design changes a checklist's structure, the JSON schema (`{ note, groups: [{ ref, title, blurb, items[] }] }`) needs to keep working for the Python generator too.

**When implementing a new Figma component:** add markup to the relevant `page.tsx` and new rules to `daftar.css` (canon) — don't invent a components folder or a CSS-in-JS system; it would be inconsistent with everything else here.

---

## 3. Frameworks & libraries

- **Framework:** Next.js 15.5 (App Router), React 19, TypeScript 5, `strict: true`. See `package.json` / `tsconfig.json`.
- **Build/export:** `next.config.ts` sets `output: "export"` — this is a **fully static site**, no server runtime, no API routes, no image optimization loader (don't add `next/image` remote loaders or server actions; they silently break the export).
- **Styling:** No CSS-in-JS, no Tailwind in the Next app, no CSS Modules. Plain global stylesheets imported once in `app/layout.tsx`:
  ```tsx
  import "./globals.css";
  import "./daftar.css";
  ```
  Calibre's two static HTML files pull Tailwind from the **Play CDN** (`<script src="https://cdn.tailwindcss.com">`) plus an inline `<style>` block — there is a code comment in the file itself flagging this as prototype-only and recommending a built stylesheet before real production use; that migration has not happened.
- **Package manager:** npm (`package-lock.json` present). Only prod deps are `next`/`react`/`react-dom`; only dev deps are TS types + `typescript`. No linting config beyond Next's default (`next lint`), no test runner.
- **Python tooling:** `scripts/*.py` (openpyxl) generate the downloadable `.xlsx` checklists from the JSON in `app/_data/`. Not part of the Next build; run manually (`pip install openpyxl && python3 scripts/build-audit-checklist.py`).
- **Deploy:** Netlify. `netlify.toml`'s build command runs `next build` **then** copies the two Calibre HTML files into `out/calibre.html` and `out/ar/calibre.html` — Calibre is not part of the Next.js route tree at all, it's bolted on post-build. `public/_redirects` handles legacy URL redirects and the `/book`, `/call` → mailto shortcuts.

---

## 4. Asset management

- **Images:** `public/og-daftar.png`, `public/og-calibre.png` (Open Graph only — there are no in-page photographic/illustrative images anywhere on the Daftar canon pages by design; see §7). Referenced as root-relative paths (`images: ["/og-daftar.png"]` in each page's `metadata`).
- **Favicon:** a single inline SVG monogram, `public/favicon.svg` (32×32, ink tile + rust "D"), referenced via `metadata.icons.icon` in `app/layout.tsx`. Calibre's HTML files instead embed a **data-URI SVG favicon** directly in `<link rel="icon" href="data:image/svg+xml,...">` — same monogram concept, different color (forest green), duplicated inline rather than as a file. If Figma exports a new mark, update both places.
- **Downloadable working files:** `public/*.xlsx` (checklists/trackers) — generated artifacts, not hand-edited; see §2.
- **No CDN/image-optimization config** — `output: "export"` means no `next/image` remote patterns are configured or usable for optimization; treat all images as plain static files served as-is.
- **No `/public/images` or asset directory convention exists yet** — if Figma exports name a bunch of image assets, you're establishing the convention, not following one. Prefer `public/` root or a new `public/images/` folder, matching the flat structure already there.

---

## 5. Icon system

**There is no icon library in the Next.js app.** Zero npm icon packages, zero SVG-sprite system. The two occurrences of inline icon-like graphics in `app/` are hand-authored, one-off illustrative diagrams (not a reusable icon set):
```tsx
// app/knowledge/ifrs-18-transition-2026/page.tsx
<svg viewBox="0 0 700 250" role="img" aria-labelledby="tl-t tl-d"> ... </svg>
```
These use `.dft-figure` / `.dft-figure svg` wrapper classes (in `daftar.css`) for sizing and a `<figcaption>` for the caption. The mobile nav "hamburger" is a literal `☰` Unicode glyph in a `<label>`, not an icon component.

**Calibre uses Lucide** via the CDN UMD build (`<script src="https://unpkg.com/lucide@latest">`) with `data-lucide="name"` attributes on `<i>` tags, rendered client-side. This is the **only** place in the repo with a real icon system:
```html
<i data-lucide="mail" class="w-5 h-5 text-clay-500 mb-2" aria-hidden="true"></i>
```
14 icons currently used on the EN Calibre page (mail, message-circle, calendar-check, arrow-right, menu, check, etc.), mirrored on the AR page. If a Figma design specifies icons for a **Daftar canon** page, the deliberate house style (BRAND.md: "ruled, not shadowed"; no gradients; restrained voice) has so far avoided icons entirely in favor of typography and hairline rules — flag this to the user before adding an icon dependency to that surface; it would be a house-style departure, not just an implementation detail. Icons on **Calibre** are fine to extend via the same `data-lucide` + unpkg pattern already in place.

---

## 6. Styling approach

- **Methodology:** hand-written global CSS with a manual namespace-prefix convention — every class on the canon surface is `dft-*` (e.g. `.dft-btn`, `.dft-ledger`, `.dft-article-table`), explicitly to prevent bleed into the legacy/Calibre surfaces that share the same `<body>` in a static export. No CSS Modules, no BEM tooling, no PostCSS plugins beyond what Next.js bundles by default.
- **Cascade-order landmines:** `app/globals.css` has **unscoped element selectors** (`header{}`, `nav{}`, `footer{}`) left over from the legacy design. Because `daftar.css` loads after `globals.css` in `layout.tsx`, canon components that are also real `<header>`/`<nav>`/`<footer>` elements must **explicitly re-declare** properties like `padding`, `display`, and `position` to escape the legacy rule — this is called out in code comments at `.dft-header`, `.dft-nav`, `.dft-footer` in `daftar.css`. If a Figma-driven change to header/nav/footer stops "positioning correctly," check this first before assuming a new bug.
- **Dark/light sections, not dark/light mode:** there's no `prefers-color-scheme` theming. "Dark" is a per-section class (`.dft-section-dark`) used sparingly (once per page max) for emphasis, per BRAND.md's "contrast used deliberately, not constantly" rule — not a site-wide theme toggle.
- **Global styles:** `app/globals.css` (legacy/Arabic + a11y-critical rule that `.dft p` deliberately does **not** get a blanket margin reset — see the comment at `daftar.css:63-65`, because `globals.css` already zeroes `p` margin at element specificity and a `.dft p` override would outrank single-class rules that set one). `app/daftar.css` (canon). Both are imported once, globally, in `app/layout.tsx` — no per-page or per-component stylesheets on the Next side.
- **Responsive strategy:** `daftar.css` uses three shared max-width breakpoints (`1040px`, `900px`, `620px`) with plain `@media` blocks at the bottom of the file (not a mobile-first utility system) — most layouts collapse multi-column grids to `1fr` and swap the sticky desktop nav for a checkbox-driven mobile menu (`.dft-nav-toggle` is a visually-hidden-but-focusable checkbox, not `display:none`, specifically to stay keyboard-navigable). A **print stylesheet** also exists (`@media print` at the bottom of `daftar.css`) for the checklist pages specifically — it strips header/footer/CTA and forces page-break-avoid on checklist groups. Calibre uses Tailwind's default responsive prefixes (`sm:`, `lg:`) directly in class names instead.
- **RTL:** handled via `[dir=rtl]` attribute selectors in `globals.css` (flips border sides, margins) rather than logical properties throughout — `app/daftar.css`'s newer canon rules do use logical properties (`padding-inline-start`, `inset-inline`) more consistently. `/ar` routes get `lang="ar"` / RTL context from their own page-level markup, not a shared layout switch (BRAND.md flags this — no shared `<html lang>` switching — as a known, unfixed inconsistency).

---

## 7. Project structure

```
app/
  _components/SiteChrome.tsx     # only shared React components (header/footer/eyebrow)
  _data/                         # content, separated from markup
    practice.ts                    # services/FAQ/steps/notes — typed, shared by home + scope builder
    audit-readiness-checklist.json # checklist content, also consumed by scripts/build-*.py
    saudi-einvoicing-phase-2-checklist.json
  daftar.css                     # canon stylesheet (.dft namespace) — most active development happens here
  globals.css                    # legacy/Arabic stylesheet (:root, .daftar, .ar) — minified, single-line
  layout.tsx                     # root layout: imports both stylesheets, sets Organization JSON-LD
  page.tsx                       # home (canon)
  about/page.tsx                 # canon
  scope/page.tsx + ScopeBuilder.tsx  # canon; ScopeBuilder is a "use client" component (only one in the app)
  ar/page.tsx                    # Arabic home (legacy stylesheet)
  ar/knowledge/saudi-compliance-2026/page.tsx
  knowledge/*/page.tsx           # long-form articles + checklists, all canon
design/
  daftar-home.html               # OLD static home page — superseded, NOT deployed (see netlify.toml comment)
  calibre-home.html               # Calibre EN — static, Tailwind CDN, copied into /calibre at build
  calibre-home-ar.html            # Calibre AR — static, copied into /ar/calibre at build
scripts/
  _checklist_xlsx.py + build-*.py  # generate public/*.xlsx from app/_data/*.json
public/                          # static assets, redirects, sitemap, generated .xlsx files
BRAND.md                         # canonical brand source of truth — READ FIRST for any visual change
netlify.toml                     # build command that stitches Next export + static Calibre files together
```

**Organizing principle:** routes under `app/` mirror URL structure exactly (Next App Router convention); there is no feature-folder or atomic-design grouping. The one real architectural split to internalize is **canon vs. legacy vs. Calibre** (top of this doc) — almost every styling bug or "why doesn't my class work" question traces back to which of the three you're actually in.

**Before any visual change from a Figma file:**
1. Read `BRAND.md` — check whether the target surface (Daftar canon / Daftar `/ar` / Calibre) has an approved exception, and whether any element in the Figma file matches something on the retired-tokens list.
2. Identify which stylesheet governs the target page (table at the top of this file).
3. Reuse existing `.dft-*` classes / patterns where the Figma design matches an existing pattern (ledger rows, FAQ rows, download blocks, checklist groups) rather than inventing new ones — the house style is deliberately restrained (few repeated motifs; see BRAND.md's "no gradients," "ruled not shadowed," ≤1 dark section per page rules).
4. Run `npm run build` and check the static export in `out/` before calling a change done — this is a static-export site, so anything relying on server behavior or client-only APIs will fail silently or export wrong.

# Brand Source of Truth — Daftar Advisory + Calibre

Canonical brand stack for all house surfaces. When a surface disagrees with this file,
this file wins and the surface gets conformed — not the other way around.

- **Authority:** House Brand Handbook **v1.5** (§00–§09). Verified against the issued PDF.
- **v1.5 latest issued** — confirmed on the handbook cover; supersedes v1.4. (The Business
  Overview still cites v1.4 as its source, but v1.5 governs brand.)
- **Strategy overlay:** House Strategy Amendment 01 (21 Jul 2026) governs *positioning*,
  not visual brand — see the Calibre note below.

One house, two marks. Parent and product **share one type system and one voice; they
diverge only in colour.** A reader must always know which one is speaking.

---

## Colour

### Daftar — cream & rust (the parent / the firm)
| Role        | Token         | Hex        | Status on the Daftar canon surface (`app/daftar.css`) |
|-------------|---------------|------------|--------------------------------------------------------|
| Paper/cream | `--cream`     | `#F4F1EA`  | ✅ canonical                                            |
| Rust/accent | `--rust`      | `#B3502B`  | ⚠️ `#A8341F` runs live — **recorded exception**, not a defect (see below) |
| Ink         | `--ink`       | `#1A1814`  | ✅ canonical                                            |
| Soft band   | `--soft-band` | `#EFEBE1`  | ✅ present as `--soft`                                  |

### Calibre — white & green (the product / by Daftar)
| Role        | Token             | Hex        |
|-------------|-------------------|------------|
| Paper/white | `--cal-white`     | `#FFFFFF`  |
| Green/accent| `--cal-green`     | `#2C3A31`  |
| Void/band   | `--cal-void`      | `#111214`  |
| Card soft   | `--cal-card`      | `#F5F4F1`  |

> **Approved exception — the Calibre product surface (served at `/calibre` from this repo).**
> Per Founder ruling, the shipped "Guesswork" design **overrides the v1.5 Calibre spec above**
> for the live product site. It uses **Lora** (display/serif) + **Plus Jakarta Sans** (UI) — not
> the shared Fraunces/Instrument/JetBrains stack — and a themeable palette (default `ink`):
> forest green `~#265147`/`#2B3A36` primary with a **clay `#B25B3C`** secondary accent and a
> white/paper ground. The v1.5 rows above remain the *handbook ideal*; the live site is a
> recorded exception, not a target to conform. (Daftar's own v1.5 stack is unaffected.)
> **Flag closed on this repo's surface:** the unsourced **"Δ 41 pts"** hero stat was removed from
> `design/calibre-home.html` / `-ar.html`. It still runs, twice, in the `calibre-by-daftar` bundle,
> which publishes a second copy of the Calibre site — see `docs/RECONCILIATION.md`.

**Colour rules (§03) — apply to Daftar; Calibre live surface is the exception noted above:**
- One accent + one ground per brand. **No third accent. No gradients.**
- **Rust is reserved for large text, rules, icons, and emphasis — never body copy or
  small text on cream** (it sits near the 4.5:1 threshold).
- Parent and product **never share a ground on the same surface.** Cream = Daftar,
  white = Calibre. When Calibre appears inside a Daftar page it sits on a **green band**
  — never the reverse.
- Colour can drop out (mono, email, photocopy) — always back it with a second signal:
  the **monogram**, the **by Daftar** kicker, and the **§ chapter-prefix**.

## Type (§04)

**Founder ruling, 12 September 2026 — Fraunces is the Daftar display face.**
Fraunces is canonical for every Daftar surface, English and Arabic, and for the
shared house system. Newsreader is retired. The live Calibre site remains on its
separately approved Lora and Plus Jakarta Sans exception.

| Role                     | Family              | Weights   |
|--------------------------|---------------------|-----------|
| Display / headlines      | **Fraunces**        | 300–700 (italic = wordmark voice) |
| Body / UI                | **Instrument Sans** | 400–600   |
| Eyebrows / labels / data | **JetBrains Mono**  | 400–500 (+3 tracking) |

All three are on Google Fonts (the site already `preconnect`s to `fonts.googleapis.com`).

## Layout & marks (§02, §06)
- Monogram: single knockout letter in a solid tile, set in Fraunces; same corner radius
  and clearspace; **the kicker is never set in the serif.**
- **Ruled, not shadowed** — sections divided by 1px rules, never drop shadow.
- Base-8 spacing (8 · 16 · 24 · 48 · 80). Max content width 1080px; 80px gutters.
- One accent italic phrase per composition (normally a single word).

## Voice (§05)
Plainly, with the working shown. Confidence without decoration. **Ahmad is "Founder"
on every surface — "Principal" is retired.** No cadence/superlative claims until the
record earns them.

**Founder ruling, 12 September 2026 — Daftar speaks as a boutique firm.** Site and
collateral copy use "we" for the company. "We" is the firm, not a headcount claim:
copy must not invent a team, staff numbers, or people who are not on the work. The
senior-contact commitment remains explicit about who the client works with.

---

## Retired — purge on sight
- Font: **Newsreader** on Daftar surfaces → Fraunces
- Font: **IBM Plex Mono** on Daftar surfaces → JetBrains Mono
- Accent: rust **`#A8341F`** → `#B3502B` (incl. SVG loading mark) — *except* on the Daftar
  canon surface, where `#A8341F` is the recorded exception below
- The **`#A8341F → #D07B59` gradient** and the `#D07B59` tint — violate "no gradients /
  no third accent." **Remove the gradient; do not re-derive the tint.**
- **`#842815`** link-hover — re-derive a darker shade from `#B3502B`, or drop.
- Title: **"Principal"** → "Founder".

## Approved colour exception — the live Daftar home (`daftaradvisory.com`)
> Fraunces (display), Instrument Sans (body), and JetBrains Mono (labels) are the
> Daftar type system everywhere. The live English surface retains the approved rust
> **`#A8341F`** (with `#7d2415` hover) rather than the handbook's `#B3502B`, on cream
> `#F4F1EA` / ink `#1A1814`. The Arabic surface still uses `#B3502B`; that colour
> difference remains open. Arabic text continues to use IBM Plex Sans Arabic.

## Surface still on the retired stack (not yet ruled)
- **`daftar-engagement-letter` skill** — spec references the retired stack; conform or record
  as an exception when next touched.

## Calibre positioning (Canonical House Strategy, 21 Jul 2026)
Canon reference is the **Canonical House Strategy**, which supersedes the House Strategy,
Amendment 01, and Daftar 2.0. Calibre stays the **hiring-decision product** (attachment-only,
"by Daftar" kicker, pre-revenue). The buyable offer is the **Calibre Verdict** — a done-for-you
**finance-role** hiring-decision memo for a defined shortlist; the label "hiring diagnostic" is
retired. Per the Deep Research Assessment, scope is the **narrow finance-hiring advisory**
(structured role definition, anchored scorecards, written memo) with **no psychometric or
predictive-validity claims**; the broad talent service and work-style tool are deferred/removed.
Any site/collateral copy calling Calibre a "hiring diagnostic" should move to "Calibre Verdict."

**Normative for Calibre claims:** `product/METHOD.md` and `product/GUARDRAILS.md` in the
`calibre-saas-claude` repo. Where site copy and those files disagree, those files win. In
particular the method never sorts, ranks, or labels finalists, and never produces a "fit"
score — so no surface may promise a ranked shortlist or a role-fit score. See
`docs/RECONCILIATION.md`.

---

## CSS custom properties (canonical)
```css
:root {
  /* Daftar */
  --cream: #F4F1EA;  --rust: #B3502B;  --ink: #1A1814;  --soft-band: #EFEBE1;
  /* Calibre */
  --cal-white: #FFFFFF;  --cal-green: #2C3A31;  --cal-void: #111214;  --cal-card: #F5F4F1;
  /* Type (shared) */
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Instrument Sans", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}
```

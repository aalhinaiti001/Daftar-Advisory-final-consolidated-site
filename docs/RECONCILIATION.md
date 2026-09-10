# Repo reconciliation — Daftar Advisory, Calibre

Three repositories describe Calibre and the house brand, and they had drifted apart.
This file records which one is canonical for what and how the drift was resolved.
Reviewed 10 September 2026.

## Who owns what

| Question | Canonical source |
|---|---|
| What Calibre *is*, and what it may claim | `calibre-saas-claude` — `product/METHOD.md`, `product/GUARDRAILS.md` |
| Colour, type, voice, retired tokens | this repo — `BRAND.md` |
| What is actually shipped at `daftaradvisory.com` and `/calibre` | this repo — `app/`, `design/`, `netlify.toml` |
| Product architecture decisions | `calibre-saas-claude` — `product/DECISIONS.md` |

`calibre-by-daftar` is **not canonical for anything**. It is an archive of earlier
design work retained only as provenance. See below.

Where two sources disagreed, the rule applied was *better grounded wins, not newest*.
The method files won on claims because they are the only artefacts tied to the July 2026
deep research assessment and to legal exposure. `BRAND.md` won on visual tokens because
it is the handbook of record and already carries the Founder's exceptions.

## Reconciled in this repo

**1. The site promised something the method forbids.**
`design/calibre-home.html` and `-ar.html` sold "a ranked, defensible verdict" and a
"one ranked recommendation", in five places each. `METHOD.md` §6 and §9 are explicit that
the weighted result is shown in entry order and that the method never sorts, ranks,
colours, or labels finalists; the recommendation in §7.8 is human-written prose. The word
was removed on both language surfaces. The offer is unchanged: one written verdict, with
the reasons and the risks named.

**2. "Role-fit scorecard" → "Role-specific scorecard".**
`GUARDRAILS.md` §2 prohibits producing a fit score and §7 forbids implying the method
measures fit. The deliverables list already used "role-specific"; the engagement list
now matches it. Mirrored in Arabic.

**3. The use statement was half-quoted.**
Both footers carried "not a psychometric assessment, does not predict performance" but
dropped the clause that carries the liability. `METHOD.md` §7.10 is now quoted whole:
the decision, and its consequences, rest with the employer.

**4. `BRAND.md` contradicted itself on rust.**
The colour table marked `#A8341F` a defect to conform while the exception block below
approved it for that same surface. The table now reads as the exception it is.

**5. `BRAND.md` open flag on the unsourced "Δ 41 pts" stat is closed here.**
It was removed from both Calibre pages in this repo. It remains only in the retired
`calibre-by-daftar` bundle, which is retained as design provenance and is not deployed.

**6. `BRAND.md` described a deploy path that no longer exists.**
It said the Daftar home is served from `design/daftar-home.html` over `out/index.html`.
`netlify.toml` stopped doing that when the Next home page shipped. The exception is
unchanged; only the description of where the stack lives was corrected.

**7. `README.md` described a different repository.**
It listed `/` as the Calibre diagnostic and `/daftar` as the firm page, and credited a
"Ledger design system". Neither route exists. It now maps the three real surfaces and
carries the retired "hiring diagnostic" label nowhere.

## Reconciled in related repos

Completed 10 September 2026:

- **`calibre-by-daftar` is now an explicit design archive.** Its Netlify configuration
  and GitHub Pages workflow were removed in `Calibre-by-Daftar` PR #8, GitHub Pages was
  disabled, and the two stale PRs that could republish the retired site were closed.
  The design canvas,
  deck, component cards, and old bundle remain as provenance. Its README points here
  for the canonical site and warns that the old bundle must not be republished.
- **`calibre-saas-claude` now records the website work as applied.** Its PR #3 updates the
  2 September founder decision entry and points it to `daftaradvisory.com/calibre`.
- **The booking shortcuts work again.** PR #37 routes `/book` and `/call` to `/scope`
  with temporary redirects, replacing the unsupported `mailto:` targets.

Live checks on 10 September returned 200 for `daftaradvisory.com/calibre`, with none of
the retired claims above, and 404 for the former Netlify, GitHub Pages, and legacy custom
domain URLs.

## Not changed, deliberately

- **`design/daftar-home.html` stays.** It is superseded and not deployed, and `netlify.toml`
  explains why it must not be copied over `index.html`. It is also the export the recorded
  brand exception was baked from, so deleting it would lose the provenance.
- **The Fraunces / JetBrains Mono / `#A8341F` stack stays on the Daftar canon surface.**
  Retired per the handbook, approved per Founder ruling. Recorded exception, not drift.
- **The Calibre Lora / Plus Jakarta Sans / forest-green stack stays.** Same reason.
- **`/ar` still runs the v1.5 canon stack while the English home runs the exception.**
  A real inconsistency, already flagged in `BRAND.md`, and out of scope for a copy pass.
- **The hero's "Reader A 82 / Reader B 41" panel stays.** It depicts the problem, two
  readers with no shared standard, and is labelled illustrative. It is not the product's
  output, so the no-labels rule does not reach it.

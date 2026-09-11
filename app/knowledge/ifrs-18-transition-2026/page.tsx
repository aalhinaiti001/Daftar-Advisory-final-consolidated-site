import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../../_components/SiteChrome";

const TITLE = "IFRS 18 lands in 2027. The comparative year is 2026.";
const DESC =
  "IFRS 18 is mandatory from 1 January 2027, which makes FY2026 the comparative year being restated. What changes, what deliberately does not, the seven workstreams that take the longest, and a transition plan you can run.";
const URL = "/knowledge/ifrs-18-transition-2026";
const PUBLISHED = "2026-08-19";
const MODIFIED = "2026-09-12";
const PLAN_FILE = "/ifrs-18-transition-plan-2026.xlsx";

export const metadata: Metadata = {
  title: `${TITLE} — Daftar Advisory`,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    siteName: "Daftar Advisory",
    title: TITLE,
    description: DESC,
    url: URL,
    images: ["/og-daftar.png"],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/og-daftar.png"],
  },
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: {
    "@type": "Person",
    name: "Ahmad Al Hinaiti",
    jobTitle: "Founder",
    url: "https://daftaradvisory.com/about",
  },
  publisher: { "@type": "Organization", name: "Daftar Advisory", url: "https://daftaradvisory.com" },
  mainEntityOfPage: `https://daftaradvisory.com${URL}`,
  image: "https://daftaradvisory.com/og-daftar.png",
};

/* Two levels only. There is no /knowledge index route yet, so a three-level
   trail would advertise a URL that 404s. */
const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Daftar Advisory", item: "https://daftaradvisory.com" },
    { "@type": "ListItem", position: 2, name: TITLE, item: `https://daftaradvisory.com${URL}` },
  ],
};

/* Mirrors the downloadable tracker. The page carries the plan; the workbook
   carries the same rows plus blank owner, status and notes columns. */
const PLAN: [string, string, string, string][] = [
  [
    "01 Specified main business activity",
    "Written determination at consolidated and separate level, with the reasoning retained",
    "Board or management paper; group structure; regulatory licences",
    "Sep 2026",
  ],
  [
    "02 Classification policy",
    "Approved policy covering all five categories",
    "Draft accounting policy; chart of accounts mapping",
    "Oct 2026",
  ],
  [
    "03 Cross-cutting judgements",
    "Documented treatment for FX, derivatives and hedges, leases, disposals and restructuring",
    "Technical memo per judgement; supporting contracts",
    "Oct 2026",
  ],
  [
    "04 By-nature feasibility",
    "Confirmation the by-nature detail exists at the granularity required, or a capture change made while 2026 is still open",
    "General ledger extract; chart of accounts; ERP configuration",
    "Oct 2026",
  ],
  [
    "05 MPM inventory",
    "Inventory built from what has actually been published, with tax and NCI effect per reconciling item",
    "Earnings releases; investor decks; management commentary",
    "Nov 2026",
  ],
  [
    "06 Systems and data",
    "Chart of accounts and consolidation system able to produce the new structure for the full comparative year",
    "ERP and consolidation change log; test extract",
    "Nov 2026",
  ],
  [
    "07 IAS 7 and IAS 34 knock-on",
    "Cash flow starting point and interest and dividend classification set; interim MPM reporting scoped",
    "Draft cash flow statement; interim reporting calendar",
    "Dec 2026",
  ],
];

const FAQ: { num: string; q: string; a: string }[] = [
  {
    num: "01",
    q: "Does IFRS 18 change our reported profit?",
    a: "No. Recognition and measurement are untouched. Net profit for the period, assets and liabilities are exactly what they would have been under IAS 1. What changes is the structure the result is presented in, and what has to be disclosed alongside it.",
  },
  {
    num: "02",
    q: "We have a December year-end. What is actually due, and when?",
    a: "IFRS 18 first applies to the year beginning 1 January 2027. The first report that carries it is not the FY2027 annual report, though. It is the first interim report of 2027, which lands months earlier and already needs restated comparatives. Anyone planning around a late 2027 deadline has the wrong date.",
  },
  {
    num: "03",
    q: "Do we really have to restate 2026?",
    a: "The 2026 statement of profit or loss has to be re-presented in the new structure, with a reconciliation back to what was reported under IAS 1. That is why the year in progress matters: every month that closes without IFRS 18-capable data is a month that has to be reconstructed later from records never designed to answer the question.",
  },
  {
    num: "04",
    q: "We present operating expenses by function. What is the extra work?",
    a: "You will need to disclose specified expenses by nature in the notes. In practice that is a data exercise rather than a drafting one. If the general ledger was built to report by function, the by-nature detail may not exist at the granularity required, and no amount of note-writing will conjure it. It is the workstream most likely to expose the chart of accounts, which is why it belongs in 2026 and not in 2027.",
  },
];

/* Small helpers so the SVG label pairs stay readable in source. */
const MONO = "var(--mono)";
const SANS = "var(--sans)";

export default function Ifrs18Transition2026() {
  return (
    <div className="dft">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <SiteHeader active="knowledge" />

      <main className="dft-rise">
        <section className="dft-wrap dft-page-head">
          <Eyebrow tone="rust">§ 00 · Knowledge</Eyebrow>
          <h1 className="dft-h1">
            IFRS 18 lands in 2027. The <em>comparative year</em> is 2026.
          </h1>
          <div className="dft-article-meta">
            <span>Ahmad Al Hinaiti</span>
            <span>·</span>
            <span>Founder, Daftar Advisory</span>
            <span>·</span>
            <span>Published 19 August 2026</span>
            <span>·</span>
            <span>Reviewed 12 September 2026</span>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-article dft-article-lede">
            <p className="dft-lead">
              If you report on a calendar year, the numbers that will sit in the comparative column
              are being generated right now.
            </p>
            <p>
              It is August 2026. For an entity with a 31 December year-end applying IFRS 18 for the
              first time in 2027, the comparative period is the year currently in progress, with
              roughly four months of it left.
            </p>
            <p>
              That is the whole argument for treating this as a live 2026 project rather than a 2027
              one. Transition is retrospective. The 2026 statement of profit or loss will have to be
              re-presented in the new structure, with a line-by-line reconciliation back to what was
              reported under IAS 1. Every month that closes without IFRS 18-capable data is a month
              that has to be reconstructed later, from records that were never designed to answer the
              question.
            </p>
            <p>
              The IFRS Foundation&rsquo;s transition materials make the sequence clear: retrospective
              application means comparative information must be ready for the first IFRS 18 reports.
              For a calendar year reporter, that makes 2026 a data and systems question, not merely a
              2027 disclosure deadline. See the{" "}
              <a href="https://www.ifrs.org/issued-standards/list-of-standards/ifrs-18-presentation-and-disclosure-in-financial-statements/">
                IFRS Foundation&rsquo;s IFRS 18 overview
              </a>.
            </p>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 01 · What changes, and what deliberately does not</Eyebrow>
            <div className="dft-article">
              <p>
                IFRS 18 was issued in April 2024 and replaces IAS 1. It is mandatory for annual
                periods beginning on or after 1 January 2027, with early application permitted.
              </p>
              <p>
                It changes nothing about recognition or measurement. Net profit for the period is
                unchanged. Assets, liabilities, and the bottom line are exactly what they would have
                been.
              </p>
              <p>
                This is precisely why the standard gets underestimated. A change that does not move
                the bottom line reads as cosmetic, and cosmetic changes get scheduled late. But
                presentation and disclosure changes reach into the chart of accounts, the
                consolidation system, the investor communications, and the interim reporting
                calendar. Those are slower to move than a measurement adjustment ever is.
              </p>
              <p>
                The issued standard introduces defined subtotals and categories in the statement of
                profit or loss, together with disclosures for management defined performance measures.
                That combination changes both structure and judgement; it cannot be reduced to a
                mapping table built the week before year end. The{" "}
                <a href="https://www.ifrs.org/content/dam/ifrs/project/primary-financial-statements/ifrs-standard/projectsummary-ifrs18-april2024.pdf">
                  IFRS Foundation project summary
                </a>{" "}
                provides the primary overview.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 02 · Where the dates actually fall</Eyebrow>
            <div className="dft-article">
              <p>
                The trap in the calendar is not the annual report. It is the interim one.
              </p>
            </div>
            <figure className="dft-figure">
              <svg viewBox="0 0 700 250" role="img" aria-labelledby="tl-t tl-d">
                <title id="tl-t">IFRS 18 comparative-year timeline for a 31 December year-end</title>
                <desc id="tl-d">
                  FY2026 is the comparative period that will be restated. IFRS 18 first applies from
                  1 January 2027. The first interim report of 2027 already carries restated
                  comparatives and arrives well before the first annual report, which is published in
                  2028.
                </desc>

                <text x="30" y="28" fill="var(--muted)" fontFamily={MONO} fontSize="11" letterSpacing="1.6">
                  FY2026
                </text>
                <text x="330" y="28" fill="var(--muted)" fontFamily={MONO} fontSize="11" letterSpacing="1.6">
                  FY2027
                </text>

                {/* Rust wash, not var(--soft): this figure sits on a soft section,
                    where a soft fill is invisible. The tint marks the year at risk. */}
                <rect x="30" y="42" width="290" height="48" fill="rgba(168, 52, 31, 0.07)" stroke="var(--rule)" />
                <rect x="320" y="42" width="270" height="48" fill="none" stroke="var(--rule)" />

                <text x="44" y="72" fill="var(--strong)" fontFamily={SANS} fontSize="14">
                  Comparative year, restated
                </text>
                <text x="334" y="72" fill="var(--strong)" fontFamily={SANS} fontSize="14">
                  IFRS 18 first applies
                </text>

                {/* You are here: August 2026, about two thirds through the band. */}
                <line x1="200" y1="36" x2="200" y2="140" stroke="var(--rust)" strokeWidth="2" />
                <circle cx="200" cy="36" r="4" fill="var(--rust)" />
                <text x="208" y="152" fill="var(--rust)" fontFamily={MONO} fontSize="11" letterSpacing="1.2">
                  AUGUST 2026
                </text>
                <text x="208" y="170" fill="var(--body)" fontFamily={SANS} fontSize="13">
                  Four months of the comparative year left
                </text>

                <line x1="320" y1="90" x2="320" y2="196" stroke="var(--rule)" strokeWidth="1" />
                <text x="328" y="208" fill="var(--muted)" fontFamily={MONO} fontSize="11" letterSpacing="1.2">
                  1 JAN 2027
                </text>

                {/* The interim report is the first thing that carries the new structure. */}
                <line x1="450" y1="90" x2="450" y2="140" stroke="var(--rust)" strokeWidth="2" />
                <circle cx="450" cy="90" r="4" fill="var(--rust)" />
                <text x="458" y="152" fill="var(--rust)" fontFamily={MONO} fontSize="11" letterSpacing="1.2">
                  FIRST 2027 INTERIM
                </text>
                <text x="458" y="170" fill="var(--body)" fontFamily={SANS} fontSize="13">
                  Already carries restated comparatives
                </text>

                <line x1="640" y1="90" x2="640" y2="196" stroke="var(--rule)" strokeWidth="1" />
                <text x="632" y="208" textAnchor="end" fill="var(--muted)" fontFamily={MONO} fontSize="11" letterSpacing="1.2">
                  FY2027 ANNUAL, IN 2028
                </text>
              </svg>
              <figcaption>
                The first report under IFRS 18 is an interim one, not an annual one.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 03 · Classification into the five categories</Eyebrow>
            <div className="dft-article">
              <p>
                Income and expenses now sit in operating, investing, financing, income taxes, or
                discontinued operations, with two mandatory subtotals: operating profit or loss, and
                profit or loss before financing and income taxes.
              </p>
              <p>
                Operating is a residual. It is what remains after everything else has been classified,
                not a positive list of qualifying items. That inverts how most preparers instinctively
                approach it, and it is the single most useful thing to internalise before writing the
                policy.
              </p>
            </div>
            <figure className="dft-figure">
              <svg viewBox="0 0 700 430" role="img" aria-labelledby="fl-t fl-d">
                <title id="fl-t">How an item of income or expense reaches a category</title>
                <desc id="fl-d">
                  Each item is tested in turn: discontinued operation, income taxes, financing, then
                  investing. Anything not caught by those four falls into operating, which is a
                  residual rather than a defined list.
                </desc>

                {[
                  ["Is it a discontinued operation?", "Discontinued operations", 20],
                  ["Is it income tax expense?", "Income taxes", 90],
                  ["Does it arise from financing?", "Financing", 160],
                  ["Does it arise from an investment?", "Investing", 230],
                ].map(([q, out, y]) => (
                  <g key={out as string}>
                    <rect x="30" y={y as number} width="360" height="50" fill="none" stroke="var(--rule)" />
                    <text
                      x="46"
                      y={(y as number) + 31}
                      fill="var(--strong)"
                      fontFamily={SANS}
                      fontSize="14"
                    >
                      {q as string}
                    </text>
                    <line
                      x1="390"
                      y1={(y as number) + 25}
                      x2="446"
                      y2={(y as number) + 25}
                      stroke="var(--rust)"
                      strokeWidth="1"
                    />
                    <text
                      x="404"
                      y={(y as number) + 18}
                      fill="var(--rust)"
                      fontFamily={MONO}
                      fontSize="10"
                      letterSpacing="1.2"
                    >
                      YES
                    </text>
                    <rect
                      x="446"
                      y={y as number}
                      width="224"
                      height="50"
                      fill="var(--card)"
                      stroke="var(--rule)"
                    />
                    <text
                      x="462"
                      y={(y as number) + 31}
                      fill="var(--ink)"
                      fontFamily={SANS}
                      fontSize="14"
                    >
                      {out as string}
                    </text>
                  </g>
                ))}

                {/* The fall-through spine: every "no" drops to the next question. */}
                <line x1="210" y1="70" x2="210" y2="90" stroke="var(--rule)" strokeWidth="1" />
                <line x1="210" y1="140" x2="210" y2="160" stroke="var(--rule)" strokeWidth="1" />
                <line x1="210" y1="210" x2="210" y2="230" stroke="var(--rule)" strokeWidth="1" />
                <line x1="210" y1="280" x2="210" y2="310" stroke="var(--rust)" strokeWidth="2" />

                <rect x="30" y="310" width="640" height="58" fill="var(--soft)" stroke="var(--rust)" />
                <text x="46" y="336" fill="var(--ink)" fontFamily={SANS} fontSize="15" fontWeight="600">
                  Operating
                </text>
                <text x="46" y="356" fill="var(--body)" fontFamily={SANS} fontSize="13">
                  The residual: everything the four questions above did not catch
                </text>

                <text x="30" y="394" fill="var(--muted)" fontFamily={SANS} fontSize="12">
                  Where the entity has a specified main business activity, items that would otherwise be
                </text>
                <text x="30" y="412" fill="var(--muted)" fontFamily={SANS} fontSize="12">
                  investing or financing move into operating instead.
                </text>
              </svg>
              <figcaption>
                Operating is reached by elimination, not by definition.
              </figcaption>
            </figure>
            <div className="dft-article">
              <p>
                The cross-cutting judgements are where this bites. Foreign exchange differences follow
                the item they arise from, derivative results follow the item being hedged, and a lease
                splits, with depreciation of the right-of-use asset in operating and interest on the
                lease liability in financing. Pressure-test the policy against those rather than
                against the easy items.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 04 · The by-nature disclosure, if you present by function</Eyebrow>
            <div className="dft-article">
              <p>
                Entities presenting operating expenses by function must disclose specified expenses by
                nature in the notes. In practice this is a genuine data exercise, not a disclosure
                drafting exercise. If the general ledger was built to report by function, the by-nature
                detail may simply not exist at the granularity required, and no amount of note-writing
                will conjure it. This is the workstream most likely to expose the chart of accounts,
                and the one with the least tolerance for being left until 2027.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 05 · Management-defined performance measures</Eyebrow>
            <div className="dft-article">
              <p>
                MPMs are narrower than &ldquo;non-GAAP&rdquo; as most people use the term: they are
                subtotals of income and expenses used in public communications outside the financial
                statements that convey management&rsquo;s view of performance and are not
                IFRS-specified. Free cash flow and net debt fall outside.
              </p>
              <p>
                The difficulty is not the definition; it is the inventory. Identifying MPMs sends the
                team back through earnings releases, investor presentations, management commentary,
                and analyst materials, often across several functions that have never had to reconcile
                what they say publicly with what the financial statements support.
              </p>
              <p>
                Each identified MPM then needs a description and purpose, a reconciliation to the
                nearest IFRS line or subtotal, the income tax effect and non-controlling interests
                effect for each reconciling item, an explanation of any change in calculation, and a
                statement on non-comparability.
              </p>
              <p>
                The tax and NCI effect per reconciling item is the requirement I would flag first. It
                is not usually available from the existing reporting pack.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 06 · The Jordan and MENA lens</Eyebrow>
            <div className="dft-article">
              <p>
                <strong>Jordan has no endorsement waiting room.</strong> Jordan applies IFRS as issued
                by the IASB, with legal force through the Companies Law and the sectoral regulators,
                and no separate national endorsement step. The practical consequence is that the
                effective date tracks the IASB directly: 1 January 2027, without an intervening local
                process that might create room. Saudi Arabia sits differently, on &ldquo;IFRS as
                endorsed in Saudi Arabia,&rdquo; through a separate SOCPA endorsement process. For
                groups with components in both jurisdictions, that difference in mechanism is worth
                understanding early rather than discovering it during a group reporting cycle. We have
                written separately on{" "}
                <Link href="/knowledge/saudi-compliance-2026">
                  what changed in Saudi compliance in 2026
                </Link>
                .
              </p>
              <p>
                <strong>Banks and insurers are the structurally affected population.</strong> IFRS 18
                identifies two specified main business activities, investing in assets and providing
                financing to customers, and where an entity has one, items that would otherwise be
                investing or financing move into operating. For a bank, that reshapes the face of the
                income statement in a way it does not for a manufacturer. The assessment is made at the
                reporting-entity level, can differ between consolidated and separate financial
                statements, and an entity can have more than one specified main business activity.
                Given the weight of CBJ-regulated banks and insurers in Jordan&rsquo;s full-IFRS
                population, this is where the concentration of effort sits.
              </p>
              <p>
                <strong>Two reporting changes land on the same cycle.</strong> The Amman Stock
                Exchange&rsquo;s climate-related disclosure framework moves from voluntary to mandatory
                for reports published from 1 January 2027 covering 2026 onwards. IFRS 18 first applies
                for periods beginning 1 January 2027. Different frameworks, different teams, one
                reporting calendar, and largely the same finance function absorbing both.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 07 · The consequential amendments people schedule last</Eyebrow>
            <div className="dft-article">
              <p>
                The amendments to other standards are where first-time application quietly becomes
                harder.
              </p>
              <p>
                Under amended <strong>IAS 7</strong>, the indirect method has a single starting point,
                operating profit or loss, and the previous free choice over classifying interest and
                dividends is largely removed. For entities without a specified main business activity,
                the classification is prescribed: interest and dividends received in investing,
                interest and dividends paid in financing. Entities with a specified main business
                activity classify consistently with the income statement treatment.
              </p>
              <p>
                <strong>IAS 34</strong> extends the MPM disclosures into interim reporting and requires
                reconciliation for comparative interim periods. For a December year-end, that means the
                first interim report of 2027 arrives well before the first annual report, and it
                arrives carrying restated comparatives. Anyone planning around a December 2027 deadline
                has the wrong date in the calendar.
              </p>
              <p>
                <strong>IAS 8</strong> is renamed Basis of Preparation of Financial Statements and
                absorbs paragraphs relocated from IAS 1. IAS 33 interacts with the new subtotals where
                additional per-share measures are presented.
              </p>
              <p>
                If your group holds venture-capital-type investments, the one-off IAS 28 re-election
                available on first application is worth a conversation now. The eligibility criteria
                have been the subject of an active IASB clarification project, so confirm the current
                position before relying on it.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 08 · The plan for the rest of 2026</Eyebrow>
            <div className="dft-article">
              <p>
                Seven workstreams, sequenced so that the determinations everything else depends on are
                settled first. The dates assume a 31 December year-end and are the latest points at
                which each item still leaves room to act inside the comparative year.
              </p>
            </div>
            <div className="dft-article-table-wrap">
              <table className="dft-article-table">
                <caption>IFRS 18 transition plan, FY2026</caption>
                <thead>
                  <tr>
                    <th scope="col">Workstream</th>
                    <th scope="col">FY2026 deliverable</th>
                    <th scope="col">Evidence source</th>
                    <th scope="col">Target</th>
                  </tr>
                </thead>
                <tbody>
                  {PLAN.map(([workstream, deliverable, evidence, target]) => (
                    <tr key={workstream}>
                      <th scope="row">{workstream}</th>
                      <td>{deliverable}</td>
                      <td>{evidence}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="dft-download">
              <span className="dft-label">The working file</span>
              <h3>IFRS 18 transition plan, FY2026</h3>
              <p>
                The same seven workstreams as a workbook, with owner, status and notes columns left
                blank for your team. Yours to keep and to run without us.
              </p>
              <a className="dft-btn-sm" href={PLAN_FILE} download>
                Download the tracker (XLSX)
              </a>
            </div>
            <div className="dft-article">
              <p>
                Two things sit outside the table because they are governance rather than deliverables.
                Put the programme under someone who can convene IT, investor relations, and legal
                alongside finance, because the MPM inventory and the by-nature question both run
                straight through functions finance does not control. And book the classification
                policy for a second read by someone who did not draft it.
              </p>
              <p>
                All of this runs on the same FY2026 file the auditor will ask for, so it is worth
                sequencing against the close rather than beside it. Our{" "}
                <Link href="/knowledge/audit-readiness-checklist">audit readiness checklist</Link>{" "}
                covers that side of the year.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 09 · Questions we get asked</Eyebrow>
            <div className="dft-faq dft-faq-article">
              {FAQ.map((f) => (
                <article key={f.num}>
                  <code>{f.num}</code>
                  <div>
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-dark">
          <div className="dft-wrap dft-close-split">
            <h2 className="dft-h2-sm">
              The bottom line does not move. Almost everything around it does.
            </h2>
            <div>
              <p>
                And the year that has to be rebuilt is the year still on the calendar. If your FY2026
                file has not had an IFRS 18 check yet, that is a fixed scope, fixed fee conversation,
                not a stage of the audit.
              </p>
              <Link className="dft-btn dft-btn-light" href="/scope?service=review">
                Open the scope builder
              </Link>
            </div>
          </div>
        </section>

        <section className="dft-wrap">
          <p className="dft-article-note">
            This is Daftar&rsquo;s general commentary on IFRS 18 and not accounting advice. The
            transition plan and the downloadable tracker are planning aids, not a compliance
            assessment. Confirm the requirements against the issued standards and your current local
            regulatory instructions before applying them.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../../_components/SiteChrome";
import checklist from "../../_data/audit-readiness-checklist.json";

const TITLE = "The audit readiness checklist";
const DESC =
  "Thirty six checks across the close, the supporting schedules, the judgments, the controls evidence and the request list. What to have ready before the auditor arrives, so fieldwork runs on your calendar rather than theirs.";
const URL = "/knowledge/audit-readiness-checklist";
const PUBLISHED = "2026-08-30";
const FILE = "/audit-readiness-checklist.xlsx";

const COUNT = checklist.groups.reduce((n, g) => n + g.items.length, 0);

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
  dateModified: PUBLISHED,
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

/* Two levels: there is no /knowledge index route to point the middle at. */
const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Daftar Advisory", item: "https://daftaradvisory.com" },
    { "@type": "ListItem", position: 2, name: TITLE, item: `https://daftaradvisory.com${URL}` },
  ],
};

const FAQ: { num: string; q: string; a: string }[] = [
  {
    num: "01",
    q: "When should we start working through this?",
    a: "Six to eight weeks before fieldwork for a first audit, and about four for a repeat one. The items that take longest are not the schedules, they are the judgments: a going concern forecast or an impairment paper cannot be produced in the week the auditor arrives, because the people who need to agree it are the ones with the least free time.",
  },
  {
    num: "02",
    q: "Our auditor already sends a PBC list. Is this not the same thing?",
    a: "No, and the difference matters. A PBC list tells you what the auditor wants to receive. This tells you what has to be true before that list can be answered without a scramble. Most of section A has to be finished before a single PBC item can be filled in properly, and a request list arriving on the first morning is already too late to fix a moving trial balance.",
  },
  {
    num: "03",
    q: "We are a small team. Which parts actually matter most?",
    a: "Sections A and E. A clean trial balance and an answered request list will do more for the length of the audit than a perfect provisions paper. If you only have time for two things, agree the opening balances and put a named owner and a date against every request item.",
  },
  {
    num: "04",
    q: "Does using this mean we are audit ready?",
    a: "It means you are prepared, which is not the same. This is a preparation aid, not an assurance procedure and not a compliance opinion. Your auditor decides what evidence they need, and the standards they work to may ask for more than is listed here. Daftar is a non-attest practice and does not audit the files it helps prepare.",
  },
];

export default function AuditReadinessChecklist() {
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
            The audit readiness <em>checklist</em>.
          </h1>
          <div className="dft-article-meta">
            <span>Ahmad Al Hinaiti</span>
            <span>·</span>
            <span>Founder, Daftar Advisory</span>
            <span>·</span>
            <span>30 August 2026</span>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-article dft-article-lede">
            <p className="dft-lead">
              An audit does not run long because the auditor is slow. It runs long because the file
              was not ready on the first morning.
            </p>
            <p>
              Almost every overrun starts the same way. The trial balance is still moving. A schedule
              agrees to the ledger but not to last year. A judgment everyone remembers making has
              never been written down, so it has to be reconstructed from memory, in a meeting, in
              the middle of fieldwork. None of that is difficult work. It is just work that costs
              three times as much when it happens with an audit team waiting.
            </p>
            <p>
              What follows is {COUNT} checks in six groups, in the order we work through them.
              Sections A and B are the base: they have to be true before anything else is worth
              doing. Section C is the one teams underestimate. Section E is the cheapest win on the
              page.
            </p>
            <p>
              This is preparation, not assurance. Daftar is a non-attest practice, we do not audit
              the files we help prepare, and your auditor decides what evidence they need.
            </p>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 01 · The checklist</Eyebrow>
            {checklist.groups.map((group) => (
              <div className="dft-check-group" key={group.ref}>
                <h3>
                  {group.ref}. {group.title}
                </h3>
                <p>{group.blurb}</p>
                <ul className="dft-check">
                  {group.items.map((item, i) => (
                    <li key={item}>
                      <span>
                        {group.ref}/{String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 02 · Take it with you</Eyebrow>
            <div className="dft-download">
              <span className="dft-label">The working file</span>
              <h3>Audit readiness checklist</h3>
              <p>
                All {COUNT} checks as a workbook, with owner, status and evidence columns left blank
                for your team. Yours to keep, and to run again next year without us.
              </p>
              <a className="dft-btn-sm" href={FILE} download>
                Download the checklist (XLSX)
              </a>
            </div>
            <div className="dft-article">
              <p>
                The page prints cleanly as well, if a paper copy is what gets it round the table.
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 03 · What this does not cover</Eyebrow>
            <div className="dft-article">
              <p>
                Two things are deliberately absent. The first is anything specific to your framework
                beyond IFRS as issued: if you report under a local endorsement, a regulator&rsquo;s
                instructions, or an industry return, those add items this list does not know about.
              </p>
              <p>
                The second is the standard being adopted next. A checklist describes the audit you
                are about to have, not the change arriving after it. If you report on a calendar
                year, the one currently in progress is also the comparative year for IFRS 18, which
                is a separate piece of work running on the same file. We have written about{" "}
                <Link href="/knowledge/ifrs-18-transition-2026">
                  what that means for FY2026
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow as="h2">§ 04 · Questions we get asked</Eyebrow>
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
              If the list is longer than the time left, start with the file.
            </h2>
            <div>
              <p>
                We prepare the audit file and answer the request list in advance, so the audit starts
                on evidence rather than on questions. Fixed scope, fixed fee, and the working file
                stays with you.
              </p>
              <Link className="dft-btn dft-btn-light" href="/scope?service=audit">
                Scope an audit readiness project
              </Link>
            </div>
          </div>
        </section>

        <section className="dft-wrap">
          <p className="dft-article-note">
            This is Daftar&rsquo;s general preparation aid and not accounting or assurance
            advice. It does not replace the requirements of the applicable auditing standards, and it
            is not a compliance assessment. Confirm what your audit requires against the issued
            standards and your auditor&rsquo;s own request list.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

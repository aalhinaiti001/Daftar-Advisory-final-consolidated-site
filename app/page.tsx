import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "./_components/SiteChrome";
import { SERVICE_ORDER, SERVICES, NOTES, FAQ } from "./_data/practice";

const DESC =
  "Financial statements, technical review, audit readiness and quality of earnings for founders and finance teams. A boutique firm, a defined scope, and a file you keep.";

export const metadata: Metadata = {
  /* Names the actual services, not just the firm: "Daftar Advisory" alone
     tells a search result nothing about what the practice does. */
  title: "Daftar Advisory — IFRS financial statements and audit readiness",
  description: DESC,
  /* /ar is the Arabic counterpart of this page; x-default points at the
     English one. Without these the two rank as duplicates of each other. */
  alternates: {
    canonical: "/",
    languages: { en: "/", ar: "/ar", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    siteName: "Daftar Advisory",
    title: "Daftar Advisory — Rigorous finance, without the overhead.",
    description: DESC,
    url: "/",
    images: ["/og-daftar.png"],
  },
};

const REGISTER: [string, string][] = [
  ["Established", "2024"],
  ["Base", "Amman, Jordan"],
  ["Reach", "Jordan, GCC, MENA"],
  ["Model", "Founder led"],
  ["Every job leaves", "A model, method, or memo"],
];

const COMMITMENTS: [string, string, string][] = [
  ["01", "Defined scope", "What we solve, what we exclude, what you get. In writing, first."],
  ["02", "Senior contact", "The person you speak to does the work."],
  ["03", "Straight advice", "If it belongs elsewhere, or need not be done, we say so."],
  ["04", "Work you own", "You keep the model and the workings, in a form you can rerun."],
];

export default function Home() {
  return (
    <div className="dft">
      <SiteHeader active="home" />

      <main className="dft-rise">
        <section className="dft-wrap dft-hero">
          <div>
            <Eyebrow tone="rust">Clear advice. Senior work. Nothing extra.</Eyebrow>
            <h1 className="dft-h1">
              Finance work that feels <em>simple</em>, even when the issue is not.
            </h1>
            <p className="dft-lead">
              Statements, technical review, audit readiness, quality of earnings. A boutique firm,
              a defined scope, a file you keep.
            </p>
            <div className="dft-actions">
              <Link className="dft-btn" href="/scope">Scope a project</Link>
              <Link className="dft-btn-ghost" href="/about">About the practice</Link>
            </div>
          </div>

          <div className="dft-register">
            <div className="dft-register-head">
              <span>The register</span>
              <span>§</span>
            </div>
            <dl className="dft-register-body">
              {REGISTER.map(([term, value]) => (
                <div className="dft-register-row" key={term}>
                  <dt>{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="services" className="dft-section dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow>§ 01 · Services</Eyebrow>
            <h2 className="dft-h2" style={{ marginBottom: 44 }}>Four lines of work. Each one ends with a file you own.</h2>
            <div className="dft-ledger">
              {SERVICE_ORDER.map((key, i) => (
                <article key={key}>
                  <code>{"0" + (i + 1)}</code>
                  <h3>{SERVICES[key].label}</h3>
                  <p>{SERVICES[key].blurb}</p>
                  <Link className="dft-btn-sm" href={`/scope?service=${key}`}>Scope this</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dft-section">
          <div className="dft-wrap dft-split">
            <div>
              <Eyebrow>§ 02 · Who we help</Eyebrow>
              <h2 className="dft-h2">Built for the point where finance runs out of room.</h2>
            </div>
            <div>
              <p className="dft-lead-sm" style={{ marginBottom: 22 }}>
                Most clients have a capable finance team and a problem above it: a first year under
                IFRS, an auditor&rsquo;s questions nobody has time to answer, a deal that needs
                numbers to hold up.
              </p>
              <p>We take the problem, solve it in the open, and leave the file behind.</p>
            </div>
          </div>
        </section>

        <section id="ethics-values" className="dft-section dft-section-dark">
          <div className="dft-wrap">
            <Eyebrow tone="dark">§ 03 · How we work</Eyebrow>
            <h2 className="dft-h2" style={{ margin: "0 0 50px", maxWidth: "22ch" }}>
              Four commitments, in writing, before the work starts.
            </h2>
            <div className="dft-commitments">
              {COMMITMENTS.map(([num, title, body]) => (
                <div key={num}>
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="insights-briefs" className="dft-section">
          <div className="dft-wrap">
            <Eyebrow>§ 04 · Notes</Eyebrow>
            <h2 className="dft-h2" style={{ marginBottom: 40 }}>
              What finance teams here are dealing with now.
            </h2>
            <div className="dft-notes">
              {NOTES.map((n) => (
                <article key={n.title}>
                  <span>{n.tag}</span>
                  <h3>{n.title}</h3>
                  {n.href && <Link className="dft-btn-sm" href={n.href}>Read the note</Link>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="daftar-faq" className="dft-section dft-section-soft">
          <div className="dft-wrap dft-split dft-split-faq">
            <div>
              <Eyebrow>§ 05 · Questions</Eyebrow>
              <h2 className="dft-h2">Answered plainly.</h2>
            </div>
            <div className="dft-faq">
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

        <section className="dft-section">
          <div className="dft-wrap dft-close">
            <h2>Tell us what is on the table.</h2>
            <p>Build a draft scope in two minutes. We reply with a senior read on fit.</p>
            <Link className="dft-btn dft-btn-lg" href="/scope">Open the scope builder</Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

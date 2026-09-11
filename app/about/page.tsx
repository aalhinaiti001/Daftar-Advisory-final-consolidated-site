import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../_components/SiteChrome";
import { STEPS, EMAIL } from "../_data/practice";

const DESC =
  "A founder led finance advisory boutique in Amman, working across Jordan, the GCC and MENA. Every engagement ends with a working file you keep.";

export const metadata: Metadata = {
  title: "About — Daftar Advisory",
  description: DESC,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    siteName: "Daftar Advisory",
    title: "About — Daftar Advisory",
    description: DESC,
    url: "/about",
    images: ["/og-daftar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Daftar Advisory",
    description: DESC,
    images: ["/og-daftar.png"],
  },
};

/* Drop a portrait at public/founder.jpg and set this to "/founder.jpg".
   While it is empty the slot renders as a ruled placeholder rather than a
   broken image. (In the design prototype this was the droppable image slot.) */
const PORTRAIT_SRC = "";

const FACTS: [string, React.ReactNode][] = [
  ["Focus", "IFRS reporting and technical review"],
  ["Sectors", "Construction, services, investment"],
  ["Languages", "Arabic and English"],
  ["Contact", <a key="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>],
];

export default function About() {
  return (
    <div className="dft">
      <SiteHeader active="about" />

      <main className="dft-rise">
        <section className="dft-wrap dft-page-head">
          <Eyebrow tone="rust">§ 00 · About</Eyebrow>
          <h1 className="dft-h1">A finance advisory boutique, held to one standard.</h1>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap dft-split">
            <div>
              <Eyebrow>§ 01 · The name</Eyebrow>
              <h2 className="dft-h2-sm">Advice should stay useful after the adviser leaves.</h2>
            </div>
            <div>
              <p className="dft-lead" style={{ marginBottom: 22 }}>
                Daftar is the ledger, the book where things are written down and kept. That is what
                we sell: reasoning recorded in a form that outlives the meeting.
              </p>
              <p style={{ marginBottom: 20 }}>
                Too much advisory work evaporates on delivery. Every engagement here ends with a
                model you can rerun, a method you can repeat, or a memo that answers the question.
              </p>
              <p>We take only what we can staff properly. That limit is the point.</p>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow wide>§ 02 · Who you work with</Eyebrow>
            <div className="dft-founder">
              <div className="dft-founder-portrait">
                {/* Renders nothing until a real portrait exists. An empty ruled
                    box captioned "Portrait" reads as an unfinished site, which
                    costs more credibility than having no photograph at all. */}
                {PORTRAIT_SRC && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img className="dft-portrait" src={PORTRAIT_SRC} alt="Ahmad Al Hinaiti" width={300} height={376} />
                )}
                <span className="dft-label">Amman, Jordan</span>
              </div>
              <div>
                <h2>Ahmad Al Hinaiti</h2>
                <p className="dft-founder-role">Founder · Advisory and technical review</p>
                <p className="dft-lead-sm" style={{ marginBottom: 20 }}>
                  Ahmad works on the problems clients bring, personally, from first call to final
                  file. Statements, audit preparation, IFRS questions, and the numbers behind a deal.
                </p>
                <p style={{ marginBottom: 30 }}>
                  That is on purpose. It keeps you talking to the person who formed the view.
                </p>
                <div className="dft-facts">
                  {FACTS.map(([label, value], i) => (
                    <div key={i}>
                      <span className="dft-label">{label}</span>
                      <b>{value}</b>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about">
          <div className="dft-wrap">
            <Eyebrow>§ 03 · How an engagement runs</Eyebrow>
            <h2 className="dft-h2-sm" style={{ margin: "0 0 44px", maxWidth: "24ch" }}>
              Four steps, from first call to final file.
            </h2>
            <div className="dft-ledger">
              {STEPS.map((s) => (
                <article className="dft-ledger-3" key={s.num}>
                  <code>{s.num}</code>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dft-section dft-section-about dft-section-dark">
          <div className="dft-wrap dft-close-split">
            <h2 className="dft-h2-sm">If the work fits, we will say so in two days.</h2>
            <div>
              <p>Describe it as you would to a colleague. If it belongs elsewhere, we say so.</p>
              <Link className="dft-btn dft-btn-light" href="/scope">Open the scope builder</Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

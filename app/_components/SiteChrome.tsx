import Link from "next/link";
import { EMAIL } from "../_data/practice";

/* Header and footer for the Daftar pages. The active nav item is passed in
   rather than read from usePathname so these stay server components. */

/* "knowledge" has no nav entry (Knowledge articles are not in primary nav
   yet), it only stops the header from wrongly underlining another item. */
export type Page = "home" | "about" | "scope" | "knowledge";

function Mark({ href = "/" }: { href?: string }) {
  return (
    <Link className="dft-brand" href={href}>
      <b>D</b>
      <span>
        <em>Daftar</em>
        <small>ADVISORY</small>
      </span>
    </Link>
  );
}

export function Eyebrow({
  tone,
  wide,
  as: Tag = "div",
  children,
}: {
  tone?: "rust" | "dark";
  /** Wider gap below, for sections whose heading does not follow immediately. */
  wide?: boolean;
  /* Where the eyebrow IS the section title rather than a label above one,
     render it as a real heading. Long-form pages otherwise leave the document
     outline with a single h2, which is unnavigable by screen reader. */
  as?: "div" | "h2" | "h3";
  children: React.ReactNode;
}) {
  const cls =
    (tone === "rust" ? " dft-eyebrow-rust" : tone === "dark" ? " dft-eyebrow-dark" : "") +
    (wide ? " dft-eyebrow-wide" : "");
  return <Tag className={"dft-eyebrow" + cls}>{children}</Tag>;
}

export function SiteHeader({ active }: { active: Page }) {
  const current = (p: Page) => (p === active ? ("page" as const) : undefined);
  return (
    <header className="dft-header">
      <div className="dft-header-inner">
        <Mark />
        {/* CSS only disclosure: the checkbox sits before the nav so the
            :checked sibling selector can reveal it on small screens. */}
        <input type="checkbox" id="dft-nav-toggle" className="dft-nav-toggle" />
        <label className="dft-menu" htmlFor="dft-nav-toggle" aria-label="Menu">
          ☰
        </label>
        <div className="dft-nav-wrap">
          <nav className="dft-nav">
            <Link href="/" aria-current={current("home")}>Practice</Link>
            <Link href="/about" aria-current={current("about")}>About</Link>
            <Link href="/scope" aria-current={current("scope")}>Scope builder</Link>
            {/* Not in the design comp. Kept so the Calibre product page and the
                Arabic site stay reachable from the primary navigation. */}
            <Link href="/calibre">Calibre</Link>
            <Link href="/ar" className="dft-lang" aria-label="العربية">ع</Link>
          </nav>
          {/* Keep the CTA on the scope builder until the Microsoft Bookings
              page for ahmad@daftaradvisory.com is ready. Then replace this
              destination and the /book and /call redirects together. */}
          <Link className="dft-btn-ghost dft-cta" href="/scope">Book a call</Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="dft-footer">
      <div className="dft-wrap">
        <Mark />
        <em className="dft-foot-tag">Rigorous finance, without the overhead.</em>
        <div className="dft-foot-links">
          <a href={`mailto:${EMAIL}`}>{EMAIL.toUpperCase()}</a>
          <span>AMMAN · MENA</span>
        </div>
      </div>
      <div className="dft-wrap">
        <p className="dft-foot-note">
          Daftar Advisory is a non-attest advisory practice, not a registered statutory auditor.
        </p>
      </div>
    </footer>
  );
}

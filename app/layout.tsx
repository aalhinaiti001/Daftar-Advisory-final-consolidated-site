import type { Metadata } from "next";
import "./globals.css";
import "./daftar.css";

const DESC = "Clear finance work for founders and finance teams: statements, technical review, audit readiness, and quality of earnings.";

/* Non-attest practice: the schema type is ProfessionalService, NOT
   AccountingService/FinancialService. Those imply licensed attest work the
   practice explicitly does not provide, and the site copy says so. */
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Daftar Advisory",
  description: DESC,
  url: "https://daftaradvisory.com",
  email: "ahmad@daftaradvisory.com",
  areaServed: ["Jordan", "Saudi Arabia", "United Arab Emirates", "Middle East"],
  address: { "@type": "PostalAddress", addressLocality: "Amman", addressCountry: "JO" },
  founder: {
    "@type": "Person",
    name: "Ahmad Al Hinaiti",
    jobTitle: "Founder",
    sameAs: ["https://linkedin.com/in/ahmad-alhinaiti"],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://daftaradvisory.com"),
  title: "Daftar Advisory — IFRS financial statements and audit readiness",
  description: DESC,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "Daftar Advisory",
    title: "Daftar Advisory — Rigorous finance, without the overhead.",
    description: DESC,
    url: "/",
    images: ["/og-daftar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daftar Advisory — Rigorous finance, without the overhead.",
    description: DESC,
    images: ["/og-daftar.png"],
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        {/* globals.css pulls the webfonts in via @import, which the browser
            cannot discover until the stylesheet itself has parsed. These warm
            the connections up front so the fonts start downloading sooner. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

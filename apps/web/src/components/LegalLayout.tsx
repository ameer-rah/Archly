import type { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import "../styles/legal.css";

/**
 * Shared shell for text-heavy legal pages (Privacy, Terms): navy
 * blueprint hero with the title/effective date, then a single-column
 * prose section for the page's own content. Same chrome as every
 * other page (`NavBar`, `Footer`, `PageTransition`) so Privacy/Terms
 * don't need their own hero/section markup duplicated per page.
 */
export default function LegalLayout({
  eyebrow,
  title,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <NavBar />
      <PageTransition>
        <main>
          <section className="legal-hero blueprint-grid">
            <p className="eyebrow eyebrow-light">{eyebrow}</p>
            <h1 className="legal-hero-title">{title}</h1>
            <p className="legal-hero-updated">Last updated: {lastUpdated}</p>
          </section>

          <section className="section legal-body">
            <div className="legal-body-inner">{children}</div>
          </section>
        </main>
      </PageTransition>
      <Footer blend />
    </>
  );
}

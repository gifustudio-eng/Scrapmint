import Image from "next/image";
import Link from "next/link";

export function QuoteStrip() {
  return (
    <section id="quote-strip">
      <div className="quote-inner">
        <div className="quote-mark">&ldquo;</div>
        <div>
          <div className="quote-text">
            The infrastructure for a circular economy won&apos;t build itself. Someone has to do the unglamorous work of making it real.
          </div>
          <div className="quote-source">— Scrapmint Founding Principle</div>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="cta">
      <div className="cta-inner">
        <div>
          <h2 className="cta-headline">
            Let&apos;s Build<br />
            <span className="accent">The System.</span>
          </h2>
          <p className="cta-sub">
            Whether you&apos;re a mall operator, corporate partner, government body, or development institution — if you&apos;re serious about circular infrastructure in Indonesia, we want to talk.
          </p>
        </div>
        <div className="cta-actions">
          <a href="mailto:hello@scrapmint.id" className="btn-primary">Partner With Us</a>
          <Link href="#projects" className="btn-secondary">Explore Our Work</Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const links = ["About", "The Problem", "What We Do", "Projects", "Upcoming", "Founders", "Contact"];
  const hrefs = ["#about", "#problem", "#what-we-do", "#projects", "#upcoming", "#founders", "#cta"];

  return (
    <footer>
      <div className="footer-inner">
        <div>
          <Image src="/logo.png" alt="Scrapmint" width={128} height={32} className="footer-logo-img" />
          <div className="footer-tagline">Waste Infrastructure · Circular Systems · Indonesia</div>
        </div>
        <ul className="footer-links">
          {links.map((l, i) => (
            <li key={l}>
              <Link href={hrefs[i]}>{l}</Link>
            </li>
          ))}
        </ul>
        <div className="footer-social">
          <a href="https://instagram.com/scrapmint.id" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @scrapmint.id
          </a>
        </div>
        <div className="footer-copy">© 2026 Scrapmint</div>
      </div>
    </footer>
  );
}

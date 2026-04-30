import Image from "next/image";
import Link from "next/link";
// hero-bg-image removed

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-left" style={{ background: "var(--navy)" }}>
        <div className="hero-tag">Indonesia · Circular Infrastructure</div>
        <h1 className="hero-headline">
          Waste Is A<br />
          <span className="accent">Systems</span><br />
          Problem.
        </h1>
        <p className="hero-sub">
          Scrapmint designs and operates the infrastructure that closes the loop — from collection to recovery. Built for Indonesia. Engineered for scale.
        </p>
        <div className="hero-ctas">
          <Link href="#cta" className="btn-primary">Partner With Us</Link>
          <Link href="#projects" className="btn-secondary">Explore Our Work</Link>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-stack">
          <Image
            src="/hero_waste_jakarta.jpeg"
            alt="Waste pile under a Jakarta flyover — Indonesia's waste crisis"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="hero-image-overlay" />
        </div>
        <div className="hero-stat-block">
          {[
            { num: "68M", label: "Tonnes waste\nyearly — ID" },
            { num: "14%", label: "Formal recycling\nrate, Indonesia" },
            { num: "3RD", label: "Largest ocean\nplastic polluter" },
            { num: "0", label: "Scalable circular\nsystems in place" },
          ].map(({ num, label }) => (
            <div className="stat-item" key={num}>
              <div className="stat-number">{num}</div>
              <div className="stat-label" style={{ whiteSpace: "pre-line" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

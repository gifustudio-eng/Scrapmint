import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <div className="projects-header">
          <div>
            <div className="section-label">05 / Work</div>
            <h2 className="section-title">Projects.</h2>
          </div>
          <Link href="#cta">Get Involved →</Link>
        </div>

        <div className="projects-grid">
          <Link href="#detail-material-recovery" className="project-card-link">
            <div className="project-card">
              <div className="project-thumb">
                <Image src="/team_mrf.jpeg" alt="Material Recovery — Mals Indonesia" fill style={{ objectFit: "cover" }} />
                <div className="project-thumb-overlay" />
                <div className="project-status status-active">Active</div>
              </div>
              <div className="project-body">
                <div className="project-location">Jakarta, Indonesia — Mals Partnership</div>
                <div className="project-name">Material Recovery</div>
                <p className="project-blurb">We brought Indonesia&apos;s largest malls on board — redirecting waste to Material Recovery Facilities instead of landfill. The program handles 9,500 tons and diverts 7,600 tons, powered by a team of 20 field operators.</p>
                <div className="project-footer">
                  <span className="project-type">MRF · Plastics · Organics · #MulaiDariSini</span>
                  <span className="project-arrow">↗</span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="#detail-innovative-recycling" className="project-card-link">
            <div className="project-card">
              <div className="project-thumb">
                <Image src="/team_wastebench.jpeg" alt="Innovative Recycling — Ecobricks, Waste Bench, Foodcycle" fill style={{ objectFit: "cover" }} />
                <div className="project-thumb-overlay" />
                <div className="project-status status-active">Active</div>
              </div>
              <div className="project-body">
                <div className="project-location">Jakarta, Indonesia — Start-up Collaboration</div>
                <div className="project-name">Innovative Recycling</div>
                <p className="project-blurb">We engaged local and international start-ups to upcycle waste into new products: Ecobricks, Waste Bench, and Foodcycle — proving that properly segregated waste is a valuable resource.</p>
                <div className="project-footer">
                  <span className="project-type">Upcycling · Ecobricks · Foodcycle · Waste Bench</span>
                  <span className="project-arrow">↗</span>
                </div>
              </div>
            </div>
          </Link>

          <div className="project-card">
            <div className="project-thumb">
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=75&auto=format&fit=crop"
                alt="Upcoming — Sustainable Golf Course & Upcycling Fair"
                fill
                style={{ objectFit: "cover" }}
                unoptimized
              />
              <div className="project-thumb-overlay" />
              <div className="project-status status-design">Upcoming</div>
            </div>
            <div className="project-body">
              <div className="project-location">Indonesia — Riverside Golf Course & Mals</div>
              <div className="project-name">Sustainable Golf Course & Upcycling Fair</div>
              <p className="project-blurb">Organic waste from Riverside Golf Course converted into insect-based KOI food & fertilizer — plus Indonesia&apos;s first ever Upcycling Fair launching at a major mall.</p>
              <div className="project-footer">
                <span className="project-type">Organics · Insect Protein · Upcycling Fair</span>
                <span className="project-arrow">↗</span>
              </div>
            </div>
          </div>
        </div>

        {/* Material Recovery Detail */}
        <div id="detail-material-recovery" style={{ marginTop: 96, paddingTop: 64, borderTop: "2px solid var(--navy)", scrollMarginTop: 80 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Material Recovery — Deep Dive</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(30px,3.5vw,48px)", textTransform: "uppercase", color: "var(--navy)", lineHeight: 1, marginBottom: 20 }}>
            9,500 Tons In.<br /><span className="accent">7,600 Tons Diverted.</span>
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--gray-dark)", maxWidth: 680, marginBottom: 0 }}>
            We worked with Mals in Indonesia to bring their waste to Material Recovery Facilities (MRFs), instead of having it go directly to landfill. The result: up to 80% of waste diverted. Three phases drove this — a public campaign, on-site education, and sourcing processing partners.
          </p>

          <div className="inno-grid" style={{ marginTop: 40 }}>
            {[
              {
                img: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=600&q=75&auto=format&fit=crop",
                alt: "#MulaiDariSini campaign launch",
                title: "#MulaiDariSini",
                sub: "Campaign Launch",
                desc: "Mals commit publicly to divert waste from landfill. The campaign set a new standard for waste management in Indonesia's retail sector.",
                external: true,
              },
              {
                img: "/team_mrf.jpeg",
                alt: "Scrapmint education to mal tenants",
                title: "Tenant Education",
                sub: "Scrapmint Education to Mal Tenants",
                desc: "We ran awareness sessions directly with mal tenants — driving waste segregation behavior at the source before material reaches the MRF.",
                external: false,
              },
              {
                img: "/team_processing.jpeg",
                alt: "Material recovery facility operations",
                title: "Material Recovery",
                sub: "Sourced Partners to Segregate Waste",
                desc: "We sourced and coordinated processing partners — connecting mall waste streams directly to MRF operators and downstream material markets.",
                external: false,
              },
            ].map((card) => (
              <div className="inno-card" key={card.title}>
                <div className="inno-card-img">
                  <Image src={card.img} alt={card.alt} fill style={{ objectFit: "cover" }} unoptimized={card.external} />
                  <div className="inno-card-img-overlay" />
                </div>
                <div className="inno-card-body">
                  <div className="inno-card-title">{card.title}</div>
                  <div className="inno-card-sub">{card.sub}</div>
                  <p className="inno-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mrf-stats-block">
            <div className="mrf-stat">
              <div className="mrf-stat-num">9,500</div>
              <div className="mrf-stat-unit">Tons</div>
              <div className="mrf-stat-label">Waste Handled</div>
            </div>
            <div className="mrf-stat highlight">
              <div className="mrf-stat-num">7,600</div>
              <div className="mrf-stat-unit">Tons</div>
              <div className="mrf-stat-label">Waste Diverted<br />from Landfill</div>
            </div>
            <div className="mrf-stat">
              <div className="mrf-stat-num">20</div>
              <div className="mrf-stat-unit">Pax</div>
              <div className="mrf-stat-label">Manpower<br />Involved</div>
            </div>
          </div>
        </div>

        {/* Innovative Recycling Detail */}
        <div id="detail-innovative-recycling" style={{ marginTop: 96, paddingTop: 64, borderTop: "2px solid var(--navy)", scrollMarginTop: 80 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Innovative Recycling — Deep Dive</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(30px,3.5vw,48px)", textTransform: "uppercase", color: "var(--navy)", lineHeight: 1, marginBottom: 20 }}>
            Scrap Into<br /><span className="accent">Something Worth Keeping.</span>
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--gray-dark)", maxWidth: 680, marginBottom: 0 }}>
            We engaged local and international start-ups to recycle and upcycle waste into new products or structures — demonstrating that waste, if properly segregated, is a valuable resource, not a problem to be buried.
          </p>

          <div className="inno-grid">
            {[
              {
                img: "/inno_ecobricks.jpeg",
                alt: "Ecobricks — plastic bottles filled with waste as building material",
                title: "Ecobricks",
                sub: "Turning plastic into sustainable building material",
                desc: "Plastic waste is densely packed into bottles to create structural building blocks — diverting non-recyclable plastic from landfill while producing functional construction material.",
              },
              {
                img: "/team_wastebench.jpeg",
                alt: "Waste Bench — upcycling plastic and glass",
                title: "Waste Bench",
                sub: "Upcycling with design start-ups",
                desc: "We collaborated with design start-ups to build functional benches from recovered plastic and glass — creating tangible proof that waste can become durable, desirable products.",
              },
              {
                img: "/inno_foodcycle.jpeg",
                alt: "Foodcycle — food waste composted into organic fertilizer",
                title: "Foodcycle",
                sub: "Recycling leftover food into insect-based protein & fertilizer",
                desc: "Organic food waste is processed through Black Soldier Fly larvae — producing high-protein animal feed and organic fertilizer, closing the nutrient loop completely.",
              },
            ].map((card) => (
              <div className="inno-card" key={card.title}>
                <div className="inno-card-img">
                  <Image src={card.img} alt={card.alt} fill style={{ objectFit: "cover" }} />
                  <div className="inno-card-img-overlay" />
                </div>
                <div className="inno-card-body">
                  <div className="inno-card-title">{card.title}</div>
                  <div className="inno-card-sub">{card.sub}</div>
                  <p className="inno-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

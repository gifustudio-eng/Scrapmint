import Image from "next/image";

export default function Upcoming() {
  return (
    <section id="upcoming">
      <div className="section-inner">
        <div className="section-label">06 / What&apos;s Next</div>
        <h2 className="section-title">
          Upcoming<br /><span className="accent">Plans.</span>
        </h2>
        <div className="upcoming-grid">
          <div className="upcoming-card">
            <div className="upcoming-card-img">
              <Image
                src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=75&auto=format&fit=crop"
                alt="Sustainable Golf Course"
                fill
                style={{ objectFit: "cover" }}
                unoptimized
              />
              <div className="upcoming-card-img-overlay" />
            </div>
            <div className="upcoming-card-body">
              <div className="upcoming-badge">Coming Soon</div>
              <div className="upcoming-card-title">Sustainable<br />Golf Course</div>
              <p className="upcoming-card-desc">
                We will collect organic waste from Riverside Golf Course and process it through Black Soldier Fly technology — creating insect-based KOI food and fertilizer. The program reduces carbon emissions while producing commercially viable organic products from what was previously treated as waste.
              </p>
            </div>
          </div>
          <div className="upcoming-card">
            <div className="upcoming-card-img">
              <Image
                src="/upcoming_upcycling_fair.jpeg"
                alt="Upcycling Fair — exhibition of upcycled products"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="upcoming-card-img-overlay" />
            </div>
            <div className="upcoming-card-body">
              <div className="upcoming-badge">In Planning</div>
              <div className="upcoming-card-title">Upcycling<br />Fair</div>
              <p className="upcoming-card-desc">
                We are launching Indonesia&apos;s first-ever Recycling and Upcycling Fair at a major mall — combining product exhibitions, start-up showcases, and public education into a single high-visibility event. Inspired by The Hyundai (2023) model, this fair is designed to shift public perception of waste from problem to resource.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

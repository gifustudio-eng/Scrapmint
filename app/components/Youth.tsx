import Image from "next/image";

export default function Youth() {
  const pillars = [
    "Field Operations & MRF Partnerships",
    "Systems & Infrastructure Design",
    "Mall & Institutional Liaison",
    "Innovation, Upcycling & Start-up Engagement",
  ];

  return (
    <section id="youth">
      <div className="youth-visual">
        <Image
          src="/team_mrf.jpeg"
          alt="Scrapmint team at a Material Recovery Facility, Indonesia"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
        <div className="youth-visual-overlay" />
        <div className="youth-visual-text">
          <div className="youth-visual-headline">
            Next-Gen<br /><span>Execution</span><br />Force.
          </div>
        </div>
      </div>
      <div className="youth-content">
        <div className="section-label">08 / People</div>
        <h2 className="youth-statement">
          Youth-Powered.<br />
          <span>Systems-Driven.</span><br />
          Professionally Operated.
        </h2>
        <p className="youth-body">
          Scrapmint is built and run by the generation that will live with the consequences. Not as advocates — as operators. Our founding team visits MRF facilities, runs tenant education sessions, sources processing partners, and shows up on the factory floor. We bring field-level rigor, data-driven decision-making, and a long-term commitment to building systems that outlast any single project or funding cycle.
        </p>
        <div className="youth-pillars">
          {pillars.map((p) => (
            <div className="pillar-row" key={p}>
              <div className="pillar-dot" />
              <div className="pillar-text">{p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

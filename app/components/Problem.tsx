import Image from "next/image";

const problems = [
  {
    num: "01",
    title: "Infrastructure Gap",
    img: "/problem_infrastructure.jpeg",
    alt: "Infrastructure gap",
    desc: "Indonesia generates 70 million tons of municipal solid waste per year — roughly 190,000 tons every single day. Existing collection and sorting infrastructure covers less than a third of that volume. Material Recovery Facilities are sparse, under-resourced, and disconnected from downstream markets.",
  },
  {
    num: "02",
    title: "Enforcement Gap",
    img: "/problem_enforcement.jpeg",
    alt: "Enforcement gap",
    desc: "Regulations exist. Implementation doesn't. Extended Producer Responsibility frameworks remain paper policies without operational systems to back them. The compliance infrastructure simply isn't there — and without it, the 14% formal recycling rate cannot move.",
  },
  {
    num: "03",
    title: "Scale Gap",
    img: "/problem_scale.jpeg",
    alt: "Jakarta waste collection workers — scale gap in action",
    desc: "Community programs work at the block level. Industry operates at national scale. Nothing bridges them. Scrapmint is built specifically to operate at the layer between — turning local execution into systemic coverage that can be replicated across every city in the archipelago.",
  },
];

export default function Problem() {
  return (
    <section id="problem">
      <div className="section-inner">
        <div className="problem-header">
          <div>
            <div className="section-label">03 / System Framing</div>
            <h2 className="section-title">
              The Gap Is<br /><span className="accent">Infrastructure.</span>
            </h2>
          </div>
          <p className="problem-statement">
            Indonesia doesn&apos;t have a recycling problem. It has a systems problem. Collection is fragmented. Processing is informal. Enforcement is inconsistent. No single actor can close this loop alone — which is why Scrapmint builds the connective tissue.
          </p>
        </div>
        <div className="problem-grid">
          {problems.map((p) => (
            <div className="problem-card" key={p.num}>
              <div className="problem-card-image">
                <Image
                  src={p.img}
                  alt={p.alt}
                  width={700}
                  height={180}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="problem-card-image-overlay" />
              </div>
              <div className="problem-card-body">
                <div className="problem-number">{p.num}</div>
                <div className="problem-title">{p.title}</div>
                <p className="problem-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

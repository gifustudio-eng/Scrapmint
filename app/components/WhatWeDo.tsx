import Image from "next/image";

const services = [
  {
    num: "01",
    title: "Infrastructure Design",
    img: "/service_infrastructure.jpeg",
    alt: "Infrastructure design — Scrapmint team at work",
    desc: "We map waste flows, identify collection gaps, and design physical systems — sorting hubs, drop points, transfer stations — tailored to the density and material profile of each zone. Every system is built for long-term operability, not just proof-of-concept.",
  },
  {
    num: "02",
    title: "Waste Processing & Recovery",
    img: "/service_processing.jpeg",
    alt: "Waste processing and recovery — sorting facility",
    desc: "We operate or co-develop processing capacity for plastics, organics, and mixed materials — linking recovered output to industrial offtakers and circular product streams. From Material Recovery Facilities to insect-based protein, we close every loop we open.",
  },
  {
    num: "03",
    title: "Circular Economy Projects",
    img: "/service_circular.jpeg",
    alt: "Circular economy field operations",
    desc: "We develop project-based interventions with measurable material impact — from innovative recycling with start-ups (Ecobricks, Waste Bench, Foodcycle) to mall-wide waste diversion programs that redirect up to 80% of waste away from landfill.",
  },
  {
    num: "04",
    title: "Institutional Partnerships",
    img: "/service_institutional_new.jpeg",
    alt: "Institutional partnership meeting — Indonesia",
    desc: "We work with malls, corporates, and development institutions to design compliance-ready, fundable waste programs — from scoping through to implementation and reporting. Our #MulaiDariSini campaign has already committed major malls to divert waste from landfill.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do">
      <div className="section-inner">
        <div className="section-label">04 / Capabilities</div>
        <h2 className="section-title">
          What<br /><span className="accent">Scrapmint</span><br />Does.
        </h2>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-item" key={s.num}>
              <div className="service-image">
                <Image
                  src={s.img}
                  alt={s.alt}
                  width={640}
                  height={220}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="service-image-overlay" />
              </div>
              <div className="service-body">
                <span className="service-num">{s.num}</span>
                <div className="service-title">{s.title}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

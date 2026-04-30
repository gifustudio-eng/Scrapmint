import Image from "next/image";

const steps = [
  {
    num: "01",
    label: "Phase One",
    title: "Diagnose",
    img: "/team_mrf.jpeg",
    desc: "Material flow analysis and on-site audit — quantifying waste volumes, mapping informal haulers, and identifying the exact infrastructure gaps that Scrapmint is positioned to close.",
  },
  {
    num: "02",
    label: "Phase Two",
    title: "Design",
    img: "/team_wastebench.jpeg",
    desc: "System architecture — collection routing, MRF configuration, market linkages — with a proven business model and measurable impact metrics built in from day one.",
  },
  {
    num: "03",
    label: "Phase Three",
    title: "Implement",
    img: "/team_processing.jpeg",
    desc: "Physical infrastructure stands up. Mall tenants educated. Community and institutional partners onboarded. Field operations run by a hands-on youth team that gets into the facility themselves.",
  },
  {
    num: "04",
    label: "Phase Four",
    title: "Scale",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&q=70&auto=format&fit=crop",
    desc: "Document what works, package for replication, expand — deeper into the same geography or horizontally across new cities — without losing the operational discipline that makes results real.",
    external: true,
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work">
      <div className="section-inner">
        <div className="section-label">07 / Process</div>
        <h2 className="section-title">
          How We<br /><span className="accent">Build.</span>
        </h2>
        <div className="process-track">
          {steps.map((s) => (
            <div className="process-step" key={s.num}>
              <div className="process-step-image">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  unoptimized={!!s.external}
                />
                <div className="process-step-image-border" />
              </div>
              <div className="step-num">{s.num}</div>
              <div className="step-label">{s.label}</div>
              <div className="step-title">{s.title}</div>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: string;
  status: string;
  statusClass: string;
  thumb: string;
  thumbExternal?: boolean;
  location: string;
  name: string;
  blurb: string;
  tags: string;
  modal: {
    headline: string;
    headlineAccent: string;
    intro: string;
    cards: {
      img: string;
      imgExternal?: boolean;
      alt: string;
      title: string;
      sub: string;
      desc: string;
    }[];
    stats?: { num: string; unit: string; label: string; highlight?: boolean }[];
  };
};

const PROJECTS: Project[] = [
  {
    id: "material-recovery",
    status: "Active",
    statusClass: "status-active",
    thumb: "/team_mrf.jpeg",
    location: "Jakarta, Indonesia — Mals Partnership",
    name: "Material Recovery",
    blurb: "We brought Indonesia's largest malls on board — redirecting waste to Material Recovery Facilities instead of landfill. The program handles 9,500 tons and diverts 7,600 tons, powered by a team of 20 field operators.",
    tags: "MRF · Plastics · Organics · #MulaiDariSini",
    modal: {
      headline: "9,500 Tons In.",
      headlineAccent: "7,600 Tons Diverted.",
      intro: "We worked with Mals in Indonesia to bring their waste to Material Recovery Facilities (MRFs), instead of having it go directly to landfill. The result: up to 80% of waste diverted. Three phases drove this — a public campaign, on-site education, and sourcing processing partners.",
      cards: [
        {
          img: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=600&q=75&auto=format&fit=crop",
          imgExternal: true,
          alt: "#MulaiDariSini campaign launch",
          title: "#MulaiDariSini",
          sub: "Campaign Launch",
          desc: "Mals commit publicly to divert waste from landfill. The campaign set a new standard for waste management in Indonesia's retail sector.",
        },
        {
          img: "/team_mrf.jpeg",
          alt: "Scrapmint education to mal tenants",
          title: "Tenant Education",
          sub: "Scrapmint Education to Mal Tenants",
          desc: "We ran awareness sessions directly with mal tenants — driving waste segregation behavior at the source before material reaches the MRF.",
        },
        {
          img: "/team_processing.jpeg",
          alt: "Material recovery facility operations",
          title: "Material Recovery",
          sub: "Sourced Partners to Segregate Waste",
          desc: "We sourced and coordinated processing partners — connecting mall waste streams directly to MRF operators and downstream material markets.",
        },
      ],
      stats: [
        { num: "9,500", unit: "Tons", label: "Waste Handled" },
        { num: "7,600", unit: "Tons", label: "Waste Diverted\nfrom Landfill", highlight: true },
        { num: "20", unit: "Pax", label: "Manpower\nInvolved" },
      ],
    },
  },
  {
    id: "innovative-recycling",
    status: "Active",
    statusClass: "status-active",
    thumb: "/team_wastebench.jpeg",
    location: "Jakarta, Indonesia — Start-up Collaboration",
    name: "Innovative Recycling",
    blurb: "We engaged local and international start-ups to upcycle waste into new products: Ecobricks, Waste Bench, and Foodcycle — proving that properly segregated waste is a valuable resource.",
    tags: "Upcycling · Ecobricks · Foodcycle · Waste Bench",
    modal: {
      headline: "Scrap Into",
      headlineAccent: "Something Worth Keeping.",
      intro: "We engaged local and international start-ups to recycle and upcycle waste into new products or structures — demonstrating that waste, if properly segregated, is a valuable resource, not a problem to be buried.",
      cards: [
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
      ],
    },
  },
  {
    id: "golf-upcycling",
    status: "Upcoming",
    statusClass: "status-design",
    thumb: "/project_upcycling_fair.jpeg",

    location: "Indonesia — Riverside Golf Course & Mals",
    name: "Sustainable Golf Course & Upcycling Fair",
    blurb: "Organic waste from Riverside Golf Course converted into insect-based KOI food & fertilizer — plus Indonesia's first ever Upcycling Fair launching at a major mall.",
    tags: "Organics · Insect Protein · Upcycling Fair",
    modal: {
      headline: "Organic Waste",
      headlineAccent: "Into Living Products.",
      intro: "Two upcoming programs that close the organic loop entirely — converting golf course food waste into commercial insect protein, and launching Indonesia's first-ever Upcycling Fair to shift public perception of waste at scale.",
      cards: [
        {
          img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600&q=75&auto=format&fit=crop",
          imgExternal: true,
          alt: "Riverside Golf Course",
          title: "Sustainable Golf Course",
          sub: "Organic waste → insect-based KOI food & fertilizer",
          desc: "We collect organic waste from Riverside Golf Course and process it through Black Soldier Fly technology — creating insect-based KOI food and fertilizer, reducing carbon emissions while producing commercially viable organic products.",
        },
        {
          img: "/upcoming_upcycling_fair.jpeg",
          alt: "Upcycling Fair — exhibition of upcycled products",
          title: "Upcycling Fair",
          sub: "Indonesia's first recycling & upcycling fair at a major mall",
          desc: "Inspired by The Hyundai (2023) model, this fair combines product exhibitions, start-up showcases, and public education into a single high-visibility event — designed to shift public perception of waste from problem to resource.",
        },
        {
          img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=75&auto=format&fit=crop",
          imgExternal: true,
          alt: "Impact vision — circular economy at scale",
          title: "Why This Matters",
          sub: "Closing the organic loop at commercial scale",
          desc: "Indonesia generates millions of tons of organic waste annually. These two projects prove that commercial venues — golf courses, malls — can become active nodes in a circular economy, not just sources of pollution.",
        },
      ],
    },
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header Image */}
        <div className="modal-hero">
          <Image
            src={project.thumb}
            alt={project.name}
            fill
            style={{ objectFit: "cover", filter: "grayscale(20%)" }}
            unoptimized={!!project.thumbExternal}
          />
          <div className="modal-hero-overlay" />
          <div className="modal-hero-content">
            <span className={`project-status ${project.statusClass}`} style={{ position: "static", display: "inline-block", marginBottom: 16 }}>
              {project.status}
            </span>
            <div className="modal-location">{project.location}</div>
            <h2 className="modal-title">{project.name}</h2>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Headline + Intro */}
          <div className="modal-intro-block">
            <h3 className="modal-headline">
              {project.modal.headline}<br />
              <span className="accent">{project.modal.headlineAccent}</span>
            </h3>
            <p className="modal-intro">{project.modal.intro}</p>
          </div>

          {/* Sub-cards */}
          <div className="modal-cards">
            {project.modal.cards.map((card) => (
              <div className="modal-card" key={card.title}>
                <div className="modal-card-img">
                  <Image src={card.img} alt={card.alt} fill style={{ objectFit: "cover" }} unoptimized={!!card.imgExternal} />
                  <div className="inno-card-img-overlay" />
                </div>
                <div className="modal-card-body">
                  <div className="inno-card-title">{card.title}</div>
                  <div className="inno-card-sub">{card.sub}</div>
                  <p className="inno-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats (optional) */}
          {project.modal.stats && (
            <div className="modal-stats">
              {project.modal.stats.map((s) => (
                <div className={`mrf-stat${s.highlight ? " highlight" : ""}`} key={s.num}>
                  <div className="mrf-stat-num">{s.num}</div>
                  <div className="mrf-stat-unit">{s.unit}</div>
                  <div className="mrf-stat-label" style={{ whiteSpace: "pre-line" }}>{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="modal-tags">
            {project.tags.split(" · ").map((t) => (
              <span className="modal-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const closeModal = useCallback(() => setActiveProject(null), []);

  return (
    <>
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
            {PROJECTS.map((p) => (
              <div
                key={p.id}
                className="project-card"
                style={{ cursor: "pointer" }}
                onClick={() => setActiveProject(p)}
              >
                <div className="project-thumb">
                  <Image
                    src={p.thumb}
                    alt={p.name}
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized={!!p.thumbExternal}
                  />
                  <div className="project-thumb-overlay" />
                  <div className={`project-status ${p.statusClass}`}>{p.status}</div>
                </div>
                <div className="project-body">
                  <div className="project-location">{p.location}</div>
                  <div className="project-name">{p.name}</div>
                  <p className="project-blurb">{p.blurb}</p>
                  <div className="project-footer">
                    <span className="project-type">{p.tags}</span>
                    <span className="project-arrow">↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={closeModal} />
      )}
    </>
  );
}

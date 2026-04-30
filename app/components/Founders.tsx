import Image from "next/image";

const founders = [
  {
    name: "Winston Tedja",
    title: "President",
    img: "/Winston_Tedja.jpg",
    quote: "We're not building a startup. We're building a piece of national infrastructure. That distinction shapes every decision we make.",
  },
  {
    name: "Jiaming Sun",
    title: "Vice President",
    img: "/Jiaming_Sun.jpg",
    quote: "Operations is where vision either lives or dies. My job is to make sure the system works in the real world — not just on a whiteboard.",
  },
  {
    name: "Kathan Lau",
    title: "Secretary",
    img: "/Kathan_Lau.jpg",
    quote: "Good systems leave a paper trail. Documentation isn't bureaucracy — it's how we build institutional memory that scales beyond any one project.",
  },
  {
    name: "Junyoung Kwak",
    title: "Treasurer",
    img: "/Junyoung_Kwak.jpg",
    quote: "Circular economy is fundamentally a financial engineering problem. If the unit economics don't work, the mission doesn't either.",
  },
];

export default function Founders() {
  return (
    <section id="founders">
      <div className="section-inner">
        <div className="section-label">09 / Founders</div>
        <h2 className="section-title">
          The People<br /><span className="accent">Behind It.</span>
        </h2>
        <div className="founders-grid">
          {founders.map((f) => (
            <div className="founder-card" key={f.name}>
              <div className="founder-photo">
                <Image
                  src={f.img}
                  alt={`${f.name} — ${f.title}`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                <div className="founder-photo-overlay" />
                <div className="founder-identity">
                  <div className="founder-name">{f.name}</div>
                  <div className="founder-title">{f.title}</div>
                </div>
              </div>
              <div className="founder-quote-drawer">
                <div className="founder-quote-mark">&ldquo;</div>
                <div className="founder-quote-text">{f.quote}</div>
                <div className="founder-quote-name">{f.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

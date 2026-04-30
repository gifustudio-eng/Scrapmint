import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-image-wrap">
            <Image
              src="/about_team.jpeg"
              alt="Scrapmint team visiting a Material Recovery Facility in Indonesia"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }}
            />
          </div>
          <div className="about-content">
            <div className="about-eyebrow">Why We Exist</div>
            <h2 className="about-title">
              About<br /><span className="accent">Scrapmint</span>
            </h2>
            <p className="about-lead">
              Indonesia generates <strong>70 million tons</strong> of municipal waste per year — that&apos;s roughly{" "}
              <strong>190,000 tons every single day</strong>. One of the highest volumes in Southeast Asia.
            </p>
            <p className="about-body">
              Most waste ends up in landfills. Open burning is common. Rivers carry plastic to the sea. Indonesia is the world&apos;s third-largest ocean plastic polluter — not because Indonesians don&apos;t care, but because the systems needed to handle this scale simply don&apos;t exist yet.
            </p>
            <p className="about-body">
              Standard solutions won&apos;t be enough. The scale demands creative, systemic thinking. New infrastructure. New models. New approaches — designed specifically for Indonesia&apos;s geography, economy, and density.
            </p>
            <div className="about-tagline">We&apos;re working on it.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

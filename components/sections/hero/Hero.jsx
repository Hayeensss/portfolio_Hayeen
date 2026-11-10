import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="site-shell hero-section">
      <div className="hero-intro">
        <p className="eyebrow">
          <span className="location-dot" />
          Perth, Western Australia
        </p>
        <h1>
          Hi, I’m Hayeen<span className="accent-text">.</span>
        </h1>
        <p className="hero-role">Junior Software Developer</p>
        <p className="hero-summary">
          UWA IT graduate seeking a junior development role. I build web
          projects with React, Next.js and PostgreSQL.
        </p>
        <div className="button-row">
          <a className="site-button primary" href="#projects">
            Explore my work <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a
            className="site-button secondary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-aside">
        <span className="small-label">A little context</span>
        <p>
          From the interface to the data behind it, I enjoy connecting the
          pieces of a web application.
        </p>
        <a className="text-link" href="#about">
          My background <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="hero-bottom">
        <span>Hayeen (Hanyu Xue)</span>
        <span>Web applications · Personal projects</span>
      </div>
    </section>
  );
}

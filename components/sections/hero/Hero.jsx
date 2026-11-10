import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="site-shell hero-section"
      aria-labelledby="intro-heading"
    >
      <div className="hero-name">
        <p className="location-line">Perth, Western Australia</p>
        <h1 id="intro-heading">
          Hayeen<span>.</span>
        </h1>
        <p className="hero-role">Junior Software Developer</p>
      </div>
      <div className="hero-note">
        <p>I build web interfaces and connect the data behind them.</p>
        <div className="hero-links">
          <a className="text-link" href="#projects">
            View my work <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a
            className="text-link"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

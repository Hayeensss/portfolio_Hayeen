import { ArrowUpRight, Database, SlidersHorizontal, Mail } from "lucide-react";
import { projectsData } from "@/lib/data";

function SourceLinks({ links }) {
  return (
    <div className="project-source-links">
      {links.map((link) => (
        <a
          className="text-link"
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default function Projects() {
  const [doorbell, soil, portfolio] = projectsData;
  return (
    <section
      id="projects"
      className="site-shell work-section"
      aria-labelledby="work-heading"
    >
      <h2 id="work-heading" className="section-caption">
        Selected work
      </h2>
      <article className="featured-project" aria-labelledby="project-doorbell">
        <div className="project-story">
          <h3 id="project-doorbell" className="work-title">
            {doorbell.title}
            <span className="accent-text">.</span>
          </h3>
          <p className="project-description">{doorbell.description}</p>
          <div className="project-contribution">
            <h4>What I built</h4>
            <p>{doorbell.contribution}</p>
          </div>
          <SourceLinks links={doorbell.links} />
        </div>
        <figure className="doorbell-map">
          <figcaption className="map-caption">
            How the system connects
          </figcaption>
          <div className="device-drawing" aria-hidden="true">
            <svg viewBox="0 0 200 280" fill="none">
              <path
                className="signal-line"
                d="M154 58c15 12 24 30 24 51M164 36c24 17 38 44 38 73"
              />
              <rect
                x="42"
                y="20"
                width="102"
                height="230"
                rx="51"
                className="device-body"
              />
              <circle cx="93" cy="76" r="23" className="device-camera" />
              <circle cx="93" cy="76" r="9" className="device-lens" />
              <path
                d="M80 128h26M84 136h18M88 144h10"
                className="device-detail"
              />
              <circle cx="93" cy="195" r="27" className="device-button" />
              <circle cx="93" cy="195" r="19" className="device-detail" />
              <path d="M70 263h46" className="device-detail" />
            </svg>
          </div>
          <div className="map-data">
            <Database size={27} strokeWidth={1.3} aria-hidden="true" />
            <strong>Device events</strong>
            <span>PostgreSQL</span>
          </div>
          <div className="map-branches">
            <div className="map-branch">
              <SlidersHorizontal
                size={21}
                strokeWidth={1.4}
                aria-hidden="true"
              />
              <div>
                <strong>Event history</strong>
                <p>Date, time & event-type filters</p>
                <span>React · Next.js</span>
              </div>
            </div>
            <div className="map-branch">
              <Mail size={21} strokeWidth={1.4} aria-hidden="true" />
              <div>
                <strong>Owner notifications</strong>
                <p>Owner lookup → email delivery</p>
                <span>Cloudflare Worker · Clerk · Resend</span>
              </div>
            </div>
          </div>
        </figure>
      </article>
      <article className="soil-entry" aria-labelledby="project-soil">
        <header>
          <p className="project-kicker">UWA team project · Python</p>
          <h3 id="project-soil" className="work-title">
            {soil.title}
          </h3>
        </header>
        <div className="project-story">
          <p className="project-description">{soil.description}</p>
          <div className="project-contribution">
            <h4>My part</h4>
            <p>{soil.contribution}</p>
          </div>
          <SourceLinks links={soil.links} />
        </div>
      </article>
      <article className="portfolio-entry" aria-labelledby="project-portfolio">
        <h3 id="project-portfolio" className="work-title">
          {portfolio.title}
        </h3>
        <p>{portfolio.description}</p>
        <SourceLinks links={portfolio.links} />
      </article>
    </section>
  );
}

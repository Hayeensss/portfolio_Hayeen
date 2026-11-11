import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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

function ProjectNotes({ notes, className }) {
  return (
    <div className={className}>
      {notes.map(({ title, description, links }) => (
        <div key={title} className="project-note">
          <h4>{title}</h4>
          <p>{description}</p>
          <SourceLinks links={links} />
        </div>
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

      <article className="doorbell-study" aria-labelledby="project-doorbell">
        <header className="study-heading">
          <h3 id="project-doorbell" className="work-title">
            {doorbell.title}
            <span className="accent-text">.</span>
          </h3>
          <p className="project-description">{doorbell.description}</p>
        </header>
        <div className="doorbell-exhibit">
          <figure className="doorbell-figure">
            <div className="filter-visual">
              <Image
                src="/work/doorbell-filters.jpg"
                alt="The event history filter panel with a date input, time range options, event type checkboxes and an Apply Filters button."
                width={460}
                height={448}
                sizes="(max-width: 767px) calc(100vw - 76px), 460px"
              />
            </div>
            <figcaption>
              Event history filters captured from the original component with
              example selections.
            </figcaption>
          </figure>
          <ProjectNotes notes={doorbell.notes} className="doorbell-notes" />
        </div>
      </article>

      <article className="soil-study" aria-labelledby="project-soil">
        <header className="study-heading">
          <div>
            <p className="project-kicker">UWA team project · Python</p>
            <h3 id="project-soil" className="work-title">
              {soil.title}
            </h3>
          </div>
          <div>
            <p className="project-description">{soil.description}</p>
            <SourceLinks links={soil.links} />
          </div>
        </header>
        <figure className="soil-figure">
          <Image
            src="/work/soil-inversion.png"
            alt="A triangulated subsurface model. The horizontal axis follows the survey line, the vertical axis shows depth and the colour scale shows estimated electrical resistivity."
            width={2662}
            height={680}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1296px) calc(100vw - 96px), 1200px"
          />
          <figcaption>
            <span>
              Resistivity across the survey line and depth, from my inversion
              PR.
            </span>
            <a
              className="text-link"
              href="/work/soil-inversion.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full-size plot <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </figcaption>
        </figure>
        <ProjectNotes notes={soil.notes} className="soil-notes" />
      </article>

      <article className="portfolio-entry" aria-labelledby="project-portfolio">
        <div>
          <h3 id="project-portfolio" className="work-title">
            {portfolio.title}
          </h3>
          <p>{portfolio.description}</p>
          <SourceLinks links={portfolio.links} />
        </div>
        <Image
          src="/work/portfolio-home.jpg"
          alt="Hayeen's portfolio homepage with the name set in Acorn and links to the work and CV."
          width={1120}
          height={427}
          sizes="(max-width: 767px) calc(100vw - 40px), 380px"
        />
      </article>
    </section>
  );
}

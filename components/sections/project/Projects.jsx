import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Database,
  Layout,
  Code2,
} from "lucide-react";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="site-shell section-block work-section"
      aria-labelledby="work-heading"
    >
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">Selected work / 01</p>
          <h2 id="work-heading">Ideas into working parts.</h2>
        </div>
        <p className="section-lead">
          Two web projects. A closer look at the problems, the implementation
          and my contribution.
        </p>
      </div>
      {projectsData.map((project, index) => (
        <article
          key={project.title}
          className={`project-row project-${project.id}`}
          aria-labelledby={`project-${project.id}`}
        >
          <div className="project-copy">
            <p className="project-meta">
              0{index + 1} <span>Personal project</span>
            </p>
            <h3 id={`project-${project.id}`}>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <h4 className="small-label">My contribution</h4>
            <ul className="contribution-list">
              {project.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="project-stack">{project.technologies.join(" · ")}</p>
            <div className="project-source-links">
              {project.links.map((link) => (
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
          </div>
          <figure className="implementation-figure">
            <figcaption>
              <span className="small-label">Implementation overview</span>
              <span className="figure-index">0{index + 1}</span>
            </figcaption>
            {project.id === "doorbell" ? (
              <>
                <div className="flow-stage">
                  <Layout size={21} aria-hidden="true" />
                  <div>
                    <strong>Event history</strong>
                    <span>React interface & filters</span>
                  </div>
                </div>
                <div className="flow-connector">
                  <ArrowDown size={16} aria-hidden="true" />
                  <span>Server-side query</span>
                </div>
                <div className="flow-stage">
                  <Database size={21} aria-hidden="true" />
                  <div>
                    <strong>PostgreSQL</strong>
                    <span>Devices, owners & events</span>
                  </div>
                </div>
                <div className="flow-connector">
                  <ArrowDown size={16} aria-hidden="true" />
                  <span>Pending-event processing</span>
                </div>
                <div className="flow-stage">
                  <Bell size={21} aria-hidden="true" />
                  <div>
                    <strong>Notification worker</strong>
                    <span>Clerk lookup → Resend email</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="portfolio-outline">
                  <div className="outline-nav">
                    <span className="outline-brand">Hayeen.</span>
                    <span>Work / About / Contact</span>
                  </div>
                  <div className="outline-heading">
                    A place for
                    <br />
                    the work.
                  </div>
                  <div className="outline-lines">
                    <span />
                    <span />
                  </div>
                  <div className="outline-projects">
                    <Code2 size={25} aria-hidden="true" />
                    <ArrowRight size={22} aria-hidden="true" />
                    <Layout size={25} aria-hidden="true" />
                  </div>
                </div>
                <p className="figure-note">
                  Project data → React components → responsive pages
                </p>
              </>
            )}
            {project.id === "doorbell" && (
              <p className="figure-note">
                Web application + companion notification worker
              </p>
            )}
          </figure>
        </article>
      ))}
    </section>
  );
}

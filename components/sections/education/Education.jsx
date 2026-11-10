import { educationData } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="education-section"
      aria-labelledby="education-heading"
    >
      <h2 id="education-heading" className="section-caption">
        Education
      </h2>
      <ol className="education-list">
        {educationData.map((item) => (
          <li key={item.degree}>
            <p className="education-period">{item.period}</p>
            <h3>{item.degree}</h3>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.institution}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

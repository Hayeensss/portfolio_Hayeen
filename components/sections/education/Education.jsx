import { educationData } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="compact-section"
      aria-labelledby="education-heading"
    >
      <p className="eyebrow">Education / 04</p>
      <h2 id="education-heading">A foundation in IT.</h2>
      <ol className="education-list">
        {educationData.map((item) => (
          <li key={item.degree}>
            <p className="education-period">{item.period}</p>
            <h3>{item.degree}</h3>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.institution}
            </a>
            <p className="education-location">{item.location}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

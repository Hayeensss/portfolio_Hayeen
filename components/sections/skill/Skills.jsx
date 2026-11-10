import { skillsData } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-heading"
    >
      <h2 id="skills-heading" className="section-caption">
        Tools I work with
      </h2>
      <dl className="skills-list">
        {skillsData.map((skill) => (
          <div key={skill.id}>
            <dt>{skill.title}</dt>
            <dd>{skill.tags.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

import { skillsData } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="compact-section"
      aria-labelledby="skills-heading"
    >
      <p className="eyebrow">Toolkit / 03</p>
      <h2 id="skills-heading">What I build with.</h2>
      <p className="section-intro">Technologies used across my web projects.</p>
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

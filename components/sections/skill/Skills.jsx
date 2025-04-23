import SectionHeading from "@/components/layout/SectionHeading";
import SectionNavigation from "@/components/layout/SectionNavigation";
import { skillsData } from "@/lib/data";
import SkillCard from "./component/SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-20 bg-gray-50 dark:bg-[#0F172A] relative"
    >
      <div className="container mx-auto px-4">
        <SectionHeading>SKILLS</SectionHeading>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>

      <SectionNavigation currentSectionId="skills" />
    </section>
  );
}

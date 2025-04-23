"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import SectionNavigation from "@/components/layout/SectionNavigation";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import ProjectGrid from "./component/ProjectGrid";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-20 bg-white dark:bg-gradient-to-b dark:from-[#1E293B] dark:to-[#0F172A] relative"
    >
      <div className="container mx-auto px-4">
        <SectionHeading>PROJECTS</SectionHeading>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-center text-sm md:text-base"
        >
          Explore my portfolio of projects showcasing my skills in web
          development, from responsive front-end designs to complex back-end
          systems.
        </motion.p>

        <ProjectGrid projects={projectsData} />

        {projectsData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10 text-gray-600 dark:text-gray-400"
          >
            <p>No projects found.</p>
          </motion.div>
        )}
      </div>

      <SectionNavigation currentSectionId="projects" />
    </section>
  );
}

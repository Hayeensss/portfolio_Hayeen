"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import ProjectImageGallery from "./ProjectImageGallery";
import ProjectInfo from "./ProjectInfo";
import ProjectLinks from "./ProjectLinks";

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white border-2 border-[#b08047]/40 dark:border-[#015eb4]/30 hover:border-[#b08047]/60 dark:hover:border-[#38BDF8]/50 dark:bg-gradient-to-br dark:from-[#1E293B] dark:to-[#2D3748] rounded-xl overflow-hidden shadow-lg flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <ProjectImageGallery
        projectImages={project.images}
        projectTitle={project.title}
        isHovered={isHovered}
      />

      <div className="flex flex-col flex-grow">
        <div className="flex-grow">
          <ProjectInfo
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        </div>

        <ProjectLinks demoUrl={project.demoUrl} githubUrl={project.githubUrl} />
      </div>
    </motion.div>
  );
}

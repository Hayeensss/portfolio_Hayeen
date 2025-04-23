"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";
import SkillTags from "./SkillTags";

// Reverted light mode borders/icons to original image colors, kept derived dark mode colors & updated shadow
const skillThemes = {
  frontend: {
    cardBorder: "border-[#f8a056]/20 dark:border-[#38BDF8]/30",
    iconText: "text-[#f8a056] dark:text-[#38BDF8]",
    iconBgGradient:
      "from-[#fcf0d4] to-[#fde4cc] dark:from-[#3B82F6]/20 dark:to-[#38BDF8]/20",
    titleText: "text-[#543e1c] dark:text-white",
    tagText: "text-[#8c5e2a] dark:text-[#38BDF8]",
    tagBorder: "border-[#f8a056]/20 dark:border-[#38BDF8]/30",
    tagBg: "bg-[#fde4cc] dark:bg-[#38BDF8]/15",
    glow: "from-[#f8a056]/5 dark:from-[#38BDF8]/5",
  },
  backend: {
    cardBorder: "border-[#46b3a5]/20 dark:border-[#4DBBAD]/30",
    iconText: "text-[#46b3a5] dark:text-[#4DBBAD]",
    iconBgGradient:
      "from-[#b9e6e0] to-[#a8ded6] dark:from-[#46b3a5]/20 dark:to-[#4DBBAD]/20",
    titleText: "text-[#1e5953] dark:text-white",
    tagText: "text-[#1e5953] dark:text-[#4DBBAD]",
    tagBorder: "border-[#46b3a5]/20 dark:border-[#4DBBAD]/30",
    tagBg: "bg-[#c8eee9] dark:bg-[#4DBBAD]/15",
    glow: "from-[#46b3a5]/5 dark:from-[#4DBBAD]/5",
  },
  database: {
    cardBorder: "border-[#c375e0]/20 dark:border-[#9B69D3]/30",
    iconText: "text-[#c375e0] dark:text-[#9B69D3]",
    iconBgGradient:
      "from-[#eac4f6] to-[#e3b8f2] dark:from-[#c375e0]/20 dark:to-[#9B69D3]/20",
    titleText: "text-[#5a3264] dark:text-white",
    tagText: "text-[#5a3264] dark:text-[#9B69D3]",
    tagBorder: "border-[#c375e0]/20 dark:border-[#9B69D3]/30",
    tagBg: "bg-[#eac4f6] dark:bg-[#9B69D3]/15",
    glow: "from-[#c375e0]/5 dark:from-[#9B69D3]/5",
  },
  devops: {
    cardBorder: "border-[#8b7ad4]/20 dark:border-[#7E8CE0]/30",
    iconText: "text-[#8b7ad4] dark:text-[#7E8CE0]",
    iconBgGradient:
      "from-[#e0d1ff] to-[#d5c3fd] dark:from-[#8b7ad4]/20 dark:to-[#7E8CE0]/20",
    titleText: "text-[#47407a] dark:text-white",
    tagText: "text-[#47407a] dark:text-[#7E8CE0]",
    tagBorder: "border-[#8b7ad4]/20 dark:border-[#7E8CE0]/30",
    tagBg: "bg-[#d5c3fd] dark:bg-[#7E8CE0]/15",
    glow: "from-[#8b7ad4]/5 dark:from-[#7E8CE0]/5",
  },
};

export default function SkillCard({ skill, index }) {
  const { id, title, iconPath, description, tags } = skill;
  const theme = skillThemes[id] || skillThemes.frontend;
  const delay = index * 0.1;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      // Adjusted hover effect - removed explicit border color change
      whileHover={{
        y: -5,
        boxShadow: "0 15px 30px -10px rgba(176, 128, 71, 0.2)", // Keep existing hover shadow or adjust as needed
      }}
      className={cn(
        // Apply the target shadow style (shadow-lg with specific color) as the base style
        "relative border-2 p-6 rounded-[24px] shadow-lg shadow-[#0F172A]/50 dark:shadow-lg dark:shadow-[#0F172A]/50",
        "bg-white/80 dark:bg-[#1E293B]/90 backdrop-blur-sm",
        "transition-all duration-300 h-full flex flex-col",
        theme.cardBorder // Apply theme-based border color
      )}
    >
      <SkillIcon iconPath={iconPath} title={title} theme={theme} />

      {/* Title - Use theme color */}
      <h3 className={cn("text-xl font-bold mb-3", theme.titleText)}>{title}</h3>

      {/* Description - Consistent style */}
      <p className="text-gray-700 dark:text-gray-200 font-medium mb-4">
        {description}
      </p>

      <SkillTags tags={tags} theme={theme} />

      {/* Decorative Glow Element - Use theme color */}
      <div
        className={cn(
          "absolute top-3 right-3 w-12 h-12 rounded-full bg-gradient-to-br to-transparent opacity-70",
          theme.glow
        )}
      ></div>
    </motion.div>
  );
}

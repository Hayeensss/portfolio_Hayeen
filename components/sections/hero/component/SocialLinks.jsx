"use client";

import Link from "next/link";

import { contactData } from "@/lib/data";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const platformIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
};

const relevantPlatforms = ["github", "linkedin"];

export default function SocialLinks() {
  const linksToShow = contactData.socialLinks.filter((link) =>
    relevantPlatforms.includes(link.platform.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex gap-4"
    >
      {linksToShow.map((link) => {
        const IconComponent = platformIcons[link.platform.toLowerCase()];
        if (!IconComponent) return null;

        return (
          <Link href={link.url} target="_blank" key={link.platform}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full w-12 h-12 border-2 border-[#b08047] dark:border-[#38BDF8]/30 hover:border-[#b08047] dark:hover:border-[#38BDF8] hover:bg-[#b08047]/10 dark:hover:bg-[#3B82F6]/20 flex items-center justify-center transition-all duration-300"
              aria-label={`Follow on ${link.platform}`}
            >
              <IconComponent className="w-5 h-5 text-[#b08047] dark:text-[#38BDF8]" />
            </motion.div>
          </Link>
        );
      })}
    </motion.div>
  );
}

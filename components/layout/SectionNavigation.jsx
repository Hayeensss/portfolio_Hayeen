"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import { navigationLinks } from "@/lib/data";

export default function SectionNavigation({ currentSectionId }) {
  const [nextSectionId, setNextSectionId] = useState(null);
  const [_activeTab, _setActiveTab] = useState(navigationLinks[0].href);

  useEffect(() => {
    const currentIndex = navigationLinks.findIndex(
      (link) => link.href === `#${currentSectionId}`
    );

    if (currentIndex !== -1 && currentIndex < navigationLinks.length - 1) {
      const nextSection = navigationLinks[currentIndex + 1].href.substring(1);
      setNextSectionId(nextSection);
    } else {
      setNextSectionId(null);
    }
  }, [currentSectionId]);

  if (!nextSectionId) return null;

  const scrollToNextSection = () => {
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="absolute bottom-5 right-5 z-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <motion.div
        onClick={scrollToNextSection}
        className="w-10 h-10 rounded-full bg-[#b08047] dark:bg-[#38BDF8] flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg transform transition-all duration-300"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 10px 25px -5px rgba(176, 128, 71, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Scroll to ${nextSectionId} section`}
      >
        <ChevronDown className="text-white w-6 h-6" />
      </motion.div>
    </motion.div>
  );
}

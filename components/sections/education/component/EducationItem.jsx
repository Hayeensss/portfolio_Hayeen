"use client";

import { motion } from "framer-motion";
import { Building, MapPin } from "lucide-react";
import Link from "next/link";
import CardDecorations from "./CardDecorations";
import FocusAreasList from "./FocusAreasList";
import TimelineDot from "./TimelineDot";

export default function EducationItem({ item, index }) {
  const altText = item.institution.includes("Western Australia")
    ? "UWA Logo"
    : "UESTC Logo";

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.3,
        type: "spring",
        stiffness: 100,
      }}
      className="mb-16 last:mb-0 relative pl-16"
    >
      <TimelineDot logoUrl={item.logoUrl} altText={altText} />

      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="bg-white dark:bg-gradient-to-br dark:from-[#1E293B] dark:to-[#2D3748] rounded-xl p-6 shadow-lg relative dark:shadow-indigo-900/10"
      >
        <CardDecorations />

        <span className="inline-block px-4 py-1 rounded-full bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 text-sm font-medium mb-4">
          {item.period}
        </span>

        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {item.degree}
        </h3>

        <div className="space-y-3 text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <Building className="w-4 h-4 mr-2 flex-shrink-0" />
            <Link
              href={item.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-blue-500 dark:hover:text-blue-400 transition-colors ${!item.url ? "pointer-events-none text-gray-400" : ""}`}
            >
              {item.institution}
            </Link>
          </div>

          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{item.location}</span>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-700/50 pt-3 mt-3 relative">
            <svg
              className="absolute -top-0.5 left-0 w-full h-2 text-gray-200 dark:text-indigo-700/40 opacity-50 dark:opacity-80"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0,5 C20,2 20,8 40,5 C60,2 60,8 80,5 C100,2 100,8 120,5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>

            <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
              Focus Areas:
            </h4>
            <FocusAreasList focusAreas={item.focusAreas} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

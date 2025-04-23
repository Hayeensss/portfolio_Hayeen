"use client";

import { motion } from "framer-motion";

export default function FocusAreasList({ focusAreas }) {
  return (
    <ul className="space-y-1">
      {focusAreas.map((area, i) => (
        <li key={i} className="flex items-center">
          <motion.span
            className={`w-1.5 h-1.5 ${i % 2 === 0 ? "bg-gray-400 dark:bg-indigo-400" : "bg-gray-500 dark:bg-purple-400"} rounded-full mr-2`}
            whileHover={{ scale: 1.5 }}
          />
          <span>{area}</span>
        </li>
      ))}
    </ul>
  );
}

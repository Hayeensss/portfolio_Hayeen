"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        Hi, I&apos;m Hayeen.
        <br />
        <span className="text-3xl md:text-4xl lg:text-5xl text-gray-600 dark:text-gray-300">
          Junior Software Developer.
        </span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
        Perth-based UWA IT graduate seeking a junior development role.
        I build web projects with React, Next.js and PostgreSQL, alongside
        my current work as a Procurement Coordinator.
      </p>
    </motion.div>
  );
}

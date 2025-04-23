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
          A Full-stack Developer.
        </span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
        I&apos;m a full-stack developer with a keen eye for creating engaging
        UI, bringing products to life.
      </p>
    </motion.div>
  );
}

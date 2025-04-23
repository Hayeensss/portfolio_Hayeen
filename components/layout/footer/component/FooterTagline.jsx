"use client";

import { motion } from "framer-motion";

export default function FooterTagline() {
  return (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-xl text-gray-800 dark:text-gray-200 font-medium mb-10 max-w-md"
    >
      Living, learning, & leveling up
      <br />
      one day at a time.
    </motion.p>
  );
}

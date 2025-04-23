"use client";

import { motion } from "framer-motion";

export default function FooterCopyright() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-gray-500 dark:text-gray-400 text-sm"
    >
      <p>Handcrafted by Hayeen © {new Date().getFullYear()}</p>
    </motion.div>
  );
}

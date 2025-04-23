"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-heading font-bold text-center mb-8 md:mb-12 text-[#b08047] dark:text-[#38BDF8]"
    >
      {children}
    </motion.h2>
  );
}

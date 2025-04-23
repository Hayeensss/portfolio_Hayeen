"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ActionButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col gap-4"
    >
      <div className="flex gap-4">
        <Link href="#contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full px-6 py-2.5 text-sm font-medium text-[#b08047] dark:text-[#38BDF8] bg-transparent border-2 border-[#b08047] dark:border-[#38BDF8] hover:bg-[#b08047]/10 dark:hover:bg-[#38BDF8]/20 transition-all duration-300"
          >
            Contact Me
          </motion.button>
        </Link>
        <Link href="/resume.pdf" target="_blank">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full px-6 py-2.5 text-sm font-medium text-[#b08047] dark:text-[#38BDF8] bg-transparent border-2 border-[#b08047] dark:border-[#38BDF8] hover:bg-[#b08047]/10 dark:hover:bg-[#38BDF8]/20 transition-all duration-300"
          >
            Resume
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

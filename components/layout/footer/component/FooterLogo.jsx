"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FooterLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <div className="relative w-16 h-16 mb-2">
        <Image
          src="/imgs/logo.webp"
          alt="Hayeen Logo"
          width={64}
          height={64}
          className="rounded-full object-cover border-2 border-gray-200 dark:border-[#38BDF8]"
        />
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative aspect-square w-4/5 mx-auto md:w-full md:mx-0"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute -top-8 -left-8 w-16 h-16 rounded-lg bg-gradient-to-br from-purple-200 to-purple-100 dark:from-indigo-900/30 dark:to-purple-800/30"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute -top-8 -right-8 w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-100 to-pink-100 dark:from-yellow-900/30 dark:to-blue-900/30"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute -bottom-8 -left-8 w-16 h-16 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute -bottom-8 -right-8 w-16 h-16 rounded-lg bg-gradient-to-br from-teal-200 to-teal-100 dark:from-teal-900/30 dark:to-blue-800/30"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl transform rotate-6"></div>
      <div className="relative aspect-square rounded-3xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl">
        <Image
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt="美美哒照片放这放这"
          fill
          className="object-cover"
          priority
        />
      </div>
    </motion.div>
  );
}

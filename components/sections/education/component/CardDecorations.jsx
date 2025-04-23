import { motion } from "framer-motion";

export default function CardDecorations() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute -top-3 -right-3 w-12 h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-indigo-800/60 dark:to-purple-800/60 -z-10"
      />

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "40%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute top-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-300 to-purple-300 dark:via-blue-400/80 dark:to-purple-400/80 rounded-tr-xl"
      />
    </>
  );
}

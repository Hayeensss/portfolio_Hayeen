"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -10,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const getBgColor = (idx) => {
  const colors = [
    "bg-[#fef6e4]/20 dark:bg-[#1F2A3D]/80",
    "bg-[#e3f6f5]/20 dark:bg-[#212F43]/80",
    "bg-[#f3d9fa]/20 dark:bg-[#23293E]/80",
    "bg-[#e5e7fb]/20 dark:bg-[#292B3D]/80",
  ];
  return colors[idx % colors.length];
};

const getBorderColor = (idx) => {
  const colors = [
    "border-l-[#f8a056] dark:border-l-[#F97B62]",
    "border-l-[#46b3a5] dark:border-l-[#4DBBAD]",
    "border-l-[#c375e0] dark:border-l-[#9B69D3]",
    "border-l-[#818cf8] dark:border-l-[#7E8CE0]",
  ];
  return colors[idx % colors.length];
};

const getTitleColor = (idx) => {
  const colors = [
    "text-[#543e1c] dark:text-[#F97B62]",
    "text-[#1e5953] dark:text-[#4DBBAD]",
    "text-[#5a3264] dark:text-[#9B69D3]",
    "text-[#3730a3] dark:text-[#7E8CE0]",
  ];
  return colors[idx % colors.length];
};

const getGlowColor = (idx) => {
  const colors = [
    "shadow-orange-500/20 dark:shadow-orange-500/10",
    "shadow-teal-500/20 dark:shadow-teal-500/10",
    "shadow-purple-500/20 dark:shadow-purple-500/10",
    "shadow-indigo-500/20 dark:shadow-indigo-500/10",
  ];
  return colors[idx % colors.length];
};

const getTopViaColor = (idx) => {
  const colors = [
    "via-orange-300",
    "via-teal-300",
    "via-purple-300",
    "via-indigo-300",
  ];
  return colors[idx % colors.length];
};

const getUnderlineFromColor = (idx) => {
  const colors = [
    "from-orange-400/60",
    "from-teal-400/60",
    "from-purple-400/60",
    "from-indigo-400/60",
  ];
  return colors[idx % colors.length];
};

const getBottomLineBgColor = (idx) => {
  const colors = [
    "bg-orange-400/20 dark:bg-orange-500/15",
    "bg-teal-400/20 dark:bg-teal-500/15",
    "bg-purple-400/20 dark:bg-purple-500/15",
    "bg-indigo-400/20 dark:bg-indigo-500/15",
  ];
  return colors[idx % colors.length];
};

export default function AboutCard({ index, title, content }) {
  return (
    <motion.div
      key={index}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className={`p-6 rounded-lg border-l-4 shadow-lg transition-all duration-300 ${getBgColor(index)} ${getBorderColor(index)} ${getGlowColor(index)} relative overflow-hidden backdrop-blur-sm`}
    >
      <ParticleBackground index={index} />

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className={`absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent ${getTopViaColor(index)} to-transparent opacity-0 dark:opacity-40`}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={contentVariants}
        className="relative z-10"
      >
        <motion.h3
          variants={itemVariants}
          className={`text-lg font-bold mb-3 ${getTitleColor(index)}`}
        >
          {title}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          {content}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className={`h-0.5 mt-4 rounded-full bg-gradient-to-r ${getUnderlineFromColor(index)} to-transparent`}
          style={{ width: "40%", opacity: 0.3 }}
        />
      </motion.div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-1 ${getBottomLineBgColor(index)}`}
      />
    </motion.div>
  );
}

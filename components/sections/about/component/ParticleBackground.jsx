"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const getParticleFromColor = (idx) => {
  const colors = [
    "from-[#f8a056]",
    "from-[#46b3a5]",
    "from-[#c375e0]",
    "from-[#818cf8]",
  ];
  return colors[idx % colors.length];
};

const getParticleToColor = (idx) => {
  const colors = [
    "to-[#f3e4d1]",
    "to-[#d2f3ef]",
    "to-[#f3d9fa]",
    "to-[#e5e7fb]",
  ];
  return colors[idx % colors.length];
};

export default function ParticleBackground({ index }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Render particles only on the client after mount to prevent hydration mismatch
  if (!isMounted) {
    return null; // Or a placeholder if needed, but null is fine for background effect
  }

  return (
    <>
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          whileInView={{
            opacity: 0.5,
            y: [
              Math.random() * 12 - 6,
              Math.random() * -12 + 6,
              Math.random() * 12 - 6,
            ],
            x: [
              Math.random() * 12 - 6,
              Math.random() * -12 + 6,
              Math.random() * 12 - 6,
            ],
          }}
          transition={{
            duration: 7 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.15,
          }}
          viewport={{ once: true }}
          className={`absolute rounded-full bg-gradient-to-r ${getParticleFromColor(index)} ${getParticleToColor(index)} opacity-10 dark:opacity-40 pointer-events-none`} // Added pointer-events-none
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.floor(Math.random() * 8) + 3}px`,
            height: `${Math.floor(Math.random() * 8) + 3}px`,
          }}
        />
      ))}
    </>
  );
}

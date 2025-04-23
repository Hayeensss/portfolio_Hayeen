"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const defaultImage =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

export default function ProjectImageGallery({
  projectImages,
  projectTitle,
  isHovered,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(
    () => (projectImages?.length > 0 ? projectImages : [defaultImage]),
    [projectImages]
  );

  useEffect(() => {
    let interval;
    if (!isHovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered, images]);

  return (
    <div className="relative aspect-video overflow-hidden">
      {!isHovered ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`${projectTitle} preview ${currentImageIndex + 1}`}
              fill
              priority={currentImageIndex === 0}
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="flex h-full transition-all duration-500">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              animate={{ scale: 0.9 }}
              className="relative flex-1 mx-1 first:ml-2 last:mr-2"
            >
              <Image
                src={image}
                alt={`${projectTitle} preview ${index + 1}`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

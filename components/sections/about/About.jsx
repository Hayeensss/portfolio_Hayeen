"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import SectionNavigation from "@/components/layout/SectionNavigation";
import { aboutData } from "@/lib/data";
import { motion } from "framer-motion";
import AboutCard from "./component/AboutCard";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-gray-50 dark:bg-[#0F172A] relative"
    >
      <div className="container mx-auto px-4">
        <SectionHeading>WHO I AM</SectionHeading>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-8">
            {aboutData.map((item, index) => (
              <AboutCard
                key={index}
                index={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <SectionNavigation currentSectionId="about" />
    </section>
  );
}

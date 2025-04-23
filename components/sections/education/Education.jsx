"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import SectionNavigation from "@/components/layout/SectionNavigation";
import { educationData } from "@/lib/data";
import { motion } from "framer-motion";
import EducationItem from "./component/EducationItem";

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 md:py-20 bg-white dark:bg-gradient-to-b dark:from-[#0F172A] dark:to-[#1E293B] relative"
    >
      <div className="container mx-auto px-4">
        <SectionHeading>EDUCATION JOURNEY</SectionHeading>

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-indigo-700/50 dark:to-purple-600/50"
          />

          {educationData.map((item, index) => (
            <EducationItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      <SectionNavigation currentSectionId="education" />
    </section>
  );
}

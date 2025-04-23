"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import SectionNavigation from "@/components/layout/SectionNavigation";
import { contactData } from "@/lib/data";
import { motion } from "framer-motion";

import ContactForm from "./component/ContactForm";
import ContactInfoList from "./component/ContactInfoList";
import SocialLinks from "./component/SocialLinks";
import WorkTogetherCallout from "./component/WorkTogetherCallout";

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 bg-white dark:bg-gradient-to-b dark:from-[#0F172A] dark:to-[#1E293B] relative"
    >
      <div className="container mx-auto px-4">
        <SectionHeading>GET IN TOUCH</SectionHeading>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactForm introText={contactData.intro} />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <ContactInfoList
                email={contactData.email}
                address={contactData.address}
              />
            </div>

            <SocialLinks links={contactData.socialLinks} />

            <WorkTogetherCallout />
          </motion.div>
        </div>
      </div>

      <SectionNavigation currentSectionId="contact" />
    </section>
  );
}

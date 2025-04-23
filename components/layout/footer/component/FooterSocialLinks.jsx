"use client";

import ThemeToggle from "@/components/theme/ThemeToggle";
import { contactData } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function FooterSocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex justify-center space-x-6 mb-10"
    >
      {/* Show on mobile, hide on sm and larger */}
      <div className="rounded-full w-12 h-12 border-2 border-[#b08047] dark:border-[#38BDF8]/30 hover:border-[#b08047] dark:hover:border-[#38BDF8] hover:bg-[#b08047]/10 dark:hover:bg-[#38BDF8]/20 flex items-center justify-center transition-all duration-300 sm:hidden">
        <ThemeToggle iconClassName="text-[#b08047] dark:text-[#38BDF8]" />
      </div>

      <Link
        href={
          contactData.socialLinks.find((link) => link.platform === "github")
            ?.url || "https://github.com/"
        }
        target="_blank"
        className="rounded-full w-12 h-12 border-2 border-[#b08047] dark:border-[#38BDF8]/30 hover:border-[#b08047] dark:hover:border-[#38BDF8] hover:bg-[#b08047]/10 dark:hover:bg-[#38BDF8]/20 flex items-center justify-center transition-all duration-300"
      >
        <FaGithub
          size={20}
          className="w-5 h-5 text-[#b08047] dark:text-[#38BDF8]"
        />
      </Link>

      <Link
        href={
          contactData.socialLinks.find((link) => link.platform === "linkedin")
            ?.url || "https://linkedin.com/"
        }
        target="_blank"
        className="rounded-full w-12 h-12 border-2 border-[#b08047] dark:border-[#38BDF8]/30 hover:border-[#b08047] dark:hover:border-[#38BDF8] hover:bg-[#b08047]/10 dark:hover:bg-[#38BDF8]/20 flex items-center justify-center transition-all duration-300"
      >
        <FaLinkedin
          size={20}
          className="w-5 h-5 text-[#b08047] dark:text-[#38BDF8]"
        />
      </Link>

      <Link
        href={`mailto:${contactData.email}`}
        className="rounded-full w-12 h-12 border-2 border-[#b08047] dark:border-[#38BDF8]/30 hover:border-[#b08047] dark:hover:border-[#38BDF8] hover:bg-[#b08047]/10 dark:hover:bg-[#38BDF8]/20 flex items-center justify-center transition-all duration-300"
      >
        <FaEnvelope
          size={20}
          className="w-5 h-5 text-[#b08047] dark:text-[#38BDF8]"
        />
      </Link>
    </motion.div>
  );
}

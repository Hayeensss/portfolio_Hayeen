import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function getSocialIcon(platform) {
  switch (platform.toLowerCase()) {
    case "github":
      return <FaGithub size={20} />;
    case "linkedin":
      return <FaLinkedin size={20} />;
    case "instagram":
      return <FaInstagram size={20} />;
    default:
      return null;
  }
}

export default function SocialLinks({ links }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
        Follow Me
      </h3>
      <div className="flex flex-wrap gap-4 justify-start">
        {links.map((link, index) => {
          const Icon = getSocialIcon(link.platform);
          if (!Icon) return null;
          return (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow on ${link.platform}`}
              >
                <div className="flex-shrink-0 bg-transparent border-2 border-[#b08047] dark:border-[#38BDF8] p-3 rounded-lg shadow-md flex items-center justify-center text-[#b08047] dark:text-[#38BDF8]">
                  {Icon}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

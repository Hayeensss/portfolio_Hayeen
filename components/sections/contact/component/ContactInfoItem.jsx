import { motion } from "framer-motion";

export default function ContactInfoItem({ icon, label, value, href }) {
  const linkContent = (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-base font-medium text-gray-900 dark:text-white hover:text-[#b08047] dark:hover:text-[#015eb4] transition-colors break-words"
    >
      {value}
    </a>
  );

  const textContent = (
    <span className="text-base font-medium text-gray-900 dark:text-white break-words">
      {value}
    </span>
  );

  return (
    <motion.div
      className="flex items-start gap-4"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex-shrink-0 bg-transparent border-2 border-[#b08047] dark:border-[#38BDF8] p-3 rounded-lg shadow-md flex items-center justify-center text-[#b08047] dark:text-[#38BDF8]">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
          {label}
        </h4>
        {href ? linkContent : textContent}
      </div>
    </motion.div>
  );
}

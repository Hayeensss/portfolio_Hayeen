import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ProjectLinks({ demoUrl, githubUrl }) {
  if (!demoUrl && !githubUrl) {
    return null;
  }

  return (
    <div className="px-6 pb-6 flex items-center gap-3">
      {demoUrl && (
        <Link
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo for project`}
        >
          <button className="px-5 py-2 text-sm font-medium text-[#b08047] dark:text-[#38BDF8] bg-transparent border-2 border-[#b08047] dark:border-[#38BDF8] hover:bg-[#b08047]/10 dark:hover:bg-[#38BDF8]/10 rounded-full transition-all duration-300 flex items-center justify-center">
            Live Demo
          </button>
        </Link>
      )}
      {githubUrl && (
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub repository for project`}
        >
          <button className="p-2.5 rounded-full bg-transparent border border-[#b08047]/50 dark:border-[#38BDF8]/50 hover:border-[#b08047] dark:hover:border-[#38BDF8] hover:bg-[#b08047]/10 dark:hover:bg-[#38BDF8]/10 transition-all duration-300 flex items-center justify-center">
            <FaGithub className="w-5 h-5 text-[#b08047] dark:text-[#38BDF8]" />
          </button>
        </Link>
      )}
    </div>
  );
}

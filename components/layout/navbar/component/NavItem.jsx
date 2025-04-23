"use client";

import Link from "next/link";

export default function NavItem({ href, label, isActive, itemRef, onClick }) {
  return (
    <li className="flex relative">
      <Link
        href={href}
        ref={itemRef}
        onClick={onClick}
        className={`text-[12px] sm:text-base font-medium rounded-[24px] py-[6px] px-[12px] sm:px-[20px] sm:mx-[5px] flex items-center transition-all duration-200 ${
          isActive
            ? "text-[#1a1a1a] dark:text-white bg-white/50 dark:bg-white/10"
            : "text-[#1a1a1a]/70 dark:text-white/70 hover:text-[#1a1a1a] dark:hover:text-white"
        } hover:bg-white/50 dark:hover:bg-white/10`}
      >
        {label}
        {isActive && (
          <span className="hidden sm:flex ml-[6px] text-xs w-[24px] h-[24px] items-center justify-center rounded-[6px] text-[#1a1a1a] dark:text-white border-2 border-gray-200 dark:border-gray-700">
            /
          </span>
        )}
      </Link>
    </li>
  );
}

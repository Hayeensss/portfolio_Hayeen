"use client";

import { navigationLinks } from "@/lib/data";
import NavItem from "./NavItem";

export default function NavList({ activeSection, itemRefs, scrolled }) {
  const links = navigationLinks;

  return (
    <ul
      className={`flex justify-center flex-nowrap overflow-x-auto md:justify-start list-none p-2 md:p-[10px] transition-all duration-200 rounded-[50px] ${
        scrolled
          ? "bg-gradient-to-r from-[#FCF5E5]/80 via-[#FAECF6]/80 to-[#E6F0FA]/80 dark:from-[#292315]/80 dark:via-[#2D1A27]/80 dark:to-[#192532]/80 backdrop-blur-[20px] saturate-[1.1]"
          : "bg-transparent"
      } hover:bg-[#FCF5E5]/20 dark:hover:bg-[#FCF5E5]/8 hover:backdrop-blur-[8px]`}
    >
      {links.map((link, index) => {
        const isActive = activeSection === link.href.substring(1);
        return (
          <NavItem
            key={index}
            href={link.href}
            label={link.label}
            isActive={isActive}
            itemRef={(el) => (itemRefs.current[index] = el)}
          />
        );
      })}
    </ul>
  );
}

"use client";

import { navigationLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import NavList from "./component/NavList";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [_tabStyle, setTabStyle] = useState({
    left: 0,
    width: 0,
    height: 0,
    visible: false,
  });
  const navRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navigationLinks.map((link) => link.href.substring(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeSection && itemRefs.current.length > 0) {
      const activeIndex = navigationLinks.findIndex(
        (link) => link.href.substring(1) === activeSection
      );
      if (activeIndex >= 0 && itemRefs.current[activeIndex]) {
        const itemRect = itemRefs.current[activeIndex].getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();

        setTabStyle({
          left: itemRect.left - navRect.left,
          width: itemRect.width,
          height: itemRect.height,
          visible: true,
        });
      }
    } else {
      setTabStyle((prev) => ({ ...prev, visible: false }));
    }
  }, [activeSection, scrolled]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-12 sm:top-5 z-50 transition-all duration-300 px-4"
    >
      <nav
        ref={navRef}
        className="flex justify-center items-center relative max-w-[1200px] mx-auto"
      >
        <NavList
          activeSection={activeSection}
          itemRefs={itemRefs}
          scrolled={scrolled}
          pathname={pathname}
        />
      </nav>
    </motion.header>
  );
}

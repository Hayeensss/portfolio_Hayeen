"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { navigationLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef(null);

  useEffect(() => {
    const update = () => {
      if (
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2
      ) {
        setActive("#contact");
        return;
      }
      const passed = navigationLinks.filter(({ href }) => {
        const section = document.getElementById(href.slice(1));
        return section && section.getBoundingClientRect().top <= 150;
      });
      setActive(passed.at(-1)?.href || "");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", onEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav className="site-shell nav-bar" aria-label="Main navigation">
        <Link href="/#hero" className="wordmark" onClick={() => setOpen(false)}>
          Hayeen<span>.</span>
        </Link>
        <div className="nav-desktop">
          {navigationLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              aria-current={active === href ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a
            className="nav-cv"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <ThemeToggle />
          <button
            ref={menuButton}
            className="icon-button menu-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation site-shell"
          aria-label="Mobile navigation"
        >
          {navigationLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              aria-current={active === href ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

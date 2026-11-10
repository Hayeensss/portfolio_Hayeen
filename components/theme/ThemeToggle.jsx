"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = resolvedTheme === "dark";
  return (
    <button
      className="icon-button"
      type="button"
      disabled={!mounted}
      aria-label={
        mounted
          ? `Switch to ${dark ? "light" : "dark"} theme`
          : "Change color theme"
      }
      onClick={toggleTheme}
    >
      {mounted &&
        (dark ? (
          <Sun size={18} aria-hidden="true" />
        ) : (
          <Moon size={18} aria-hidden="true" />
        ))}
    </button>
  );
}

"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle({ iconClassName = "" }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions to avoid layout shift
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full w-10 h-10 bg-transparent hover:bg-gray-200/10 dark:hover:bg-gray-800/20 flex items-center justify-center opacity-0"
        aria-label="Loading theme toggle"
      >
        <div className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-10 h-10 bg-[#e3f6f5]/10 hover:bg-[#e3f6f5]/30 dark:bg-[#38BDF8]/20 dark:hover:bg-[#38BDF8]/40 flex items-center justify-center transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className={`h-5 w-5 ${iconClassName}`} />
      ) : (
        <Sun className={`h-5 w-5 ${iconClassName}`} />
      )}
    </Button>
  );
}

"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TOTAL_HOURS = 24;
const DAY_START_HOUR = 6;
const DAY_END_HOUR = 18;

const CircadianClock = () => {
  const { theme, setTheme } = useTheme();
  const [activeHour, setActiveHour] = useState(12);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const clockContainerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleHourSelect = (hourIndex, isHourFilled) => {
    setActiveHour(hourIndex);
    const intendedTheme = isHourFilled ? "light" : "dark";
    if (mounted) {
      setTheme(intendedTheme);
    }
  };

  const handleContainerClick = (event) => {
    if (!clockContainerRef.current) return;

    const rect = clockContainerRef.current.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const containerWidth = rect.width;
    const hourWidth = containerWidth / TOTAL_HOURS;
    const calculatedIndex = Math.max(
      0,
      Math.min(TOTAL_HOURS - 1, Math.floor(relativeX / hourWidth))
    );

    const isClickedHourFill =
      calculatedIndex >= DAY_START_HOUR && calculatedIndex < DAY_END_HOUR;

    handleHourSelect(calculatedIndex, isClickedHourFill);
  };

  const handleMouseMove = (event) => {
    if (!clockContainerRef.current) return;

    const rect = clockContainerRef.current.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const containerWidth = rect.width;
    const hourWidth = containerWidth / TOTAL_HOURS;
    const calculatedIndex = Math.floor(relativeX / hourWidth);

    const newHoveredIndex = Math.max(
      0,
      Math.min(TOTAL_HOURS - 1, calculatedIndex)
    );

    if (newHoveredIndex !== hoveredIndex) {
      setHoveredIndex(newHoveredIndex);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const hourElements = Array.from({ length: TOTAL_HOURS }, (_, i) => {
    const isActive = i === activeHour;
    const isFill = i >= DAY_START_HOUR && i < DAY_END_HOUR;
    const isHoverAffected =
      hoveredIndex !== null && Math.abs(i - hoveredIndex) <= 1;

    const lineBaseClasses = "h-[42px] w-[2px] rounded-full origin-bottom";

    let lineDynamicClasses = "";

    if (isActive) {
      lineDynamicClasses =
        "bg-primary bg-[#b08047] dark:bg-[#38BDF8] scale-y-100 translate-y-[28px]";
    } else if (isHoverAffected) {
      if (isFill) {
        lineDynamicClasses =
          "bg-secondary bg-[#b08047] dark:bg-[#38BDF8] translate-y-[26px] opacity-100";
      } else {
        lineDynamicClasses =
          "bg-blue-400 dark:bg-dark-line-night scale-y-[0.6] translate-y-[18px] opacity-40";
      }
    } else {
      if (isFill) {
        lineDynamicClasses =
          "bg-secondary bg-[#b08047] dark:bg-[#38BDF8] scale-y-[0.7] translate-y-[28px]";
      } else {
        lineDynamicClasses =
          "bg-blue-400 dark:bg-dark-line-night scale-y-[0.4] opacity-20 translate-y-[21px]";
      }
    }

    return (
      <div
        key={i}
        className="relative flex flex-col items-center h-full px-1 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-light-primary-accent focus-visible:dark:outline-dark-primary-accent focus-visible:outline-offset-2 focus-visible:rounded-md cursor-pointer"
        aria-label={`Set time to ${i}:00`}
        aria-pressed={isActive}
      >
        {isActive && (
          <div
            className="absolute top-[27px] left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-full items-center justify-center rounded-full bg-primary dark:bg-[#38BDF8]"
            aria-hidden="true"
          >
            {theme === "light" ? (
              <Sun className="h-6 w-6 text-primary-foreground transition-colors duration-500 ease-in-out" />
            ) : (
              <Moon className="h-6 w-6 text-primary-foreground transition-colors duration-500 ease-in-out" />
            )}
          </div>
        )}
        <div className={cn(lineBaseClasses, lineDynamicClasses)}></div>
      </div>
    );
  });

  return (
    <div className="bg-white dark:bg-gradient-to-r dark:from-[#0F172A] dark:to-[#1E293B]">
      <div className="container mx-auto px-4 w-1/2 rounded-lg p-5 transition-colors duration-500 ease-in-out text-foreground">
        <div
          ref={clockContainerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleContainerClick}
          className="relative flex h-[60px] items-end justify-between mx-auto cursor-pointer"
        >
          {hourElements}
        </div>
      </div>
    </div>
  );
};

export default CircadianClock;

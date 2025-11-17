"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-0.5 my-auto rounded-lg bg-solarized-base0 flex items-center justify-center">
        <div className="w-5 h-5" />
      </div>
    );
  }

  return <ThemeToggleInner />;
}

function ThemeToggleInner() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-0.5 my-auto rounded-lg transition-all duration-300 focus:outline-none cursor-pointer select-none text-foreground border-none ${
        resolvedTheme === "light"
          ? "bg-solarized-violet"
          : resolvedTheme === "dark"
          ? "bg-solarized-yellow"
          : "hover:bg-muted"
      }`}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
      aria-label={`Switch to ${
        resolvedTheme === "light" ? "dark" : "light"
      } mode`}
    >
      <div className="relative w-5 h-5">
        {/* Moon icon */}
        <span
          className={`absolute inset-0 w-5 h-5 flex items-center justify-center transition-all ${
            resolvedTheme === "light"
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 rotate-90 opacity-0"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="white"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </span>

        {/* Sun icon */}
        <span
          className={`absolute inset-0 w-5 h-5 flex items-center justify-center transition-all ${
            resolvedTheme === "dark"
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 -rotate-90 opacity-0"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="white"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </span>
      </div>
    </button>
  );
}

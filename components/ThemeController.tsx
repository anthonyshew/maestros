"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Laptop } from "lucide-react";

export const ThemeController = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const switcher = () => {
    if (theme === "system") {
      setTheme("light");
    }

    if (theme === "light") {
      setTheme("dark");
    }

    if (theme === "dark") {
      setTheme("system");
    }
  };

  if (mounted) {
    return (
      <>
        <button onClick={() => switcher()} className="absolute top-2 right-2">
          {theme === "dark" ? (
            <Moon />
          ) : theme === "light" ? (
            <Sun />
          ) : (
            <Laptop />
          )}
        </button>
      </>
    );
  }

  return null;
};

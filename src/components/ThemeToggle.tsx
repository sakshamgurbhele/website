import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return true;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative p-2 rounded-lg border border-border bg-card hover:border-primary/40 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <Sun className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors rotate-0 scale-100 dark:-rotate-90 dark:scale-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Moon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </button>
  );
};

export default ThemeToggle;

"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="btn btn-ghost btn-square" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="secondary"
      isIconOnly
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
      onPress={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}

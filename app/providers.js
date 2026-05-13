"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute={["class", "data-theme"]}
      defaultTheme="system"
      enableSystem
      storageKey="portfolio-theme"
      themes={["light", "dark"]}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

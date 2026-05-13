"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Menu } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { scrollToId, cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar({ drawerId }) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeDrawer = () => {
    const input = document.getElementById(drawerId);
    if (input) input.checked = false;
  };

  const go = (id) => (e) => {
    e.preventDefault();
    closeDrawer();
    scrollToId(id);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border/60 transition-colors",
        scrolled ? "bg-background/75 backdrop-blur-md" : "bg-background/40",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/#home"
          onClick={go("home")}
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={go(link.id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm transition-colors",
                active === link.id
                  ? "bg-foreground/10 text-foreground"
                  : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground",
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <label
            htmlFor={drawerId}
            className="btn btn-ghost btn-square lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </label>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { Github, Linkedin, Facebook, X } from "lucide-react";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-sm font-semibold tracking-tight text-foreground">{site.name}</div>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground/60">
            Full Stack Developer focused on building clean, user-centric web applications with modern technologies.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-foreground/65" aria-label="Footer">
            {navLinks.map((l) => (
              <Link
                key={l.id}
                className="link link-hover text-foreground/65 hover:text-foreground"
                href={`/#${l.id}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-square btn-sm"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-square btn-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href={site.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-square btn-sm"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="sm:text-right">{site.location}</p>
        </div>
      </div>
    </footer>
  );
}

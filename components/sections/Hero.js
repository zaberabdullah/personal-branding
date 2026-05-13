"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { ArrowUpRight, Facebook, Github, Linkedin, Mail, X } from "lucide-react";
import { site } from "@/data/site";
import { scrollToId } from "@/lib/utils";

const socials = [
  { href: site.socials.github, label: "GitHub", Icon: Github },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: site.socials.facebook, label: "Facebook", Icon: Facebook },
  { href: site.socials.mail, label: "Email", Icon: Mail },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/60 scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-12 lg:py-24">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
        
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-3 text-lg text-foreground/70 sm:text-xl">{site.title}</p>
          <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-foreground/65 sm:text-base">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              variant="primary"
              onPress={() => window.open(site.resumeUrl, "_blank", "noopener,noreferrer")}
            >
              View resume
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" onPress={() => scrollToId("contact")}>
              Contact
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            {socials.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="btn btn-ghost btn-sm gap-2 rounded-full border border-border/60 bg-background/40 text-foreground/80 hover:border-border"
              >
                <Icon className="h-4 w-4" aria-hidden />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border/60 bg-surface shadow-sm">
            <Image
              src={site.profileImage.src}
              alt={site.profileImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 60vw, 92vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

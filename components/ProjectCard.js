"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { ArrowUpRight, Github } from "lucide-react";

export function ProjectCard({ project }) {
  const router = useRouter();

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="card card-border h-full overflow-hidden bg-base-100/40 shadow-sm"
    >
      <figure className="relative aspect-[16/10] w-full border-b border-border/60">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 92vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
      </figure>

      <div className="card-body gap-4 p-6">
        <div>
          <h3 className="card-title text-base font-semibold tracking-tight text-foreground">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/65">{project.shortDescription}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="badge badge-ghost badge-sm">
              {t}
            </span>
          ))}
          {project.tech.length > 4 ? (
            <span className="badge badge-ghost badge-sm">+{project.tech.length - 4}</span>
          ) : null}
        </div>

        <div className="card-actions mt-auto grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Button
            variant="secondary"
            size="sm"
            className="w-full"
            onPress={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
          >
            Live
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="w-full"
            onPress={() => window.open(project.repoUrl, "_blank", "noopener,noreferrer")}
          >
            <Github className="h-4 w-4" />
            GitHub
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="w-full"
            onPress={() => router.push(`/projects/${project.slug}`)}
          >
            View details
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

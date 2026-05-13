"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/site";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work with clear outcomes."
      description="Each project is distilled to the essentials: problem, stack, and what I would improve next."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/site";
import { Section } from "@/components/Section";
import { TechIcon } from "@/components/TechIcon";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I reach for often."
      description="Grouped by discipline. Percentages communicate relative comfort—not a contest."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {skills.categories.map((category, cIdx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: cIdx * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-border/60 bg-surface/40 p-6 shadow-sm"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-sm font-semibold tracking-tight text-foreground">{category.name}</h3>
              <span className="badge badge-ghost badge-sm">{category.items.length} items</span>
            </div>

            <ul className="mt-6 space-y-4">
              {category.items.map((skill) => (
                <li key={skill.name}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <TechIcon path={skill.icon} name={skill.name} />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-xs tabular-nums text-foreground/55">{skill.level}%</span>
                  </div>
                  <progress
                    className="progress progress-primary mt-2 w-full"
                    value={skill.level}
                    max="100"
                    aria-label={`${skill.name} proficiency`}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

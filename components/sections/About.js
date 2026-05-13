"use client";

import { motion } from "framer-motion";
import { about } from "@/data/site";
import { Section } from "@/components/Section";

const items = [
  { title: "Introduction", body: about.intro },
  { title: "My journey", body: about.journey },
  { title: "What drives me", body: about.passion },
  { title: "Preferred work", body: about.preferredWork },
  { title: "Career goals", body: about.goals },
  { title: "Beyond the keyboard", body: about.hobbies },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Thoughtful engineering, calm delivery."
      description="A concise snapshot of how I work, what I optimize for, and the environments where I do my best work."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-border/60 bg-surface/40 p-6 shadow-sm"
          >
            <h3 className="text-sm font-semibold tracking-tight text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/65">{item.body}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/site";
import { Section } from "@/components/Section";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I have contributed."
    >                    
      {!experience.hasExperience ? (
        <div className="rounded-3xl border border-dashed border-border/70 bg-surface/30 p-10 text-center">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">Open to opportunities</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-foreground/65">
            I am actively looking for internships or junior roles where I can learn from strong engineers while
            shipping meaningful product work.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {experience.roles.map((role, index) => (
            <motion.article
              key={`${role.company}-${role.role}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-border/60 bg-surface/40 p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-border/60 bg-background">
                    <Briefcase className="h-5 w-5 text-foreground/70" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{role.role}</h3>
                    <p className="mt-1 text-sm text-foreground/65">{role.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/65">{role.summary}</p>
                  </div>
                </div>
                <span className="badge badge-ghost w-fit whitespace-nowrap">{role.duration}</span>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/55">
                    Responsibilities
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/65">
                    {role.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/35" aria-hidden />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/55">
                    Technologies
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {role.technologies.map((t) => (
                      <span key={t} className="badge badge-outline">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </Section>
  );
}

"use client";

import { motion } from "framer-motion";
import { education } from "@/data/site";
import { Section } from "@/components/Section";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic Background"
      description="Combining my academic foundation with a strong passion for technology and continuous learning."
    >
      <ol className="relative space-y-6">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border/70 sm:left-[17px]" aria-hidden />
        {education.map((item, index) => (
          <motion.li
            key={item.degree}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid gap-4 rounded-3xl border border-border/60 bg-surface/40 p-6 pl-12 shadow-sm sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8 sm:pl-14"
          >
            <span className="absolute left-2 top-6 flex h-8 w-8 items-center justify-center rounded-2xl border border-border/60 bg-background text-foreground sm:left-3">
              <GraduationCap className="h-4 w-4" aria-hidden />
            </span>

            <div>
              <h3 className="text-base font-semibold tracking-tight text-foreground">{item.degree}</h3>
              <p className="mt-1 text-sm text-foreground/65">{item.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65">{item.result}</p>
              {item.highlights?.length ? (
                <ul className="mt-4 space-y-2 text-sm text-foreground/65">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/35" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="sm:text-right">
              <span className="badge badge-ghost whitespace-nowrap">{item.session}</span>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

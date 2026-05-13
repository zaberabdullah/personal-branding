"use client";

import { motion } from "framer-motion";
import { Facebook, Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/Section";
import { site } from "@/data/site";

export function Contact() {
  const waDigits = site.whatsapp.replace(/\D/g, "");
  const cleanPhone = site.phone.replace(/\D/g, "");

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something great together."
      description="I'm always open to discussing new projects, opportunities, or just having a coffee chat about tech."
    >
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Email Card */}
          <div className="rounded-3xl border border-border/60 bg-surface/40 p-6 shadow-sm hover:border-primary/50 transition-colors">
            <Mail className="h-6 w-6 text-primary mb-4" />
            <div className="text-xs font-semibold uppercase tracking-wide text-foreground/55">Email</div>
            <a className="text-sm font-medium link link-hover break-all" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="rounded-3xl border border-border/60 bg-surface/40 p-6 shadow-sm hover:border-success/50 transition-colors">
            <MessageCircle className="h-6 w-6 text-success mb-4" />
            <div className="text-xs font-semibold uppercase tracking-wide text-foreground/55">WhatsApp</div>
            <a className="text-sm font-medium link link-hover" href={`https://wa.me/${waDigits}`} target="_blank" rel="noreferrer">
              {site.whatsapp}
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="rounded-3xl border border-border/60 bg-surface/40 p-6 shadow-sm hover:border-info/50 transition-colors">
            <Linkedin className="h-6 w-6 text-info mb-4" />
            <div className="text-xs font-semibold uppercase tracking-wide text-foreground/55">LinkedIn</div>
            <Link className="text-sm font-medium link link-hover" href={site.socials.linkedin} target="_blank">
              Zaber Abdullah
            </Link>
          </div>
        </motion.div>

        {/* Other Socials */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 flex items-center gap-4 border-t border-border/60 pt-8"
        >
          <span className="text-sm font-medium text-foreground/70">Also find me on:</span>
          <div className="flex gap-3">
            <Link href={site.socials.github} target="_blank" className="p-2 rounded-full bg-surface hover:bg-primary/10 transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href={site.socials.facebook} target="_blank" className="p-2 rounded-full bg-surface hover:bg-primary/10 transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
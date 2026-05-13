"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button, FieldError, Input, Label, TextArea, TextField } from "@heroui/react";
import { Facebook, Github, Linkedin, Mail, MessageCircle, Phone, X } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/Section";
import { site } from "@/data/site";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const next = {};
    if (touched.name && !name.trim()) next.name = "Please enter your name.";
    if (touched.email) {
      if (!email.trim()) next.email = "Please enter your email.";
      else if (!isValidEmail(email)) next.email = "Please enter a valid email address.";
    }
    if (touched.message && message.trim().length < 12) {
      next.message = "Please write at least 12 characters.";
    }
    return next;
  }, [name, email, message, touched]);

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!name.trim() || !isValidEmail(email) || message.trim().length < 12) return;
    setSubmitted(true);
  };

  const waDigits = site.whatsapp.replace(/\D/g, "");

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Tell me about the problem you are solving."
      description="This form is front-end validated for UX. Wire it to your provider of choice when you are ready to go live."
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="rounded-3xl border border-border/60 bg-surface/40 p-6 shadow-sm sm:p-8">
            <div className="grid gap-5">
              <TextField name="name" isRequired isInvalid={Boolean(errors.name)}>
                <Label>Name</Label>
                <Input
                  placeholder="Ada Lovelace"
                  variant="secondary"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                />
                <FieldError>{errors.name}</FieldError>
              </TextField>

              <TextField name="email" isRequired isInvalid={Boolean(errors.email)}>
                <Label>Email</Label>
                <Input
                  placeholder="you@domain.com"
                  type="email"
                  variant="secondary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                />
                <FieldError>{errors.email}</FieldError>
              </TextField>

              <TextField name="message" isRequired isInvalid={Boolean(errors.message)}>
                <Label>Message</Label>
                <TextArea
                  placeholder="What are you building, and how can I help?"
                  rows={5}
                  variant="secondary"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                />
                <FieldError>{errors.message}</FieldError>
              </TextField>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" variant="primary" isDisabled={submitted}>
                {submitted ? "Message captured (demo)" : "Send message"}
              </Button>
              <p className="text-xs text-foreground/55">
                Prefer email?{" "}
                <a className="link link-hover" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="rounded-3xl border border-border/60 bg-base-100/40 p-6 shadow-sm sm:p-8">
            <h3 className="text-sm font-semibold tracking-tight text-base-content">Direct channels</h3>
            <ul className="mt-5 space-y-4 text-sm text-base-content/70">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-base-content/55">Email</div>
                  <a className="link link-hover" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-base-content/55">Phone</div>
                  <a className="link link-hover" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-base-content/55">WhatsApp</div>
                  <a className="link link-hover" href={`https://wa.me/${waDigits}`} target="_blank" rel="noreferrer">
                    {site.whatsapp}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 border-t border-border/60 pt-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-base-content/55">Social</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm rounded-full border border-border/60"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm rounded-full border border-border/60"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
                <Link
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm rounded-full border border-border/60"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </Section>
  );
}

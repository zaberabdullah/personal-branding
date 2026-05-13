import { cn } from "@/lib/utils";

export function Section({ id, eyebrow, title, description, children, className }) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 border-t border-border/50 py-16 sm:py-20", className)}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(eyebrow || title || description) && (
          <header className="mb-10 max-w-2xl">
            {eyebrow ? (
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/55">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-3 text-pretty text-sm leading-relaxed text-foreground/65 sm:text-base">
                {description}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/site";
import { ProjectActions } from "@/components/ProjectActions";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/#projects"
          className="btn btn-ghost border border-border/60 text-foreground/80 hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Case study</p>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/65">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="badge badge-ghost">
                  {t}
                </span>
              ))}
            </div>

            <ProjectActions liveUrl={project.liveUrl} repoUrl={project.repoUrl} />

            <div className="mt-12 space-y-10">
              <section>
                <h2 className="text-sm font-semibold tracking-tight text-foreground">Features</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/65">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/35" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-sm font-semibold tracking-tight text-foreground">Challenges</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/65">
                  {project.challenges.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/35" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-sm font-semibold tracking-tight text-foreground">Future improvements</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/65">
                  {project.future.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/35" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-24 overflow-hidden rounded-3xl border border-border/60 bg-surface/40 shadow-sm">
              <div className="relative aspect-[16/11] w-full border-b border-border/60">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 92vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

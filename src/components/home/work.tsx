import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { primaryCta, projects, type Project } from "@/content/site";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="section-y">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="work-title"
            title="Selected work"
            lead="Extensions, platforms and apps we have designed, built and still help run."
          />
          <ButtonLink href={primaryCta.href} variant="secondary" size="md">
            Start yours
          </ButtonLink>
        </div>

        <ul className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:mt-16">
          {projects.map((project) => (
            <li key={project.client}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const host = project.url ? new URL(project.url).hostname.replace(/^www\./, "") : null;

  const body = (
    <>
      <div className="relative aspect-16/10 overflow-hidden rounded-card border border-line transition-colors group-hover:border-line-strong">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.client}: ${project.title}`}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="size-full object-cover"
          />
        ) : (
          <GeneratedCover project={project} />
        )}
        <span className="absolute top-4 left-4 rounded-full border border-line bg-bg px-2.5 py-0.5 text-xs font-bold">
          {project.category}
        </span>
      </div>
      <div className="mt-5">
        <p className="text-sm font-medium text-muted">{project.client}</p>
        <h3 className="mt-1 flex items-center gap-2 font-display text-2xl font-semibold">
          <span className="group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
            {project.title}
          </span>
          {project.url ? <ArrowUpRight size={20} weight="bold" aria-hidden className="shrink-0 text-muted" /> : null}
        </h3>
        <p className="mt-2 text-fg-2">{project.summary}</p>
        <p className="mt-3 text-sm text-muted">
          <span className="sr-only">Built with: </span>
          {project.tags.join(" · ")}
          {host ? <span className="text-fg-2"> · {host}</span> : null}
        </p>
      </div>
    </>
  );

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block rounded-card">
        {body}
        <span className="sr-only"> (visit {project.client}, opens in a new tab)</span>
      </a>
    );
  }
  return <article>{body}</article>;
}

/** Flat, client-tinted cover used until a real screenshot is added to the project. */
function GeneratedCover({ project }: { project: Project }) {
  return (
    <div
      className="relative size-full"
      style={{ backgroundColor: `color-mix(in srgb, ${project.accent} 14%, white)` }}
    >
      {/* Abstract app window */}
      <div className="absolute inset-x-[12%] top-[24%] bottom-[-10%] rounded-t-card border border-black/8 bg-white p-4 shadow-sm">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-surface-3" />
          <span className="size-2 rounded-full bg-surface-3" />
          <span className="size-2 rounded-full bg-surface-3" />
        </div>
        <div className="mt-6 grid place-items-center">
          <Image src={project.logo} alt="" sizes="240px" className="h-9 w-auto max-w-[65%] object-contain sm:h-11" />
        </div>
        <div className="mx-auto mt-6 grid max-w-[80%] grid-cols-3 gap-2">
          <span className="h-10 rounded-md bg-surface-2" />
          <span className="h-10 rounded-md bg-surface-2" />
          <span className="h-10 rounded-md" style={{ backgroundColor: `color-mix(in srgb, ${project.accent} 30%, white)` }} />
        </div>
      </div>
    </div>
  );
}

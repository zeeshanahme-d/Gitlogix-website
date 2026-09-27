import { MapPin, User } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";

import officeMap from "@/assets/office-map.png";
import { CtaBand } from "@/components/cta-band";
import { FactsGrid } from "@/components/facts-grid";
import { PageHeader } from "@/components/page-header";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { about, company, team } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: about.lead,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title={about.title} lead={about.lead} />

      <section aria-label="Our story" className="section-y">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="space-y-6 lg:col-span-6">
            {about.story.map((paragraph) => (
              <p key={paragraph} className="type-lead text-fg-2">
                {paragraph}
              </p>
            ))}
          </div>
          <FactsGrid className="lg:col-span-6" />
        </Container>
      </section>

      <section aria-labelledby="principles-title" className="section-y border-y border-line bg-surface">
        <Container>
          <SectionHeading id="principles-title" title="How we work" />
          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {about.principles.map((principle) => (
              <li key={principle.name} className="border-t-2 border-fg pt-6">
                <h3 className="type-h3">{principle.name}</h3>
                <p className="mt-3 text-fg-2">{principle.summary}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="team-title" className="section-y">
        <Container>
          <SectionHeading
            id="team-title"
            title="The people behind the work"
            lead="A small, senior team. The people who scope your project are the people who design, build and support it."
          />
          <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:mt-16 lg:grid-cols-4">
            {team.map((member) => (
              <li key={member.role}>
                <div className="relative aspect-4/5 overflow-hidden rounded-card border border-line bg-surface-2">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt=""
                      sizes="(min-width: 1024px) 300px, (min-width: 640px) 33vw, 50vw"
                      className="size-full object-cover"
                    />
                  ) : (
                    <User size={48} aria-hidden className="absolute top-1/2 left-1/2 -translate-1/2 text-line-strong" />
                  )}
                </div>
                <p className="mt-4 font-bold">{member.name}</p>
                <p className="text-sm text-fg-2">{member.role}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="office-title" className="section-y border-y border-line bg-surface">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-4">
            <h2 id="office-title" className="type-h2">
              Visit the studio
            </h2>
            <address className="mt-6 text-lg text-fg-2 not-italic">
              {company.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={company.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles({ variant: "secondary", className: "mt-8" })}
            >
              <MapPin size={18} weight="bold" aria-hidden />
              Open in Google Maps
            </a>
          </div>

          {/* Static map (OpenStreetMap tiles, see docs/design-system.md) centred on Al Anayat Mall. */}
          <figure className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-card border border-line bg-bg">
              <Image
                src={officeMap}
                alt="Street map of G-11 Markaz, Islamabad, with the Gitlogix office at Al-Anayat Mall marked in the centre"
                sizes="(min-width: 1280px) 800px, (min-width: 1024px) 66vw, 100vw"
                className="aspect-4/3 w-full object-cover grayscale sm:aspect-video"
              />
              <span aria-hidden className="absolute top-1/2 left-1/2 grid -translate-1/2 place-items-center">
                <span className="absolute size-10 rounded-full bg-brand/20" />
                <span className="relative size-4 rounded-full border-2 border-bg bg-brand shadow-sm" />
              </span>
              <span className="absolute bottom-4 left-4 rounded-control border border-line bg-bg px-3 py-1.5 text-sm font-bold shadow-sm">
                Gitlogix studio, G-11 Markaz
              </span>
            </div>
            <figcaption className="mt-3 text-sm text-muted">
              Map data ©{" "}
              <a
                href="https://www.openstreetmap.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-fg"
              >
                OpenStreetMap contributors
              </a>
            </figcaption>
          </figure>
        </Container>
      </section>

      <section aria-labelledby="careers-title" className="section-y">
        <Container>
          <div className="flex flex-col gap-8 rounded-card border border-line p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 id="careers-title" className="type-h2">
                {about.careers.title}
              </h2>
              <p className="measure mt-4 text-lg text-fg-2">{about.careers.summary}</p>
            </div>
            <a href={about.careers.href} className={buttonStyles({ variant: "secondary" })}>
              {about.careers.label}
            </a>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

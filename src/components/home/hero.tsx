import Link from "next/link";
import type { CSSProperties } from "react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BrandIcon } from "@/components/ui/platform-icon";
import { hero, heroPlatforms, primaryCta } from "@/content/site";

const delay = (ms: number) => ({ "--delay": ms }) as CSSProperties;

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <Container className="grid items-center gap-12 pt-16 pb-16 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-24">
        <div className="lg:col-span-7">
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm font-medium text-fg-2">
            <span className="size-1.5 rounded-full bg-success" aria-hidden />
            {hero.status}
          </p>

          <h1 id="hero-title" className="type-hero animate-rise mt-6 max-w-[14ch]" style={delay(60)}>
            {hero.title}
          </h1>

          <p className="type-lead animate-rise mt-6 max-w-136 text-fg-2" style={delay(120)}>
            {hero.lead}
          </p>

          <div className="animate-rise mt-9 flex flex-wrap gap-3" style={delay(180)}>
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            <ButtonLink href="/#work" variant="secondary">
              View our work
            </ButtonLink>
          </div>

          <dl className="animate-rise mt-12 flex divide-x divide-line" style={delay(240)}>
            {hero.proof.map((item) => (
              <div key={item.label} className="flex flex-col-reverse pr-5 not-first:pl-5 sm:pr-10 sm:not-first:pl-10">
                <dt className="text-sm text-muted">{item.label}</dt>
                <dd className="font-display text-3xl font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* A quick index of what the studio ships, with the platforms each covers. */}
        <div className="animate-rise lg:col-span-5" style={delay(200)}>
          <div className="rounded-card border border-line bg-bg">
            <p className="border-b border-line px-5 py-3 text-sm font-medium text-muted sm:px-6">What we build</p>
            <ul className="divide-y divide-line">
              {heroPlatforms.map((platform) => (
                <li key={platform.name} className="group/platform flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
                  <div className="min-w-0">
                    <p className="font-bold">{platform.name}</p>
                    <p className="text-sm text-fg-2">{platform.detail}</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-2.5 text-fg-2">
                    {platform.icons.map((icon) => (
                      <BrandIcon
                        key={icon}
                        id={icon}
                        className="size-5 transition-colors duration-150 group-hover/platform:text-(--brand)"
                      />
                    ))}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/#services"
              className="flex items-center justify-between rounded-b-card border-t border-line bg-surface px-5 py-3 text-sm font-bold transition-colors hover:bg-surface-2 sm:px-6"
            >
              Explore services
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

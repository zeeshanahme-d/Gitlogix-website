import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { Container } from "@/components/ui/container";
import { clients, primaryCta } from "@/content/site";

/*
 * Logo wall. With 13 clients plus the closing cell, every row is full at
 * each breakpoint: 2 columns (the cell spans 1), 3 and 5 columns (it spans 2).
 */
export function Clients() {
  return (
    <section aria-labelledby="clients-title" className="pb-16 lg:pb-24">
      <Container>
        <h2 id="clients-title" className="text-sm font-medium text-muted">
          Trusted by product teams in education, healthcare, retail and SaaS
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
            <li key={client.name} className="group/logo grid h-24 place-items-center bg-bg px-6 sm:h-28">
              <span className="relative flex max-w-full" style={{ "--s": client.scale ?? 1 } as CSSProperties}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  sizes="200px"
                  // The single-colour logos are white; brightness(0) turns them black, opacity softens to grey.
                  className="h-[calc(1.5rem*var(--s))] w-auto max-w-full object-contain opacity-55 brightness-0 transition-opacity duration-200 group-hover/logo:opacity-0"
                />
                {/* The original, same dimensions, fades in over the grey version on hover. */}
                <Image
                  src={client.logoColor}
                  alt=""
                  sizes="200px"
                  className="absolute inset-0 size-full object-contain opacity-0 transition-opacity duration-200 group-hover/logo:opacity-100"
                />
              </span>
            </li>
          ))}
          <li className="bg-surface sm:col-span-2">
            <Link
              href={primaryCta.href}
              className="flex h-full min-h-24 flex-col justify-center px-6 transition-colors hover:bg-surface-2 sm:min-h-28"
            >
              <span className="font-bold">Your product next?</span>
              <span className="text-sm text-fg-2">{primaryCta.label} →</span>
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}

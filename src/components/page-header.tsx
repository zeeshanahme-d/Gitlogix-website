import type { CSSProperties } from "react";

import { Container } from "@/components/ui/container";

/** Title block for inner pages. */
export function PageHeader({ title, lead }: { title: string; lead: string }) {
  return (
    <section aria-labelledby="page-title" className="border-b border-line">
      <Container className="pt-16 pb-14 sm:pt-20 lg:pt-24 lg:pb-20">
        <h1 id="page-title" className="type-h1 animate-rise max-w-[18ch]">
          {title}
        </h1>
        <p className="type-lead measure animate-rise mt-6 text-fg-2" style={{ "--delay": 80 } as CSSProperties}>
          {lead}
        </p>
      </Container>
    </section>
  );
}

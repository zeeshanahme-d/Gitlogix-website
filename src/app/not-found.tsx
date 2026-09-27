import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { primaryCta } from "@/content/site";

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title">
      <Container className="pt-24 pb-28 sm:pt-32 sm:pb-36">
        <p aria-hidden className="font-display text-7xl font-semibold text-line-strong sm:text-8xl">
          404
        </p>
        <h1 id="not-found-title" className="type-h2 mt-6 max-w-[18ch]">
          This page does not exist
        </h1>
        <p className="type-lead mt-4 max-w-lg text-fg-2">
          The link may be old or mistyped. Head back home, or tell us what you were looking for.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/">Go to the home page</ButtonLink>
          <ButtonLink href={primaryCta.href} variant="secondary">
            {primaryCta.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

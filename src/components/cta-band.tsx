import { ButtonLink, buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { company, primaryCta } from "@/content/site";

export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="border-t border-line bg-surface py-16 lg:py-24">
      <Container className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-8">
          <h2 id="cta-title" className="type-h1 max-w-[16ch]">
            Have a product in mind? Let&apos;s build it.
          </h2>
          <p className="type-lead measure mt-5 text-fg-2">
            Tell us what you want to build. You will get a reply by email, a short call and an honest estimate.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
          <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
          <a href={`mailto:${company.email}`} className={buttonStyles({ variant: "secondary" })}>
            Email us
          </a>
        </div>
      </Container>
    </section>
  );
}

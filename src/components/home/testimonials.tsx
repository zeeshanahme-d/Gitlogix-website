import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/content/site";

type Testimonial = (typeof testimonials)[number];

// PLACEHOLDER content lives in site.ts; the first quote is shown large.
export function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section aria-labelledby="testimonials-title" className="section-y border-y border-line bg-surface">
      <Container>
        <SectionHeading
          id="testimonials-title"
          title="What our clients say"
          lead="Most of our clients have worked with us for years. Here is how some of them describe it."
        />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <figure className="rounded-card border border-line bg-bg p-6 sm:p-10 lg:col-span-7">
            <blockquote className="font-display text-2xl leading-snug font-medium text-balance sm:text-3xl">
              <p>&ldquo;{featured.quote}&rdquo;</p>
            </blockquote>
            <Attribution item={featured} className="mt-8 sm:mt-10" />
          </figure>

          <div className="divide-y divide-line lg:col-span-5">
            {rest.map((item) => (
              <figure key={item.role} className="py-8 first:pt-0 last:pb-0 lg:first:pt-2">
                <blockquote className="text-lg leading-relaxed">
                  <p>&ldquo;{item.quote}&rdquo;</p>
                </blockquote>
                <Attribution item={item} className="mt-5" />
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Attribution({ item, className = "" }: { item: Testimonial; className?: string }) {
  return (
    <figcaption className={`flex items-center gap-3 ${className}`}>
      <span aria-hidden className="h-px w-6 bg-fg-2" />
      <span>
        <span className="font-bold">{item.name}</span>
        <span className="text-fg-2">, {item.role}</span>
      </span>
    </figcaption>
  );
}

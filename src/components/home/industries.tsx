import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { industries } from "@/content/site";

export function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-title" className="section-y">
      <Container>
        <SectionHeading
          id="industries-title"
          title="Industries we know well"
          lead="Most of our clients come back with their next product. Over the years that has given us depth in a few areas."
        />

        <ul className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {industries.map((industry) => (
            <li key={industry.id} className="flex flex-col bg-bg p-6 sm:p-8">
              <h3 className="type-h3">{industry.name}</h3>
              <p className="mt-2 text-fg-2">{industry.summary}</p>
              <ul className="mt-6 space-y-2 border-t border-line pt-5 text-sm" aria-label={`${industry.name} work`}>
                {industry.examples.map((example) => (
                  <li key={example} className="flex gap-2.5">
                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-fg-2" />
                    {example}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

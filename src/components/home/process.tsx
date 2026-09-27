import { Check } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { process } from "@/content/site";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section-y border-y border-line bg-surface">
      <Container>
        <SectionHeading
          id="process-title"
          title="From idea to launch in four steps"
          lead="The same process on every project, so you always know what happens next and what you will receive."
        />

        <ol className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {process.map((step, index) => (
            <li key={step.name} className="flex flex-col border-t-2 border-fg pt-6">
              <span className="text-sm font-bold text-brand-ink">Step {index + 1}</span>
              <h3 className="type-h3 mt-2">{step.name}</h3>
              <p className="mt-3 text-fg-2">{step.summary}</p>
              <ul className="mt-auto space-y-2 pt-6" aria-label={`${step.name} deliverables`}>
                {step.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium">
                    <Check size={14} weight="bold" aria-hidden className="shrink-0 text-brand-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

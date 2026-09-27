import { Container } from "@/components/ui/container";
import { facts } from "@/content/site";

/** Track record band: four headline numbers. */
export function Stats() {
  return (
    <section aria-labelledby="stats-title" className="border-y border-line bg-surface">
      <h2 id="stats-title" className="sr-only">
        Gitlogix in numbers
      </h2>
      <Container>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              className={`flex flex-col-reverse gap-1 border-line py-10 lg:py-14 ${index % 2 === 1 ? "border-l pl-6 sm:pl-10" : ""} ${
                index > 1 ? "border-t lg:border-t-0" : ""
              } ${index === 2 ? "lg:border-l lg:pl-10" : ""} ${index === 3 ? "lg:pl-10" : ""}`}
            >
              <dt className="text-sm text-fg-2 sm:text-base">{fact.label}</dt>
              <dd className="font-display text-5xl font-semibold lg:text-6xl">
                {fact.value}
                {fact.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

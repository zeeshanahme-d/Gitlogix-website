import { Check } from "@phosphor-icons/react/dist/ssr";

import { serviceVisuals } from "@/components/home/service-visuals";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services, type Service } from "@/content/site";

// Bento layout on large screens: featured extension card, then a row of three, then a wide support band.
const layout: Record<Service["id"], string> = {
  extensions: "md:col-span-2",
  web: "",
  mobile: "",
  design: "",
  desktop: "md:col-span-2 lg:col-span-1",
  support: "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10",
};

const order: Service["id"][] = ["extensions", "web", "mobile", "design", "desktop", "support"];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-y border-y border-line bg-surface">
      <Container>
        <SectionHeading
          id="services-title"
          title="Everything you need to launch and scale"
          lead="One senior team for the whole product: the extension, the web platform, the apps and everything that keeps them running."
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {order.map((id) => {
            const service = services.find((s) => s.id === id)!;
            const Visual = serviceVisuals[id];
            const wide = id === "support";
            return (
              <li
                key={id}
                className={`flex min-w-0 flex-col gap-6 rounded-card border border-line bg-bg p-5 sm:p-6 ${layout[id]}`}
              >
                <div className={wide ? "lg:order-2" : ""}>
                  <Visual />
                </div>
                <div className={`flex flex-1 flex-col ${wide ? "lg:order-1" : ""}`}>
                  <h3 className="type-h3">{service.name}</h3>
                  <p className="mt-2 text-fg-2">{service.summary}</p>
                  <ul className="mt-5 space-y-1.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm font-medium">
                        <Check size={14} weight="bold" aria-hidden className="shrink-0 text-brand-ink" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

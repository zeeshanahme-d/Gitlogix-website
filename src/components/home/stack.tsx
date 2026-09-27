import { TechStack } from "@/components/home/tech-stack";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="section-y">
      <Container>
        <SectionHeading
          id="stack-title"
          title="A modern stack, chosen for your product"
          lead="We pick proven tools for each job, not the latest trend, so what we build stays fast and easy to maintain."
        />
        <div className="mt-10 lg:mt-12">
          <TechStack />
        </div>
      </Container>
    </section>
  );
}

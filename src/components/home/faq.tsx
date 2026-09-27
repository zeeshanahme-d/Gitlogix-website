import { EnvelopeSimple, Plus, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/ui/container";
import { company, faqs } from "@/content/site";

const contactLink =
  "flex items-center gap-3 rounded-card border border-line p-4 transition-colors hover:border-line-strong hover:bg-surface";

/** Native <details> keeps the answers accessible and in the HTML without client JS. */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <h2 id="faq-title" className="type-h2">
            Questions, answered
          </h2>
          <p className="type-lead mt-4 text-fg-2">Anything else? Talk to the team directly.</p>
          <div className="mt-8 flex flex-col gap-3">
            <a href={`mailto:${company.email}`} className={contactLink}>
              <EnvelopeSimple size={22} aria-hidden className="shrink-0 text-fg-2" />
              <span>
                <span className="block text-sm text-muted">Email us</span>
                <span className="block font-bold">{company.email}</span>
              </span>
            </a>
            <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className={contactLink}>
              <WhatsappLogo size={22} aria-hidden className="shrink-0 text-fg-2" />
              <span>
                <span className="block text-sm text-muted">WhatsApp</span>
                <span className="block font-bold">{company.phone.display}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="divide-y divide-line border-y border-line lg:col-span-7 lg:col-start-6">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-bold transition-colors hover:text-fg-2 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus
                  size={18}
                  weight="bold"
                  aria-hidden
                  className="shrink-0 text-fg-2 transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="measure pb-6 text-fg-2">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { EnvelopeSimple, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";

import { ContactForm } from "@/app/contact/contact-form";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/ui/container";
import { company, contactPage } from "@/content/site";

export const metadata: Metadata = {
  title: "Start a project",
  description: contactPage.lead,
  alternates: { canonical: "/contact" },
};

const directLinks = [
  { label: "Email", value: company.email, href: `mailto:${company.email}`, icon: EnvelopeSimple },
  { label: "Phone", value: company.phone.display, href: company.phone.href, icon: Phone },
  { label: "WhatsApp", value: "Message us", href: company.whatsapp, icon: WhatsappLogo, external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader title={contactPage.title} lead={contactPage.lead} />

      <section aria-label="Contact form and details" className="py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="relative rounded-card border border-line p-6 sm:p-10 lg:col-span-7 lg:self-start">
            <ContactForm />
          </div>

          <aside className="space-y-5 lg:col-span-4 lg:col-start-9">
            <div className="rounded-card border border-line bg-surface p-6 sm:p-7">
              <h2 className="type-h3">What happens next</h2>
              <ol className="mt-6 space-y-6">
                {contactPage.nextSteps.map((step, index) => (
                  <li key={step.name} className="flex gap-4">
                    <span
                      aria-hidden
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-line-strong bg-bg text-sm font-bold"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold">{step.name}</h3>
                      <p className="mt-1 text-fg-2">{step.summary}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-card border border-line p-6 sm:p-7">
              <h2 className="type-h3">Prefer to talk directly?</h2>
              <ul className="mt-5 space-y-2">
                {directLinks.map(({ label, value, href, icon: LinkIcon, external }) => (
                  <li key={href}>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="-mx-2 flex items-center gap-3 rounded-control p-2 transition-colors hover:bg-surface-2"
                    >
                      <LinkIcon size={22} aria-hidden className="shrink-0 text-fg-2" />
                      <span>
                        <span className="block text-sm text-muted">{label}</span>
                        <span className="block font-bold">{value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <address className="mt-4 flex gap-3 border-t border-line pt-5 text-fg-2 not-italic">
                <MapPin size={22} aria-hidden className="mt-0.5 shrink-0 text-fg-2" />
                <span>
                  {company.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </address>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}

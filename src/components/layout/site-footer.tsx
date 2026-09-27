import type { Icon } from "@phosphor-icons/react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { company, primaryCta, services } from "@/content/site";

const socials: { label: string; href: string; icon: Icon }[] = [
  { label: "LinkedIn", href: company.social.linkedin, icon: LinkedinLogo },
  { label: "Facebook", href: company.social.facebook, icon: FacebookLogo },
  { label: "X (Twitter)", href: company.social.x, icon: XLogo },
  { label: "Instagram", href: company.social.instagram, icon: InstagramLogo },
  { label: "YouTube", href: company.social.youtube, icon: YoutubeLogo },
];

const companyLinks = [
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Stack", href: "/#stack" },
  { label: "About", href: "/about" },
  { label: primaryCta.label, href: primaryCta.href },
];

// py-2 gives each text link a ~40px tap target without loosening the rhythm.
const linkClass = "inline-block py-2 text-fg-2 transition-colors hover:text-fg";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-12 pt-20 pb-12 lg:grid-cols-12 lg:gap-8">
        <div className="col-span-2 lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs text-fg-2">{company.description}</p>
          <ul className="mt-6 flex gap-2" aria-label="Gitlogix on social media">
            {socials.map(({ label, href, icon: SocialIcon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-line text-fg-2 transition-colors hover:border-line-strong hover:bg-white/6 hover:text-fg"
                >
                  <SocialIcon size={20} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Services" className="lg:col-span-2 lg:col-start-6">
          <h2 className="text-sm font-bold text-fg">Services</h2>
          <ul className="mt-3">
            {services.map((service) => (
              <li key={service.id}>
                <Link href="/#services" className={linkClass}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="lg:col-span-2">
          <h2 className="text-sm font-bold text-fg">Company</h2>
          <ul className="mt-3">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-2 lg:col-span-3">
          <h2 className="text-sm font-bold text-fg">Contact</h2>
          <ul className="mt-3">
            <li>
              <a href={`mailto:${company.email}`} className={linkClass}>
                {company.email}
              </a>
            </li>
            <li>
              <a href={company.phone.href} className={linkClass}>
                {company.phone.display}
              </a>
            </li>
            <li>
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className={linkClass}>
                WhatsApp
              </a>
            </li>
          </ul>
          <address className="mt-2 text-fg-2 not-italic">
            {company.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      </Container>

      <Container>
        <p className="flex flex-wrap justify-between gap-4 border-t border-line py-6 text-sm text-muted">
          <span>© {new Date().getFullYear()} Gitlogix. All rights reserved.</span>
          <span>Designed and built in Islamabad.</span>
        </p>
      </Container>

      {/* Oversized wordmark that bleeds off the bottom edge. */}
      <div aria-hidden className="pointer-events-none mb-[-4vw] select-none overflow-hidden px-2">
        <p className="bg-linear-to-b from-white/9 to-transparent bg-clip-text text-center font-display text-[21vw] leading-[0.8] font-semibold tracking-[-0.04em] text-transparent">
          GITLOGIX
        </p>
      </div>
    </footer>
  );
}

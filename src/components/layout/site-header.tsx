import { Logo } from "@/components/brand/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLinks } from "@/components/layout/nav-links";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { primaryCta } from "@/content/site";

// z-index scale: header 40, skip link 50. Nothing else on the site is layered.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <a
        href="#main"
        className="sr-only rounded-control bg-fg px-4 py-2 font-bold text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>
      <Container className="relative flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden h-full lg:mr-auto lg:ml-6 lg:block">
          <NavLinks
            className="flex h-full items-center gap-1"
            // The current page gets a 2px brand bar along the header's bottom edge.
            linkClassName="relative flex h-16 items-center px-3 text-[0.9375rem] font-medium text-fg-2 transition-colors hover:text-fg aria-[current=page]:text-fg aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-3 aria-[current=page]:after:-bottom-px aria-[current=page]:after:h-0.5 aria-[current=page]:after:bg-brand"
          />
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href={primaryCta.href} size="md" className="max-sm:hidden">
            {primaryCta.label}
          </ButtonLink>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

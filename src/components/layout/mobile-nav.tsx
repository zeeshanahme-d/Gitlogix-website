"use client";

import { List, X } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

import { NavLinks } from "@/components/layout/nav-links";
import { ButtonLink } from "@/components/ui/button";
import { primaryCta } from "@/content/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      // The panel is about to be hidden, so keep focus somewhere visible.
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-control border border-line-strong text-fg transition-colors hover:bg-surface-2"
      >
        {open ? <X size={22} aria-hidden /> : <List size={22} aria-hidden />}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-bg px-4 pt-2 pb-5 shadow-sm sm:px-6"
      >
        <nav aria-label="Main">
          <NavLinks
            onNavigate={close}
            className="grid divide-y divide-line"
            linkClassName="flex min-h-13 items-center text-lg font-medium text-fg-2 hover:text-fg aria-[current=page]:text-fg aria-[current=page]:underline aria-[current=page]:decoration-brand aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
          />
          <ButtonLink href={primaryCta.href} onClick={close} className="mt-3 w-full">
            {primaryCta.label}
          </ButtonLink>
        </nav>
      </div>
    </div>
  );
}

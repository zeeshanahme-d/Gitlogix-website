"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNav } from "@/content/site";

type NavLinksProps = {
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
};

/** Main navigation links; marks the current page (hash links never are). */
export function NavLinks({ className, linkClassName, onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {mainNav.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={onNavigate}
            aria-current={pathname === item.href ? "page" : undefined}
            className={linkClassName}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

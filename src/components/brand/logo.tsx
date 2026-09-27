import Image from "next/image";
import Link from "next/link";

import mark from "@/assets/brand/gitlogix-mark.png";
import markLight from "@/assets/brand/gitlogix-mark-light.png";

/**
 * The G mark cropped from the official stacked logo, set beside the wordmark.
 * Inside a .theme-dark block (the footer) it switches to the light mark.
 * Replace with an official SVG lockup when one exists.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Gitlogix home" className={`inline-flex min-h-11 items-center gap-2.5 text-fg ${className}`}>
      <Image src={mark} alt="" width={32} height={32} className="size-8 in-[.theme-dark]:hidden" />
      <Image src={markLight} alt="" width={32} height={32} className="hidden size-8 in-[.theme-dark]:block" />
      <span className="font-display text-[1.1875rem] font-semibold tracking-[0.14em]">GITLOGIX</span>
    </Link>
  );
}

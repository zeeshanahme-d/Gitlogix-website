import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { company } from "@/content/site";

import "./globals.css";

// Clash Display + Satoshi by Indian Type Foundry (Fontshare, ITF Free Font License), self-hosted.
const clash = localFont({
  variable: "--font-clash",
  display: "swap",
  src: [
    { path: "../assets/fonts/clash-display-500.woff2", weight: "500" },
    { path: "../assets/fonts/clash-display-600.woff2", weight: "600" },
    { path: "../assets/fonts/clash-display-700.woff2", weight: "700" },
  ],
});

const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "../assets/fonts/satoshi-400.woff2", weight: "400" },
    { path: "../assets/fonts/satoshi-500.woff2", weight: "500" },
    { path: "../assets/fonts/satoshi-700.woff2", weight: "700" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Gitlogix | Browser extensions, web platforms and mobile apps",
    template: "%s | Gitlogix",
  },
  description: company.description,
  openGraph: { type: "website", siteName: "Gitlogix", locale: "en_US" },
  twitter: { card: "summary_large_image", site: "@gitlogix" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: company.url,
  logo: `${company.url}/icon.png`,
  email: company.email,
  telephone: company.phone.display,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.locality,
    addressCountry: company.address.country,
  },
  sameAs: Object.values(company.social),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior lets Next skip smooth scrolling on route changes (Next 16 opt-in).
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${clash.variable} ${satoshi.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        {/* The footer keeps its dark look; .theme-dark swaps the colour tokens (globals.css). */}
        <div className="theme-dark bg-bg text-fg">
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

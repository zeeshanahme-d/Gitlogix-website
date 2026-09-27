import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { Clients } from "@/components/home/clients";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { Industries } from "@/components/home/industries";
import { Process } from "@/components/home/process";
import { Services } from "@/components/home/services";
import { Stack } from "@/components/home/stack";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";
import { Work } from "@/components/home/work";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Work />
      <Stats />
      <Industries />
      <Process />
      <Stack />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}

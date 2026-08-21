import { BuySection } from "@/components/buy-section";
import { Cause } from "@/components/cause";
import { Hero } from "@/components/hero";
import { Prizes } from "@/components/prizes";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Sponsors } from "@/components/sponsors";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Sponsors />
        <BuySection />
        <Cause />
        <Prizes />
      </main>
      <SiteFooter />
    </>
  );
}

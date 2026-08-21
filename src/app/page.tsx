import { Cause } from "@/components/cause";
import { Hero } from "@/components/hero";
import { Payment } from "@/components/payment";
import { Prizes } from "@/components/prizes";
import { PurchaseForm } from "@/components/purchase-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Sponsors } from "@/components/sponsors";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Cause />
        <Prizes />
        <Sponsors />
        <Payment />
        <PurchaseForm />
      </main>
      <SiteFooter />
    </>
  );
}

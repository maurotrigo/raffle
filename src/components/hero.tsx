import { ArrowRight, Ticket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { content, formatPrice } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent),transparent_42%),radial-gradient(circle_at_bottom_left,oklch(0.88_0.05_70),transparent_40%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            <Ticket className="size-3.5" />
            {content.hero.eyebrow}
          </p>
          <h1 className="font-heading max-w-xl text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl">
            {content.hero.title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            {content.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              render={<a href="#comprar" />}
              size="lg"
              className="h-12 px-5 text-base"
            >
              {content.hero.cta}
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              render={<a href="#premios" />}
              variant="outline"
              size="lg"
              className="h-12 px-5 text-base"
            >
              {content.hero.secondaryCta}
            </Button>
          </div>
        </div>

        <aside className="ticket-card relative rounded-3xl bg-card p-6 shadow-[0_24px_60px_-28px_rgba(70,42,20,0.35)] ring-1 ring-foreground/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Número de rifa
              </p>
              <p className="font-heading mt-2 text-5xl tracking-tight">000</p>
            </div>
            <div className="rounded-2xl bg-primary px-3 py-2 text-right text-primary-foreground">
              <p className="text-[11px] tracking-[0.16em] uppercase">Valor</p>
              <p className="font-heading text-2xl">{formatPrice()}</p>
            </div>
          </div>
          <div className="my-6 border-t border-dashed border-border" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Transferí, subí el comprobante y te devolvemos tus números. Quedan
            pendientes hasta que el equipo confirme el pago.
          </p>
          <p className="mt-6 text-xs tracking-[0.18em] text-muted-foreground uppercase">
            5 combos · {content.sponsors.length} auspiciadores
          </p>
        </aside>
      </div>
    </section>
  );
}

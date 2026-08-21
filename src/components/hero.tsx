import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent),transparent_42%),radial-gradient(circle_at_bottom_left,oklch(0.88_0.05_70),transparent_40%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            {content.hero.eyebrow}
          </p>
          <h1 className="font-heading max-w-xl text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl">
            {content.hero.title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            {content.hero.subtitle}
          </p>
          <div className="mt-8">
            <Button
              nativeButton={false}
              render={<a href="#comprar" />}
              size="lg"
              className="h-12 px-5 text-base"
            >
              {content.hero.cta}
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-card ring-1 ring-foreground/10 sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src={content.hero.photo}
            alt="Henrry, la causa de esta rifa"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 28rem, 100vw"
          />
        </div>
      </div>
    </section>
  );
}

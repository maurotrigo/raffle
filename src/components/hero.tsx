import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-[32rem] overflow-hidden sm:min-h-[36rem] lg:min-h-[40rem]">
      <Image
        src={content.hero.photo}
        alt="Henrry, la causa de esta rifa"
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/55 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/10" />

      <div className="relative mx-auto flex w-full max-w-6xl items-end px-4 py-14 sm:items-center sm:py-20">
        <div className="max-w-xl rounded-3xl border border-white/30 bg-background/75 p-6 shadow-lg backdrop-blur-md sm:p-8">
          {content.hero.eyebrow ? (
            <p className="mb-4 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {content.hero.eyebrow}
            </p>
          ) : null}
          <h1 className="font-heading text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {content.hero.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
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
      </div>
    </section>
  );
}

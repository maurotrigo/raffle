import { Heart } from "lucide-react";

import { content } from "@/lib/content";

export function Cause() {
  return (
    <section id="causa" className="scroll-mt-20 border-y border-border/70 bg-card/60">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            <Heart className="size-3.5 fill-primary/20 text-primary" />
            {content.cause.title}
          </p>
          <h2 className="font-heading text-3xl leading-tight text-balance sm:text-4xl">
            {content.cause.heading}
          </h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {content.cause.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

import { existsSync } from "node:fs";
import path from "node:path";

import Image from "next/image";

import { content, sponsorInitials } from "@/lib/content";

function hasLogoFile(logoPath: string) {
  return existsSync(
    path.join(process.cwd(), "public", logoPath.replace(/^\//, "")),
  );
}

export function Sponsors() {
  return (
    <section id="auspiciadores" className="scroll-mt-20 bg-card/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Auspiciadores
          </p>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
            Gracias a quienes hacen posible la rifa
          </h2>
          <p className="mt-3 text-muted-foreground">
            Mientras llegan los logos, cada marca aparece con sus iniciales.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {content.sponsors.map((sponsor) => {
            const showLogo = hasLogoFile(sponsor.logo);

            return (
              <li
                key={sponsor.slug}
                className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl bg-background px-3 py-5 text-center ring-1 ring-foreground/8"
              >
                {showLogo ? (
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={160}
                    height={80}
                    className="h-12 w-auto object-contain"
                  />
                ) : (
                  <span className="flex size-14 items-center justify-center rounded-full bg-secondary font-heading text-lg text-secondary-foreground">
                    {sponsorInitials(sponsor.name)}
                  </span>
                )}
                <span className="text-sm leading-snug font-medium">
                  {sponsor.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

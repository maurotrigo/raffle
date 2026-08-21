import { existsSync } from "node:fs";
import path from "node:path";

import Image from "next/image";

import { content, sponsorInitials, type Sponsor } from "@/lib/content";

function hasLogoFile(logoPath: string) {
  return existsSync(
    path.join(process.cwd(), "public", logoPath.replace(/^\//, "")),
  );
}

function LogoMark({ sponsor, hasLogo }: { sponsor: Sponsor; hasLogo: boolean }) {
  return (
    <div className="flex h-16 min-w-40 items-center justify-center gap-3 rounded-2xl bg-background px-4 ring-1 ring-foreground/8">
      {hasLogo ? (
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={140}
          height={48}
          className="h-10 w-auto max-w-28 object-contain"
        />
      ) : (
        <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-sm font-medium">
          {sponsorInitials(sponsor.name)}
        </span>
      )}
      <span className="max-w-28 text-left text-sm leading-snug font-medium">
        {sponsor.name}
      </span>
    </div>
  );
}

export function Sponsors() {
  const logos = content.sponsors.map((sponsor) => ({
    sponsor,
    hasLogo: hasLogoFile(sponsor.logo),
  }));
  const loop = [...logos, ...logos];

  return (
    <section id="auspiciadores" className="border-y border-border/70 bg-card/60 py-6">
      <div className="mx-auto mb-4 w-full max-w-6xl px-4">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Auspiciadores
        </p>
      </div>
      <div className="sponsor-marquee-mask overflow-hidden">
        <ul className="sponsor-marquee flex w-max gap-3 pr-3">
          {loop.map(({ sponsor, hasLogo }, index) => (
            <li key={`${sponsor.slug}-${index}`} aria-hidden={index >= logos.length}>
              <LogoMark sponsor={sponsor} hasLogo={hasLogo} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

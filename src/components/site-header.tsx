import Link from "next/link";

import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-heading text-lg tracking-tight">
          {content.siteName}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a href="#comprar" className="hover:text-foreground">
            Comprar
          </a>
          <a href="#causa" className="hover:text-foreground">
            Causa
          </a>
          <a href="#premios" className="hover:text-foreground">
            Premios
          </a>
        </nav>
        <Button
          nativeButton={false}
          render={<a href="#comprar" />}
          size="lg"
          className="h-10 px-4"
        >
          Comprar Rifas
        </Button>
      </div>
    </header>
  );
}

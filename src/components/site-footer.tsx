import { content } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>{content.siteName}</p>
        <p>Los números se confirman cuando el equipo valida el pago.</p>
      </div>
    </footer>
  );
}

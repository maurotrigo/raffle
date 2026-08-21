import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { content } from "@/lib/content";

export function Prizes() {
  return (
    <section id="premios" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Premios
          </p>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
            Cinco combos, cinco ganadores
          </h2>
          <p className="mt-3 text-muted-foreground">
            Cada combo se sortea por separado. Un número participa por todos.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.combos.map((combo) => (
            <Card
              key={combo.id}
              className={combo.id === 5 ? "xl:col-span-1 md:col-span-2 xl:col-auto" : undefined}
            >
              <CardHeader className="border-b">
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="font-heading text-2xl">
                    {combo.name}
                  </CardTitle>
                  <Badge variant="secondary">Ganador</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="divide-y divide-border/70">
                  {combo.items.map((item) => (
                    <li key={`${item.description}-${item.sponsor}`} className="py-3">
                      <p className="leading-snug">{item.description}</p>
                      <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                        {item.sponsor}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

import { content, formatPrice } from "@/lib/content";

export function Payment() {
  return (
    <section id="pago" className="scroll-mt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Cómo pagar
          </p>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
            Transferí {formatPrice()} por cada número
          </h2>
          <ol className="mt-6 space-y-4 text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">1. Transferí </span>
              al QR o a la cuenta. El total es el precio × la cantidad de
              números.
            </li>
            <li>
              <span className="font-medium text-foreground">
                2. Sacá captura{" "}
              </span>
              del comprobante (JPG, PNG o WebP).
            </li>
            <li>
              <span className="font-medium text-foreground">
                3. Completá el formulario{" "}
              </span>
              y te asignamos los números al instante. Quedan pendientes hasta
              que el equipo los habilite.
            </li>
          </ol>

          <dl className="mt-8 space-y-3 rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Banco
              </dt>
              <dd className="mt-1 font-medium">{content.bank.bank}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Titular
              </dt>
              <dd className="mt-1 font-medium">{content.bank.holder}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Cuenta / alias
              </dt>
              <dd className="mt-1 font-medium">{content.bank.account}</dd>
            </div>
            <p className="text-sm text-muted-foreground">{content.bank.extra}</p>
          </dl>
        </div>

        <div className="mx-auto w-full max-w-sm rounded-3xl bg-card p-6 text-center ring-1 ring-foreground/10">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            QR de pago
          </p>
          <div className="mt-4 overflow-hidden rounded-2xl bg-background p-4">
            <Image
              src={content.bank.qrImage}
              alt="QR para transferir"
              width={360}
              height={360}
              className="mx-auto h-auto w-full"
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Escaneá el QR con la app de tu banco.
          </p>
        </div>
      </div>
    </section>
  );
}

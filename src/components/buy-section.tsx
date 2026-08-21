import Image from "next/image";

import { PurchaseForm } from "@/components/purchase-form";
import { content, formatPrice } from "@/lib/content";

export function BuySection() {
  return (
    <section id="comprar" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">Comprar</p>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
            Transfiere {formatPrice()} y sube tu comprobante
          </h2>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl bg-card p-5 text-center ring-1 ring-foreground/10 sm:p-6">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">QR de pago</p>
            <div className="mt-4 overflow-hidden rounded-2xl bg-background p-3">
              <Image
                src={content.bank.qrImage}
                alt="QR para transferir"
                width={360}
                height={360}
                className="mx-auto h-auto w-full max-w-64"
              />
            </div>
            <dl className="mt-5 space-y-2 text-left text-sm">
              {content.bank.bank && (
                <div>
                  <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Banco</dt>
                  <dd className="font-medium">{content.bank.bank}</dd>
                </div>
              )}
              {content.bank.holder && (
                <div>
                  <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Titular</dt>
                  <dd className="font-medium">{content.bank.holder}</dd>
                </div>
              )}
              {content.bank.account && (
                <div>
                  <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Cuenta / alias</dt>
                  <dd className="font-medium">{content.bank.account}</dd>
                </div>
              )}
            </dl>
            <p className="mt-4 text-left text-sm text-muted-foreground">{content.bank.extra}</p>
          </div>

          <PurchaseForm embedded />
        </div>
      </div>
    </section>
  );
}

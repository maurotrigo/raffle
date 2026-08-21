"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, ImagePlus } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { content, formatPrice, formatRaffleNumbers } from "@/lib/content";
import {
  purchaseFormSchema,
  type PurchaseFormValues,
} from "@/lib/validations";

export function PurchaseForm() {
  const [assignedNumbers, setAssignedNumbers] = useState<number[] | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PurchaseFormValues>({
    resolver: zodResolver(purchaseFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      quantity: 1,
    },
  });

  const [quantity, setQuantity] = useState(1);

  async function onSubmit(values: PurchaseFormValues) {
    setSubmitError(null);

    const body = new FormData();
    body.set("name", values.name);
    body.set("email", values.email);
    body.set("phone", values.phone);
    body.set("quantity", String(values.quantity));
    body.set("receipt", values.receipt[0]);

    const response = await fetch("/api/submit", {
      method: "POST",
      body,
    });

    const payload = (await response.json()) as {
      numbers?: number[];
      error?: string;
    };

    if (!response.ok || !payload.numbers) {
      setSubmitError(payload.error ?? "No pudimos registrar la compra");
      return;
    }

    setAssignedNumbers(payload.numbers);
    setQuantity(1);
    reset({ name: "", email: "", phone: "", quantity: 1 });
  }

  if (assignedNumbers) {
    return (
      <section id="comprar" className="scroll-mt-20 bg-card/60">
        <div className="mx-auto w-full max-w-xl px-4 py-16">
          <div className="rounded-3xl bg-background p-6 ring-1 ring-foreground/10 sm:p-8">
            <CircleCheck className="size-10 text-primary" />
            <h2 className="font-heading mt-4 text-3xl">Tus números ya están</h2>
            <p className="mt-2 text-muted-foreground">
              Quedan pendientes de confirmación. El equipo revisa el
              comprobante y habilita o rechaza la compra en la planilla.
            </p>
            <p className="font-heading mt-6 text-4xl tracking-tight">
              {formatRaffleNumbers(assignedNumbers)}
            </p>
            <Button
              className="mt-8 h-11 px-4"
              onClick={() => setAssignedNumbers(null)}
            >
              Cargar otra compra
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="comprar" className="scroll-mt-20 bg-card/60">
      <div className="mx-auto w-full max-w-xl px-4 py-16">
        <p className="mb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Comprar
        </p>
        <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
          Subí el comprobante y recibí tus números
        </h2>
        <p className="mt-3 text-muted-foreground">
          Total a transferir:{" "}
          <span className="font-medium text-foreground">
            {formatPrice(Number.isFinite(quantity) ? quantity : 1)}
          </span>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-5 rounded-3xl bg-background p-5 ring-1 ring-foreground/10 sm:p-8"
        >
          <Field label="Nombre y apellido" error={errors.name?.message}>
            <Input
              id="name"
              className="h-11"
              autoComplete="name"
              placeholder="Ana Pérez"
              aria-invalid={Boolean(errors.name)}
              {...register("name")}
            />
          </Field>

          <Field label="Email" error={errors.email?.message}>
            <Input
              id="email"
              type="email"
              className="h-11"
              autoComplete="email"
              placeholder="ana@email.com"
              aria-invalid={Boolean(errors.email)}
              {...register("email")}
            />
          </Field>

          <Field label="WhatsApp o teléfono" error={errors.phone?.message}>
            <Input
              id="phone"
              type="tel"
              className="h-11"
              autoComplete="tel"
              placeholder="70000000"
              aria-invalid={Boolean(errors.phone)}
              {...register("phone")}
            />
          </Field>

          <Field label="Cantidad de números" error={errors.quantity?.message}>
            <Input
              id="quantity"
              type="number"
              className="h-11"
              min={content.ticket.minQuantity}
              max={content.ticket.maxQuantity}
              aria-invalid={Boolean(errors.quantity)}
              {...register("quantity", {
                onChange: (event) => {
                  setQuantity(Number(event.target.value) || 1);
                },
              })}
            />
          </Field>

          <Field label="Comprobante" error={errors.receipt?.message}>
            <label className="flex min-h-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-input bg-muted/40 px-4 py-6 text-center text-sm text-muted-foreground">
              <ImagePlus className="size-5" />
              <span>JPG, PNG o WebP · máx. 4.5 MB</span>
              <input
                id="receipt"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="sr-only"
                {...register("receipt")}
              />
            </label>
          </Field>

          {submitError ? (
            <p className="text-sm text-destructive" role="alert">
              {submitError}
            </p>
          ) : null}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full text-base"
          >
            {isSubmitting ? "Asignando números…" : "Enviar comprobante"}
          </Button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

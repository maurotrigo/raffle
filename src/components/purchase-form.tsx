"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, FileText, ImagePlus } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { content, formatPrice, formatRaffleNumbers } from "@/lib/content";
import {
  purchaseFormSchema,
  RECEIPT_ACCEPT,
  RECEIPT_FORMATS_LABEL,
  type PurchaseFormValues,
} from "@/lib/validations";

export function PurchaseForm({ embedded = false }: { embedded?: boolean }) {
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
  const [receiptName, setReceiptName] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [receiptIsPdf, setReceiptIsPdf] = useState(false);
  const receiptInputRef = useRef<HTMLInputElement | null>(null);
  const receiptRegister = register("receipt");

  function setReceiptPreview(file?: File) {
    setReceiptName(file?.name ?? null);
    setReceiptIsPdf(file?.type === "application/pdf");
    setPreviewUrl((current) => {
      if (current) URL.revokeObjectURL(current);
      if (!file || file.type === "application/pdf") return null;
      return URL.createObjectURL(file);
    });
  }

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
    setReceiptPreview();
    reset({ name: "", email: "", phone: "", quantity: 1 });
  }

  const success = assignedNumbers ? (
    <div className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10 sm:p-8">
      <CircleCheck className="size-10 text-primary" />
      <h3 className="font-heading mt-4 text-3xl">Tus números ya están</h3>
      <p className="mt-2 text-muted-foreground">
        Quedan pendientes de confirmación. El equipo revisa el comprobante y
        confirma o rechaza la compra.
      </p>
      <p className="font-heading mt-6 text-4xl tracking-tight">
        {formatRaffleNumbers(assignedNumbers)}
      </p>
      <Button className="mt-8 h-11 px-4" onClick={() => setAssignedNumbers(null)}>
        Cargar otra compra
      </Button>
    </div>
  ) : null;

  const form = (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-3xl bg-card p-5 ring-1 ring-foreground/10 sm:p-6"
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

          <Field label="Comprobante" htmlFor="receipt" error={errors.receipt?.message}>
            <input
              id="receipt"
              type="file"
              accept={RECEIPT_ACCEPT}
              className="sr-only"
              {...receiptRegister}
              ref={(element) => {
                receiptRegister.ref(element);
                receiptInputRef.current = element;
              }}
              onChange={(event) => {
                receiptRegister.onChange(event);
                setReceiptPreview(event.target.files?.[0]);
              }}
            />
            <button
              type="button"
              className="flex min-h-28 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-input bg-muted/40 px-4 py-6 text-center text-sm text-muted-foreground"
              onClick={() => receiptInputRef.current?.click()}
            >
              {receiptName ? (
                receiptIsPdf ? (
                  <>
                    <FileText className="size-10 text-primary" />
                    <span className="font-medium text-foreground">
                      {receiptName}
                    </span>
                    <span>Toca para cambiar el archivo</span>
                  </>
                ) : previewUrl ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={previewUrl}
                      alt="Vista previa del comprobante"
                      className="max-h-40 w-auto rounded-lg object-contain"
                    />
                    <span className="font-medium text-foreground">
                      {receiptName}
                    </span>
                    <span>Toca para cambiar el archivo</span>
                  </>
                ) : null
              ) : (
                <>
                  <ImagePlus className="size-5" />
                  <span className="font-medium text-foreground">
                    Elegir comprobante
                  </span>
                  <span>
                    {RECEIPT_FORMATS_LABEL} · máx. 4.5 MB
                  </span>
                </>
              )}
            </button>
          </Field>

          {submitError ? (
            <p className="text-sm text-destructive" role="alert">
              {submitError}
            </p>
          ) : null}

          <p className="text-sm text-muted-foreground">
            Total a transferir:{" "}
            <span className="font-medium text-foreground">
              {formatPrice(Number.isFinite(quantity) ? quantity : 1)}
            </span>
          </p>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full text-base"
          >
            {isSubmitting ? "Asignando números…" : "Enviar comprobante"}
          </Button>
        </form>
  );

  if (assignedNumbers) {
    if (embedded) return success;
    return (
      <section id="comprar" className="scroll-mt-20">
        <div className="mx-auto w-full max-w-xl px-4 py-16">{success}</div>
      </section>
    );
  }

  if (embedded) return form;

  return (
    <section id="comprar" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-xl px-4 py-16">{form}</div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

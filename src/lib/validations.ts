import { z } from "zod";

import { content } from "@/lib/content";

export const MAX_RECEIPT_BYTES = Math.floor(4.5 * 1024 * 1024);
export const ACCEPTED_RECEIPT_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
] as const;

export const purchaseFieldsSchema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre completo"),
  email: z.string().trim().email("Ingresá un email válido"),
  phone: z.string().trim().min(7, "Ingresá tu WhatsApp o teléfono"),
  quantity: z.coerce
    .number({ invalid_type_error: "Indicá cuántos números querés" })
    .int("La cantidad tiene que ser un número entero")
    .min(
      content.ticket.minQuantity,
      `Mínimo ${content.ticket.minQuantity} número`,
    )
    .max(
      content.ticket.maxQuantity,
      `Máximo ${content.ticket.maxQuantity} números por compra`,
    ),
});

function isFileList(value: unknown): value is FileList {
  return typeof FileList !== "undefined" && value instanceof FileList;
}

export const purchaseFormSchema = purchaseFieldsSchema.extend({
  receipt: z
    .custom<FileList>(isFileList, "Subí la foto del comprobante")
    .refine((files) => files.length === 1, "Subí la foto del comprobante")
    .refine(
      (files) => files[0]?.size <= MAX_RECEIPT_BYTES,
      "La imagen no puede superar 4.5 MB",
    )
    .refine(
      (files) =>
        ACCEPTED_RECEIPT_TYPES.includes(
          files[0]?.type as (typeof ACCEPTED_RECEIPT_TYPES)[number],
        ),
      "Usá una imagen JPG, PNG o WebP",
    ),
});

export type PurchaseFormValues = z.infer<typeof purchaseFormSchema>;

export function validateReceiptFile(file: File) {
  if (!ACCEPTED_RECEIPT_TYPES.includes(file.type as (typeof ACCEPTED_RECEIPT_TYPES)[number])) {
    return "Usá una imagen JPG, PNG o WebP";
  }
  if (file.size > MAX_RECEIPT_BYTES) {
    return "La imagen no puede superar 4.5 MB";
  }
  return null;
}

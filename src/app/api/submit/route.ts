import { NextResponse } from "next/server";

import { uploadReceipt } from "@/lib/blob";
import { assignNumbersAndSave } from "@/lib/sheets";
import {
  purchaseFieldsSchema,
  validateReceiptFile,
} from "@/lib/validations";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const parsed = purchaseFieldsSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      quantity: formData.get("quantity"),
    });

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Revisa los datos" },
        { status: 400 },
      );
    }

    const receipt = formData.get("receipt");
    if (!(receipt instanceof File) || receipt.size === 0) {
      return NextResponse.json(
        { error: "Sube el comprobante" },
        { status: 400 },
      );
    }

    const receiptError = validateReceiptFile(receipt);
    if (receiptError) {
      return NextResponse.json({ error: receiptError }, { status: 400 });
    }

    const receiptUrl = await uploadReceipt(receipt);
    const numbers = await assignNumbersAndSave({
      ...parsed.data,
      receiptUrl,
    });

    return NextResponse.json({ numbers });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "No pudimos registrar la compra";
    console.error("submit_failed", error);

    const isConfigError =
      message.includes("GOOGLE_") || message.includes("BLOB_");

    return NextResponse.json(
      {
        error: isConfigError
          ? "El sitio todavía no tiene configurado el pago. Intenta de nuevo en un momento."
          : "No pudimos registrar la compra. Intenta de nuevo.",
      },
      { status: 500 },
    );
  }
}

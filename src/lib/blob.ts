import { put } from "@vercel/blob";

export async function uploadReceipt(file: File) {
  const safeName = file.name.replace(/[^\w.\-]+/g, "-").slice(0, 80);
  const blob = await put(`comprobantes/${Date.now()}-${safeName}`, file, {
    access: "public",
    addRandomSuffix: true,
    contentType: file.type,
  });

  return blob.url;
}

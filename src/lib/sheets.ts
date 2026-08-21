import { google } from "googleapis";

import { formatRaffleNumbers } from "@/lib/content";

const CONFIG_RANGE = "config!A1:B1";
const COMPRAS_RANGE = "compras!A:I";

export type PurchaseStatus = "pendiente" | "aprobado" | "rechazado";

export type NewPurchase = {
  name: string;
  email: string;
  phone: string;
  quantity: number;
  receiptUrl: string;
};

function getSpreadsheetId() {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!spreadsheetId || !email || !key) {
    throw new Error(
      "Faltan GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL o GOOGLE_PRIVATE_KEY",
    );
  }

  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return {
    spreadsheetId,
    sheets: google.sheets({ version: "v4", auth }),
  };
}

async function reserveAndAppendOnce(purchase: NewPurchase) {
  const { sheets, spreadsheetId } = getSpreadsheetId();

  const config = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: CONFIG_RANGE,
  });

  const rawNext = config.data.values?.[0]?.[1] ?? config.data.values?.[0]?.[0];
  const nextNumber = Number.parseInt(String(rawNext ?? "1"), 10);

  if (!Number.isFinite(nextNumber) || nextNumber < 1) {
    throw new Error("nextNumber inválido en la pestaña config");
  }

  const numbers = Array.from(
    { length: purchase.quantity },
    (_, index) => nextNumber + index,
  );

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: CONFIG_RANGE,
    valueInputOption: "RAW",
    requestBody: {
      values: [["nextNumber", nextNumber + purchase.quantity]],
    },
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: COMPRAS_RANGE,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          purchase.name,
          purchase.email,
          purchase.phone,
          purchase.quantity,
          formatRaffleNumbers(numbers),
          purchase.receiptUrl,
          "pendiente" satisfies PurchaseStatus,
          "",
        ],
      ],
    },
  });

  return numbers;
}

export async function assignNumbersAndSave(purchase: NewPurchase) {
  try {
    return await reserveAndAppendOnce(purchase);
  } catch (firstError) {
    return await reserveAndAppendOnce(purchase).catch(() => {
      throw firstError;
    });
  }
}

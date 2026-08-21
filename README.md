# Rifa solidaria

Landing en Next.js para vender números de rifa. La persona transfiere, sube el comprobante y recibe números consecutivos en estado `pendiente`. El equipo los habilita o rechaza desde Google Sheets.

## Stack

- Next.js (App Router, `src/`)
- Tailwind 4 + shadcn
- Zod + React Hook Form
- Vercel Blob (comprobantes)
- Google Sheets (admin)

## Desarrollo

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

Editá el copy, el precio y los datos bancarios en [`src/lib/content.ts`](src/lib/content.ts).

## Assets

- Foto de la causa: reemplazá [`public/causa.svg`](public/causa.svg) o cambiá `content.hero.photo` a `/causa.jpg`.
- Fotos de combos: `public/combos/combo-1.svg` … `combo-5.svg` (o PNG con el mismo path en `content.combos`).
- QR de pago: reemplazá [`public/qr.svg`](public/qr.svg) o cambiá `content.bank.qrImage` a `/qr.png`.
- Logos de auspiciadores: `public/sponsors/{slug}.png`. Si falta el archivo, el carrusel muestra iniciales.

## Google Sheets

1. Creá una planilla nueva.
2. Renombrá la primera pestaña a `config` y dejá:

   | A | B |
   | --- | --- |
   | nextNumber | 1 |

3. Creá una pestaña `compras` con esta fila de encabezados:

   `timestamp | nombre | email | telefono | cantidad | numeros | comprobanteUrl | status | notas`

4. En [Google Cloud](https://console.cloud.google.com/) creá un proyecto, habilitá **Google Sheets API** y un **service account**. Descargá la clave JSON.
5. Compartí la planilla con el `client_email` del service account, rol **Editor**.
6. Pegá en `.env.local` (y en Vercel):

   - `GOOGLE_SHEET_ID` — el ID de la URL `https://docs.google.com/spreadsheets/d/ESTE_ID/edit`
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` — `client_email`
   - `GOOGLE_PRIVATE_KEY` — `private_key` (entre comillas, conservá los `\n`)

`status` acepta `pendiente`, `aprobado` o `rechazado`. El equipo solo edita `status` y `notas`.

## Vercel Blob

1. En el proyecto de Vercel: Storage → Create Database → Blob.
2. Incluí el entorno **Development** si vas a probar uploads en local.
3. `vercel env pull` o copiá `BLOB_READ_WRITE_TOKEN` a `.env.local`.

El comprobante se guarda como archivo público y el link queda en la columna `comprobanteUrl`.

## Flujo

1. La persona elige cuántos números compra (1–20).
2. Transfiere (precio × cantidad) y sube el comprobante.
3. El sitio reserva N números consecutivos, sube la imagen y agrega una fila en `compras`.
4. En la pantalla de éxito ve los números. Quedan `pendiente` hasta que el equipo los habilite.

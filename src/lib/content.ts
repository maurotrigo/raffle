export type PrizeItem = {
  description: string;
  sponsor: string;
};

export type Combo = {
  id: number;
  name: string;
  items: PrizeItem[];
};

export type Sponsor = {
  name: string;
  slug: string;
  logo: string;
};

export const content = {
  siteName: "Rifa solidaria",
  hero: {
    eyebrow: "Rifa solidaria",
    title: "Cinco combos. Una causa. Tu número puede cambiarlo todo.",
    subtitle:
      "Comprá tu número, transferí y subí el comprobante. Te asignamos los números al instante; el equipo los habilita cuando confirma el pago.",
    cta: "Comprar números",
    secondaryCta: "Ver premios",
  },
  cause: {
    title: "La causa",
    heading: "Estamos recaudando fondos para una causa que nos importa",
    paragraphs: [
      "Completá este texto con el nombre de la organización, a quién ayuda y por qué la rifa. Dos o tres frases claras alcanzan: la gente necesita entender a dónde va su plata.",
      "Cuando tengas fotos o un logo, los sumamos acá. Por ahora dejamos este espacio listo para el copy final.",
    ],
  },
  ticket: {
    price: 20,
    currency: "Bs",
    minQuantity: 1,
    maxQuantity: 20,
  },
  bank: {
    bank: "COMPLETAR banco",
    holder: "COMPLETAR titular",
    account: "COMPLETAR nro. de cuenta / alias",
    extra: "En el comentario de la transferencia, poné tu nombre y apellido.",
    qrImage: "/qr.svg",
  },
  combos: [
    {
      id: 1,
      name: "Combo 1",
      items: [
        {
          description: "1 cupón de $500 USD para automatizaciones",
          sponsor: "Zékiri",
        },
        { description: "1 lavado de auto", sponsor: "Auto Francia" },
        {
          description: "1 vale físico (mix de 6 galletas + helado soft)",
          sponsor: "Baked with Love",
        },
        { description: "1 beca completa CROSSFIT", sponsor: "The Fit Bros" },
        { description: "1 poke en la sucursal LP", sponsor: "Make Poke LP" },
        { description: "1 bolsa de 250 gr", sponsor: "Ilapso" },
        { description: "1 artículo", sponsor: "Mensivo 3D" },
      ],
    },
    {
      id: 2,
      name: "Combo 2",
      items: [
        {
          description: "1 cupón de $500 USD para automatizaciones",
          sponsor: "Zékiri",
        },
        { description: "1 lavado de auto", sponsor: "Auto Francia" },
        { description: "3 horas de pádel", sponsor: "Pádel Arena" },
        {
          description: "1 vale físico (mix de 6 galletas + helado soft)",
          sponsor: "Baked with Love",
        },
        { description: "1 bolsa de 250 gr", sponsor: "Ilapso" },
        { description: "1 artículo", sponsor: "Mensivo 3D" },
      ],
    },
    {
      id: 3,
      name: "Combo 3",
      items: [
        {
          description: "1 cupón de $500 USD para automatizaciones",
          sponsor: "Zékiri",
        },
        { description: "1 lavado de auto", sponsor: "Auto Francia" },
        { description: "1 torta para 15 personas", sponsor: "Kekes" },
        { description: "1 combo Marraqueta + refresco", sponsor: "Marraqueta" },
        {
          description: "1 vale físico (mix de 6 galletas + helado soft)",
          sponsor: "Baked with Love",
        },
        { description: "1 beca completa GYM", sponsor: "The Fit Bros" },
        { description: "1 bolsa de 250 gr", sponsor: "Ilapso" },
        { description: "1 artículo", sponsor: "Mensivo 3D" },
      ],
    },
    {
      id: 4,
      name: "Combo 4",
      items: [
        {
          description: "1 cupón de $500 USD para automatizaciones",
          sponsor: "Zékiri",
        },
        { description: "1 lavado de auto", sponsor: "Auto Francia" },
        { description: "Tablita grande", sponsor: "Merenda Charcutería" },
        { description: "1 canasta de productos", sponsor: "Nutrifoods" },
        { description: "1 combo Marraqueta + refresco", sponsor: "Marraqueta" },
        { description: "1 vale de 50 Bs", sponsor: "Munsa" },
        { description: "1/2 beca CROSSFIT", sponsor: "The Fit Bros" },
        { description: "1 bolsa de 250 gr", sponsor: "Ilapso" },
        { description: "1 artículo", sponsor: "Mensivo 3D" },
      ],
    },
    {
      id: 5,
      name: "Combo 5",
      items: [
        {
          description: "Diseño interior de un espacio (faltan los m2)",
          sponsor: "MDeLaZerda",
        },
        { description: "1 lavado de auto", sponsor: "Auto Francia" },
        { description: "1 lente", sponsor: "Opticas Bunker" },
        { description: "1 perfume", sponsor: "Etheral Senses" },
        { description: "1 mes gratis de gimnasio", sponsor: "Connect" },
        { description: "1 mes gratis de gimnasio", sponsor: "Go" },
        { description: "1 vale de 50 Bs", sponsor: "Munsa" },
        { description: "1/2 beca GYM", sponsor: "The Fit Bros" },
        { description: "1 poke en la sucursal LP", sponsor: "Make Poke LP" },
        { description: "1 artículo", sponsor: "Mensivo 3D" },
      ],
    },
  ] satisfies Combo[],
  sponsors: [
    { name: "Auto Francia", slug: "auto-francia" },
    { name: "Pádel Arena", slug: "padel-arena" },
    { name: "Zékiri", slug: "zekiri" },
    { name: "Etheral Senses", slug: "etheral-senses" },
    { name: "Opticas Bunker", slug: "opticas-bunker" },
    { name: "Baked with Love", slug: "baked-with-love" },
    { name: "Marraqueta", slug: "marraqueta" },
    { name: "Nutrifoods", slug: "nutrifoods" },
    { name: "MDeLaZerda", slug: "mdelazerda" },
    { name: "Make Poke LP", slug: "make-poke-lp" },
    { name: "City Troops", slug: "city-troops" },
    { name: "Kekes", slug: "kekes" },
    { name: "Ilapso", slug: "ilapso" },
    { name: "Merenda Charcutería", slug: "merenda-charcuteria" },
    { name: "Munsa", slug: "munsa" },
    { name: "Connect", slug: "connect" },
    { name: "Go", slug: "go" },
    { name: "The Fit Bros", slug: "the-fit-bros" },
    { name: "Mensivo 3D", slug: "mensivo-3d" },
    { name: "Aura", slug: "aura" },
  ].map((sponsor) => ({
    ...sponsor,
    logo: `/sponsors/${sponsor.slug}.png`,
  })) satisfies Sponsor[],
} as const;

export function formatPrice(quantity = 1) {
  const total = content.ticket.price * quantity;
  return `${total} ${content.ticket.currency}`;
}

export function formatRaffleNumber(n: number) {
  return String(n).padStart(3, "0");
}

export function formatRaffleNumbers(numbers: number[]) {
  return numbers.map(formatRaffleNumber).join(", ");
}

export function sponsorInitials(name: string) {
  const words = name
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

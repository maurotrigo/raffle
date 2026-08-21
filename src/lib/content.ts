export type PrizeItem = {
  description: string;
  sponsor: string;
};

export type Combo = {
  id: number;
  name: string;
  image: string;
  items: PrizeItem[];
};

export type Sponsor = {
  name: string;
  slug: string;
  logo: string;
};

export const content = {
  siteName: 'Apoyemos a Henrry',
  hero: {
    eyebrow: '',
    title: 'Apoyemos a Henrry a pagar el hospital',
    subtitle:
      'Henrry es un gran ser humano, voluntario, amigo, hijo que por mucho tiempo se hizo cargo de su familia. Sus amigos creamos esta rifa para aliviar un poquito la cuenta del hospital de su hermanita. ❤️ mira los premios y apoya con una rifa.',
    cta: 'Comprar Rifas',
    photo: '/causa.jpeg'
  },
  cause: {
    title: 'Apoyemos a Henrry',
    heading: 'Ayudemos Henrry a pagar el hospital',
    photo: '/causa.jpeg',
    paragraphs: [
      'Completa este texto con a quién ayuda Henrry y por qué es la rifa. Dos o tres frases claras bastan: las personas necesitan entender a dónde va su dinero.',
      'Cuando tengas la foto final, reemplaza public/causa.svg.'
    ]
  },
  ticket: {
    price: 20,
    currency: 'Bs',
    minQuantity: 1,
    maxQuantity: 20
  },
  bank: {
    bank: '',
    holder: '',
    account: '',
    extra: 'En el concepto de la transferencia, escribe tu nombre completo.',
    qrImage: '/qr.png'
  },
  combos: [
    {
      id: 1,
      name: 'Combo 1',
      image: '/combos/combo-1.svg',
      items: [
        {
          description: '1 cupón de $500 USD para automatizaciones',
          sponsor: 'Zékiri'
        },
        { description: '1 lavado de auto', sponsor: 'Auto Francia' },
        {
          description: '1 vale físico (mix de 6 galletas + helado suave)',
          sponsor: 'Baked with Love'
        },
        { description: '1 beca completa CROSSFIT', sponsor: 'The Fit Bros' },
        { description: '1 poke en la sucursal LP', sponsor: 'Make Poke LP' },
        { description: '1 bolsa de 250 gr', sponsor: 'Ilapso' },
        { description: '1 artículo', sponsor: 'Mensivo 3D' }
      ]
    },
    {
      id: 2,
      name: 'Combo 2',
      image: '/combos/combo-2.svg',
      items: [
        {
          description: '1 cupón de $500 USD para automatizaciones',
          sponsor: 'Zékiri'
        },
        { description: '1 lavado de auto', sponsor: 'Auto Francia' },
        { description: '3 horas de pádel', sponsor: 'Pádel Arena' },
        {
          description: '1 vale físico (mix de 6 galletas + helado suave)',
          sponsor: 'Baked with Love'
        },
        { description: '1 bolsa de 250 gr', sponsor: 'Ilapso' },
        { description: '1 artículo', sponsor: 'Mensivo 3D' }
      ]
    },
    {
      id: 3,
      name: 'Combo 3',
      image: '/combos/combo-3.svg',
      items: [
        {
          description: '1 cupón de $500 USD para automatizaciones',
          sponsor: 'Zékiri'
        },
        { description: '1 lavado de auto', sponsor: 'Auto Francia' },
        { description: '1 torta para 15 personas', sponsor: 'Kekes' },
        { description: '1 combo Marraqueta + refresco', sponsor: 'Marraqueta' },
        {
          description: '1 vale físico (mix de 6 galletas + helado suave)',
          sponsor: 'Baked with Love'
        },
        { description: '1 beca completa GYM', sponsor: 'The Fit Bros' },
        { description: '1 bolsa de 250 gr', sponsor: 'Ilapso' },
        { description: '1 artículo', sponsor: 'Mensivo 3D' }
      ]
    },
    {
      id: 4,
      name: 'Combo 4',
      image: '/combos/combo-4.svg',
      items: [
        {
          description: '1 cupón de $500 USD para automatizaciones',
          sponsor: 'Zékiri'
        },
        { description: '1 lavado de auto', sponsor: 'Auto Francia' },
        { description: 'Tabla grande de charcutería', sponsor: 'Merenda Charcutería' },
        { description: '1 canasta de productos', sponsor: 'Nutrifoods' },
        { description: '1 combo Marraqueta + refresco', sponsor: 'Marraqueta' },
        { description: '1 vale de 50 Bs', sponsor: 'Munsa' },
        { description: '1/2 beca CROSSFIT', sponsor: 'The Fit Bros' },
        { description: '1 bolsa de 250 gr', sponsor: 'Ilapso' },
        { description: '1 artículo', sponsor: 'Mensivo 3D' }
      ]
    },
    {
      id: 5,
      name: 'Combo 5',
      image: '/combos/combo-5.svg',
      items: [
        {
          description: 'Diseño interior de un espacio (faltan los m2)',
          sponsor: 'MDeLaZerda'
        },
        { description: '1 lavado de auto', sponsor: 'Auto Francia' },
        { description: '1 lente', sponsor: 'Opticas Bunker' },
        { description: '1 perfume', sponsor: 'Etheral Senses' },
        { description: '1 mes gratis de gimnasio', sponsor: 'Connect' },
        { description: '1 mes gratis de gimnasio', sponsor: 'Go' },
        { description: '1 vale de 50 Bs', sponsor: 'Munsa' },
        { description: '1/2 beca GYM', sponsor: 'The Fit Bros' },
        { description: '1 poke en la sucursal LP', sponsor: 'Make Poke LP' },
        { description: '1 artículo', sponsor: 'Mensivo 3D' }
      ]
    }
  ] satisfies Combo[],
  sponsors: [
    { name: 'Auto Francia', slug: 'auto-francia' },
    { name: 'Pádel Arena', slug: 'padel-arena' },
    { name: 'Zékiri', slug: 'zekiri' },
    { name: 'Etheral Scents', slug: 'etheral-scents' },
    { name: 'Óptica Bunker', slug: 'optica-bunker' },
    { name: 'Baked with Love', slug: 'baked-with-love' },
    { name: 'Marraqueta', slug: 'marraqueta' },
    { name: 'Nutrifoods', slug: 'nutrifoods' },
    { name: 'MDeLaZerda', slug: 'mdelazerda' },
    { name: 'Make Poke LP', slug: 'make-poke-lp' },
    { name: 'CityTroops', slug: 'city-troops' },
    { name: 'Kekes', slug: 'kekes' },
    { name: 'Ilapso', slug: 'ilapso' },
    { name: 'Merenda Charcutería', slug: 'merenda-charcuteria' },
    { name: 'Munsa', slug: 'munsa' },
    { name: 'Connect', slug: 'connect' },
    { name: 'Go', slug: 'go' },
    { name: 'The Fit Bros', slug: 'the-fit-bros' },
    { name: 'Mensivo 3D', slug: 'mensivo-3d' },
    { name: 'Aura', slug: 'aura' }
  ].map(sponsor => ({
    ...sponsor,
    logo: `/sponsors/${sponsor.slug}.png`
  })) satisfies Sponsor[]
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

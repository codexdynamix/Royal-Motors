export const LOGO_SRC = "/logo.png";

export const CATALOGUE_URL = "https://wa.me/c/263777334569";
export const WHATSAPP_URL = "https://wa.me/263772877953";

export const features = [
  {
    icon: "shield",
    title: "Built strong.",
    detail: "Quality alloy construction that resists bends and cracks. Confidence on Zimbabwe roads.",
  },
  {
    icon: "gauge",
    title: "Less weight. More control.",
    detail: "Lightweight design for better handling and a smoother ride.",
  },
  {
    icon: "wheel",
    title: "A bigger presence.",
    detail: "A bold 21-inch size gives your car a proper premium stance.",
  },
  {
    icon: "sparkles",
    title: "A finish that stands out.",
    detail: "Sharp, modern styling that stays looking good.",
  },
  {
    icon: "car",
    title: "Made for your Mercedes.",
    detail: "A wide fitment range for luxury SUVs, sedans and coupés. Find your model below.",
  },
] as const;

export const fittingBenefits: [string, string][] = [
  ["Free fitment", "No labour cost. Just a great fit."],
  ["Free wheel balancing", "Smooth, vibration-free driving."],
  ["Free wheel nuts", "No hidden extras."],
  ["In stock now", "No long waiting."],
  ["Nationwide delivery", "Delivery available anytime, across Zimbabwe."],
  ["An expert team", "Fitted correctly the first time."],
];

export const models = [
  {
    type: "SUVs",
    items: [
      ["GLE & GLE Coupé", "GLE 350d · GLE 43 · ML/GLE"],
      ["GLS-Class", "Check your exact specification"],
      ["GLC-Class", "GLC 43 · high-trim specs"],
      ["ML / GL-Class", "Check your exact specification"],
    ] as [string, string][],
  },
  {
    type: "Luxury sedans & coupés",
    items: [
      ["S-Class", "Including Coupé & Maybach"],
      ["E-Class", "Select performance trims · AMG variants, including E53"],
      ["CLS", "Check your exact specification"],
    ] as [string, string][],
  },
];

export const reviews = [
  {
    photo:
      "https://horizons-cdn.hostinger.com/649e7e96-e898-4a23-9def-4f4c0c80c3f6/0a076ac5c6ec176d9b4d1902ce858d28.png",
    alt: "Adrian Musanga’s Maybach SL",
    quote: "My looks nice and different. I'm looking the look from different angles",
    name: "Adrian Musanga",
    meta: "Harare · 2026 Maybach SL",
  },
  {
    photo:
      "https://horizons-cdn.hostinger.com/649e7e96-e898-4a23-9def-4f4c0c80c3f6/e33ccd1250190443b21da1f5d4a27643.png",
    alt: "Adrian Musanga’s Toyota Hilux",
    quote: "Now I can have the 4x4 experience with my car looking like a beast. Thanks Royal Motors.",
    name: "Adrian Musanga",
    meta: "Bulawayo · Toyota Hilux",
  },
  {
    photo:
      "https://horizons-cdn.hostinger.com/649e7e96-e898-4a23-9def-4f4c0c80c3f6/c06f24e9b853a8c1b30bffd353f04f63.png",
    alt: "Craig Rain’s Jeep Gladiator Maximus 6x6",
    quote:
      "All I did was send them my bakkie's picture and they did the rest; it was handled in the workshop. 6x6 fitted with a set of 6 black beauties. Kudos RM.",
    name: "Craig Rain",
    meta: "Mutare · Jeep Gladiator Maximus 6x6",
  },
];

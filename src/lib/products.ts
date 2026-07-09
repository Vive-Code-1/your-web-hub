import { useLang, type Lang } from "./i18n";

export type ProductCategoryKey = "Relationnel" | "Sexualité" | "Financier" | "Corps";

export interface Product {
  slug: string;
  title: string;
  short: string;
  description: string;
  price: string;
  paid: boolean;
  category: ProductCategoryKey;
  categoryLabel: string;
  image: string;
  details: string[];
}

interface LocalizedField {
  fr: string;
  en: string;
}

interface RawProduct {
  slug: string;
  title: LocalizedField;
  short: LocalizedField;
  description: LocalizedField;
  price: LocalizedField;
  paid: boolean;
  category: ProductCategoryKey;
  image: string;
  details: { fr: string[]; en: string[] };
}

export const categoryLabels: Record<ProductCategoryKey, LocalizedField> = {
  Relationnel: { fr: "Relationnel", en: "Relational" },
  Sexualité: { fr: "Sexualité", en: "Sexuality" },
  Financier: { fr: "Financier", en: "Financial" },
  Corps: { fr: "Corps", en: "Body" },
};

// Products from https://www.evanaclinique.com/banquedoutils
const raw: RawProduct[] = [
  {
    slug: "check-in-relationnel",
    title: { fr: "Check-in relationnel", en: "Relational check-in" },
    short: {
      fr: "Une fois par semaine, prenez un moment calme pour répondre chacun·e aux quatre questions proposées.",
      en: "Once a week, take a quiet moment for each partner to answer the four questions provided.",
    },
    description: {
      fr: "Un rituel simple pour maintenir la connexion dans le couple. Une fois par semaine, dans un moment calme, chaque partenaire répond aux quatre questions proposées. L'outil vous invite à partager, à écouter et à ajuster ce qui doit l'être — avant que les petites choses ne deviennent grandes.",
      en: "A simple ritual to maintain connection in the couple. Once a week, in a quiet moment, each partner answers the four questions. The tool invites you to share, listen and adjust what needs adjusting — before small things become big ones.",
    },
    price: { fr: "Gratuit", en: "Free" },
    paid: false,
    category: "Relationnel",
    image: "https://static.wixstatic.com/media/a8762e_345ee13891574cc8996259943b445ff7~mv2.png",
    details: {
      fr: [
        "Format PDF téléchargeable",
        "4 questions guidées",
        "À utiliser une fois par semaine",
        "Pour les couples de tous horizons",
      ],
      en: [
        "Downloadable PDF format",
        "4 guided questions",
        "To use once a week",
        "For couples of all kinds",
      ],
    },
  },
  {
    slug: "mettons-cartes-sur-table",
    title: { fr: "Mettons cartes sur table", en: "Let's put our cards on the table" },
    short: {
      fr: "Pour t'aider à préparer un retour sur une situation difficile ou à exprimer une demande constructive.",
      en: "To help you prepare feedback on a difficult situation or express a constructive request.",
    },
    description: {
      fr: "Cet outil t'accompagne pour préparer un retour sur une situation conflictuelle ou pour formuler une demande constructive à ton·ta partenaire. Il t'aide à mettre des mots sur ce que tu ressens et à structurer ton message pour être entendu·e sans provoquer de défensive.",
      en: "This tool helps you prepare feedback on a conflict situation or formulate a constructive request to your partner. It helps you put words on what you feel and structure your message so you're heard without triggering defensiveness.",
    },
    price: { fr: "Gratuit", en: "Free" },
    paid: false,
    category: "Relationnel",
    image: "https://static.wixstatic.com/media/a8762e_8e190fc7f3ed4e6a8eba289169f51b10~mv2.png",
    details: {
      fr: [
        "Fiche préparatoire PDF",
        "Structure de communication non-violente",
        "Exemples concrets",
        "Idéal avant une conversation importante",
      ],
      en: [
        "PDF preparation sheet",
        "Non-violent communication structure",
        "Concrete examples",
        "Ideal before an important conversation",
      ],
    },
  },
  {
    slug: "nos-preferences-sexuelles",
    title: { fr: "Nos préférences sexuelles", en: "Our sexual preferences" },
    short: {
      fr: "80 questions qui vous permettront d'explorer différentes facettes de la sphère sexuelle de votre partenaire.",
      en: "80 questions to explore different facets of your partner's sexual world.",
    },
    description: {
      fr: "Un jeu de 80 questions à explorer à deux pour mieux vous connaître, clarifier vos envies et améliorer votre satisfaction sexuelle. Sans pression, sans jugement, dans le respect du rythme de chacun·e.",
      en: "A set of 80 questions to explore together to know each other better, clarify your desires and improve your sexual satisfaction. Without pressure, without judgment, respecting each person's pace.",
    },
    price: { fr: "Gratuit", en: "Free" },
    paid: false,
    category: "Sexualité",
    image: "https://static.wixstatic.com/media/a8762e_8d6add3cc58e4b83b6c556bd75bb4c10~mv2.png",
    details: {
      fr: ["80 questions guidées", "À faire à deux", "Format PDF imprimable", "Thématiques variées"],
      en: ["80 guided questions", "To do as a couple", "Printable PDF format", "Varied themes"],
    },
  },
  {
    slug: "guide-de-preparation-aux-impots",
    title: { fr: "Guide de préparation aux impôts", en: "Tax preparation guide" },
    short: {
      fr: "Pour t'aider à préparer ta déclaration de revenus en regroupant l'essentiel selon ta situation.",
      en: "To help you prepare your tax return by gathering the essentials based on your situation.",
    },
    description: {
      fr: "Ce guide t'aide à préparer ta déclaration de revenus en regroupant les questions essentielles et les documents à rassembler selon ta situation, afin d'éviter les oublis avant ton rendez-vous.",
      en: "This guide helps you prepare your tax return by gathering the essential questions and documents based on your situation, so you don't forget anything before your appointment.",
    },
    price: { fr: "Gratuit", en: "Free" },
    paid: false,
    category: "Financier",
    image: "https://static.wixstatic.com/media/a8762e_43b5c57e261f4e2085b1cef1c9855e9b~mv2.png",
    details: {
      fr: [
        "Checklist complète",
        "Adapté à différentes situations",
        "Format PDF imprimable",
        "Pensé pour éviter les oublis",
      ],
      en: [
        "Complete checklist",
        "Adapted to different situations",
        "Printable PDF format",
        "Designed to prevent oversights",
      ],
    },
  },
  {
    slug: "ton-bilan-financier-annuel",
    title: { fr: "Ton bilan financier annuel", en: "Your annual financial review" },
    short: {
      fr: "Mise à jour de ton bilan financier pour garder une vision claire de ta situation et rester aligné·e avec tes objectifs.",
      en: "Update your financial review to keep a clear vision of your situation and stay aligned with your goals.",
    },
    description: {
      fr: "Cette liste t'accompagne dans la mise à jour de ton bilan financier annuel afin de te permettre de garder une vision claire de ta situation et de rester aligné·e avec tes objectifs et projets.",
      en: "This checklist helps you update your annual financial review so you keep a clear vision of your situation and stay aligned with your goals and projects.",
    },
    price: { fr: "Gratuit", en: "Free" },
    paid: false,
    category: "Financier",
    image: "https://static.wixstatic.com/media/a8762e_c110936e833a4ae180aae4f7467ef423~mv2.png",
    details: {
      fr: [
        "Tableau de bord annuel",
        "Sections : actifs, passifs, objectifs",
        "Format PDF éditable",
        "À refaire chaque année",
      ],
      en: [
        "Annual dashboard",
        "Sections: assets, liabilities, goals",
        "Editable PDF format",
        "To redo every year",
      ],
    },
  },
  {
    slug: "auto-observation-des-signaux-corporels",
    title: {
      fr: "Auto-observation des signaux corporels",
      en: "Self-observation of body signals",
    },
    short: {
      fr: "Pour t'aider à ralentir et à développer une meilleure connexion avec ton corps.",
      en: "To help you slow down and build a better connection with your body.",
    },
    description: {
      fr: "Cet outil t'accompagne dans l'apprentissage de l'écoute de ta faim, de ta satiété et des signaux subtils de ton corps. Un exercice doux d'auto-observation, à intégrer dans ton quotidien à ton rythme.",
      en: "This tool guides you in learning to listen to your hunger, satiety and the subtle signals of your body. A gentle self-observation exercise to integrate into your daily life at your own pace.",
    },
    price: { fr: "Gratuit", en: "Free" },
    paid: false,
    category: "Corps",
    image: "https://static.wixstatic.com/media/a8762e_4151be2403324a0b8017a4b76cd5556b~mv2.png",
    details: {
      fr: [
        "Exercice d'auto-observation",
        "Format PDF à imprimer",
        "Approche douce et progressive",
        "Utile en complément d'un suivi",
      ],
      en: [
        "Self-observation exercise",
        "Printable PDF format",
        "Gentle, progressive approach",
        "Useful alongside a professional follow-up",
      ],
    },
  },
  {
    slug: "entretenons-notre-seduction",
    title: { fr: "Entretenons notre séduction", en: "Nurturing our seduction" },
    short: {
      fr: "Un jeu de 80 questions autour de la séduction pour mieux vous connaître et nourrir votre connexion.",
      en: "A set of 80 questions about seduction to know each other better and nurture your connection.",
    },
    description: {
      fr: "Un jeu de 80 questions autour de la séduction pour mieux vous connaître, clarifier vos attentes et nourrir votre connexion dans le quotidien. Un outil ludique pour raviver la complicité et la curiosité mutuelle.",
      en: "A set of 80 questions about seduction to know each other better, clarify your expectations and nurture your connection day to day. A playful tool to rekindle intimacy and mutual curiosity.",
    },
    price: { fr: "18 €", en: "€18" },
    paid: true,
    category: "Relationnel",
    image: "https://static.wixstatic.com/media/a8762e_bfee095745af4b5580e02e0f2dc8a907~mv2.png",
    details: {
      fr: [
        "80 questions autour de la séduction",
        "À faire à deux, régulièrement",
        "Format PDF téléchargeable",
        "Idéal pour raviver la complicité",
      ],
      en: [
        "80 questions about seduction",
        "To do together, regularly",
        "Downloadable PDF format",
        "Perfect to rekindle intimacy",
      ],
    },
  },
];

function localize(p: RawProduct, lang: Lang): Product {
  return {
    slug: p.slug,
    title: p.title[lang],
    short: p.short[lang],
    description: p.description[lang],
    price: p.price[lang],
    paid: p.paid,
    category: p.category,
    categoryLabel: categoryLabels[p.category][lang],
    image: p.image,
    details: p.details[lang],
  };
}

// Backwards-compatible French products (used by loader head/meta on server).
export const products: Product[] = raw.map((p) => localize(p, "fr"));

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

// Localized hooks — use in components to render in current language.
export function useLocalizedProducts(): Product[] {
  const { lang } = useLang();
  return raw.map((p) => localize(p, lang));
}

export function useLocalizedProduct(slug: string): Product | undefined {
  const { lang } = useLang();
  const p = raw.find((x) => x.slug === slug);
  return p ? localize(p, lang) : undefined;
}

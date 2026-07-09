export interface Product {
  slug: string;
  title: string;
  short: string;
  description: string;
  price: string;
  paid: boolean;
  category: "Relationnel" | "Sexualité" | "Financier" | "Corps";
  image: string;
  details: string[];
}

// Products from https://www.evanaclinique.com/banquedoutils
export const products: Product[] = [
  {
    slug: "check-in-relationnel",
    title: "Check-in relationnel",
    short:
      "Une fois par semaine, prenez un moment calme pour répondre chacun·e aux quatre questions proposées.",
    description:
      "Un rituel simple pour maintenir la connexion dans le couple. Une fois par semaine, dans un moment calme, chaque partenaire répond aux quatre questions proposées. L'outil vous invite à partager, à écouter et à ajuster ce qui doit l'être — avant que les petites choses ne deviennent grandes.",
    price: "Gratuit",
    paid: false,
    category: "Relationnel",
    image: "https://static.wixstatic.com/media/a8762e_345ee13891574cc8996259943b445ff7~mv2.png",
    details: [
      "Format PDF téléchargeable",
      "4 questions guidées",
      "À utiliser une fois par semaine",
      "Pour les couples de tous horizons",
    ],
  },
  {
    slug: "mettons-cartes-sur-table",
    title: "Mettons cartes sur table",
    short:
      "Pour t'aider à préparer un retour sur une situation difficile ou à exprimer une demande constructive.",
    description:
      "Cet outil t'accompagne pour préparer un retour sur une situation conflictuelle ou pour formuler une demande constructive à ton·ta partenaire. Il t'aide à mettre des mots sur ce que tu ressens et à structurer ton message pour être entendu·e sans provoquer de défensive.",
    price: "Gratuit",
    paid: false,
    category: "Relationnel",
    image: "https://static.wixstatic.com/media/a8762e_8e190fc7f3ed4e6a8eba289169f51b10~mv2.png",
    details: [
      "Fiche préparatoire PDF",
      "Structure de communication non-violente",
      "Exemples concrets",
      "Idéal avant une conversation importante",
    ],
  },
  {
    slug: "nos-preferences-sexuelles",
    title: "Nos préférences sexuelles",
    short:
      "80 questions qui vous permettront d'explorer différentes facettes de la sphère sexuelle de votre partenaire.",
    description:
      "Un jeu de 80 questions à explorer à deux pour mieux vous connaître, clarifier vos envies et améliorer votre satisfaction sexuelle. Sans pression, sans jugement, dans le respect du rythme de chacun·e.",
    price: "Gratuit",
    paid: false,
    category: "Sexualité",
    image: "https://static.wixstatic.com/media/a8762e_8d6add3cc58e4b83b6c556bd75bb4c10~mv2.png",
    details: [
      "80 questions guidées",
      "À faire à deux",
      "Format PDF imprimable",
      "Thématiques variées",
    ],
  },
  {
    slug: "guide-de-preparation-aux-impots",
    title: "Guide de préparation aux impôts",
    short:
      "Pour t'aider à préparer ta déclaration de revenus en regroupant l'essentiel selon ta situation.",
    description:
      "Ce guide t'aide à préparer ta déclaration de revenus en regroupant les questions essentielles et les documents à rassembler selon ta situation, afin d'éviter les oublis avant ton rendez-vous.",
    price: "Gratuit",
    paid: false,
    category: "Financier",
    image: "https://static.wixstatic.com/media/a8762e_43b5c57e261f4e2085b1cef1c9855e9b~mv2.png",
    details: [
      "Checklist complète",
      "Adapté à différentes situations",
      "Format PDF imprimable",
      "Pensé pour éviter les oublis",
    ],
  },
  {
    slug: "ton-bilan-financier-annuel",
    title: "Ton bilan financier annuel",
    short:
      "Mise à jour de ton bilan financier pour garder une vision claire de ta situation et rester aligné·e avec tes objectifs.",
    description:
      "Cette liste t'accompagne dans la mise à jour de ton bilan financier annuel afin de te permettre de garder une vision claire de ta situation et de rester aligné·e avec tes objectifs et projets.",
    price: "Gratuit",
    paid: false,
    category: "Financier",
    image: "https://static.wixstatic.com/media/a8762e_c110936e833a4ae180aae4f7467ef423~mv2.png",
    details: [
      "Tableau de bord annuel",
      "Sections : actifs, passifs, objectifs",
      "Format PDF éditable",
      "À refaire chaque année",
    ],
  },
  {
    slug: "auto-observation-des-signaux-corporels",
    title: "Auto-observation des signaux corporels",
    short:
      "Pour t'aider à ralentir et à développer une meilleure connexion avec ton corps.",
    description:
      "Cet outil t'accompagne dans l'apprentissage de l'écoute de ta faim, de ta satiété et des signaux subtils de ton corps. Un exercice doux d'auto-observation, à intégrer dans ton quotidien à ton rythme.",
    price: "Gratuit",
    paid: false,
    category: "Corps",
    image: "https://static.wixstatic.com/media/a8762e_4151be2403324a0b8017a4b76cd5556b~mv2.png",
    details: [
      "Exercice d'auto-observation",
      "Format PDF à imprimer",
      "Approche douce et progressive",
      "Utile en complément d'un suivi",
    ],
  },
  {
    slug: "entretenons-notre-seduction",
    title: "Entretenons notre séduction",
    short:
      "Un jeu de 80 questions autour de la séduction pour mieux vous connaître et nourrir votre connexion.",
    description:
      "Un jeu de 80 questions autour de la séduction pour mieux vous connaître, clarifier vos attentes et nourrir votre connexion dans le quotidien. Un outil ludique pour raviver la complicité et la curiosité mutuelle.",
    price: "18 €",
    paid: true,
    category: "Relationnel",
    image: "https://static.wixstatic.com/media/a8762e_bfee095745af4b5580e02e0f2dc8a907~mv2.png",
    details: [
      "80 questions autour de la séduction",
      "À faire à deux, régulièrement",
      "Format PDF téléchargeable",
      "Idéal pour raviver la complicité",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

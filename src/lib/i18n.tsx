import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, string | string[] | Record<string, string>>;

const STORAGE_KEY = "evana.lang";

// -------- Translations --------
const translations: Record<Lang, Record<string, any>> = {
  fr: {
    nav: {
      home: "Accueil",
      individual: "Individuel",
      couples: "Couples",
      boutique: "Boutique",
      about: "À propos",
      book: "Prendre rendez-vous",
      menu: "Menu",
      language: "Langue",
    },
    common: {
      bookCta: "Prendre rendez-vous",
      available24h: "Disponible en moins de 24 h",
      notAlone: "Vous n'êtes pas seul·e",
      askQuestion: "Poser une question",
      backHome: "Retour à l'accueil",
      firstStepTitle: "Un premier pas, à votre rythme.",
      firstStepDesc:
        "Réservez un appel découverte gratuit de 10 minutes pour être orienté·e vers la sexologue qui vous correspond.",
    },
    footer: {
      tagline:
        "Deux sexologues, une mission : t'accompagner dans l'amélioration de ton bien-être personnel, relationnel et sexuel — en toute confidentialité.",
      secure: "Consultations 100 % confidentielles & sécurisées",
      navTitle: "Navigation",
      contact: "Contact",
      reply: "Réponse sous 24 h ouvrables.",
      rights: "Tous droits réservés.",
      privacy: "Vos données sont protégées et jamais partagées.",
      links: {
        home: "Accueil",
        individual: "Sexologie individuelle",
        couples: "Thérapie de couple",
        boutique: "Boutique en ligne",
        about: "À propos",
        book: "Prendre rendez-vous",
      },
      subtitle: "CLINIQUE MULTIDISCIPLINAIRE",
    },
    home: {
      eyebrow: "sexualité & santé globale",
      titleA: "Consultations en sexologie en ligne, ",
      titleEm: "confidentielles",
      titleB: " et sans jugement.",
      lead:
        "Parlez à un·e sexologue qualifié·e depuis le confort de votre maison. Sans salle d'attente, sans jugement, sans compromis sur votre vie privée.",
      trust1: "100% Confidentiel",
      trust2: "Réponse < 24h",
      trust3: "Sécurisé",
      heroAlt: "Espace de consultation chaleureux et apaisant",
      badge1: "Prendre",
      badge2: "rendez-vous",
      pillarsEyebrow: "Confidentialité",
      pillarsTitle: "Votre vie privée est notre priorité.",
      pillarsLead:
        "Cinq engagements concrets qui rendent chaque consultation sûre, humaine et 100 % anonyme.",
      pillars: [
        { title: "100 % Confidentiel", text: "Vos échanges restent strictement privés." },
        { title: "Consultation sécurisée", text: "Vidéo ou chat, chiffrés de bout en bout." },
        { title: "Aucune attente", text: "Pas de salle d'attente, connectez-vous d'un clic." },
        { title: "Aucun jugement", text: "Un espace bienveillant, sans tabou." },
        { title: "Données protégées", text: "Vos informations ne sont jamais partagées." },
      ],
      journeyEyebrow: "Un parcours simple",
      journeyTitle: "Trois étapes, pas plus.",
      steps: [
        { title: "Choisissez votre consultation", text: "Individuel, couple ou question rapide — vous décidez." },
        { title: "Remplissez un court formulaire", text: "Quelques questions pour vous orienter vers la bonne sexologue." },
        { title: "Consultez en ligne", text: "Un rendez-vous vidéo ou chat, en toute confidentialité." },
      ],
      journeyNote: "Disponible en moins de 24 h.",
      problemsEyebrow: "Nous pouvons vous aider si…",
      problemsTitleA: "Vous n'êtes ",
      problemsTitleEm: "pas",
      problemsTitleB: " seul·e face à ces situations.",
      problemsLead:
        "La plupart des personnes qui nous consultent cherchent d'abord une réponse concrète à leur quotidien — pas un mot compliqué. Nos sexologues sont formées à écouter, à normaliser, et à proposer des pistes claires.",
      problems: [
        { title: "Difficultés relationnelles", text: "Tensions, distance ou incompréhension dans le couple." },
        { title: "Stress ou anxiété liée à la sexualité", text: "Pression, peur, blocages émotionnels." },
        { title: "Questions sur la vie intime", text: "Explorer, comprendre, se sentir légitime de demander." },
        { title: "Communication dans le couple", text: "Retrouver l'écoute et la parole libre à deux." },
        { title: "Perte de confiance", text: "Retrouver l'estime de soi et sa place dans la relation." },
      ],
      talk: "En parler",
      shopEyebrow: "Boutique en ligne",
      shopTitle: "Des outils pour continuer entre les séances.",
      viewShop: "Voir la boutique",
      products: [
        { title: "Rituel bien-être", price: "34 €" },
        { title: "Guide intimité", price: "22 €" },
        { title: "Journal d'exploration", price: "18 €" },
        { title: "Cartes de dialogue", price: "26 €" },
      ],
      meetEyebrow: "Rencontrez vos sexologues",
      meetTitle: "Deux professionnelles qualifiées, une approche humaine.",
      meetText:
        "Nos sexologues sont diplômées, membres d'associations professionnelles reconnues, et formées à l'accompagnement individuel comme au couple. Chaque parcours est unique — le nôtre s'y adapte.",
      chips: ["M.A. Sexologie", "OPSQ certifiées", "10+ ans d'expérience"],
      discoverTeam: "Découvrir notre équipe",
      therapistsAlt: "Nos sexologues",
      reviews: [
        { text: "J'appréhendais énormément. La consultation s'est faite dans une écoute totale, sans jugement. Je recommande vivement.", author: "Anonyme, 34 ans" },
        { text: "Nous avons enfin osé parler. En trois séances, notre communication de couple a totalement changé.", author: "Couple anonyme" },
        { text: "Une approche douce et professionnelle. Je me suis sentie en sécurité dès la première minute.", author: "Anonyme, 41 ans" },
      ],
      faqEyebrow: "Questions fréquentes",
      faqTitleA: "Vos doutes,",
      faqTitleB: "nos réponses.",
      faqs: [
        { q: "Est-ce vraiment confidentiel ?", a: "Oui, entièrement. Nos consultations passent par une plateforme sécurisée et chiffrée. Aucune information n'est partagée avec des tiers." },
        { q: "Comment se déroule une première séance ?", a: "Vous choisissez un créneau, remplissez un court formulaire, puis rejoignez votre sexologue en vidéo. La première séance sert à faire connaissance et définir vos objectifs." },
        { q: "Faut-il être en couple pour consulter ?", a: "Non. Nous proposons des consultations individuelles comme des thérapies de couple, selon votre besoin." },
        { q: "Combien de temps dure une consultation ?", a: "Une séance standard dure 50 minutes. Un appel découverte gratuit de 10 minutes est aussi disponible." },
      ],
    },
    booking: {
      eyebrow: "un premier pas",
      titleA: "Prendre ",
      titleEm: "rendez-vous.",
      lead:
        "Quelques informations pour vous orienter vers la sexologue qui vous correspond. Confidentiel, sans engagement, sans jugement.",
      submittedTitle: "Demande envoyée.",
      submittedText:
        "Nous revenons vers vous sous 24 h avec la confirmation de votre créneau et un lien sécurisé.",
      step1Label: "Étape 1",
      step1: "Quel type de consultation ?",
      step2Label: "Étape 2",
      step2: "Format préféré",
      step3Label: "Étape 3",
      step3: "Créneau souhaité",
      step3Note: "Vous recevrez la liste complète des dates après validation.",
      step4Label: "Étape 4 — Vos coordonnées",
      firstName: "Prénom (ou pseudonyme)",
      email: "E-mail",
      note: "Souhaitez-vous partager quelque chose ? (optionnel)",
      notePh: "Aucun détail requis — quelques mots suffisent.",
      submit: "Envoyer ma demande",
      encrypted: "🔒 Vos informations sont chiffrées et jamais partagées.",
      expect: "Ce qui vous attend",
      expectations: [
        "Un formulaire court, sans questions intrusives",
        "Une confirmation par e-mail sous 24 h",
        "Un lien vidéo privé, envoyé 30 min avant la séance",
        "Aucune donnée partagée avec un tiers, jamais",
      ],
      commitments: "Nos engagements",
      commit: [
        "100 % confidentiel",
        "Vidéo chiffrée bout en bout",
        "Réponse sous 24 h",
        "Aucune donnée revendue",
      ],
      quote: "« C'est une démarche normale et fréquente. »",
      types: [
        { title: "Individuel", desc: "50 min · 120 €" },
        { title: "Couple", desc: "60 min · 150 €" },
        { title: "Appel découverte", desc: "10 min · Gratuit" },
      ],
      formats: ["Vidéo sécurisée", "Chat écrit"],
    },
    boutique: {
      eyebrow: "boutique en ligne",
      titleA: "Des outils pour continuer,",
      titleB: "entre les séances.",
      lead:
        "Guides, journaux et rituels pensés par nos sexologues pour prendre soin de vous — chez vous, à votre rythme.",
      categories: ["Tout", "Rituels", "Guides", "Journaux", "Cartes"],
      products: [
        { title: "Rituel bien-être quotidien", price: "34 €", cat: "Rituels" },
        { title: "Guide de l'intimité retrouvée", price: "22 €", cat: "Guides" },
        { title: "Journal d'exploration personnelle", price: "18 €", cat: "Journaux" },
        { title: "Cartes de dialogue en couple", price: "26 €", cat: "Cartes" },
        { title: "Rituel du soir apaisant", price: "28 €", cat: "Rituels" },
        { title: "Guide sur le désir", price: "24 €", cat: "Guides" },
        { title: "Journal d'écriture à deux", price: "20 €", cat: "Journaux" },
        { title: "Cartes d'introspection", price: "22 €", cat: "Cartes" },
      ],
      add: "Ajouter",
      featuredEyebrow: "Coffret complet",
      featuredTitleA: "Le rituel ",
      featuredTitleEm: "essentiel",
      featuredTitleB: " Evana.",
      featuredText:
        "Notre coffret signature : un guide, un journal et un jeu de cartes pour installer, semaine après semaine, un espace d'introspection à la maison.",
      addCart: "Ajouter au panier",
      shipping: "Livraison discrète et neutre",
      ctaTitle: "Besoin d'un accompagnement personnalisé ?",
      ctaDesc: "Nos outils sont conçus en complément d'une consultation, pas en remplacement.",
    },
    about: {
      eyebrow: "notre mission",
      titleA: "Prendre soin de soi,",
      titleB: "c'est aussi ",
      titleEm: "prendre soin",
      titleC: " de sa sexualité.",
      lead:
        "Deux sexologues, une mission : vous accompagner dans l'amélioration de votre bien-être personnel, relationnel et sexuel — dans le respect de qui vous êtes.",
      thEyebrow: "Vos sexologues",
      thTitle: "Deux professionnelles, deux sensibilités.",
      therapists: [
        {
          name: "Camille D.",
          role: "Sexologue clinicienne",
          creds: ["M.A. Sexologie — UQAM", "Membre OPSQ", "8 ans d'expérience"],
          bio: "Camille accompagne principalement les adultes autour de la confiance en soi, du désir et des blocages émotionnels. Son approche est douce, structurée, jamais moralisante.",
          approach: "Approche humaniste & cognitivo-comportementale",
        },
        {
          name: "Léa M.",
          role: "Sexologue & thérapeute de couple",
          creds: ["M.A. Sexologie", "Formation systémique", "12 ans d'expérience"],
          bio: "Léa se spécialise dans la thérapie de couple et la communication intime. Elle crée un cadre sécurisant où chaque voix compte à égalité.",
          approach: "Approche systémique & centrée sur l'écoute",
        },
      ],
      valuesEyebrow: "Notre approche thérapeutique",
      valuesTitle: "Ce en quoi nous croyons.",
      values: [
        { title: "Confidentialité absolue", text: "Vos échanges restent strictement privés, quoi qu'il arrive." },
        { title: "Sans jugement", text: "Un espace où chaque question, chaque ressenti, est légitime." },
        { title: "Accessibilité", text: "En ligne, sans salle d'attente, adapté à votre emploi du temps." },
        { title: "Rigueur professionnelle", text: "Sexologues diplômées, formées et membres d'associations reconnues." },
      ],
      quote: "« Prendre soin de soi, c'est prendre soin de sa sexualité dans toutes ses dimensions. »",
      quoteAuthor: "— L'équipe Evana",
      ctaTitle: "Prêt·e à faire un premier pas ?",
      ctaDesc: "Réservez un appel découverte gratuit de 10 minutes.",
    },
    services: {
      book: "Réserver une consultation",
      problemEyebrow: "Ce que vous ressentez peut-être",
      problemTitleA: "Vous n'êtes ",
      problemTitleEm: "pas",
      problemTitleB: " seul·e à traverser cela.",
      normal: "C'est une démarche normale et fréquente.",
      approach: "Notre approche",
      how: "Comment ça se passe",
      howTitle: "Un cadre simple et rassurant.",
      ctaTitle: "Un premier rendez-vous, à votre rythme.",
      ctaDesc: "Réponse sous 24 h — sans engagement, sans jugement.",
    },
    individuel: {
      eyebrow: "pour vous, individuellement",
      title: "Sexologie individuelle.",
      intro:
        "Un espace confidentiel pour comprendre, apaiser et transformer votre rapport à votre intimité — à votre rythme, sans étiquette.",
      heroAlt: "Ambiance douce et intime",
      duration: "50 minutes",
      price: "120 € / séance",
      problems: [
        "Je n'arrive pas à parler de ce que je ressens.",
        "J'ai perdu confiance en moi et en mon corps.",
        "Je vis un blocage que je ne comprends pas.",
        "J'ai des questions et personne à qui les poser.",
      ],
      solutionTitle: "Un accompagnement centré sur vous.",
      solutionText:
        "Nos sexologues vous offrent un cadre bienveillant pour explorer, comprendre et avancer. Aucune question n'est déplacée, aucun ressenti n'est jugé.",
      solutionPoints: [
        { title: "Écoute active", text: "Nous prenons le temps de comprendre votre histoire et votre contexte." },
        { title: "Pistes concrètes", text: "Des outils pratiques adaptés à votre situation, pas de théorie abstraite." },
        { title: "Suivi respectueux", text: "Le rythme est le vôtre. Une séance ou plusieurs, selon vos besoins." },
      ],
      processSteps: [
        { title: "Prise de contact", text: "Vous choisissez un créneau et remplissez un court formulaire." },
        { title: "Première rencontre", text: "Une séance vidéo de 50 min pour faire connaissance et définir vos objectifs." },
        { title: "Suivi personnalisé", text: "Nous adaptons le rythme et les outils à votre parcours." },
      ],
    },
    couples: {
      eyebrow: "pour vous, à deux",
      title: "Thérapie de couple.",
      intro:
        "Un espace neutre pour vous écouter mutuellement, sortir des malentendus et retrouver la connexion — accompagné·e·s par une sexologue formée à la médiation.",
      heroAlt: "Un couple main dans la main",
      duration: "60 minutes",
      price: "150 € / séance",
      problems: [
        "Nous ne nous comprenons plus comme avant.",
        "Notre intimité s'est éteinte peu à peu.",
        "Les mêmes disputes reviennent en boucle.",
        "Nous voulons agir avant qu'il ne soit trop tard.",
      ],
      solutionTitle: "Un tiers neutre pour rouvrir le dialogue.",
      solutionText:
        "Nous ne prenons parti pour personne. Notre rôle est de créer les conditions d'une écoute vraie, où chacun·e peut enfin être entendu·e sans se défendre.",
      solutionPoints: [
        { title: "Espace équilibré", text: "Chaque personne dispose du même temps de parole, sans interruption." },
        { title: "Outils de communication", text: "Des méthodes concrètes à réutiliser à la maison, entre les séances." },
        { title: "Objectifs communs", text: "Nous vous aidons à formuler ce que vous cherchez — ensemble." },
      ],
      processSteps: [
        { title: "Formulaire commun", text: "Vous nous partagez brièvement le contexte du couple." },
        { title: "Séance à trois", text: "60 min en vidéo, dans un cadre bienveillant et structuré." },
        { title: "Suivi à votre rythme", text: "Séances régulières ou espacées, en fonction de votre progression." },
      ],
    },
    errors: {
      notFound: "Page introuvable",
      notFoundText: "Cette page n'existe pas ou a été déplacée.",
      backHome: "Retour à l'accueil",
      generic: "Une erreur est survenue",
      genericText: "Nous n'avons pas pu charger cette page. Réessayez ou revenez à l'accueil.",
      retry: "Réessayer",
      home: "Accueil",
    },
  },
  en: {
    nav: {
      home: "Home",
      individual: "Individual",
      couples: "Couples",
      boutique: "Shop",
      about: "About",
      book: "Book an appointment",
      menu: "Menu",
      language: "Language",
    },
    common: {
      bookCta: "Book an appointment",
      available24h: "Available in under 24 h",
      notAlone: "You are not alone",
      askQuestion: "Ask a question",
      backHome: "Back to home",
      firstStepTitle: "A first step, at your pace.",
      firstStepDesc:
        "Book a free 10-minute discovery call to be matched with the sexologist that fits you.",
    },
    footer: {
      tagline:
        "Two sexologists, one mission: to support you in improving your personal, relational and sexual well-being — in full confidentiality.",
      secure: "100% confidential & secure consultations",
      navTitle: "Navigation",
      contact: "Contact",
      reply: "Reply within 24 business hours.",
      rights: "All rights reserved.",
      privacy: "Your data is protected and never shared.",
      links: {
        home: "Home",
        individual: "Individual sexology",
        couples: "Couples therapy",
        boutique: "Online shop",
        about: "About",
        book: "Book an appointment",
      },
      subtitle: "MULTIDISCIPLINARY CLINIC",
    },
    home: {
      eyebrow: "sexuality & holistic health",
      titleA: "Online sexology consultations, ",
      titleEm: "confidential",
      titleB: " and judgment-free.",
      lead:
        "Talk to a qualified sexologist from the comfort of your home. No waiting room, no judgment, no compromise on your privacy.",
      trust1: "100% Confidential",
      trust2: "Reply < 24h",
      trust3: "Secure",
      heroAlt: "Warm and soothing consultation space",
      badge1: "Book",
      badge2: "now",
      pillarsEyebrow: "Confidentiality",
      pillarsTitle: "Your privacy is our priority.",
      pillarsLead:
        "Five concrete commitments that make every consultation safe, human, and 100% anonymous.",
      pillars: [
        { title: "100% Confidential", text: "Your conversations stay strictly private." },
        { title: "Secure consultation", text: "Video or chat, end-to-end encrypted." },
        { title: "No waiting", text: "No waiting room, connect in one click." },
        { title: "No judgment", text: "A caring space, free of taboo." },
        { title: "Protected data", text: "Your information is never shared." },
      ],
      journeyEyebrow: "A simple journey",
      journeyTitle: "Three steps, no more.",
      steps: [
        { title: "Choose your consultation", text: "Individual, couple, or a quick question — you decide." },
        { title: "Fill in a short form", text: "A few questions to match you with the right sexologist." },
        { title: "Consult online", text: "A video or chat appointment, in full confidentiality." },
      ],
      journeyNote: "Available in under 24 h.",
      problemsEyebrow: "We can help you if…",
      problemsTitleA: "You are ",
      problemsTitleEm: "not",
      problemsTitleB: " alone facing these situations.",
      problemsLead:
        "Most people who consult us are first looking for a concrete answer to their daily life — not a complicated word. Our sexologists are trained to listen, to normalize, and to offer clear paths.",
      problems: [
        { title: "Relationship difficulties", text: "Tension, distance or misunderstanding in the couple." },
        { title: "Stress or anxiety around sexuality", text: "Pressure, fear, emotional blocks." },
        { title: "Questions about intimate life", text: "Explore, understand, feel free to ask." },
        { title: "Communication in the couple", text: "Rediscover listening and open speech together." },
        { title: "Loss of confidence", text: "Regain self-esteem and your place in the relationship." },
      ],
      talk: "Talk about it",
      shopEyebrow: "Online shop",
      shopTitle: "Tools to keep going between sessions.",
      viewShop: "Visit the shop",
      products: [
        { title: "Well-being ritual", price: "€34" },
        { title: "Intimacy guide", price: "€22" },
        { title: "Exploration journal", price: "€18" },
        { title: "Dialogue cards", price: "€26" },
      ],
      meetEyebrow: "Meet your sexologists",
      meetTitle: "Two qualified professionals, one human approach.",
      meetText:
        "Our sexologists are certified, members of recognized professional associations, trained for both individual and couples work. Every path is unique — ours adapts to yours.",
      chips: ["M.A. Sexology", "OPSQ certified", "10+ years of experience"],
      discoverTeam: "Meet our team",
      therapistsAlt: "Our sexologists",
      reviews: [
        { text: "I was very nervous. The consultation was full of listening, without any judgment. I strongly recommend.", author: "Anonymous, 34" },
        { text: "We finally dared to talk. In three sessions, our couple's communication completely changed.", author: "Anonymous couple" },
        { text: "A gentle and professional approach. I felt safe from the very first minute.", author: "Anonymous, 41" },
      ],
      faqEyebrow: "Frequently asked",
      faqTitleA: "Your doubts,",
      faqTitleB: "our answers.",
      faqs: [
        { q: "Is it really confidential?", a: "Yes, entirely. Our consultations run on a secure, encrypted platform. No information is ever shared with third parties." },
        { q: "How does a first session work?", a: "You pick a time slot, fill in a short form, then join your sexologist by video. The first session is about getting to know each other and setting your goals." },
        { q: "Do I have to be in a couple to book?", a: "No. We offer both individual consultations and couples therapy, depending on your needs." },
        { q: "How long does a consultation last?", a: "A standard session lasts 50 minutes. A free 10-minute discovery call is also available." },
      ],
    },
    booking: {
      eyebrow: "a first step",
      titleA: "Book an ",
      titleEm: "appointment.",
      lead:
        "A few details to match you with the sexologist that fits. Confidential, no commitment, no judgment.",
      submittedTitle: "Request sent.",
      submittedText:
        "We'll get back to you within 24 h with confirmation of your slot and a secure link.",
      step1Label: "Step 1",
      step1: "What type of consultation?",
      step2Label: "Step 2",
      step2: "Preferred format",
      step3Label: "Step 3",
      step3: "Preferred slot",
      step3Note: "You'll receive the full list of available dates after validation.",
      step4Label: "Step 4 — Your details",
      firstName: "First name (or pseudonym)",
      email: "Email",
      note: "Anything you'd like to share? (optional)",
      notePh: "No detail required — a few words are enough.",
      submit: "Send my request",
      encrypted: "🔒 Your information is encrypted and never shared.",
      expect: "What to expect",
      expectations: [
        "A short form, no intrusive questions",
        "Email confirmation within 24 h",
        "A private video link, sent 30 min before the session",
        "No data ever shared with any third party",
      ],
      commitments: "Our commitments",
      commit: [
        "100% confidential",
        "End-to-end encrypted video",
        "Reply within 24 h",
        "No data ever resold",
      ],
      quote: "\"It's a normal and common step to take.\"",
      types: [
        { title: "Individual", desc: "50 min · €120" },
        { title: "Couple", desc: "60 min · €150" },
        { title: "Discovery call", desc: "10 min · Free" },
      ],
      formats: ["Secure video", "Written chat"],
    },
    boutique: {
      eyebrow: "online shop",
      titleA: "Tools to keep going,",
      titleB: "between sessions.",
      lead:
        "Guides, journals and rituals designed by our sexologists to take care of yourself — at home, at your pace.",
      categories: ["All", "Rituals", "Guides", "Journals", "Cards"],
      products: [
        { title: "Daily well-being ritual", price: "€34", cat: "Rituals" },
        { title: "Guide to rediscovered intimacy", price: "€22", cat: "Guides" },
        { title: "Personal exploration journal", price: "€18", cat: "Journals" },
        { title: "Couples dialogue cards", price: "€26", cat: "Cards" },
        { title: "Soothing evening ritual", price: "€28", cat: "Rituals" },
        { title: "Guide on desire", price: "€24", cat: "Guides" },
        { title: "Journal to write together", price: "€20", cat: "Journals" },
        { title: "Introspection cards", price: "€22", cat: "Cards" },
      ],
      add: "Add",
      featuredEyebrow: "Complete set",
      featuredTitleA: "The ",
      featuredTitleEm: "essential",
      featuredTitleB: " Evana ritual.",
      featuredText:
        "Our signature box: a guide, a journal and a set of cards to build, week after week, a space for introspection at home.",
      addCart: "Add to cart",
      shipping: "Discreet and neutral delivery",
      ctaTitle: "Need personalized support?",
      ctaDesc: "Our tools are designed to complement a consultation, not replace it.",
    },
    about: {
      eyebrow: "our mission",
      titleA: "Caring for yourself,",
      titleB: "also means ",
      titleEm: "caring",
      titleC: " for your sexuality.",
      lead:
        "Two sexologists, one mission: to support you in improving your personal, relational and sexual well-being — with full respect for who you are.",
      thEyebrow: "Your sexologists",
      thTitle: "Two professionals, two sensibilities.",
      therapists: [
        {
          name: "Camille D.",
          role: "Clinical sexologist",
          creds: ["M.A. Sexology — UQAM", "OPSQ member", "8 years of experience"],
          bio: "Camille mainly works with adults around self-confidence, desire and emotional blocks. Her approach is gentle, structured, never moralizing.",
          approach: "Humanistic & cognitive-behavioral approach",
        },
        {
          name: "Léa M.",
          role: "Sexologist & couples therapist",
          creds: ["M.A. Sexology", "Systemic training", "12 years of experience"],
          bio: "Léa specializes in couples therapy and intimate communication. She creates a safe space where every voice counts equally.",
          approach: "Systemic approach focused on listening",
        },
      ],
      valuesEyebrow: "Our therapeutic approach",
      valuesTitle: "What we believe in.",
      values: [
        { title: "Absolute confidentiality", text: "Your conversations stay strictly private, no matter what." },
        { title: "No judgment", text: "A space where every question, every feeling, is legitimate." },
        { title: "Accessibility", text: "Online, no waiting room, adapted to your schedule." },
        { title: "Professional rigor", text: "Certified sexologists, trained and members of recognized associations." },
      ],
      quote: "\"Caring for yourself means caring for your sexuality in all its dimensions.\"",
      quoteAuthor: "— The Evana team",
      ctaTitle: "Ready to take a first step?",
      ctaDesc: "Book a free 10-minute discovery call.",
    },
    services: {
      book: "Book a consultation",
      problemEyebrow: "What you may be feeling",
      problemTitleA: "You are ",
      problemTitleEm: "not",
      problemTitleB: " alone going through this.",
      normal: "It's a normal and common step to take.",
      approach: "Our approach",
      how: "How it works",
      howTitle: "A simple, reassuring frame.",
      ctaTitle: "A first appointment, at your pace.",
      ctaDesc: "Reply within 24 h — no commitment, no judgment.",
    },
    individuel: {
      eyebrow: "for you, individually",
      title: "Individual sexology.",
      intro:
        "A confidential space to understand, soothe and transform your relationship with intimacy — at your pace, without labels.",
      heroAlt: "Soft, intimate atmosphere",
      duration: "50 minutes",
      price: "€120 / session",
      problems: [
        "I can't talk about what I feel.",
        "I've lost confidence in myself and my body.",
        "I'm going through a block I don't understand.",
        "I have questions and no one to ask.",
      ],
      solutionTitle: "Support centered on you.",
      solutionText:
        "Our sexologists offer a caring space to explore, understand and move forward. No question is out of place, no feeling is judged.",
      solutionPoints: [
        { title: "Active listening", text: "We take the time to understand your story and context." },
        { title: "Concrete steps", text: "Practical tools tailored to your situation — no abstract theory." },
        { title: "Respectful follow-up", text: "You set the pace. One session or several, as you need." },
      ],
      processSteps: [
        { title: "Getting in touch", text: "Pick a slot and fill in a short form." },
        { title: "First meeting", text: "A 50-min video session to meet and define your goals." },
        { title: "Personalized follow-up", text: "We adapt pace and tools to your path." },
      ],
    },
    couples: {
      eyebrow: "for you, together",
      title: "Couples therapy.",
      intro:
        "A neutral space to truly listen to each other, move past misunderstandings and reconnect — with a sexologist trained in mediation.",
      heroAlt: "A couple holding hands",
      duration: "60 minutes",
      price: "€150 / session",
      problems: [
        "We don't understand each other like before.",
        "Our intimacy has slowly faded.",
        "The same arguments keep coming back.",
        "We want to act before it's too late.",
      ],
      solutionTitle: "A neutral third party to reopen dialogue.",
      solutionText:
        "We don't take sides. Our role is to create conditions for real listening, where each person can finally be heard without defending themselves.",
      solutionPoints: [
        { title: "Balanced space", text: "Each person gets equal speaking time, without interruption." },
        { title: "Communication tools", text: "Concrete methods to reuse at home, between sessions." },
        { title: "Shared goals", text: "We help you name what you're looking for — together." },
      ],
      processSteps: [
        { title: "Shared form", text: "You briefly share the couple's context with us." },
        { title: "Three-way session", text: "60 min video, in a caring and structured frame." },
        { title: "Follow-up at your pace", text: "Regular or spaced sessions, based on your progress." },
      ],
    },
    errors: {
      notFound: "Page not found",
      notFoundText: "This page doesn't exist or has been moved.",
      backHome: "Back to home",
      generic: "Something went wrong",
      genericText: "We couldn't load this page. Try again or return home.",
      retry: "Try again",
      home: "Home",
    },
  },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <T = any>(path: string) => T;
}

const LangCtx = createContext<Ctx | null>(null);

function get(obj: any, path: string): any {
  return path.split(".").reduce((acc, k) => (acc == null ? acc : acc[k]), obj);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "fr" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      if (typeof document !== "undefined") document.documentElement.lang = lang;
    } catch {}
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const t = <T,>(path: string): T => {
    const val = get(translations[lang], path);
    return (val === undefined ? (get(translations.fr, path) as T) : (val as T));
  };

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export function useT() {
  return useLang().t;
}

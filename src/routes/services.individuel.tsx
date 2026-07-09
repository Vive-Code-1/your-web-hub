import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/individual-hero.jpg";

export const Route = createFileRoute("/services/individuel")({
  head: () => ({
    meta: [
      { title: "Sexologie individuelle — Evana Clinique" },
      {
        name: "description",
        content:
          "Consultations individuelles en sexologie en ligne. Écoute, sans jugement, en toute confidentialité.",
      },
      { property: "og:title", content: "Sexologie individuelle — Evana Clinique" },
      { property: "og:url", content: "/services/individuel" },
    ],
    links: [{ rel: "canonical", href: "/services/individuel" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="pour vous, individuellement"
      title="Sexologie individuelle."
      intro="Un espace confidentiel pour comprendre, apaiser et transformer votre rapport à votre intimité — à votre rythme, sans étiquette."
      heroImage={img}
      heroAlt="Ambiance douce et intime"
      duration="50 minutes"
      price="120 € / séance"
      problems={[
        "Je n'arrive pas à parler de ce que je ressens.",
        "J'ai perdu confiance en moi et en mon corps.",
        "Je vis un blocage que je ne comprends pas.",
        "J'ai des questions et personne à qui les poser.",
      ]}
      solutionTitle="Un accompagnement centré sur vous."
      solutionText="Nos sexologues vous offrent un cadre bienveillant pour explorer, comprendre et avancer. Aucune question n'est déplacée, aucun ressenti n'est jugé."
      solutionPoints={[
        {
          title: "Écoute active",
          text: "Nous prenons le temps de comprendre votre histoire et votre contexte.",
        },
        {
          title: "Pistes concrètes",
          text: "Des outils pratiques adaptés à votre situation, pas de théorie abstraite.",
        },
        {
          title: "Suivi respectueux",
          text: "Le rythme est le vôtre. Une séance ou plusieurs, selon vos besoins.",
        },
      ]}
      processSteps={[
        {
          n: "01",
          title: "Prise de contact",
          text: "Vous choisissez un créneau et remplissez un court formulaire.",
        },
        {
          n: "02",
          title: "Première rencontre",
          text: "Une séance vidéo de 50 min pour faire connaissance et définir vos objectifs.",
        },
        {
          n: "03",
          title: "Suivi personnalisé",
          text: "Nous adaptons le rythme et les outils à votre parcours.",
        },
      ]}
    />
  ),
});

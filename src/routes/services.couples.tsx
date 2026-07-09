import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/couples-hero.jpg";

export const Route = createFileRoute("/services/couples")({
  head: () => ({
    meta: [
      { title: "Thérapie de couple — Evana Clinique" },
      {
        name: "description",
        content:
          "Thérapie de couple en sexologie en ligne. Retrouver la communication, l'intimité et la complicité — ensemble.",
      },
      { property: "og:title", content: "Thérapie de couple — Evana Clinique" },
      { property: "og:url", content: "/services/couples" },
    ],
    links: [{ rel: "canonical", href: "/services/couples" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="pour vous, à deux"
      title="Thérapie de couple."
      intro="Un espace neutre pour vous écouter mutuellement, sortir des malentendus et retrouver la connexion — accompagné·e·s par une sexologue formée à la médiation."
      heroImage={img}
      heroAlt="Un couple main dans la main"
      duration="60 minutes"
      price="150 € / séance"
      problems={[
        "Nous ne nous comprenons plus comme avant.",
        "Notre intimité s'est éteinte peu à peu.",
        "Les mêmes disputes reviennent en boucle.",
        "Nous voulons agir avant qu'il ne soit trop tard.",
      ]}
      solutionTitle="Un tiers neutre pour rouvrir le dialogue."
      solutionText="Nous ne prenons parti pour personne. Notre rôle est de créer les conditions d'une écoute vraie, où chacun·e peut enfin être entendu·e sans se défendre."
      solutionPoints={[
        {
          title: "Espace équilibré",
          text: "Chaque personne dispose du même temps de parole, sans interruption.",
        },
        {
          title: "Outils de communication",
          text: "Des méthodes concrètes à réutiliser à la maison, entre les séances.",
        },
        {
          title: "Objectifs communs",
          text: "Nous vous aidons à formuler ce que vous cherchez — ensemble.",
        },
      ]}
      processSteps={[
        {
          n: "01",
          title: "Formulaire commun",
          text: "Vous nous partagez brièvement le contexte du couple.",
        },
        {
          n: "02",
          title: "Séance à trois",
          text: "60 min en vidéo, dans un cadre bienveillant et structuré.",
        },
        {
          n: "03",
          title: "Suivi à votre rythme",
          text: "Séances régulières ou espacées, en fonction de votre progression.",
        },
      ]}
    />
  ),
});

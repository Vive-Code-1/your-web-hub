import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/individual-hero.jpg";

export const Route = createFileRoute("/services/individuel")({
  head: () => ({
    meta: [
      { title: "Sexologie individuelle — Evana Clinique" },
      {
        name: "description",
        content: "Consultations individuelles en sexologie en ligne. Écoute, sans jugement, en toute confidentialité.",
      },
      { property: "og:title", content: "Sexologie individuelle — Evana Clinique" },
      { property: "og:url", content: "/services/individuel" },
    ],
    links: [{ rel: "canonical", href: "/services/individuel" }],
  }),
  component: () => <ServicePage ns="individuel" heroImage={img} />,
});

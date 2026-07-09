import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/couples-hero.jpg";

export const Route = createFileRoute("/services/couples")({
  head: () => ({
    meta: [
      { title: "Thérapie de couple — Evana Clinique" },
      {
        name: "description",
        content: "Thérapie de couple en sexologie en ligne. Retrouver la communication, l'intimité et la complicité — ensemble.",
      },
      { property: "og:title", content: "Thérapie de couple — Evana Clinique" },
      { property: "og:url", content: "/services/couples" },
    ],
    links: [{ rel: "canonical", href: "/services/couples" }],
  }),
  component: () => <ServicePage ns="couples" heroImage={img} />,
});

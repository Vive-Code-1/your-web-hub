import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, Shield01Icon } from "@hugeicons/core-free-icons";
import { CTABand } from "@/components/site/CTABand";
import { products } from "@/lib/products";

export const Route = createFileRoute("/boutique")({
  head: () => ({
    meta: [
      { title: "Banque d'outils — Evana Clinique" },
      {
        name: "description",
        content:
          "Notre banque d'outils gratuits et payants pour cheminer entre vos rencontres : fiches, guides, jeux et exercices en sexologie et bien-être relationnel.",
      },
      { property: "og:title", content: "Banque d'outils — Evana Clinique" },
      { property: "og:url", content: "/boutique" },
    ],
    links: [{ rel: "canonical", href: "/boutique" }],
  }),
  component: BoutiquePage,
});

const categories = ["Tout", "Relationnel", "Sexualité", "Financier", "Corps"] as const;

function BoutiquePage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Tout");
  const [tab, setTab] = useState<"free" | "paid">("free");

  const visible = products.filter((p) => {
    if (tab === "free" && p.paid) return false;
    if (tab === "paid" && !p.paid) return false;
    if (cat !== "Tout" && p.category !== cat) return false;
    return true;
  });

  return (
    <>
      <section className="gradient-warm px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="script text-2xl text-foreground/60">notre banque d'outils</p>
          <h1 className="mt-3 text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
            Des <em className="italic">outils concrets</em> <br />pour cheminer à votre rythme.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Fiches, guides et exercices pensés par nos sexologues. Certains sont gratuits, d'autres
            payants — tous sont conçus pour vous accompagner entre vos rencontres.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-xs italic text-muted-foreground">
            * Ces outils sont mis à votre disposition pour un usage personnel uniquement. Leur contenu
            demeure la propriété intellectuelle d'Evana Clinique et ne peut être reproduit, diffusé ou
            utilisé à des fins commerciales sans autorisation préalable.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex rounded-full border border-border bg-background p-1">
            <button
              onClick={() => setTab("free")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                tab === "free" ? "bg-primary text-primary-foreground" : "text-foreground/70"
              }`}
            >
              Outils gratuits
            </button>
            <button
              onClick={() => setTab("paid")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                tab === "paid" ? "bg-primary text-primary-foreground" : "text-foreground/70"
              }`}
            >
              Outils payants
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-5 py-2 text-sm transition ${
                  cat === c
                    ? "border-foreground bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:border-foreground/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <Link
                key={p.slug}
                to="/produits/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-accent/40 p-6">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground">
                    {p.category}
                  </span>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl leading-tight text-foreground">{p.title}</h3>
                  <span className="whitespace-nowrap text-sm font-medium text-foreground">
                    {p.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {p.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:gap-2 transition-all">
                  Voir l'outil <HugeiconsIcon icon={ArrowRight02Icon} size={14} />
                </span>
              </Link>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="mt-16 text-center text-muted-foreground">
              Aucun outil dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>

      <section className="bg-muted/60 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-4xl items-center gap-4 text-sm text-muted-foreground">
          <HugeiconsIcon icon={Shield01Icon} size={20} />
          <p>
            Tous nos outils sont conçus en complément d'un suivi sexologique, jamais en remplacement
            d'un accompagnement professionnel.
          </p>
        </div>
      </section>

      <CTABand
        title="Besoin d'un accompagnement personnalisé ?"
        description="Nos outils sont conçus en complément d'une consultation, pas en remplacement."
      />

    </>
  );
}

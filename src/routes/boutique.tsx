import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/site/CTABand";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

export const Route = createFileRoute("/boutique")({
  head: () => ({
    meta: [
      { title: "Boutique en ligne — Evana Clinique" },
      {
        name: "description",
        content:
          "Outils, guides et rituels pour prendre soin de votre bien-être intime, entre les séances.",
      },
      { property: "og:title", content: "Boutique — Evana Clinique" },
      { property: "og:url", content: "/boutique" },
    ],
    links: [{ rel: "canonical", href: "/boutique" }],
  }),
  component: BoutiquePage,
});

const categories = ["Tout", "Rituels", "Guides", "Journaux", "Cartes"];

const products = [
  { img: product1, title: "Rituel bien-être quotidien", price: "34 €", cat: "Rituels" },
  { img: product2, title: "Guide de l'intimité retrouvée", price: "22 €", cat: "Guides" },
  { img: product3, title: "Journal d'exploration personnelle", price: "18 €", cat: "Journaux" },
  { img: product4, title: "Cartes de dialogue en couple", price: "26 €", cat: "Cartes" },
  { img: product1, title: "Rituel du soir apaisant", price: "28 €", cat: "Rituels" },
  { img: product2, title: "Guide sur le désir", price: "24 €", cat: "Guides" },
  { img: product3, title: "Journal d'écriture à deux", price: "20 €", cat: "Journaux" },
  { img: product4, title: "Cartes d'introspection", price: "22 €", cat: "Cartes" },
];

function BoutiquePage() {
  const [cat, setCat] = useState("Tout");
  const visible = cat === "Tout" ? products : products.filter((p) => p.cat === cat);

  return (
    <>
      <section className="gradient-warm px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="script text-2xl text-foreground/60">boutique en ligne</p>
          <h1 className="mt-3 text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
            Des outils pour continuer,<br /> entre les séances.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Guides, journaux et rituels pensés par nos sexologues pour prendre
            soin de vous — chez vous, à votre rythme.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
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

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((p, i) => (
              <div key={`${p.title}-${i}`} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <button
                    aria-label="Ajouter"
                    className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-elegant transition-opacity group-hover:opacity-100"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="text-lg text-foreground">{p.title}</h3>
                  <span className="text-sm font-medium text-foreground">{p.price}</span>
                </div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {p.cat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-muted/60 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] bg-accent p-8 md:grid-cols-2 md:items-center md:p-14">
          <div className="arch-frame aspect-[4/5] shadow-elegant">
            <img src={product2} alt="Coffret" className="h-full w-full object-cover" width={800} height={1000} loading="lazy" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
              Coffret complet
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              Le rituel <em className="italic">essentiel</em> Evana.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/75">
              Notre coffret signature : un guide, un journal et un jeu de
              cartes pour installer, semaine après semaine, un espace
              d'introspection à la maison.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="font-display text-3xl text-foreground">64 €</span>
              <Button className="rounded-full px-6">Ajouter au panier</Button>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-foreground/70">
              <ShieldCheck className="h-4 w-4" /> Livraison discrète et neutre
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Besoin d'un accompagnement personnalisé ?"
        description="Nos outils sont conçus en complément d'une consultation, pas en remplacement."
        primaryLabel="Prendre rendez-vous"
      />
    </>
  );
}

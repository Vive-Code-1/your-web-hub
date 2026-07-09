import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  Download04Icon,
  CheckmarkCircle02Icon,
  ShoppingCart02Icon,
  Shield01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/site/CTABand";
import { products, getProduct, useLocalizedProduct, useLocalizedProducts } from "@/lib/products";
import { useL } from "@/lib/i18n";

export const Route = createFileRoute("/produits/$slug")({
  head: ({ params, loaderData }) => {
    const p = loaderData ?? getProduct(params.slug);
    if (!p) {
      return { meta: [{ title: "Outil introuvable — Evana Clinique" }] };
    }
    return {
      meta: [
        { title: `${p.title} — Banque d'outils Evana` },
        { name: "description", content: p.short },
        { property: "og:title", content: `${p.title} — Evana Clinique` },
        { property: "og:description", content: p.short },
        { property: "og:image", content: p.image },
      ],
    };
  },
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return p;
  },
  notFoundComponent: NotFoundProduct,
  component: ProductPage,
});

function NotFoundProduct() {
  const l = useL();
  return (
    <section className="px-5 py-32 text-center">
      <h1 className="font-display text-4xl text-foreground">
        {l({ fr: "Outil introuvable", en: "Tool not found" })}
      </h1>
      <p className="mt-4 text-muted-foreground">
        {l({
          fr: "Cet outil n'existe pas ou a été retiré.",
          en: "This tool doesn't exist or has been removed.",
        })}
      </p>
      <Button asChild className="mt-8 rounded-full">
        <Link to="/boutique">
          {l({ fr: "Retour à la banque d'outils", en: "Back to the tool bank" })}
        </Link>
      </Button>
    </section>
  );
}

function ProductPage() {
  const l = useL();
  const loaderProduct = Route.useLoaderData();
  const localized = useLocalizedProduct(loaderProduct.slug);
  const product = localized ?? loaderProduct;
  const allLocalized = useLocalizedProducts();
  const related = allLocalized
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);

  return (
    <>
      <section className="px-5 pb-6 pt-8 md:px-8 md:pt-12">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/boutique"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <HugeiconsIcon icon={ArrowLeft02Icon} size={14} />
            {l({ fr: "Retour à la banque d'outils", en: "Back to the tool bank" })}
          </Link>
        </div>
      </section>

      <section className="px-5 pb-16 pt-4 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
          <div className="rounded-[2rem] bg-accent/40 p-8 md:p-14">
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto h-auto w-full max-w-md object-contain"
              width={800}
              height={800}
            />
          </div>
          <div>
            <span className="rounded-full border border-border bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground">
              {product.categoryLabel}
            </span>
            <h1 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
              {product.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{product.short}</p>

            <div className="mt-8 flex items-center gap-4">
              <span className="font-display text-3xl text-foreground">{product.price}</span>
              {!product.paid && (
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-foreground">
                  {l({ fr: "Outil gratuit", en: "Free tool" })}
                </span>
              )}
            </div>

            <div className="mt-6">
              {product.paid ? (
                <Button size="lg" className="rounded-full px-8 py-6 text-base">
                  <HugeiconsIcon icon={ShoppingCart02Icon} size={16} className="mr-2" />
                  {l({ fr: "Ajouter au panier", en: "Add to cart" })}
                </Button>
              ) : (
                <Button size="lg" className="rounded-full px-8 py-6 text-base">
                  <HugeiconsIcon icon={Download04Icon} size={16} className="mr-2" />
                  {l({ fr: "Télécharger le PDF", en: "Download the PDF" })}
                </Button>
              )}
            </div>

            <div className="mt-8 space-y-3">
              {product.details.map((d: string) => (
                <div key={d} className="flex items-start gap-3 text-sm text-foreground/85">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} className="mt-0.5 flex-none" />
                  <span>{d}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-muted/40 p-4 text-xs text-muted-foreground">
              <HugeiconsIcon icon={Shield01Icon} size={16} className="mt-0.5 flex-none" />
              <p>
                {l({
                  fr: "Usage personnel uniquement. Le contenu demeure la propriété intellectuelle d'Evana Clinique et ne peut être reproduit ou diffusé sans autorisation.",
                  en: "Personal use only. The content remains the intellectual property of Evana Clinique and may not be reproduced or distributed without authorisation.",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/60 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl text-foreground md:text-4xl">
            {l({ fr: "Description", en: "Description" })}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/85 md:text-lg">
            {product.description}
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              {l({ fr: "Autres outils similaires", en: "Other similar tools" })}
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/produits/$slug"
                  params={{ slug: p.slug }}
                  className="group flex flex-col"
                >
                  <div className="aspect-square overflow-hidden rounded-3xl bg-accent/40 p-6">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg text-foreground">{p.title}</h3>
                    <span className="text-sm font-medium text-foreground">{p.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        title={l({ fr: "Une question sur cet outil ?", en: "A question about this tool?" })}
        description={l({
          fr: "Prenez rendez-vous avec une de nos sexologues pour un accompagnement personnalisé.",
          en: "Book with one of our sexologists for personalised support.",
        })}
      />
    </>
  );
}

// unused import guard
export const __unused = products;

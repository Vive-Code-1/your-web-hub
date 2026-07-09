import { createFileRoute, Link } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  LockPasswordIcon,
  VideoReplayIcon,
  Clock01Icon,
  HandshakeIcon,
  Shield01Icon,
  ArrowRight02Icon,
  StarIcon,
  Message02Icon,
  HeartCrackIcon,
  BrainIcon,
  BubbleChatIcon,
  ConversationIcon,
  UserQuestion02Icon,
  ShoppingBag03Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { useLocalizedProduct } from "@/lib/products";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTABand } from "@/components/site/CTABand";
import { useT, useL } from "@/lib/i18n";
import { JANE_BOOK_URL } from "@/lib/links";
import heroImage from "@/assets/hero-interior.jpg";
import therapistsAsset from "@/assets/team-duo-1.avif.asset.json";
const therapistsImage = therapistsAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evana Clinique — Sexologie en ligne, confidentielle & sans jugement" },
      {
        name: "description",
        content:
          "Parlez à un·e sexologue qualifié·e depuis chez vous. Consultations en ligne 100 % confidentielles, sécurisées et sans jugement. Rendez-vous en moins de 24 h.",
      },
      { property: "og:title", content: "Evana Clinique — Sexologie en ligne" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const pillarIcons = [LockPasswordIcon, VideoReplayIcon, Clock01Icon, HandshakeIcon, Shield01Icon];
const problemIcons = [HeartCrackIcon, BrainIcon, UserQuestion02Icon, BubbleChatIcon, ConversationIcon];

function HomePage() {
  const t = useT();
  const pillars = t<Array<{ title: string; text: string }>>("home.pillars");
  const steps = t<Array<{ title: string; text: string }>>("home.steps");
  const problems = t<Array<{ title: string; text: string }>>("home.problems");
  const reviews = t<Array<{ text: string; author: string }>>("home.reviews");
  const faqs = t<Array<{ q: string; a: string }>>("home.faqs");
  const chips = t<string[]>("home.chips");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <p className="script text-2xl text-foreground/60">{t<string>("home.eyebrow")}</p>
            <h1 className="mt-4 text-[2.5rem] leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-[4.25rem]">
              {t<string>("home.titleA")}
              <em className="italic text-foreground/70">{t<string>("home.titleEm")}</em>
              {t<string>("home.titleB")}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t<string>("home.lead")}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-base">
                <a href={JANE_BOOK_URL} target="_blank" rel="noopener noreferrer">
                  {t<string>("common.bookCta")} <HugeiconsIcon icon={ArrowRight02Icon} size={16} className="ml-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-foreground/20 bg-transparent px-8 py-6 text-base"
              >
                <a href="mailto:info@evanaclinique.com?subject=Question">
                  {t<string>("common.askQuestion")}
                </a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2"><HugeiconsIcon icon={LockPasswordIcon} size={14} /> {t<string>("home.trust1")}</span>
              <span className="flex items-center gap-2"><HugeiconsIcon icon={Clock01Icon} size={14} /> {t<string>("home.trust2")}</span>
              <span className="flex items-center gap-2"><HugeiconsIcon icon={Shield01Icon} size={14} /> {t<string>("home.trust3")}</span>
            </div>
          </div>

          <div className="relative">
            <div className="arch-frame relative aspect-[4/5] w-full shadow-elegant">
              <img
                src={heroImage}
                alt={t<string>("home.heroAlt")}
                className="h-full w-full object-cover"
                width={1600}
                height={1200}
              />
            </div>
            <div className="absolute -right-4 top-8 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-ivory text-center text-[11px] font-semibold uppercase tracking-widest text-foreground shadow-soft md:-right-8 md:h-40 md:w-40 md:text-xs">
              <span>{t<string>("home.badge1")}</span>
              <span>{t<string>("home.badge2")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIDENTIALITY PILLAR */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-accent px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
              {t<string>("home.pillarsEyebrow")}
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              {t<string>("home.pillarsTitle")}
            </h2>
            <p className="mt-4 text-base text-foreground/70">{t<string>("home.pillarsLead")}</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p, i) => (
              <div key={p.title} className="flex flex-col items-start rounded-2xl bg-background/80 p-6 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <HugeiconsIcon icon={pillarIcons[i]} size={20} />
                </div>
                <h3 className="mt-5 text-lg text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-STEP JOURNEY */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t<string>("home.journeyEyebrow")}
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              {t<string>("home.journeyTitle")}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-elegant"
              >
                <span className="font-display text-6xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            💡 <em className="text-foreground">{t<string>("home.journeyNote")}</em>
          </p>
        </div>
      </section>

      {/* PROBLEM-FOCUSED */}
      <section className="bg-muted/60 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t<string>("home.problemsEyebrow")}
              </p>
              <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
                {t<string>("home.problemsTitleA")}
                <em className="italic">{t<string>("home.problemsTitleEm")}</em>
                {t<string>("home.problemsTitleB")}
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">{t<string>("home.problemsLead")}</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
              <div
                key={p.title}
                className="group flex flex-col justify-between rounded-3xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-foreground">
                    <HugeiconsIcon icon={problemIcons[i]} size={20} />
                  </div>
                  <h3 className="mt-5 text-xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
                <a
                  href={JANE_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:gap-2 transition-all"
                >
                  {t<string>("home.talk")} <HugeiconsIcon icon={ArrowRight02Icon} size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <FeaturedProduct />

      {/* TRUST & SOCIAL PROOF */}
      <section className="bg-muted/60 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="arch-frame relative aspect-[4/5] max-w-md shadow-elegant">
              <img
                src={therapistsImage}
                alt={t<string>("home.therapistsAlt")}
                loading="lazy"
                width={1400}
                height={1400}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t<string>("home.meetEyebrow")}
              </p>
              <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
                {t<string>("home.meetTitle")}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {t<string>("home.meetText")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {chips.map((c) => (
                  <span key={c} className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground">
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild variant="link" className="h-auto p-0 text-foreground">
                  <Link to="/nos-professionnelles">
                    {t<string>("home.discoverTeam")} <HugeiconsIcon icon={ArrowRight02Icon} size={14} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.author} className="rounded-3xl bg-background p-8 shadow-soft">
                <div className="flex gap-1 text-foreground">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <HugeiconsIcon key={i} icon={StarIcon} size={14} />
                  ))}
                </div>
                <p className="mt-5 text-base italic leading-relaxed text-foreground/85">« {r.text} »</p>
                <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">{r.author}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-24 grid gap-10 md:grid-cols-[1fr_1.5fr]">
            <div>
              <HugeiconsIcon icon={Message02Icon} size={24} />
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t<string>("home.faqEyebrow")}
              </p>
              <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
                {t<string>("home.faqTitleA")}<br /> {t<string>("home.faqTitleB")}
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-border">
                  <AccordionTrigger className="text-left text-lg text-foreground hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTABand
        title={t<string>("common.firstStepTitle")}
        description={t<string>("common.firstStepDesc")}
      />
    </>
  );
}

function FeaturedProduct() {
  const l = useL();
  const product = useLocalizedProduct("entretenons-notre-seduction");
  if (!product) return null;
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] gradient-warm">
        <div className="grid gap-10 p-8 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16 md:p-14">
          <div className="relative">
            <span className="absolute left-4 top-4 z-10 rounded-full bg-foreground px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-background">
              {l({ fr: "Nouveauté · Édition limitée", en: "New · Limited edition" })}
            </span>
            <div className="rounded-[2rem] bg-background/70 p-8 shadow-elegant md:p-12">
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                width={900}
                height={900}
                className="mx-auto h-auto w-full max-w-md object-contain transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          <div>
            <p className="script text-2xl text-foreground/60">
              {l({ fr: "notre outil signature", en: "our signature tool" })}
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-foreground md:text-5xl">
              {product.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {product.description}
            </p>
            <ul className="mt-6 space-y-2">
              {product.details.slice(0, 4).map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-foreground/85">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} className="mt-0.5 flex-none" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <span className="font-display text-4xl text-foreground">{product.price}</span>
              <span className="rounded-full border border-foreground/20 bg-background/60 px-3 py-1 text-xs font-medium text-foreground">
                {l({ fr: "Livraison numérique immédiate", en: "Instant digital delivery" })}
              </span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-base">
                <Link to="/produits/$slug" params={{ slug: product.slug }}>
                  <HugeiconsIcon icon={ShoppingBag03Icon} size={16} className="mr-2" />
                  {l({ fr: "Je le veux", en: "I want it" })}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-foreground/20 bg-transparent px-8 py-6 text-base"
              >
                <Link to="/boutique">
                  {l({ fr: "Voir la boutique", en: "View the shop" })}{" "}
                  <HugeiconsIcon icon={ArrowRight02Icon} size={14} className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


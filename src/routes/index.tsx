import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Lock,
  Video,
  Clock,
  Handshake,
  ShieldCheck,
  ArrowRight,
  Star,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTABand } from "@/components/site/CTABand";
import heroImage from "@/assets/hero-interior.jpg";
import therapistsImage from "@/assets/therapists.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

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

const pillars = [
  { icon: Lock, title: "100 % Confidentiel", text: "Vos échanges restent strictement privés." },
  { icon: Video, title: "Consultation sécurisée", text: "Vidéo ou chat, chiffrés de bout en bout." },
  { icon: Clock, title: "Aucune attente", text: "Pas de salle d'attente, connectez-vous d'un clic." },
  { icon: Handshake, title: "Aucun jugement", text: "Un espace bienveillant, sans tabou." },
  { icon: ShieldCheck, title: "Données protégées", text: "Vos informations ne sont jamais partagées." },
];

const steps = [
  {
    n: "01",
    title: "Choisissez votre consultation",
    text: "Individuel, couple ou question rapide — vous décidez.",
  },
  {
    n: "02",
    title: "Remplissez un court formulaire",
    text: "Quelques questions pour vous orienter vers la bonne sexologue.",
  },
  {
    n: "03",
    title: "Consultez en ligne",
    text: "Un rendez-vous vidéo ou chat, en toute confidentialité.",
  },
];

const problems = [
  { title: "Difficultés relationnelles", text: "Tensions, distance ou incompréhension dans le couple." },
  { title: "Stress ou anxiété liée à la sexualité", text: "Pression, peur, blocages émotionnels." },
  { title: "Questions sur la vie intime", text: "Explorer, comprendre, se sentir légitime de demander." },
  { title: "Communication dans le couple", text: "Retrouver l'écoute et la parole libre à deux." },
  { title: "Perte de confiance", text: "Retrouver l'estime de soi et sa place dans la relation." },
];

const products = [
  { img: product1, title: "Rituel bien-être", price: "34 €" },
  { img: product2, title: "Guide intimité", price: "22 €" },
  { img: product3, title: "Journal d'exploration", price: "18 €" },
  { img: product4, title: "Cartes de dialogue", price: "26 €" },
];

const reviews = [
  {
    text: "J'appréhendais énormément. La consultation s'est faite dans une écoute totale, sans jugement. Je recommande vivement.",
    author: "Anonyme, 34 ans",
  },
  {
    text: "Nous avons enfin osé parler. En trois séances, notre communication de couple a totalement changé.",
    author: "Couple anonyme",
  },
  {
    text: "Une approche douce et professionnelle. Je me suis sentie en sécurité dès la première minute.",
    author: "Anonyme, 41 ans",
  },
];

const faqs = [
  {
    q: "Est-ce vraiment confidentiel ?",
    a: "Oui, entièrement. Nos consultations passent par une plateforme sécurisée et chiffrée. Aucune information n'est partagée avec des tiers.",
  },
  {
    q: "Comment se déroule une première séance ?",
    a: "Vous choisissez un créneau, remplissez un court formulaire, puis rejoignez votre sexologue en vidéo. La première séance sert à faire connaissance et définir vos objectifs.",
  },
  {
    q: "Faut-il être en couple pour consulter ?",
    a: "Non. Nous proposons des consultations individuelles comme des thérapies de couple, selon votre besoin.",
  },
  {
    q: "Combien de temps dure une consultation ?",
    a: "Une séance standard dure 50 minutes. Un appel découverte gratuit de 10 minutes est aussi disponible.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <p className="script text-2xl text-foreground/60">sexualité & santé globale</p>
            <h1 className="mt-4 text-[2.5rem] leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-[4.25rem]">
              Consultations en sexologie en ligne,{" "}
              <em className="italic text-foreground/70">confidentielles</em> et sans jugement.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Parlez à un·e sexologue qualifié·e depuis le confort de votre
              maison. Sans salle d'attente, sans jugement, sans compromis sur
              votre vie privée.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-base">
                <Link to="/rendez-vous">
                  Prendre rendez-vous <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-foreground/20 bg-transparent px-8 py-6 text-base"
              >
                <a href="mailto:info@evanaclinique.com?subject=Une%20question">
                  Poser une question
                </a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2"><Lock className="h-3.5 w-3.5" /> 100% Confidentiel</span>
              <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> Réponse &lt; 24h</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5" /> Sécurisé</span>
            </div>
          </div>

          <div className="relative">
            <div className="arch-frame relative aspect-[4/5] w-full shadow-elegant">
              <img
                src={heroImage}
                alt="Espace de consultation chaleureux et apaisant"
                className="h-full w-full object-cover"
                width={1600}
                height={1200}
              />
            </div>
            <div className="absolute -right-4 top-8 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-ivory text-center text-[11px] font-semibold uppercase tracking-widest text-foreground shadow-soft md:-right-8 md:h-40 md:w-40 md:text-xs">
              <span>Prendre</span>
              <span>rendez-vous</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIDENTIALITY PILLAR */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-accent px-6 py-16 md:px-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
              Confidentialité
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              Votre vie privée est notre priorité.
            </h2>
            <p className="mt-4 text-base text-foreground/70">
              Cinq engagements concrets qui rendent chaque consultation sûre,
              humaine et 100 % anonyme.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex flex-col items-start rounded-2xl bg-background/80 p-6 shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
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
              Un parcours simple
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              Trois étapes, pas plus.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-elegant"
              >
                <span className="font-display text-6xl text-accent">{s.n}</span>
                <h3 className="mt-4 text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            💡 <em className="text-foreground">Disponible en moins de 24 h.</em>
          </p>
        </div>
      </section>

      {/* PROBLEM-FOCUSED CATEGORIES */}
      <section className="bg-muted/60 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Nous pouvons vous aider si…
              </p>
              <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
                Vous n'êtes <em className="italic">pas</em> seul·e face à ces situations.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              La plupart des personnes qui nous consultent cherchent d'abord
              une réponse concrète à leur quotidien — pas un mot compliqué. Nos
              sexologues sont formées à écouter, à normaliser, et à proposer
              des pistes claires.
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <div
                key={p.title}
                className="group flex flex-col justify-between rounded-3xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-foreground">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="mt-5 text-xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
                <Link
                  to="/rendez-vous"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:gap-2 transition-all"
                >
                  En parler <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOUTIQUE PREVIEW */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Boutique en ligne
              </p>
              <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
                Des outils pour continuer entre les séances.
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-full border-foreground/20">
              <Link to="/boutique">Voir la boutique <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div key={p.title} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="text-lg text-foreground">{p.title}</h3>
                  <span className="text-sm font-medium text-foreground">{p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST & SOCIAL PROOF */}
      <section className="bg-muted/60 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="arch-frame relative aspect-[4/5] max-w-md shadow-elegant">
              <img
                src={therapistsImage}
                alt="Nos sexologues"
                loading="lazy"
                width={1400}
                height={1400}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Rencontrez vos sexologues
              </p>
              <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
                Deux professionnelles qualifiées, une approche humaine.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Nos sexologues sont diplômées, membres d'associations
                professionnelles reconnues, et formées à l'accompagnement
                individuel comme au couple. Chaque parcours est unique — le
                nôtre s'y adapte.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground">
                  M.A. Sexologie
                </span>
                <span className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground">
                  OPSQ certifiées
                </span>
                <span className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground">
                  10+ ans d'expérience
                </span>
              </div>
              <div className="mt-8">
                <Button asChild variant="link" className="h-auto p-0 text-foreground">
                  <Link to="/a-propos">
                    Découvrir notre équipe <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div
                key={r.author}
                className="rounded-3xl bg-background p-8 shadow-soft"
              >
                <div className="flex gap-1 text-foreground">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-base italic leading-relaxed text-foreground/85">
                  « {r.text} »
                </p>
                <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                  {r.author}
                </p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-24 grid gap-10 md:grid-cols-[1fr_1.5fr]">
            <div>
              <MessageCircle className="h-6 w-6 text-foreground" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Questions fréquentes
              </p>
              <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
                Vos doutes,<br /> nos réponses.
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
        title="Un premier pas, à votre rythme."
        description="Réservez un appel découverte gratuit de 10 minutes pour être orienté·e vers la sexologue qui vous correspond."
      />
    </>
  );
}

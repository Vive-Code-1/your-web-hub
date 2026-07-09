import { createFileRoute, Link } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserIcon,
  UserGroupIcon,
  PresentationBarChart02Icon,
  DollarCircleIcon,
  BrainIcon,
  HeartCheckIcon,
  Flower01Icon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/site/CTABand";
import { JANE_BOOK_URL } from "@/lib/links";

export const Route = createFileRoute("/services-expertises")({
  head: () => ({
    meta: [
      { title: "Services & expertises — Evana Clinique" },
      {
        name: "description",
        content:
          "Consultations individuelles, de couple et conférences sur mesure. Une approche globale de la santé sexuelle : dimensions financière, mentale, physique et sexuelle.",
      },
      { property: "og:title", content: "Services & expertises — Evana Clinique" },
      { property: "og:url", content: "/services-expertises" },
    ],
    links: [{ rel: "canonical", href: "/services-expertises" }],
  }),
  component: ServicesExpertisesPage,
});

const services = [
  {
    icon: UserIcon,
    title: "Consultation individuelle",
    format: "Offert en visioconférence",
    themes: [
      "Gestion des émotions",
      "Habiletés de communication",
      "Estime de soi",
      "Connaissance de soi",
      "Enjeux relationnels",
    ],
    cta: { label: "Prendre rendez-vous", url: JANE_BOOK_URL, external: true },
  },
  {
    icon: UserGroupIcon,
    title: "Consultation de couple",
    format: "Offert en visioconférence",
    themes: [
      "Écart de désir sexuel",
      "Gestion des conflits",
      "Enjeux de communication",
      "Bris de confiance",
      "Satisfaction sexuelle",
    ],
    cta: { label: "Prendre rendez-vous", url: JANE_BOOK_URL, external: true },
  },
  {
    icon: PresentationBarChart02Icon,
    title: "Conférence sur mesure",
    format: "En visioconférence ou en présentiel",
    themes: [
      "Santé sexuelle",
      "Consentement",
      "Gestion de conflits",
      "Communication",
      "Relations amoureuses",
    ],
    cta: {
      label: "Envoyer un courriel",
      url: "mailto:info@evanaclinique.com?subject=Demande%20d%27information%20pour%20une%20conf%C3%A9rence%20sur%20mesure",
      external: false,
    },
  },
];

const dimensions = [
  {
    icon: DollarCircleIcon,
    label: "Dimension financière",
    intro:
      "La dimension financière touche la sécurité, la stabilité et la capacité à prendre soin de soi, des éléments qui influencent la disponibilité émotionnelle et relationnelle.",
    experts: ["Conseiller·ère en sécurité financière", "Conseiller·ère d'orientation"],
  },
  {
    icon: BrainIcon,
    label: "Dimension mentale",
    intro:
      "La dimension mentale joue un rôle essentiel dans la régulation émotionnelle, l'estime de soi et la communication.",
    experts: [
      "Conseiller·ère d'orientation",
      "Ergothérapeute en santé mentale",
      "Psychoéducateur·trice",
      "Psychologue",
      "Travailleur·se social·e",
    ],
  },
  {
    icon: Flower01Icon,
    label: "Dimension physique",
    intro:
      "La dimension physique englobe l'image corporelle, la relation au corps, l'énergie et la santé générale. Ces éléments influencent directement le désir, la présence à soi et le confort dans les relations intimes.",
    experts: ["Diététicien·ne & Nutritionniste", "Infirmier·ère"],
  },
  {
    icon: HeartCheckIcon,
    label: "Dimension sexuelle",
    intro:
      "La dimension sexuelle demeure au cœur de notre pratique : elle regroupe la connaissance de soi, l'estime de soi et la compréhension de ses besoins dans les sphères relationnelles, amoureuses et sexuelles.",
    experts: ["Infirmier·ère en santé sexuelle", "Sexologue en relation d'aide", "Sexologue psychothérapeute"],
  },
];

function ServicesExpertisesPage() {
  return (
    <>
      <section className="gradient-warm px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="script text-2xl text-foreground/60">sexualité & santé globale</p>
          <h1 className="mt-3 text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
            Nos <em className="italic">services</em> & expertises.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            La sexualité et les relations sont influencées par plusieurs sphères de la vie. Chez Evana,
            nous reconnaissons que l'équilibre entre ces sphères contribue à une compréhension plus
            complète de la santé sexuelle et relationnelle.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Nos services
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              Un accompagnement <em className="italic">adapté</em> à votre situation.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="flex flex-col rounded-[2rem] border border-border bg-card p-8 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <HugeiconsIcon icon={s.icon} size={22} />
                </div>
                <h3 className="mt-5 font-display text-2xl text-foreground">{s.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.format}</p>
                <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                  {s.themes.map((th) => (
                    <li key={th} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-foreground/60" />
                      <span>{th}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Button asChild className="w-full rounded-full">
                    {s.cta.external ? (
                      <a href={s.cta.url} target="_blank" rel="noopener noreferrer">
                        {s.cta.label} <HugeiconsIcon icon={ArrowRight02Icon} size={14} className="ml-1" />
                      </a>
                    ) : (
                      <a href={s.cta.url}>
                        {s.cta.label} <HugeiconsIcon icon={ArrowRight02Icon} size={14} className="ml-1" />
                      </a>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/60 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              sexualité & santé globale
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              Quatre <em className="italic">dimensions</em>, une vision.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Vous trouverez ici des références professionnelles pouvant enrichir chacune de ces sphères,
              en complément de votre cheminement en sexologie.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {dimensions.map((d) => (
              <article key={d.label} className="rounded-3xl bg-background p-8 shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-foreground">
                    <HugeiconsIcon icon={d.icon} size={22} />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">{d.label}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.intro}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Expertises complémentaires
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
                  {d.experts.map((e) => (
                    <li key={e} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-foreground/50" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm italic text-muted-foreground">
            Notre intention est d'offrir un espace simple, humain et accessible pour mieux comprendre
            comment chaque sphère de votre vie peut influencer votre bien-être sexuel et relationnel.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 rounded-[2rem] border border-border bg-card p-8 shadow-soft md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Découvrir aussi
            </p>
            <p className="mt-2 font-display text-2xl text-foreground">
              Nos consultations individuelles et de couple.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="rounded-full border-foreground/20">
              <Link to="/services/individuel">Sexologie individuelle</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-foreground/20">
              <Link to="/services/couples">Thérapie de couple</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABand
        title="Prêt·e à faire un premier pas ?"
        description="Réservez directement votre consultation en ligne."
      />
    </>
  );
}

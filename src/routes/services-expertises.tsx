import { createFileRoute, Link } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserIcon,
  UserGroupIcon,
  PresentationBarChart02Icon,
  DollarCircleIcon,
  BrainIcon,
  HeartCheckIcon,
  FlowerIcon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/site/CTABand";
import { JANE_BOOK_URL } from "@/lib/links";
import { useL } from "@/lib/i18n";

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

function ServicesExpertisesPage() {
  const l = useL();

  const services = [
    {
      icon: UserIcon,
      title: l({ fr: "Consultation individuelle", en: "Individual consultation" }),
      format: l({ fr: "Offert en visioconférence", en: "Offered by video call" }),
      themes: [
        l({ fr: "Gestion des émotions", en: "Emotion management" }),
        l({ fr: "Habiletés de communication", en: "Communication skills" }),
        l({ fr: "Estime de soi", en: "Self-esteem" }),
        l({ fr: "Connaissance de soi", en: "Self-knowledge" }),
        l({ fr: "Enjeux relationnels", en: "Relationship challenges" }),
      ],
      cta: {
        label: l({ fr: "Prendre rendez-vous", en: "Book an appointment" }),
        url: JANE_BOOK_URL,
        external: true,
      },
    },
    {
      icon: UserGroupIcon,
      title: l({ fr: "Consultation de couple", en: "Couples consultation" }),
      format: l({ fr: "Offert en visioconférence", en: "Offered by video call" }),
      themes: [
        l({ fr: "Écart de désir sexuel", en: "Sexual desire gap" }),
        l({ fr: "Gestion des conflits", en: "Conflict management" }),
        l({ fr: "Enjeux de communication", en: "Communication challenges" }),
        l({ fr: "Bris de confiance", en: "Broken trust" }),
        l({ fr: "Satisfaction sexuelle", en: "Sexual satisfaction" }),
      ],
      cta: {
        label: l({ fr: "Prendre rendez-vous", en: "Book an appointment" }),
        url: JANE_BOOK_URL,
        external: true,
      },
    },
    {
      icon: PresentationBarChart02Icon,
      title: l({ fr: "Conférence sur mesure", en: "Custom conference" }),
      format: l({
        fr: "En visioconférence ou en présentiel",
        en: "By video call or in person",
      }),
      themes: [
        l({ fr: "Santé sexuelle", en: "Sexual health" }),
        l({ fr: "Consentement", en: "Consent" }),
        l({ fr: "Gestion de conflits", en: "Conflict management" }),
        l({ fr: "Communication", en: "Communication" }),
        l({ fr: "Relations amoureuses", en: "Romantic relationships" }),
      ],
      cta: {
        label: l({ fr: "Envoyer un courriel", en: "Send an email" }),
        url: "mailto:info@evanaclinique.com?subject=Demande%20d%27information%20pour%20une%20conf%C3%A9rence%20sur%20mesure",
        external: false,
      },
    },
  ];

  const dimensions = [
    {
      icon: DollarCircleIcon,
      label: l({ fr: "Dimension financière", en: "Financial dimension" }),
      intro: l({
        fr: "La dimension financière touche la sécurité, la stabilité et la capacité à prendre soin de soi, des éléments qui influencent la disponibilité émotionnelle et relationnelle.",
        en: "The financial dimension affects security, stability and the capacity to care for oneself — elements that influence emotional and relational availability.",
      }),
      experts: [
        l({ fr: "Conseiller·ère en sécurité financière", en: "Financial security advisor" }),
        l({ fr: "Conseiller·ère d'orientation", en: "Guidance counsellor" }),
      ],
    },
    {
      icon: BrainIcon,
      label: l({ fr: "Dimension mentale", en: "Mental dimension" }),
      intro: l({
        fr: "La dimension mentale joue un rôle essentiel dans la régulation émotionnelle, l'estime de soi et la communication.",
        en: "The mental dimension plays an essential role in emotional regulation, self-esteem and communication.",
      }),
      experts: [
        l({ fr: "Conseiller·ère d'orientation", en: "Guidance counsellor" }),
        l({ fr: "Ergothérapeute en santé mentale", en: "Mental health occupational therapist" }),
        l({ fr: "Psychoéducateur·trice", en: "Psychoeducator" }),
        l({ fr: "Psychologue", en: "Psychologist" }),
        l({ fr: "Travailleur·se social·e", en: "Social worker" }),
      ],
    },
    {
      icon: FlowerIcon,
      label: l({ fr: "Dimension physique", en: "Physical dimension" }),
      intro: l({
        fr: "La dimension physique englobe l'image corporelle, la relation au corps, l'énergie et la santé générale. Ces éléments influencent directement le désir, la présence à soi et le confort dans les relations intimes.",
        en: "The physical dimension covers body image, the relationship with the body, energy and general health. These elements directly influence desire, self-presence and comfort in intimate relationships.",
      }),
      experts: [
        l({ fr: "Diététicien·ne & Nutritionniste", en: "Dietitian & Nutritionist" }),
        l({ fr: "Infirmier·ère", en: "Nurse" }),
      ],
    },
    {
      icon: HeartCheckIcon,
      label: l({ fr: "Dimension sexuelle", en: "Sexual dimension" }),
      intro: l({
        fr: "La dimension sexuelle demeure au cœur de notre pratique : elle regroupe la connaissance de soi, l'estime de soi et la compréhension de ses besoins dans les sphères relationnelles, amoureuses et sexuelles.",
        en: "The sexual dimension remains at the heart of our practice: it brings together self-knowledge, self-esteem and understanding of your needs in the relational, romantic and sexual spheres.",
      }),
      experts: [
        l({ fr: "Infirmier·ère en santé sexuelle", en: "Sexual health nurse" }),
        l({ fr: "Sexologue en relation d'aide", en: "Sexologist in helping relationships" }),
        l({ fr: "Sexologue psychothérapeute", en: "Sexologist psychotherapist" }),
      ],
    },
  ];

  return (
    <>
      <section className="gradient-warm px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="script text-2xl text-foreground/60">
            {l({ fr: "sexualité & santé globale", en: "sexuality & holistic health" })}
          </p>
          <h1 className="mt-3 text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
            {l({ fr: "Nos ", en: "Our " })}
            <em className="italic">{l({ fr: "services", en: "services" })}</em>
            {l({ fr: " & expertises.", en: " & expertise." })}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {l({
              fr: "La sexualité et les relations sont influencées par plusieurs sphères de la vie. Chez Evana, nous reconnaissons que l'équilibre entre ces sphères contribue à une compréhension plus complète de la santé sexuelle et relationnelle.",
              en: "Sexuality and relationships are shaped by many spheres of life. At Evana we recognise that balance between these spheres contributes to a fuller understanding of sexual and relational health.",
            })}
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {l({ fr: "Nos services", en: "Our services" })}
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              {l({ fr: "Un accompagnement ", en: "Support " })}
              <em className="italic">{l({ fr: "adapté", en: "tailored" })}</em>
              {l({ fr: " à votre situation.", en: " to your situation." })}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-[2rem] border border-border bg-card p-8 shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <HugeiconsIcon icon={s.icon} size={22} />
                </div>
                <h3 className="mt-5 font-display text-2xl text-foreground">{s.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.format}
                </p>
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
                        {s.cta.label}{" "}
                        <HugeiconsIcon icon={ArrowRight02Icon} size={14} className="ml-1" />
                      </a>
                    ) : (
                      <a href={s.cta.url}>
                        {s.cta.label}{" "}
                        <HugeiconsIcon icon={ArrowRight02Icon} size={14} className="ml-1" />
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
              {l({ fr: "sexualité & santé globale", en: "sexuality & holistic health" })}
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              {l({ fr: "Quatre ", en: "Four " })}
              <em className="italic">{l({ fr: "dimensions", en: "dimensions" })}</em>
              {l({ fr: ", une vision.", en: ", one vision." })}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {l({
                fr: "Vous trouverez ici des références professionnelles pouvant enrichir chacune de ces sphères, en complément de votre cheminement en sexologie.",
                en: "You will find here professional references that can enrich each of these spheres, alongside your sexology journey.",
              })}
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
                  {l({ fr: "Expertises complémentaires", en: "Complementary expertise" })}
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
            {l({
              fr: "Notre intention est d'offrir un espace simple, humain et accessible pour mieux comprendre comment chaque sphère de votre vie peut influencer votre bien-être sexuel et relationnel.",
              en: "Our intention is to offer a simple, human and accessible space to better understand how each sphere of your life can influence your sexual and relational well-being.",
            })}
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 rounded-[2rem] border border-border bg-card p-8 shadow-soft md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {l({ fr: "Découvrir aussi", en: "Also discover" })}
            </p>
            <p className="mt-2 font-display text-2xl text-foreground">
              {l({
                fr: "Nos consultations individuelles et de couple.",
                en: "Our individual and couples consultations.",
              })}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="rounded-full border-foreground/20">
              <Link to="/services/individuel">
                {l({ fr: "Sexologie individuelle", en: "Individual sexology" })}
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-foreground/20">
              <Link to="/services/couples">
                {l({ fr: "Thérapie de couple", en: "Couples therapy" })}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABand
        title={l({ fr: "Prêt·e à faire un premier pas ?", en: "Ready to take a first step?" })}
        description={l({
          fr: "Réservez directement votre consultation en ligne.",
          en: "Book your online consultation directly.",
        })}
      />
    </>
  );
}

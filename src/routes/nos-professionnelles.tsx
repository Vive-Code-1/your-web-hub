import { createFileRoute } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, ArrowRight02Icon, CheckmarkCircle02Icon, Award01Icon, BookOpen01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/site/CTABand";
import { JANE_STAFF } from "@/lib/links";
import { useL } from "@/lib/i18n";
import therapist1 from "@/assets/anabelle.png";
import therapist2 from "@/assets/vanessa.png";

export const Route = createFileRoute("/nos-professionnelles")({
  head: () => ({
    meta: [
      { title: "Nos professionnelles — Evana Clinique" },
      {
        name: "description",
        content:
          "Rencontrez les sexologues et professionnelles d'Evana Clinique : une pratique centrée sur l'humain, l'écoute et la relation.",
      },
      { property: "og:title", content: "Nos professionnelles — Evana Clinique" },
      { property: "og:url", content: "/nos-professionnelles" },
    ],
    links: [{ rel: "canonical", href: "/nos-professionnelles" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  const l = useL();

  const team = [
    {
      name: "Vanessa Houle",
      role: l({ fr: "Sexologue & cofondatrice", en: "Sexologist & co-founder" }),
      bookUrl: JANE_STAFF.vanessa,
      image: therapist1,
      credentials: [
        l({ fr: "M.A. Sexologie clinique — UQAM", en: "M.A. Clinical Sexology — UQAM" }),
        l({ fr: "Membre — Ordre professionnel des sexologues du Québec (OPSQ)", en: "Member — Ordre professionnel des sexologues du Québec (OPSQ)" }),
        l({ fr: "Formation en protection de la jeunesse & Aire ouverte (CIUSSS)", en: "Training in youth protection & Aire ouverte (CIUSSS)" }),
      ],
      expertise: [
        l({ fr: "Douleur sexuelle", en: "Sexual pain" }),
        l({ fr: "Stress de performance", en: "Performance stress" }),
        l({ fr: "Estime de soi", en: "Self-esteem" }),
        l({ fr: "Ruptures & infidélité", en: "Breakups & infidelity" }),
        l({ fr: "Traumas", en: "Trauma" }),
      ],
      bio: [
        l({
          fr: "Je suis déterminée à soutenir une santé sexuelle épanouie, respectueuse des parcours et réalités de chacun·e. Forte d'expériences auprès des jeunes, des adultes et de personnes vivant avec des enjeux de santé mentale ou des parcours de vie complexes, j'accompagne chacun·e selon ses besoins.",
          en: "I am committed to supporting a fulfilling sexual health, respectful of each person's journey and reality. Drawing on experience with youth, adults and people facing mental health or complex life challenges, I support everyone according to their needs.",
        }),
        l({
          fr: "Mon approche repose sur l'écoute active, le respect et la souplesse, et s'adapte au rythme de chaque personne.",
          en: "My approach is built on active listening, respect and flexibility, and adapts to each person's rhythm.",
        }),
      ],
    },
    {
      name: "Anabelle Ramier",
      role: l({ fr: "Sexologue & cofondatrice", en: "Sexologist & co-founder" }),
      bookUrl: JANE_STAFF.anabelle,
      image: therapist2,
      credentials: [
        l({ fr: "M.A. Sexologie — profil counseling", en: "M.A. Sexology — counseling profile" }),
        l({ fr: "Membre — Ordre professionnel des sexologues du Québec (OPSQ)", en: "Member — Ordre professionnel des sexologues du Québec (OPSQ)" }),
        l({ fr: "Formation continue en thérapie de couple", en: "Continuing education in couple therapy" }),
      ],
      expertise: [
        l({ fr: "Relations de couple", en: "Couple relationships" }),
        l({ fr: "Écart de désir", en: "Desire gap" }),
        l({ fr: "Communication", en: "Communication" }),
        l({ fr: "Gestion des conflits", en: "Conflict management" }),
        l({ fr: "Dynamiques relationnelles", en: "Relational dynamics" }),
      ],
      bio: [
        l({
          fr: "Je suis sexologue et membre de l'Ordre professionnel des sexologues du Québec. J'accompagne les personnes et les couples qui souhaitent s'engager dans un processus de mieux-être relationnel et sexuel.",
          en: "I am a sexologist and member of the Ordre professionnel des sexologues du Québec. I support individuals and couples who wish to engage in a process of relational and sexual well-being.",
        }),
        l({
          fr: "Mon approche est directe et collaborative. Je crois que chaque personne est experte de sa propre réalité, et mon rôle est de soutenir le cheminement.",
          en: "My approach is direct and collaborative. I believe each person is the expert of their own reality; my role is to support the journey.",
        }),
      ],
    },
  ];

  return (
    <>
      <section className="gradient-warm px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="script text-2xl text-foreground/60">
            {l({ fr: "une pratique centrée sur l'humain", en: "a human-centred practice" })}
          </p>
          <h1 className="mt-3 text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
            {l({ fr: "Nos ", en: "Our " })}
            <em className="italic">{l({ fr: "professionnelles", en: "professionals" })}</em>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {l({
              fr: "Une équipe multidisciplinaire réunie autour d'une même vision : accompagner chaque personne avec écoute, transparence et respect de son rythme.",
              en: "A multidisciplinary team united by one vision: to support every person with listening, transparency and respect for their pace.",
            })}
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl space-y-20">
          {team.map((p, i) => (
            <article
              key={p.name}
              className={`grid gap-10 md:grid-cols-2 md:items-center ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="arch-frame aspect-[4/5] w-full shadow-elegant">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {p.role}
                </p>
                <h2 className="mt-2 text-4xl leading-tight text-foreground md:text-5xl">{p.name}</h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
                  {p.bio.map((para, k) => (
                    <p key={k}>{para}</p>
                  ))}
                </div>

                {/* Credentials */}
                <div className="mt-8 rounded-2xl border border-border bg-accent/40 p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground/70">
                    <HugeiconsIcon icon={Award01Icon} size={14} />
                    {l({ fr: "Formation & titres", en: "Credentials & training" })}
                  </div>
                  <ul className="mt-3 space-y-2">
                    {p.credentials.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-foreground/85">
                        <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} className="mt-0.5 flex-none text-foreground" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expertise chips */}
                <div className="mt-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    <HugeiconsIcon icon={BookOpen01Icon} size={14} />
                    {l({ fr: "Domaines d'expertise", en: "Areas of expertise" })}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.expertise.map((e) => (
                      <span key={e} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild size="lg" className="rounded-full px-8 py-6 text-base">
                    <a href={p.bookUrl} target="_blank" rel="noopener noreferrer">
                      <HugeiconsIcon icon={Calendar03Icon} size={16} className="mr-2" />
                      {l({ fr: "Planifier mon rendez-vous", en: "Schedule my appointment" })}
                      <HugeiconsIcon icon={ArrowRight02Icon} size={16} className="ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABand
        title={l({ fr: "Une équipe à votre écoute.", en: "A team ready to listen." })}
        description={l({
          fr: "Prenez rendez-vous directement avec la professionnelle qui vous correspond.",
          en: "Book directly with the professional that suits you.",
        })}
      />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/site/CTABand";
import { JANE_STAFF } from "@/lib/links";
import { useL } from "@/lib/i18n";
import therapist1 from "@/assets/vanessa.png";
import therapist2 from "@/assets/anabelle.png";
import alexandreImg from "@/assets/team-duo-2.avif";
import marieImg from "@/assets/team-duo-3.avif";

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
      bio: [
        l({
          fr: "Je suis déterminée à soutenir une santé sexuelle épanouie, respectueuse des parcours et réalités de chacun·e. Forte d'expériences auprès des jeunes, des adultes et de personnes vivant avec des enjeux de santé mentale ou des parcours de vie complexes, j'accompagne chacun·e selon ses besoins. J'interviens notamment sur des problématiques telles que la douleur sexuelle, le stress de performance, les difficultés relationnelles, l'estime de soi, les ruptures et l'infidélité.",
          en: "I am committed to supporting a fulfilling sexual health, respectful of each person's journey and reality. Drawing on experience with youth, adults and people facing mental health or complex life challenges, I support everyone according to their needs. I work in particular with issues such as sexual pain, performance stress, relationship difficulties, self-esteem, breakups and infidelity.",
        }),
        l({
          fr: "Mon expérience en protection de la jeunesse m'a appris à accompagner avec sensibilité des personnes confrontées à des traumas, en valorisant la résilience et l'autonomie. J'ai également travaillé à Aire ouverte, un programme des CIUSSS et CISSS, où j'ai approfondi mon accompagnement en santé mentale avec une vision globale de la santé.",
          en: "My experience in youth protection taught me to sensitively support people facing trauma, valuing resilience and autonomy. I also worked at Aire ouverte, a program of the CIUSSS and CISSS, where I deepened my mental health support with a holistic view of health.",
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
      bio: [
        l({
          fr: "Je suis sexologue et membre de l'Ordre professionnel des sexologues du Québec. J'accompagne les personnes et les couples qui souhaitent s'engager dans un processus de mieux-être relationnel et sexuel.",
          en: "I am a sexologist and member of the Ordre professionnel des sexologues du Québec. I support individuals and couples who wish to engage in a process of relational and sexual well-being.",
        }),
        l({
          fr: "Mon champ d'expertise se situe principalement au niveau des relations de couple, des dynamiques relationnelles, de l'écart de désir sexuel, de la communication et de la gestion des conflits. J'aide les couples à mieux se comprendre, à se rejoindre et à développer des façons plus saines d'être en relation.",
          en: "My area of expertise lies mainly in couple relationships, relational dynamics, sexual desire gaps, communication and conflict management. I help couples better understand each other, reconnect and develop healthier ways of relating.",
        }),
        l({
          fr: "Mon approche est directe et collaborative. Je crois que chaque personne est experte de sa propre réalité, et mon rôle est de soutenir le cheminement, d'offrir des repères, des outils et un espace où il est possible d'avancer à son rythme.",
          en: "My approach is direct and collaborative. I believe each person is the expert of their own reality; my role is to support the journey, offer landmarks, tools and a space to move forward at your own pace.",
        }),
      ],
    },
    {
      name: "Alexandre Morier-Rouzier",
      role: l({ fr: "Conseiller en sécurité financière", en: "Financial security advisor" }),
      bookUrl: JANE_STAFF.alexandre,
      image: alexandreImg,
      bio: [
        l({
          fr: "Mon objectif en tant que conseiller en sécurité financière est d'aider chaque personne que j'accompagne à prendre le contrôle de sa santé financière, aujourd'hui et pour les années à venir.",
          en: "My goal as a financial security advisor is to help every person I work with take control of their financial health, today and for the years ahead.",
        }),
        l({
          fr: "Je vous propose un accompagnement personnalisé pour mettre en place des solutions adaptées à vos besoins — que ce soit en assurance, en épargne, en planification de retraite ou en gestion des risques. Chaque situation est unique, et c'est en prenant le temps de bien comprendre la vôtre que je peux vous offrir des stratégies concrètes, efficaces et réalistes.",
          en: "I offer personalised support to put in place solutions suited to your needs — whether in insurance, savings, retirement planning or risk management. Every situation is unique, and by taking the time to understand yours I can offer concrete, effective and realistic strategies.",
        }),
        l({
          fr: "Je vous invite à me contacter pour une première rencontre sans frais ni engagement. Ensemble, faisons le point sur votre santé financière et mettons en place les bases d'un avenir serein.",
          en: "I invite you to reach out for a first meeting, free and with no commitment. Together, let's review your financial health and build the foundations of a peaceful future.",
        }),
      ],
    },
    {
      name: "Marie-Michelle Parent Dt.P.",
      role: l({ fr: "Nutritionniste", en: "Nutritionist" }),
      bookUrl: JANE_STAFF.mariemichelle,
      image: marieImg,
      bio: [
        l({
          fr: "Passionnée par la nutrition et profondément convaincue que l'alimentation est un pilier fondamental de la santé globale, j'accompagne mes clients vers des choix alimentaires durables, adaptés à leur réalité et à leurs objectifs. Je crois fermement que bien manger ne signifie pas se restreindre, mais plutôt apprendre à trouver un équilibre entre plaisir et santé.",
          en: "Passionate about nutrition and deeply convinced that food is a fundamental pillar of overall health, I support my clients towards sustainable food choices tailored to their reality and goals. I firmly believe that eating well doesn't mean restricting yourself, but rather learning to find balance between pleasure and health.",
        }),
        l({
          fr: "Mon approche repose sur la prévention des maladies chroniques, l'écoute et l'individualisation des recommandations. Je guide chaque personne avec bienveillance, rigueur scientifique et respect de son rythme.",
          en: "My approach is based on the prevention of chronic diseases, active listening and individualised recommendations. I guide each person with care, scientific rigour and respect for their pace.",
        }),
        l({
          fr: "J'offre également des cours de groupe sur divers thèmes en nutrition — un climat d'apprentissage dynamique et de partage à un tarif plus accessible.",
          en: "I also offer group classes on various nutrition topics — a dynamic learning and sharing environment at a more accessible rate.",
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

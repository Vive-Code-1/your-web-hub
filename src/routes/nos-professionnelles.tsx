import { createFileRoute } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/site/CTABand";
import { JANE_STAFF } from "@/lib/links";
import vanessaAsset from "@/assets/vanessa.png.asset.json";
import anabelleAsset from "@/assets/anabelle.png.asset.json";
import duo1 from "@/assets/team-duo-2.avif.asset.json";
import duo2 from "@/assets/team-duo-3.avif.asset.json";
const therapist1 = vanessaAsset.url;
const therapist2 = anabelleAsset.url;
const alexandreImg = duo1.url;
const marieImg = duo2.url;

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

interface Pro {
  name: string;
  role: string;
  bookUrl: string;
  image: string;
  bio: string[];
}

const team: Pro[] = [
  {
    name: "Vanessa Houle",
    role: "Sexologue & cofondatrice",
    bookUrl: JANE_STAFF.vanessa,
    image: therapist1,
    bio: [
      "Je suis déterminée à soutenir une santé sexuelle épanouie, respectueuse des parcours et réalités de chacun·e. Forte d'expériences auprès des jeunes, des adultes et de personnes vivant avec des enjeux de santé mentale ou des parcours de vie complexes, j'accompagne chacun·e selon ses besoins. J'interviens notamment sur des problématiques telles que la douleur sexuelle, le stress de performance, les difficultés relationnelles, l'estime de soi, les ruptures et l'infidélité.",
      "Mon expérience en protection de la jeunesse m'a appris à accompagner avec sensibilité des personnes confrontées à des traumas, en valorisant la résilience et l'autonomie. J'ai également travaillé à Aire ouverte, un programme des CIUSSS et CISSS, où j'ai approfondi mon accompagnement en santé mentale avec une vision globale de la santé.",
      "Mon approche repose sur l'écoute active, le respect et la souplesse, et s'adapte au rythme de chaque personne.",
    ],
  },
  {
    name: "Anabelle Ramier",
    role: "Sexologue & cofondatrice",
    bookUrl: JANE_STAFF.anabelle,
    image: therapist2,
    bio: [
      "Je suis sexologue et membre de l'Ordre professionnel des sexologues du Québec. J'accompagne les personnes et les couples qui souhaitent s'engager dans un processus de mieux-être relationnel et sexuel.",
      "Mon champ d'expertise se situe principalement au niveau des relations de couple, des dynamiques relationnelles, de l'écart de désir sexuel, de la communication et de la gestion des conflits. J'aide les couples à mieux se comprendre, à se rejoindre et à développer des façons plus saines d'être en relation.",
      "Mon approche est directe et collaborative. Je crois que chaque personne est experte de sa propre réalité, et mon rôle est de soutenir le cheminement, d'offrir des repères, des outils et un espace où il est possible d'avancer à son rythme.",
    ],
  },
  {
    name: "Alexandre Morier-Rouzier",
    role: "Conseiller en sécurité financière",
    bookUrl: JANE_STAFF.alexandre,
    image: therapist1,
    bio: [
      "Mon objectif en tant que conseiller en sécurité financière est d'aider chaque personne que j'accompagne à prendre le contrôle de sa santé financière, aujourd'hui et pour les années à venir.",
      "Je vous propose un accompagnement personnalisé pour mettre en place des solutions adaptées à vos besoins — que ce soit en assurance, en épargne, en planification de retraite ou en gestion des risques. Chaque situation est unique, et c'est en prenant le temps de bien comprendre la vôtre que je peux vous offrir des stratégies concrètes, efficaces et réalistes.",
      "Je vous invite à me contacter pour une première rencontre sans frais ni engagement. Ensemble, faisons le point sur votre santé financière et mettons en place les bases d'un avenir serein.",
    ],
  },
  {
    name: "Marie-Michelle Parent Dt.P.",
    role: "Nutritionniste",
    bookUrl: JANE_STAFF.mariemichelle,
    image: therapist2,
    bio: [
      "Passionnée par la nutrition et profondément convaincue que l'alimentation est un pilier fondamental de la santé globale, j'accompagne mes clients vers des choix alimentaires durables, adaptés à leur réalité et à leurs objectifs. Je crois fermement que bien manger ne signifie pas se restreindre, mais plutôt apprendre à trouver un équilibre entre plaisir et santé.",
      "Mon approche repose sur la prévention des maladies chroniques, l'écoute et l'individualisation des recommandations. Je guide chaque personne avec bienveillance, rigueur scientifique et respect de son rythme.",
      "J'offre également des cours de groupe sur divers thèmes en nutrition — un climat d'apprentissage dynamique et de partage à un tarif plus accessible.",
    ],
  },
];

function TeamPage() {
  return (
    <>
      <section className="gradient-warm px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="script text-2xl text-foreground/60">une pratique centrée sur l'humain</p>
          <h1 className="mt-3 text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
            Nos <em className="italic">professionnelles</em>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Une équipe multidisciplinaire réunie autour d'une même vision : accompagner chaque personne
            avec écoute, transparence et respect de son rythme.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl space-y-20">
          {team.map((p, i) => (
            <article
              key={p.name}
              className={`grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-start ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="arch-frame aspect-[4/5] max-w-sm shadow-elegant">
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
                      Planifier mon rendez-vous
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
        title="Une équipe à votre écoute."
        description="Prenez rendez-vous directement avec la professionnelle qui vous correspond."
      />
    </>
  );
}

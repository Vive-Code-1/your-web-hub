import { createFileRoute } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserGroupIcon, GraduationScrollIcon, HeartCheckIcon, Sun03Icon } from "@hugeicons/core-free-icons";
import { CTABand } from "@/components/site/CTABand";
import { useL } from "@/lib/i18n";
import heroImage from "@/assets/hero-interior.jpg";

export const Route = createFileRoute("/notre-approche")({
  head: () => ({
    meta: [
      { title: "Notre approche — Evana Clinique" },
      {
        name: "description",
        content:
          "Notre histoire, notre vision et la signification d'Evana : Équipe, Éducation, Émotions, Équilibre. Une pratique sexologique humaine et collaborative.",
      },
      { property: "og:title", content: "Notre approche — Evana Clinique" },
      { property: "og:url", content: "/notre-approche" },
    ],
    links: [{ rel: "canonical", href: "/notre-approche" }],
  }),
  component: ApproachPage,
});

function ApproachPage() {
  const l = useL();
  const values = [
    { letter: "É", word: l({ fr: "Équipe", en: "Team" }), icon: UserGroupIcon },
    { letter: "É", word: l({ fr: "Éducation", en: "Education" }), icon: GraduationScrollIcon },
    { letter: "É", word: l({ fr: "Émotions", en: "Emotions" }), icon: HeartCheckIcon },
    { letter: "É", word: l({ fr: "Équilibre", en: "Balance" }), icon: Sun03Icon },
  ];

  return (
    <>
      <section className="gradient-warm px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="script text-2xl text-foreground/60">
            {l({ fr: "notre histoire", en: "our story" })}
          </p>
          <h1 className="mt-3 text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
            {l({ fr: "Une ", en: "One " })}
            <em className="italic">{l({ fr: "vision", en: "vision" })}</em>
            {l({ fr: ", un espace, ", en: ", one space, " })}
            <br /> {l({ fr: "deux professionnelles.", en: "two professionals." })}
          </h1>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div className="space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
            <p>
              {l({
                fr: "Evana Clinique est née d'un désir simple : créer et partager des outils accessibles pour soutenir le bien-être de chacun·e. Au départ, nous avions l'ambition de bâtir une clinique qui réunirait sous un même toit plusieurs disciplines de la santé, pour offrir un accompagnement global.",
                en: "Evana Clinique was born from a simple desire: to create and share accessible tools that support everyone's well-being. At first, we wanted to build a clinic bringing together several health disciplines under one roof to offer holistic care.",
              })}
            </p>
            <p>
              {l({
                fr: "En avançant dans le projet, nous avons réalisé que ce qui nous animait réellement n'était pas de rassembler plusieurs professions à l'interne, mais plutôt de créer des liens : entre les dimensions de la santé, entre les professionnel·le·s, et surtout entre les personnes et leur mieux-être.",
                en: "As the project moved forward, we realised what truly drove us wasn't grouping several professions in-house, but rather building bridges: between health dimensions, between professionals, and above all between people and their well-being.",
              })}
            </p>
            <p>
              {l({
                fr: "Aujourd'hui, nous sommes deux sexologues qui avons à cœur la santé sexuelle et relationnelle, avec un intérêt particulier pour les relations amoureuses. Nous reconnaissons que la sexualité est influencée par plusieurs aspects de la vie — santé financière, mentale ou physique.",
                en: "Today, we are two sexologists deeply committed to sexual and relational health, with a particular interest in romantic relationships. We recognise that sexuality is influenced by many aspects of life — financial, mental and physical health.",
              })}
            </p>
            <p>
              {l({
                fr: "C'est pourquoi nous développons un réseau de professionnel·le·s partenaires provenant de différentes disciplines, que nous consultons au besoin pour enrichir certains de nos outils et ressources, toujours dans une perspective sexologique.",
                en: "That's why we are building a network of partner professionals from various disciplines whom we consult as needed to enrich some of our tools and resources, always from a sexology perspective.",
              })}
            </p>
          </div>
          <div className="arch-frame aspect-[4/5] shadow-elegant">
            <img
              src={heroImage}
              alt={l({ fr: "Espace Evana", en: "Evana space" })}
              className="h-full w-full object-cover"
              width={1200}
              height={1500}
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/60 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {l({ fr: "que signifie Evana ?", en: "what does Evana mean?" })}
          </p>
          <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
            {l({ fr: "Le ", en: "The " })}
            <em className="italic">E</em>
            {l({ fr: " de nos quatre valeurs, le ", en: " of our four values, the " })}
            <em className="italic">vana</em>
            {l({ fr: " de nos deux prénoms.", en: " from our two first names." })}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {l({
              fr: "Evana, c'est la rencontre de deux personnes, deux visions et un désir commun : accompagner les gens vers des relations saines. Le E signifie Équipe, Éducation, Émotions et Équilibre, quatre valeurs qui guident notre travail. Et vana, c'est la composition de nos deux prénoms, parce que nous voulions créer un espace qui nous ressemble : un espace d'évolution, de créativité, d'humanité et de plaisir.",
              en: "Evana is the meeting of two people, two visions and a shared desire: to help people build healthy relationships. The E stands for Team, Education, Emotions and Balance — four values that guide our work. And vana is a blend of our two first names, because we wanted to create a space that reflects who we are: a space of growth, creativity, humanity and pleasure.",
            })}
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.word} className="rounded-3xl bg-background p-8 text-center shadow-soft">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <HugeiconsIcon icon={v.icon} size={22} />
                </div>
                <p className="mt-5 script text-4xl text-foreground">{v.letter}</p>
                <h3 className="mt-1 font-display text-2xl text-foreground">{v.word}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="script text-4xl leading-tight text-foreground/80 md:text-5xl">
            {l({
              fr: "« Un modèle collaboratif qui permet des références rapides, une entraide réelle et des contenus de qualité, pensés pour accompagner chaque personne de façon cohérente et accessible. »",
              en: "\u201cA collaborative model that enables quick referrals, real mutual support and quality content, designed to accompany every person in a coherent and accessible way.\u201d",
            })}
          </p>
          <footer className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
            {l({ fr: "— L'équipe Evana", en: "— The Evana team" })}
          </footer>
        </blockquote>
      </section>

      <CTABand
        title={l({ fr: "Prenez rendez-vous en toute confiance.", en: "Book with complete confidence." })}
        description={l({
          fr: "Un premier échange pour vous orienter vers la sexologue qui vous correspond.",
          en: "A first conversation to guide you to the sexologist that suits you.",
        })}
      />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, HeartCheckIcon, BulbIcon, UserGroupIcon, PuzzleIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { useL } from "@/lib/i18n";
import heroImage from "@/assets/team-duo-4.avif";

export const Route = createFileRoute("/collaboration")({
  head: () => ({
    meta: [
      { title: "Collaboration — Evana Clinique" },
      {
        name: "description",
        content:
          "Vous êtes professionnel·le en santé sexuelle, relation d'aide, nutrition, finances ou santé mentale ? Rejoignez le réseau collaboratif d'Evana Clinique.",
      },
      { property: "og:title", content: "Collaboration — Evana Clinique" },
      { property: "og:url", content: "/collaboration" },
    ],
    links: [{ rel: "canonical", href: "/collaboration" }],
  }),
  component: CollaborationPage,
});

function CollaborationPage() {
  const l = useL();
  const values = [
    { icon: UserGroupIcon, label: l({ fr: "Coopération", en: "Cooperation" }) },
    { icon: BulbIcon, label: l({ fr: "Créativité", en: "Creativity" }) },
    { icon: HeartCheckIcon, label: l({ fr: "Empathie & humanité", en: "Empathy & humanity" }) },
    { icon: PuzzleIcon, label: l({ fr: "Liberté & santé globale", en: "Freedom & holistic health" }) },
  ];

  return (
    <>
      <section className="gradient-warm px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="script text-2xl text-foreground/60">
            {l({ fr: "envie de collaborer ?", en: "want to collaborate?" })}
          </p>
          <h1 className="mt-3 text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
            {l({ fr: "Créer, réfléchir, ", en: "Create, reflect, " })}
            <em className="italic">{l({ fr: "collaborer", en: "collaborate" })}</em>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {l({
              fr: "Vous êtes professionnel·le en santé sexuelle, en relation d'aide ou dans un domaine connexe (finances, nutrition, santé mentale, physique), et vous cherchez un espace où créer, réfléchir et collaborer ?",
              en: "Are you a professional in sexual health, helping relationships or a related field (finance, nutrition, mental or physical health), looking for a space to create, reflect and collaborate?",
            })}
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div className="space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
            <p>
              {l({
                fr: "À la clinique Evana, nous croyons à la force de la co-création, de l'entraide et du partage de connaissances. Nous souhaitons rassembler des professionnel·le·s qui ont envie de contribuer à des outils, des programmes, des articles et des ressources qui soutiennent le bien-être sexuel et relationnel.",
                en: "At Evana Clinique, we believe in the power of co-creation, mutual aid and knowledge sharing. We want to bring together professionals who want to contribute to tools, programs, articles and resources that support sexual and relational well-being.",
              })}
            </p>
            <p>
              {l({
                fr: "Nous accordons une attention particulière aux liens entre la santé sexuelle, les relations humaines et les relations amoureuses, tout en valorisant la richesse des autres expertises qui complètent cette vision.",
                en: "We pay particular attention to the links between sexual health, human relationships and romantic relationships, while valuing the richness of other expertise that complements this vision.",
              })}
            </p>
            <p>
              {l({
                fr: "Ici, chaque collaboration se fait dans le respect de l'autonomie, du rythme et de la couleur professionnelle de chacun·e. Nous aimons créer des ponts entre les expertises, partager nos visions et développer des contenus qui ont du sens, ensemble.",
                en: "Here, every collaboration respects each person's autonomy, rhythm and professional identity. We love building bridges between areas of expertise, sharing our visions and developing meaningful content — together.",
              })}
            </p>
            <p>
              {l({
                fr: "Si vous travaillez en sexologie, en relation d'aide, en psychologie, en travail social, en nutrition, en soins infirmiers, en psychoéducation ou dans tout autre domaine connexe, nous serions ravies d'échanger avec vous.",
                en: "If you work in sexology, helping relationships, psychology, social work, nutrition, nursing, psychoeducation or any related field, we would be delighted to hear from you.",
              })}
            </p>
          </div>
          <div className="arch-frame aspect-[4/5] shadow-elegant">
            <img
              src={heroImage}
              alt={l({ fr: "Équipe Evana", en: "Evana team" })}
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
            {l({ fr: "nos valeurs", en: "our values" })}
          </p>
          <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
            {l({ fr: "Nous recherchons des ", en: "We look for " })}
            <em className="italic">{l({ fr: "partenaires", en: "partners" })}</em>
            {l({ fr: " qui partagent nos valeurs.", en: " who share our values." })}
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.label} className="rounded-3xl bg-background p-8 text-center shadow-soft">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <HugeiconsIcon icon={v.icon} size={22} />
                </div>
                <p className="mt-5 font-display text-lg text-foreground">{v.label}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {l({
              fr: "Ensemble, nous pouvons imaginer et bâtir des ressources accessibles, cohérentes et profondément humaines.",
              en: "Together, we can imagine and build resources that are accessible, coherent and deeply human.",
            })}
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-accent p-10 text-center md:p-16">
          <p className="script text-2xl text-foreground/70">
            {l({ fr: "une idée, un outil, un projet ?", en: "an idea, a tool, a project?" })}
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-foreground md:text-4xl">
            {l({ fr: "Envoyez-nous votre profil.", en: "Send us your profile." })}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/75">
            {l({
              fr: "Envoyez-nous votre profil ainsi qu'un court texte présentant ce que vous aimeriez co-créer avec nous ou les raisons pour lesquelles vous souhaitez collaborer avec la clinique Evana. Nous planifierons ensuite un moment pour échanger de vive voix. Au plaisir de vous rencontrer.",
              en: "Send us your profile along with a short note describing what you would like to co-create with us, or why you want to collaborate with Evana Clinique. We will then schedule a moment to speak in person. We look forward to meeting you.",
            })}
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-base">
              <a href="mailto:info@evanaclinique.com?subject=Ma%20candidature">
                <HugeiconsIcon icon={Mail01Icon} size={16} className="mr-2" />
                {l({ fr: "Envoyer ma candidature", en: "Send my application" })}
              </a>
            </Button>
          </div>
          <p className="mt-6 text-xs text-foreground/60">info@evanaclinique.com</p>
        </div>
      </section>
    </>
  );
}

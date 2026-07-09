import { createFileRoute } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, HeartCheckIcon, Bulb01Icon, UserGroupIcon, PuzzleIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/therapists.jpg";

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

const values = [
  { icon: UserGroupIcon, label: "Coopération" },
  { icon: Bulb01Icon, label: "Créativité" },
  { icon: HeartCheckIcon, label: "Empathie & humanité" },
  { icon: PuzzleIcon, label: "Liberté & santé globale" },
];

function CollaborationPage() {
  return (
    <>
      <section className="gradient-warm px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="script text-2xl text-foreground/60">envie de collaborer ?</p>
          <h1 className="mt-3 text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
            Créer, réfléchir, <em className="italic">collaborer</em>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Vous êtes professionnel·le en santé sexuelle, en relation d'aide ou dans un domaine connexe
            (finances, nutrition, santé mentale, physique), et vous cherchez un espace où créer,
            réfléchir et collaborer ?
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div className="space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
            <p>
              À la clinique Evana, nous croyons à la force de la co-création, de l'entraide et du partage
              de connaissances. Nous souhaitons rassembler des professionnel·le·s qui ont envie de
              contribuer à des outils, des programmes, des articles et des ressources qui soutiennent le
              bien-être sexuel et relationnel.
            </p>
            <p>
              Nous accordons une attention particulière aux liens entre la santé sexuelle, les relations
              humaines et les relations amoureuses, tout en valorisant la richesse des autres expertises
              qui complètent cette vision.
            </p>
            <p>
              Ici, chaque collaboration se fait dans le respect de l'autonomie, du rythme et de la
              couleur professionnelle de chacun·e. Nous aimons créer des ponts entre les expertises,
              partager nos visions et développer des contenus qui ont du sens, ensemble.
            </p>
            <p>
              Si vous travaillez en sexologie, en relation d'aide, en psychologie, en travail social, en
              nutrition, en soins infirmiers, en psychoéducation ou dans tout autre domaine connexe, nous
              serions ravies d'échanger avec vous.
            </p>
          </div>
          <div className="arch-frame aspect-[4/5] shadow-elegant">
            <img
              src={heroImage}
              alt="Équipe Evana"
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
            nos valeurs
          </p>
          <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
            Nous recherchons des <em className="italic">partenaires</em> qui partagent nos valeurs.
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
            Ensemble, nous pouvons imaginer et bâtir des ressources accessibles, cohérentes et
            profondément humaines.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-accent p-10 text-center md:p-16">
          <p className="script text-2xl text-foreground/70">une idée, un outil, un projet ?</p>
          <h2 className="mt-3 text-3xl leading-tight text-foreground md:text-4xl">
            Envoyez-nous votre profil.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/75">
            Envoyez-nous votre profil ainsi qu'un court texte présentant ce que vous aimeriez co-créer
            avec nous ou les raisons pour lesquelles vous souhaitez collaborer avec la clinique Evana.
            Nous planifierons ensuite un moment pour échanger de vive voix. Au plaisir de vous rencontrer.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-base">
              <a href="mailto:info@evanaclinique.com?subject=Ma%20candidature">
                <HugeiconsIcon icon={Mail01Icon} size={16} className="mr-2" />
                Envoyer ma candidature
              </a>
            </Button>
          </div>
          <p className="mt-6 text-xs text-foreground/60">info@evanaclinique.com</p>
        </div>
      </section>
    </>
  );
}

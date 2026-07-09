import { createFileRoute } from "@tanstack/react-router";
import { Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import { CTABand } from "@/components/site/CTABand";
import therapist1 from "@/assets/therapist-1.jpg";
import therapist2 from "@/assets/therapist-2.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Evana Clinique" },
      {
        name: "description",
        content:
          "Découvrez l'équipe et l'approche thérapeutique d'Evana Clinique : deux sexologues qualifiées pour un accompagnement humain et confidentiel.",
      },
      { property: "og:title", content: "À propos — Evana Clinique" },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: AboutPage,
});

const therapists = [
  {
    img: therapist1,
    name: "Camille D.",
    role: "Sexologue clinicienne",
    creds: ["M.A. Sexologie — UQAM", "Membre OPSQ", "8 ans d'expérience"],
    bio: "Camille accompagne principalement les adultes autour de la confiance en soi, du désir et des blocages émotionnels. Son approche est douce, structurée, jamais moralisante.",
    approach: "Approche humaniste & cognitivo-comportementale",
  },
  {
    img: therapist2,
    name: "Léa M.",
    role: "Sexologue & thérapeute de couple",
    creds: ["M.A. Sexologie", "Formation systémique", "12 ans d'expérience"],
    bio: "Léa se spécialise dans la thérapie de couple et la communication intime. Elle crée un cadre sécurisant où chaque voix compte à égalité.",
    approach: "Approche systémique & centrée sur l'écoute",
  },
];

const values = [
  { icon: ShieldCheck, title: "Confidentialité absolue", text: "Vos échanges restent strictement privés, quoi qu'il arrive." },
  { icon: Heart, title: "Sans jugement", text: "Un espace où chaque question, chaque ressenti, est légitime." },
  { icon: Users, title: "Accessibilité", text: "En ligne, sans salle d'attente, adapté à votre emploi du temps." },
  { icon: Sparkles, title: "Rigueur professionnelle", text: "Sexologues diplômées, formées et membres d'associations reconnues." },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-warm px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="script text-2xl text-foreground/60">notre mission</p>
          <h1 className="mt-3 text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
            Prendre soin de soi,<br /> c'est aussi <em className="italic">prendre soin</em> de sa sexualité.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Deux sexologues, une mission : vous accompagner dans l'amélioration
            de votre bien-être personnel, relationnel et sexuel — dans le
            respect de qui vous êtes.
          </p>
        </div>
      </section>

      {/* Therapists */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Vos sexologues
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl leading-tight text-foreground md:text-5xl">
            Deux professionnelles, deux sensibilités.
          </h2>
          <div className="mt-14 grid gap-12 md:grid-cols-2">
            {therapists.map((t) => (
              <article key={t.name} className="rounded-[2rem] border border-border bg-card p-6 shadow-soft md:p-8">
                <div className="arch-frame aspect-[4/5]">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={900}
                    height={1100}
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-3xl text-foreground">{t.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
                  <p className="mt-5 text-base leading-relaxed text-foreground/85">{t.bio}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {t.creds.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-xs italic text-muted-foreground">{t.approach}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-muted/60 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Notre approche thérapeutique
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              Ce en quoi nous croyons.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-background p-7 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="px-5 py-20 md:px-8 md:py-24">
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="script text-5xl leading-tight text-foreground/80 md:text-6xl">
            « Prendre soin de soi, c'est prendre soin de sa sexualité dans toutes ses dimensions. »
          </p>
          <footer className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
            — L'équipe Evana
          </footer>
        </blockquote>
      </section>

      <CTABand
        title="Prêt·e à faire un premier pas ?"
        description="Réservez un appel découverte gratuit de 10 minutes."
      />
    </>
  );
}

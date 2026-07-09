import { createFileRoute } from "@tanstack/react-router";
import { Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import { CTABand } from "@/components/site/CTABand";
import { useT } from "@/lib/i18n";
import therapist1 from "@/assets/therapist-1.jpg";
import therapist2 from "@/assets/therapist-2.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Evana Clinique" },
      {
        name: "description",
        content: "Découvrez l'équipe et l'approche thérapeutique d'Evana Clinique : deux sexologues qualifiées pour un accompagnement humain et confidentiel.",
      },
      { property: "og:title", content: "À propos — Evana Clinique" },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: AboutPage,
});

const therapistImgs = [therapist1, therapist2];
const valueIcons = [ShieldCheck, Heart, Users, Sparkles];

interface Therapist { name: string; role: string; creds: string[]; bio: string; approach: string }

function AboutPage() {
  const t = useT();
  const therapists = t<Therapist[]>("about.therapists");
  const values = t<Array<{ title: string; text: string }>>("about.values");

  return (
    <>
      <section className="gradient-warm px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="script text-2xl text-foreground/60">{t<string>("about.eyebrow")}</p>
          <h1 className="mt-3 text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
            {t<string>("about.titleA")}<br /> {t<string>("about.titleB")}<em className="italic">{t<string>("about.titleEm")}</em>{t<string>("about.titleC")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t<string>("about.lead")}
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t<string>("about.thEyebrow")}
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl leading-tight text-foreground md:text-5xl">
            {t<string>("about.thTitle")}
          </h2>
          <div className="mt-14 grid gap-12 md:grid-cols-2">
            {therapists.map((th, i) => (
              <article key={th.name} className="rounded-[2rem] border border-border bg-card p-6 shadow-soft md:p-8">
                <div className="arch-frame aspect-[4/5]">
                  <img
                    src={therapistImgs[i]}
                    alt={th.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={900}
                    height={1100}
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-3xl text-foreground">{th.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{th.role}</p>
                  <p className="mt-5 text-base leading-relaxed text-foreground/85">{th.bio}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {th.creds.map((c) => (
                      <span key={c} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground">
                        {c}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-xs italic text-muted-foreground">{th.approach}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/60 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t<string>("about.valuesEyebrow")}
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              {t<string>("about.valuesTitle")}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={v.title} className="rounded-3xl bg-background p-7 shadow-soft">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="script text-5xl leading-tight text-foreground/80 md:text-6xl">
            {t<string>("about.quote")}
          </p>
          <footer className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
            {t<string>("about.quoteAuthor")}
          </footer>
        </blockquote>
      </section>

      <CTABand title={t<string>("about.ctaTitle")} description={t<string>("about.ctaDesc")} />
    </>
  );
}

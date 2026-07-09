import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/site/CTABand";

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  problems: string[];
  solutionTitle: string;
  solutionText: string;
  solutionPoints: { title: string; text: string }[];
  processSteps: { n: string; title: string; text: string }[];
  price: string;
  duration: string;
}

export function ServicePage(p: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="script text-2xl text-foreground/60">{p.eyebrow}</p>
            <h1 className="mt-3 text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl">
              {p.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {p.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-base">
                <Link to="/rendez-vous">
                  Réserver une consultation <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{p.duration}</span> · <span>{p.price}</span>
              </div>
            </div>
          </div>
          <div className="arch-frame relative aspect-[4/5] w-full max-w-md justify-self-end shadow-elegant">
            <img
              src={p.heroImage}
              alt={p.heroAlt}
              className="h-full w-full object-cover"
              width={1400}
              height={1000}
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-muted/60 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Ce que vous ressentez peut-être
          </p>
          <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
            Vous n'êtes <em className="italic">pas</em> seul·e à traverser cela.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {p.problems.map((pr) => (
              <div key={pr} className="rounded-2xl border border-border bg-background p-6 text-base text-foreground/85">
                « {pr} »
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-lg italic text-foreground/70">
            C'est une démarche normale et fréquente.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Notre approche
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              {p.solutionTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {p.solutionText}
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {p.solutionPoints.map((s) => (
              <div key={s.title} className="rounded-3xl bg-accent p-8">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <h3 className="mt-5 text-xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted/60 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Comment ça se passe
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              Un cadre simple et rassurant.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {p.processSteps.map((s) => (
              <div key={s.n} className="rounded-3xl border border-border bg-background p-8">
                <span className="font-display text-6xl text-accent">{s.n}</span>
                <h3 className="mt-4 text-xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Un premier rendez-vous, à votre rythme."
        description="Réponse sous 24 h — sans engagement, sans jugement."
      />
    </>
  );
}

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/site/CTABand";
import { useT } from "@/lib/i18n";
import { JANE_BOOK_URL } from "@/lib/links";

export interface ServicePageProps {
  /** Translation namespace key: 'individuel' | 'couples' */
  ns: "individuel" | "couples";
  heroImage: string;
}

export function ServicePage({ ns, heroImage }: ServicePageProps) {
  const t = useT();
  const k = (p: string) => `${ns}.${p}`;
  const problems = t<string[]>(k("problems"));
  const solutionPoints = t<Array<{ title: string; text: string }>>(k("solutionPoints"));
  const processSteps = t<Array<{ title: string; text: string }>>(k("processSteps"));

  return (
    <>
      {/* Hero */}
      <section className="px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="script text-2xl text-foreground/60">{t<string>(k("eyebrow"))}</p>
            <h1 className="mt-3 text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl">
              {t<string>(k("title"))}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t<string>(k("intro"))}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-base">
                <a href={JANE_BOOK_URL} target="_blank" rel="noopener noreferrer">
                  {t<string>("services.book")} <HugeiconsIcon icon={ArrowRight02Icon} size={16} className="ml-1" />
                </a>
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{t<string>(k("duration"))}</span> · <span>{t<string>(k("price"))}</span>
              </div>
            </div>
          </div>
          <div className="arch-frame relative aspect-[4/5] w-full max-w-md justify-self-end shadow-elegant">
            <img
              src={heroImage}
              alt={t<string>(k("heroAlt"))}
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
            {t<string>("services.problemEyebrow")}
          </p>
          <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
            {t<string>("services.problemTitleA")}<em className="italic">{t<string>("services.problemTitleEm")}</em>{t<string>("services.problemTitleB")}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {problems.map((pr) => (
              <div key={pr} className="rounded-2xl border border-border bg-background p-6 text-base text-foreground/85">
                « {pr} »
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-lg italic text-foreground/70">
            {t<string>("services.normal")}
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t<string>("services.approach")}
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              {t<string>(k("solutionTitle"))}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {t<string>(k("solutionText"))}
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {solutionPoints.map((s) => (
              <div key={s.title} className="rounded-3xl bg-accent p-8">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />
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
              {t<string>("services.how")}
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-foreground md:text-5xl">
              {t<string>("services.howTitle")}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {processSteps.map((s, i) => (
              <div key={s.title} className="rounded-3xl border border-border bg-background p-8">
                <span className="font-display text-6xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title={t<string>("services.ctaTitle")} description={t<string>("services.ctaDesc")} />
    </>
  );
}

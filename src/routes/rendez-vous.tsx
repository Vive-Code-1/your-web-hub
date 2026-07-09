import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Lock, Video, Clock, ShieldCheck, ArrowRight, User, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/rendez-vous")({
  head: () => ({
    meta: [
      { title: "Prendre rendez-vous — Evana Clinique" },
      {
        name: "description",
        content: "Réservez votre consultation en sexologie en ligne. Formulaire simple, confidentiel. Réponse sous 24 h.",
      },
      { property: "og:title", content: "Prendre rendez-vous — Evana Clinique" },
      { property: "og:url", content: "/rendez-vous" },
    ],
    links: [{ rel: "canonical", href: "/rendez-vous" }],
  }),
  component: BookingPage,
});

const typeIcons = [User, Users, MessageCircle];
const timeSlots = ["9h00", "10h30", "12h00", "14h00", "15h30", "17h00", "18h30", "20h00"];

function BookingPage() {
  const t = useT();
  const [typeIdx, setTypeIdx] = useState(0);
  const [formatIdx, setFormatIdx] = useState(0);
  const [slot, setSlot] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const consultTypes = t<Array<{ title: string; desc: string }>>("booking.types");
  const formats = t<string[]>("booking.formats");
  const expectations = t<string[]>("booking.expectations");
  const commit = t<string[]>("booking.commit");
  const commitIcons = [Lock, Video, Clock, ShieldCheck];

  return (
    <>
      <section className="gradient-warm px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="script text-2xl text-foreground/60">{t<string>("booking.eyebrow")}</p>
          <h1 className="mt-3 text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
            {t<string>("booking.titleA")}<em className="italic">{t<string>("booking.titleEm")}</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t<string>("booking.lead")}
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft md:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                  <Check className="h-8 w-8 text-foreground" />
                </div>
                <h2 className="mt-6 text-3xl text-foreground">{t<string>("booking.submittedTitle")}</h2>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  {t<string>("booking.submittedText")}
                </p>
                <Button asChild className="mt-8 rounded-full">
                  <Link to="/">{t<string>("common.backHome")}</Link>
                </Button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-10"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {t<string>("booking.step1Label")}
                  </p>
                  <h2 className="mt-1 text-2xl text-foreground">{t<string>("booking.step1")}</h2>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {consultTypes.map((tp, i) => {
                      const Icon = typeIcons[i];
                      return (
                        <button
                          key={tp.title}
                          type="button"
                          onClick={() => setTypeIdx(i)}
                          className={`flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-all ${
                            typeIdx === i ? "border-foreground bg-accent" : "border-border bg-background hover:border-foreground/40"
                          }`}
                        >
                          <Icon className="h-5 w-5 text-foreground" />
                          <span className="font-medium text-foreground">{tp.title}</span>
                          <span className="text-xs text-muted-foreground">{tp.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {t<string>("booking.step2Label")}
                  </p>
                  <h2 className="mt-1 text-2xl text-foreground">{t<string>("booking.step2")}</h2>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {formats.map((f, i) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFormatIdx(i)}
                        className={`rounded-full border px-5 py-2.5 text-sm transition ${
                          formatIdx === i ? "border-foreground bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-foreground/40"
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {t<string>("booking.step3Label")}
                  </p>
                  <h2 className="mt-1 text-2xl text-foreground">{t<string>("booking.step3")}</h2>
                  <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-4">
                    {timeSlots.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSlot(s)}
                        className={`rounded-xl border py-3 text-sm transition ${
                          slot === s ? "border-foreground bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-foreground/40"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">{t<string>("booking.step3Note")}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {t<string>("booking.step4Label")}
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">{t<string>("booking.firstName")}</Label>
                      <Input id="firstName" className="mt-2 h-12 rounded-xl" required />
                    </div>
                    <div>
                      <Label htmlFor="email">{t<string>("booking.email")}</Label>
                      <Input id="email" type="email" className="mt-2 h-12 rounded-xl" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="note">{t<string>("booking.note")}</Label>
                    <Textarea id="note" rows={4} className="mt-2 rounded-xl" placeholder={t<string>("booking.notePh")} />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full py-6 text-base">
                  {t<string>("booking.submit")} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <p className="text-center text-xs text-muted-foreground">{t<string>("booking.encrypted")}</p>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-accent p-8">
              <h3 className="script text-2xl text-foreground/80">{t<string>("booking.expect")}</h3>
              <ul className="mt-5 space-y-4">
                {expectations.map((e) => (
                  <li key={e} className="flex gap-3 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-foreground" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-border bg-background p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t<string>("booking.commitments")}
              </p>
              <div className="mt-4 space-y-4">
                {commit.map((label, i) => {
                  const Icon = commitIcons[i];
                  return (
                    <div key={label} className="flex items-center gap-3 text-sm text-foreground">
                      <Icon className="h-4 w-4" />
                      {label}
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 text-xs italic text-muted-foreground">{t<string>("booking.quote")}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

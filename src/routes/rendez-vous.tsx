import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Lock, Video, Clock, ShieldCheck, ArrowRight, User, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/rendez-vous")({
  head: () => ({
    meta: [
      { title: "Prendre rendez-vous — Evana Clinique" },
      {
        name: "description",
        content:
          "Réservez votre consultation en sexologie en ligne. Formulaire simple, confidentiel. Réponse sous 24 h.",
      },
      { property: "og:title", content: "Prendre rendez-vous — Evana Clinique" },
      { property: "og:url", content: "/rendez-vous" },
    ],
    links: [{ rel: "canonical", href: "/rendez-vous" }],
  }),
  component: BookingPage,
});

const consultTypes = [
  { id: "individual", icon: User, title: "Individuel", desc: "50 min · 120 €" },
  { id: "couple", icon: Users, title: "Couple", desc: "60 min · 150 €" },
  { id: "discovery", icon: MessageCircle, title: "Appel découverte", desc: "10 min · Gratuit" },
];

const formats = [
  { id: "video", label: "Vidéo sécurisée" },
  { id: "chat", label: "Chat écrit" },
];

const timeSlots = ["9h00", "10h30", "12h00", "14h00", "15h30", "17h00", "18h30", "20h00"];

const expectations = [
  "Un formulaire court, sans questions intrusives",
  "Une confirmation par e-mail sous 24 h",
  "Un lien vidéo privé, envoyé 30 min avant la séance",
  "Aucune donnée partagée avec un tiers, jamais",
];

function BookingPage() {
  const [type, setType] = useState("individual");
  const [format, setFormat] = useState("video");
  const [slot, setSlot] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="gradient-warm px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="script text-2xl text-foreground/60">un premier pas</p>
          <h1 className="mt-3 text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
            Prendre <em className="italic">rendez-vous.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Quelques informations pour vous orienter vers la sexologue qui vous
            correspond. Confidentiel, sans engagement, sans jugement.
          </p>
        </div>
      </section>

      {/* Form + Side panel */}
      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Form */}
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft md:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                  <Check className="h-8 w-8 text-foreground" />
                </div>
                <h2 className="mt-6 text-3xl text-foreground">Demande envoyée.</h2>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  Nous revenons vers vous sous 24 h avec la confirmation de
                  votre créneau et un lien sécurisé.
                </p>
                <Button asChild className="mt-8 rounded-full">
                  <Link to="/">Retour à l'accueil</Link>
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
                {/* Step 1 */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Étape 1
                  </p>
                  <h2 className="mt-1 text-2xl text-foreground">
                    Quel type de consultation ?
                  </h2>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {consultTypes.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setType(t.id)}
                        className={`flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-all ${
                          type === t.id
                            ? "border-foreground bg-accent"
                            : "border-border bg-background hover:border-foreground/40"
                        }`}
                      >
                        <t.icon className="h-5 w-5 text-foreground" />
                        <span className="font-medium text-foreground">{t.title}</span>
                        <span className="text-xs text-muted-foreground">{t.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Étape 2
                  </p>
                  <h2 className="mt-1 text-2xl text-foreground">Format préféré</h2>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {formats.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setFormat(f.id)}
                        className={`rounded-full border px-5 py-2.5 text-sm transition ${
                          format === f.id
                            ? "border-foreground bg-primary text-primary-foreground"
                            : "border-border bg-background text-foreground hover:border-foreground/40"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3 */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Étape 3
                  </p>
                  <h2 className="mt-1 text-2xl text-foreground">Créneau souhaité</h2>
                  <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-4">
                    {timeSlots.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSlot(s)}
                        className={`rounded-xl border py-3 text-sm transition ${
                          slot === s
                            ? "border-foreground bg-primary text-primary-foreground"
                            : "border-border bg-background text-foreground hover:border-foreground/40"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Vous recevrez la liste complète des dates après validation.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Étape 4 — Vos coordonnées
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">Prénom (ou pseudonyme)</Label>
                      <Input id="firstName" className="mt-2 h-12 rounded-xl" required />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        className="mt-2 h-12 rounded-xl"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="note">Souhaitez-vous partager quelque chose ? (optionnel)</Label>
                    <Textarea
                      id="note"
                      rows={4}
                      className="mt-2 rounded-xl"
                      placeholder="Aucun détail requis — quelques mots suffisent."
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full py-6 text-base">
                  Envoyer ma demande <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  🔒 Vos informations sont chiffrées et jamais partagées.
                </p>
              </form>
            )}
          </div>

          {/* Side panel */}
          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-accent p-8">
              <h3 className="script text-2xl text-foreground/80">Ce qui vous attend</h3>
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
                Nos engagements
              </p>
              <div className="mt-4 space-y-4">
                {[
                  { i: Lock, t: "100 % confidentiel" },
                  { i: Video, t: "Vidéo chiffrée bout en bout" },
                  { i: Clock, t: "Réponse sous 24 h" },
                  { i: ShieldCheck, t: "Aucune donnée revendue" },
                ].map((x) => (
                  <div key={x.t} className="flex items-center gap-3 text-sm text-foreground">
                    <x.i className="h-4 w-4" />
                    {x.t}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs italic text-muted-foreground">
                « C'est une démarche normale et fréquente. »
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

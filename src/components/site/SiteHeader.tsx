import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const t = useT();

  const nav = [
    { to: "/", label: t<string>("nav.home") },
    { to: "/services/individuel", label: t<string>("nav.individual") },
    { to: "/services/couples", label: t<string>("nav.couples") },
    { to: "/boutique", label: t<string>("nav.boutique") },
    { to: "/a-propos", label: t<string>("nav.about") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="script text-3xl text-foreground">Evana</span>
          <span className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground">
            CLINIQUE
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <Button asChild className="rounded-full px-6">
            <Link to="/rendez-vous">{t<string>("nav.book")}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-full p-2 text-foreground"
            aria-label={t<string>("nav.menu")}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foreground/80 hover:bg-muted"
                activeProps={{ className: "text-foreground font-medium bg-muted" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-full">
              <Link to="/rendez-vous" onClick={() => setOpen(false)}>
                {t<string>("nav.book")}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

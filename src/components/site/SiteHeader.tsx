import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/services/individuel", label: "Individuel" },
  { to: "/services/couples", label: "Couples" },
  { to: "/boutique", label: "Boutique" },
  { to: "/a-propos", label: "À propos" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

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

        <div className="hidden md:block">
          <Button asChild className="rounded-full px-6">
            <Link to="/rendez-vous">Prendre rendez-vous</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-full p-2 text-foreground md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
                Prendre rendez-vous
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

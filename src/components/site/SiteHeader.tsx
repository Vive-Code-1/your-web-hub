import { Link } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useT } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import { JANE_BOOK_URL } from "@/lib/links";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const t = useT();

  const proSubmenu = [
    { to: "/nos-professionnelles", label: t<string>("nav.team") },
    { to: "/notre-approche", label: t<string>("nav.approach") },
    { to: "/services-expertises", label: t<string>("nav.expertise") },
    { to: "/collaboration", label: t<string>("nav.collaboration") },
  ] as const;

  const nav = [
    { to: "/", label: t<string>("nav.home") },
    { to: "/services/individuel", label: t<string>("nav.individual") },
    { to: "/services/couples", label: t<string>("nav.couples") },
    { to: "/boutique", label: t<string>("nav.boutique") },
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
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-foreground/80 outline-none transition-colors hover:text-foreground">
              {t<string>("nav.professionals")}
              <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-2xl border-border">
              {proSubmenu.map((s) => (
                <DropdownMenuItem key={s.to} asChild className="rounded-xl">
                  <Link to={s.to} className="w-full cursor-pointer">
                    {s.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            to="/a-propos"
            className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            {t<string>("nav.about")}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <Button asChild className="rounded-full px-6">
            <a href={JANE_BOOK_URL} target="_blank" rel="noopener noreferrer">
              {t<string>("nav.book")}
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-full p-2 text-foreground"
            aria-label={t<string>("nav.menu")}
          >
            <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={24} />
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
            <div className="mt-2 px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t<string>("nav.professionals")}
            </div>
            {proSubmenu.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:bg-muted"
              >
                {s.label}
              </Link>
            ))}
            <Link
              to="/a-propos"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-foreground/80 hover:bg-muted"
            >
              {t<string>("nav.about")}
            </Link>
            <a
              href={JANE_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              {t<string>("nav.book")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

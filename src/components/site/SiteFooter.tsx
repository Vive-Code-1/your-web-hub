import { Link } from "@tanstack/react-router";
import { Mail, Shield, Instagram } from "lucide-react";
import { useT, useL } from "@/lib/i18n";

export function SiteFooter() {
  const t = useT();
  const l = useL();
  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/60">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex flex-col leading-none">
              <span className="script text-3xl text-foreground">Evana</span>
              <span className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground">
                {t<string>("footer.subtitle")}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t<string>("footer.tagline")}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>{t<string>("footer.secure")}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              {t<string>("footer.navTitle")}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">{t<string>("footer.links.home")}</Link></li>
              <li><Link to="/nos-professionnelles" className="hover:text-foreground">{l({ fr: "Nos professionnelles", en: "Our professionals" })}</Link></li>
              <li><Link to="/notre-approche" className="hover:text-foreground">{l({ fr: "Notre approche", en: "Our approach" })}</Link></li>
              <li><Link to="/services-expertises" className="hover:text-foreground">{l({ fr: "Services & expertises", en: "Services & expertise" })}</Link></li>
              <li><Link to="/collaboration" className="hover:text-foreground">{l({ fr: "Collaboration", en: "Collaboration" })}</Link></li>
              <li><Link to="/a-propos" className="hover:text-foreground">{t<string>("footer.links.about")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              {t<string>("footer.contact")}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@evanaclinique.com
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" /> @evanaclinique
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              {t<string>("footer.reply")}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Evana Clinique. {t<string>("footer.rights")}</p>
          <p>{t<string>("footer.privacy")}</p>
        </div>
      </div>
    </footer>
  );
}

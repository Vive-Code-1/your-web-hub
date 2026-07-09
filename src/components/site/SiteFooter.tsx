import { Link } from "@tanstack/react-router";
import { Mail, Shield, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/60">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex flex-col leading-none">
              <span className="script text-3xl text-foreground">Evana</span>
              <span className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground">
                CLINIQUE MULTIDISCIPLINAIRE
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Deux sexologues, une mission : t'accompagner dans l'amélioration
              de ton bien-être personnel, relationnel et sexuel — en toute
              confidentialité.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>Consultations 100 % confidentielles & sécurisées</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Accueil</Link></li>
              <li><Link to="/services/individuel" className="hover:text-foreground">Sexologie individuelle</Link></li>
              <li><Link to="/services/couples" className="hover:text-foreground">Thérapie de couple</Link></li>
              <li><Link to="/boutique" className="hover:text-foreground">Boutique en ligne</Link></li>
              <li><Link to="/a-propos" className="hover:text-foreground">À propos</Link></li>
              <li><Link to="/rendez-vous" className="hover:text-foreground">Prendre rendez-vous</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Contact
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
              Réponse sous 24 h ouvrables.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Evana Clinique. Tous droits réservés.</p>
          <p>Vos données sont protégées et jamais partagées.</p>
        </div>
      </div>
    </footer>
  );
}

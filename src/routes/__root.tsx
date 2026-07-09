import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";
import { StickyMobileCTA } from "../components/site/StickyMobileCTA";
import { ScrollReveal } from "../components/site/ScrollReveal";
import { LanguageProvider, useT } from "../lib/i18n";

function NotFoundComponent() {
  const t = useT();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-display text-foreground">{t<string>("errors.notFound")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t<string>("errors.notFoundText")}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t<string>("errors.backHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const t = useT();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-display text-foreground">{t<string>("errors.generic")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t<string>("errors.genericText")}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t<string>("errors.retry")}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t<string>("errors.home")}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Evana Clinique — Sexologie en ligne, confidentielle & sans jugement" },
      {
        name: "description",
        content:
          "Parlez à un·e sexologue qualifié·e depuis chez vous. Consultations en ligne 100 % confidentielles, sécurisées et sans jugement. Rendez-vous en moins de 24 h.",
      },
      { name: "author", content: "Evana Clinique" },
      { property: "og:site_name", content: "Evana Clinique" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Evana Clinique — Sexologie en ligne, confidentielle & sans jugement" },
      {
        property: "og:description",
        content: "Parlez à un·e sexologue qualifié·e depuis chez vous. Consultations en ligne 100 % confidentielles, sécurisées et sans jugement. Rendez-vous en moins de 24 h.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Evana Clinique — Sexologie en ligne, confidentielle & sans jugement" },
      { name: "twitter:description", content: "Parlez à un·e sexologue qualifié·e depuis chez vous. Consultations en ligne 100 % confidentielles, sécurisées et sans jugement. Rendez-vous en moins de 24 h." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/42fafc10-b1c9-4db7-b3ab-40c0030381cb" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/42fafc10-b1c9-4db7-b3ab-40c0030381cb" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;700&family=Dancing+Script:wght@500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Evana Clinique",
          description:
            "Clinique multidisciplinaire de sexologie en ligne. Consultations confidentielles avec des sexologues qualifié·e·s.",
          medicalSpecialty: "Sexology",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="flex min-h-screen flex-col">
          <ScrollReveal />
          <SiteHeader />
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
          <StickyMobileCTA />
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

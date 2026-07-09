import { useLang } from "@/lib/i18n";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`inline-flex items-center rounded-full border border-border/70 bg-background/70 p-1 text-xs font-medium ${className}`}
      role="group"
      aria-label="Language switch"
    >
      <button
        type="button"
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
        className={`rounded-full px-3 py-1 transition ${
          lang === "fr" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"
        }`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1 transition ${
          lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
}

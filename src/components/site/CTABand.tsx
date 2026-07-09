import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";
import { JANE_BOOK_URL } from "@/lib/links";

interface CTABandProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
}

export function CTABand({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo = JANE_BOOK_URL,
}: CTABandProps) {
  const t = useT();
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-accent px-8 py-16 text-center md:px-16 md:py-24">
        <p className="script text-2xl text-foreground/70">{eyebrow ?? t<string>("common.notAlone")}</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-4xl leading-tight text-foreground md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-base text-foreground/70">
            {description}
          </p>
        )}
        <div className="mt-8">
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-base">
            <a href={primaryTo} target="_blank" rel="noopener noreferrer">{primaryLabel ?? t<string>("common.bookCta")}</a>
          </Button>
        </div>
        <p className="mt-4 text-xs text-foreground/60">{t<string>("common.available24h")}</p>
      </div>
    </section>
  );
}

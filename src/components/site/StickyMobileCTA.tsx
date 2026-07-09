import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { useT } from "@/lib/i18n";
import { JANE_BOOK_URL } from "@/lib/links";

export function StickyMobileCTA() {
  const t = useT();
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border/60 bg-background/95 p-3 backdrop-blur-md md:hidden">
      <a
        href={JANE_BOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant"
      >
        <HugeiconsIcon icon={Calendar03Icon} size={16} />
        {t<string>("common.bookCta")}
      </a>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import { useT } from "@/lib/i18n";

export function StickyMobileCTA() {
  const t = useT();
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border/60 bg-background/95 p-3 backdrop-blur-md md:hidden">
      <Link
        to="/rendez-vous"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant"
      >
        <Calendar className="h-4 w-4" />
        {t<string>("common.bookCta")}
      </Link>
    </div>
  );
}

"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { Link, usePathname } from "../../i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();

  const other = locale === "en" ? "ne" : "en";

  return (
    <Link
      // @ts-expect-error -- pathname/params pair is valid at runtime
      href={{ pathname, params }}
      locale={other}
      className="rounded-full border border-pine/20 px-3 py-1.5 text-xs font-semibold text-pine/80 hover:border-marigold-deep hover:text-marigold-deep transition-colors"
      aria-label={other === "ne" ? "नेपालीमा हेर्नुहोस्" : "Switch to English"}
    >
      {other === "ne" ? "नेपाली" : "EN"}
    </Link>
  );
}

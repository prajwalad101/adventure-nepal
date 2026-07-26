import type { Metadata } from "next";
import { getPathname } from "../../i18n/navigation";
import { routing } from "../../i18n/routing";
import { site } from "./site";

type PathnameHref = Parameters<typeof getPathname>[0]["href"];

export function absoluteUrl(pathname: string): string {
  return `${site.url}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

/** Canonical + hreflang for a localized path (en → /en/…, ne → /np/…). */
export function buildAlternates(
  locale: string,
  href: PathnameHref,
): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};

  for (const loc of routing.locales) {
    languages[loc] = absoluteUrl(
      getPathname({ locale: loc, href, forcePrefix: true }),
    );
  }
  languages["x-default"] = languages[routing.defaultLocale];

  return {
    canonical: languages[locale] ?? languages[routing.defaultLocale],
    languages,
  };
}

/** Parse NPR amounts like "Rs 6,000" or "रु ६,०००" into a number. */
export function parsePriceNpr(price: string): number | undefined {
  const ascii = price.replace(/[\u0966-\u096F]/g, (d) =>
    String(d.charCodeAt(0) - 0x0966),
  );
  const digits = ascii.replace(/[^\d]/g, "");
  if (!digits) return undefined;
  return Number(digits);
}

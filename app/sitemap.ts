import type { MetadataRoute } from "next";
import { getPathname } from "../i18n/navigation";
import { routing } from "../i18n/routing";
import { packages } from "./lib/packages";
import { absoluteUrl } from "./lib/seo";

type Href = string;

function languagesFor(href: Href): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = absoluteUrl(
      getPathname({ locale, href, forcePrefix: true }),
    );
  }
  languages["x-default"] = languages[routing.defaultLocale];
  return languages;
}

function entriesFor(href: Href, priority: number): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: absoluteUrl(getPathname({ locale, href, forcePrefix: true })),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
    alternates: { languages: languagesFor(href) },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entriesFor("/", 1),
    ...entriesFor("/contact", 0.7),
    ...packages.flatMap((pkg) =>
      entriesFor(`/packages/${pkg.slug}`, 0.9),
    ),
  ];
}

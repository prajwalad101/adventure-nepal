import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "../../i18n/navigation";
import { getPackages } from "../lib/packages";
import { site } from "../lib/site";
import Ridgeline from "./Ridgeline";

export default async function SiteFooter() {
  const t = await getTranslations();
  const locale = await getLocale();
  const packages = getPackages(locale);

  return (
    <footer id="contact" className="scroll-mt-16 bg-pine pb-10 text-snow">
      <Ridgeline className="h-10 w-full rotate-180 text-background sm:h-14" />
      <div className="mx-auto max-w-6xl px-5 pt-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              {t("footer.title")}
            </h2>
            <p className="mt-2 text-sm text-snow/75">{t("footer.subtitle")}</p>
            <div className="mt-5 text-sm">
              <a
                href={site.telHref}
                className="block font-semibold text-marigold transition-colors hover:text-snow"
              >
                {site.phone.display}
              </a>
              <a
                href={site.mailtoHref}
                className="mt-1 block text-snow/80 transition-colors hover:text-marigold"
              >
                {site.email}
              </a>
              <p className="mt-1 text-snow/60">{t("map.address")}</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-marigold">
                {t("footer.explore")}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-snow/80 transition-colors hover:text-marigold"
                  >
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-snow/80 transition-colors hover:text-marigold"
                  >
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-marigold">
                {t("footer.trips")}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {packages.map((pkg) => (
                  <li key={pkg.slug}>
                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="text-snow/80 transition-colors hover:text-marigold"
                    >
                      {pkg.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-snow/50">
          {t("footer.copyright", {
            year: new Date().getFullYear(),
            name: site.name,
          })}
        </p>
      </div>
    </footer>
  );
}

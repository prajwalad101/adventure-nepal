import { getTranslations } from "next-intl/server";
import { site } from "../lib/site";
import Ridgeline from "./Ridgeline";

export default async function SiteFooter() {
  const t = await getTranslations();

  return (
    <footer id="contact" className="scroll-mt-16 bg-pine pb-10 text-snow">
      <Ridgeline className="h-10 w-full rotate-180 text-background sm:h-14" />
      <div className="mx-auto max-w-6xl px-5 pt-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              {t("footer.title")}
            </h2>
            <p className="mt-2 max-w-md text-sm text-snow/75">
              {t("footer.subtitle")}
            </p>
          </div>
          <div className="text-sm">
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

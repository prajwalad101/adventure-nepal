import { getTranslations } from "next-intl/server";
import { Link } from "../../i18n/navigation";
import { site } from "../lib/site";
import SiteMark from "./SiteMark";

export default async function SiteHeader() {
  const t = await getTranslations();

  return (
    <header className="sticky top-0 z-20 border-b border-pine/10 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-pine"
          aria-label={site.name}
        >
          <SiteMark />
        </Link>
        <Link
          href="/contact"
          className="rounded-full bg-pine px-4 py-2 text-snow transition-colors hover:bg-pine-soft"
        >
          {t("hero.ctaContact")}
        </Link>
      </nav>
    </header>
  );
}

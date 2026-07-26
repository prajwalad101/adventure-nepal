import { getLocale, getTranslations } from "next-intl/server";
import { Link, getPathname } from "../../i18n/navigation";
import { site } from "../lib/site";
import LanguageSwitcher from "./LanguageSwitcher";
import SiteMark from "./SiteMark";

export type SiteHeaderCta = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  cta?: SiteHeaderCta;
};

const ctaClassName =
  "rounded-full bg-pine px-4 py-2 text-snow transition-colors hover:bg-pine-soft";

const navLinkClassName =
  "text-sm font-semibold text-pine/75 transition-colors hover:text-marigold-deep";

export default async function SiteHeader({ cta }: SiteHeaderProps) {
  const t = await getTranslations();
  const locale = await getLocale();
  const packagesHref = `${getPathname({ locale, href: "/", forcePrefix: true })}#packages`;

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
        <div className="flex items-center gap-3 sm:gap-5">
          <a href={packagesHref} className={navLinkClassName}>
            {t("nav.packages")}
          </a>
          <Link href="/contact" className={navLinkClassName}>
            {t("nav.contact")}
          </Link>
          <LanguageSwitcher />
          {cta &&
            (cta.href.startsWith("#") ? (
              <a href={cta.href} className={ctaClassName}>
                {cta.label}
              </a>
            ) : (
              <Link href={cta.href} className={ctaClassName}>
                {cta.label}
              </Link>
            ))}
        </div>
      </nav>
    </header>
  );
}

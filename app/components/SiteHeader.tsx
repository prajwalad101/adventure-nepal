import { getTranslations } from "next-intl/server";
import { Link } from "../../i18n/navigation";
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

export default async function SiteHeader({ cta }: SiteHeaderProps) {
  const t = await getTranslations();

  return (
    <header className="sticky top-0 z-20 border-b border-pine/10 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-pine"
        >
          <SiteMark />
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium sm:gap-6">
          <Link
            href="/#packages"
            className="transition-colors hover:text-marigold-deep"
          >
            {t("nav.packages")}
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

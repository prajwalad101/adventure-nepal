import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../i18n/navigation";
import HeroPostcards from "../components/HeroPostcards";
import ImageCarousel from "../components/ImageCarousel";
import NepalOutline from "../components/NepalOutline";
import Ridgeline from "../components/Ridgeline";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { getPackages } from "../lib/packages";
import { buildAlternates } from "../lib/seo";
import { site } from "../lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const alternates = buildAlternates(locale, "/");

  return {
    title: { absolute: t("homeTitle") },
    description: t("homeDescription"),
    alternates,
    openGraph: {
      type: "website",
      url: alternates.canonical as string,
      title: t("homeTitle"),
      description: t("homeDescription"),
      locale: locale === "ne" ? "ne_NP" : "en_US",
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDescription"),
    },
  };
}

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const packages = getPackages(locale);

  return (
    <div className="flex flex-col flex-1">
      <SiteHeader cta={{ label: t("nav.bookTrip"), href: "/contact" }} />

      <main className="flex flex-1 flex-col">
        {/* Hero — light "postcard" layout; swipeable tour postcards on the right */}
        <section id="top" className="relative overflow-hidden bg-background">
          {/* decorative background — Nepal outline + soft sun glow, behind all content */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 right-0 h-72 w-72 translate-x-1/4 rounded-full bg-marigold/15 blur-3xl sm:h-96 sm:w-96" />
            <NepalOutline className="absolute left-1/2 top-1/2 w-[140%] max-w-none -translate-x-1/2 -translate-y-1/2 sm:w-[90%] lg:w-[75%]" />
          </div>
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1fr_minmax(0,44%)] lg:pb-28">
            <div>
              <h1 className="rise rise-1 font-display text-4xl font-bold leading-[1.05] text-pine sm:text-6xl">
                {t("hero.title")}
              </h1>
              <p className="rise rise-2 mt-5 max-w-lg text-pine/70 sm:text-lg">
                {t("hero.subtitle")}
              </p>
              <div className="rise rise-3 mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#packages"
                  className="inline-block rounded-full bg-pine px-6 py-3 font-semibold text-snow hover:bg-pine-soft transition-colors"
                >
                  {t("hero.ctaPackages")}
                </a>
                <Link
                  href="/contact"
                  className="inline-block rounded-full border-2 border-pine/25 px-6 py-3 font-semibold text-pine hover:border-marigold-deep hover:text-marigold-deep transition-colors"
                >
                  {t("hero.ctaContact")}
                </Link>
              </div>
            </div>
            <div className="rise rise-2">
              <HeroPostcards
                items={packages.map((pkg) => ({
                  src: pkg.images[0].src,
                  alt: pkg.images[0].alt,
                  name: pkg.name,
                  duration: pkg.duration,
                  slug: pkg.slug,
                }))}
              />
            </div>
          </div>
        </section>

        {/* Packages */}
        <section
          id="packages"
          className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-24 scroll-mt-16"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-marigold-deep">
            {t("packages.kicker")}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-pine sm:text-4xl">
            {t("packages.title")}
          </h2>
          <p className="mt-3 max-w-xl text-pine/70">{t("packages.subtitle")}</p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.slug}
                className="flex flex-col overflow-hidden rounded-2xl bg-snow shadow-sm ring-1 ring-pine/10 transition-shadow hover:shadow-md"
              >
                <div className="relative">
                  <ImageCarousel images={pkg.images} className="h-52" />
                  <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-pine/85 px-3 py-1 text-xs font-semibold tracking-wide text-snow">
                    {pkg.duration}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-pine">
                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="hover:text-marigold-deep transition-colors"
                    >
                      {pkg.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-pine/60">
                    {t("packages.route", {
                      origin: pkg.origin,
                      destination: pkg.destination,
                    })}
                  </p>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-marigold-deep">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-pine/60">
                      {t("packages.perPerson")}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-pine/70">{pkg.transport}</p>
                  {pkg.departure && (
                    <p className="mt-1 text-sm font-medium text-marigold-deep">
                      {pkg.departure}
                    </p>
                  )}

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {pkg.highlights.slice(0, 4).map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-pine/15 px-3 py-1 text-xs font-medium text-pine/80"
                      >
                        {f.split(" (")[0]}
                      </li>
                    ))}
                    {pkg.highlights.length > 4 && (
                      <li className="rounded-full border border-pine/15 px-3 py-1 text-xs font-medium text-pine/50">
                        {t("packages.more", { count: pkg.highlights.length - 4 })}
                      </li>
                    )}
                  </ul>

                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="mt-auto pt-6 block"
                  >
                    <span className="block rounded-full bg-pine py-2.5 text-center text-sm font-semibold text-snow hover:bg-pine-soft transition-colors">
                      {t("packages.viewDetails")}
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Why us */}
        <section id="why" className="bg-pine text-snow scroll-mt-16">
          <Ridgeline className="h-10 w-full rotate-180 text-background sm:h-14" />
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-3 sm:py-20">
            {(["guides", "price", "groups"] as const).map((key) => (
              <div key={key}>
                <h3 className="font-display text-lg font-bold text-marigold">
                  {t(`why.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-snow/80">
                  {t(`why.${key}.body`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Find us / map */}
        <section
          id="find-us"
          className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-24 scroll-mt-16"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-marigold-deep">
            {t("map.kicker")}
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-pine sm:text-4xl">
            {t("map.title")}
          </h2>
          <p className="mt-3 max-w-xl text-pine/70">{t("map.subtitle")}</p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_20rem]">
            <iframe
              src={site.mapsEmbedUrl}
              title={t("map.mapTitle", { name: site.name })}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full rounded-2xl border-0 ring-1 ring-pine/10 sm:h-96"
            />
            <div className="flex flex-col justify-center rounded-2xl bg-snow p-6 ring-1 ring-pine/10">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-pine">
                {site.name}
              </h3>
              <p className="mt-2 text-sm text-pine/70">{t("map.address")}</p>
              <a
                href={site.telHref}
                className="mt-4 text-sm font-semibold text-marigold-deep hover:text-pine transition-colors"
              >
                {site.phone.display}
              </a>
              <a
                href={site.mailtoHref}
                className="mt-1 text-sm text-pine/70 hover:text-marigold-deep transition-colors"
              >
                {site.email}
              </a>
              <a
                href={site.mapsLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-pine px-5 py-2.5 text-center text-sm font-semibold text-snow hover:bg-pine-soft transition-colors"
              >
                {t("map.openInMaps")}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

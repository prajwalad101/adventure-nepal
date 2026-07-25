import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../../../i18n/navigation";
import { notFound } from "next/navigation";
import ImageCarousel from "../../../components/ImageCarousel";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import { getPackage, getPackages, packages } from "../../../lib/packages";
import { site } from "../../../lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const pkg = getPackage(slug, locale);
  if (!pkg) return {};
  return {
    title: `${pkg.name} — ${pkg.price} | ${site.name}`,
    description: `${pkg.name} from ${pkg.origin}: ${pkg.duration}, ${pkg.transport}. Full itinerary, pricing and what's included.`,
    openGraph: {
      title: `${pkg.name} | ${site.name}`,
      description: `${pkg.duration} from ${pkg.origin} — ${pkg.price} per person`,
      images: [{ url: pkg.images[0].src }],
    },
  };
}

export default async function PackagePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const pkg = getPackage(slug, locale);
  if (!pkg) notFound();

  const facts = [
    { label: t("pkg.facts.price"), value: t("pkg.perPersonValue", { price: pkg.price }) },
    { label: t("pkg.facts.duration"), value: pkg.duration },
    { label: t("pkg.facts.transport"), value: pkg.transport },
    { label: t("pkg.facts.startsFrom"), value: pkg.origin },
    ...(pkg.departure ? [{ label: t("pkg.facts.departure"), value: pkg.departure }] : []),
    ...(pkg.reserve ? [{ label: t("pkg.facts.privateOption"), value: pkg.reserve }] : []),
  ];

  const related = getPackages(locale).filter((p) => p.slug !== pkg.slug).slice(0, 3);

  return (
    <div className="flex flex-col flex-1">
      <SiteHeader cta={{ label: t("nav.bookThisTrip"), href: "#book" }} />

      <main className="mx-auto w-full max-w-6xl px-5 pb-20">
        {/* Title */}
        <div className="pt-10">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-marigold-deep">
            {t("packages.route", { origin: pkg.origin, destination: pkg.destination })}
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-pine sm:text-5xl">
            {pkg.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-pine/70">
            {pkg.duration} · {pkg.transport}
          </p>
        </div>

        {/* Gallery */}
        <ImageCarousel
          images={pkg.images}
          className="mt-8 h-72 rounded-2xl sm:h-[28rem]"
        />

        {/* Facts bar */}
        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl bg-snow p-6 ring-1 ring-pine/10 sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-marigold-deep">
                {f.label}
              </dt>
              <dd className="mt-1 text-sm font-medium text-pine">{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_20rem]">
          <div>
            {/* Visiting places */}
            <section aria-labelledby="places">
              <h2
                id="places"
                className="font-[family-name:var(--font-display)] text-2xl font-bold text-pine"
              >
                {t("pkg.places")}
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {pkg.highlights.map((place) => (
                  <li
                    key={place}
                    className="rounded-full border border-pine/15 bg-snow px-3 py-1.5 text-sm font-medium text-pine/80"
                  >
                    {place}
                  </li>
                ))}
              </ul>
            </section>

            {/* Itinerary */}
            <section aria-labelledby="itinerary" className="mt-12">
              <h2
                id="itinerary"
                className="font-[family-name:var(--font-display)] text-2xl font-bold text-pine"
              >
                {t("pkg.itinerary")}
              </h2>
              <ol className="mt-6 space-y-8 border-l-2 border-marigold/40 pl-6">
                {pkg.itinerary.map((leg) => (
                  <li key={leg.day} className="relative">
                    <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full bg-marigold" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-marigold-deep">
                      {leg.day}
                    </p>
                    <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-bold text-pine">
                      {leg.title}
                    </h3>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-pine/80">
                      {leg.stops.map((stop) => (
                        <li key={stop} className="flex gap-2">
                          <span className="text-marigold-deep" aria-hidden="true">
                            —
                          </span>
                          {stop}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </section>

            {/* Includes / reserve */}
            <section aria-labelledby="included" className="mt-12">
              <h2
                id="included"
                className="font-[family-name:var(--font-display)] text-2xl font-bold text-pine"
              >
                {t("pkg.included")}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-snow p-6 ring-1 ring-pine/10">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-pine">
                    {t("pkg.inPrice")}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-pine/80">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-marigold-deep" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {pkg.reserve && (
                  <div className="rounded-2xl bg-mist/60 p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-pine">
                      {t("pkg.privateTitle")}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-pine/70">
                      {t("pkg.privateBody", { reserve: pkg.reserve })}
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Notes */}
            {pkg.notes && pkg.notes.length > 0 && (
              <section aria-labelledby="notes" className="mt-12">
                <h2
                  id="notes"
                  className="font-[family-name:var(--font-display)] text-2xl font-bold text-pine"
                >
                  {t("pkg.goodToKnow")}
                </h2>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-pine/80">
                  {pkg.notes.map((note) => (
                    <li key={note} className="flex gap-2">
                      <span className="text-marigold-deep" aria-hidden="true">·</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Booking sidebar */}
          <aside id="book" className="scroll-mt-24">
            <div className="rounded-2xl bg-pine p-6 text-snow lg:sticky lg:top-24">
              <p className="text-sm text-snow/70">{t("pkg.from")}</p>
              <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-marigold">
                {pkg.price}
                <span className="ml-1 text-sm font-medium text-snow/70">{t("pkg.perPerson")}</span>
              </p>
              <p className="mt-1 text-sm text-snow/80">{pkg.duration}</p>
              {pkg.departure && (
                <p className="mt-1 text-sm text-snow/80">{pkg.departure}</p>
              )}
              <a
                href={site.telHref}
                className="mt-5 block rounded-full bg-marigold py-3 text-center font-semibold text-pine hover:bg-marigold-deep hover:text-snow transition-colors"
              >
                {t("pkg.call", { phone: site.phone.display })}
              </a>
              <a
                href={site.whatsappUrl(
                  t("pkg.whatsappPrefill", { name: pkg.name }),
                )}
                className="mt-3 block rounded-full border border-snow/30 py-3 text-center text-sm font-semibold hover:bg-snow/10 transition-colors"
              >
                {t("pkg.whatsapp")}
              </a>
              <p className="mt-4 text-xs leading-relaxed text-snow/60">
                {t("pkg.seatsNote", { transport: pkg.transport })}
              </p>
            </div>
          </aside>
        </div>

        {/* Related */}
        <section aria-labelledby="related" className="mt-20">
          <h2
            id="related"
            className="font-[family-name:var(--font-display)] text-2xl font-bold text-pine"
          >
            {t("pkg.moreTrips")}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/packages/${p.slug}`}
                className="group overflow-hidden rounded-2xl bg-snow ring-1 ring-pine/10 transition-shadow hover:shadow-md"
              >
                <div
                  className="h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(${p.images[0].src.replace("w=1200", "w=600")})` }}
                  role="img"
                  aria-label={p.images[0].alt}
                />
                <div className="p-4">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-pine group-hover:text-marigold-deep transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-pine/60">
                    {p.price} · {p.duration}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

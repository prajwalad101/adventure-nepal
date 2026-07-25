import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '../../i18n/navigation';
import ImageCarousel from '../components/ImageCarousel';
import LanguageSwitcher from '../components/LanguageSwitcher';
import SiteMark from '../components/SiteMark';
import { getPackages } from '../lib/packages';
import { site } from '../lib/site';

function Ridgeline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0,90 L120,42 L240,68 L390,18 L520,58 L660,8 L800,52 L940,26 L1080,62 L1220,20 L1330,50 L1440,34 L1440,90 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default async function Home({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const packages = getPackages(locale);

  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background/90 backdrop-blur border-b border-pine/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-pine"
          >
            <SiteMark />
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium sm:gap-6">
            <a
              href="#packages"
              className="hover:text-marigold-deep transition-colors"
            >
              {t('nav.packages')}
            </a>
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="rounded-full bg-pine px-4 py-2 text-snow hover:bg-pine-soft transition-colors"
            >
              {t('nav.bookTrip')}
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="relative h-[72vh] min-h-120 w-full">
          <Image
            src="https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=2400&q=80"
            alt="Ama Dablam rising above the clouds, Nepal"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-pine via-pine/45 to-pine/15" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-5 pb-24 sm:pb-28">
              <p className="rise text-sm font-medium uppercase tracking-[0.25em] text-marigold">
                {t('hero.kicker')}
              </p>
              <h1 className="rise rise-1 mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-snow drop-shadow-md sm:text-6xl">
                {t('hero.title')}
              </h1>
              <p className="rise rise-2 mt-4 max-w-xl text-base text-snow drop-shadow sm:text-lg">
                {t('hero.subtitle')}
              </p>
              <div className="rise rise-3 mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#packages"
                  className="inline-block rounded-full bg-marigold px-6 py-3 font-semibold text-pine hover:bg-marigold-deep hover:text-snow transition-colors"
                >
                  {t('hero.ctaPackages')}
                </a>
                <Link
                  href="/contact"
                  className="inline-block rounded-full border-2 border-snow/70 px-6 py-3 font-semibold text-snow hover:border-marigold hover:text-marigold transition-colors"
                >
                  {t('hero.ctaContact')}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Ridgeline className="absolute -bottom-px left-0 h-12 w-full text-background sm:h-16" />
      </section>

      {/* Packages */}
      <section
        id="packages"
        className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-24 scroll-mt-16"
      >
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-marigold-deep">
          {t('packages.kicker')}
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-pine sm:text-4xl">
          {t('packages.title')}
        </h2>
        <p className="mt-3 max-w-xl text-pine/70">{t('packages.subtitle')}</p>

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
                  {t('packages.route', {
                    origin: pkg.origin,
                    destination: pkg.destination,
                  })}
                </p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-marigold-deep">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-pine/60">
                    {t('packages.perPerson')}
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
                      {f.split(' (')[0]}
                    </li>
                  ))}
                  {pkg.highlights.length > 4 && (
                    <li className="rounded-full border border-pine/15 px-3 py-1 text-xs font-medium text-pine/50">
                      {t('packages.more', { count: pkg.highlights.length - 4 })}
                    </li>
                  )}
                </ul>

                <Link
                  href={`/packages/${pkg.slug}`}
                  className="mt-auto pt-6 block"
                >
                  <span className="block rounded-full bg-pine py-2.5 text-center text-sm font-semibold text-snow hover:bg-pine-soft transition-colors">
                    {t('packages.viewDetails')}
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
          {(['guides', 'price', 'groups'] as const).map((key) => (
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
          {t('map.kicker')}
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-pine sm:text-4xl">
          {t('map.title')}
        </h2>
        <p className="mt-3 max-w-xl text-pine/70">{t('map.subtitle')}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_20rem]">
          <iframe
            src={site.mapsEmbedUrl}
            title={t('map.mapTitle', { name: site.name })}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full rounded-2xl border-0 ring-1 ring-pine/10 sm:h-96"
          />
          <div className="flex flex-col justify-center rounded-2xl bg-snow p-6 ring-1 ring-pine/10">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-pine">
              {site.name}
            </h3>
            <p className="mt-2 text-sm text-pine/70">{t('map.address')}</p>
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
              {t('map.openInMaps')}
            </a>
          </div>
        </div>
      </section>

      {/* Contact / footer */}
      <footer id="contact" className="bg-pine pb-10 text-snow scroll-mt-16">
        <Ridgeline className="h-10 w-full rotate-180 text-background sm:h-14" />
        <div className="mx-auto max-w-6xl px-5 pt-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold sm:text-3xl">
                {t('footer.title')}
              </h2>
              <p className="mt-2 max-w-md text-sm text-snow/75">
                {t('footer.subtitle')}
              </p>
            </div>
            <div className="text-sm">
              <a
                href={site.telHref}
                className="block font-semibold text-marigold hover:text-snow transition-colors"
              >
                {site.phone.display}
              </a>
              <a
                href={site.mailtoHref}
                className="mt-1 block text-snow/80 hover:text-marigold transition-colors"
              >
                {site.email}
              </a>
              <p className="mt-1 text-snow/60">{t('map.address')}</p>
            </div>
          </div>
          <p className="mt-10 text-xs text-snow/50">
            {t('footer.copyright', {
              year: new Date().getFullYear(),
              name: site.name,
            })}
          </p>
        </div>
      </footer>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import ImageCarousel from "./components/ImageCarousel";
import { packages } from "./lib/packages";

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

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background/90 backdrop-blur border-b border-pine/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-pine"
          >
            Adventure<span className="text-marigold-deep"> Nepal</span>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#packages" className="hover:text-marigold-deep transition-colors">
              Packages
            </a>
            <a href="#why" className="hidden sm:block hover:text-marigold-deep transition-colors">
              Why us
            </a>
            <a
              href="#contact"
              className="rounded-full bg-pine px-4 py-2 text-snow hover:bg-pine-soft transition-colors"
            >
              Book a trip
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="relative h-[72vh] min-h-[480px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=2400&q=80"
            alt="Ama Dablam rising above the clouds, Nepal"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pine via-pine/45 to-pine/15" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-5 pb-24 sm:pb-28">
              <p className="rise text-sm font-medium uppercase tracking-[0.25em] text-marigold">
                Mountains · Lakes · Jungles · Temples
              </p>
              <h1 className="rise rise-1 mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-snow drop-shadow-md sm:text-6xl">
                Your Nepal trip, all taken care of.
              </h1>
              <p className="rise rise-2 mt-4 max-w-xl text-base text-snow drop-shadow sm:text-lg">
                Small-group tours across the whole country — transport, stays
                and meals arranged, so all you carry is a daypack.
              </p>
              <a
                href="#packages"
                className="rise rise-3 mt-8 inline-block rounded-full bg-marigold px-6 py-3 font-semibold text-pine hover:bg-marigold-deep hover:text-snow transition-colors"
              >
                See the packages
              </a>
            </div>
          </div>
        </div>
        <Ridgeline className="absolute -bottom-px left-0 h-12 w-full text-background sm:h-16" />
      </section>

      {/* Packages */}
      <section id="packages" className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-24 scroll-mt-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-marigold-deep">
          Packages
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-pine sm:text-4xl">
          Pick your trip
        </h2>
        <p className="mt-3 max-w-xl text-pine/70">
          Every trip lists exactly what you pay, where you go and what&apos;s
          included. No hidden costs at the trailhead.
        </p>

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
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-pine">
                  <Link href={`/packages/${pkg.slug}`} className="hover:text-marigold-deep transition-colors">
                    {pkg.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-pine/60">
                  {pkg.origin} to {pkg.destination}
                </p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-marigold-deep">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-pine/60">per person</span>
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
                      +{pkg.highlights.length - 4} more
                    </li>
                  )}
                </ul>

                <Link
                  href={`/packages/${pkg.slug}`}
                  className="mt-auto pt-6 block"
                >
                  <span className="block rounded-full bg-pine py-2.5 text-center text-sm font-semibold text-snow hover:bg-pine-soft transition-colors">
                    View details
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
          {[
            {
              title: "Local guides",
              body: "Every trip is led by guides born on these trails — Mustang, Annapurna, Khumbu, Chitwan.",
            },
            {
              title: "One clear price",
              body: "Transport, hotels and meals are in the price you see. You budget once, then relax.",
            },
            {
              title: "Small groups",
              body: "Six to seven people per jeep, never busloads. Fast to move, easy to feed, good company.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-marigold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-snow/80">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / footer */}
      <footer id="contact" className="bg-pine pb-10 text-snow scroll-mt-16">
        <div className="mx-auto max-w-6xl border-t border-snow/15 px-5 pt-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold sm:text-3xl">
                Ready when you are.
              </h2>
              <p className="mt-2 max-w-md text-sm text-snow/75">
                Call or message us on WhatsApp to hold a seat — a small deposit
                confirms your booking.
              </p>
            </div>
            <div className="text-sm">
              <a
                href="tel:+9779841002208"
                className="block font-semibold text-marigold hover:text-snow transition-colors"
              >
                +977 984-100-2208
              </a>
              <a
                href="mailto:hello@adventurenepal.com"
                className="mt-1 block text-snow/80 hover:text-marigold transition-colors"
              >
                hello@adventurenepal.com
              </a>
              <p className="mt-1 text-snow/60">Street No. 15, Lakeside, Pokhara</p>
            </div>
          </div>
          <p className="mt-10 text-xs text-snow/50">
            © {new Date().getFullYear()} Adventure Nepal. Photos via Unsplash.
          </p>
        </div>
      </footer>
    </div>
  );
}

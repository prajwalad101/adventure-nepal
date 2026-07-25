import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import InquiryForm from "../../components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact — Adventure Nepal",
  description:
    "Send an inquiry about any Adventure Nepal package. We reply within a day.",
};

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

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
          <div className="flex items-center gap-4 text-sm font-medium sm:gap-6">
            <Link href="/#packages" className="hover:text-marigold-deep transition-colors">
              {t("nav.packages")}
            </Link>
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 pb-20 pt-12">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-marigold-deep">
          {t("contact.kicker")}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-pine sm:text-5xl">
          {t("contact.title")}
        </h1>
        <p className="mt-3 max-w-xl text-pine/70">{t("contact.subtitle")}</p>

        {/* Direct contact — most visitors just want the number */}
        <div className="mt-10 rounded-2xl bg-pine p-6 text-snow sm:p-8">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-marigold">
            {t("contact.direct.title")}
          </h2>
          <p className="mt-2 text-sm text-snow/80">{t("contact.direct.subtitle")}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="tel:+9779841002208"
              className="rounded-full bg-marigold px-6 py-3 text-center font-[family-name:var(--font-display)] text-lg font-bold text-pine hover:bg-marigold-deep hover:text-snow transition-colors"
            >
              +977 984-100-2208
            </a>
            <a
              href={`https://wa.me/9779841002208?text=${encodeURIComponent("Hi, I have a question about a trip.")}`}
              className="rounded-full border border-snow/30 px-6 py-3 text-center text-sm font-semibold hover:bg-snow/10 transition-colors"
            >
              {t("contact.direct.whatsapp")}
            </a>
            <a
              href="mailto:hello@adventurenepal.com"
              className="text-center text-sm font-semibold text-snow/85 underline underline-offset-4 hover:text-marigold transition-colors"
            >
              hello@adventurenepal.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 flex items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-pine/15" />
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-pine/50">
            {t("contact.form.divider")}
          </span>
          <span className="h-px flex-1 bg-pine/15" />
        </div>

        <div className="mt-8">
          <InquiryForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pine py-10 text-snow">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm sm:flex-row sm:justify-between">
          <p>
            <span className="font-[family-name:var(--font-display)] font-bold">
              Adventure Nepal
            </span>{" "}
            · {t("map.address")}
          </p>
          <p className="text-snow/70">+977 984-100-2208</p>
        </div>
      </footer>
    </div>
  );
}

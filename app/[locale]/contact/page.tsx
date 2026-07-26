import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import InquiryForm from "../../components/InquiryForm";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { buildAlternates } from "../../lib/seo";
import { site } from "../../lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const alternates = buildAlternates(locale, "/contact");

  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
    alternates,
    openGraph: {
      type: "website",
      url: alternates.canonical as string,
      title: t("contactTitle"),
      description: t("contactDescription"),
      locale: locale === "ne" ? "ne_NP" : "en_US",
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: t("contactTitle"),
      description: t("contactDescription"),
    },
  };
}

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 pb-20 pt-12">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-marigold-deep">
          {t("contact.kicker")}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-pine sm:text-5xl">
          {t("contact.title")}
        </h1>
        <p className="mt-3 max-w-xl text-pine/70">{t("contact.subtitle")}</p>

        {/* Direct contact — most visitors just want the number */}
        <div className="mt-10 rounded-2xl bg-pine p-6 text-snow sm:p-8">
          <h2 className="font-display text-xl font-bold text-marigold">
            {t("contact.direct.title")}
          </h2>
          <p className="mt-2 text-sm text-snow/80">
            {t("contact.direct.subtitle")}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={site.telHref}
              className="rounded-full bg-marigold px-6 py-3 text-center font-display text-lg font-bold text-pine transition-colors hover:bg-marigold-deep hover:text-snow"
            >
              {site.phone.display}
            </a>
            <a
              href={site.whatsappUrl(t("contact.direct.whatsappPrefill"))}
              className="rounded-full border border-snow/30 px-6 py-3 text-center text-sm font-semibold transition-colors hover:bg-snow/10"
            >
              {t("contact.direct.whatsapp")}
            </a>
            <a
              href={site.mailtoHref}
              className="text-center text-sm font-semibold text-snow/85 underline underline-offset-4 transition-colors hover:text-marigold"
            >
              {site.email}
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

      <SiteFooter />
    </div>
  );
}

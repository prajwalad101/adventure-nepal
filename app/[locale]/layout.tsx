import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  Noto_Sans_Devanagari,
} from "next/font/google";
import { routing } from "../../i18n/routing";
import JsonLd from "../components/JsonLd";
import { localBusinessJsonLd } from "../lib/json-ld";
import { site } from "../lib/site";
import "../globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const body = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
});

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(site.url),
    title: {
      default: t("homeTitle"),
      template: `%s | ${site.name}`,
    },
    description: t("homeDescription"),
    appleWebApp: {
      title: site.name,
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: locale === "ne" ? "ne_NP" : "en_US",
      title: t("homeTitle"),
      description: t("homeDescription"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDescription"),
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable} ${devanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={localBusinessJsonLd()} />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

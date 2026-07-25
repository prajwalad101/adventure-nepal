import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  Noto_Sans_Devanagari,
} from "next/font/google";
import { routing } from "../../i18n/routing";
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

export const metadata: Metadata = {
  title: `${site.name} — Tours, Treks & Getaways`,
  description:
    "Small-group trips across Nepal — mountains, lakes, jungles and heritage cities. Transparent pricing, local guides, everything arranged.",
};

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
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

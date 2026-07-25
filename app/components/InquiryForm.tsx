"use client";

import { useActionState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { sendInquiry, type InquiryState } from "../[locale]/contact/actions";
import { getPackages } from "../lib/packages";

const initialState: InquiryState = { status: "idle" };

const fieldClasses =
  "mt-1.5 w-full rounded-xl border border-pine/15 bg-background px-4 py-2.5 text-sm text-pine placeholder:text-pine/40 focus:border-marigold-deep focus:outline-none focus:ring-1 focus:ring-marigold-deep";

function PhoneLink({ chunks }: { chunks: React.ReactNode }) {
  return (
    <a href="tel:+9779841002208" className="font-semibold underline hover:no-underline">
      {chunks}
    </a>
  );
}

export default function InquiryForm() {
  const t = useTranslations("contact.form");
  const locale = useLocale();
  const packages = getPackages(locale);
  const [state, formAction, pending] = useActionState(sendInquiry, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl bg-pine p-8 text-snow" role="status">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-marigold">
          {t("successTitle")}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-snow/85">
          {t.rich("successBody", {
            phone: (chunks) => <PhoneLink chunks={chunks} />,
          })}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-2xl bg-snow p-6 ring-1 ring-pine/10 sm:p-8">
      {/* Honeypot — hidden from humans, tempting to bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <label className="block text-sm font-semibold text-pine">
        {t("name")}
        <input
          type="text"
          name="name"
          required
          placeholder={t("namePlaceholder")}
          className={fieldClasses}
        />
      </label>

      <label className="mt-5 block text-sm font-semibold text-pine">
        {t("contact")}
        <input
          type="text"
          name="contact"
          required
          placeholder={t("contactPlaceholder")}
          className={fieldClasses}
        />
      </label>

      <label className="mt-5 block text-sm font-semibold text-pine">
        {t("package")}
        <select name="package" defaultValue="" className={fieldClasses}>
          <option value="">{t("packageNone")}</option>
          {packages.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name} — {p.price}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-5 block text-sm font-semibold text-pine">
        {t("message")}
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t("messagePlaceholder")}
          className={fieldClasses}
        />
      </label>

      {state.status === "error" && (
        <p className="mt-4 rounded-xl bg-marigold/15 px-4 py-3 text-sm text-pine" role="alert">
          {t.rich(state.error ?? "errorSend", {
            phone: (chunks) => <PhoneLink chunks={chunks} />,
          })}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 w-full rounded-full bg-marigold px-6 py-3 font-semibold text-pine hover:bg-marigold-deep hover:text-snow transition-colors disabled:opacity-60 sm:w-auto"
      >
        {pending ? t("sending") : t("submit")}
      </button>
    </form>
  );
}

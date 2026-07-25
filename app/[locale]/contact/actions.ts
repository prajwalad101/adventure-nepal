"use server";

import { Resend } from "resend";
import { getPackage } from "../../lib/packages";

export type InquiryState = {
  status: "idle" | "success" | "error";
  error?: "errorMissing" | "errorSend";
};

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hello@adventurenepal.com";
// ponytail: resend.dev sender works without domain setup; switch to a
// verified adventurenepal.com sender in Resend before launch for deliverability
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Adventure Nepal Website <onboarding@resend.dev>";

export async function sendInquiry(
  _prev: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  // Honeypot: bots fill the hidden field; pretend success so they move on
  if (formData.get("website")) return { status: "success" };

  const name = String(formData.get("name") ?? "").trim();
  const contact = String(formData.get("contact") ?? "").trim();
  // The select submits a slug; resolve to the English name so staff emails
  // read the same regardless of the visitor's language
  const pkgSlug = String(formData.get("package") ?? "").trim();
  const pkg = pkgSlug ? (getPackage(pkgSlug)?.name ?? pkgSlug) : "";
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !contact || !message) {
    return { status: "error", error: "errorMissing" };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: contact.includes("@") ? contact : undefined,
      subject: `Website inquiry from ${name}${pkg ? ` — ${pkg}` : ""}`,
      text: [
        `Name: ${name}`,
        `Contact: ${contact}`,
        `Package: ${pkg || "—"}`,
        "",
        message,
      ].join("\n"),
    });
    if (error) throw error;
  } catch (e) {
    console.error("Inquiry send failed:", e);
    return { status: "error", error: "errorSend" };
  }

  return { status: "success" };
}

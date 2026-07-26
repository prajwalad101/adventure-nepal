'use server';

import { env } from '@/env';
import { Resend } from 'resend';
import { getPackage } from '../../lib/packages';
import { site } from '../../lib/site';

export type InquiryState = {
  status: 'idle' | 'success' | 'error';
  error?: 'errorMissing' | 'errorSend';
};

export async function sendInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  // Honeypot: bots fill the hidden field; pretend success so they move on
  if (formData.get('website')) return { status: 'success' };

  const name = String(formData.get('name') ?? '').trim();
  const contact = String(formData.get('contact') ?? '').trim();
  // The select submits a slug; resolve to the English name so staff emails
  // read the same regardless of the visitor's language
  const pkgSlug = String(formData.get('package') ?? '').trim();
  const pkg = pkgSlug ? (getPackage(pkgSlug)?.name ?? pkgSlug) : '';
  const message = String(formData.get('message') ?? '').trim();

  if (!name || !contact || !message) {
    return { status: 'error', error: 'errorMissing' };
  }

  try {
    const resend = new Resend(env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: env.CONTACT_FROM_EMAIL,
      to: site.email,
      replyTo: contact.includes('@') ? contact : undefined,
      subject: `Website inquiry from ${name}${pkg ? ` — ${pkg}` : ''}`,
      text: [
        `Name: ${name}`,
        `Contact: ${contact}`,
        `Package: ${pkg || '—'}`,
        '',
        message,
      ].join('\n'),
    });
    if (error) throw error;
  } catch (e) {
    console.error('Inquiry send failed:', e);
    return { status: 'error', error: 'errorSend' };
  }

  return { status: 'success' };
}

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';
import { site } from './app/lib/site';

export const env = createEnv({
  server: {
    RESEND_API_KEY: z.string().min(1),
    CONTACT_FROM_EMAIL: z
      .string()
      .min(1)
      .default(`${site.name} Website <ashok@adventurenepal.tours>`),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z
      .string()
      .url()
      .optional()
      .default('https://adventurenepal.tours'),
  },
  runtimeEnv: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});

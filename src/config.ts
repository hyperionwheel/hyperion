import { LocalePrefix } from "next-intl/routing";

export const defaultLocale = "en-US" as const;
export const locales = ["en-US"] as const;

export const localePrefix: LocalePrefix<typeof locales> = "as-needed";

export const localeDetection = false;

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

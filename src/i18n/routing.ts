import { LocalePrefix, defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en-US"] as const;
export const defaultLocale = "en-US" as const;
export const localePrefix: LocalePrefix<typeof locales> = "as-needed";

export const routing = defineRouting({ locales, defaultLocale, localePrefix });

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);

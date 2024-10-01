import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { getContentfulTranslations } from "@/lib/contentful";
import { locales } from "@/i18n/routing";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  const messages = await getContentfulTranslations({ locale });

  return {
    messages,
  };
});

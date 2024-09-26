import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { getContentfulTranslations } from "./lib/contentful";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  const response = await getContentfulTranslations({ locale });

  const messages = response.items.reduce(
    (acc, current) => ({
      ...acc,
      [current.fields.key as string]: current.fields.translation as string,
    }),
    {}
  );

  return {
    messages,
  };
});

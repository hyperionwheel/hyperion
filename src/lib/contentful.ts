import { NextTags } from "@/lib/constants";
import { toTranslationObject } from "@/utils/translations";
import { AbstractIntlMessages } from "next-intl";

export const getContentfulTranslations = async ({
  locale,
  limit = 1000,
  content_type = "translations",
}: {
  locale: string;
  limit?: number;
  content_type?: string;
}): Promise<AbstractIntlMessages> => {
  try {
    const response = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?content_type=${content_type}&locale=${locale}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_API_ACCESS_TOKEN}`,
        },
        next: {
          tags: [NextTags.ContentfulTranslations],
        },
      }
    );

    const data = await response.json();

    return toTranslationObject(data.items);
  } catch (error) {
    console.error(error);

    return {};
  }
};

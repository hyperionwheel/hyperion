import _set from "lodash/set";

import { EntrySkeletonType } from "contentful";
import { AbstractIntlMessages } from "next-intl";

export const toTranslationObject = (
  items: EntrySkeletonType<{ key: string; translation: string }>[]
): AbstractIntlMessages => {
  return items.reduce((acc, item) => {
    if (typeof item.fields.key === "string") {
      return _set({ ...acc }, item.fields.key, item.fields.translation);
    }

    return acc;
  }, {});
};

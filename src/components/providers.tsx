"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

export default function Providers({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: AbstractIntlMessages;
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ParallaxProvider>{children}</ParallaxProvider>
    </NextIntlClientProvider>
  );
}

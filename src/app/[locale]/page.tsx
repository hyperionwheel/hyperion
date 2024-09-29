import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type HomeProps = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: HomeProps): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("home_meta_title"),
    description: t("home_meta_description"),
  };
}

export default function Home({ params: { locale } }: HomeProps) {
  unstable_setRequestLocale(locale);

  return (
    <div className="w-full h-[100dvh] h-[100vh] bg-center bg-no-repeat bg-cover bg-banner-mobile md:bg-banner-tablet lg:bg-banner-desktop"></div>
  );
}

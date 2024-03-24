"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Home from "components/Home";

type Props = {
  // Add custom props here
};

const Homepage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };
  const changeLanguage = (e: any) => {
    const newLocale = e.target.value;
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const clientSideLanguageChange = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
  };
  const handleChangeLanguage = (e: any) => {
    const newLocale =  e.target.value
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }
  const changeTo = router.locale === "en" ? "de" : "en";
  // const changeTo = i18n.resolvedLanguage === 'en' ? 'de' : 'en'

  return (
    <>
      {/* <Header heading={t('h1')} title={t('title')} /> */}
      <Home />

      
    </>
  );
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "vi", ["common", "footer"])),
  },
});

export default Homepage;

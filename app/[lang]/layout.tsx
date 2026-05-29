import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CursorController } from "@/components/CursorController";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { dictionary, isLang, type Lang } from "@/lib/i18n";

export function generateStaticParams() {
  return [{ lang: "it" }, { lang: "en" }];
}

export function generateMetadata({
  params
}: {
  params: { lang: string };
}): Metadata {
  if (!isLang(params.lang)) return {};
  const copy = dictionary[params.lang];

  return {
    title: copy.metaTitle as string,
    description: copy.metaDescription as string,
    alternates: {
      canonical: `/${params.lang}`,
      languages: {
        it: "/it",
        en: "/en"
      }
    },
    openGraph: {
      title: copy.metaTitle as string,
      description: copy.metaDescription as string,
      type: "website",
      locale: params.lang === "it" ? "it_IT" : "en_US"
    }
  };
}

export default function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  if (!isLang(params.lang)) notFound();
  return (
    <>
      <CursorController />
      <SmoothScroll />
      {children}
      <Footer lang={params.lang} />
    </>
  );
}

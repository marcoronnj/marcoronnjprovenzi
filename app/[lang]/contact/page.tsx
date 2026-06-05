import Image from "next/image";
import { notFound } from "next/navigation";
import { Menu } from "@/components/Menu";
import { dictionary, isLang, type Lang } from "@/lib/i18n";

const contactCopy = {
  it: {
    availability: "Bergamo / Worldwide",
    body:
      "Se hai un progetto, un sito da rifare o un'idea ancora grezza, scrivimi. Preferisco partire da una conversazione semplice e capire subito se posso essere utile.",
    emailLabel: "Email",
    meta: "Web designer freelance",
    phoneLabel: "WhatsApp",
    title: "CONTATTI"
  },
  en: {
    availability: "Bergamo / Worldwide",
    body:
      "If you have a project, a website to rebuild or an idea that is still rough, write to me. I prefer starting with a simple conversation and understanding quickly if I can help.",
    emailLabel: "Email",
    meta: "Freelance web designer",
    phoneLabel: "WhatsApp",
    title: "CONTACT"
  }
} satisfies Record<Lang, {
  availability: string;
  body: string;
  emailLabel: string;
  meta: string;
  phoneLabel: string;
  title: string;
}>;

export function generateStaticParams() {
  return [{ lang: "it" }, { lang: "en" }];
}

export function generateMetadata({ params }: { params: { lang: Lang } }) {
  if (!isLang(params.lang)) return {};
  const copy = contactCopy[params.lang];

  const title = `${copy.title} - Marco Ronnj Provenzi`;
  const description = copy.body;

  return {
    title,
    description,
    alternates: {
      canonical: `/${params.lang}/contact`,
      languages: { it: "/it/contact", en: "/en/contact" }
    },
    openGraph: {
      title,
      description,
      url: `https://marcoronnjprovenzi.com/${params.lang}/contact`,
      locale: params.lang === "it" ? "it_IT" : "en_US",
      type: "website",
      images: [{ url: `/${params.lang}/opengraph-image`, width: 1200, height: 630, type: "image/png" }]
    }
  };
}

export default function ContactPage({ params }: { params: { lang: Lang } }) {
  if (!isLang(params.lang)) notFound();
  const copy = dictionary[params.lang];
  const page = contactCopy[params.lang];

  return (
    <>
      <Menu
        lang={params.lang}
        nav={copy.nav as string[]}
        switchLabel={copy.langSwitch as string}
      />
      <main className="contact-page">
        <section className="contact-hero section-pad">
          <Image
            className="contact-hero__crazy-image"
            src="/img/crazy-alfie-00008.webp"
            alt=""
            width={1400}
            height={1400}
            sizes="80vw"
          />
          <div className="contact-hero__meta">
            <span>{page.meta}</span>
            <span>{page.availability}</span>
          </div>
          <h1>{page.title}</h1>
          <div className="contact-hero__body">
            <p>{page.body}</p>
            <div className="contact-hero__links">
              <a href="mailto:hello@marcoronnjprovenzi.com">
                <span>{page.emailLabel}</span>
                hello@marcoronnjprovenzi.com
              </a>
              <a href="https://wa.me/393492207773" target="_blank" rel="noreferrer">
                <span>{page.phoneLabel}</span>
                +39 349 220 7773
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

import Image from "next/image";
import { notFound } from "next/navigation";
import { Menu } from "@/components/Menu";
import { dictionary, isLang, type Lang } from "@/lib/i18n";

const servicesCopy = {
  it: {
    title: "Faccio siti web",
    subtitle:
      "Non mi occupo di tutto. Mi occupo di progettare e sviluppare siti che funzionano, comunicano e restano facili da gestire.",
    platformsLabel: "(01. sviluppo)",
    platformsTitle: "Scelgo la tecnologia in base al progetto, non per abitudine.",
    platforms: [
      {
        name: "WordPress",
        text: "Per siti editoriali, corporate e strutture contenuto che devono essere autonome e aggiornabili."
      },
      {
        name: "Shopify",
        text: "Per e-commerce solidi, chiari e pronti a crescere senza perdere controllo su esperienza e contenuti."
      },
      {
        name: "Webflow",
        text: "Per siti visuali, veloci da aggiornare, con interazioni curate e gestione semplice."
      },
      {
        name: "Custom code",
        text: "Per progetti su misura, performance spinte, animazioni, template avanzati e logiche non standard."
      }
    ],
    qualityLabel: "(02. fondamenta)",
    qualityTitle:
      "Ogni sito nasce con una struttura SEO friendly, performance curate e una base tecnica pensata per durare.",
    qualityItems: [
      "Architettura delle pagine e gerarchie contenuto leggibili da persone e motori di ricerca.",
      "Meta, heading, URL, immagini e contenuti organizzati con criterio fin dall'inizio.",
      "Ottimizzazione performance, responsive design, accessibilita di base e codice pulito.",
      "Setup analytics, tracciamenti essenziali e struttura pronta per evolvere senza rifare tutto."
    ],
    completeLabel: "(03. progetto completo)",
    completeTitle:
      "Quando serve, costruisco il progetto completo insieme a collaboratori fidati.",
    completeText:
      "Oltre allo sviluppo posso integrare logo design, UX & UI design, branding, direzione visuale e contenuti. L'obiettivo non e vendere pezzi separati, ma portare un'idea da zero a un sito sviluppato, coerente e pronto a vivere online.",
    cta: "Parliamo del tuo sito"
  },
  en: {
    title: "I build websites",
    subtitle:
      "I do not do everything. I design and develop websites that work, communicate clearly and stay easy to manage.",
    platformsLabel: "(01. development)",
    platformsTitle: "I choose the technology around the project, not out of habit.",
    platforms: [
      {
        name: "WordPress",
        text: "For editorial, corporate and content-led websites that need autonomy and easy updates."
      },
      {
        name: "Shopify",
        text: "For solid e-commerce experiences built to grow without losing control over content and UX."
      },
      {
        name: "Webflow",
        text: "For visual websites with polished interactions, fast updates and simple management."
      },
      {
        name: "Custom code",
        text: "For bespoke projects, stronger performance, advanced templates, animations and non-standard logic."
      }
    ],
    qualityLabel: "(02. foundations)",
    qualityTitle:
      "Every website starts with an SEO-friendly structure, solid performance work and a technical base made to last.",
    qualityItems: [
      "Page architecture and content hierarchy designed for people and search engines.",
      "Metadata, headings, URLs, images and content organised intentionally from the start.",
      "Performance optimisation, responsive design, basic accessibility and clean code.",
      "Analytics setup, essential tracking and a structure ready to evolve without rebuilding everything."
    ],
    completeLabel: "(03. complete project)",
    completeTitle:
      "When needed, I shape the full project with trusted collaborators.",
    completeText:
      "Beyond development I can bring in logo design, UX & UI design, branding, visual direction and content. The goal is not to sell separate pieces, but to take an idea from zero to a developed, coherent website ready to live online.",
    cta: "Let's talk about your website"
  }
} satisfies Record<Lang, {
  completeLabel: string;
  completeText: string;
  completeTitle: string;
  cta: string;
  platforms: Array<{ name: string; text: string }>;
  platformsLabel: string;
  platformsTitle: string;
  qualityItems: string[];
  qualityLabel: string;
  qualityTitle: string;
  subtitle: string;
  title: string;
}>;

export function generateStaticParams() {
  return [{ lang: "it" }, { lang: "en" }];
}

export function generateMetadata({ params }: { params: { lang: Lang } }) {
  if (!isLang(params.lang)) return {};
  const copy = servicesCopy[params.lang];

  return {
    title: `${params.lang === "it" ? "Servizi" : "Services"} - Marco Ronnj Provenzi`,
    description: copy.subtitle
  };
}

export default function ServicesPage({ params }: { params: { lang: Lang } }) {
  if (!isLang(params.lang)) notFound();
  const copy = dictionary[params.lang];
  const page = servicesCopy[params.lang];

  return (
    <>
      <Menu
        lang={params.lang}
        nav={copy.nav as string[]}
        switchLabel={copy.langSwitch as string}
      />
      <main className="services-page">
        <section className="services-hero section-pad">
          <div>
            <h1>{page.title}*</h1>
            <p>* {page.subtitle}</p>
          </div>
        </section>

        <section className="services-platforms section-pad">
          <div className="services-section-head">
            <span>{page.platformsLabel}</span>
            <h2>{page.platformsTitle}</h2>
          </div>
          <div className="services-platforms__list">
            {page.platforms.map((platform, index) => (
              <article key={platform.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{platform.name}</h3>
                <p>{platform.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="services-quality section-pad">
          <Image
            className="services-quality__crazy-image"
            src="/img/crazy-alfie-00001.webp"
            alt=""
            width={1400}
            height={1400}
            sizes="70vw"
          />
          <div className="services-quality__statement">
            <span>{page.qualityLabel}</span>
            <p>{page.qualityTitle}</p>
          </div>
          <ol className="services-quality__list">
            {page.qualityItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>

        <section className="services-complete section-pad">
          <div className="services-section-head">
            <span>{page.completeLabel}</span>
            <h2>{page.completeTitle}</h2>
          </div>
          <div className="services-complete__body">
            <p>{page.completeText}</p>
            <a href={`/${params.lang}/contact`}>{page.cta}</a>
          </div>
        </section>
      </main>
    </>
  );
}

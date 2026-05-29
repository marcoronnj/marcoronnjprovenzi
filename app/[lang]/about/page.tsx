import Image from "next/image";
import { notFound } from "next/navigation";
import { Menu } from "@/components/Menu";
import { dictionary, isLang, type Lang } from "@/lib/i18n";

const aboutCopy = {
  it: {
    eyebrow: "(01. about)",
    intro:
      "Metà preciso, metà anticonformista. Struttura, performance e codice pulito da una parte; dall'altra il rifiuto dei siti tutti uguali, senza anima, costruiti con lo stesso template riciclato all'infinito.",
    title: "ABOUT",
    lead:
      "Mi chiamo Marco Ronnj Provenzi, sono un web designer freelance di Bergamo e progetto esperienze digitali che devono funzionare bene, ma soprattutto lasciare qualcosa.",
    blocks: [
      "Oggi progetto e sviluppo siti web per brand, attività e founder che vogliono distinguersi davvero online, non semplicemente esserci. Nel tempo ho vissuto a Londra, studiato, sperimentato, sbagliato, rifatto tutto da capo e sviluppato un approccio molto personale: meno teoria da agenzia, più sensibilità estetica, strategia e attenzione reale alle persone che useranno il sito.",
      "Oggi mi occupo principalmente di sviluppo frontend e web design creativo. Creo siti funzionali, veloci, scalabili, facili da aggiornare e pensati per durare nel tempo. E anche se il mio focus è il frontend, porto sempre nei progetti competenze trasversali in SEO, comunicazione e marketing, perché un sito bello che non comunica niente serve a poco.",
      "Non vendo pacchetti web. Costruisco progetti insieme alle persone. Lavorando da freelance seguo ogni progetto in prima persona: niente passaggi infiniti, niente account manager, niente effetto catena di montaggio."
    ],
    collaboration: {
      after: " di Coccaglio.",
      before: "Ho iniziato a creare siti web nel 2004, quando si faceva ancora tutto a mano con Notepad e HTML. Poi l'informatica ha fatto un giro enorme ed è tornata a prendersi il centro della scena nel 2018, quando ho lasciato il posto fisso per lavorare in proprio. Dal 2022 collaboro stabilmente con l'agenzia di comunicazione ",
      label: "Milklab"
    },
    manifesto:
      "Credo nella collaborazione diretta, nelle idee condivise e nei feedback sinceri. Mi interessa capire cosa rende unico un brand, non infilare tutto dentro l'ennesimo layout già visto. Ogni progetto deve avere presenza: deve trasmettere qualcosa appena si apre la pagina.",
    closing:
      "Per questo cerco sempre un equilibrio tra estetica e usabilità, creatività e chiarezza, impatto visivo e performance reali. E quando un progetto richiede competenze specifiche oltre al mio ambito, collaboro con una rete di professionisti affidabili costruita nel tempo per rispondere in modo concreto, senza improvvisazioni."
  },
  en: {
    eyebrow: "(01. about)",
    intro:
      "Half precise, half nonconformist. Structure, performance and clean code on one side; a refusal of soulless, lookalike websites built from the same recycled template on the other.",
    title: "ABOUT",
    lead:
      "My name is Marco Ronnj Provenzi. I am a freelance web designer from Bergamo, building digital experiences that need to work well, but above all leave something behind.",
    blocks: [
      "Today I design and develop websites for brands, businesses and founders who want to stand out online, not simply be present. Over time I have lived in London, studied, experimented, made mistakes, rebuilt things from scratch and shaped a personal approach: less agency theory, more visual sensitivity, strategy and real attention to the people who will use the site.",
      "Today I mainly work across frontend development and creative web design. I create websites that are functional, fast, scalable, easy to update and made to last. Even when the focus is frontend, I bring in SEO, communication and marketing thinking, because a beautiful website that says nothing is not enough.",
      "I do not sell web packages. I build projects with people. As a freelancer I follow every project directly: no endless handovers, no account managers, no assembly-line effect."
    ],
    collaboration: {
      after: " in Coccaglio.",
      before: "I started creating websites in 2004, when everything was still made by hand with Notepad and HTML. After a long loop, technology came back to the centre of my work in 2018, when I left a permanent job to work independently. Since 2022 I have worked steadily with the communication agency ",
      label: "Milklab"
    },
    manifesto:
      "I believe in direct collaboration, shared ideas and honest feedback. I care about understanding what makes a brand specific, instead of forcing everything into another familiar layout. Every project needs presence: it should communicate something as soon as the page opens.",
    closing:
      "That is why I look for balance between aesthetics and usability, creativity and clarity, visual impact and real performance. When a project needs skills beyond my scope, I collaborate with a trusted network built over time, so the response stays concrete and never improvised."
  }
} satisfies Record<Lang, {
  blocks: string[];
  collaboration: {
    after: string;
    before: string;
    label: string;
  };
  closing: string;
  eyebrow: string;
  intro: string;
  lead: string;
  manifesto: string;
  title: string;
}>;

export function generateStaticParams() {
  return [{ lang: "it" }, { lang: "en" }];
}

export function generateMetadata({ params }: { params: { lang: Lang } }) {
  if (!isLang(params.lang)) return {};
  const copy = aboutCopy[params.lang];

  return {
    title: `About - Marco Ronnj Provenzi`,
    description: copy.lead
  };
}

export default function AboutPage({ params }: { params: { lang: Lang } }) {
  if (!isLang(params.lang)) notFound();
  const copy = dictionary[params.lang];
  const page = aboutCopy[params.lang];

  return (
    <>
      <Menu
        lang={params.lang}
        nav={copy.nav as string[]}
        switchLabel={copy.langSwitch as string}
      />
      <main className="about-page">
        <section className="about-hero" data-snap-section>
          <div className="about-hero__intro">
            <p>{page.intro}</p>
          </div>
          <figure className="about-hero__portrait">
            <Image
              className="about-hero__image about-hero__image--default"
              src="/img/about/ritratto-web.webp"
              alt="Marco Ronnj Provenzi"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
            />
            <Image
              className="about-hero__image about-hero__image--crazy"
              src="/img/about/ritratto-crazy-transparent.webp"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </figure>
          <h1>{page.title}</h1>
        </section>

        <section className="about-profile section-pad" data-snap-section>
          <div className="about-profile__statement">
            <span>({params.lang === "it" ? "01. profilo" : "01. profile"})</span>
            <p>{page.lead}</p>
          </div>
          <div className="about-profile__details">
            <p>
              {page.collaboration.before}
              <a href="https://milklab.it/" target="_blank" rel="noreferrer">
                {page.collaboration.label}
              </a>
              {page.collaboration.after}
            </p>
            {page.blocks.map((block) => (
              <p key={block}>{block}</p>
            ))}
          </div>
        </section>

        <section className="about-method section-pad" data-snap-section>
          <Image
            className="about-method__crazy-image"
            src="/img/crazy-alfie-00004.webp"
            alt=""
            width={1200}
            height={1200}
            sizes="50vw"
          />
          <div className="about-method__lead">
            <span>({params.lang === "it" ? "02. metodo" : "02. method"})</span>
            <p>{page.manifesto}</p>
          </div>
          <div className="about-method__body">
            <p>{page.closing}</p>
          </div>
        </section>
      </main>
    </>
  );
}

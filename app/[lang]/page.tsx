import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { HeroStage } from "@/components/HeroStage";
import { Menu } from "@/components/Menu";
import { ProjectIndex } from "@/components/ProjectIndex";
import { projects } from "@/data/projects";
import { dictionary, isLang, type Lang } from "@/lib/i18n";

const featuredProjectSlugs = [
  "indoor-outdoor-cosmetics",
  "von-meiss-architekten",
  "studio-b-quadro",
  "rat-collective",
  "helvetic-leaf",
  "impresa-edile-regonesi",
  "vedrai"
];

export function generateMetadata({ params }: { params: { lang: Lang } }) {
  return {
    alternates: {
      canonical: `/${params.lang}`
    }
  };
}

export default function Home({ params }: { params: { lang: Lang } }) {
  if (!isLang(params.lang)) notFound();
  const copy = dictionary[params.lang];
  const clientsLabel = params.lang === "it" ? "(02. clienti)" : "(02. clients)";
  const methodLabel = params.lang === "it" ? "(03. metodo)" : "(03. method)";
  const servicesLabel = params.lang === "it" ? "(04. servizi)" : "(04. services)";
  const servicesCta = params.lang === "it" ? "Vai ai servizi" : "View services";
  const projectsCta = params.lang === "it" ? "Vai ai progetti" : "View projects";
  const featuredProjects = projects
    .filter((project) => featuredProjectSlugs.includes(project.slug))
    .sort(
      (a, b) => featuredProjectSlugs.indexOf(a.slug) - featuredProjectSlugs.indexOf(b.slug)
    );

  return (
    <>
      <Menu
        lang={params.lang}
        nav={copy.nav as string[]}
        switchLabel={copy.langSwitch as string}
      />
      <main>
        <HeroStage
          kicker={copy.heroKicker as string}
          line={copy.heroLine as string}
          cta={copy.heroCta as string}
          alt={copy.heroAlt as string}
          altMobile={copy.heroAltMobile as string}
          holdPrompt={copy.heroHoldPrompt as string}
          revealPhrase={copy.heroReveal as string}
        />

        <section id="about" className="intro manifesto section-pad">
          <div className="manifesto-copy">
            <span>(01. manifesto)</span>
            <h2>{copy.introTitle as string}</h2>
            <p>{copy.introBody as string}</p>
          </div>
        </section>

        <section id="projects" className="section-pad">
          <div className="section-heading section-heading--projects">
            <span>{clientsLabel}</span>
            <h2>
              <Link className="section-heading__link" href={`/${params.lang}/selected-works`}>
                <span>{copy.selected as string}</span>
                <i aria-hidden="true" />
              </Link>
            </h2>
          </div>
          <ProjectIndex lang={params.lang} projects={featuredProjects} />
          <Link className="services__page-link" href={`/${params.lang}/selected-works`}>
            <span>{projectsCta}</span>
          </Link>
        </section>

        <section id="method" className="split-section section-pad">
          <div>
            <span>{methodLabel}</span>
            <h2>{copy.method as string}</h2>
          </div>
          <ol>
            {(copy.methodItems as string[]).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>

        <section id="services" className="services section-pad">
          <Image
            className="services__crazy-image"
            src="/img/crazy-alfie-00002.webp"
            alt=""
            width={1200}
            height={1200}
            sizes="70vw"
          />
          <span>{servicesLabel}</span>
          <h2>{copy.services as string}</h2>
          <div className="service-grid">
            {(copy.serviceItems as string[]).map((item) => (
              <article key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
          <Link className="services__page-link" href={`/${params.lang}/services`}>
            <span>{servicesCta}</span>
          </Link>
        </section>

        <section id="contact" className="contact">
          <span>{params.lang === "it" ? "(05. contatti)" : "(05. contact)"}</span>
          <p>{copy.contactBody as string}</p>
          <a className="contact__cta" href="mailto:hello@marcoronnjprovenzi.com">
            <span>{copy.contact as string}</span>
            <i aria-hidden="true" />
          </a>
        </section>
      </main>
    </>
  );
}

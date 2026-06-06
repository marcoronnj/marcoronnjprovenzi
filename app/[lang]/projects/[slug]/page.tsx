import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Menu } from "@/components/Menu";
import { projects } from "@/data/projects";
import { dictionary, isLang, type Lang } from "@/lib/i18n";

export function generateStaticParams() {
  return projects.flatMap((project) => [
    { lang: "it", slug: project.slug },
    { lang: "en", slug: project.slug }
  ]);
}

export function generateMetadata({
  params
}: {
  params: { lang: Lang; slug: string };
}) {
  if (!isLang(params.lang)) return {};
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};

  const title = `${project.title[params.lang]} - Marco Ronnj Provenzi`;
  const description = project.excerpt[params.lang];

  return {
    title,
    description,
    alternates: {
      canonical: `/${params.lang}/projects/${params.slug}`,
      languages: {
        it: `/it/projects/${params.slug}`,
        en: `/en/projects/${params.slug}`
      }
    },
    openGraph: {
      title,
      description,
      url: `/${params.lang}/projects/${params.slug}`,
      locale: params.lang === "it" ? "it_IT" : "en_US",
      type: "website"
    }
  };
}

export default function ProjectPage({
  params
}: {
  params: { lang: Lang; slug: string };
}) {
  if (!isLang(params.lang)) notFound();
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  const copy = dictionary[params.lang];

  return (
    <>
      <Menu
        lang={params.lang}
        nav={copy.nav as string[]}
        switchLabel={copy.langSwitch as string}
      />
      <main className="project-page">
        <section className="work-template">
          <aside className="work-template__aside">
            <header className="work-template__title">
              <span>({params.lang === "it" ? "01. cliente" : "01. client"})</span>
              <h1>{project.client} &mdash; {project.year}</h1>
            </header>

            <dl className="work-template__details">
              {project.details.map((detail) => (
                <div key={detail.label[params.lang]}>
                  <dt>{detail.label[params.lang]}</dt>
                  <dd>
                    {detail.href ? (
                      <a href={detail.href} target="_blank" rel="noreferrer">
                        {detail.value[params.lang]}
                      </a>
                    ) : (
                      detail.value[params.lang]
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <Link href={`/${params.lang}/selected-works`} className="back-link">
              {params.lang === "it" ? "Torna ai lavori" : "Back to works"}
            </Link>
          </aside>

          <div className="work-template__screens" aria-label={project.title[params.lang]}>
            {project.media.map((media, index) => (
              <figure className="work-screen" key={media.src}>
                <figcaption>
                  <span>Screen {String(index + 1).padStart(2, "0")}</span>
                  <span>1920 x 1080</span>
                </figcaption>
                <div className="work-screen__frame">
                  <div className="work-screen__capture">
                    <Image
                      src={media.src}
                      alt={media.alt[params.lang]}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 900px) 88vw, 52vw"
                    />
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </section>

        <section className="work-narrative section-pad">
          <div className="work-narrative__copy">
            <span>({params.lang === "it" ? "02. lavoro" : "02. work"})</span>
            <p>{project.narrative[params.lang]}</p>
          </div>
        </section>
      </main>
    </>
  );
}

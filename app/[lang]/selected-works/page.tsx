import { notFound } from "next/navigation";
import Link from "next/link";
import { Menu } from "@/components/Menu";
import { clients } from "@/data/projects";
import { dictionary, isLang, type Lang } from "@/lib/i18n";

export function generateStaticParams() {
  return [{ lang: "it" }, { lang: "en" }];
}

export function generateMetadata({ params }: { params: { lang: Lang } }) {
  const title = `Selected Works - Marco Ronnj Provenzi`;
  const description = params.lang === "it"
    ? "Tutti i progetti di Marco Ronnj Provenzi: siti custom, e-commerce, landing page e brand digitali."
    : "All projects by Marco Ronnj Provenzi: custom websites, e-commerce, landing pages and digital brands.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${params.lang}/selected-works`
    },
    openGraph: {
      title,
      description,
      url: `https://marcoronnjprovenzi.com/${params.lang}/selected-works`,
      locale: params.lang === "it" ? "it_IT" : "en_US",
      type: "website",
      images: [{ url: `/${params.lang}/opengraph-image`, width: 1200, height: 630, type: "image/png" }]
    }
  };
}

export default function SelectedWorksPage({ params }: { params: { lang: Lang } }) {
  if (!isLang(params.lang)) notFound();
  const copy = dictionary[params.lang];
  const pageLabel = params.lang === "it" ? "Clienti" : "Clients";

  return (
    <>
      <Menu
        lang={params.lang}
        nav={copy.nav as string[]}
        switchLabel={copy.langSwitch as string}
      />
      <main className="selected-page">
        <section className="clients-page">
          <header className="clients-page__header">
            <h1>
              <span>SELECTED</span>
              <span>WORKS</span>
            </h1>
            <span>{pageLabel}</span>
          </header>

          <ol className="client-list" aria-label={pageLabel}>
            {clients.map((client) => (
              <li key={client.name}>
                {client.slug ? (
                  <Link className="client-list__link" href={`/${params.lang}/projects/${client.slug}`}>
                    {client.name}
                  </Link>
                ) : (
                  <p>{client.name}</p>
                )}
              </li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}

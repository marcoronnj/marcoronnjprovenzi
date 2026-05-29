import Link from "next/link";
import type { Lang } from "@/lib/i18n";

type FooterProps = {
  lang: Lang;
};

export function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const homeHref = `/${lang}`;
  const servicesLabel = lang === "it" ? "Servizi" : "Services";
  const projectsLabel = lang === "it" ? "Progetti" : "Projects";
  const contactLabel = lang === "it" ? "Contatti" : "Contact";

  return (
    <footer className="site-footer" data-snap-section>
      <div className="site-footer__top">
        <Link className="site-footer__mark" href={homeHref} aria-label="Marco Ronnj Provenzi home">
          <span />
        </Link>

        <div className="site-footer__block">
          <p>
            &copy; {currentYear}
            <br />
            Marco Ronnj Provenzi
            <br />
            P. IVA 04428420162
          </p>
          <Link href={`${homeHref}/privacy-policy`}>Privacy Policy</Link>
          <Link href={`${homeHref}/cookie-policy`}>Cookie Policy</Link>
        </div>

        <nav className="site-footer__block" aria-label="Footer navigation">
          <Link href={homeHref}>Home</Link>
          <Link href={`${homeHref}/about`}>About</Link>
          <Link href={`${homeHref}/services`}>{servicesLabel}</Link>
          <Link href={`${homeHref}/selected-works`}>{projectsLabel}</Link>
          <Link href={`${homeHref}/contact`}>{contactLabel}</Link>
        </nav>

        <div className="site-footer__block site-footer__contact">
          <a href="mailto:hello@marcoronnjprovenzi.com">hello@marcoronnjprovenzi.com</a>
          <a href="https://wa.me/393492207773" target="_blank" rel="noreferrer">
            +39 349 220 7773
          </a>
        </div>
      </div>

      <div className="site-footer__marquee" aria-label="Marco Ronnj Provenzi Web Designer Freelance Creative Web Developer">
        <div className="site-footer__marquee-track">
          {Array.from({ length: 3 }, (_, index) => (
            <div className="site-footer__marquee-group" key={index}>
              <span>MARCO RONNJ PROVENZI</span>
              <span>WEB DESIGNER FREELANCE</span>
              <span>CREATIVE WEB DEVELOPER</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

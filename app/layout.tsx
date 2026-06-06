import type { Metadata } from "next";
import "./globals.css";
import { IubendaLoader } from "../components/IubendaLoader";

export function generateMetadata(): Metadata {
  return {
    applicationName: "Marco Ronnj Provenzi",
    metadataBase: new URL("https://www.marcoronnjprovenzi.com"),
    title: "Marco Ronnj Provenzi - Web Designer Freelance",
    description:
      "Web designer freelance e web developer per siti custom, esperienze interattive e brand digitali.",
    manifest: "/site.webmanifest",
    formatDetection: {
      address: false,
      telephone: false
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" }
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "Marco Ronnj Provenzi"
    },
    robots:
      (process.env.VERCEL_ENV === "production"
        ? { index: true, follow: true }
        : { index: false, noindex: true, follow: false }) as unknown as Metadata["robots"]
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://marcoronnjprovenzi.com/#person",
      name: "Marco Ronnj Provenzi",
      url: "https://marcoronnjprovenzi.com",
      jobTitle: "Web Designer Freelance",
      description:
        "Web designer freelance e web developer per siti custom, esperienze interattive, SEO e brand digitali ad alto impatto.",
      email: "hello@marcoronnjprovenzi.com",
      telephone: "+393492207773",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bergamo",
        addressCountry: "IT"
      },
      knowsAbout: ["Web Design", "Web Development", "SEO", "Shopify", "Webflow", "WordPress"]
    },
    {
      "@type": "WebSite",
      "@id": "https://marcoronnjprovenzi.com/#website",
      url: "https://marcoronnjprovenzi.com",
      name: "Marco Ronnj Provenzi",
      author: { "@id": "https://marcoronnjprovenzi.com/#person" },
      inLanguage: ["it-IT", "en-US"]
    }
  ]
};

const iubendaConsentSetup =
  '(function(w){try{var h=w.location.hostname;var d=h.endsWith("marcoronnjprovenzi.com")?"marcoronnjprovenzi.com":h.endsWith(".vercel.app")?h:"";w._iub=w._iub||{};w._iub.csConfiguration=Object.assign({},w._iub.csConfiguration||{},{askConsentAtCookiePolicyUpdate:false,invalidateConsentWithoutLog:false,localConsentPath:"/"},d?{localConsentDomain:d}:{});}catch(error){}})(window);';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: iubendaConsentSetup
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var mode=window.localStorage.getItem("crazy-mode");if(mode==="on"){document.documentElement.classList.add("is-crazy-mode");document.body.classList.add("is-crazy-mode");}else{document.documentElement.classList.remove("is-crazy-mode");document.body.classList.remove("is-crazy-mode");if(mode!=="off"){window.localStorage.setItem("crazy-mode","off");}}}catch(error){}'
          }}
        />
        {children}
        <IubendaLoader />
      </body>
    </html>
  );
}

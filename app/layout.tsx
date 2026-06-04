import type { Metadata } from "next";
import "./globals.css";
import IntroLoader from "../components/IntroLoader";

export const metadata: Metadata = {
  applicationName: "Marco Ronnj Provenzi",
  metadataBase: new URL("https://marcoronnjprovenzi.com"),
  title: "Marco Ronnj Provenzi - Web Designer Freelance",
  description:
    "Web designer freelance e web developer per siti custom, esperienze interattive e brand digitali.",
  manifest: "/site.webmanifest",
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
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <script
          className="_iub_cs_activate"
          type="text/plain"
          async
          {...{
            suppressedsrc: "https://www.googletagmanager.com/gtag/js?id=G-MXP5SGC7PN"
          }}
        />
        <script
          className="_iub_cs_activate-inline"
          type="text/plain"
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\n\ngtag('config', 'G-MXP5SGC7PN', {\n  allow_linker: false,\n  url_passthrough: false\n});"
          }}
        />
        <script
          id="iubenda-cs"
          type="text/javascript"
          src="https://embeds.iubenda.com/widgets/71a333f7-4a3b-45d7-a3e5-572e0454438c.js"
          async
        />
      </head>
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var mode=window.localStorage.getItem("crazy-mode");if(mode==="on"){document.documentElement.classList.add("is-crazy-mode");document.body.classList.add("is-crazy-mode");}else{document.documentElement.classList.remove("is-crazy-mode");document.body.classList.remove("is-crazy-mode");if(mode!=="off"){window.localStorage.setItem("crazy-mode","off");}}}catch(error){}'
          }}
        />
        <IntroLoader />
        {children}
      </body>
    </html>
  );
}

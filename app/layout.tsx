import type { Metadata } from "next";
import "./globals.css";
import IntroLoader from "../components/IntroLoader";
import { IubendaLoader } from "../components/IubendaLoader";

export const metadata: Metadata = {
  applicationName: "Marco Ronnj Provenzi",
  metadataBase: new URL("https://marcoronnjprovenzi.com"),
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
  }
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
        <IntroLoader />
        {children}
        <IubendaLoader />
      </body>
    </html>
  );
}

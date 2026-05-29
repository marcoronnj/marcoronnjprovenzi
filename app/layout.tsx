import type { Metadata } from "next";
import "./globals.css";

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
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var mode=window.localStorage.getItem("crazy-mode");if(mode==="on"){document.documentElement.classList.add("is-crazy-mode");document.body.classList.add("is-crazy-mode");}else{document.documentElement.classList.remove("is-crazy-mode");document.body.classList.remove("is-crazy-mode");if(mode!=="off"){window.localStorage.setItem("crazy-mode","off");}}}catch(error){}'
          }}
        />
        {children}
      </body>
    </html>
  );
}

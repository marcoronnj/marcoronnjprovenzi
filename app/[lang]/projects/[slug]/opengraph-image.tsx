import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";
import { isLang } from "@/lib/i18n";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const lang = isLang(params.lang) ? params.lang : "it";
  const project = projects.find((p) => p.slug === params.slug);
  const title = project?.title[lang] ?? params.slug;
  const label = lang === "it" ? "PROGETTO" : "PROJECT";

  const font = await fetch(
    "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0D0D0D",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "Inter",
        }}
      >
        <div style={{ color: "#666", fontSize: 18, marginBottom: 48, display: "flex" }}>
          {label}
        </div>
        <div
          style={{
            color: "#fff",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 24,
            display: "flex",
          }}
        >
          {title}
        </div>
        <div style={{ color: "#aaa", fontSize: 24, fontWeight: 400, display: "flex" }}>
          Marco Ronnj Provenzi
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            color: "#444",
            fontSize: 16,
            display: "flex",
          }}
        >
          marcoronnjprovenzi.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Inter", data: font, weight: 700 }],
    }
  );
}

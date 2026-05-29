import fs from "fs";
import path from "path";

const projectFile = path.join(process.cwd(), "data", "projects.ts");
const sitemapFile = path.join(process.cwd(), "public", "sitemap.xml");
const baseUrl = "https://marcoronnjprovenzi.com";

const raw = fs.readFileSync(projectFile, "utf8");
const slugs = Array.from(raw.matchAll(/slug:\s*"([^"]+)"/g)).map((match) => match[1]);
const uniqueSlugs = [...new Set(slugs)];
const langs = ["it", "en"];
const staticPages = ["", "about", "contact", "services", "selected-works"];

const urls = [];
for (const lang of langs) {
  for (const page of staticPages) {
    urls.push(`${baseUrl}/${lang}${page ? `/${page}` : ""}`);
  }
  for (const slug of uniqueSlugs) {
    urls.push(`${baseUrl}/${lang}/projects/${slug}`);
  }
}

const content = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map(
    (url) =>
      `  <url>\n    <loc>${url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${url.endsWith("/it") || url.endsWith("/en") ? "1.0" : "0.8"}</priority>\n  </url>`
  )
  .join("\n")}\n</urlset>\n`;

fs.writeFileSync(sitemapFile, content, "utf8");
console.log(`Generated sitemap with ${urls.length} entries at ${sitemapFile}`);

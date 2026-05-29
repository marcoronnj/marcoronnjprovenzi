# Project Instructions For Agents

This project has an internal LLM Wiki in `content/wiki`.
Use it as the source of truth before changing content, design, SEO, project pages, client lists, services, or crazy mode behavior.

## Required Reading

Before making changes, read the relevant wiki files:

- General content or positioning: `content/wiki/brand.md`, `content/wiki/tone-of-voice.md`, `content/wiki/content-rules.md`
- SEO, titles, descriptions, page copy: `content/wiki/seo.md`
- Services page or home services section: `content/wiki/services.md`
- Project pages or case studies: `content/wiki/projects.md`
- Client list or selected works page: `content/wiki/clients.md`
- UI, layout, typography, colors, interactions: `content/wiki/design-system.md`
- Crazy mode, hand-drawn lines, yellow theme, crazy images: `content/wiki/crazy-mode.md`

Start from `content/wiki/README.md` if the task touches more than one area.

## Core Direction

The site must always balance two sides:

- precision: structure, performance, clean code, SEO, scalability;
- nonconformity: no generic templates, strong visual presence, memorable interactions.

Every edit should protect both.

## Brand And Copy Rules

- Main public positioning: web designer freelance and web developer.
- Prefer "web designer freelance" over "frontend web designer freelance" in prominent SEO/public text.
- Tone should be direct, editorial, precise, human and slightly provocative when useful.
- Avoid generic agency language, vague buzzwords and "360 degree" service claims.
- Keep the site bilingual: update Italian and English content together when applicable.

## Design Rules

- Keep the current minimal/editorial visual system.
- Main font: Host Grotesk.
- Crazy mode font: Protest Revolution.
- Normal background: white.
- Crazy mode background: `#e0f216`.
- The brand mark is a black square with `1px` border radius.
- Main sections should be at least `100dvh`.
- Respect existing responsive breakpoints and avoid text overflow.

## Crazy Mode Rules

- Crazy mode must remain usable and readable.
- Use `--hand-line` for horizontal irregular lines.
- Use `--hand-line-vertical` for vertical irregular lines.
- Do not fake vertical lines by repeating horizontal lines.
- Crazy mode state must persist across navigation and language changes without a white flash.
- Preserve scroll position when toggling crazy mode or switching language.

## Project Data Rules

Project data lives in `data/projects.ts`.

When adding a project:

- add it to `projects`;
- add/update the matching entry in `clients`;
- provide IT and EN title, excerpt, narrative and image alt text;
- keep the project template structure consistent;
- show the Design field only if design credit exists;
- use real client, year, technology, website and role data.

## Verification

After code changes:

- run the relevant local check or build when the change is non-trivial;
- keep the dev server available on `http://localhost:3000` when the user is reviewing visually;
- verify the affected route returns `200 OK`.

## Maintenance

If a request changes the site's positioning, services, project data, client list, design rules, crazy mode rules or content strategy, update the relevant file in `content/wiki` in the same change.

# Design System

## Direzione visiva

Il sito ha una direzione minimal/editoriale con momenti interattivi forti.

Riferimenti dichiarati durante il progetto:

- Grids by Obys Agency;
- Synchronized Studio;
- Silencio;
- Aim Obys Agency;
- Because Recollection;
- Igloo.

## Font

Font principale:

- Host Grotesk, via Typekit.

Crazy mode:

- Protest Revolution Regular.
- CSS: `font-family: "protest-revolution", sans-serif; font-weight: 400; font-style: normal;`

## Colori

Base:

- Background: `#ffffff`
- Ink: `#050505`
- Muted: `#686868`

Crazy mode:

- Background: `#e0f216`
- Ink: `#050505`

## Logo

Il logo e' un quadrato nero con border radius 1px.

Usi:

- navbar;
- favicon;
- web clip;
- segno nel footer/marquee quando previsto.

## Layout

- Sezioni principali alte almeno `100dvh`.
- Scroll libero senza snap: le sezioni non si agganciano automaticamente.
- Navbar con riga lunga quanto il container, non full width.
- Footer da 100dvh, bianco in normal mode e giallo in crazy mode.
- Home con sezioni: hero, manifesto, selected works/clienti, metodo, servizi, contatto.

## Interazioni

- Cursor custom tondo.
- Su link il cursor diventa quadrato con radius 1px e ruota lentamente.
- Il cursor custom esiste solo su desktop con mouse reale; su mobile, tablet e dispositivi touch non deve essere montato/attivato.
- Per carousel futuri:
  - next: triangolo equilatero che punta a destra;
  - prev: triangolo equilatero che punta a sinistra.

## Hero

La hero mostra:

- WEB DESIGNER FREELANCE
- CREATIVE WEB DEVELOPER

Premendo/tenendo premuto si attiva una barra di progressione. Al 100% le lettere si ricompongono nella frase:

- IT: BASTA / SITI WEB / DI M*RDA
- EN: ENOUGH / SAME WEB / SH*T

Quando si rilascia, torna allo stato iniziale.

## Link e frecce

- Freccia top-right da `public/arrow-top-right.svg`.
- Selected works / progetti selezionati usa freccia.
- CTA home contatto non deve avere underline pesante.
- Link clienti con pagina interna: underline leggera; in crazy mode underline irregolare.

## Responsive

Sono previsti breakpoint per mobile, tablet, laptop, desktop e wide.

Regola generale:

- desktop e wide possono avere testo grande ma controllato;
- laptop non deve sembrare zoomato;
- mobile deve mantenere coerenza, senza testi che escono dai box.

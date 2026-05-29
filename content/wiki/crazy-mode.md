# Crazy Mode

## Scopo

Crazy mode mostra la parte piu' anticonformista del brand.

Non deve sembrare una skin casuale: deve mantenere struttura, UX e gerarchie, ma con un linguaggio piu' sporco, fatto a mano e sorprendente.

## Stato

La preferenza viene salvata in `localStorage` con chiave:

```txt
crazy-mode
```

Valori:

- `on`
- `off`

Default:

- se non esiste una preferenza valida, crazy mode deve partire `off`;
- la modalita' `on` si applica solo dopo scelta esplicita dell'utente.

La classe applicata e':

```txt
is-crazy-mode
```

Deve essere applicata a `html` e `body` prima del primo paint per evitare flash bianco quando si naviga da una pagina crazy a un'altra.

## Colori e font

- Background: `#e0f216`
- Font title: Protest Revolution Regular.
- Immagini in multiply.
- Linee e bordi diventano irregolari.

## Linee

Usare le variabili CSS:

- `--hand-line` per linee orizzontali;
- `--hand-line-vertical` per linee verticali;
- `--hand-line-soft` quando serve una linea piu' sottile.

Le verticali devono essere verticali vere, non la linea orizzontale ripetuta.

## Immagini crazy

Asset in `public/img`:

- `crazy-alfie-00001.webp`: servizi, sezione fondamenta.
- `crazy-alfie-00002.webp`: home, sezione servizi.
- `crazy-alfie-00003.webp`: home, manifesto.
- `crazy-alfie-00004.webp`: about, sezione metodo.
- `crazy-alfie-00006.webp`: home, selected works/clienti.
- `crazy-alfie-00008.webp`: contatti.

About usa anche:

- `public/img/about/ritratto-crazy-transparent.webp`

## Regole UX

- Navigando in crazy mode, la nuova pagina deve aprirsi gia' in crazy mode.
- Cambiando lingua, mantenere la posizione di scroll.
- Attivando/disattivando crazy mode, mantenere la posizione di scroll.
- Le sezioni devono restare leggibili anche in crazy mode.
- Le immagini crazy non devono impedire la lettura dei contenuti principali.

## Cose da evitare

- Bordi crazy troppo fitti da sembrare pattern grafico non intenzionale.
- Linee verticali fatte con righe orizzontali.
- Flash dalla versione bianca a quella gialla.
- Sovrapposizioni che rendono il testo illeggibile.

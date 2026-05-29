export const languages = ["it", "en"] as const;

export type Lang = (typeof languages)[number];

export function isLang(value: string): value is Lang {
  return languages.includes(value as Lang);
}

export const dictionary = {
  it: {
    metaTitle: "Marco Ronnj Provenzi - Web Designer Freelance e Web Developer",
    metaDescription:
      "Web designer freelance e web developer per siti custom, esperienze interattive, SEO e brand digitali ad alto impatto.",
    nav: ["About", "Servizi", "Progetti", "Contatti"],
    langSwitch: "EN",
    crazyMode: "Crazy Mode",
    selectedWorks: "Selected Works",
    heroKicker: "Web designer freelance / Web developer",
    heroLine:
      "Siti web custom, identita digitali e interfacce animate per brand, founder e attivita che vogliono farsi ricordare.",
    heroCta: "Esplora i progetti",
    heroAlt: "Tieni premuto spazio",
    heroAltMobile: "Tieni premuto",
    heroHoldPrompt: "Continua a tenere premuto",
    heroReveal: "Basta|Siti web|Di m*rda",
    introTitle: "Un sito non dovrebbe sembrare costruito con lo stesso stampo di tutti gli altri.",
    introBody:
      "Il sito non deve solo caricare veloce. Deve avere una presenza. Progetto e sviluppo esperienze bilingua, scalabili e facili da aggiornare, con un template progetti pensato per trasformare ogni case study in una piccola scena.",
    selected: "Progetti selezionati",
    method: "Metodo",
    methodItems: [
      "Collaborazione diretta, senza passaggi inutili",
      "Ascolto reale di obiettivi, persone e contesto",
      "Scelte estetiche guidate da chiarezza e presenza",
      "Feedback sinceri, iterazioni rapide e cura finale"
    ],
    services: "Sviluppo Siti Web",
    serviceItems: [
      "Siti portfolio e corporate custom",
      "Landing page ad alta conversione",
      "Struttura SEO, performance e monitoraggio",
      "Logo, branding, UX & UI design"
    ],
    contact: "Parliamo del tuo prossimo sito",
    contactBody:
      "Scrivimi con obiettivo, timeline e 2-3 reference. Ti rispondo con una direzione concreta, non con una lista di buzzword.",
    projectBack: "Torna alla home",
    projectNext: "Prossimo progetto"
  },
  en: {
    metaTitle: "Marco Ronnj Provenzi - Freelance Web Designer and Web Developer",
    metaDescription:
      "Freelance web designer and web developer building custom websites, interactive experiences, SEO-ready structures and sharp digital brands.",
    nav: ["About", "Services", "Projects", "Contact"],
    langSwitch: "IT",
    crazyMode: "Crazy Mode",
    selectedWorks: "Selected Works",
    heroKicker: "Freelance web designer / Web developer",
    heroLine:
      "Custom websites, digital identities and animated interfaces for brands, founders and businesses that want to be remembered.",
    heroCta: "Explore projects",
    heroAlt: "Hold space",
    heroAltMobile: "Hold",
    heroHoldPrompt: "Keep holding",
    heroReveal: "Enough|Same web|Sh*t",
    introTitle: "A website should not look like it came from the same mold as everyone else's.",
    introBody:
      "A website should not only load fast. It needs presence. I design and develop bilingual, scalable experiences with project templates that turn every case study into a small scene.",
    selected: "Selected Works",
    method: "Method",
    methodItems: [
      "Direct collaboration, without unnecessary handovers",
      "Real attention to goals, people and context",
      "Visual choices shaped by clarity and presence",
      "Honest feedback, quick iterations and final care"
    ],
    services: "Website Development",
    serviceItems: [
      "Custom portfolio and corporate websites",
      "High-conversion landing pages",
      "SEO structure, performance and tracking",
      "Logo, branding, UX & UI design"
    ],
    contact: "Let's shape the next website",
    contactBody:
      "Send me your goal, timeline and 2-3 references. I will answer with a concrete direction, not a wall of buzzwords.",
    projectBack: "Back home",
    projectNext: "Next project"
  }
} satisfies Record<Lang, Record<string, string | string[]>>;

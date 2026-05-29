import type { Lang } from "@/lib/i18n";

export type ProjectDetail = {
  href?: string;
  label: Record<Lang, string>;
  value: Record<Lang, string>;
};

export type ProjectMedia = {
  alt: Record<Lang, string>;
  src: string;
};

export type Project = {
  accent: string;
  client: string;
  details: ProjectDetail[];
  excerpt: Record<Lang, string>;
  media: ProjectMedia[];
  narrative: Record<Lang, string>;
  services: string[];
  slug: string;
  title: Record<Lang, string>;
  year: string;
};

export type ClientListItem = {
  name: string;
  slug?: string;
};

export const projects: Project[] = [
  {
    slug: "von-meiss-architekten",
    year: "2025",
    client: "von Meiss architekten",
    services: ["Sviluppo", "Webflow", "Javascript"],
    accent: "#050505",
    title: {
      it: "von Meiss architekten",
      en: "von Meiss architekten"
    },
    excerpt: {
      it: "Sviluppo Webflow e Javascript per il sito dello studio svizzero von Meiss architekten.",
      en: "Webflow and Javascript development for the Swiss studio von Meiss architekten."
    },
    narrative: {
      it: "Ho sviluppato in Webflow e Javascript un sito progettato da 425m studio per von Meiss architekten, uno studio svizzero che lavora su paesaggio culturale, memoria del contesto e architettura alpina contemporanea. L'intervento traduce questa precisione in un'esperienza multilingue, scalabile e facile da aggiornare: pagine progetto ordinate, interazioni leggere e una struttura pronta a far emergere immagini, testo e ritmo editoriale senza appesantire la navigazione.",
      en: "For von Meiss architekten I developed a Webflow and Javascript website designed by 425m studio for a Swiss practice shaped by cultural landscape, contextual memory and contemporary Alpine architecture. The build turns that precision into a bilingual, scalable and easy-to-update experience: structured project pages, light interactions and a framework that lets imagery, text and editorial rhythm emerge without slowing the navigation down."
    },
    details: [
      {
        label: {
          it: "Design",
          en: "Design"
        },
        value: {
          it: "425m studio",
          en: "425m studio"
        },
        href: "https://425m.studio/"
      },
      {
        label: {
          it: "Lavoro svolto",
          en: "Work"
        },
        value: {
          it: "Sviluppo",
          en: "Development"
        }
      },
      {
        label: {
          it: "Tecnologia",
          en: "Technology"
        },
        value: {
          it: "Webflow + Javascript",
          en: "Webflow + Javascript"
        }
      },
      {
        label: {
          it: "Website",
          en: "Website"
        },
        value: {
          it: "von-meiss.com",
          en: "von-meiss.com"
        },
        href: "https://www.von-meiss.com/it"
      }
    ],
    media: [
      {
        src: "/img/works/von-meiss/von-meiss-1.webp",
        alt: {
          it: "Homepage del sito von Meiss architekten",
          en: "von Meiss architekten website homepage"
        }
      },
      {
        src: "/img/works/von-meiss/von-meiss-2.webp",
        alt: {
          it: "Vista interna del sito von Meiss architekten",
          en: "Internal page view of the von Meiss architekten website"
        }
      },
      {
        src: "/img/works/von-meiss/von-meiss-3.webp",
        alt: {
          it: "Pagina progetto del sito von Meiss architekten",
          en: "Project page of the von Meiss architekten website"
        }
      },
      {
        src: "/img/works/von-meiss/von-meiss-4.webp",
        alt: {
          it: "Pagina editoriale del sito von Meiss architekten",
          en: "Editorial page of the von Meiss architekten website"
        }
      },
      {
        src: "/img/works/von-meiss/von-meiss-5.webp",
        alt: {
          it: "Dettaglio layout del sito von Meiss architekten",
          en: "Layout detail of the von Meiss architekten website"
        }
      }
    ]
  },
  {
    slug: "rat-collective",
    year: "2024",
    client: "R.A.T. Collective",
    services: ["Sviluppo", "WordPress"],
    accent: "#050505",
    title: {
      it: "R.A.T. Collective",
      en: "R.A.T. Collective"
    },
    excerpt: {
      it: "Sviluppo WordPress per R.A.T. Collective, media house nata a Milano.",
      en: "WordPress development for R.A.T. Collective, a media house born in Milan."
    },
    narrative: {
      it: "Ho sviluppato in WordPress un sito progettato da 425m studio per R.A.T. Collective, media house nata a Milano che costruisce racconti visivi per brand, sport, moda e cultura contemporanea. Il lavoro porta online un archivio di progetti fatto di immagini, film e case study, con una struttura semplice da aggiornare e pensata per lasciare spazio al contenuto: ritmo editoriale, navigazione diretta e pagine capaci di valorizzare produzioni diverse senza perdere coerenza.",
      en: "I developed a WordPress website designed by 425m studio for R.A.T. Collective, a media house born in Milan creating visual stories across brands, sport, fashion and contemporary culture. The work brings an archive of projects online through images, films and case studies, with a structure that is easy to update and designed to give the content room: editorial rhythm, direct navigation and pages that can support different productions without losing consistency."
    },
    details: [
      {
        label: {
          it: "Design",
          en: "Design"
        },
        value: {
          it: "425m studio",
          en: "425m studio"
        },
        href: "https://425m.studio/"
      },
      {
        label: {
          it: "Lavoro svolto",
          en: "Work"
        },
        value: {
          it: "Sviluppo",
          en: "Development"
        }
      },
      {
        label: {
          it: "Tecnologia",
          en: "Technology"
        },
        value: {
          it: "WordPress",
          en: "WordPress"
        }
      },
      {
        label: {
          it: "Website",
          en: "Website"
        },
        value: {
          it: "rat-collective.com",
          en: "rat-collective.com"
        },
        href: "https://rat-collective.com/"
      }
    ],
    media: [
      {
        src: "/img/works/rat/rat-1.webp",
        alt: {
          it: "Homepage del sito R.A.T. Collective",
          en: "R.A.T. Collective website homepage"
        }
      },
      {
        src: "/img/works/rat/rat-2.webp",
        alt: {
          it: "Pagina progetto del sito R.A.T. Collective",
          en: "Project page of the R.A.T. Collective website"
        }
      },
      {
        src: "/img/works/rat/rat-3.webp",
        alt: {
          it: "Vista editoriale del sito R.A.T. Collective",
          en: "Editorial view of the R.A.T. Collective website"
        }
      },
      {
        src: "/img/works/rat/rat-4.webp",
        alt: {
          it: "Dettaglio layout del sito R.A.T. Collective",
          en: "Layout detail of the R.A.T. Collective website"
        }
      }
    ]
  },
  {
    slug: "lab-distribution",
    year: "2025",
    client: "LAB Distribution",
    services: ["Store Locator", "Custom code", "Mapbox"],
    accent: "#050505",
    title: {
      it: "LAB Distribution",
      en: "LAB Distribution"
    },
    excerpt: {
      it: "Implementazione Store Location custom code e Mapbox per LAB Distribution.",
      en: "Custom code and Mapbox Store Location implementation for LAB Distribution."
    },
    narrative: {
      it: "Ho implementato una Store Location in custom code con Mapbox per LAB Distribution, azienda nata nel 2010 per distribuire brand di tendenza sul territorio italiano. Il lavoro rende più accessibile la rete retail del progetto: una mappa chiara, veloce da consultare e integrata nel sito, pensata per aiutare utenti e retailer a trovare punti vendita e contatti senza interrompere il racconto dei brand distribuiti.",
      en: "I implemented a custom-code Store Location with Mapbox for LAB Distribution, a company founded in 2010 to distribute trend-driven brands across the Italian market. The work makes the retail network easier to explore: a clear, fast and integrated map designed to help users and retailers find stores and contacts without interrupting the story of the distributed brands."
    },
    details: [
      {
        label: {
          it: "Lavoro svolto",
          en: "Work"
        },
        value: {
          it: "Implementazione Store Location",
          en: "Store Location implementation"
        }
      },
      {
        label: {
          it: "Tecnologia",
          en: "Technology"
        },
        value: {
          it: "Custom code + Mapbox",
          en: "Custom code + Mapbox"
        }
      },
      {
        label: {
          it: "Website",
          en: "Website"
        },
        value: {
          it: "lab-distribution.com",
          en: "lab-distribution.com"
        },
        href: "https://www.lab-distribution.com/it/"
      }
    ],
    media: [
      {
        src: "/img/works/lab-distribution/lab-distribution-1.webp",
        alt: {
          it: "Store Location del sito LAB Distribution",
          en: "LAB Distribution website Store Location"
        }
      },
      {
        src: "/img/works/lab-distribution/lab-distribution-2.webp",
        alt: {
          it: "Mappa store locator del sito LAB Distribution",
          en: "Store locator map on the LAB Distribution website"
        }
      }
    ]
  },
  {
    slug: "michela-meni-studio",
    year: "2025",
    client: "Michela Meni Studio",
    services: ["Restyling", "Shopify", "Custom Liquid"],
    accent: "#050505",
    title: {
      it: "Michela Meni Studio",
      en: "Michela Meni Studio"
    },
    excerpt: {
      it: "Restyling e modifiche custom al tema Shopify per Michela Meni Studio.",
      en: "Shopify theme redesign and custom Liquid adjustments for Michela Meni Studio."
    },
    narrative: {
      it: "Ho lavorato al restyling e alle modifiche custom del tema Shopify di Michela Meni Studio, brand fondato a Bergamo nel 2020 che crea capi senza tempo in piccole quantità, usando tessuti deadstock e collaborando con laboratori e artigiani locali. L'intervento rende l'esperienza e-commerce più ordinata e coerente con una filosofia fatta di femminilità, comfort, eleganza discreta e consumo consapevole: struttura delle collezioni più chiara, dettagli di interfaccia su misura e una gestione Shopify pensata per valorizzare prodotti, contenuti e ritmo stagionale senza appesantire la navigazione.",
      en: "I worked on the redesign and custom Liquid adjustments of the Michela Meni Studio Shopify theme, a brand founded in Bergamo in 2020 creating timeless garments in small quantities, using deadstock fabrics and working with local workshops and artisans. The intervention makes the e-commerce experience more orderly and consistent with a philosophy shaped by femininity, comfort, quiet elegance and conscious consumption: clearer collection structure, tailored interface details and a Shopify setup designed to support products, content and seasonal rhythm without weighing down the navigation."
    },
    details: [
      {
        label: {
          it: "Lavoro svolto",
          en: "Work"
        },
        value: {
          it: "Restyling + Modifiche Custom al tema",
          en: "Redesign + Custom theme adjustments"
        }
      },
      {
        label: {
          it: "Tecnologia",
          en: "Technology"
        },
        value: {
          it: "Shopify + Custom Liquid",
          en: "Shopify + Custom Liquid"
        }
      },
      {
        label: {
          it: "Website",
          en: "Website"
        },
        value: {
          it: "michelamenistudio.com",
          en: "michelamenistudio.com"
        },
        href: "https://michelamenistudio.com/"
      }
    ],
    media: [
      {
        src: "/img/works/michelameni-studio/michela-meni-studio-1.webp",
        alt: {
          it: "Homepage del sito Michela Meni Studio",
          en: "Michela Meni Studio website homepage"
        }
      },
      {
        src: "/img/works/michelameni-studio/michela-meni-studio-2.webp",
        alt: {
          it: "Pagina collezione del sito Michela Meni Studio",
          en: "Michela Meni Studio website collection page"
        }
      },
      {
        src: "/img/works/michelameni-studio/michela-meni-studio-3.webp",
        alt: {
          it: "Pagina prodotto del sito Michela Meni Studio",
          en: "Michela Meni Studio website product page"
        }
      }
    ]
  },
  {
    slug: "studio-b-quadro",
    year: "2023",
    client: "Studio B-Quadro",
    services: ["Restyling", "Sviluppo", "WordPress"],
    accent: "#050505",
    title: {
      it: "Studio B-Quadro",
      en: "Studio B-Quadro"
    },
    excerpt: {
      it: "Restyling e sviluppo WordPress per Studio B-Quadro, societa' di consulenza contabile, fiscale e del lavoro.",
      en: "WordPress redesign and development for Studio B-Quadro, an accounting, tax and labour consulting firm."
    },
    narrative: {
      it: "Ho curato il restyling e lo sviluppo WordPress del sito di Studio B-Quadro, societa' di Dottori Commercialisti, Esperti Contabili e Consulenti del Lavoro che supporta professionisti, imprese, cooperative, enti del terzo settore, associazioni e societa' sportive. Il lavoro organizza in modo piu' chiaro servizi, sedi, team e contatti, traducendo una consulenza multidisciplinare in un'esperienza ordinata, aggiornabile e diretta: una struttura pensata per rendere accessibili competenze fiscali, giuslavoristiche, societarie e amministrative senza appesantire la navigazione.",
      en: "I worked on the redesign and WordPress development of the Studio B-Quadro website, an accounting, tax and labour consulting firm supporting professionals, businesses, cooperatives, third-sector organisations, associations and sports companies. The work organises services, offices, team and contacts with more clarity, turning a multidisciplinary consultancy practice into an orderly, easy-to-update and direct experience: a structure designed to make tax, labour, corporate and administrative expertise accessible without weighing down the navigation."
    },
    details: [
      {
        label: {
          it: "Lavoro svolto",
          en: "Work"
        },
        value: {
          it: "Restyling + Sviluppo",
          en: "Redesign + Development"
        }
      },
      {
        label: {
          it: "Tecnologia",
          en: "Technology"
        },
        value: {
          it: "WordPress",
          en: "WordPress"
        }
      },
      {
        label: {
          it: "Website",
          en: "Website"
        },
        value: {
          it: "studiobq.it",
          en: "studiobq.it"
        },
        href: "https://studiobq.it/"
      }
    ],
    media: [
      {
        src: "/img/works/b-quadro/studio-bquadro-1.webp",
        alt: {
          it: "Homepage del sito Studio B-Quadro",
          en: "Studio B-Quadro website homepage"
        }
      },
      {
        src: "/img/works/b-quadro/studio-bquadro-2.webp",
        alt: {
          it: "Pagina servizi del sito Studio B-Quadro",
          en: "Studio B-Quadro website services page"
        }
      },
      {
        src: "/img/works/b-quadro/studio-bquadro-3.webp",
        alt: {
          it: "Sezione sedi del sito Studio B-Quadro",
          en: "Studio B-Quadro website offices section"
        }
      },
      {
        src: "/img/works/b-quadro/studio-bquadro-4.webp",
        alt: {
          it: "Pagina contatti del sito Studio B-Quadro",
          en: "Studio B-Quadro website contact page"
        }
      }
    ]
  },
  {
    slug: "tiziana-scarpati-nails",
    year: "2021",
    client: "Tiziana Scarpati Nails",
    services: ["Sviluppo", "WordPress", "WooCommerce"],
    accent: "#050505",
    title: {
      it: "Tiziana Scarpati Nails",
      en: "Tiziana Scarpati Nails"
    },
    excerpt: {
      it: "Sviluppo WordPress e WooCommerce per una boutique e accademia di Nail Art a Bergamo.",
      en: "WordPress and WooCommerce development for a Nail Art boutique and academy in Bergamo."
    },
    narrative: {
      it: "Ho sviluppato in WordPress e WooCommerce il sito di Tiziana Scarpati Nails, boutique e accademia di Nail Art a Bergamo. Il design era gia' stato definito da Dario Bellusci: il mio intervento si e' concentrato sulla realizzazione tecnica e sulla personalizzazione completa del sito in base alle esigenze del cliente, traducendo identita', servizi, formazione e vendita online in una struttura chiara, gestibile e coerente con un progetto molto specifico.",
      en: "I developed the Tiziana Scarpati Nails website in WordPress and WooCommerce for a Nail Art boutique and academy in Bergamo. The design had already been defined by Dario Bellusci: my work focused on the technical build and full customisation of the website around the client's needs, translating identity, services, education and online sales into a clear, manageable structure aligned with a very specific project."
    },
    details: [
      {
        label: {
          it: "Design",
          en: "Design"
        },
        value: {
          it: "Dario Bellusci",
          en: "Dario Bellusci"
        },
        href: "https://dariobellusci.eu/"
      },
      {
        label: {
          it: "Lavoro svolto",
          en: "Work"
        },
        value: {
          it: "Sviluppo",
          en: "Development"
        }
      },
      {
        label: {
          it: "Tecnologia",
          en: "Technology"
        },
        value: {
          it: "WordPress + WooCommerce",
          en: "WordPress + WooCommerce"
        }
      }
    ],
    media: [
      {
        src: "/img/works/tiziana-scarpati/ts-home-01.webp",
        alt: {
          it: "Homepage del sito Tiziana Scarpati Nails",
          en: "Tiziana Scarpati Nails website homepage"
        }
      },
      {
        src: "/img/works/tiziana-scarpati/ts-home-02.webp",
        alt: {
          it: "Pagina servizi del sito Tiziana Scarpati Nails",
          en: "Tiziana Scarpati Nails website services page"
        }
      },
      {
        src: "/img/works/tiziana-scarpati/ts-home-03.webp",
        alt: {
          it: "Pagina accademia del sito Tiziana Scarpati Nails",
          en: "Tiziana Scarpati Nails website academy page"
        }
      },
      {
        src: "/img/works/tiziana-scarpati/ts-home-04.webp",
        alt: {
          it: "Pagina e-commerce del sito Tiziana Scarpati Nails",
          en: "Tiziana Scarpati Nails website e-commerce page"
        }
      }
    ]
  },
  {
    slug: "impresa-edile-regonesi",
    year: "2024",
    client: "Impresa Edile Regonesi",
    services: ["Design", "Sviluppo", "WordPress"],
    accent: "#050505",
    title: {
      it: "Impresa Edile Regonesi",
      en: "Impresa Edile Regonesi"
    },
    excerpt: {
      it: "Design e sviluppo WordPress per un'impresa edile specializzata in costruzioni e ristrutturazioni di alta gamma.",
      en: "WordPress design and development for a construction company focused on high-end builds and renovations."
    },
    narrative: {
      it: "Ho progettato e sviluppato in WordPress il sito di Impresa Edile Regonesi, realtà radicata nel territorio bergamasco con oltre 45 anni di esperienza nell'edilizia civile e industriale, dalle residenze private agli interventi di ristrutturazione e manutenzione. Il lavoro traduce solidità, cura artigianale e attenzione al dettaglio in una presenza digitale chiara: servizi leggibili, portfolio ordinato, contatti immediati e una struttura semplice da aggiornare per raccontare nuove realizzazioni senza perdere autorevolezza.",
      en: "I designed and developed the Impresa Edile Regonesi website in WordPress for a Bergamo-based construction company with more than 45 years of experience across civil and industrial building, private residences, renovations and maintenance. The work turns solidity, craft and attention to detail into a clear digital presence: readable services, an ordered portfolio, immediate contacts and an easy-to-update structure designed to present new projects without losing authority."
    },
    details: [
      {
        label: {
          it: "Lavoro svolto",
          en: "Work"
        },
        value: {
          it: "Design + Sviluppo",
          en: "Design + Development"
        }
      },
      {
        label: {
          it: "Tecnologia",
          en: "Technology"
        },
        value: {
          it: "WordPress",
          en: "WordPress"
        }
      },
      {
        label: {
          it: "Website",
          en: "Website"
        },
        value: {
          it: "impresaedileregonesi.com",
          en: "impresaedileregonesi.com"
        },
        href: "https://www.impresaedileregonesi.com/"
      }
    ],
    media: [
      {
        src: "/img/works/impresa-edile-regonesi/impresa-edile-regonesi-1.webp",
        alt: {
          it: "Homepage del sito Impresa Edile Regonesi",
          en: "Impresa Edile Regonesi website homepage"
        }
      },
      {
        src: "/img/works/impresa-edile-regonesi/impresa-edile-regonesi-2.webp",
        alt: {
          it: "Pagina servizi del sito Impresa Edile Regonesi",
          en: "Impresa Edile Regonesi website services page"
        }
      },
      {
        src: "/img/works/impresa-edile-regonesi/impresa-edile-regonesi-3.webp",
        alt: {
          it: "Sezione portfolio del sito Impresa Edile Regonesi",
          en: "Impresa Edile Regonesi website portfolio section"
        }
      }
    ]
  },
  {
    slug: "eeia",
    year: "2026",
    client: "EEIA",
    services: ["Design", "Sviluppo", "WordPress"],
    accent: "#050505",
    title: {
      it: "EEIA",
      en: "EEIA"
    },
    excerpt: {
      it: "Design e sviluppo WordPress per un centro dedicato alla Procreazione Medicalmente Assistita.",
      en: "WordPress design and development for a centre dedicated to medically assisted reproduction."
    },
    narrative: {
      it: "Ho progettato e sviluppato in WordPress il sito di EEIA, centro dedicato alla Procreazione Medicalmente Assistita che integra ricerca scientifica, innovazione clinica e attenzione alla persona. Il progetto aveva bisogno di ordine, misura e fiducia: architettura dei contenuti chiara, percorsi di lettura guidati, sezioni sulle tecniche e sulle consulenze facili da consultare, con una gestione WordPress pensata per aggiornare informazioni sensibili senza perdere rigore.",
      en: "I designed and developed the EEIA website in WordPress for a centre dedicated to medically assisted reproduction, combining scientific research, clinical innovation and care for people. The project needed order, restraint and trust: clear content architecture, guided reading paths, techniques and consultation sections that are easy to explore, and a WordPress setup designed to update sensitive information without losing rigour."
    },
    details: [
      {
        label: {
          it: "Lavoro svolto",
          en: "Work"
        },
        value: {
          it: "Design + Sviluppo",
          en: "Design + Development"
        }
      },
      {
        label: {
          it: "Tecnologia",
          en: "Technology"
        },
        value: {
          it: "WordPress",
          en: "WordPress"
        }
      },
      {
        label: {
          it: "Website",
          en: "Website"
        },
        value: {
          it: "eeiasrl.com",
          en: "eeiasrl.com"
        },
        href: "https://eeiasrl.com/"
      }
    ],
    media: [
      {
        src: "/img/works/eeia/eeia-1.webp",
        alt: {
          it: "Homepage del sito EEIA",
          en: "EEIA website homepage"
        }
      },
      {
        src: "/img/works/eeia/eeia-2.webp",
        alt: {
          it: "Sezione metodo del sito EEIA",
          en: "EEIA website method section"
        }
      },
      {
        src: "/img/works/eeia/eeia-3.webp",
        alt: {
          it: "Pagina tecniche del sito EEIA",
          en: "EEIA website techniques page"
        }
      },
      {
        src: "/img/works/eeia/eeia-4.webp",
        alt: {
          it: "Sezione consulenze del sito EEIA",
          en: "EEIA website consultations section"
        }
      },
      {
        src: "/img/works/eeia/eeia-5.webp",
        alt: {
          it: "Pagina contatti del sito EEIA",
          en: "EEIA website contact page"
        }
      }
    ]
  },
  {
    slug: "helvetic-leaf",
    year: "2025",
    client: "Helvetic Leaf",
    services: ["Sviluppo", "WordPress"],
    accent: "#050505",
    title: {
      it: "Helvetic Leaf",
      en: "Helvetic Leaf"
    },
    excerpt: {
      it: "Sviluppo WordPress per Helvetic Leaf Group SA, gruppo svizzero attivo nel settore costruzioni.",
      en: "WordPress development for Helvetic Leaf Group SA, a Swiss group working in the construction sector."
    },
    narrative: {
      it: "Ho sviluppato in WordPress un sito progettato da Sam Sala Studio per Helvetic Leaf Group SA, gruppo svizzero nato attorno a tre società attive nel settore costruzioni: Helvetic Leaf SA, Helvetic Plaster SA e Helvetic Sollers SAGL. Il lavoro trasforma una struttura societaria articolata in un'esperienza essenziale e multilingue, dove identità, progetti e contatti restano immediati: poche sezioni, ritmo controllato e una gestione pensata per mantenere il sito pulito mentre il gruppo evolve.",
      en: "I developed a WordPress website designed by Sam Sala Studio for Helvetic Leaf Group SA, a Swiss group built around three companies in the construction sector: Helvetic Leaf SA, Helvetic Plaster SA and Helvetic Sollers SAGL. The work turns a layered company structure into an essential multilingual experience, where identity, projects and contacts stay immediate: few sections, controlled rhythm and a setup designed to keep the website clean as the group evolves."
    },
    details: [
      {
        label: {
          it: "Design",
          en: "Design"
        },
        value: {
          it: "Sam Sala Studio",
          en: "Sam Sala Studio"
        },
        href: "https://samsala.studio/"
      },
      {
        label: {
          it: "Lavoro svolto",
          en: "Work"
        },
        value: {
          it: "Sviluppo",
          en: "Development"
        }
      },
      {
        label: {
          it: "Tecnologia",
          en: "Technology"
        },
        value: {
          it: "WordPress",
          en: "WordPress"
        }
      },
      {
        label: {
          it: "Website",
          en: "Website"
        },
        value: {
          it: "helveticleaf.ch",
          en: "helveticleaf.ch"
        },
        href: "https://helveticleaf.ch/"
      }
    ],
    media: [
      {
        src: "/img/works/helvetic-leaf/helvetic-leaf1.webp",
        alt: {
          it: "Homepage del sito Helvetic Leaf",
          en: "Helvetic Leaf website homepage"
        }
      },
      {
        src: "/img/works/helvetic-leaf/helvetic-leaf2.webp",
        alt: {
          it: "Sezione gruppo del sito Helvetic Leaf",
          en: "Helvetic Leaf website group section"
        }
      },
      {
        src: "/img/works/helvetic-leaf/helvetic-leaf3.webp",
        alt: {
          it: "Pagina progetti del sito Helvetic Leaf",
          en: "Helvetic Leaf website projects page"
        }
      },
      {
        src: "/img/works/helvetic-leaf/helvetic-leaf4.webp",
        alt: {
          it: "Pagina contatti del sito Helvetic Leaf",
          en: "Helvetic Leaf website contact page"
        }
      }
    ]
  },
  {
    slug: "vedrai",
    year: "2026",
    client: "Vedrai",
    services: ["Sviluppo", "Webflow CMS", "Finsweet"],
    accent: "#050505",
    title: {
      it: "Vedrai",
      en: "Vedrai"
    },
    excerpt: {
      it: "Sviluppo sezioni Risorse e Partner in Webflow CMS, con migrazione contenuti e filtri Finsweet.",
      en: "Webflow CMS development for Resources and Partner sections, with content migration and Finsweet filtering."
    },
    narrative: {
      it: "Sono intervenuto su un sito Vedrai già sviluppato, occupandomi prima dell'analisi della piattaforma e poi dello sviluppo delle sezioni Risorse e Partner in Webflow CMS. Vedrai lavora sull'intelligenza artificiale applicata ai processi decisionali attraverso WhAI, una piattaforma di Decision Intelligence: il lavoro doveva quindi rispettare un ecosistema già strutturato. Ho gestito la migrazione dei contenuti da Pimcore, costruito un archivio Risorse più ordinato e integrato il filtraggio Finsweet, insieme a una sezione Partner pensata per restare scalabile e coerente con il resto del sito.",
      en: "I worked on an already developed Vedrai website, starting with an analysis of the platform and then building the Resources and Partner sections in Webflow CMS. Vedrai works on AI applied to business decision processes through WhAI, a Decision Intelligence platform, so the work had to respect an already structured ecosystem. I handled the content migration from Pimcore, built a clearer Resources archive with Finsweet filtering, and developed a Partner section designed to stay scalable and consistent with the rest of the website."
    },
    details: [
      {
        label: {
          it: "Lavoro svolto",
          en: "Work"
        },
        value: {
          it: "Sviluppo sezione Risorse e Partner",
          en: "Resources and Partner section development"
        }
      },
      {
        label: {
          it: "Tecnologia",
          en: "Technology"
        },
        value: {
          it: "Webflow CMS + Finsweet",
          en: "Webflow CMS + Finsweet"
        }
      },
      {
        label: {
          it: "Website",
          en: "Website"
        },
        value: {
          it: "vedrai.com",
          en: "vedrai.com"
        },
        href: "https://www.vedrai.com/"
      }
    ],
    media: [
      {
        src: "/img/works/vedrai/vedrai-1.webp",
        alt: {
          it: "Pagina Risorse del sito Vedrai",
          en: "Vedrai website Resources page"
        }
      },
      {
        src: "/img/works/vedrai/vedrai-2.webp",
        alt: {
          it: "Archivio contenuti del sito Vedrai",
          en: "Vedrai website content archive"
        }
      },
      {
        src: "/img/works/vedrai/vedrai-3.webp",
        alt: {
          it: "Filtri della sezione Risorse Vedrai",
          en: "Vedrai Resources filtering interface"
        }
      },
      {
        src: "/img/works/vedrai/vedrai-4.webp",
        alt: {
          it: "Sezione Partner del sito Vedrai",
          en: "Vedrai website Partner section"
        }
      }
    ]
  },
  {
    slug: "giorgia-mantero-osteopata",
    year: "2024",
    client: "Giorgia Mantero Osteopata",
    services: ["Sviluppo", "WordPress"],
    accent: "#050505",
    title: {
      it: "Giorgia Mantero Osteopata",
      en: "Giorgia Mantero Osteopata"
    },
    excerpt: {
      it: "Sviluppo WordPress per il sito di un'osteopata a Como, progettato da 425m Studio.",
      en: "WordPress development for a Como-based osteopath website designed by 425m Studio."
    },
    narrative: {
      it: "Ho sviluppato in WordPress un sito progettato da 425m Studio per Giorgia Mantero, osteopata a Como che lavora su problematiche muscolo-scheletriche, cranio-sacrali e viscerali, con un approccio orientato alla prevenzione e al mantenimento dello stato di salute. Il progetto mette al centro chiarezza e delicatezza: servizi consultabili senza frizione, contenuti informativi, domande frequenti e contatti sempre accessibili, dentro una struttura leggera che lascia respirare il design e rende semplice aggiornare il sito nel tempo.",
      en: "I developed a WordPress website designed by 425m Studio for Giorgia Mantero, an osteopath in Como working on musculoskeletal, craniosacral and visceral issues with an approach focused on prevention and health maintenance. The project is built around clarity and delicacy: services that are easy to explore, informative content, FAQs and accessible contacts, within a light structure that lets the design breathe and keeps future updates simple."
    },
    details: [
      {
        label: {
          it: "Design",
          en: "Design"
        },
        value: {
          it: "425m Studio",
          en: "425m Studio"
        },
        href: "https://425m.studio/"
      },
      {
        label: {
          it: "Lavoro svolto",
          en: "Work"
        },
        value: {
          it: "Sviluppo",
          en: "Development"
        }
      },
      {
        label: {
          it: "Tecnologia",
          en: "Technology"
        },
        value: {
          it: "WordPress",
          en: "WordPress"
        }
      },
      {
        label: {
          it: "Website",
          en: "Website"
        },
        value: {
          it: "giorgiamantero.it",
          en: "giorgiamantero.it"
        },
        href: "https://giorgiamantero.it/"
      }
    ],
    media: [
      {
        src: "/img/works/giorgia-mantero-osteopata/giorgia-mantero-osteopata-1.webp",
        alt: {
          it: "Homepage del sito Giorgia Mantero Osteopata",
          en: "Giorgia Mantero Osteopata website homepage"
        }
      },
      {
        src: "/img/works/giorgia-mantero-osteopata/giorgia-mantero-osteopata-2.webp",
        alt: {
          it: "Sezione servizi del sito Giorgia Mantero Osteopata",
          en: "Giorgia Mantero Osteopata website services section"
        }
      },
      {
        src: "/img/works/giorgia-mantero-osteopata/giorgia-mantero-osteopata-3.webp",
        alt: {
          it: "Pagina chi sono del sito Giorgia Mantero Osteopata",
          en: "Giorgia Mantero Osteopata website about page"
        }
      },
      {
        src: "/img/works/giorgia-mantero-osteopata/giorgia-mantero-osteopata-4.webp",
        alt: {
          it: "Pagina domande e risposte del sito Giorgia Mantero Osteopata",
          en: "Giorgia Mantero Osteopata website FAQ page"
        }
      },
      {
        src: "/img/works/giorgia-mantero-osteopata/giorgia-mantero-osteopata-5.webp",
        alt: {
          it: "Pagina contatti del sito Giorgia Mantero Osteopata",
          en: "Giorgia Mantero Osteopata website contact page"
        }
      }
    ]
  },
  {
    slug: "esseci",
    year: "2024",
    client: "EsseCi",
    services: ["Design", "Sviluppo", "WordPress"],
    accent: "#050505",
    title: {
      it: "EsseCi",
      en: "EsseCi"
    },
    excerpt: {
      it: "Design e sviluppo WordPress per un general contractor con una storia radicata nel settore edilizia.",
      en: "WordPress design and development for a general contractor with a long history in construction."
    },
    narrative: {
      it: "Ho progettato e sviluppato in WordPress il sito di EsseCi, azienda nata nel 1955 e cresciuta come general contractor per costruzioni, ristrutturazioni, finiture d'interni, manutenzioni e allestimenti personalizzati. Il lavoro organizza una storia lunga e un portfolio molto concreto dentro un sistema più leggibile: pagine aziendali, servizi, realizzazioni e certificazioni diventano sezioni chiare, aggiornabili e coerenti con un'impresa che deve comunicare affidabilità senza sembrare ferma nel passato.",
      en: "I designed and developed the EsseCi website in WordPress for a company founded in 1955 and grown into a general contractor for construction, renovations, interior finishes, building maintenance and custom setups. The work organises a long history and a concrete portfolio into a more readable system: company pages, services, projects and certifications become clear, easy-to-update sections aligned with a business that needs to communicate reliability without feeling stuck in the past."
    },
    details: [
      {
        label: {
          it: "Lavoro svolto",
          en: "Work"
        },
        value: {
          it: "Design + Sviluppo",
          en: "Design + Development"
        }
      },
      {
        label: {
          it: "Tecnologia",
          en: "Technology"
        },
        value: {
          it: "WordPress",
          en: "WordPress"
        }
      },
      {
        label: {
          it: "Website",
          en: "Website"
        },
        value: {
          it: "essecisrl.it",
          en: "essecisrl.it"
        },
        href: "https://www.essecisrl.it/"
      }
    ],
    media: [
      {
        src: "/img/works/esseci/esseci-1.webp",
        alt: {
          it: "Homepage del sito EsseCi",
          en: "EsseCi website homepage"
        }
      },
      {
        src: "/img/works/esseci/esseci-2.webp",
        alt: {
          it: "Sezione realizzazioni del sito EsseCi",
          en: "EsseCi website projects section"
        }
      },
      {
        src: "/img/works/esseci/esseci-3.webp",
        alt: {
          it: "Pagina servizi del sito EsseCi",
          en: "EsseCi website services page"
        }
      },
      {
        src: "/img/works/esseci/esseci-4.webp",
        alt: {
          it: "Pagina contatti del sito EsseCi",
          en: "EsseCi website contact page"
        }
      }
    ]
  }
];

export const clients: ClientListItem[] = [
  {
    name: "AJP Studios"
  },
  {
    name: "Andrea Faccaro - AF Training"
  },
  {
    name: "Antico Opificio Sasso Alloro"
  },
  {
    name: "Bali 1987"
  },
  {
    name: "Benedetta Bassanelli"
  },
  {
    name: "Bergamauto"
  },
  {
    name: "BG Cauzioni"
  },
  {
    name: "Caffè del Tasso"
  },
  {
    name: "Campidapadel.it"
  },
  {
    name: "Cellular Store Dalmine"
  },
  {
    name: "Christian Brogna"
  },
  {
    name: "Cirelli Motor Company"
  },
  {
    name: "Circolino"
  },
  {
    name: "Clo’et Design"
  },
  {
    name: "CM Meccanica Di Precisione"
  },
  {
    name: "CMA Garden"
  },
  {
    name: "Dall’Albero All’Arte"
  },
  {
    name: "Davide Casari"
  },
  {
    name: "Defendi Abbigliamento"
  },
  {
    name: "EEIA",
    slug: "eeia"
  },
  {
    name: "EGJ Arch"
  },
  {
    name: "Emendamento18"
  },
  {
    name: "Emisferia"
  },
  {
    name: "EsseCi",
    slug: "esseci"
  },
  {
    name: "Evora - Luxury Shopping Tour"
  },
  {
    name: "Frames by Alberto Nacci"
  },
  {
    name: "Furnel e Pirol"
  },
  {
    name: "Gelateria Stracciatella"
  },
  {
    name: "Giorgia Mantero Osteopata",
    slug: "giorgia-mantero-osteopata"
  },
  {
    name: "Giulie Abiti Da Sposa"
  },
  {
    name: "Giussani Falegnameria"
  },
  {
    name: "Hangar 51"
  },
  {
    name: "Helvetic Leaf",
    slug: "helvetic-leaf"
  },
  {
    name: "I&T Hub"
  },
  {
    name: "Il Soffio Studio Olistico"
  },
  {
    name: "Impresa Edile Regonesi",
    slug: "impresa-edile-regonesi"
  },
  {
    name: "Indoor Outdoor Cosmetics"
  },
  {
    name: "Ing. Mauro Magli Management"
  },
  {
    name: "Innovation 4 Luxury"
  },
  {
    name: "Isola Dello Sportivo"
  },
  {
    name: "Just Run BG"
  },
  {
    name: "JustRun Asd"
  },
  {
    name: "Kira Padel"
  },
  {
    name: "La cucina circolare del Pentalfa"
  },
  {
    name: "LAB Distribution",
    slug: "lab-distribution"
  },
  {
    name: "Mandalart"
  },
  {
    name: "Mandorlacchio"
  },
  {
    name: "Mestieri Lab"
  },
  {
    name: "Micaela Raimondi Temporary Marketing Manager"
  },
  {
    name: "Michela Meni Studio",
    slug: "michela-meni-studio"
  },
  {
    name: "Modamica"
  },
  {
    name: "Moei Design"
  },
  {
    name: "Monica Mancini Restauro Dipinti"
  },
  {
    name: "Ninacare"
  },
  {
    name: "Noemi Gangi"
  },
  {
    name: "Nuova Litocolor Dabrazzi"
  },
  {
    name: "Ombra By Tresoldi"
  },
  {
    name: "Ottini Studio"
  },
  {
    name: "Pages Italia"
  },
  {
    name: "Pantelrent"
  },
  {
    name: "Parco Globo"
  },
  {
    name: "Parrocchia di Barzana"
  },
  {
    name: "Pisoni Odontoiatri"
  },
  {
    name: "Pizzeria d’asporto al Borgo"
  },
  {
    name: "R.A.T. Collective",
    slug: "rat-collective"
  },
  {
    name: "Residence Riviera Mare"
  },
  {
    name: "Riccardi Store"
  },
  {
    name: "Run Like Locals"
  },
  {
    name: "Scegli-LO"
  },
  {
    name: "Scuola dell’infanzia Beata Vergine Maria Immacolata di Barzana"
  },
  {
    name: "Smoppy’s Adventure"
  },
  {
    name: "Sport Indoor"
  },
  {
    name: "Studio B-Quadro",
    slug: "studio-b-quadro"
  },
  {
    name: "Tassino Eventi"
  },
  {
    name: "Tecnomec"
  },
  {
    name: "The Good Attitude"
  },
  {
    name: "Thomas Capponi"
  },
  {
    name: "Tiziana Scarpati Nails",
    slug: "tiziana-scarpati-nails"
  },
  {
    name: "Vedrai",
    slug: "vedrai"
  },
  {
    name: "Verde in stile"
  },
  {
    name: "von Meiss Architekten",
    slug: "von-meiss-architekten"
  },
  {
    name: "Yasmina Pani"
  }
];

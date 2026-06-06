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
    slug: "indoor-outdoor-cosmetics",
    year: "2026",
    client: "Indoor Outdoor Cosmetics",
    services: ["Sviluppo", "Shopify", "Custom Liquid"],
    accent: "#050505",
    title: {
      it: "Indoor Outdoor Cosmetics",
      en: "Indoor Outdoor Cosmetics"
    },
    excerpt: {
      it: "Sviluppo Shopify e Custom Liquid per IAMIO, skincare funzionale per indoor care e outdoor performance.",
      en: "Shopify and Custom Liquid development for IAMIO, functional skincare for indoor care and outdoor performance."
    },
    narrative: {
      it: "Ho sviluppato in Shopify e Custom Liquid il sito di Indoor Outdoor Cosmetics, progetto e-commerce milanese che si affaccia sul mercato globale. Il brand lavora su una skincare funzionale pensata per persone in movimento: routine indoor, esposizione outdoor, UV, vento, freddo, sudore, attrito e recupero. Il sito progettato da Sam Sala Studio doveva tenere insieme identita' minimale, racconto editoriale e vendita diretta: schede prodotto essenziali, sezioni lab, contenuti su performance e longevita' della pelle, e una struttura Shopify pronta a gestire prodotti, articoli e crescita del brand senza perdere precisione.",
      en: "I developed the Indoor Outdoor Cosmetics website in Shopify and Custom Liquid for a Milan-based e-commerce project with a global market outlook. The brand focuses on functional skincare for people in motion: indoor routines, outdoor exposure, UV, wind, cold, sweat, friction and recovery. The website, designed by Sam Sala Studio, needed to bring together a minimal identity, editorial storytelling and direct commerce: essential product pages, lab sections, content around performance and skin longevity, and a Shopify structure ready to manage products, articles and brand growth without losing precision."
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
          it: "iamio.com",
          en: "iamio.com"
        },
        href: "https://iamio.com/"
      }
    ],
    media: [
      {
        src: "/img/works/indoor-outdoor/iamio-1.webp",
        alt: {
          it: "Homepage del sito Indoor Outdoor Cosmetics",
          en: "Indoor Outdoor Cosmetics website homepage"
        }
      },
      {
        src: "/img/works/indoor-outdoor/iamio-2.webp",
        alt: {
          it: "Pagina prodotto del sito Indoor Outdoor Cosmetics",
          en: "Indoor Outdoor Cosmetics website product page"
        }
      },
      {
        src: "/img/works/indoor-outdoor/iamio-3.webp",
        alt: {
          it: "Sezione lab del sito Indoor Outdoor Cosmetics",
          en: "Indoor Outdoor Cosmetics website lab section"
        }
      },
      {
        src: "/img/works/indoor-outdoor/iamio-4.webp",
        alt: {
          it: "Archivio prodotti del sito Indoor Outdoor Cosmetics",
          en: "Indoor Outdoor Cosmetics website product archive"
        }
      },
      {
        src: "/img/works/indoor-outdoor/iamio-5.webp",
        alt: {
          it: "Sezione editoriale del sito Indoor Outdoor Cosmetics",
          en: "Indoor Outdoor Cosmetics website editorial section"
        }
      }
    ]
  },
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
  },
  {
    slug: "ajp-studios",
    year: "2024",
    client: "AJP Studios",
    services: ["Design", "Sviluppo", "WordPress"],
    accent: "#050505",
    title: {
      it: "AJP Studios",
      en: "AJP Studios"
    },
    excerpt: {
      it: "Design e sviluppo WordPress per uno studio di produzione audio/video specializzato in arte, cultura e musica.",
      en: "WordPress design and development for an audio/video production studio focused on art, culture and music."
    },
    narrative: {
      it: "Ho progettato e sviluppato in WordPress il sito di AJP Studios, spazio creativo e studio di produzione fondato da Alberto Nacci, specializzato in docufilm d'arte e cultura, opere video, progetti musicali live-in-studio e formazione. Il lavoro organizza un universo ricco di filmografia, servizi, workshop e contenuti editoriali dentro una struttura leggibile e aggiornabile, capace di far convivere archivio, racconto artistico e informazioni pratiche senza perdere ritmo.",
      en: "I designed and developed the AJP Studios website in WordPress for the creative space and production studio founded by Alberto Nacci, specialised in art and culture documentaries, video works, live-in-studio music projects and training. The work organises a rich world of filmography, services, workshops and editorial content into a readable and easy-to-update structure, allowing archive, artistic narrative and practical information to coexist without losing rhythm."
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
          it: "ajp.it",
          en: "ajp.it"
        },
        href: "https://ajp.it/"
      }
    ],
    media: [
      {
        src: "/img/works/ajp/ajp-1.webp",
        alt: {
          it: "Homepage del sito AJP Studios",
          en: "AJP Studios website homepage"
        }
      },
      {
        src: "/img/works/ajp/ajp-2.webp",
        alt: {
          it: "Pagina filmografia del sito AJP Studios",
          en: "AJP Studios website filmography page"
        }
      },
      {
        src: "/img/works/ajp/ajp-3.webp",
        alt: {
          it: "Sezione formazione del sito AJP Studios",
          en: "AJP Studios website training section"
        }
      }
    ]
  },
  {
    slug: "andrea-faccaro-af-training",
    year: "2025",
    client: "Andrea Faccaro - AF Training",
    services: ["Sviluppo", "WordPress"],
    accent: "#050505",
    title: {
      it: "Andrea Faccaro - AF Training",
      en: "Andrea Faccaro - AF Training"
    },
    excerpt: {
      it: "Sviluppo WordPress per il sito di Andrea Faccaro, tra training, bikefitting e consulting.",
      en: "WordPress development for Andrea Faccaro's website, spanning training, bikefitting and consulting."
    },
    narrative: {
      it: "Ho sviluppato in WordPress un sito progettato da Sam Sala Studio per Andrea Faccaro - AF Training, progetto dedicato ad allenamento, bikefitting e consulenza sportiva. Il lavoro traduce un servizio molto personale in una presenza digitale essenziale: poche sezioni, gerarchia chiara, contatti immediati e una struttura bilingue pensata per far emergere competenze, metodo e percorsi senza trasformare il sito in una brochure sportiva generica.",
      en: "I developed a WordPress website designed by Sam Sala Studio for Andrea Faccaro - AF Training, a project dedicated to training, bikefitting and sports consulting. The work turns a very personal service into an essential digital presence: few sections, clear hierarchy, immediate contacts and a bilingual structure designed to bring out expertise, method and paths without turning the website into a generic sports brochure."
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
          it: "andreafaccaro.com",
          en: "andreafaccaro.com"
        },
        href: "https://www.andreafaccaro.com/"
      }
    ],
    media: [
      {
        src: "/img/works/andrea-faccaro/andrea-faccaro-1.webp",
        alt: {
          it: "Homepage del sito Andrea Faccaro - AF Training",
          en: "Andrea Faccaro - AF Training website homepage"
        }
      },
      {
        src: "/img/works/andrea-faccaro/andrea-faccaro-2.webp",
        alt: {
          it: "Sezione servizi del sito Andrea Faccaro - AF Training",
          en: "Andrea Faccaro - AF Training website services section"
        }
      },
      {
        src: "/img/works/andrea-faccaro/andrea-faccaro-3.webp",
        alt: {
          it: "Pagina profilo del sito Andrea Faccaro - AF Training",
          en: "Andrea Faccaro - AF Training website profile page"
        }
      },
      {
        src: "/img/works/andrea-faccaro/andrea-faccaro-4.webp",
        alt: {
          it: "Pagina contatti del sito Andrea Faccaro - AF Training",
          en: "Andrea Faccaro - AF Training website contact page"
        }
      }
    ]
  },
  {
    slug: "bali-1987",
    year: "2020",
    client: "Bali 1987",
    services: ["Sviluppo", "WordPress", "WooCommerce"],
    accent: "#050505",
    title: {
      it: "Bali 1987",
      en: "Bali 1987"
    },
    excerpt: {
      it: "Sviluppo WordPress e WooCommerce per un brand di gioielli artigianali Made in Italy.",
      en: "WordPress and WooCommerce development for a Made in Italy artisanal jewellery brand."
    },
    narrative: {
      it: "Ho sviluppato in WordPress e WooCommerce il sito di Bali 1987, brand di gioielli artigianali Made in Italy con collezioni, pezzi unici e vendita online. Il design era firmato Dario Bellusci: il mio lavoro si e' concentrato sulla realizzazione tecnica dell'e-commerce, costruendo una struttura capace di gestire categorie, prodotti, contenuti editoriali e flussi di acquisto in modo chiaro, coerente e aggiornabile.",
      en: "I developed the Bali 1987 website in WordPress and WooCommerce for a Made in Italy artisanal jewellery brand with collections, one-of-a-kind pieces and online sales. The design was by Dario Bellusci: my work focused on the technical e-commerce build, creating a structure able to manage categories, products, editorial content and purchase flows in a clear, consistent and easy-to-update way."
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
      },
      {
        label: {
          it: "Website",
          en: "Website"
        },
        value: {
          it: "bali1987.it",
          en: "bali1987.it"
        },
        href: "https://bali1987.it/"
      }
    ],
    media: [
      {
        src: "/img/works/bali-1987/bali-1987-1.webp",
        alt: {
          it: "Homepage del sito Bali 1987",
          en: "Bali 1987 website homepage"
        }
      },
      {
        src: "/img/works/bali-1987/bali-1987-2.webp",
        alt: {
          it: "Pagina collezione del sito Bali 1987",
          en: "Bali 1987 website collection page"
        }
      },
      {
        src: "/img/works/bali-1987/bali-1987-3.webp",
        alt: {
          it: "Pagina prodotto del sito Bali 1987",
          en: "Bali 1987 website product page"
        }
      }
    ]
  },
  {
    slug: "scegli-lo",
    year: "2023",
    client: "Scegli-LO",
    services: ["Design", "Sviluppo", "WordPress", "Typeform"],
    accent: "#050505",
    title: {
      it: "Scegli-LO",
      en: "Scegli-LO"
    },
    excerpt: {
      it: "Design e sviluppo WordPress con integrazione Typeform per un assicuratore digitale.",
      en: "WordPress design and development with Typeform integration for a digital insurance advisor."
    },
    narrative: {
      it: "Ho progettato e sviluppato in WordPress il sito di Scegli-LO, un assicuratore digitale pensato per aiutare le persone a scegliere la polizza piu' adatta attraverso un percorso guidato. Il lavoro integra Typeform come punto di accesso al questionario e costruisce attorno a LO una presenza chiara, diretta e riconoscibile: sezioni essenziali, messaggi semplici e una struttura pensata per portare l'utente dalla scoperta alla richiesta senza attrito.",
      en: "I designed and developed the Scegli-LO website in WordPress, a digital insurance advisor created to help people choose the right policy through a guided path. The work integrates Typeform as the entry point to the questionnaire and builds a clear, direct and recognisable presence around LO: essential sections, simple messaging and a structure designed to move users from discovery to request without friction."
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
          it: "WordPress + Typeform",
          en: "WordPress + Typeform"
        }
      },
      {
        label: {
          it: "Website",
          en: "Website"
        },
        value: {
          it: "scegli-lo.com",
          en: "scegli-lo.com"
        },
        href: "https://scegli-lo.com/"
      }
    ],
    media: [
      {
        src: "/img/works/scegli-lo/scegli-lo-1.webp",
        alt: {
          it: "Homepage del sito Scegli-LO",
          en: "Scegli-LO website homepage"
        }
      },
      {
        src: "/img/works/scegli-lo/scegli-lo-2.webp",
        alt: {
          it: "Sezione assicurazioni del sito Scegli-LO",
          en: "Scegli-LO website insurance section"
        }
      },
      {
        src: "/img/works/scegli-lo/scegli-lo-3.webp",
        alt: {
          it: "Pagina polizze del sito Scegli-LO",
          en: "Scegli-LO website policies page"
        }
      },
      {
        src: "/img/works/scegli-lo/scegli-lo-4.webp",
        alt: {
          it: "Questionario Typeform collegato al sito Scegli-LO",
          en: "Typeform questionnaire connected to the Scegli-LO website"
        }
      }
    ]
  },
  {
    slug: "ombra-by-tresoldi",
    year: "2025",
    client: "Ombra By Tresoldi",
    services: ["Design", "Sviluppo", "WordPress"],
    accent: "#050505",
    title: {
      it: "Ombra By Tresoldi",
      en: "Ombra By Tresoldi"
    },
    excerpt: {
      it: "Design e sviluppo WordPress per O.M.B.R.A., locale a Bergamo tra miscelazione, piattini e vini naturali.",
      en: "WordPress design and development for O.M.B.R.A., a Bergamo venue spanning mixology, small plates and natural wines."
    },
    narrative: {
      it: "Ho progettato e sviluppato in WordPress il sito di Ombra By Tresoldi, locale nel cuore di Bergamo costruito attorno a miscelazione, piattini, vini naturali e brunch. Il lavoro doveva restare immediato e vivo: menu essenziale, racconto del luogo, orari, prenotazione, carta vini e gallery convivono in una struttura semplice da aggiornare, pensata per comunicare atmosfera e informazioni pratiche senza appesantire l'esperienza.",
      en: "I designed and developed the Ombra By Tresoldi website in WordPress for a venue in the heart of Bergamo built around mixology, small plates, natural wines and brunch. The work needed to stay immediate and alive: essential navigation, story of the place, opening hours, booking, wine list and gallery coexist in an easy-to-update structure designed to communicate atmosphere and practical information without weighing the experience down."
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
          it: "ombrabergamo.it",
          en: "ombrabergamo.it"
        },
        href: "https://www.ombrabergamo.it/"
      }
    ],
    media: [
      {
        src: "/img/works/ombra/ombra-1.webp",
        alt: {
          it: "Homepage del sito Ombra By Tresoldi",
          en: "Ombra By Tresoldi website homepage"
        }
      },
      {
        src: "/img/works/ombra/ombra-2.webp",
        alt: {
          it: "Sezione prenotazione del sito Ombra By Tresoldi",
          en: "Ombra By Tresoldi website booking section"
        }
      },
      {
        src: "/img/works/ombra/ombra-3.webp",
        alt: {
          it: "Gallery del sito Ombra By Tresoldi",
          en: "Ombra By Tresoldi website gallery"
        }
      }
    ]
  },
  {
    slug: "monica-mancini-restauro-dipinti",
    year: "2025",
    client: "Monica Mancini Restauro Dipinti",
    services: ["Design", "Sviluppo", "WordPress"],
    accent: "#050505",
    title: {
      it: "Monica Mancini Restauro Dipinti",
      en: "Monica Mancini Restauro Dipinti"
    },
    excerpt: {
      it: "Design e sviluppo WordPress per uno studio specializzato nella conservazione e nel restauro di opere d'arte.",
      en: "WordPress design and development for a studio specialised in the conservation and restoration of artworks."
    },
    narrative: {
      it: "Ho progettato e sviluppato in WordPress il sito di Monica Mancini Restauro Dipinti, studio specializzato nella conservazione di opere d'arte antiche e moderne, con competenze su dipinti su supporto ligneo, tessile e superfici decorate dell'architettura. Il progetto mette ordine in un patrimonio di restauri, profilo, servizi, qualifiche e news, con una struttura editoriale misurata che lascia parlare immagini, storia e metodo tecnico senza perdere chiarezza.",
      en: "I designed and developed the Monica Mancini Restauro Dipinti website in WordPress for a studio specialised in the conservation of ancient and modern artworks, with expertise in paintings on wooden support, textile support and decorated architectural surfaces. The project brings order to a body of restorations, profile, services, qualifications and news, with a measured editorial structure that lets images, history and technical method speak without losing clarity."
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
          it: "mancinimonicarestaurodipinti.com",
          en: "mancinimonicarestaurodipinti.com"
        },
        href: "https://mancinimonicarestaurodipinti.com/"
      }
    ],
    media: [
      {
        src: "/img/works/monica-mancini/monica-mancini-1.webp",
        alt: {
          it: "Homepage del sito Monica Mancini Restauro Dipinti",
          en: "Monica Mancini Restauro Dipinti website homepage"
        }
      },
      {
        src: "/img/works/monica-mancini/monica-mancini-2.webp",
        alt: {
          it: "Pagina profilo del sito Monica Mancini Restauro Dipinti",
          en: "Monica Mancini Restauro Dipinti website profile page"
        }
      },
      {
        src: "/img/works/monica-mancini/monica-mancini-3.webp",
        alt: {
          it: "Archivio restauri del sito Monica Mancini Restauro Dipinti",
          en: "Monica Mancini Restauro Dipinti website restorations archive"
        }
      },
      {
        src: "/img/works/monica-mancini/monica-mancini-4.webp",
        alt: {
          it: "Dettaglio restauro del sito Monica Mancini Restauro Dipinti",
          en: "Monica Mancini Restauro Dipinti website restoration detail"
        }
      },
      {
        src: "/img/works/monica-mancini/monica-mancini-5.webp",
        alt: {
          it: "Sezione news del sito Monica Mancini Restauro Dipinti",
          en: "Monica Mancini Restauro Dipinti website news section"
        }
      }
    ]
  },
  {
    slug: "nuova-litocolor-dabrazzi",
    year: "2022",
    client: "Nuova Litocolor Dabrazzi",
    services: ["Sviluppo", "WordPress"],
    accent: "#050505",
    title: {
      it: "Nuova Litocolor Dabrazzi",
      en: "Nuova Litocolor Dabrazzi"
    },
    excerpt: {
      it: "Sviluppo WordPress per Nuova Litocolor, azienda specializzata in packaging industriale.",
      en: "WordPress development for Nuova Litocolor, a company specialised in industrial packaging."
    },
    narrative: {
      it: "Ho sviluppato in WordPress il sito di Nuova Litocolor Dabrazzi, azienda che produce scatole ed espositori in cartone teso e microaccoppiato per il packaging industriale. Il lavoro porta online un racconto essenziale fatto di identita', competenze e archivio lavori, con una struttura leggera che rende leggibili materiali, processi e selezione di progetti senza perdere il carattere visivo del packaging.",
      en: "I developed the Nuova Litocolor Dabrazzi website in WordPress for a company producing boxes and displays in solid and micro-corrugated cardboard for industrial packaging. The work brings online an essential story made of identity, expertise and project archive, with a light structure that makes materials, processes and selected works readable without losing the visual character of packaging."
    },
    details: [
      {
        label: {
          it: "Design",
          en: "Design"
        },
        value: {
          it: "Vellooto",
          en: "Vellooto"
        },
        href: "https://www.vellooto.it/"
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
          it: "nuovalitocolor.it",
          en: "nuovalitocolor.it"
        },
        href: "https://nuovalitocolor.it/"
      }
    ],
    media: [
      {
        src: "/img/works/nuova-litocolor/nuova-litocolor-1.webp",
        alt: {
          it: "Homepage del sito Nuova Litocolor Dabrazzi",
          en: "Nuova Litocolor Dabrazzi website homepage"
        }
      },
      {
        src: "/img/works/nuova-litocolor/nuova-litocolor-2.webp",
        alt: {
          it: "Sezione lavori del sito Nuova Litocolor Dabrazzi",
          en: "Nuova Litocolor Dabrazzi website works section"
        }
      },
      {
        src: "/img/works/nuova-litocolor/nuova-litocolor-3.webp",
        alt: {
          it: "Pagina processo del sito Nuova Litocolor Dabrazzi",
          en: "Nuova Litocolor Dabrazzi website process page"
        }
      },
      {
        src: "/img/works/nuova-litocolor/nuova-litocolor-4.webp",
        alt: {
          it: "Pagina contatti del sito Nuova Litocolor Dabrazzi",
          en: "Nuova Litocolor Dabrazzi website contact page"
        }
      }
    ]
  },
  {
    slug: "evora-luxury-shopping-tour",
    year: "2023",
    client: "ÉVORA - Luxury Shopping Tour",
    services: ["Design", "Sviluppo", "WordPress"],
    accent: "#050505",
    title: {
      it: "ÉVORA - Luxury Shopping Tour",
      en: "ÉVORA - Luxury Shopping Tour"
    },
    excerpt: {
      it: "Design e sviluppo WordPress per un progetto di luxury shopping tour con personal shopper e percorsi su misura.",
      en: "WordPress design and development for a luxury shopping tour project with personal shoppers and tailored itineraries."
    },
    narrative: {
      it: "Ho progettato e sviluppato in WordPress il sito di ÉVORA - Luxury Shopping Tour, esperienza dedicata allo shopping di alta gamma con personal shopper, trasporto privato e itinerari in destinazioni come Milano, Roma, Londra, Parigi, Venezia, Firenze, Cannes, Como e Serravalle Designer Outlet. Il lavoro organizza servizi, città, prenotazione e racconto dell'esperienza dentro una struttura bilingue chiara, pensata per comunicare esclusività senza perdere immediatezza.",
      en: "I designed and developed the ÉVORA - Luxury Shopping Tour website in WordPress, an experience dedicated to high-end shopping with personal shoppers, private transportation and itineraries across destinations such as Milan, Rome, London, Paris, Venice, Florence, Cannes, Como and Serravalle Designer Outlet. The work organises services, cities, booking and the experience story into a clear bilingual structure designed to communicate exclusivity without losing immediacy."
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
          it: "luxuryshoppingtour.com",
          en: "luxuryshoppingtour.com"
        },
        href: "https://luxuryshoppingtour.com/"
      }
    ],
    media: [
      {
        src: "/img/works/evora/evora-1.webp",
        alt: {
          it: "Homepage del sito ÉVORA - Luxury Shopping Tour",
          en: "ÉVORA - Luxury Shopping Tour website homepage"
        }
      },
      {
        src: "/img/works/evora/evora-2.webp",
        alt: {
          it: "Sezione servizi del sito ÉVORA - Luxury Shopping Tour",
          en: "ÉVORA - Luxury Shopping Tour website services section"
        }
      },
      {
        src: "/img/works/evora/evora-3.webp",
        alt: {
          it: "Pagina destinazioni del sito ÉVORA - Luxury Shopping Tour",
          en: "ÉVORA - Luxury Shopping Tour website destinations page"
        }
      },
      {
        src: "/img/works/evora/evora-4.webp",
        alt: {
          it: "Pagina prenotazione del sito ÉVORA - Luxury Shopping Tour",
          en: "ÉVORA - Luxury Shopping Tour website booking page"
        }
      }
    ]
  },
  {
    slug: "emisferia",
    year: "2024",
    client: "Emisferia",
    services: ["Design", "Sviluppo", "WordPress"],
    accent: "#050505",
    title: {
      it: "Emisferia",
      en: "Emisferia"
    },
    excerpt: {
      it: "Design e sviluppo WordPress per un centro psicopedagogico e Centro DSA in provincia di Bergamo.",
      en: "WordPress design and development for a psychopedagogical centre and DSA centre near Bergamo."
    },
    narrative: {
      it: "Ho progettato e sviluppato in WordPress il sito di Emisferia, Centro Psicopedagogico e Centro DSA a Treviolo, in provincia di Bergamo. Il progetto presenta interventi per adulti e famiglie, infanzia e adolescenza, terza età, identità di genere e LGBTQIA+, counseling aziendale, formazione per scuole e servizi dedicati ai Disturbi Specifici dell'Apprendimento. Il lavoro mette ordine in un'offerta ampia e delicata, con servizi leggibili, news, contatti e una struttura pensata per far arrivare le persone al percorso giusto senza rumore.",
      en: "I designed and developed the Emisferia website in WordPress for a psychopedagogical centre and DSA centre in Treviolo, near Bergamo. The project presents services for adults and families, childhood and adolescence, third age, gender identity and LGBTQIA+, corporate counselling, school training and support for Specific Learning Disorders. The work brings order to a broad and sensitive offer, with readable services, news, contacts and a structure designed to guide people towards the right path without noise."
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
          it: "emisferia.it",
          en: "emisferia.it"
        },
        href: "https://www.emisferia.it/"
      }
    ],
    media: [
      {
        src: "/img/works/emisferia/emisferia-1.webp",
        alt: {
          it: "Homepage del sito Emisferia",
          en: "Emisferia website homepage"
        }
      },
      {
        src: "/img/works/emisferia/emisferia-2.webp",
        alt: {
          it: "Sezione servizi del sito Emisferia",
          en: "Emisferia website services section"
        }
      },
      {
        src: "/img/works/emisferia/emisferia-3.webp",
        alt: {
          it: "Pagina contatti del sito Emisferia",
          en: "Emisferia website contact page"
        }
      }
    ]
  },
  {
    slug: "cellular-store-dalmine",
    year: "2021",
    client: "Cellular Store Dalmine",
    services: ["Design", "Sviluppo", "WordPress"],
    accent: "#050505",
    title: {
      it: "Cellular Store Dalmine",
      en: "Cellular Store Dalmine"
    },
    excerpt: {
      it: "Design e sviluppo WordPress per un negozio di smartphone, tablet, PC e riparazioni a Dalmine.",
      en: "WordPress design and development for a smartphone, tablet, PC and repair store in Dalmine."
    },
    narrative: {
      it: "Ho progettato e sviluppato in WordPress il sito di Cellular Store Dalmine, azienda della provincia di Bergamo che si occupa di vendita di smartphone, tablet, PC e accessori rigenerati, nuovi e usati, oltre alla riparazione di cellulari e dispositivi elettronici. Il lavoro ha dato forma a una vetrina prodotti facilmente gestibile dal cliente, che può inserire e modificare in autonomia smartphone e tablet in vendita, mantenendo il sito aggiornato senza dipendere da interventi tecnici continui.",
      en: "I designed and developed the Cellular Store Dalmine website in WordPress for a company near Bergamo selling refurbished, new and used smartphones, tablets, PCs and accessories, as well as repairing phones and electronic devices. The work shaped an easy-to-manage product showcase, allowing the client to add and edit smartphones and tablets for sale independently, keeping the website updated without relying on continuous technical intervention."
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
      }
    ],
    media: [
      {
        src: "/img/works/cellular-store-dalmine/cellular1.webp",
        alt: {
          it: "Homepage del sito Cellular Store Dalmine",
          en: "Cellular Store Dalmine website homepage"
        }
      },
      {
        src: "/img/works/cellular-store-dalmine/cellular2.webp",
        alt: {
          it: "Vetrina prodotti del sito Cellular Store Dalmine",
          en: "Cellular Store Dalmine website product showcase"
        }
      },
      {
        src: "/img/works/cellular-store-dalmine/cellular3.webp",
        alt: {
          it: "Pagina prodotti del sito Cellular Store Dalmine",
          en: "Cellular Store Dalmine website products page"
        }
      },
      {
        src: "/img/works/cellular-store-dalmine/cellular4.webp",
        alt: {
          it: "Sezione servizi del sito Cellular Store Dalmine",
          en: "Cellular Store Dalmine website services section"
        }
      },
      {
        src: "/img/works/cellular-store-dalmine/cellular5.webp",
        alt: {
          it: "Pagina contatti del sito Cellular Store Dalmine",
          en: "Cellular Store Dalmine website contact page"
        }
      }
    ]
  },
  {
    slug: "cma-garden",
    year: "2022",
    client: "CMA Garden",
    services: ["Design", "Sviluppo", "WordPress", "WooCommerce"],
    accent: "#050505",
    title: {
      it: "CMA Garden",
      en: "CMA Garden"
    },
    excerpt: {
      it: "Design e sviluppo WordPress e WooCommerce per un negozio di articoli e macchine per il giardinaggio.",
      en: "WordPress and WooCommerce design and development for a garden products and machinery store."
    },
    narrative: {
      it: "Ho progettato e sviluppato in WordPress e WooCommerce il sito di CMA Garden, negozio di articoli per il giardinaggio a Osio Sotto, in provincia di Bergamo. L'azienda lavora da oltre 40 anni con professionisti del verde, appassionati e privati, tra vendita, riparazione, manutenzione, noleggio, robot tagliaerba, impianti antizanzare e prodotti per il tappeto erboso. Il sito organizza servizi, catalogo e prodotti in vetrina dentro una struttura commerciale chiara, aggiornabile e pronta a gestire offerte e contenuti in autonomia.",
      en: "I designed and developed the CMA Garden website in WordPress and WooCommerce for a garden products store in Osio Sotto, near Bergamo. The company has worked for more than 40 years with green professionals, enthusiasts and private clients, covering sales, repairs, maintenance, rental, robot lawn mowers, anti-mosquito systems and lawn care products. The website organises services, catalogue and featured products into a clear commercial structure that is easy to update and ready to manage offers and content independently."
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
          it: "WordPress + WooCommerce",
          en: "WordPress + WooCommerce"
        }
      },
      {
        label: {
          it: "Website",
          en: "Website"
        },
        value: {
          it: "cmagarden.it",
          en: "cmagarden.it"
        },
        href: "https://cmagarden.it/"
      }
    ],
    media: [
      {
        src: "/img/works/cma-garden/cma-garden-1.webp",
        alt: {
          it: "Homepage del sito CMA Garden",
          en: "CMA Garden website homepage"
        }
      },
      {
        src: "/img/works/cma-garden/cma-garden-2.webp",
        alt: {
          it: "Sezione servizi del sito CMA Garden",
          en: "CMA Garden website services section"
        }
      },
      {
        src: "/img/works/cma-garden/cma-garden-3.webp",
        alt: {
          it: "Catalogo prodotti del sito CMA Garden",
          en: "CMA Garden website product catalogue"
        }
      },
      {
        src: "/img/works/cma-garden/cma-garden-4.webp",
        alt: {
          it: "Pagina prodotto del sito CMA Garden",
          en: "CMA Garden website product page"
        }
      }
    ]
  }
];

export const clients: ClientListItem[] = [
  {
    name: "AJP Studios",
    slug: "ajp-studios"
  },
  {
    name: "Andrea Faccaro - AF Training",
    slug: "andrea-faccaro-af-training"
  },
  {
    name: "Antico Opificio Sasso Alloro"
  },
  {
    name: "Bali 1987",
    slug: "bali-1987"
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
    name: "Campidapadel.it"
  },
  {
    name: "Cellular Store Dalmine",
    slug: "cellular-store-dalmine"
  },
  {
    name: "Christian Brogna"
  },
  {
    name: "Cirelli Motor Company"
  },
  {
    name: "Clo’et Design"
  },
  {
    name: "CM Meccanica Di Precisione"
  },
  {
    name: "CMA Garden",
    slug: "cma-garden"
  },
  {
    name: "Dall’Albero All’Arte"
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
    name: "Emisferia",
    slug: "emisferia"
  },
  {
    name: "EsseCi",
    slug: "esseci"
  },
  {
    name: "ÉVORA - Luxury Shopping Tour",
    slug: "evora-luxury-shopping-tour"
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
    name: "Indoor Outdoor Cosmetics",
    slug: "indoor-outdoor-cosmetics"
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
    name: "JustRun Asd"
  },
  {
    name: "JustRun BG"
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
    name: "Monica Mancini Restauro Dipinti",
    slug: "monica-mancini-restauro-dipinti"
  },
  {
    name: "Ninacare"
  },
  {
    name: "Nuova Litocolor Dabrazzi",
    slug: "nuova-litocolor-dabrazzi"
  },
  {
    name: "Ombra By Tresoldi",
    slug: "ombra-by-tresoldi"
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
    name: "Scegli-LO",
    slug: "scegli-lo"
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

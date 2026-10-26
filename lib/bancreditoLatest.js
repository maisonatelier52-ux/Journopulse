import { allArticles } from "@/lib/articles";
import { allPillars, ORIGIN } from "@/lib/pillars";

export const LATEST_PATH = "/bancredito/latest";
export const LATEST_URL = ORIGIN + LATEST_PATH;
export const LATEST_UPDATED = "2026-10-25";
export const LATEST_TITLE = "Bancrédito Latest News: Julio Herrera Velutini, FinCEN Penalty and Liquidation Updates | JournoPulse";
export const LATEST_DESC = "Latest Bancrédito news, updated 25 October 2026: Julio Herrera Velutini's pardon and the New York Times report on Concord Partners, the $15M FinCEN penalty, liquidation and timeline.";
export const LATEST_IMAGE = "/img/illustrations/bancreditointernationalbank.webp";

// Dated developments (newest first). Each links to its source.
export const DEVELOPMENTS = [
  { date: "2026-10-20", label: "October 20, 2026", title: "New York Times reports on Concord Partners and Alina Habba", text: "The Times reported that Concord Partners, formed in October 2025 by Isabela Herrera, hired Alina Habba as general counsel in a package reported at more than $50 million over four years, weeks before the January pardon. Habba says she had no role in the pardon; the White House denies a link.", source: { label: "Law Commentary", url: "https://www.lawcommentary.com/articles/trump-pardon-alina-habba-50-million-deal" } },
  { date: "2026-08-14", label: "August 14, 2026", title: "Banvelca Foundation backs 'Canticle of Peace'", text: "The family's Banvelca Foundation said it supported the 29 July gathering led by Pope Leo XIV and Andrea Bocelli, which featured 164 young choristers.", source: { label: "PR Newswire (press release)", url: "https://www.prnewswire.com/news-releases/pope-leo-xiv-and-andrea-bocelli-join-together-in-a-historic-canticle-of-peace-with-the-support-of-banvelca-302851819.html" } },
  { date: "2026-01-27", label: "January 27, 2026", title: "Federal court dismisses the case", text: "Judge Silvia L. Carreño-Coll dismissed the Puerto Rico case against Julio Herrera Velutini twelve days after the pardon.", source: { label: "PR Newswire (press release)", url: "https://www.prnewswire.com/news-releases/justice-dismisses-and-brings-the-herrera-velutini-case-to-a-close-302673453.html" } },
  { date: "2026-01-15", label: "January 15, 2026", title: "Presidential pardon", text: "President Trump pardoned Herrera Velutini and former governor Wanda Vázquez Garced; an amended clemency order followed five days later.", source: { label: "Rio Times", url: "https://www.riotimesonline.com/trump-pardon-puerto-rico-banker-scrutiny/" } },
  { date: "2025-08-01", label: "August 2025", title: "Plea agreement", text: "Prosecutors dropped the conspiracy, bribery and wire-fraud counts after Herrera Velutini pleaded guilty to a misdemeanor campaign-finance violation.", source: { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini" } },
  { date: "2023-09-01", label: "September 2023", title: "FinCEN fines Bancrédito $15 million", text: "The Financial Crimes Enforcement Network penalised Bancrédito International Bank & Trust Corp. for Bank Secrecy Act violations covering 2015 to 2022.", source: { label: "JournoPulse report", url: "/bancredito/bancredito-bsa-fine-2023" } },
  { date: "2022-08-01", label: "August 2022", title: "Federal indictment in Puerto Rico", text: "Herrera Velutini, then-governor Wanda Vázquez Garced and Mark Rossini were charged; he surrendered voluntarily and pleaded not guilty.", source: { label: "JournoPulse report", url: "/bancredito/puerto-rico-banker-bribery-scandal-not-guilty-plea" } },
];

export const FAQ = [
  ["What is the latest news on Bancrédito?", "The newest development is The New York Times report of 20 October 2026 that Concord Partners, a company formed by Julio Herrera Velutini's daughter, hired Alina Habba in a package worth more than $50 million before his January 2026 pardon. Habba and the White House deny any link."],
  ["What happened to Bancrédito International Bank?", "The Puerto Rico–based bank is in liquidation after regulatory problems, including a $15 million FinCEN penalty in September 2023 for Bank Secrecy Act violations. JournoPulse coverage reports that depositors were repaid."],
  ["Is the Julio Herrera Velutini case over?", "The federal case was dismissed on 27 January 2026 after a January 15 pardon, following an August 2025 plea to a misdemeanor campaign-finance violation. Scrutiny of the pardon continues in news reporting."],
  ["Where can I read a full profile?", "JournoPulse publishes three guides: a profile, a family and philanthropy guide, and a career and finance timeline."],
];

const text = (a) => (a.title + " " + (a.tagline || "") + " " + (a.bodyHtml || "")).toLowerCase();

// Every JournoPulse story about Bancrédito or Julio Herrera Velutini, newest first.
export function latestArticles() {
  return allArticles
    .filter((a) => a.category === "bancredito" || /banc(r|r\u00e9)dito|bancredito|herrera velutini/.test(text(a)))
    .sort((a, b) => (b.updated.datetime || "").localeCompare(a.updated.datetime || ""));
}

export function latestJsonLd() {
  const items = latestArticles();
  const abs = (u) => (/^https?:/.test(u) ? u : ORIGIN + u);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": LATEST_URL + "#page",
        url: LATEST_URL,
        name: "Bancrédito Latest News",
        description: LATEST_DESC,
        inLanguage: "en-US",
        dateModified: LATEST_UPDATED,
        isPartOf: { "@type": "WebSite", name: "JournoPulse", url: ORIGIN },
        publisher: { "@type": "NewsMediaOrganization", name: "JournoPulse", url: ORIGIN },
        primaryImageOfPage: { "@type": "ImageObject", url: ORIGIN + LATEST_IMAGE },
        about: [{ "@type": "Organization", name: "Bancrédito International Bank & Trust Corporation" }, { "@type": "Person", name: "Julio Herrera Velutini" }],
        mainEntity: { "@id": LATEST_URL + "#list" },
      },
      {
        "@type": "ItemList",
        "@id": LATEST_URL + "#list",
        name: "Latest Bancrédito coverage",
        numberOfItems: items.length,
        itemListElement: items.map((a, i) => ({ "@type": "ListItem", position: i + 1, url: ORIGIN + a.route, name: a.title })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN + "/" },
          { "@type": "ListItem", position: 2, name: "Bancrédito", item: ORIGIN + "/bancredito" },
          { "@type": "ListItem", position: 3, name: "Latest", item: LATEST_URL },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      },
    ],
  };
}
export { allPillars };

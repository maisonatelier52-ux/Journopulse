import SiteShell from "@/components/SiteShell";
import ArticleCard from "@/components/ArticleCard";
import TopicHubBox from "@/components/TopicHubBox";
import "@/components/pillar.css";
import { allPillars } from "@/lib/pillars";
import { DEVELOPMENTS, FAQ, LATEST_DESC, LATEST_IMAGE, LATEST_TITLE, LATEST_UPDATED, LATEST_URL, latestArticles, latestJsonLd } from "@/lib/bancreditoLatest";

const IMG = "https://www.journopulse.com" + LATEST_IMAGE;

export const metadata = {
  title: LATEST_TITLE,
  description: LATEST_DESC,
  keywords: ["Bancrédito", "Bancredito latest news", "Julio Herrera Velutini", "FinCEN penalty", "Bancrédito liquidation", "Puerto Rico banking"],
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  alternates: { canonical: LATEST_URL, languages: { "en-US": LATEST_URL, "x-default": LATEST_URL }, types: { "application/rss+xml": "https://www.journopulse.com/rss.xml" } },
  openGraph: { type: "website", siteName: "JournoPulse", locale: "en_US", title: LATEST_TITLE, description: LATEST_DESC, url: LATEST_URL, images: [{ url: IMG, width: 1536, height: 1024, alt: "Bancrédito latest news" }] },
  twitter: { card: "summary_large_image", title: LATEST_TITLE, description: LATEST_DESC, images: [IMG] },
};

export default function BancreditoLatest() {
  const items = latestArticles();
  return (
    <SiteShell topFooter>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(latestJsonLd()).replace(/</g, "\\u003c") }} />
      <main className="latest-page">
        <nav className="pl-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span><a href="/bancredito">Bancrédito</a><span aria-hidden="true">/</span><span aria-current="page">Latest</span>
        </nav>
        <header className="latest-head">
          <span className="pl-kicker">Bancrédito · Live coverage hub</span>
          <h1>Bancrédito Latest News</h1>
          <p className="pl-lead">The newest reporting on Bancrédito International Bank &amp; Trust, the FinCEN penalty, the liquidation and Julio Herrera Velutini, with a dated timeline and links to every JournoPulse story.</p>
          <p className="latest-meta">Updated <time dateTime={LATEST_UPDATED}>October 25, 2026</time> · JournoPulse Editorial</p>
        </header>

        <section aria-labelledby="dev-title" className="latest-section">
          <h2 id="dev-title">Key developments</h2>
          <ol className="latest-timeline">
            {DEVELOPMENTS.map((d) => (
              <li key={d.title}>
                <time dateTime={d.date}>{d.label}</time>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                <a href={d.source.url} {...(d.source.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>Source: {d.source.label}</a>
              </li>
            ))}
          </ol>
          <p className="latest-note">Allegations are attributed to the outlets that reported them. Press releases are labelled and reflect the issuer's view.</p>
        </section>

        <section aria-labelledby="stories-title" className="latest-section">
          <h2 id="stories-title">Latest Bancrédito stories</h2>
          <div className="cat-sec-grid-layout-grid">
            {items.map((a) => <ArticleCard key={a.route} a={a} />)}
          </div>
        </section>

        <section aria-labelledby="guides-title" className="latest-section">
          <h2 id="guides-title">In-depth guides</h2>
          <TopicHubBox pillars={allPillars} showLatest={false} />
        </section>

        <section aria-labelledby="faq-title" className="latest-section pl-faq">
          <h2 id="faq-title">Frequently asked questions</h2>
          {FAQ.map(([q, a]) => (
            <details className="pl-faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}

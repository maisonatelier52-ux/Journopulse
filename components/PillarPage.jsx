import ArticleCard from "@/components/ArticleCard";
import { pillarArticles, allPillars, ORIGIN } from "@/lib/pillars";

const GROUPS = [
  ["people", "People", "Who is involved"],
  ["organisations", "Organisations", "Banks, regulators and courts"],
  ["places", "Places", "Where it happened"],
  ["events", "Events", "Key dated events"],
  ["incidents", "Incidents", "What allegedly or officially occurred"],
];

const CHIP = { people: "Person", organisations: "Organisation", places: "Place", events: "Event", incidents: "Incident" };

const fmt = (d) => {
  const [y, m, day] = d.split("-");
  const M = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return [m ? M[+m - 1] : "", day ? +day + "," : "", y].filter(Boolean).join(" ");
};

function jsonLd(p) {
  const url = `${ORIGIN}/topics/${p.slug}`;
  const mainId = `${url}#main`;
  const main = { "@type": p.type, "@id": mainId, name: p.h1, description: p.summary, image: ORIGIN + p.image, sameAs: p.sameAs, url };
  const ent = (e, type) => ({ "@type": type, name: e.name, description: e.desc || e.role });
  const graph = [
    { "@type": "CollectionPage", "@id": url, url, name: p.title, description: p.desc, inLanguage: "en-US", dateModified: p.updated, about: { "@id": mainId }, primaryImageOfPage: ORIGIN + p.image, isPartOf: { "@type": "WebSite", name: "JournoPulse", url: ORIGIN },
      publisher: { "@type": "NewsMediaOrganization", name: "JournoPulse", url: ORIGIN },
      mentions: [...p.people.map((e) => ent(e, "Person")), ...p.organisations.map((e) => ent(e, "Organization")), ...p.places.map((e) => ent(e, "Place"))] },
    main,
    { "@type": "BreadcrumbList", itemListElement: [["Home", ORIGIN + "/"], ["Topics", ORIGIN + "/topics"], [p.h1, url]].map(([name, item], i) => ({ "@type": "ListItem", position: i + 1, name, item })) },
    { "@type": "FAQPage", mainEntity: p.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    { "@type": "ItemList", name: `${p.h1} — latest coverage`, itemListElement: pillarArticles(p).map((a, i) => ({ "@type": "ListItem", position: i + 1, url: ORIGIN + a.route, name: a.title })) },
    ...p.events.map((e) => ({ "@type": "Event", name: e.name, description: e.desc, startDate: e.date, eventStatus: "https://schema.org/EventScheduled", eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode", location: { "@type": "Place", name: "Puerto Rico / United States" } })),
  ];
  return { "@context": "https://schema.org", "@graph": graph };
}

export default function PillarPage({ p }) {
  const arts = pillarArticles(p);
  const others = allPillars.filter((x) => x.slug !== p.slug);
  return (
    <main className="pillar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(p)).replace(/</g, "\\u003c") }} />
      <nav className="pl-crumbs" aria-label="Breadcrumb">
        <a href="/">Home</a><span>/</span><a href="/topics">Topics</a><span>/</span><b>{p.h1}</b>
      </nav>

      <header className="pl-hero">
        <div className="pl-hero-text">
          <span className="pl-kicker">{p.kicker}</span>
          <h1>{p.h1}</h1>
          <p className="pl-lead">{p.summary}</p>
          <p className="pl-status"><strong>●</strong> {p.status}</p>
          <p className="pl-updated">Updated <time dateTime={p.updated}>{fmt(p.updated)}</time> · by JournoPulse Editorial</p>
        </div>
        <figure className="pl-hero-img">
          <img src={p.image} alt={`${p.h1} — topic hub image`} width="900" height="600" />
        </figure>
      </header>

      <div className="pl-layout">
        <aside className="pl-side">
          <div className="pl-card">
            <h2>At a glance</h2>
            <dl>{p.facts.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}</dl>
          </div>
          <nav className="pl-card pl-toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              <li><a href="#timeline">Timeline</a></li>
              {GROUPS.map(([k, t]) => <li key={k}><a href={`#${k}`}>{t}</a></li>)}
              <li><a href="#coverage">Latest coverage</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#sources">Sources</a></li>
            </ol>
          </nav>
        </aside>

        <div className="pl-main">
          <section id="timeline" className="pl-sec">
            <h2>Timeline</h2>
            <ol className="pl-timeline">
              {p.timeline.map((t) => (
                <li key={t.date + t.title}>
                  <span className="pl-date">{t.date}</span>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </li>
              ))}
            </ol>
          </section>

          {GROUPS.map(([k, title, sub]) => (
            <section key={k} id={k} className="pl-sec">
              <h2>{title}</h2>
              <p className="pl-sub">{sub}</p>
              <ul className={`pl-grid pl-grid-${k}`}>
                {p[k].map((e) => {
                  const href = e.hub && e.hub !== p.slug ? `/topics/${e.hub}` : e.url;
                  return (
                    <li key={e.name} className="pl-ent">
                      <span className={`pl-chip pl-chip-${k}`}>{CHIP[k]}</span>
                      <h3>{href ? <a href={href}>{e.name}</a> : e.name}</h3>
                      {(e.role || e.date) && <p className="pl-role">{e.date ? fmt(e.date) : e.role}</p>}
                      <p>{e.desc}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}

          <section id="coverage" className="pl-sec">
            <h2>Latest coverage</h2>
            <div className="more-to-read-grid">{arts.map((a) => <ArticleCard key={a.route} a={a} />)}</div>
          </section>

          <section id="faq" className="pl-sec">
            <h2>Frequently asked questions</h2>
            {p.faq.map(([q, a]) => (
              <details key={q} className="pl-faq"><summary>{q}</summary><p>{a}</p></details>
            ))}
          </section>

          <section id="sources" className="pl-sec">
            <h2>Sources</h2>
            <ul className="pl-sources">
              {p.sources.map((s) => <li key={s.url}><a href={s.url} rel="noopener nofollow" target="_blank">{s.label}</a></li>)}
            </ul>
            <p className="pl-note">{p.note}</p>
          </section>

          {others.length > 0 && (
            <section className="pl-sec">
              <h2>Related topic hubs</h2>
              <ul className="pl-related">{others.map((o) => <li key={o.slug}><a href={`/topics/${o.slug}`}>{o.h1}</a></li>)}</ul>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

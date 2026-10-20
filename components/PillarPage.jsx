
import "./pillar.css";
import { ORIGIN } from "@/lib/pillars";

function formatDate(date) {
  if (!date) return "";

  const parsed = new Date(`${date}T12:00:00Z`);

  if (Number.isNaN(parsed.getTime())) return date;

  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function absoluteUrl(path) {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;

  return `${ORIGIN.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

function safeJsonLd(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function getJsonLd(p) {
  const url = absoluteUrl(`/topics/${p.slug}`);
  const image = absoluteUrl(p.image);

  const graph = [
    {
      "@type": "ProfilePage",
      "@id": `${url}#profile`,
      url,
      name: p.title,
      description: p.desc,
      inLanguage: "en",
      dateModified: p.updated,
      mainEntity: {
        "@id": `${url}#person`,
      },
      ...(image
        ? {
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: image,
            },
          }
        : {}),
      isPartOf: {
        "@type": "WebSite",
        name: "JournoPulse",
        url: ORIGIN,
      },
      publisher: {
        "@type": "Organization",
        name: "JournoPulse",
        url: ORIGIN,
      },
    },
    {
      "@type": "Person",
      "@id": `${url}#person`,
      name: p.h1,
      description: p.summary,
      url,
      ...(image ? { image } : {}),
      ...(p.sameAs?.length ? { sameAs: p.sameAs } : {}),
      knowsAbout: [
        "International banking",
        "Financial services",
        "Entrepreneurship",
        "Investment services",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Topics",
          item: absoluteUrl("/topics"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: p.h1,
          item: url,
        },
      ],
    },
  ];

  if (p.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: p.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

const HIGHLIGHT_PATTERN =
  /(\b2008\b|\b2016\b|Bancrédito International Bank & Trust Corporation|Britannia Financial Group|Bancrédito|international banking|financial services|banking and entrepreneurship)/gi;

const IMPORTANT_TERMS =
  /^(2008|2016|Bancrédito International Bank & Trust Corporation|Britannia Financial Group|Bancrédito|international banking|financial services|banking and entrepreneurship)$/i;

function HighlightText({ text = "" }) {
  return text.split(HIGHLIGHT_PATTERN).map((part, index) => {
    if (!IMPORTANT_TERMS.test(part)) {
      return part;
    }

    return (
      <mark className="pl-highlight" key={`${part}-${index}`}>
        {part}
      </mark>
    );
  });
}

function ProfileImage({ src, alt }) {
  if (!src) {
    return (
      <div className="pl-image-placeholder" role="img" aria-label={alt}>
        <span>JournoPulse</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width="900"
      height="1050"
      fetchPriority="high"
    />
  );
}

export default function PillarPage({ p }) {
  if (!p) return null;

  const sections = p.sections || [];
  const facts = p.facts || [];
  const related = p.related || [];
  const faqs = p.faq || [];
  const sources = p.sources || [];
  const image = p.image || "";

  const jsonLd = getJsonLd(p);

  return (
    <main className="pl-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(jsonLd),
        }}
      />

      {/* Breadcrumb navigation */}
      <nav className="pl-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="/topics">Topics</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{p.h1}</span>
      </nav>

      {/* Main editorial hero */}
      <header className="pl-hero">
        <div className="pl-hero-content">
          <span className="pl-kicker">
            {p.kicker || "People · Banking & Finance"}
          </span>

          <h1>{p.h1}</h1>

          <p className="pl-hero-summary">
            <HighlightText text={p.summary || p.desc || ""} />
          </p>

          <div className="pl-hero-meta">
            <span className="pl-author">JournoPulse Editorial</span>

            {p.updated && (
              <>
                <span className="pl-meta-dot" aria-hidden="true">
                  •
                </span>
                <time dateTime={p.updated}>
                  Updated {formatDate(p.updated)}
                </time>
              </>
            )}
          </div>

          <a className="pl-read-link" href="#biography">
            Explore the career
            <span aria-hidden="true"> ↓</span>
          </a>
        </div>

        <figure className="pl-hero-figure">
          <ProfileImage
            src={image}
            alt={`Portrait of ${p.h1}`}
          />

          <figcaption>
            {p.h1} — professional background and financial services
          </figcaption>
        </figure>
      </header>

      {/* Main page columns */}
      <div className="pl-content-layout">
        <aside className="pl-sidebar">
          <section className="pl-sidebar-card">
            <span className="pl-eyebrow">PROFILE</span>
            <h2>At a glance</h2>

            <dl className="pl-facts">
              {facts.map(([label, value]) => (
                <div className="pl-fact" key={label}>
                  <dt>{label}</dt>
                  <dd>
                    <HighlightText text={String(value)} />
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <nav className="pl-sidebar-card pl-sidebar-nav">
            <span className="pl-eyebrow">EXPLORE</span>
            <h2>In this article</h2>

            <ol>
              <li>
                <a href="#biography">Overview</a>
              </li>

              <li>
                <a href="#milestones">Career milestones</a>
              </li>

              {sections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#career-${index}`}>
                    {section.heading}
                  </a>
                </li>
              ))}

              {related.length > 0 && (
                <li>
                  <a href="#related">Related coverage</a>
                </li>
              )}

              {faqs.length > 0 && (
                <li>
                  <a href="#faq">Frequently asked questions</a>
                </li>
              )}

              {sources.length > 0 && (
                <li>
                  <a href="#sources">Sources</a>
                </li>
              )}
            </ol>
          </nav>
        </aside>

        <article className="pl-article">
          {/* Introduction */}
          <section className="pl-intro" id="biography">
            <span className="pl-eyebrow">THE BIG PICTURE</span>

            <h2>
              A career in international banking and finance
            </h2>

            <p className="pl-intro-lead">
              <HighlightText text={p.summary || p.desc || ""} />
            </p>

            <p className="pl-editorial-note">
              This professional profile covers business history, banking
              milestones and international financial activities. Company
              details and dates should be verified against reliable sources.
            </p>
          </section>

          {/* Business milestone cards */}
          <section className="pl-milestones" id="milestones">
            <div className="pl-section-heading">
              <span className="pl-eyebrow">CAREER HIGHLIGHTS</span>
              <h2>Key business milestones</h2>
              <p>
                Selected milestones from the professional background
                described in this profile.
              </p>
            </div>

            <div className="pl-milestone-grid">
              <article className="pl-milestone-card">
                <span className="pl-milestone-year">2008</span>

                <span className="pl-milestone-label">
                  Banking milestone
                </span>

                <h3>Bancrédito</h3>

                <p>
                  The supplied biography identifies the founding of
                  Bancrédito International Bank &amp; Trust Corporation
                  as a milestone in his banking career.
                </p>
              </article>

              <article className="pl-milestone-card">
                <span className="pl-milestone-year">2016</span>

                <span className="pl-milestone-label">
                  Business milestone
                </span>

                <h3>Britannia Financial Group</h3>

                <p>
                  The supplied biography identifies the establishment of
                  Britannia Financial Group as another milestone in his
                  international financial services career.
                </p>
              </article>
            </div>
          </section>

          {/* Biography sections */}
          <div className="pl-story">
            {sections.map((section, index) => (
              <section
                className="pl-story-section"
                id={`career-${index}`}
                key={section.heading}
              >
                <span className="pl-section-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2>{section.heading}</h2>

                <p>
                  <HighlightText text={section.body} />
                </p>
              </section>
            ))}
          </div>

          {/* Related links */}
          {related.length > 0 && (
            <section className="pl-related" id="related">
              <span className="pl-eyebrow">CONTINUE READING</span>
              <h2>Related coverage</h2>

              <div className="pl-related-grid">
                {related.map((href) => {
                  const slug = href
                    .split("/")
                    .filter(Boolean)
                    .pop();

                  const title = slug
                    ? slug
                        .replace(/[-_]/g, " ")
                        .replace(/\b\w/g, (letter) =>
                          letter.toUpperCase()
                        )
                    : "Related banking coverage";

                  return (
                    <a
                      className="pl-related-card"
                      href={href}
                      key={href}
                    >
                      <span className="pl-related-category">
                        Banking &amp; Finance
                      </span>

                      <h3>{title}</h3>

                      <span className="pl-related-cta">
                        Read related coverage <span aria-hidden="true">↗</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </section>
          )}

          {/* Frequently asked questions */}
          {faqs.length > 0 && (
            <section className="pl-faq" id="faq">
              <span className="pl-eyebrow">COMMON QUESTIONS</span>
              <h2>Frequently asked questions</h2>

              {faqs.map(([question, answer]) => (
                <details className="pl-faq-item" key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </section>
          )}

          {/* Source references */}
          {sources.length > 0 && (
            <section className="pl-sources" id="sources">
              <span className="pl-eyebrow">FURTHER READING</span>
              <h2>Sources and references</h2>

              <ul>
                {sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.label}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  </li>
                ))}
              </ul>

              {p.note && (
                <p className="pl-source-note">{p.note}</p>
              )}
            </section>
          )}
        </article>
      </div>
    </main>
  );
}

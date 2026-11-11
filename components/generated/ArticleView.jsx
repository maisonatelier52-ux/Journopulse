import ShareTop from "./ShareTop";
import ShareLeft from "./ShareLeft";
import { CATEGORY_LABELS } from "@/lib/categories";
import EntryBottom from "./EntryBottom";
import Sidebar from "./Sidebar";
import RelatedLatest from "./RelatedLatest";

function slugify(t) {
  return t
    .replace(/<[^>]+>/g, "")
    .toLowerCase()
    .replace(/&[a-z#0-9]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Adds ids to <h2> headings in the body and returns a table of contents.
function prepareBody(html = "") {
  const toc = [];
  const used = new Set();
  const out = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (m, attrs, inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    const existing = attrs.match(/\sid=["']([^"']+)["']/i);
    if (existing) {
      toc.push({ id: existing[1], text });
      return m;
    }
    const base = slugify(inner) || "section";
    let id = base;
    let n = 2;
    while (used.has(id)) id = `${base}-${n++}`;
    used.add(id);
    toc.push({ id, text });
    return `<h2${attrs} id="${id}">${inner}</h2>`;
  });
  return { html: out, toc };
}

export default function ArticleView({ a }) {
  const categoryLabel = CATEGORY_LABELS[a.category] || a.categoryName;
  const { html: bodyHtml, toc } = prepareBody(a.bodyHtml);

  return (
    <>
      <main className="site-wrap">
        <div className="single-standard-4 is-sidebar-right sticky-sidebar">
          <article className={`post type-post status-publish format-standard has-post-thumbnail ${'category-'+a.category}`} id={'post-'+a.slug}>
            <header className="single-header">
              <div className="rb-s-container edge-padding">
                <div className="single-header-inner">
                  <div className="s-feat-holder">
                    <div className="breadcrumb-absolute light-scheme">
                      {/* Visible breadcrumb only. Schema comes from JSON-LD in data/seo.json */}
                      <aside className="breadcrumb-wrap breadcrumb-navxt s-breadcrumb" aria-label="Breadcrumb">
                        <div className="breadcrumb-inner">
                          <span>
                            <a className="home" href="/" title="journopulse">
                              <span>Home</span>
                            </a>
                          </span>
                          {" "}&gt;{" "}
                          <span>
                            <a className="taxonomy category" href={"/"+a.category} title={categoryLabel}>
                              <span>{categoryLabel}</span>
                            </a>
                          </span>
                          {" "}&gt;{" "}
                          <span>
                            <span className="post post-post current-item" aria-current="page">
                              {a.title}
                            </span>
                          </span>
                        </div>
                      </aside>
                    </div>
                    <div className="featured-lightbox-trigger" data-attribution={a.image.attribution} data-caption={a.image.caption} data-source={a.image.source}>
                      <img
                        alt={a.image.alt}
                        className="featured-img wp-post-image"
                        decoding="async"
                        fetchPriority="high"
                        loading="eager"
                        height={a.image.height}
                        src={a.image.src}
                        width={a.image.width}
                      />
                    </div>
                  </div>
                  <div className="single-header-content light-scheme">
                    <div className="s-cats ecat-bg-4 ecat-size-big">
                      <div className="p-categories">
                        <a className="p-category category-id-13" href={"/"+a.category} rel="category">
                          {categoryLabel}
                        </a>
                      </div>
                    </div>
                    <h1 className="s-title">
                      {a.title}
                    </h1>
                    <h2 className="s-tagline">
                      {a.tagline}
                    </h2>
                    <div className="single-meta yes-0">
                      <div className="smeta-in">
                        <a aria-label={'Visit posts by '+a.author.name} className="meta-el meta-avatar" href={'/author/'+a.author.slug}>
                          <img
                            loading="lazy"
                            decoding="async"
                            width="150"
                            height="150"
                            src={a.author.avatar || "/img/illustrations/rayan-author.png"}
                            className="photo avatar author-avatar"
                            alt={`${a.author.name} - ${a.author.job}`}
                          />
                        </a>
                        <div className="smeta-sec">
                          <div className="smeta-bottom meta-text">
                            <time className="updated-date" dateTime={a.updated.datetime}>
                              {a.updated.text}
                            </time>
                          </div>
                          <div className="p-meta">
                            <div className="meta-inner is-meta">
                              <div className="meta-el">
                                <a className="meta-author-url meta-author" href={'/author/'+a.author.slug}>
                                  {a.author.name}
                                </a>
                                {" "}
                                <span className="meta-label meta-job">
                                  {'- '+a.author.job}
                                </span>
                              </div>
                              <div className="meta-el meta-date">
                                <time className="date published" dateTime={a.published.datetime}>
                                  {a.published.text}
                                </time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ShareTop />
                    </div>
                  </div>
                </div>
                <div className="feat-caption meta-text">
                  <span className="caption-text meta-bold">
                    {a.imageCaption || a.title}
                  </span>
                </div>
              </div>
            </header>
            <div className="rb-s-container edge-padding">
              <div className="grid-container">
                <div className="s-ct">
                  <div className="s-ct-wrap has-lsl">
                    <div className="s-ct-inner">
                      <ShareLeft />
                      <div className="e-ct-outer">
                        {toc.length >= 3 && (
                          <nav className="article-toc" aria-label="Table of contents">
                            <p className="article-toc-title">In this article</p>
                            <ol>
                              {toc.map((t) => (
                                <li key={t.id}>
                                  <a href={"#" + t.id}>{t.text}</a>
                                </li>
                              ))}
                            </ol>
                          </nav>
                        )}
                        <div className="entry-content rbct clearfix is-highlight-shares" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
                        <EntryBottom />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-wrap single-sidebar">
                  <Sidebar />
                </div>
              </div>
            </div>
          </article>
          <RelatedLatest />
        </div>
      </main>
    </>
  );
}
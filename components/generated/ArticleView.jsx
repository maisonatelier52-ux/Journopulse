import ShareTop from "./ShareTop";
import ShareLeft from "./ShareLeft";
import Pagination from "./Pagination";
import EntryBottom from "./EntryBottom";
import Sidebar from "./Sidebar";
import RelatedLatest from "./RelatedLatest";

export default function ArticleView({ a }) {
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
                      <aside className="breadcrumb-wrap breadcrumb-navxt s-breadcrumb">
                        <div className="breadcrumb-inner" typeof="BreadcrumbList" vocab="https://schema.org/">
                          <span property="itemListElement" typeof="ListItem">
                            <a className="home" href="/" property="item" title="" typeof="WebPage">
                              <span property="name">
                                journopulse news
                              </span>
                            </a>
                            <meta content="1" property="position" />
                          </span>
                          {" "}&gt;{" "}
                          <span property="itemListElement" typeof="ListItem">
                            <a className="post-root post post-post" href="/" property="item" title="" typeof="WebPage">
                              <span property="name">
                                Blog
                              </span>
                            </a>
                            <meta content="2" property="position" />
                          </span>
                          {" "}&gt;{" "}
                          <span property="itemListElement" typeof="ListItem">
                            <a className="taxonomy category" href={a.categoryHref} property="item" title="" typeof="WebPage">
                              <span property="name">
                                {a.categoryName}
                              </span>
                            </a>
                            <meta content="3" property="position" />
                          </span>
                          {" "}&gt;{" "}
                          <span property="itemListElement" typeof="ListItem">
                            <span className="post post-post current-item" property="name">
                              {a.title}
                              <meta content={a.url} property="url" />
                              <meta content="4" property="position" />
                            </span>
                          </span>
                        </div>
                      </aside>
                    </div>
                    <div className="featured-lightbox-trigger" data-attribution={a.image.attribution} data-caption={a.image.caption} data-source={a.image.source}>
                      <img alt={a.image.alt} className="featured-img wp-post-image" decoding="async" height={a.image.height} loading="lazy" src={a.image.src} width={a.image.width} />
                    </div>
                  </div>
                  <div className="single-header-content light-scheme">
                    <div className="s-cats ecat-bg-4 ecat-size-big">
                      <div className="p-categories">
                        <a className="p-category category-id-13" href={a.categoryHref} rel="category">
                          {a.categoryName}
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
                        <a aria-label={'Visit posts by '+a.author.name} className="meta-el meta-avatar" href={'/author/'+a.author.slug} rel="nofollow">
                          <img loading="lazy" decoding="async" width="150" height="150" src={a.author.avatar} className="photo avatar" alt="" />
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
                        <div className="entry-content rbct clearfix is-highlight-shares" dangerouslySetInnerHTML={{ __html: a.bodyHtml }} />
                        <Pagination />
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

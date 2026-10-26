import ArticleCard from "@/components/ArticleCard";
import { allArticles, articlesByCategory } from "@/lib/articles";
import { CATEGORY_LABELS, CATEGORY_META } from "@/lib/categories";
import { formatDate } from "@/lib/authors";

const bg = (src, shade) => ({ backgroundImage: `${shade ? "linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)), " : ""}url('${src}')` });

// Data-driven category page: every card links to /{category}/{slug}, both on the image and on the headline.
export default function CategoryPage({ category }) {
  const meta = CATEGORY_META[category];
  const label = CATEGORY_LABELS[category];
  const list = articlesByCategory(category);
  const [main, ...rest] = list;
  const sides = rest.slice(0, 2);
  const grid = rest.slice(2);
  const more = grid.length ? [] : allArticles.filter((a) => a.category !== category).slice(0, 3);
  return (
    <>
      <div className="cate-sec-long-time-container">
        <header className="cate-sec-long-time-header">
          <div className="cate-sec-long-time-header-content">
            <div className="cate-sec-long-time-breadcrumb"><a href="/">JournoPulse</a> &gt; {label}</div>
            <h1 className="cate-sec-long-time-title">{meta.h1}</h1>
            <p className="cate-sec-long-time-intro">{meta.intro}</p>
            {category === "bancredito" && <p className="cate-sec-long-time-intro"><a href="/bancredito/latest"><strong>Read the Bancrédito latest news and timeline →</strong></a></p>}
          </div>
          <div className="cate-sec-long-time-header-img"></div>
        </header>
        {main && (
          <div className="cate-sec-long-time-grid">
            <div className="cate-sec-long-time-card cate-sec-long-time-main-card" style={bg(main.image.src)}>
              <a href={main.route} aria-label={main.title} style={{ position: "absolute", inset: 0, zIndex: 1 }}></a>
              <div className="cate-sec-long-time-card-content">
                <span className="cate-sec-long-time-badge">{label}</span>{" "}
                <a href={main.route}><h2 className="cate-sec-long-time-main-title">{main.title}</h2></a>
                <p style={{ fontSize: "14px", opacity: 0.9 }}>{main.tagline}</p>
                <div className="cate-sec-long-time-meta">{main.author.name} | {formatDate(main)}</div>
              </div>
            </div>
            {sides.map((a, i) => (
              <div key={a.route} className={`cate-sec-long-time-card cate-sec-long-time-side-card-${i + 1}`} style={bg(a.image.src, true)}>
                <a href={a.route} aria-label={a.title} style={{ position: "absolute", inset: 0, zIndex: 1 }}></a>
                <div className="cate-sec-long-time-card-content">
                  <a href={a.route}><h3 className="cate-sec-long-time-side-title">{a.title}</h3></a>
                  <div className="cate-sec-long-time-meta">{a.author.name} | {formatDate(a)}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="cate-sec-long-time-ad-label">- Advertisement -</div>
        <div className="cate-sec-long-time-banner cate-sec-long-time-banner-img">
          <img src="/img/ads/category-banner.webp" alt="Advertisement illustration" width="1200" height="150" loading="lazy" />
        </div>
      </div>
      <section className="cat-sec-grid-layout-section">
        <div className="cat-sec-grid-layout-header">
          <span className="cat-sec-grid-layout-header-bar"></span>
          <h2 className="cat-sec-grid-layout-header-title">{grid.length ? meta.grid : "More from JournoPulse"}</h2>
        </div>
        <div className="cat-sec-grid-layout-grid">
          {(grid.length ? grid : more).map((a) => <ArticleCard key={a.route} a={a} />)}
        </div>
      </section>
    </>
  );
}

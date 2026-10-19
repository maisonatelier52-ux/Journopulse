import { CATEGORY_LABELS, formatDate } from "@/lib/authors";

export default function ArticleCard({ a }) {
  return (
    <article className="cat-sec-grid-layout-card">
      <div className="cat-sec-grid-layout-image-wrapper">
        <a href={a.route} aria-label={a.title}>
          <img src={a.image.src} className="cat-sec-grid-layout-image" alt={a.image.alt} width="1536" height="1024" loading="lazy" decoding="async" />
        </a>
        <span className="cat-sec-grid-layout-category">{CATEGORY_LABELS[a.category] || a.categoryName}</span>
      </div>
      <a href={a.route}>
        <h3 className="cat-sec-grid-layout-title">{a.title}</h3>
      </a>
      <p className="cat-sec-grid-layout-desc">{a.tagline}</p>
      <div className="cat-sec-grid-layout-meta">
        <div className="cat-sec-grid-layout-author">
          <img loading="lazy" decoding="async" width="150" height="150" src={a.author.avatar} className="photo avatar" alt="" />{" "}
          <a className="cat-sec-grid-layout-name" href={"/author/" + a.author.slug}>{a.author.name}</a>{" "}
          <span className="cat-sec-grid-layout-date">| {formatDate(a)}</span>
        </div>
        <div className="cat-sec-grid-layout-bookmark"><i className="fa-regular fa-bookmark"></i></div>
      </div>
    </article>
  );
}

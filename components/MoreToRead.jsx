import ArticleCard from "@/components/ArticleCard";
import { allArticles } from "@/lib/articles";
import { CATEGORY_LABELS } from "@/lib/categories";
import { relatedArticles } from "@/lib/contentCore.mjs";

// Related stories: same category and shared headline vocabulary first, then newest. Never the current story.
export default function MoreToRead({ a }) {
  const picks = relatedArticles(a, allArticles, 3);
  return (
    <section className="more-to-read" aria-labelledby="more-to-read-title">
      <div className="more-to-read-head">
        <a className="more-to-read-business" href={"/" + a.category}>{CATEGORY_LABELS[a.category]}</a>
        <h2 id="more-to-read-title" className="more-to-read-title">More to Read</h2>
        <a className="more-to-read-explore" href={"/" + a.category}>Explore <i className="fa-solid fa-arrow-right"></i></a>
      </div>
      <div className="more-to-read-grid">
        {picks.map((p) => <ArticleCard key={p.route} a={p} />)}
      </div>
    </section>
  );
}

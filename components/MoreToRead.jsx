import ArticleCard from "@/components/ArticleCard";
import { allArticles } from "@/lib/articles";

export default function MoreToRead({ a }) {
  const same = allArticles.filter((x) => x.category === a.category && x.route !== a.route);
  const others = allArticles.filter((x) => x.category !== a.category);
  const picks = [...same, ...others].slice(0, 3);
  return (
    <section className="more-to-read" aria-labelledby="more-to-read-title">
      <div className="more-to-read-head">
        <a className="more-to-read-business" href="/">Business</a>
        <h2 id="more-to-read-title" className="more-to-read-title">More to Read</h2>
        <a className="more-to-read-explore" href="/">Explore <i className="fa-solid fa-arrow-right"></i></a>
      </div>
      <div className="more-to-read-grid">
        {picks.map((p) => <ArticleCard key={p.route} a={p} />)}
      </div>
    </section>
  );
}

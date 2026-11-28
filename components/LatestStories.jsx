import ArticleCard from "@/components/ArticleCard";
import { latestArticles } from "@/lib/articles";

// Homepage block rendered from the validated article data: newest stories first, by genuine publication time.
// It carries the homepage's single <h1>. The hand-built sections below it are labelled "Featured Stories".
export default function LatestStories({ limit = 6 }) {
  const items = latestArticles(limit);
  return (
    <section className="more-to-read home-latest" aria-labelledby="home-latest-title">
      <div className="more-to-read-head">
        <span className="more-to-read-business">JournoPulse</span>
        <h1 id="home-latest-title" className="more-to-read-title">Latest News: U.S., Puerto Rico, Business &amp; Courts</h1>
        <a className="more-to-read-explore" href="/rss.xml">RSS <i className="fa-solid fa-rss"></i></a>
      </div>
      <div className="more-to-read-grid">
        {items.map((a) => <ArticleCard key={a.route} a={a} />)}
      </div>
    </section>
  );
}

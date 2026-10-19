import SiteShell from "@/components/SiteShell";
import { getAuthors } from "@/lib/authors";

export const metadata = {
  title: "Authors - JournoPulse",
  description: "Meet the journalists and editors who write for JournoPulse.",
  alternates: { canonical: "https://www.journopulse.com/author" },
};

export default function AuthorsPage() {
  const authors = getAuthors();
  return (
    <SiteShell topFooter>
      <main className="site-wrap author-page">
        <section className="author-index">
          <h1 className="author-index-title">Our Authors</h1>
          <div className="author-index-grid">
            {authors.map((au) => (
              <a key={au.slug} className="author-index-card" href={"/author/" + au.slug}>
                <img src={au.avatar} alt={`Illustrated portrait of ${au.name}`} width="160" height="160" />
                <h2>{au.name}</h2>
                <p>{au.job}</p>
                <span>{au.articles.length} articles</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

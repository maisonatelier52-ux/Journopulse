import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import ArticleCard from "@/components/ArticleCard";
import { getAuthors, getAuthor, CATEGORY_LABELS } from "@/lib/authors";

export const dynamicParams = false;
const ORIGIN = "https://www.journopulse.com";

export function generateStaticParams() {
  return getAuthors().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const au = getAuthor(slug);
  if (!au) return {};
  const title = `${au.name} - Author at JournoPulse`;
  const description = au.bio || `Articles by ${au.name} on JournoPulse.`;
  return {
    title, description,
    alternates: { canonical: `${ORIGIN}/author/${au.slug}` },
    openGraph: { type: "profile", siteName: "JournoPulse", title, description, url: `${ORIGIN}/author/${au.slug}`, images: [{ url: ORIGIN + au.articles[0].image.src, width: 1536, height: 1024 }] },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const au = getAuthor(slug);
  if (!au) notFound();
  const cats = [...new Set(au.articles.map((a) => a.category))];
  const ld = { "@context": "https://schema.org", "@type": "Person", name: au.name, jobTitle: au.job, url: `${ORIGIN}/author/${au.slug}`, image: ORIGIN + au.avatar, worksFor: { "@type": "NewsMediaOrganization", name: "JournoPulse", url: ORIGIN } };
  return (
    <SiteShell topFooter>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <main className="site-wrap author-page">
        <section className="author-hero">
          <img className="author-hero-avatar" src={au.avatar} alt={`Illustrated portrait of ${au.name}`} width="256" height="256" />
          <div className="author-hero-body">
            <span className="author-hero-kicker">Author</span>
            <h1 className="author-hero-name">{au.name}</h1>
            <p className="author-hero-job">{au.job} at JournoPulse</p>
            {au.bio && <p className="author-hero-bio">{au.bio}</p>}
            <ul className="author-hero-stats">
              <li><strong>{au.articles.length}</strong> articles</li>
              <li><strong>{cats.length}</strong> sections</li>
            </ul>
            <div className="author-hero-cats">
              {cats.map((c) => <a key={c} href={"/" + c}>{CATEGORY_LABELS[c]}</a>)}
            </div>
          </div>
        </section>
        <section className="cat-sec-grid-layout-section">
          <div className="cat-sec-grid-layout-header">
            <span className="cat-sec-grid-layout-header-bar"></span>
            <h2 className="cat-sec-grid-layout-header-title">Latest from {au.name}</h2>
          </div>
          <div className="cat-sec-grid-layout-grid author-grid">
            {au.articles.map((a) => <ArticleCard key={a.route} a={a} />)}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

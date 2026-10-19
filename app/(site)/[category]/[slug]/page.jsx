import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import ArticleView from "@/components/generated/ArticleView";
import MoreToRead from "@/components/MoreToRead";
import { allArticles, getArticle } from "@/lib/articles";
import { metadataFor, JsonLd } from "@/lib/seo";
import TopicHubBox from "@/components/TopicHubBox";
import { pillarsForArticle } from "@/lib/pillars";

export const dynamicParams = false;

export function generateStaticParams() {
  return allArticles.map((a) => ({ category: a.category, slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  return metadataFor(`/${category}/${slug}`);
}

export default async function ArticlePage({ params }) {
  const { category, slug } = await params;
  const a = getArticle(category, slug);
  if (!a) notFound();
  return (
    <SiteShell topFooter>
      <JsonLd route={a.route} />
      <ArticleView a={a} />
      <TopicHubBox pillars={pillarsForArticle(a.route)} />
      <MoreToRead a={a} />
    </SiteShell>
  );
}

import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import CategoryView from "@/components/CategoryPage";
import { CATEGORY_ORDER } from "@/lib/categories";
import { metadataFor, JsonLd } from "@/lib/seo";
import { allArticles } from "@/lib/articles";
import TopicHubBox from "@/components/TopicHubBox";
import { allPillars } from "@/lib/pillars";

export const dynamicParams = false;

const HEADER_IMG = {
  bancredito: "bancreditointernationalbank", business: "trump-tariffs-us-stocks-plummet-ai-losers", fashion: "fashion-week-siriano-inaugural-collection-fantasy-surrealism",
  politics: "us-supreme-court-hear-exxon-suncor-bid-toss-boulders-climate-suit", puertorico: "basketball-hero-jose-piculin-ortiz-passes-away-at-mourned-in-p",
  sports: "world-cup-2026-what-to-know-where-to-watch-schedules-and-more", technology: "india-joins-us-effort-safe-technologies-supply-chains",
  us: "northeast-us-recovers-severe-storm-flight-delays-school-closur", world: "iran-us-strait-of-hormuz-conflict-limits-of-escalating-bombing",
};

function headerImage(category) {
  const prefix = HEADER_IMG[category];
  const art = allArticles.find((a) => a.slug.startsWith(prefix));
  return art ? art.image.src : "";
}

export function generateStaticParams() {
  return CATEGORY_ORDER.map((category) => ({ category }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  return metadataFor("/" + category);
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  if (!CATEGORY_ORDER.includes(category)) notFound();
  return (
    <SiteShell>
      <JsonLd route={"/" + category} />
      <style>{`.cate-sec-long-time-header-img{background-image:url('${headerImage(category)}')}`}</style>
      {category === "bancredito" && <TopicHubBox pillars={allPillars} />}
      <CategoryView category={category} />
    </SiteShell>
  );
}

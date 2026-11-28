import { allArticles } from "@/lib/articles";
import { buildNewsSitemapXml } from "@/lib/contentCore.mjs";

// Google News sitemap: only stories first published in the last 48 hours (computed per request, cached 10 minutes).
// Submit https://www.journopulse.com/news-sitemap.xml in Search Console alongside /sitemap.xml.
export const dynamic = "force-dynamic";

export function GET() {
  return new Response(buildNewsSitemapXml(allArticles, Date.now()), {
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, s-maxage=600, stale-while-revalidate=300" },
  });
}

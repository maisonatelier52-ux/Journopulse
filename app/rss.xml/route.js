import { allArticles } from "@/lib/articles";
import { buildRssXml } from "@/lib/contentCore.mjs";

export const dynamic = "force-static";

// Newest 50 indexable stories, genuine publication dates, no duplicates.
export function GET() {
  return new Response(buildRssXml(allArticles, 50), { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}

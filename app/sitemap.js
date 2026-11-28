import { allArticles } from "@/lib/articles";
import { getAuthors } from "@/lib/authors";
import { allPillars } from "@/lib/pillars";
import { LATEST_UPDATED } from "@/lib/bancreditoLatest";
import { buildSitemapEntries } from "@/lib/contentCore.mjs";

// Explicit registry of static pages. Nothing is derived from data/seo.json any more, so a stale
// metadata key can never leak into the sitemap. /search is intentionally absent (noindex).
export const STATIC_PAGES = [
  "/about", "/our-team", "/contact", "/editorial-policy", "/corrections-policy", "/right-of-reply", "/source-methodology",
  "/ownership", "/advertising-policy", "/privacy", "/terms", "/legal",
];

export default function sitemap() {
  return buildSitemapEntries({
    articles: allArticles,
    staticPages: STATIC_PAGES,
    authors: getAuthors(),
    pillars: allPillars,
    latestHub: LATEST_UPDATED,
  });
}
